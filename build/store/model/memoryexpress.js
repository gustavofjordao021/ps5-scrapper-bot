"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryExpress = void 0;
exports.MemoryExpress = {
    currency: '$',
    labels: {
        maxPrice: {
            container: '#ProductPricing .GrandTotal.c-capr-pricing__grand-total > div',
            euroFormat: false
        },
        outOfStock: {
            container: '.c-capr-inventory-selector__details-online .c-capr-inventory-store__availability',
            text: ['Out of Stock', 'Backorder']
        }
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.memoryexpress.com/Products/MX79473'
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114969'
        },
        {
            brand: 'msi',
            model: 'ventus 2x oc',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114970'
        },
        {
            brand: 'asus',
            model: 'dual oc',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114818'
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114786'
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114819'
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114923'
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114927'
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114926'
        },
        {
            brand: 'evga',
            model: 'ftw3 ultra',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00115013'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114925'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc pro',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114924'
        },
        {
            brand: 'evga',
            model: 'xc gaming',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00115014'
        },
        {
            brand: 'asus',
            model: 'ko',
            series: '3060ti',
            url: 'https://www.memoryexpress.com/Products/MX00114888'
        },
        {
            brand: 'amd',
            model: '5950x',
            series: 'ryzen5950',
            url: 'https://www.memoryexpress.com/Products/MX00114450'
        },
        {
            brand: 'amd',
            model: '5900x',
            series: 'ryzen5900',
            url: 'https://www.memoryexpress.com/Products/MX00114451'
        },
        {
            brand: 'amd',
            model: '5800x',
            series: 'ryzen5800',
            url: 'https://www.memoryexpress.com/Products/MX00114452'
        },
        {
            brand: 'amd',
            model: '5600x',
            series: 'ryzen5600',
            url: 'https://www.memoryexpress.com/Products/MX00114455'
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114687'
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00113955'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00113954'
        },
        {
            brand: 'evga',
            model: 'xc3 black',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114094'
        },
        {
            brand: 'evga',
            model: 'xc3',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114095'
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114003'
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114313'
        },
        {
            brand: 'evga',
            model: 'xc3 ultra',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00113972'
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00113956'
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00113957'
        },
        {
            brand: 'evga',
            model: 'ftw3 ultra',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114024'
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114312'
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114092'
        },
        {
            brand: 'gigabyte',
            model: 'aorus xtreme',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114404'
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00115134'
        },
        {
            brand: 'msi',
            model: 'suprim x',
            series: '3080',
            url: 'https://www.memoryexpress.com/Products/MX00114907'
        },
        {
            brand: 'asus',
            model: 'dual oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114566'
        },
        {
            brand: 'asus',
            model: 'ko',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114785'
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114560'
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114567'
        },
        {
            brand: 'evga',
            model: 'ftw3 ultra',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114607'
        },
        {
            brand: 'evga',
            model: 'xc3 black',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114605'
        },
        {
            brand: 'evga',
            model: 'xc3 ultra',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114606'
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114688'
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114407'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114405'
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114689'
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114447'
        },
        {
            brand: 'msi',
            model: 'ventus 2x oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114448'
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3070',
            url: 'https://www.memoryexpress.com/Products/MX00114449'
        },
        // TODO: uncomment this when #1555 is merged
        /* {
            brand: 'asus',
            model: 'ekwb',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00115135'
        }, */
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114093'
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00115133'
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114001'
        },
        {
            brand: 'evga',
            model: 'ftw3',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114315'
        },
        {
            brand: 'evga',
            model: 'ftw3 ultra',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114155'
        },
        {
            brand: 'evga',
            model: 'xc3',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114153'
        },
        {
            brand: 'evga',
            model: 'xc3 ultra',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114154'
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114401'
        },
        {
            brand: 'gigabyte',
            model: 'aorus xtreme',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114397'
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114686'
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00113953'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00113952'
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114685'
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00113959'
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00113958'
        },
        {
            brand: 'msi',
            model: 'suprim x',
            series: '3090',
            url: 'https://www.memoryexpress.com/Products/MX00114908'
        },
        {
            brand: 'sapphire',
            model: 'pulse',
            series: 'rx6800xt',
            url: 'https://www.memoryexpress.com/Products/MX00115124'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: 'rx6800xt',
            url: 'https://www.memoryexpress.com/Products/MX00115048'
        },
        {
            brand: 'xfx',
            model: 'merc',
            series: 'rx6800xt',
            url: 'https://www.memoryexpress.com/Products/MX00114996'
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: 'rx6800',
            url: 'https://www.memoryexpress.com/Products/MX00114938'
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: 'rx6800',
            url: 'https://www.memoryexpress.com/Products/MX00114937'
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: 'rx6800',
            url: 'https://www.memoryexpress.com/Products/MX00115049'
        },
        {
            brand: 'sapphire',
            model: 'nitro+',
            series: 'rx6800',
            url: 'https://www.memoryexpress.com/Products/MX00115123'
        },
        {
            brand: 'xfx',
            model: 'merc',
            series: 'rx6800',
            url: 'https://www.memoryexpress.com/Products/MX00114997'
        },
        {
            brand: 'xfx',
            model: 'merc',
            series: 'rx6900xt',
            url: 'https://www.memoryexpress.com/Products/MX00115051'
        }
    ],
    name: 'memoryexpress',
    waitUntil: 'domcontentloaded'
};
//# sourceMappingURL=memoryexpress.js.map