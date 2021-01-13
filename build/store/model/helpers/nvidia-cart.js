"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvidiaCart = void 0;
const nvidia_api_1 = require("../nvidia-api");
const util_1 = require("../../../util");
const config_1 = require("../../../config");
const logger_1 = require("../../../logger");
const open_1 = __importDefault(require("open"));
class NvidiaCart {
    constructor(browser) {
        this.isKeepAlive = false;
        this.sessionToken = null;
        this.browser = browser;
    }
    keepAlive() {
        if (this.isKeepAlive) {
            return;
        }
        const callback = async () => {
            if (!this.isKeepAlive) {
                return;
            }
            await this.refreshSessionToken();
            setTimeout(callback, config_1.config.nvidia.sessionTtl);
        };
        this.isKeepAlive = true;
        void callback();
    }
    get fallbackCartUrl() {
        return `https://www.nvidia.com/${this.regionInfo.siteLocale}/geforce/`;
    }
    get regionInfo() {
        const country = config_1.config.store.country.toLowerCase();
        const regionInfo = nvidia_api_1.regionInfos.get(country);
        if (!regionInfo) {
            throw new Error(`Unknown country ${country}`);
        }
        return regionInfo;
    }
    get sessionUrl() {
        return `https://store.nvidia.com/store/nvidia/SessionToken?format=json&locale=${this.regionInfo.drLocale}`;
    }
    async addToCard(productId, name) {
        let cartUrl;
        logger_1.logger.info(`🚀🚀🚀 [nvidia] ${name}, starting auto add to cart 🚀🚀🚀`);
        try {
            logger_1.logger.info(`🚀🚀🚀 [nvidia] ${name}, adding to cart 🚀🚀🚀`);
            let lastError;
            /* eslint-disable no-await-in-loop */
            for (let i = 0; i < config_1.config.nvidia.addToCardAttempts; i++) {
                try {
                    cartUrl = await this.addToCartAndGetLocationRedirect(productId);
                    break;
                }
                catch (error) {
                    logger_1.logger.error(`✖ [nvidia] ${name} could not automatically add to cart, attempt ${i + 1} of ${config_1.config.nvidia.addToCardAttempts}`, error);
                    logger_1.logger.debug(error);
                    lastError = error;
                }
            }
            /* eslint-enable no-await-in-loop */
            if (!cartUrl) {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw lastError;
            }
            logger_1.logger.info(`🚀🚀🚀 [nvidia] ${name}, opening checkout page 🚀🚀🚀`);
            logger_1.logger.info(cartUrl);
            await open_1.default(cartUrl);
        }
        catch (error) {
            logger_1.logger.error(`✖ [nvidia] ${name} could not automatically add to cart, opening page`, error);
            cartUrl = this.fallbackCartUrl;
            await open_1.default(cartUrl);
        }
        return cartUrl;
    }
    async getSessionToken() {
        if (!this.sessionToken) {
            await this.refreshSessionToken();
        }
        if (!this.sessionToken) {
            throw new Error('Failed to create the session_token');
        }
        return this.sessionToken;
    }
    async refreshSessionToken() {
        logger_1.logger.debug('ℹ [nvidia] refreshing session token');
        try {
            const result = await util_1.usingResponse(this.browser, this.sessionUrl, async (response) => {
                return response === null || response === void 0 ? void 0 : response.json();
            });
            if (typeof result !== 'object' ||
                result === null ||
                !('session_token' in result)) {
                throw new Error('malformed response');
            }
            this.sessionToken = result.session_token;
            logger_1.logger.debug(`ℹ [nvidia] session_token=${result.session_token}`);
        }
        catch (error) {
            const message = typeof error === 'object'
                ? error.message
                : error;
            logger_1.logger.error(`✖ [nvidia] ${message}`);
        }
    }
    async addToCartAndGetLocationRedirect(productId) {
        const url = 'https://api-prod.nvidia.com/direct-sales-shop/DR/add-to-cart';
        const sessionToken = await this.getSessionToken();
        logger_1.logger.info(`ℹ [nvidia] session_token=${sessionToken}`);
        const locationData = await util_1.usingPage(this.browser, async (page) => {
            page.removeAllListeners('request');
            await page.setRequestInterception(true);
            page.on('request', (interceptedRequest) => {
                void interceptedRequest.continue({
                    headers: {
                        ...interceptedRequest.headers(),
                        'content-type': 'application/json',
                        nvidia_shop_id: sessionToken
                    },
                    method: 'POST',
                    postData: JSON.stringify({
                        products: [{ productId, quantity: 1 }]
                    })
                });
            });
            const response = await page.goto(url, { waitUntil: 'networkidle0' });
            if (response === null) {
                throw new Error('NvidiaAddToCartUnavailable');
            }
            return response.json();
        });
        return locationData.location;
    }
}
exports.NvidiaCart = NvidiaCart;
//# sourceMappingURL=nvidia-cart.js.map