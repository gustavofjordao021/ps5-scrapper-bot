"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTwilioMessage = void 0;
const logger_1 = require("../logger");
const twilio_1 = require("twilio");
const config_1 = require("../config");
const twilio = config_1.config.notifications.twilio;
let client;
if (twilio.accountSid && twilio.authToken) {
    client = new twilio_1.Twilio(twilio.accountSid, twilio.authToken);
}
function sendTwilioMessage(link, store) {
    if (client) {
        logger_1.logger.debug('↗ sending twilio message');
        (async () => {
            const givenUrl = link.cartUrl ? link.cartUrl : link.url;
            const message = `${logger_1.Print.inStock(link, store)}\n${givenUrl}`;
            try {
                await client.messages.create({
                    body: message,
                    from: twilio.from,
                    to: twilio.to
                });
                logger_1.logger.info('✔ twilio message sent');
            }
            catch (error) {
                logger_1.logger.error("✖ couldn't send twilio message", error);
            }
        })();
    }
}
exports.sendTwilioMessage = sendTwilioMessage;
//# sourceMappingURL=twilio.js.map