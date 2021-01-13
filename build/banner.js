"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.banner = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = require("fs");
const version = fs_1.readFileSync('version.txt', 'utf8');
exports.banner = {
    asciiVersion: `
  ██████ ▄▄▄█████▓ ██▀███  ▓█████ ▓█████▄▄▄█████▓ ███▄ ▄███▓▓█████  ██▀███   ▄████▄   ██░ ██  ▄▄▄       ███▄    █ ▄▄▄█████▓
▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▓█   ▀ ▓█   ▀▓  ██▒ ▓▒▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒██▀ ▀█  ▓██░ ██▒▒████▄     ██ ▀█   █ ▓  ██▒ ▓▒
░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒███   ▒███  ▒ ▓██░ ▒░▓██    ▓██░▒███   ▓██ ░▄█ ▒▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒ ▓██░ ▒░
  ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ▒▓█  ▄ ▒▓█  ▄░ ▓██▓ ░ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░ ▓██▓ ░
▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░▒████▒░▒████▒ ▒██▒ ░ ▒██▒   ░██▒░▒████▒░██▓ ▒██▒▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░  ▒██▒ ░
▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░░ ▒░ ░░░ ▒░ ░ ▒ ░░   ░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒   ▒ ░░
░ ░▒  ░ ░    ░      ░▒ ░ ▒░ ░ ░  ░ ░ ░  ░   ░    ░  ░      ░ ░ ░  ░  ░▒ ░ ▒░  ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░    ░
░  ░  ░    ░        ░░   ░    ░      ░    ░      ░      ░      ░     ░░   ░ ░         ░  ░░ ░  ░   ▒      ░   ░ ░   ░
	  ░              ░        ░  ░   ░  ░               ░      ░  ░   ░     ░ ░       ░  ░  ░      ░  ░         ░
${version}`,
    render(ascii, hexColor) {
        return chalk_1.default
            .hex(hexColor)
            .bold(ascii ? this.asciiVersion : this.stringVersion);
    },
    stringVersion: `ＳＴＲＥＥＴＭＥＲＣＨＡＮＴ
${version}`
};
//# sourceMappingURL=banner.js.map