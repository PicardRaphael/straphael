/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"code": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~code"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Carousel/carousel.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/components/Carousel/carousel.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".rcs_sliderBox {\n  width: 100% !important; }\n\n.rcs_dotsSet {\n  position: relative !important;\n  top: -50px !important; }\n\n@media (max-width: 575.98px) {\n  .rcs_dotsSet {\n    display: none !important; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Equipement/equipement.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/components/Equipement/equipement.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".title {\n  text-align: center; }\n  .title-list {\n    text-align: center;\n    font-weight: 700; }\n  .title-group {\n    border-bottom: 1px solid grey !important;\n    margin-bottom: 1em !important; }\n  .title-off {\n    border-bottom: none !important; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Home/home.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/components/Home/home.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card-body {\n  display: flex !important;\n  flex-direction: column; }\n\n.equipement {\n  align-self: center !important; }\n\n.list-equipement {\n  margin-top: 1em !important; }\n\n.card-title {\n  text-align: center !important;\n  font-weight: 700 !important; }\n\n.list {\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n  .list-item {\n    border: none !important; }\n\n.contact {\n  color: red !important;\n  margin-top: 0.5em !important; }\n\n@media (min-width: 768px) {\n  .equipement {\n    width: 10% !important; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Infos/infos.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/components/Infos/infos.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".infos {\n  margin-top: 1em !important; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Layout/layout.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/components/Layout/layout.scss ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".container {\n  max-width: 100% !important;\n  padding: 0 !important; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Map/map.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/components/Map/map.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".rcs_dotsSet {\n  z-index: 1 !important; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js!./src/styles.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n", ""]);



/***/ }),

/***/ "./src/components/App/index.tsx":
/*!**************************************!*\
  !*** ./src/components/App/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Package Import
 */
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/*
 * Local Import
 */
var Layout_1 = __importDefault(__webpack_require__(/*! components/Layout */ "./src/components/Layout/index.tsx"));
var route_1 = __webpack_require__(/*! configs/route */ "./src/configs/route.ts");
/*
 * Styles
 */
var App = function () {
    var routesDefault = route_1.defaultRoutes();
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement(react_router_dom_1.Switch, null, routesDefault.map(function (_a) {
            var exact = _a.exact, path = _a.path, Component = _a.component;
            return (react_1.default.createElement(react_router_dom_1.Route, { key: path, exact: exact, path: path, component: Component }));
        }))));
};
exports.default = App;


/***/ }),

/***/ "./src/components/Carousel/carousel.scss":
/*!***********************************************!*\
  !*** ./src/components/Carousel/carousel.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Carousel/carousel.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Carousel/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Carousel/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var carousel_1 = __webpack_require__(/*! ../../configs/carousel */ "./src/configs/carousel.ts");
__webpack_require__(/*! ./carousel.scss */ "./src/components/Carousel/carousel.scss");
var react_carousel_slider_1 = __importDefault(__webpack_require__(/*! react-carousel-slider */ "./node_modules/react-carousel-slider/es/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var mdbreact_1 = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var Carousel = function () {
    var manner = {
        autoSliding: { interval: "3s" },
        duration: "2s"
    };
    var accEleSetting;
    // let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
    // // if (mobileRegx.test(navigator.userAgent)) {
    // //   //@ts-ignore
    // //   accEleSetting.button = false;
    // // }
    var buttonSetting = {
        placeOn: "middle-inside",
        hoverEvent: true,
        style: {
            left: {
                height: "50px",
                width: "50px",
                color: "#929393",
                background: "rgba(225, 228, 232, 0.8)",
                borderRadius: "50%"
            },
            right: {
                height: "50px",
                width: "50px",
                color: "#929393",
                background: "rgba(225, 228, 232, 0.8)",
                borderRadius: "50%"
            }
        }
    };
    var datas = carousel_1.data.map(function (img) {
        //@ts-ignore
        return react_1.default.createElement(react_router_dom_1.Link, { to: '/galerie' },
            react_1.default.createElement("img", { src: img.imgSrc }));
    });
    return (react_1.default.createElement(mdbreact_1.MDBCol, { md: "12" },
        react_1.default.createElement(react_carousel_slider_1.default, { slideCpnts: datas, manner: manner, buttonSetting: buttonSetting })));
};
exports.default = Carousel;


/***/ }),

/***/ "./src/components/Equipement/equipement.scss":
/*!***************************************************!*\
  !*** ./src/components/Equipement/equipement.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js!./equipement.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Equipement/equipement.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Equipement/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Equipement/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var mdbreact_1 = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var store_1 = __webpack_require__(/*! store */ "./src/store/index.ts");
__webpack_require__(/*! ./equipement.scss */ "./src/components/Equipement/equipement.scss");
//@ts-ignore
exports.Modal = function () {
    var modal = store_1.useStore(function (state) { return state.app.modal; });
    var setModal = store_1.useActions(function (actions) { return actions.app.setModal; });
    return (react_1.default.createElement(mdbreact_1.MDBModal, { isOpen: modal },
        react_1.default.createElement(mdbreact_1.MDBModalHeader, { className: "title", toggle: function () { return setModal(!modal); } }, "\u00C9quipements"),
        react_1.default.createElement(mdbreact_1.MDBModalBody, null,
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Standard"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                    react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "snowflake" }),
                    "  Climatisation"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                    react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "wifi" }),
                    "  Connexion Ethernet / Wi-fi"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                    react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "hands-helping" }),
                    "  \u00C9quipements de base"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                    react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "fire-alt" }),
                    "  Chauffage"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                    react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "tv" }),
                    "  T\u00E9l\u00E9vision"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                    react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "tint" }),
                    "  Lave-linge")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Acc\u00E8s des voyageurs"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Cl\u00E9s remises par l'h\u00F4te")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Logistique"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "S\u00E9jours longue dur\u00E9e autoris\u00E9s")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Installations"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Ascenseur"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Parking gratuit sur place"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Logement de plain-pied")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Restaurations"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Cafeti\u00E8re"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Ustensiles de cuisine de base"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Vaisselle et couverts"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Lave-vaisselle"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Cuisine"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Four \u00E0 micro-ondes"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "R\u00E9frig\u00E9rateur"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Four"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Cuisini\u00E8re")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Chambre et salle de bain"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Draps"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Oreillers et couvertures suppl\u00E9mentaires"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "S\u00E8che-cheveux"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Cintres")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Ext\u00E9rieur"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Barbecue"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Patio ou baclcon")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group' },
                react_1.default.createElement("h4", { className: "title-list" }, "Dispositif de s\u00E9curit\u00E9"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "D\u00E9tecteur de fum\u00E9e")),
            react_1.default.createElement(mdbreact_1.MDBListGroup, { className: 'title-group title-off' },
                react_1.default.createElement("h4", { className: "title-list" }, "Non inclus"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "Shampooing"),
                react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" }, "D\u00E9tecteur de monoxyde de carbone"))),
        react_1.default.createElement(mdbreact_1.MDBModalFooter, null,
            react_1.default.createElement(mdbreact_1.MDBBtn, { color: "dark", onClick: function () { return setModal(!modal); } }, "Fermer"))));
};


/***/ }),

/***/ "./src/components/Galerie/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Galerie/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_photo_gallery_1 = __importDefault(__webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js"));
var react_images_1 = __importDefault(__webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js"));
var carousel_1 = __webpack_require__(/*! ../../configs/carousel */ "./src/configs/carousel.ts");
var photos = carousel_1.images;
var Galerie = /** @class */ (function (_super) {
    __extends(Galerie, _super);
    function Galerie() {
        var _this = 
        //@ts-ignore
        _super.call(this) || this;
        _this.state = { currentImage: 0 };
        _this.closeLightbox = _this.closeLightbox.bind(_this);
        _this.openLightbox = _this.openLightbox.bind(_this);
        _this.gotoNext = _this.gotoNext.bind(_this);
        _this.gotoPrevious = _this.gotoPrevious.bind(_this);
        return _this;
    }
    //@ts-ignore
    Galerie.prototype.openLightbox = function (event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    };
    Galerie.prototype.closeLightbox = function () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    };
    Galerie.prototype.gotoPrevious = function () {
        this.setState({
            //@ts-ignore
            currentImage: this.state.currentImage - 1,
        });
    };
    Galerie.prototype.gotoNext = function () {
        this.setState({
            //@ts-ignore
            currentImage: this.state.currentImage + 1,
        });
    };
    Galerie.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(react_photo_gallery_1.default, { photos: photos, onClick: this.openLightbox }),
            react_1.default.createElement(react_images_1.default, { images: photos, onClose: this.closeLightbox, onClickPrev: this.gotoPrevious, onClickNext: this.gotoNext, 
                //@ts-ignore
                currentImage: this.state.currentImage, 
                //@ts-ignore
                isOpen: this.state.lightboxIsOpen })));
    };
    return Galerie;
}(react_1.default.Component));
exports.default = Galerie;


/***/ }),

/***/ "./src/components/Home/home.scss":
/*!***************************************!*\
  !*** ./src/components/Home/home.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Home/home.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Carousel_1 = __importDefault(__webpack_require__(/*! components/Carousel */ "./src/components/Carousel/index.tsx"));
var mdbreact_1 = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var Map_1 = __webpack_require__(/*! components/Map */ "./src/components/Map/index.tsx");
var Equipement_1 = __webpack_require__(/*! components/Equipement */ "./src/components/Equipement/index.tsx");
__webpack_require__(/*! ./home.scss */ "./src/components/Home/home.scss");
var store_1 = __webpack_require__(/*! store */ "./src/store/index.ts");
var Infos_1 = __webpack_require__(/*! components/Infos */ "./src/components/Infos/index.tsx");
exports.Home = function () {
    var modal = store_1.useStore(function (state) { return state.app.modal; });
    var setModal = store_1.useActions(function (actions) { return actions.app.setModal; });
    react_1.useEffect(function () {
        console.log('ok');
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Equipement_1.Modal, null),
        react_1.default.createElement(Carousel_1.default, null),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "12" },
            react_1.default.createElement(mdbreact_1.MDBCard, { style: { marginTop: "-53px" } },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(Map_1.Map, null)))),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "12" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "list-equipement" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "Appartement Saint Rapha\u00EBl"),
                    react_1.default.createElement(mdbreact_1.MDBListGroup, { className: "list" },
                        react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                            react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "home" }),
                            "  Logement: 40 m\u00B2"),
                        react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                            react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "warehouse" }),
                            "  Garage: 1"),
                        react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                            react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "user-friends" }),
                            "  Nombre de voyageurs: 1-4"),
                        react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                            react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "bed" }),
                            "  Couchages: 2"),
                        react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                            react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "door-open" }),
                            "  Chambre: 1"),
                        react_1.default.createElement(mdbreact_1.MDBListGroupItem, { className: "list-item" },
                            react_1.default.createElement(mdbreact_1.MDBIcon, { icon: "bath" }),
                            "  Salle de bain: 1")),
                    react_1.default.createElement(mdbreact_1.MDBBtn, { onClick: function () { return setModal(true); }, className: "equipement", color: 'dark' }, "Tous les \u00E9quipements"),
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, { className: "contact" }, "Pour plus d'informations contactez Mme Picard :"),
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, { className: "contact" }, "06 62 47 16 60")))),
        react_1.default.createElement(Infos_1.Infos, null)));
};


/***/ }),

/***/ "./src/components/Infos/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Infos/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var mdbreact_1 = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
__webpack_require__(/*! ./infos.scss */ "./src/components/Infos/infos.scss");
exports.Infos = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "2", sm: "1" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "infos" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "Pr\u00E9sentation"),
                    react_1.default.createElement(mdbreact_1.MDBCardText, null, "Cosy T2 r\u00E9nov\u00E9 par Architecte, Tout confort, Garage priv\u00E9, Terrasse 20 M2 en RDC, \u00E0 2 MM \u00E0 pied du Port, de la Plage, du Centre, au Calme. Linge de Lit, serviettes de bains, serviettes de plage fournies, m\u00E9nage \u00E0 l'arriv\u00E9e et au d\u00E9part.Cosy T2 r\u00E9nov\u00E9 par Architecte, Tout confort, Garage priv\u00E9,Terrasse 20 M2 en RDC, \u00E0 2 MM \u00E0 pied du Port, de la Plage, du Centre, au Calme. Linge de Lit, serviettes de bains, serviettes de plage fournies, m\u00E9nage \u00E0 l'arriv\u00E9e et au d\u00E9part.")))),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "2", sm: "1" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "infos" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "Le logement"),
                    react_1.default.createElement(mdbreact_1.MDBCardText, null, "La Cuisine Neuve est enti\u00E8rement \u00E9quip\u00E9e : Lave Vaisselle, Four, Micro Onde, Plaque \u00E0 induction, Machine \u00E0 Caf\u00E9 Expresso, bouilloire, grille Pain...Salle de Douche et une petite buanderie avec le Lave linge, rangements...La Terrasse expos\u00E9e Sud/Ouest est couverte en Rez de jardin avec vue sur le jardin arbor\u00E9.Television neuve 4K  grand \u00E9cran 123 cm , Wifi + box. orange.Dans la chambre lit de 160/200 avec un tr\u00E8s bon matelas Haut de Gamme Neuf.Canap\u00E9 lit 140/190 Neuf avec un bon matelas Haut de Gamme.L'appartement a \u00E9t\u00E9 enti\u00E8rement repens\u00E9 pour que vos vacances soient le plus agr\u00E9able possible dans un environnement chaleureux.")))),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "2", sm: "1" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "infos" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "Acc\u00E8s aux voyageurs"),
                    react_1.default.createElement(mdbreact_1.MDBCardText, null, "Vous profiterez d'un agr\u00E9able appartement enti\u00E8rement r\u00E9nov\u00E9 . En rez de Chauss\u00E9 vous \u00EAtes au calme et proche de toutes les commodit\u00E9s quotidiennes. Situ\u00E9 \u00E0 la fronti\u00E8re entre Saint Rapha\u00E8l et Fr\u00E9gus. Vous pouvez arriver en train la gare est \u00E0 7 mm \u00E0 pied.")))),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "2", sm: "1" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "infos" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "Accueil"),
                    react_1.default.createElement(mdbreact_1.MDBCardText, null, "Nous vous accueillerons d\u00E9s votre arriv\u00E9e pour la remise des cl\u00E9s et l'inventaire. Nous pourrons vous guider et vous conseiller pour les bonnes adresses, les activit\u00E9s locales possibles...Si vous avez un soucis ou une demande nous vous laisserons nos coordonn\u00E9es t\u00E9l\u00E9phoniques. Votre d\u00E9part en matin\u00E9e nous viendrons vous dire au revoir et r\u00E9cup\u00E9rer les cl\u00E9s avec un inventaire.")))),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "2", sm: "1" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "infos" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "Le quartier"),
                    react_1.default.createElement(mdbreact_1.MDBCardText, null, "Situ\u00E9 sur un emplacement id\u00E9al l'appartement vous permettra de vous rendre en 2 mm \u00E0 pied \u00E0 la plage, au vieux Port, au Centre de la ville. La Gare est \u00E0 7 mm \u00E0 Pied. Toutes les commodit\u00E9s sont \u00E0 votre porte. Plus besoin de voiture vous pourrez aussi visiter Saint Tropez et Sainte Maxime en bateau en partant du vieux Port. Le March\u00E9 le Dimanche en matin\u00E9e et de Juillet \u00E0 Ao\u00FBt tous les jours en bort de mer jusqu'\u00E0 22H vous pourrez aussi vous y rendre \u00E0 pied en 2 mm !!!de sortie.")))),
        react_1.default.createElement(mdbreact_1.MDBCol, { md: "2", sm: "1" },
            react_1.default.createElement(mdbreact_1.MDBCard, { className: "infos" },
                react_1.default.createElement(mdbreact_1.MDBCardBody, null,
                    react_1.default.createElement(mdbreact_1.MDBCardTitle, null, "D\u00E9placements"),
                    react_1.default.createElement(mdbreact_1.MDBCardText, null, "Vous n'aurez plus besoin de votre voiture gar\u00E9e dans le garage au 1 er Sous-Sol. Vous pourrez profiter de toutes les infrastructures de Saint Raphael \u00E0 Pied, vous d\u00E9placer aussi en Bateau."))))));
};


/***/ }),

/***/ "./src/components/Infos/infos.scss":
/*!*****************************************!*\
  !*** ./src/components/Infos/infos.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js!./infos.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Infos/infos.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Layout/Header/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Layout/Header/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var mdbreact_1 = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var FullPageIntroWithFixedTransparentNavbar = /** @class */ (function (_super) {
    __extends(FullPageIntroWithFixedTransparentNavbar, _super);
    // @ts-ignore
    function FullPageIntroWithFixedTransparentNavbar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapse: false,
            isWideEnough: false,
        };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    FullPageIntroWithFixedTransparentNavbar.prototype.onClick = function () {
        this.setState({
            // @ts-ignore
            collapse: !this.state.collapse,
        });
    };
    FullPageIntroWithFixedTransparentNavbar.prototype.render = function () {
        return (react_1.default.createElement("header", null,
            react_1.default.createElement(mdbreact_1.MDBNavbar, { color: "black", dark: true, expand: "md" },
                react_1.default.createElement(mdbreact_1.MDBNavbarBrand, { href: "/" },
                    react_1.default.createElement("strong", null, "Appartement St Rapha\u00EBl")),
                // @ts-ignore 
                !this.state.isWideEnough
                    &&
                        react_1.default.createElement(mdbreact_1.MDBNavbarToggler, { onClick: this.onClick }),
                react_1.default.createElement(mdbreact_1.MDBCollapse, { isOpen: 
                    // @ts-ignore
                    this.state.collapse, navbar: true },
                    react_1.default.createElement(mdbreact_1.MDBNavbarNav, { right: true },
                        react_1.default.createElement(mdbreact_1.MDBNavItem, { active: true },
                            react_1.default.createElement(mdbreact_1.MDBNavLink, { to: "/" }, "Accueil")),
                        react_1.default.createElement(mdbreact_1.MDBNavItem, null,
                            react_1.default.createElement(mdbreact_1.MDBNavLink, { to: "/galerie" }, "Galerie")))))));
    };
    return FullPageIntroWithFixedTransparentNavbar;
}(react_1.default.Component));
exports.default = FullPageIntroWithFixedTransparentNavbar;


/***/ }),

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Package Import
 */
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var mdbreact_1 = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/*
 * Local Import
 */
var Header_1 = __importDefault(__webpack_require__(/*! ./Header */ "./src/components/Layout/Header/index.tsx"));
__webpack_require__(/*! ./layout.scss */ "./src/components/Layout/layout.scss");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(mdbreact_1.MDBContainer, { className: "container fluid" },
            react_1.default.createElement(mdbreact_1.MDBRow, null, children))));
};
exports.default = Layout;


/***/ }),

/***/ "./src/components/Layout/layout.scss":
/*!*******************************************!*\
  !*** ./src/components/Layout/layout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js!./layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Layout/layout.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Map/index.tsx":
/*!**************************************!*\
  !*** ./src/components/Map/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_google_maps_1 = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
__webpack_require__(/*! ./map.scss */ "./src/components/Map/map.scss");
exports.Map = function () {
    var googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyATuVgDE4cR5C_7ekXPm-dUx2Z43IukoE8';
    var someLatLng = { lat: 43.426004, lng: 6.764274 };
    var MyGoogleMap = react_google_maps_1.withScriptjs(react_google_maps_1.withGoogleMap(function () {
        return react_1.default.createElement(react_google_maps_1.GoogleMap, { defaultCenter: someLatLng, defaultZoom: 16, options: { disableDefaultUI: true } },
            react_1.default.createElement(react_google_maps_1.Marker, { position: { lat: 43.426004, lng: 6.764274 } }));
    }));
    var loadingElement = react_1.default.createElement("div", null);
    var containerElement = react_1.default.createElement("div", { style: { height: '50vh' } });
    var mapElement = react_1.default.createElement("div", { style: { height: '50vh' } });
    return (react_1.default.createElement(MyGoogleMap, { loadingElement: loadingElement, containerElement: containerElement, googleMapURL: googleMapURL, mapElement: mapElement }));
};


/***/ }),

/***/ "./src/components/Map/map.scss":
/*!*************************************!*\
  !*** ./src/components/Map/map.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js!./map.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Map/map.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/configs/carousel.ts":
/*!*********************************!*\
  !*** ./src/configs/carousel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var p1_png_1 = __importDefault(__webpack_require__(/*! src/images/p1.png */ "./src/images/p1.png"));
//@ts-ignore
var p2_png_1 = __importDefault(__webpack_require__(/*! src/images/p2.png */ "./src/images/p2.png"));
//@ts-ignore
var p3_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p3.jpg */ "./src/images/p3.jpg"));
//@ts-ignore
var p4_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p4.jpg */ "./src/images/p4.jpg"));
//@ts-ignore
var p5_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p5.jpg */ "./src/images/p5.jpg"));
//@ts-ignore
var p6_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p6.jpg */ "./src/images/p6.jpg"));
//@ts-ignore
var p7_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p7.jpg */ "./src/images/p7.jpg"));
//@ts-ignore
var p8_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p8.jpg */ "./src/images/p8.jpg"));
//@ts-ignore
var p9_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p9.jpg */ "./src/images/p9.jpg"));
//@ts-ignore
var p10_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p10.jpg */ "./src/images/p10.jpg"));
//@ts-ignore
var p11_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p11.jpg */ "./src/images/p11.jpg"));
//@ts-ignore
var p12_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p12.jpg */ "./src/images/p12.jpg"));
//@ts-ignore
var p13_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p13.jpg */ "./src/images/p13.jpg"));
//@ts-ignore
var p14_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p14.jpg */ "./src/images/p14.jpg"));
//@ts-ignore
var p15_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p15.jpg */ "./src/images/p15.jpg"));
//@ts-ignore
var p16_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p16.jpg */ "./src/images/p16.jpg"));
//@ts-ignore
var p17_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p17.jpg */ "./src/images/p17.jpg"));
//@ts-ignore
var p18_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p18.jpg */ "./src/images/p18.jpg"));
//@ts-ignore
var p19_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p19.jpg */ "./src/images/p19.jpg"));
//@ts-ignore
var p20_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p20.jpg */ "./src/images/p20.jpg"));
//@ts-ignore
var p21_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p21.jpg */ "./src/images/p21.jpg"));
//@ts-ignore
var p22_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p22.jpg */ "./src/images/p22.jpg"));
//@ts-ignore
var p23_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p23.jpg */ "./src/images/p23.jpg"));
//@ts-ignore
var p24_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p24.jpg */ "./src/images/p24.jpg"));
//@ts-ignore
var p25_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p25.jpg */ "./src/images/p25.jpg"));
//@ts-ignore
var p26_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p26.jpg */ "./src/images/p26.jpg"));
//@ts-ignore
var p27_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p27.jpg */ "./src/images/p27.jpg"));
//@ts-ignore
var p28_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p28.jpg */ "./src/images/p28.jpg"));
//@ts-ignore
var p29_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p29.jpg */ "./src/images/p29.jpg"));
//@ts-ignore
var p30_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p30.jpg */ "./src/images/p30.jpg"));
//@ts-ignore
var p31_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p31.jpg */ "./src/images/p31.jpg"));
//@ts-ignore
var p32_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p32.jpg */ "./src/images/p32.jpg"));
//@ts-ignore
var p33_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p33.jpg */ "./src/images/p33.jpg"));
//@ts-ignore
var p34_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p34.jpg */ "./src/images/p34.jpg"));
//@ts-ignore
var p35_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p35.jpg */ "./src/images/p35.jpg"));
//@ts-ignore
var p36_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p36.jpg */ "./src/images/p36.jpg"));
//@ts-ignore
var p37_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p37.jpg */ "./src/images/p37.jpg"));
//@ts-ignore
var p38_jpg_1 = __importDefault(__webpack_require__(/*! src/images/p38.jpg */ "./src/images/p38.jpg"));
exports.data = [
    {
        des: "1",
        imgSrc: p1_png_1.default
    },
    {
        des: "2",
        imgSrc: p2_png_1.default
    },
    {
        des: "3",
        imgSrc: p3_jpg_1.default
    },
    {
        des: "4",
        imgSrc: p4_jpg_1.default
    },
    {
        des: "5",
        imgSrc: p5_jpg_1.default
    },
    {
        des: "6",
        imgSrc: p6_jpg_1.default
    },
    {
        des: "7",
        imgSrc: p7_jpg_1.default
    },
    {
        des: "8",
        imgSrc: p8_jpg_1.default
    },
    {
        des: "9",
        imgSrc: p9_jpg_1.default
    },
    {
        des: "10",
        imgSrc: p10_jpg_1.default
    },
    {
        des: "11",
        imgSrc: p11_jpg_1.default
    },
    {
        des: "12",
        imgSrc: p12_jpg_1.default
    },
    {
        des: "13",
        imgSrc: p13_jpg_1.default
    },
    {
        des: "14",
        imgSrc: p14_jpg_1.default
    },
    {
        des: "15",
        imgSrc: p15_jpg_1.default
    },
    {
        des: "16",
        imgSrc: p16_jpg_1.default
    },
    {
        des: "17",
        imgSrc: p17_jpg_1.default
    },
    {
        des: "18",
        imgSrc: p18_jpg_1.default
    },
    {
        des: "19",
        imgSrc: p19_jpg_1.default
    },
    {
        des: "20",
        imgSrc: p20_jpg_1.default
    },
    {
        des: "21",
        imgSrc: p21_jpg_1.default
    },
    {
        des: "22",
        imgSrc: p22_jpg_1.default
    },
    {
        des: "23",
        imgSrc: p23_jpg_1.default
    },
    {
        des: "24",
        imgSrc: p24_jpg_1.default
    },
    {
        des: "25",
        imgSrc: p25_jpg_1.default
    },
    {
        des: "26",
        imgSrc: p26_jpg_1.default
    },
    {
        des: "27",
        imgSrc: p27_jpg_1.default
    },
    {
        des: "28",
        imgSrc: p28_jpg_1.default
    },
    {
        des: "29",
        imgSrc: p29_jpg_1.default
    },
    {
        des: "30",
        imgSrc: p30_jpg_1.default
    },
    {
        des: "31",
        imgSrc: p31_jpg_1.default
    },
    {
        des: "32",
        imgSrc: p32_jpg_1.default
    },
    {
        des: "33",
        imgSrc: p33_jpg_1.default
    },
    {
        des: "34",
        imgSrc: p34_jpg_1.default
    },
    {
        des: "35",
        imgSrc: p35_jpg_1.default
    },
    {
        des: "36",
        imgSrc: p36_jpg_1.default
    },
    {
        des: "37",
        imgSrc: p37_jpg_1.default
    },
    {
        des: "38",
        imgSrc: p38_jpg_1.default
    }
];
exports.images = [
    {
        src: p1_png_1.default,
        width: 4,
        height: 3
    },
    {
        src: p2_png_1.default,
        width: 1,
        height: 1
    },
    {
        src: p3_jpg_1.default,
        width: 3,
        height: 4
    },
    {
        src: p4_jpg_1.default,
        width: 3,
        height: 4
    },
    {
        src: p5_jpg_1.default,
        width: 3,
        height: 4
    },
    {
        src: p6_jpg_1.default,
        width: 3,
        height: 4
    },
    {
        src: p7_jpg_1.default,
        width: 3,
        height: 4
    },
    {
        src: p8_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p9_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p10_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p11_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p12_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p13_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p14_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p15_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p16_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p17_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p18_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p19_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p20_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p21_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p22_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p23_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p24_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p25_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p26_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p27_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p28_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p29_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p30_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p31_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p32_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p33_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p34_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p35_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p36_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p37_jpg_1.default,
        width: 4,
        height: 4
    },
    {
        src: p38_jpg_1.default,
        width: 4,
        height: 4
    }
];


/***/ }),

/***/ "./src/configs/route.ts":
/*!******************************!*\
  !*** ./src/configs/route.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Home_1 = __webpack_require__(/*! components/Home */ "./src/components/Home/index.tsx");
var Galerie_1 = __importDefault(__webpack_require__(/*! components/Galerie */ "./src/components/Galerie/index.tsx"));
exports.defaultRoutes = function () {
    var data = [
        {
            id: 'Home',
            path: '/',
            exact: true,
            component: Home_1.Home,
        },
        {
            id: 'Galerie',
            path: '/galerie',
            component: Galerie_1.default,
        }
    ];
    return data;
};


/***/ }),

/***/ "./src/images/p1.png":
/*!***************************!*\
  !*** ./src/images/p1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p1.png?faca046bcf8ee3392786edb562278570";

/***/ }),

/***/ "./src/images/p10.jpg":
/*!****************************!*\
  !*** ./src/images/p10.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p10.jpg?30263fa389d211272c225d95ee1c7d8a";

/***/ }),

/***/ "./src/images/p11.jpg":
/*!****************************!*\
  !*** ./src/images/p11.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p11.jpg?d16ebffc82ee3d0b7c65b65ad3c7f1f9";

/***/ }),

/***/ "./src/images/p12.jpg":
/*!****************************!*\
  !*** ./src/images/p12.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p12.jpg?62db740c5ee492d9448efafbc99dda40";

/***/ }),

/***/ "./src/images/p13.jpg":
/*!****************************!*\
  !*** ./src/images/p13.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p13.jpg?54005bf9b16f05c7ad53f6ab6ae1c9c2";

/***/ }),

/***/ "./src/images/p14.jpg":
/*!****************************!*\
  !*** ./src/images/p14.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p14.jpg?5a45ed5ae992cb2c2ae0624384885fba";

/***/ }),

/***/ "./src/images/p15.jpg":
/*!****************************!*\
  !*** ./src/images/p15.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p15.jpg?1adb4c72f4b20a46f565a6be2464caa9";

/***/ }),

/***/ "./src/images/p16.jpg":
/*!****************************!*\
  !*** ./src/images/p16.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p16.jpg?0bf3550b86c95d8f6edcb84759bf281d";

/***/ }),

/***/ "./src/images/p17.jpg":
/*!****************************!*\
  !*** ./src/images/p17.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p17.jpg?0f4880b8f23382f68e89f204134380ea";

/***/ }),

/***/ "./src/images/p18.jpg":
/*!****************************!*\
  !*** ./src/images/p18.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p18.jpg?c0c30d0cdae25e0dafbd17744da7ee9e";

/***/ }),

/***/ "./src/images/p19.jpg":
/*!****************************!*\
  !*** ./src/images/p19.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p19.jpg?637edb4582e3a914439b3daa2e177432";

/***/ }),

/***/ "./src/images/p2.png":
/*!***************************!*\
  !*** ./src/images/p2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p2.png?b34d8e62f646d3cc8f90fadcabb6fdbf";

/***/ }),

/***/ "./src/images/p20.jpg":
/*!****************************!*\
  !*** ./src/images/p20.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p20.jpg?c1552f7d74697a40a3c49a97ff434db3";

/***/ }),

/***/ "./src/images/p21.jpg":
/*!****************************!*\
  !*** ./src/images/p21.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p21.jpg?28b8fa4400cbfb38422cd24d13e36af1";

/***/ }),

/***/ "./src/images/p22.jpg":
/*!****************************!*\
  !*** ./src/images/p22.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p22.jpg?b8db02fd08750b63209a23a9856fb03f";

/***/ }),

/***/ "./src/images/p23.jpg":
/*!****************************!*\
  !*** ./src/images/p23.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p23.jpg?6023576e0ce64ad3c3f4cb991e4cb710";

/***/ }),

/***/ "./src/images/p24.jpg":
/*!****************************!*\
  !*** ./src/images/p24.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p24.jpg?51a305f159cf7400f26f88f96870d6dd";

/***/ }),

/***/ "./src/images/p25.jpg":
/*!****************************!*\
  !*** ./src/images/p25.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p25.jpg?ae2b6f0d7dc67cfc96ec03b66f1297b8";

/***/ }),

/***/ "./src/images/p26.jpg":
/*!****************************!*\
  !*** ./src/images/p26.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p26.jpg?89248615a265e4a19d853c95b6e7ed19";

/***/ }),

/***/ "./src/images/p27.jpg":
/*!****************************!*\
  !*** ./src/images/p27.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p27.jpg?e3ffa74774e493ba24e57350429e671f";

/***/ }),

/***/ "./src/images/p28.jpg":
/*!****************************!*\
  !*** ./src/images/p28.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p28.jpg?475d48fabe03729391a6e532a9295357";

/***/ }),

/***/ "./src/images/p29.jpg":
/*!****************************!*\
  !*** ./src/images/p29.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p29.jpg?1f92036a663533d6f560423e78640034";

/***/ }),

/***/ "./src/images/p3.jpg":
/*!***************************!*\
  !*** ./src/images/p3.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p3.jpg?db1da773b77c1800f23537ff325d7212";

/***/ }),

/***/ "./src/images/p30.jpg":
/*!****************************!*\
  !*** ./src/images/p30.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p30.jpg?cb2519cd2fc5275ea68fa8f378561b71";

/***/ }),

/***/ "./src/images/p31.jpg":
/*!****************************!*\
  !*** ./src/images/p31.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p31.jpg?9bbfb91af6ae9739c2c4e38d4a7a131e";

/***/ }),

/***/ "./src/images/p32.jpg":
/*!****************************!*\
  !*** ./src/images/p32.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p32.jpg?82082cc94b8236eedb644b80c2eac803";

/***/ }),

/***/ "./src/images/p33.jpg":
/*!****************************!*\
  !*** ./src/images/p33.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p33.jpg?d32be49772acaa02cc6574b55f0f0260";

/***/ }),

/***/ "./src/images/p34.jpg":
/*!****************************!*\
  !*** ./src/images/p34.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p34.jpg?fc22ad483b2ebf9e5a70555daf00e212";

/***/ }),

/***/ "./src/images/p35.jpg":
/*!****************************!*\
  !*** ./src/images/p35.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p35.jpg?80a6b075adce4d394e87e70928aebd56";

/***/ }),

/***/ "./src/images/p36.jpg":
/*!****************************!*\
  !*** ./src/images/p36.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p36.jpg?2fc40ec97f5de61e09d2b9840e0e449c";

/***/ }),

/***/ "./src/images/p37.jpg":
/*!****************************!*\
  !*** ./src/images/p37.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p37.jpg?a9fd2ab3bab4dfab1bad24449bd2775a";

/***/ }),

/***/ "./src/images/p38.jpg":
/*!****************************!*\
  !*** ./src/images/p38.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p38.jpg?5f96c8b7cdb2061fd6ccc0b0ae317081";

/***/ }),

/***/ "./src/images/p4.jpg":
/*!***************************!*\
  !*** ./src/images/p4.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p4.jpg?f030f6dd2f42ba48fc0f1dd123e3c2f5";

/***/ }),

/***/ "./src/images/p5.jpg":
/*!***************************!*\
  !*** ./src/images/p5.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p5.jpg?1f5ba4719cad725351d620bd52d03bde";

/***/ }),

/***/ "./src/images/p6.jpg":
/*!***************************!*\
  !*** ./src/images/p6.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p6.jpg?7e620c434e03b7cc6f75bf59202bfe90";

/***/ }),

/***/ "./src/images/p7.jpg":
/*!***************************!*\
  !*** ./src/images/p7.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p7.jpg?40ed219f3f0fb1f4913f04e166111a08";

/***/ }),

/***/ "./src/images/p8.jpg":
/*!***************************!*\
  !*** ./src/images/p8.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p8.jpg?e6618a0226e13591ad81afad5acc3ece";

/***/ }),

/***/ "./src/images/p9.jpg":
/*!***************************!*\
  !*** ./src/images/p9.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/p9.jpg?f61cbc1f7095996a7ac372cb3acbaff3";

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var App_1 = __importDefault(__webpack_require__(/*! components/App */ "./src/components/App/index.tsx"));
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var easy_peasy_1 = __webpack_require__(/*! easy-peasy */ "./node_modules/easy-peasy/dist/easy-peasy.esm.js");
var store_1 = __importDefault(__webpack_require__(/*! store */ "./src/store/index.ts"));
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(easy_peasy_1.StoreProvider, { store: store_1.default },
        react_1.default.createElement(App_1.default, null))), document.getElementById('root'));


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var easy_peasy_1 = __webpack_require__(/*! easy-peasy */ "./node_modules/easy-peasy/dist/easy-peasy.esm.js");
var models_1 = __importDefault(__webpack_require__(/*! ./models */ "./src/store/models/index.ts"));
var _a = easy_peasy_1.createTypedHooks(), useActions = _a.useActions, useStore = _a.useStore, useDispatch = _a.useDispatch;
exports.useActions = useActions;
exports.useStore = useStore;
exports.useDispatch = useDispatch;
var store = easy_peasy_1.createStore(models_1.default);
exports.default = store;


/***/ }),

/***/ "./src/store/models/app/index.ts":
/*!***************************************!*\
  !*** ./src/store/models/app/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var easy_peasy_1 = __webpack_require__(/*! easy-peasy */ "./node_modules/easy-peasy/dist/easy-peasy.esm.js");
var app = {
    modal: false,
    setModal: easy_peasy_1.action(function (state, payload) {
        state.modal = payload;
    })
};
exports.default = app;


/***/ }),

/***/ "./src/store/models/index.ts":
/*!***********************************!*\
  !*** ./src/store/models/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/store/models/app/index.ts"));
;
var model = {
    app: app_1.default,
};
exports.default = model;


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--7-2!../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvY2Fyb3VzZWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcXVpcGVtZW50L2VxdWlwZW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvcy9pbmZvcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9sYXlvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvbWFwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvY2Fyb3VzZWwuc2Nzcz8yYWY5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcXVpcGVtZW50L2VxdWlwZW1lbnQuc2Nzcz8wYjAwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VxdWlwZW1lbnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGVyaWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvaG9tZS5zY3NzPzcyMTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mb3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9zL2luZm9zLnNjc3M/ZDIzZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9sYXlvdXQuc2Nzcz8wZWRjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFwL21hcC5zY3NzPzcxMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvY2Fyb3VzZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3Mvcm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMTAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDExLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AxMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMTMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDE0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AxNS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMTYuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDE3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AxOC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMTkuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AyMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMjIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDIzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AyNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMjUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDI2LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AyNy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMjguanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDI5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AzMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMzEuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDMyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AzMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMzQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDM1LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3AzNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wMzcuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcDM4LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3A0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3A1LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3A2LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3A3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3A4LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3A5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kZWxzL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuc2Nzcz8wNzRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7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LDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsOENBQW1CO0FBQzFEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsZ0RBQW9CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFhYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLHdEQUFpQjtBQUN0QyxnQ0FBZ0MsbUJBQU8sQ0FBQyw4REFBb0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUQ7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsd0Q7Ozs7Ozs7Ozs7OztBQ0EzQjtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsNENBQU87QUFDN0Msa0NBQWtDLG1CQUFPLENBQUMsb0RBQVc7QUFDckQsNEJBQTRCLG1CQUFPLENBQUMsc0RBQWdCO0FBQ3BELG1CQUFPLENBQUMsd0NBQWU7QUFDdkIseUJBQXlCLG1CQUFPLENBQUMscUVBQWtCO0FBQ25ELG1CQUFtQixtQkFBTyxDQUFDLG9FQUFZO0FBQ3ZDLDhCQUE4QixtQkFBTyxDQUFDLG1DQUFPO0FBQzdDO0FBQ0EsK0RBQStELHlCQUF5QjtBQUN4Rjs7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBWTtBQUN2QywrQkFBK0IsbUJBQU8sQ0FBQyw2Q0FBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLG9FQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNEJBQTRCLG1CQUFPLENBQUMsOENBQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBLGNBQWMsbUJBQU8sQ0FBQyxrU0FBd0o7O0FBRTlLLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiY29kZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvZGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJ2ZW5kb3JzfmNvZGVcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yY3Nfc2xpZGVyQm94IHtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cXG5cXG4ucmNzX2RvdHNTZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICB0b3A6IC01MHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcXG4gIC5yY3NfZG90c1NldCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAudGl0bGUtbGlzdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgLnRpdGxlLWdyb3VwIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7IH1cXG4gIC50aXRsZS1vZmYge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWJvZHkge1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5lcXVpcGVtZW50IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XFxuXFxuLmxpc3QtZXF1aXBlbWVudCB7XFxuICBtYXJnaW4tdG9wOiAxZW0gIWltcG9ydGFudDsgfVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50OyB9XFxuXFxuLmxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAubGlzdC1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uY29udGFjdCB7XFxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tdG9wOiAwLjVlbSAhaW1wb3J0YW50OyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZXF1aXBlbWVudCB7XFxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mb3Mge1xcbiAgbWFyZ2luLXRvcDogMWVtICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yY3NfZG90c1NldCB7XFxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLypcbiAqIFBhY2thZ2UgSW1wb3J0XG4gKi9cbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4vKlxuICogTG9jYWwgSW1wb3J0XG4gKi9cbnZhciBMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29tcG9uZW50cy9MYXlvdXRcIikpO1xudmFyIHJvdXRlXzEgPSByZXF1aXJlKFwiY29uZmlncy9yb3V0ZVwiKTtcbi8qXG4gKiBTdHlsZXNcbiAqL1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVzRGVmYXVsdCA9IHJvdXRlXzEuZGVmYXVsdFJvdXRlcygpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGF5b3V0XzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlN3aXRjaCwgbnVsbCwgcm91dGVzRGVmYXVsdC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgZXhhY3QgPSBfYS5leGFjdCwgcGF0aCA9IF9hLnBhdGgsIENvbXBvbmVudCA9IF9hLmNvbXBvbmVudDtcbiAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IGtleTogcGF0aCwgZXhhY3Q6IGV4YWN0LCBwYXRoOiBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCB9KSk7XG4gICAgICAgIH0pKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Nhcm91c2VsLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBjYXJvdXNlbF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZ3MvY2Fyb3VzZWxcIik7XG5yZXF1aXJlKFwiLi9jYXJvdXNlbC5zY3NzXCIpO1xudmFyIHJlYWN0X2Nhcm91c2VsX3NsaWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1jYXJvdXNlbC1zbGlkZXJcIikpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIG1kYnJlYWN0XzEgPSByZXF1aXJlKFwibWRicmVhY3RcIik7XG52YXIgQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hbm5lciA9IHtcbiAgICAgICAgYXV0b1NsaWRpbmc6IHsgaW50ZXJ2YWw6IFwiM3NcIiB9LFxuICAgICAgICBkdXJhdGlvbjogXCIyc1wiXG4gICAgfTtcbiAgICB2YXIgYWNjRWxlU2V0dGluZztcbiAgICAvLyBsZXQgbW9iaWxlUmVneCA9IC9Nb2JpfFRhYmxldHxpUGFkfGlQaG9uZS87XG4gICAgLy8gLy8gaWYgKG1vYmlsZVJlZ3gudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIC8vIC8vICAgLy9AdHMtaWdub3JlXG4gICAgLy8gLy8gICBhY2NFbGVTZXR0aW5nLmJ1dHRvbiA9IGZhbHNlO1xuICAgIC8vIC8vIH1cbiAgICB2YXIgYnV0dG9uU2V0dGluZyA9IHtcbiAgICAgICAgcGxhY2VPbjogXCJtaWRkbGUtaW5zaWRlXCIsXG4gICAgICAgIGhvdmVyRXZlbnQ6IHRydWUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzkyOTM5M1wiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjUsIDIyOCwgMjMyLCAwLjgpXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjOTI5MzkzXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyNSwgMjI4LCAyMzIsIDAuOClcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGRhdGFzID0gY2Fyb3VzZWxfMS5kYXRhLm1hcChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHsgdG86ICcvZ2FsZXJpZScgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpbWcuaW1nU3JjIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ29sLCB7IG1kOiBcIjEyXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfY2Fyb3VzZWxfc2xpZGVyXzEuZGVmYXVsdCwgeyBzbGlkZUNwbnRzOiBkYXRhcywgbWFubmVyOiBtYW5uZXIsIGJ1dHRvblNldHRpbmc6IGJ1dHRvblNldHRpbmcgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDYXJvdXNlbDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2VxdWlwZW1lbnQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9lcXVpcGVtZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2VxdWlwZW1lbnQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtZGJyZWFjdF8xID0gcmVxdWlyZShcIm1kYnJlYWN0XCIpO1xudmFyIHN0b3JlXzEgPSByZXF1aXJlKFwic3RvcmVcIik7XG5yZXF1aXJlKFwiLi9lcXVpcGVtZW50LnNjc3NcIik7XG4vL0B0cy1pZ25vcmVcbmV4cG9ydHMuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1vZGFsID0gc3RvcmVfMS51c2VTdG9yZShmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmFwcC5tb2RhbDsgfSk7XG4gICAgdmFyIHNldE1vZGFsID0gc3RvcmVfMS51c2VBY3Rpb25zKGZ1bmN0aW9uIChhY3Rpb25zKSB7IHJldHVybiBhY3Rpb25zLmFwcC5zZXRNb2RhbDsgfSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQk1vZGFsLCB7IGlzT3BlbjogbW9kYWwgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJNb2RhbEhlYWRlciwgeyBjbGFzc05hbWU6IFwidGl0bGVcIiwgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRNb2RhbCghbW9kYWwpOyB9IH0sIFwiXFx1MDBDOXF1aXBlbWVudHNcIiksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTW9kYWxCb2R5LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXAsIHsgY2xhc3NOYW1lOiAndGl0bGUtZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCB7IGNsYXNzTmFtZTogXCJ0aXRsZS1saXN0XCIgfSwgXCJTdGFuZGFyZFwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcInNub3dmbGFrZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBcIiAgQ2xpbWF0aXNhdGlvblwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcIndpZmlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgXCIgIENvbm5leGlvbiBFdGhlcm5ldCAvIFdpLWZpXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTGlzdEdyb3VwSXRlbSwgeyBjbGFzc05hbWU6IFwibGlzdC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJJY29uLCB7IGljb246IFwiaGFuZHMtaGVscGluZ1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICBcIiAgXFx1MDBDOXF1aXBlbWVudHMgZGUgYmFzZVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcImZpcmUtYWx0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgIFwiICBDaGF1ZmZhZ2VcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkljb24sIHsgaWNvbjogXCJ0dlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBcIiAgVFxcdTAwRTlsXFx1MDBFOXZpc2lvblwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcInRpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgXCIgIExhdmUtbGluZ2VcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXAsIHsgY2xhc3NOYW1lOiAndGl0bGUtZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCB7IGNsYXNzTmFtZTogXCJ0aXRsZS1saXN0XCIgfSwgXCJBY2NcXHUwMEU4cyBkZXMgdm95YWdldXJzXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTGlzdEdyb3VwSXRlbSwgeyBjbGFzc05hbWU6IFwibGlzdC1pdGVtXCIgfSwgXCJDbFxcdTAwRTlzIHJlbWlzZXMgcGFyIGwnaFxcdTAwRjR0ZVwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cCwgeyBjbGFzc05hbWU6ICd0aXRsZS1ncm91cCcgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImg0XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlLWxpc3RcIiB9LCBcIkxvZ2lzdGlxdWVcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIlNcXHUwMEU5am91cnMgbG9uZ3VlIGR1clxcdTAwRTllIGF1dG9yaXNcXHUwMEU5c1wiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cCwgeyBjbGFzc05hbWU6ICd0aXRsZS1ncm91cCcgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImg0XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlLWxpc3RcIiB9LCBcIkluc3RhbGxhdGlvbnNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkFzY2Vuc2V1clwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiUGFya2luZyBncmF0dWl0IHN1ciBwbGFjZVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiTG9nZW1lbnQgZGUgcGxhaW4tcGllZFwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cCwgeyBjbGFzc05hbWU6ICd0aXRsZS1ncm91cCcgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImg0XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlLWxpc3RcIiB9LCBcIlJlc3RhdXJhdGlvbnNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkNhZmV0aVxcdTAwRThyZVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiVXN0ZW5zaWxlcyBkZSBjdWlzaW5lIGRlIGJhc2VcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIlZhaXNzZWxsZSBldCBjb3V2ZXJ0c1wiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiTGF2ZS12YWlzc2VsbGVcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkN1aXNpbmVcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkZvdXIgXFx1MDBFMCBtaWNyby1vbmRlc1wiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiUlxcdTAwRTlmcmlnXFx1MDBFOXJhdGV1clwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiRm91clwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiQ3Vpc2luaVxcdTAwRThyZVwiKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cCwgeyBjbGFzc05hbWU6ICd0aXRsZS1ncm91cCcgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImg0XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlLWxpc3RcIiB9LCBcIkNoYW1icmUgZXQgc2FsbGUgZGUgYmFpblwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiRHJhcHNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIk9yZWlsbGVycyBldCBjb3V2ZXJ0dXJlcyBzdXBwbFxcdTAwRTltZW50YWlyZXNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIlNcXHUwMEU4Y2hlLWNoZXZldXhcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkNpbnRyZXNcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXAsIHsgY2xhc3NOYW1lOiAndGl0bGUtZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCB7IGNsYXNzTmFtZTogXCJ0aXRsZS1saXN0XCIgfSwgXCJFeHRcXHUwMEU5cmlldXJcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkJhcmJlY3VlXCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTGlzdEdyb3VwSXRlbSwgeyBjbGFzc05hbWU6IFwibGlzdC1pdGVtXCIgfSwgXCJQYXRpbyBvdSBiYWNsY29uXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTGlzdEdyb3VwLCB7IGNsYXNzTmFtZTogJ3RpdGxlLWdyb3VwJyB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgeyBjbGFzc05hbWU6IFwidGl0bGUtbGlzdFwiIH0sIFwiRGlzcG9zaXRpZiBkZSBzXFx1MDBFOWN1cml0XFx1MDBFOVwiKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sIFwiRFxcdTAwRTl0ZWN0ZXVyIGRlIGZ1bVxcdTAwRTllXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTGlzdEdyb3VwLCB7IGNsYXNzTmFtZTogJ3RpdGxlLWdyb3VwIHRpdGxlLW9mZicgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImg0XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlLWxpc3RcIiB9LCBcIk5vbiBpbmNsdXNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIlNoYW1wb29pbmdcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LCBcIkRcXHUwMEU5dGVjdGV1ciBkZSBtb25veHlkZSBkZSBjYXJib25lXCIpKSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTW9kYWxGb290ZXIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkJ0biwgeyBjb2xvcjogXCJkYXJrXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE1vZGFsKCFtb2RhbCk7IH0gfSwgXCJGZXJtZXJcIikpKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfcGhvdG9fZ2FsbGVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1waG90by1nYWxsZXJ5XCIpKTtcbnZhciByZWFjdF9pbWFnZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtaW1hZ2VzXCIpKTtcbnZhciBjYXJvdXNlbF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZ3MvY2Fyb3VzZWxcIik7XG52YXIgcGhvdG9zID0gY2Fyb3VzZWxfMS5pbWFnZXM7XG52YXIgR2FsZXJpZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2FsZXJpZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHYWxlcmllKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0geyBjdXJyZW50SW1hZ2U6IDAgfTtcbiAgICAgICAgX3RoaXMuY2xvc2VMaWdodGJveCA9IF90aGlzLmNsb3NlTGlnaHRib3guYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9wZW5MaWdodGJveCA9IF90aGlzLm9wZW5MaWdodGJveC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ290b05leHQgPSBfdGhpcy5nb3RvTmV4dC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ290b1ByZXZpb3VzID0gX3RoaXMuZ290b1ByZXZpb3VzLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vQHRzLWlnbm9yZVxuICAgIEdhbGVyaWUucHJvdG90eXBlLm9wZW5MaWdodGJveCA9IGZ1bmN0aW9uIChldmVudCwgb2JqKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEltYWdlOiBvYmouaW5kZXgsXG4gICAgICAgICAgICBsaWdodGJveElzT3BlbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYWxlcmllLnByb3RvdHlwZS5jbG9zZUxpZ2h0Ym94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRJbWFnZTogMCxcbiAgICAgICAgICAgIGxpZ2h0Ym94SXNPcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYWxlcmllLnByb3RvdHlwZS5nb3RvUHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlIC0gMSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHYWxlcmllLnByb3RvdHlwZS5nb3RvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGN1cnJlbnRJbWFnZTogdGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2UgKyAxLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbGVyaWUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfcGhvdG9fZ2FsbGVyeV8xLmRlZmF1bHQsIHsgcGhvdG9zOiBwaG90b3MsIG9uQ2xpY2s6IHRoaXMub3BlbkxpZ2h0Ym94IH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfaW1hZ2VzXzEuZGVmYXVsdCwgeyBpbWFnZXM6IHBob3Rvcywgb25DbG9zZTogdGhpcy5jbG9zZUxpZ2h0Ym94LCBvbkNsaWNrUHJldjogdGhpcy5nb3RvUHJldmlvdXMsIG9uQ2xpY2tOZXh0OiB0aGlzLmdvdG9OZXh0LCBcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlLCBcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpc09wZW46IHRoaXMuc3RhdGUubGlnaHRib3hJc09wZW4gfSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBHYWxlcmllO1xufShyZWFjdF8xLmRlZmF1bHQuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYWxlcmllO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaG9tZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hvbWUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaG9tZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENhcm91c2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvbXBvbmVudHMvQ2Fyb3VzZWxcIikpO1xudmFyIG1kYnJlYWN0XzEgPSByZXF1aXJlKFwibWRicmVhY3RcIik7XG52YXIgTWFwXzEgPSByZXF1aXJlKFwiY29tcG9uZW50cy9NYXBcIik7XG52YXIgRXF1aXBlbWVudF8xID0gcmVxdWlyZShcImNvbXBvbmVudHMvRXF1aXBlbWVudFwiKTtcbnJlcXVpcmUoXCIuL2hvbWUuc2Nzc1wiKTtcbnZhciBzdG9yZV8xID0gcmVxdWlyZShcInN0b3JlXCIpO1xudmFyIEluZm9zXzEgPSByZXF1aXJlKFwiY29tcG9uZW50cy9JbmZvc1wiKTtcbmV4cG9ydHMuSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbW9kYWwgPSBzdG9yZV8xLnVzZVN0b3JlKGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuYXBwLm1vZGFsOyB9KTtcbiAgICB2YXIgc2V0TW9kYWwgPSBzdG9yZV8xLnVzZUFjdGlvbnMoZnVuY3Rpb24gKGFjdGlvbnMpIHsgcmV0dXJuIGFjdGlvbnMuYXBwLnNldE1vZGFsOyB9KTtcbiAgICByZWFjdF8xLnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRXF1aXBlbWVudF8xLk1vZGFsLCBudWxsKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxfMS5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDb2wsIHsgbWQ6IFwiMTJcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogXCItNTNweFwiIH0gfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmRCb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYXBfMS5NYXAsIG51bGwpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNvbCwgeyBtZDogXCIxMlwiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmQsIHsgY2xhc3NOYW1lOiBcImxpc3QtZXF1aXBlbWVudFwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGl0bGUsIG51bGwsIFwiQXBwYXJ0ZW1lbnQgU2FpbnQgUmFwaGFcXHUwMEVCbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXAsIHsgY2xhc3NOYW1lOiBcImxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcImhvbWVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgTG9nZW1lbnQ6IDQwIG1cXHUwMEIyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcIndhcmVob3VzZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBHYXJhZ2U6IDFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkxpc3RHcm91cEl0ZW0sIHsgY2xhc3NOYW1lOiBcImxpc3QtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJJY29uLCB7IGljb246IFwidXNlci1mcmllbmRzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIE5vbWJyZSBkZSB2b3lhZ2V1cnM6IDEtNFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTGlzdEdyb3VwSXRlbSwgeyBjbGFzc05hbWU6IFwibGlzdC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkljb24sIHsgaWNvbjogXCJiZWRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgQ291Y2hhZ2VzOiAyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcImRvb3Itb3BlblwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBDaGFtYnJlOiAxXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJMaXN0R3JvdXBJdGVtLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCSWNvbiwgeyBpY29uOiBcImJhdGhcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgU2FsbGUgZGUgYmFpbjogMVwiKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQnRuLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE1vZGFsKHRydWUpOyB9LCBjbGFzc05hbWU6IFwiZXF1aXBlbWVudFwiLCBjb2xvcjogJ2RhcmsnIH0sIFwiVG91cyBsZXMgXFx1MDBFOXF1aXBlbWVudHNcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ2FyZFRpdGxlLCB7IGNsYXNzTmFtZTogXCJjb250YWN0XCIgfSwgXCJQb3VyIHBsdXMgZCdpbmZvcm1hdGlvbnMgY29udGFjdGV6IE1tZSBQaWNhcmQgOlwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGl0bGUsIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RcIiB9LCBcIjA2IDYyIDQ3IDE2IDYwXCIpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJbmZvc18xLkluZm9zLCBudWxsKSkpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtZGJyZWFjdF8xID0gcmVxdWlyZShcIm1kYnJlYWN0XCIpO1xucmVxdWlyZShcIi4vaW5mb3Muc2Nzc1wiKTtcbmV4cG9ydHMuSW5mb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ29sLCB7IG1kOiBcIjJcIiwgc206IFwiMVwiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmQsIHsgY2xhc3NOYW1lOiBcImluZm9zXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmRCb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmRUaXRsZSwgbnVsbCwgXCJQclxcdTAwRTlzZW50YXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ2FyZFRleHQsIG51bGwsIFwiQ29zeSBUMiByXFx1MDBFOW5vdlxcdTAwRTkgcGFyIEFyY2hpdGVjdGUsIFRvdXQgY29uZm9ydCwgR2FyYWdlIHByaXZcXHUwMEU5LCBUZXJyYXNzZSAyMCBNMiBlbiBSREMsIFxcdTAwRTAgMiBNTSBcXHUwMEUwIHBpZWQgZHUgUG9ydCwgZGUgbGEgUGxhZ2UsIGR1IENlbnRyZSwgYXUgQ2FsbWUuIExpbmdlIGRlIExpdCwgc2VydmlldHRlcyBkZSBiYWlucywgc2VydmlldHRlcyBkZSBwbGFnZSBmb3VybmllcywgbVxcdTAwRTluYWdlIFxcdTAwRTAgbCdhcnJpdlxcdTAwRTllIGV0IGF1IGRcXHUwMEU5cGFydC5Db3N5IFQyIHJcXHUwMEU5bm92XFx1MDBFOSBwYXIgQXJjaGl0ZWN0ZSwgVG91dCBjb25mb3J0LCBHYXJhZ2UgcHJpdlxcdTAwRTksVGVycmFzc2UgMjAgTTIgZW4gUkRDLCBcXHUwMEUwIDIgTU0gXFx1MDBFMCBwaWVkIGR1IFBvcnQsIGRlIGxhIFBsYWdlLCBkdSBDZW50cmUsIGF1IENhbG1lLiBMaW5nZSBkZSBMaXQsIHNlcnZpZXR0ZXMgZGUgYmFpbnMsIHNlcnZpZXR0ZXMgZGUgcGxhZ2UgZm91cm5pZXMsIG1cXHUwMEU5bmFnZSBcXHUwMEUwIGwnYXJyaXZcXHUwMEU5ZSBldCBhdSBkXFx1MDBFOXBhcnQuXCIpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNvbCwgeyBtZDogXCIyXCIsIHNtOiBcIjFcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkLCB7IGNsYXNzTmFtZTogXCJpbmZvc1wiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGl0bGUsIG51bGwsIFwiTGUgbG9nZW1lbnRcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ2FyZFRleHQsIG51bGwsIFwiTGEgQ3Vpc2luZSBOZXV2ZSBlc3QgZW50aVxcdTAwRThyZW1lbnQgXFx1MDBFOXF1aXBcXHUwMEU5ZSA6IExhdmUgVmFpc3NlbGxlLCBGb3VyLCBNaWNybyBPbmRlLCBQbGFxdWUgXFx1MDBFMCBpbmR1Y3Rpb24sIE1hY2hpbmUgXFx1MDBFMCBDYWZcXHUwMEU5IEV4cHJlc3NvLCBib3VpbGxvaXJlLCBncmlsbGUgUGFpbi4uLlNhbGxlIGRlIERvdWNoZSBldCB1bmUgcGV0aXRlIGJ1YW5kZXJpZSBhdmVjIGxlIExhdmUgbGluZ2UsIHJhbmdlbWVudHMuLi5MYSBUZXJyYXNzZSBleHBvc1xcdTAwRTllIFN1ZC9PdWVzdCBlc3QgY291dmVydGUgZW4gUmV6IGRlIGphcmRpbiBhdmVjIHZ1ZSBzdXIgbGUgamFyZGluIGFyYm9yXFx1MDBFOS5UZWxldmlzaW9uIG5ldXZlIDRLICBncmFuZCBcXHUwMEU5Y3JhbiAxMjMgY20gLCBXaWZpICsgYm94LiBvcmFuZ2UuRGFucyBsYSBjaGFtYnJlIGxpdCBkZSAxNjAvMjAwIGF2ZWMgdW4gdHJcXHUwMEU4cyBib24gbWF0ZWxhcyBIYXV0IGRlIEdhbW1lIE5ldWYuQ2FuYXBcXHUwMEU5IGxpdCAxNDAvMTkwIE5ldWYgYXZlYyB1biBib24gbWF0ZWxhcyBIYXV0IGRlIEdhbW1lLkwnYXBwYXJ0ZW1lbnQgYSBcXHUwMEU5dFxcdTAwRTkgZW50aVxcdTAwRThyZW1lbnQgcmVwZW5zXFx1MDBFOSBwb3VyIHF1ZSB2b3MgdmFjYW5jZXMgc29pZW50IGxlIHBsdXMgYWdyXFx1MDBFOWFibGUgcG9zc2libGUgZGFucyB1biBlbnZpcm9ubmVtZW50IGNoYWxldXJldXguXCIpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNvbCwgeyBtZDogXCIyXCIsIHNtOiBcIjFcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkLCB7IGNsYXNzTmFtZTogXCJpbmZvc1wiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGl0bGUsIG51bGwsIFwiQWNjXFx1MDBFOHMgYXV4IHZveWFnZXVyc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGV4dCwgbnVsbCwgXCJWb3VzIHByb2ZpdGVyZXogZCd1biBhZ3JcXHUwMEU5YWJsZSBhcHBhcnRlbWVudCBlbnRpXFx1MDBFOHJlbWVudCByXFx1MDBFOW5vdlxcdTAwRTkgLiBFbiByZXogZGUgQ2hhdXNzXFx1MDBFOSB2b3VzIFxcdTAwRUF0ZXMgYXUgY2FsbWUgZXQgcHJvY2hlIGRlIHRvdXRlcyBsZXMgY29tbW9kaXRcXHUwMEU5cyBxdW90aWRpZW5uZXMuIFNpdHVcXHUwMEU5IFxcdTAwRTAgbGEgZnJvbnRpXFx1MDBFOHJlIGVudHJlIFNhaW50IFJhcGhhXFx1MDBFOGwgZXQgRnJcXHUwMEU5Z3VzLiBWb3VzIHBvdXZleiBhcnJpdmVyIGVuIHRyYWluIGxhIGdhcmUgZXN0IFxcdTAwRTAgNyBtbSBcXHUwMEUwIHBpZWQuXCIpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNvbCwgeyBtZDogXCIyXCIsIHNtOiBcIjFcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkLCB7IGNsYXNzTmFtZTogXCJpbmZvc1wiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkQm9keSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGl0bGUsIG51bGwsIFwiQWNjdWVpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGV4dCwgbnVsbCwgXCJOb3VzIHZvdXMgYWNjdWVpbGxlcm9ucyBkXFx1MDBFOXMgdm90cmUgYXJyaXZcXHUwMEU5ZSBwb3VyIGxhIHJlbWlzZSBkZXMgY2xcXHUwMEU5cyBldCBsJ2ludmVudGFpcmUuIE5vdXMgcG91cnJvbnMgdm91cyBndWlkZXIgZXQgdm91cyBjb25zZWlsbGVyIHBvdXIgbGVzIGJvbm5lcyBhZHJlc3NlcywgbGVzIGFjdGl2aXRcXHUwMEU5cyBsb2NhbGVzIHBvc3NpYmxlcy4uLlNpIHZvdXMgYXZleiB1biBzb3VjaXMgb3UgdW5lIGRlbWFuZGUgbm91cyB2b3VzIGxhaXNzZXJvbnMgbm9zIGNvb3Jkb25uXFx1MDBFOWVzIHRcXHUwMEU5bFxcdTAwRTlwaG9uaXF1ZXMuIFZvdHJlIGRcXHUwMEU5cGFydCBlbiBtYXRpblxcdTAwRTllIG5vdXMgdmllbmRyb25zIHZvdXMgZGlyZSBhdSByZXZvaXIgZXQgclxcdTAwRTljdXBcXHUwMEU5cmVyIGxlcyBjbFxcdTAwRTlzIGF2ZWMgdW4gaW52ZW50YWlyZS5cIikpKSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ29sLCB7IG1kOiBcIjJcIiwgc206IFwiMVwiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmQsIHsgY2xhc3NOYW1lOiBcImluZm9zXCIgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmRCb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNhcmRUaXRsZSwgbnVsbCwgXCJMZSBxdWFydGllclwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGV4dCwgbnVsbCwgXCJTaXR1XFx1MDBFOSBzdXIgdW4gZW1wbGFjZW1lbnQgaWRcXHUwMEU5YWwgbCdhcHBhcnRlbWVudCB2b3VzIHBlcm1ldHRyYSBkZSB2b3VzIHJlbmRyZSBlbiAyIG1tIFxcdTAwRTAgcGllZCBcXHUwMEUwIGxhIHBsYWdlLCBhdSB2aWV1eCBQb3J0LCBhdSBDZW50cmUgZGUgbGEgdmlsbGUuIExhIEdhcmUgZXN0IFxcdTAwRTAgNyBtbSBcXHUwMEUwIFBpZWQuIFRvdXRlcyBsZXMgY29tbW9kaXRcXHUwMEU5cyBzb250IFxcdTAwRTAgdm90cmUgcG9ydGUuIFBsdXMgYmVzb2luIGRlIHZvaXR1cmUgdm91cyBwb3VycmV6IGF1c3NpIHZpc2l0ZXIgU2FpbnQgVHJvcGV6IGV0IFNhaW50ZSBNYXhpbWUgZW4gYmF0ZWF1IGVuIHBhcnRhbnQgZHUgdmlldXggUG9ydC4gTGUgTWFyY2hcXHUwMEU5IGxlIERpbWFuY2hlIGVuIG1hdGluXFx1MDBFOWUgZXQgZGUgSnVpbGxldCBcXHUwMEUwIEFvXFx1MDBGQnQgdG91cyBsZXMgam91cnMgZW4gYm9ydCBkZSBtZXIganVzcXUnXFx1MDBFMCAyMkggdm91cyBwb3VycmV6IGF1c3NpIHZvdXMgeSByZW5kcmUgXFx1MDBFMCBwaWVkIGVuIDIgbW0gISEhZGUgc29ydGllLlwiKSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDb2wsIHsgbWQ6IFwiMlwiLCBzbTogXCIxXCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ2FyZCwgeyBjbGFzc05hbWU6IFwiaW5mb3NcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ2FyZEJvZHksIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ2FyZFRpdGxlLCBudWxsLCBcIkRcXHUwMEU5cGxhY2VtZW50c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJDYXJkVGV4dCwgbnVsbCwgXCJWb3VzIG4nYXVyZXogcGx1cyBiZXNvaW4gZGUgdm90cmUgdm9pdHVyZSBnYXJcXHUwMEU5ZSBkYW5zIGxlIGdhcmFnZSBhdSAxIGVyIFNvdXMtU29sLiBWb3VzIHBvdXJyZXogcHJvZml0ZXIgZGUgdG91dGVzIGxlcyBpbmZyYXN0cnVjdHVyZXMgZGUgU2FpbnQgUmFwaGFlbCBcXHUwMEUwIFBpZWQsIHZvdXMgZFxcdTAwRTlwbGFjZXIgYXVzc2kgZW4gQmF0ZWF1LlwiKSkpKSkpO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZm9zLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5mb3Muc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5mb3Muc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIG1kYnJlYWN0XzEgPSByZXF1aXJlKFwibWRicmVhY3RcIik7XG52YXIgRnVsbFBhZ2VJbnRyb1dpdGhGaXhlZFRyYW5zcGFyZW50TmF2YmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGdWxsUGFnZUludHJvV2l0aEZpeGVkVHJhbnNwYXJlbnROYXZiYXIsIF9zdXBlcik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZ1bmN0aW9uIEZ1bGxQYWdlSW50cm9XaXRoRml4ZWRUcmFuc3BhcmVudE5hdmJhcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xsYXBzZTogZmFsc2UsXG4gICAgICAgICAgICBpc1dpZGVFbm91Z2g6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGdWxsUGFnZUludHJvV2l0aEZpeGVkVHJhbnNwYXJlbnROYXZiYXIucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29sbGFwc2U6ICF0aGlzLnN0YXRlLmNvbGxhcHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZ1bGxQYWdlSW50cm9XaXRoRml4ZWRUcmFuc3BhcmVudE5hdmJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQk5hdmJhciwgeyBjb2xvcjogXCJibGFja1wiLCBkYXJrOiB0cnVlLCBleHBhbmQ6IFwibWRcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTmF2YmFyQnJhbmQsIHsgaHJlZjogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJBcHBhcnRlbWVudCBTdCBSYXBoYVxcdTAwRUJsXCIpKSxcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFxuICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmlzV2lkZUVub3VnaFxuICAgICAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJOYXZiYXJUb2dnbGVyLCB7IG9uQ2xpY2s6IHRoaXMub25DbGljayB9KSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQkNvbGxhcHNlLCB7IGlzT3BlbjogXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZSwgbmF2YmFyOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTmF2YmFyTmF2LCB7IHJpZ2h0OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtZGJyZWFjdF8xLk1EQk5hdkl0ZW0sIHsgYWN0aXZlOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJOYXZMaW5rLCB7IHRvOiBcIi9cIiB9LCBcIkFjY3VlaWxcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJOYXZJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCTmF2TGluaywgeyB0bzogXCIvZ2FsZXJpZVwiIH0sIFwiR2FsZXJpZVwiKSkpKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBGdWxsUGFnZUludHJvV2l0aEZpeGVkVHJhbnNwYXJlbnROYXZiYXI7XG59KHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZ1bGxQYWdlSW50cm9XaXRoRml4ZWRUcmFuc3BhcmVudE5hdmJhcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLypcbiAqIFBhY2thZ2UgSW1wb3J0XG4gKi9cbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbWRicmVhY3RfMSA9IHJlcXVpcmUoXCJtZGJyZWFjdFwiKTtcbi8qXG4gKiBMb2NhbCBJbXBvcnRcbiAqL1xudmFyIEhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0hlYWRlclwiKSk7XG5yZXF1aXJlKFwiLi9sYXlvdXQuc2Nzc1wiKTtcbnZhciBMYXlvdXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1kYnJlYWN0XzEuTURCQ29udGFpbmVyLCB7IGNsYXNzTmFtZTogXCJjb250YWluZXIgZmx1aWRcIiB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWRicmVhY3RfMS5NREJSb3csIG51bGwsIGNoaWxkcmVuKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMYXlvdXQ7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sYXlvdXQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sYXlvdXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGF5b3V0LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfZ29vZ2xlX21hcHNfMSA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTtcbnJlcXVpcmUoXCIuL21hcC5zY3NzXCIpO1xuZXhwb3J0cy5NYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdvb2dsZU1hcFVSTCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/dj0zLmV4cCZrZXk9QUl6YVN5QVR1VmdERTRjUjVDXzdla1hQbS1kVXgyWjQzSXVrb0U4JztcbiAgICB2YXIgc29tZUxhdExuZyA9IHsgbGF0OiA0My40MjYwMDQsIGxuZzogNi43NjQyNzQgfTtcbiAgICB2YXIgTXlHb29nbGVNYXAgPSByZWFjdF9nb29nbGVfbWFwc18xLndpdGhTY3JpcHRqcyhyZWFjdF9nb29nbGVfbWFwc18xLndpdGhHb29nbGVNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfZ29vZ2xlX21hcHNfMS5Hb29nbGVNYXAsIHsgZGVmYXVsdENlbnRlcjogc29tZUxhdExuZywgZGVmYXVsdFpvb206IDE2LCBvcHRpb25zOiB7IGRpc2FibGVEZWZhdWx0VUk6IHRydWUgfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfZ29vZ2xlX21hcHNfMS5NYXJrZXIsIHsgcG9zaXRpb246IHsgbGF0OiA0My40MjYwMDQsIGxuZzogNi43NjQyNzQgfSB9KSk7XG4gICAgfSkpO1xuICAgIHZhciBsb2FkaW5nRWxlbWVudCA9IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBoZWlnaHQ6ICc1MHZoJyB9IH0pO1xuICAgIHZhciBtYXBFbGVtZW50ID0gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBoZWlnaHQ6ICc1MHZoJyB9IH0pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTXlHb29nbGVNYXAsIHsgbG9hZGluZ0VsZW1lbnQ6IGxvYWRpbmdFbGVtZW50LCBjb250YWluZXJFbGVtZW50OiBjb250YWluZXJFbGVtZW50LCBnb29nbGVNYXBVUkw6IGdvb2dsZU1hcFVSTCwgbWFwRWxlbWVudDogbWFwRWxlbWVudCB9KSk7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFwLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21hcC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMV9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic3JjL2ltYWdlcy9wMS5wbmdcIikpO1xuLy9AdHMtaWdub3JlXG52YXIgcDJfcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDIucG5nXCIpKTtcbi8vQHRzLWlnbm9yZVxudmFyIHAzX2pwZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzcmMvaW1hZ2VzL3AzLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwNF9qcGdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic3JjL2ltYWdlcy9wNC5qcGdcIikpO1xuLy9AdHMtaWdub3JlXG52YXIgcDVfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDUuanBnXCIpKTtcbi8vQHRzLWlnbm9yZVxudmFyIHA2X2pwZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzcmMvaW1hZ2VzL3A2LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwN19qcGdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic3JjL2ltYWdlcy9wNy5qcGdcIikpO1xuLy9AdHMtaWdub3JlXG52YXIgcDhfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDguanBnXCIpKTtcbi8vQHRzLWlnbm9yZVxudmFyIHA5X2pwZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzcmMvaW1hZ2VzL3A5LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTBfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDEwLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTFfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDExLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTJfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDEyLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTNfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDEzLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTRfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDE0LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTVfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDE1LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTZfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDE2LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTdfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDE3LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMThfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDE4LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMTlfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDE5LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjBfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDIwLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjFfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDIxLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjJfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDIyLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjNfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDIzLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjRfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDI0LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjVfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDI1LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjZfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDI2LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjdfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDI3LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjhfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDI4LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMjlfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDI5LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzBfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDMwLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzFfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDMxLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzJfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDMyLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzNfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDMzLmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzRfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDM0LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzVfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDM1LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzZfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDM2LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzdfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDM3LmpwZ1wiKSk7XG4vL0B0cy1pZ25vcmVcbnZhciBwMzhfanBnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNyYy9pbWFnZXMvcDM4LmpwZ1wiKSk7XG5leHBvcnRzLmRhdGEgPSBbXG4gICAge1xuICAgICAgICBkZXM6IFwiMVwiLFxuICAgICAgICBpbWdTcmM6IHAxX3BuZ18xLmRlZmF1bHRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGVzOiBcIjJcIixcbiAgICAgICAgaW1nU3JjOiBwMl9wbmdfMS5kZWZhdWx0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRlczogXCIzXCIsXG4gICAgICAgIGltZ1NyYzogcDNfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiNFwiLFxuICAgICAgICBpbWdTcmM6IHA0X2pwZ18xLmRlZmF1bHRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGVzOiBcIjVcIixcbiAgICAgICAgaW1nU3JjOiBwNV9qcGdfMS5kZWZhdWx0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRlczogXCI2XCIsXG4gICAgICAgIGltZ1NyYzogcDZfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiN1wiLFxuICAgICAgICBpbWdTcmM6IHA3X2pwZ18xLmRlZmF1bHRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGVzOiBcIjhcIixcbiAgICAgICAgaW1nU3JjOiBwOF9qcGdfMS5kZWZhdWx0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRlczogXCI5XCIsXG4gICAgICAgIGltZ1NyYzogcDlfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTBcIixcbiAgICAgICAgaW1nU3JjOiBwMTBfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTFcIixcbiAgICAgICAgaW1nU3JjOiBwMTFfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTJcIixcbiAgICAgICAgaW1nU3JjOiBwMTJfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTNcIixcbiAgICAgICAgaW1nU3JjOiBwMTNfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTRcIixcbiAgICAgICAgaW1nU3JjOiBwMTRfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTVcIixcbiAgICAgICAgaW1nU3JjOiBwMTVfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTZcIixcbiAgICAgICAgaW1nU3JjOiBwMTZfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTdcIixcbiAgICAgICAgaW1nU3JjOiBwMTdfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMThcIixcbiAgICAgICAgaW1nU3JjOiBwMThfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMTlcIixcbiAgICAgICAgaW1nU3JjOiBwMTlfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjBcIixcbiAgICAgICAgaW1nU3JjOiBwMjBfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjFcIixcbiAgICAgICAgaW1nU3JjOiBwMjFfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjJcIixcbiAgICAgICAgaW1nU3JjOiBwMjJfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjNcIixcbiAgICAgICAgaW1nU3JjOiBwMjNfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjRcIixcbiAgICAgICAgaW1nU3JjOiBwMjRfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjVcIixcbiAgICAgICAgaW1nU3JjOiBwMjVfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjZcIixcbiAgICAgICAgaW1nU3JjOiBwMjZfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjdcIixcbiAgICAgICAgaW1nU3JjOiBwMjdfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjhcIixcbiAgICAgICAgaW1nU3JjOiBwMjhfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMjlcIixcbiAgICAgICAgaW1nU3JjOiBwMjlfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzBcIixcbiAgICAgICAgaW1nU3JjOiBwMzBfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzFcIixcbiAgICAgICAgaW1nU3JjOiBwMzFfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzJcIixcbiAgICAgICAgaW1nU3JjOiBwMzJfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzNcIixcbiAgICAgICAgaW1nU3JjOiBwMzNfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzRcIixcbiAgICAgICAgaW1nU3JjOiBwMzRfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzVcIixcbiAgICAgICAgaW1nU3JjOiBwMzVfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzZcIixcbiAgICAgICAgaW1nU3JjOiBwMzZfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzdcIixcbiAgICAgICAgaW1nU3JjOiBwMzdfanBnXzEuZGVmYXVsdFxuICAgIH0sXG4gICAge1xuICAgICAgICBkZXM6IFwiMzhcIixcbiAgICAgICAgaW1nU3JjOiBwMzhfanBnXzEuZGVmYXVsdFxuICAgIH1cbl07XG5leHBvcnRzLmltYWdlcyA9IFtcbiAgICB7XG4gICAgICAgIHNyYzogcDFfcG5nXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAyX3BuZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwM19qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDRfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHA1X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiAzLFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwNl9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDdfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHA4X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwOV9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDEwX2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMTFfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAxMl9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDEzX2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMTRfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAxNV9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDE2X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMTdfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAxOF9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDE5X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMjBfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAyMV9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDIyX2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMjNfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAyNF9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDI1X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMjZfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAyN19qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDI4X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMjlfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAzMF9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDMxX2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMzJfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAzM19qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDM0X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMzVfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IHAzNl9qcGdfMS5kZWZhdWx0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgaGVpZ2h0OiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcDM3X2pwZ18xLmRlZmF1bHQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBoZWlnaHQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBwMzhfanBnXzEuZGVmYXVsdCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIGhlaWdodDogNFxuICAgIH1cbl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBIb21lXzEgPSByZXF1aXJlKFwiY29tcG9uZW50cy9Ib21lXCIpO1xudmFyIEdhbGVyaWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29tcG9uZW50cy9HYWxlcmllXCIpKTtcbmV4cG9ydHMuZGVmYXVsdFJvdXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdIb21lJyxcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBIb21lXzEuSG9tZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdHYWxlcmllJyxcbiAgICAgICAgICAgIHBhdGg6ICcvZ2FsZXJpZScsXG4gICAgICAgICAgICBjb21wb25lbnQ6IEdhbGVyaWVfMS5kZWZhdWx0LFxuICAgICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gZGF0YTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AxLnBuZz9mYWNhMDQ2YmNmOGVlMzM5Mjc4NmVkYjU2MjI3ODU3MFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDEwLmpwZz8zMDI2M2ZhMzg5ZDIxMTI3MmMyMjVkOTVlZTFjN2Q4YVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDExLmpwZz9kMTZlYmZmYzgyZWUzZDBiN2M2NWI2NWFkM2M3ZjFmOVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDEyLmpwZz82MmRiNzQwYzVlZTQ5MmQ5NDQ4ZWZhZmJjOTlkZGE0MFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDEzLmpwZz81NDAwNWJmOWIxNmYwNWM3YWQ1M2Y2YWI2YWUxYzljMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDE0LmpwZz81YTQ1ZWQ1YWU5OTJjYjJjMmFlMDYyNDM4NDg4NWZiYVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDE1LmpwZz8xYWRiNGM3MmY0YjIwYTQ2ZjU2NWE2YmUyNDY0Y2FhOVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDE2LmpwZz8wYmYzNTUwYjg2Yzk1ZDhmNmVkY2I4NDc1OWJmMjgxZFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDE3LmpwZz8wZjQ4ODBiOGYyMzM4MmY2OGU4OWYyMDQxMzQzODBlYVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDE4LmpwZz9jMGMzMGQwY2RhZTI1ZTBkYWZiZDE3NzQ0ZGE3ZWU5ZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDE5LmpwZz82MzdlZGI0NTgyZTNhOTE0NDM5YjNkYWEyZTE3NzQzMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDIucG5nP2IzNGQ4ZTYyZjY0NmQzY2M4ZjkwZmFkY2FiYjZmZGJmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjAuanBnP2MxNTUyZjdkNzQ2OTdhNDBhM2M0OWE5N2ZmNDM0ZGIzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjEuanBnPzI4YjhmYTQ0MDBjYmZiMzg0MjJjZDI0ZDEzZTM2YWYxXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjIuanBnP2I4ZGIwMmZkMDg3NTBiNjMyMDlhMjNhOTg1NmZiMDNmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjMuanBnPzYwMjM1NzZlMGNlNjRhZDNjM2Y0Y2I5OTFlNGNiNzEwXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjQuanBnPzUxYTMwNWYxNTljZjc0MDBmMjZmODhmOTY4NzBkNmRkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjUuanBnP2FlMmI2ZjBkN2RjNjdjZmM5NmVjMDNiNjZmMTI5N2I4XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjYuanBnPzg5MjQ4NjE1YTI2NWU0YTE5ZDg1M2M5NWI2ZTdlZDE5XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjcuanBnP2UzZmZhNzQ3NzRlNDkzYmEyNGU1NzM1MDQyOWU2NzFmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjguanBnPzQ3NWQ0OGZhYmUwMzcyOTM5MWE2ZTUzMmE5Mjk1MzU3XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMjkuanBnPzFmOTIwMzZhNjYzNTMzZDZmNTYwNDIzZTc4NjQwMDM0XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wMy5qcGc/ZGIxZGE3NzNiNzdjMTgwMGYyMzUzN2ZmMzI1ZDcyMTJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzMC5qcGc/Y2IyNTE5Y2QyZmM1Mjc1ZWE2OGZhOGYzNzg1NjFiNzFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzMS5qcGc/OWJiZmI5MWFmNmFlOTczOWMyYzRlMzhkNGE3YTEzMWVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzMi5qcGc/ODIwODJjYzk0YjgyMzZlZWRiNjQ0YjgwYzJlYWM4MDNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzMy5qcGc/ZDMyYmU0OTc3MmFjYWEwMmNjNjU3NGI1NWYwZjAyNjBcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzNC5qcGc/ZmMyMmFkNDgzYjJlYmY5ZTVhNzA1NTVkYWYwMGUyMTJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzNS5qcGc/ODBhNmIwNzVhZGNlNGQzOTRlODdlNzA5MjhhZWJkNTZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzNi5qcGc/MmZjNDBlYzk3ZjVkZTYxZTA5ZDJiOTg0MGUwZTQ0OWNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzNy5qcGc/YTlmZDJhYjNiYWI0ZGZhYjFiYWQyNDQ0OWJkMjc3NWFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3AzOC5qcGc/NWY5NmM4YjdjZGIyMDYxZmQ2Y2NjMGIwYWUzMTcwODFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3A0LmpwZz9mMDMwZjZkZDJmNDJiYTQ4ZmMwZjFkZDEyM2UzYzJmNVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDUuanBnPzFmNWJhNDcxOWNhZDcyNTM1MWQ2MjBiZDUyZDAzYmRlXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wNi5qcGc/N2U2MjBjNDM0ZTAzYjdjYzZmNzViZjU5MjAyYmZlOTBcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3A3LmpwZz80MGVkMjE5ZjNmMGZiMWY0OTEzZjA0ZTE2NjExMWEwOFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9pbWFnZXMvcDguanBnP2U2NjE4YTAyMjZlMTM1OTFhZDgxYWZhZDVhY2MzZWNlXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9wOS5qcGc/ZjYxY2JjMWY3MDk1OTk2YTdhYzM3MmNiM2FjYmFmZjNcIjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG52YXIgQXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvbXBvbmVudHMvQXBwXCIpKTtcbnJlcXVpcmUoXCIuL3N0eWxlcy5zY3NzXCIpO1xudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xudmFyIGVhc3lfcGVhc3lfMSA9IHJlcXVpcmUoXCJlYXN5LXBlYXN5XCIpO1xudmFyIHN0b3JlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInN0b3JlXCIpKTtcbnJlYWN0X2RvbV8xLmRlZmF1bHQucmVuZGVyKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Ccm93c2VyUm91dGVyLCBudWxsLFxuICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGVhc3lfcGVhc3lfMS5TdG9yZVByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZV8xLmRlZmF1bHQgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwXzEuZGVmYXVsdCwgbnVsbCkpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlYXN5X3BlYXN5XzEgPSByZXF1aXJlKFwiZWFzeS1wZWFzeVwiKTtcbnZhciBtb2RlbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RlbHNcIikpO1xudmFyIF9hID0gZWFzeV9wZWFzeV8xLmNyZWF0ZVR5cGVkSG9va3MoKSwgdXNlQWN0aW9ucyA9IF9hLnVzZUFjdGlvbnMsIHVzZVN0b3JlID0gX2EudXNlU3RvcmUsIHVzZURpc3BhdGNoID0gX2EudXNlRGlzcGF0Y2g7XG5leHBvcnRzLnVzZUFjdGlvbnMgPSB1c2VBY3Rpb25zO1xuZXhwb3J0cy51c2VTdG9yZSA9IHVzZVN0b3JlO1xuZXhwb3J0cy51c2VEaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xudmFyIHN0b3JlID0gZWFzeV9wZWFzeV8xLmNyZWF0ZVN0b3JlKG1vZGVsc18xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RvcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlYXN5X3BlYXN5XzEgPSByZXF1aXJlKFwiZWFzeS1wZWFzeVwiKTtcbnZhciBhcHAgPSB7XG4gICAgbW9kYWw6IGZhbHNlLFxuICAgIHNldE1vZGFsOiBlYXN5X3BlYXN5XzEuYWN0aW9uKGZ1bmN0aW9uIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgICBzdGF0ZS5tb2RhbCA9IHBheWxvYWQ7XG4gICAgfSlcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBhcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcHBcIikpO1xuO1xudmFyIG1vZGVsID0ge1xuICAgIGFwcDogYXBwXzEuZGVmYXVsdCxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBtb2RlbDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=