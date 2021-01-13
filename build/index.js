"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config"); // Needs to be loaded first
const web_1 = require("./web"); // eslint-disable-line sort-imports
const util_1 = require("./util");
const logger_1 = require("./logger");
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const model_1 = require("./store/model");
const store_1 = require("./store");
puppeteer_extra_1.default.use(puppeteer_extra_plugin_stealth_1.default());
let browser;
/**
 * Starts the bot.
 */
async function main() {
    const args = [];
    // Skip Chromium Linux Sandbox
    // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
    if (config_1.config.browser.isTrusted) {
        args.push('--no-sandbox');
        args.push('--disable-setuid-sandbox');
    }
    // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#tips
    // https://stackoverflow.com/questions/48230901/docker-alpine-with-node-js-and-chromium-headless-puppeter-failed-to-launch-c
    if (config_1.config.docker) {
        args.push('--disable-dev-shm-usage');
        args.push('--no-sandbox');
        args.push('--disable-setuid-sandbox');
        args.push('--headless');
        args.push('--disable-gpu');
    }
    // Add the address of the proxy server if defined
    if (config_1.config.proxy.address) {
        args.push(`--proxy-server=${config_1.config.proxy.protocol}://${config_1.config.proxy.address}:${config_1.config.proxy.port}`);
    }
    if (args.length > 0) {
        logger_1.logger.info('ℹ puppeteer config: ', args);
    }
    await stop();
    browser = await puppeteer_extra_1.default.launch({
        args,
        defaultViewport: {
            height: config_1.config.page.height,
            width: config_1.config.page.width
        },
        headless: config_1.config.browser.isHeadless
    });
    config_1.config.browser.userAgent = await browser.userAgent();
    for (const store of model_1.storeList.values()) {
        logger_1.logger.debug('store links', { meta: { links: store.links } });
        if (store.setupAction !== undefined) {
            store.setupAction(browser);
        }
        setTimeout(store_1.tryLookupAndLoop, util_1.getSleepTime(store), browser, store);
    }
    await web_1.startAPIServer();
}
async function stop() {
    await web_1.stopAPIServer();
    if (browser) {
        // Use temporary swap variable to avoid any race condition
        const browserTemporary = browser;
        browser = undefined;
        await browserTemporary.close();
    }
}
async function stopAndExit() {
    await stop();
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(0);
}
/**
 * Will continually run until user interferes.
 */
async function loopMain() {
    try {
        await main();
    }
    catch (error) {
        logger_1.logger.error('✖ something bad happened, resetting streetmerchant in 5 seconds', error);
        setTimeout(loopMain, 5000);
    }
}
void loopMain();
process.on('SIGINT', stopAndExit);
process.on('SIGQUIT', stopAndExit);
process.on('SIGTERM', stopAndExit);
//# sourceMappingURL=index.js.map