"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStores = exports.getAllModels = exports.getAllSeries = exports.getAllBrands = exports.updateStores = exports.storeList = void 0;
const config_1 = require("../../config");
const acompc_1 = require("./acompc");
const adorama_1 = require("./adorama");
const alternate_1 = require("./alternate");
const alternate_nl_1 = require("./alternate-nl");
const amazon_1 = require("./amazon");
const amazon_ca_1 = require("./amazon-ca");
const amazon_de_1 = require("./amazon-de");
const amazon_de_warehouse_1 = require("./amazon-de-warehouse");
const amazon_es_1 = require("./amazon-es");
const amazon_fr_1 = require("./amazon-fr");
const amazon_it_1 = require("./amazon-it");
const amazon_nl_1 = require("./amazon-nl");
const amazon_uk_1 = require("./amazon-uk");
const amd_1 = require("./amd");
const amd_ca_1 = require("./amd-ca");
const amd_de_1 = require("./amd-de");
const amd_it_1 = require("./amd-it");
const amd_uk_1 = require("./amd-uk");
const antonline_1 = require("./antonline");
const argos_1 = require("./argos");
const argos_ie_1 = require("./argos-ie");
const aria_1 = require("./aria");
const arlt_1 = require("./arlt");
const asus_1 = require("./asus");
const asus_de_1 = require("./asus-de");
const awd_1 = require("./awd");
const azerty_1 = require("./azerty");
const bandh_1 = require("./bandh");
const bestbuy_1 = require("./bestbuy");
const bestbuy_ca_1 = require("./bestbuy-ca");
const box_1 = require("./box");
const bpctech_1 = require("./bpctech");
const canadacomputers_1 = require("./canadacomputers");
const caseking_1 = require("./caseking");
const ccl_1 = require("./ccl");
const centrecom_1 = require("./centrecom");
const comet_1 = require("./comet");
const computeruniverse_1 = require("./computeruniverse");
const coolblue_1 = require("./coolblue");
const coolmod_1 = require("./coolmod");
const corsair_1 = require("./corsair");
const cpl_1 = require("./cpl");
const currys_1 = require("./currys");
const cyberport_1 = require("./cyberport");
const ebgames_1 = require("./ebgames");
const ebuyer_1 = require("./ebuyer");
const elcorteingles_1 = require("./elcorteingles");
const eprice_1 = require("./eprice");
const equippr_1 = require("./equippr");
const euronics_1 = require("./euronics");
const euronics_de_1 = require("./euronics-de");
const evga_1 = require("./evga");
const evga_eu_1 = require("./evga-eu");
const expert_1 = require("./expert");
const futurex_1 = require("./futurex");
const galaxus_1 = require("./galaxus");
const game_1 = require("./game");
const gamestop_1 = require("./gamestop");
const gamestop_de_1 = require("./gamestop-de");
const gamestop_ie_1 = require("./gamestop-ie");
const harveynorman_ie_1 = require("./harveynorman-ie");
const johnlewis_1 = require("./johnlewis");
const kabum_1 = require("./kabum");
const mediamarkt_1 = require("./mediamarkt");
const medimax_1 = require("./medimax");
const megekko_1 = require("./megekko");
const memoryexpress_1 = require("./memoryexpress");
const microcenter_1 = require("./microcenter");
const mindfactory_1 = require("./mindfactory");
const mwave_1 = require("./mwave");
const newegg_1 = require("./newegg");
const newegg_ca_1 = require("./newegg-ca");
const notebooksbilliger_1 = require("./notebooksbilliger");
const novatech_1 = require("./novatech");
const nvidia_1 = require("./nvidia");
const nvidia_api_1 = require("./nvidia-api");
const officedepot_1 = require("./officedepot");
const otto_1 = require("./otto");
const overclockers_1 = require("./overclockers");
const pccomponentes_1 = require("./pccomponentes");
const pcking_1 = require("./pcking");
const pccg_1 = require("./pccg");
const playstation_1 = require("./playstation");
const pny_1 = require("./pny");
const proshop_de_1 = require("./proshop-de");
const proshop_dk_1 = require("./proshop-dk");
const saturn_1 = require("./saturn");
const scan_1 = require("./scan");
const scorptec_1 = require("./scorptec");
const shopto_1 = require("./shopto");
const smythstoys_1 = require("./smythstoys");
const smythstoys_ie_1 = require("./smythstoys-ie");
const spielegrotte_1 = require("./spielegrotte");
const target_1 = require("./target");
const tesco_ie_1 = require("./tesco-ie");
const topachat_1 = require("./topachat");
const toysrus_1 = require("./toysrus");
const umart_1 = require("./umart");
const unieuro_1 = require("./unieuro");
const very_1 = require("./very");
const vsgamers_1 = require("./vsgamers");
const vuugo_1 = require("./vuugo");
const walmart_1 = require("./walmart");
const walmart_ca_1 = require("./walmart-ca");
const wipoid_1 = require("./wipoid");
const xbox_1 = require("./xbox");
const zotac_1 = require("./zotac");
const logger_1 = require("../../logger");
exports.storeList = new Map([
    [acompc_1.AComPC.name, acompc_1.AComPC],
    [adorama_1.Adorama.name, adorama_1.Adorama],
    [alternate_1.Alternate.name, alternate_1.Alternate],
    [alternate_nl_1.AlternateNL.name, alternate_nl_1.AlternateNL],
    [amazon_1.Amazon.name, amazon_1.Amazon],
    [amazon_ca_1.AmazonCa.name, amazon_ca_1.AmazonCa],
    [amazon_de_1.AmazonDe.name, amazon_de_1.AmazonDe],
    [amazon_de_warehouse_1.AmazonDeWarehouse.name, amazon_de_warehouse_1.AmazonDeWarehouse],
    [amazon_es_1.AmazonEs.name, amazon_es_1.AmazonEs],
    [amazon_fr_1.AmazonFr.name, amazon_fr_1.AmazonFr],
    [amazon_nl_1.AmazonNl.name, amazon_nl_1.AmazonNl],
    [amazon_uk_1.AmazonUk.name, amazon_uk_1.AmazonUk],
    [amazon_it_1.AmazonIt.name, amazon_it_1.AmazonIt],
    [amd_1.Amd.name, amd_1.Amd],
    [amd_ca_1.AmdCa.name, amd_ca_1.AmdCa],
    [amd_de_1.AmdDe.name, amd_de_1.AmdDe],
    [amd_it_1.AmdIt.name, amd_it_1.AmdIt],
    [amd_uk_1.AmdUk.name, amd_uk_1.AmdUk],
    [antonline_1.AntOnline.name, antonline_1.AntOnline],
    [argos_1.Argos.name, argos_1.Argos],
    [argos_ie_1.ArgosIE.name, argos_1.Argos],
    [aria_1.Aria.name, aria_1.Aria],
    [arlt_1.Arlt.name, arlt_1.Arlt],
    [asus_1.Asus.name, asus_1.Asus],
    [asus_de_1.AsusDe.name, asus_de_1.AsusDe],
    [awd_1.Awd.name, awd_1.Awd],
    [azerty_1.Azerty.name, azerty_1.Azerty],
    [bandh_1.BAndH.name, bandh_1.BAndH],
    [bestbuy_1.BestBuy.name, bestbuy_1.BestBuy],
    [bestbuy_ca_1.BestBuyCa.name, bestbuy_ca_1.BestBuyCa],
    [box_1.Box.name, box_1.Box],
    [bpctech_1.Bpctech.name, bpctech_1.Bpctech],
    [caseking_1.Caseking.name, caseking_1.Caseking],
    [canadacomputers_1.CanadaComputers.name, canadacomputers_1.CanadaComputers],
    [ccl_1.Ccl.name, ccl_1.Ccl],
    [centrecom_1.Centrecom.name, centrecom_1.Centrecom],
    [comet_1.Comet.name, comet_1.Comet],
    [computeruniverse_1.Computeruniverse.name, computeruniverse_1.Computeruniverse],
    [coolblue_1.Coolblue.name, coolblue_1.Coolblue],
    [coolmod_1.Coolmod.name, coolmod_1.Coolmod],
    [corsair_1.Corsair.name, corsair_1.Corsair],
    [cpl_1.Cpl.name, cpl_1.Cpl],
    [currys_1.Currys.name, currys_1.Currys],
    [cyberport_1.Cyberport.name, cyberport_1.Cyberport],
    [ebgames_1.EbGames.name, ebgames_1.EbGames],
    [ebuyer_1.Ebuyer.name, ebuyer_1.Ebuyer],
    [elcorteingles_1.Elcorteingles.name, elcorteingles_1.Elcorteingles],
    [eprice_1.Eprice.name, eprice_1.Eprice],
    [equippr_1.Equippr.name, equippr_1.Equippr],
    [euronics_1.Euronics.name, euronics_1.Euronics],
    [euronics_de_1.EuronicsDE.name, euronics_de_1.EuronicsDE],
    [evga_1.Evga.name, evga_1.Evga],
    [evga_eu_1.EvgaEu.name, evga_eu_1.EvgaEu],
    [expert_1.Expert.name, expert_1.Expert],
    [futurex_1.Futurex.name, futurex_1.Futurex],
    [galaxus_1.Galaxus.name, galaxus_1.Galaxus],
    [game_1.Game.name, game_1.Game],
    [gamestop_1.Gamestop.name, gamestop_1.Gamestop],
    [gamestop_de_1.GamestopDE.name, gamestop_de_1.GamestopDE],
    [gamestop_ie_1.GamestopIE.name, gamestop_ie_1.GamestopIE],
    [harveynorman_ie_1.HarveyNormanIE.name, harveynorman_ie_1.HarveyNormanIE],
    [johnlewis_1.JohnLewis.name, johnlewis_1.JohnLewis],
    [kabum_1.Kabum.name, kabum_1.Kabum],
    [mediamarkt_1.Mediamarkt.name, mediamarkt_1.Mediamarkt],
    [medimax_1.Medimax.name, medimax_1.Medimax],
    [megekko_1.Megekko.name, megekko_1.Megekko],
    [memoryexpress_1.MemoryExpress.name, memoryexpress_1.MemoryExpress],
    [microcenter_1.MicroCenter.name, microcenter_1.MicroCenter],
    [mindfactory_1.Mindfactory.name, mindfactory_1.Mindfactory],
    [mwave_1.Mwave.name, mwave_1.Mwave],
    [newegg_1.Newegg.name, newegg_1.Newegg],
    [newegg_ca_1.NeweggCa.name, newegg_ca_1.NeweggCa],
    [notebooksbilliger_1.Notebooksbilliger.name, notebooksbilliger_1.Notebooksbilliger],
    [novatech_1.Novatech.name, novatech_1.Novatech],
    [nvidia_1.Nvidia.name, nvidia_1.Nvidia],
    [nvidia_api_1.NvidiaApi.name, nvidia_api_1.NvidiaApi],
    [officedepot_1.OfficeDepot.name, officedepot_1.OfficeDepot],
    [otto_1.Otto.name, otto_1.Otto],
    [overclockers_1.Overclockers.name, overclockers_1.Overclockers],
    [pccg_1.Pccg.name, pccg_1.Pccg],
    [pcking_1.PCKing.name, pcking_1.PCKing],
    [pccomponentes_1.PCComponentes.name, pccomponentes_1.PCComponentes],
    [playstation_1.PlayStation.name, playstation_1.PlayStation],
    [pny_1.Pny.name, pny_1.Pny],
    [proshop_de_1.ProshopDE.name, proshop_de_1.ProshopDE],
    [proshop_dk_1.ProshopDK.name, proshop_dk_1.ProshopDK],
    [saturn_1.Saturn.name, saturn_1.Saturn],
    [scan_1.Scan.name, scan_1.Scan],
    [scorptec_1.Scorptec.name, scorptec_1.Scorptec],
    [shopto_1.ShopTo.name, shopto_1.ShopTo],
    [smythstoys_ie_1.SmythsToysIE.name, smythstoys_ie_1.SmythsToysIE],
    [smythstoys_1.SmythsToys.name, smythstoys_1.SmythsToys],
    [spielegrotte_1.Spielegrotte.name, spielegrotte_1.Spielegrotte],
    [target_1.Target.name, target_1.Target],
    [tesco_ie_1.TescoIE.name, tesco_ie_1.TescoIE],
    [topachat_1.TopAchat.name, topachat_1.TopAchat],
    [toysrus_1.ToysRUs.name, toysrus_1.ToysRUs],
    [umart_1.Umart.name, umart_1.Umart],
    [unieuro_1.Unieuro.name, unieuro_1.Unieuro],
    [very_1.Very.name, very_1.Very],
    [vsgamers_1.VsGamers.name, vsgamers_1.VsGamers],
    [vuugo_1.Vuugo.name, vuugo_1.Vuugo],
    [walmart_1.Walmart.name, walmart_1.Walmart],
    [walmart_ca_1.WalmartCa.name, walmart_ca_1.WalmartCa],
    [wipoid_1.Wipoid.name, wipoid_1.Wipoid],
    [xbox_1.Xbox.name, xbox_1.Xbox],
    [zotac_1.Zotac.name, zotac_1.Zotac]
]);
const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();
function filterBrandsSeriesModels() {
    brands.clear();
    series.clear();
    models.clear();
    for (const store of exports.storeList.values()) {
        for (const link of store.links) {
            brands.add(link.brand);
            series.add(link.series);
            models.add(link.model);
        }
        if (store.minPageSleep === undefined) {
            store.minPageSleep = config_1.defaultStoreData.minPageSleep;
        }
        if (store.maxPageSleep === undefined) {
            store.maxPageSleep = config_1.defaultStoreData.maxPageSleep;
        }
    }
}
function printConfig() {
    if (config_1.config.store.stores.length > 0) {
        logger_1.logger.info(`ℹ selected stores: ${config_1.config.store.stores
            .map((store) => store.name)
            .join(', ')}`);
    }
    if (config_1.config.store.showOnlyBrands.length > 0) {
        logger_1.logger.info(`ℹ selected brands: ${config_1.config.store.showOnlyBrands.join(', ')}`);
    }
    if (config_1.config.store.showOnlyModels.length > 0) {
        logger_1.logger.info(`ℹ selected models: ${config_1.config.store.showOnlyModels
            .map((entry) => {
            return entry.series
                ? entry.name + ' (' + entry.series + ')'
                : entry.name;
        })
            .join(', ')}`);
    }
    if (config_1.config.store.showOnlySeries.length > 0) {
        logger_1.logger.info(`ℹ selected series: ${config_1.config.store.showOnlySeries.join(', ')}`);
    }
}
function warnIfStoreDeprecated(store) {
    switch (store.name) {
        case 'nvidia':
        case 'nvidia-api':
            if (config_1.config.store.country === 'usa')
                logger_1.logger.warn(`${store.name} is deprecated in favor of bestbuy`);
            break;
        case 'evga':
            logger_1.logger.warn(`${store.name} is deprecated since they only support queuing`);
            break;
        default:
    }
}
function updateStores() {
    stores.clear();
    for (const storeData of config_1.config.store.stores) {
        const store = exports.storeList.get(storeData.name);
        if (store) {
            warnIfStoreDeprecated(store);
            stores.set(storeData.name, store);
            store.minPageSleep = storeData.minPageSleep;
            store.maxPageSleep = storeData.maxPageSleep;
            store.proxyList = storeData.proxyList;
        }
        else {
            logger_1.logger.warn(`No store named ${storeData.name}, skipping.`);
        }
    }
    filterBrandsSeriesModels();
    printConfig();
}
exports.updateStores = updateStores;
updateStores();
function getAllBrands() {
    return Array.from(brands);
}
exports.getAllBrands = getAllBrands;
function getAllSeries() {
    return Array.from(series);
}
exports.getAllSeries = getAllSeries;
function getAllModels() {
    return Array.from(models);
}
exports.getAllModels = getAllModels;
function getStores() {
    return stores;
}
exports.getStores = getStores;
__exportStar(require("./store"), exports);
//# sourceMappingURL=index.js.map