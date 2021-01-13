"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_1 = require("../notification");
const link = {
    brand: 'test:brand',
    cartUrl: 'https://www.example.com/cartUrl',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://www.example.com/url'
};
const store = {
    currency: '',
    labels: {
        inStock: {
            container: 'test:container',
            text: ['test:text']
        }
    },
    links: [link],
    name: 'test:name'
};
/**
 * Send test email.
 */
notification_1.sendNotification(link, store);
//# sourceMappingURL=notification-test.js.map