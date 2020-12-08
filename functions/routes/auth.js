const fs = require("fs");
const os = require("os");
const path = require("path");
const BusBoy = require("busboy");
const config = require("../util/config");
const express = require("express");
const firebase = require("firebase");
const routeGuard = require("../util/routeGuard");
const { admin, db } = require("../util/admin");

const router = express.Router();
firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");

//POST User login
router.post("/login", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((error) => {
      console.error(error);
      return res
        .status(403)
        .json({ general: "Wrong credentials, please try again." });
    });
});

//POST User signup
router.post("/signup", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    country: req.body.country,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    username: req.body.username,
  };

  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) return response.status(400).json(errors);

  let token, userId;
  db.doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({
          username:
            "This username is already in use. Please provide another one.",
        });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      const userCredentials = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        phoneNumber: newUser.phoneNumber,
        country: newUser.country,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db.doc(`/users/${newUser.username}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email already in use" });
      } else {
        return res
          .status(500)
          .json({ data: "Something went wrong, please try again" });
      }
    });
});

//GET Upload profile picture
router.get("/signup/image", routeGuard, (req, res) => {
  const busboy = new BusBoy({ headers: req.headers });
  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== "image/png" && mimetype !== "image/jpeg") {
      return res.status(400).json({ error: "Wrong file type submited" });
    }
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    imageFileName = `${req.user.username}.${imageExtension}`;
    const filePath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filePath, mimetype };
    file.pipe(fs.createWriteStream(filePath));
  });
  const bucket = admin.storage().bucket();
  bucket
    .file(`${imageFileName}`)
    .delete()
    .then(() => {
      return;
    })
    .catch((error) => {
      return;
    });
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filePath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${req.user.username}`).update({
          imageUrl,
        });
      })
      .then(() => {
        return res.status(200).json({ message: "Image uploaded successfully" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: error.code });
      });
  });
  busboy.end(req.rawBody);
});

//GET Get all user details
router.get("/profile", routeGuard, (req, res) => {
  let userData = {};
  db.doc(`/users/${req.user.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.userCredentials = doc.data();
        return res.status(200).json(userData);
      }
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ error: error.code });
    });
});

//POST Update user details
router.post("/profile/update", routeGuard, (req, res) => {
  let document = db.collection("users").doc(`${req.user.username}`);
  document
    .update(req.body)
    .then(() => {
      res.status(200).json({ message: "Profile updated successfully." });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        message: "Cannot update the profile.",
      });
    });
});

module.exports = router;
