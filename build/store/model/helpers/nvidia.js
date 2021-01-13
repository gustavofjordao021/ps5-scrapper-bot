"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLinks = exports.generateOpenCartAction = exports.generateSetupAction = void 0;
const nvidia_api_1 = require("../nvidia-api");
const nvidia_cart_1 = require("./nvidia-cart");
const config_1 = require("../../../config");
const timestamp_url_parameter_1 = require("../../timestamp-url-parameter");
function getRegionInfo() {
    let country = config_1.config.store.country.toLowerCase();
    if (!nvidia_api_1.regionInfos.has(country)) {
        country = 'usa';
    }
    const regionInfo = nvidia_api_1.regionInfos.get(country);
    if (!regionInfo) {
        throw new Error(`LogicException could not retrieve region info for ${country}`);
    }
    return regionInfo;
}
function nvidiaStockUrl(id, drLocale, currency) {
    return (`https://api-prod.nvidia.com/direct-sales-shop/DR/products/${drLocale}/${currency}/${id}?` +
        timestamp_url_parameter_1.timestampUrlParameter().slice(1));
}
let cart;
function generateSetupAction() {
    return async (browser) => {
        cart = new nvidia_cart_1.NvidiaCart(browser);
        if (config_1.config.browser.open) {
            cart.keepAlive();
        }
    };
}
exports.generateSetupAction = generateSetupAction;
function generateOpenCartAction(id, cardName) {
    return async () => {
        const url = await cart.addToCard(id, cardName);
        return url;
    };
}
exports.generateOpenCartAction = generateOpenCartAction;
function generateLinks() {
    const { drLocale, fe3080Id, fe3090Id, fe2060SuperId, currency } = getRegionInfo();
    const links = [];
    if (fe2060SuperId) {
        links.push({
            brand: 'test:brand',
            model: 'test:model',
            openCartAction: generateOpenCartAction(fe2060SuperId, 'TEST CARD debug'),
            series: 'test:series',
            url: nvidiaStockUrl(fe2060SuperId, drLocale, currency)
        });
    }
    if (fe3080Id) {
        links.push({
            brand: 'nvidia',
            model: 'founders edition',
            openCartAction: generateOpenCartAction(fe3080Id, 'nvidia founders edition 3080'),
            series: '3080',
            url: nvidiaStockUrl(fe3080Id, drLocale, currency)
        });
    }
    if (fe3090Id) {
        links.push({
            brand: 'nvidia',
            model: 'founders edition',
            openCartAction: generateOpenCartAction(fe3090Id, 'nvidia founders edition 3090'),
            series: '3090',
            url: nvidiaStockUrl(fe3090Id, drLocale, currency)
        });
    }
    return links;
}
exports.generateLinks = generateLinks;
//# sourceMappingURL=nvidia.js.map