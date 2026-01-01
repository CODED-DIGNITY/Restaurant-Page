/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/hero.png */ \"./src/assets/images/hero.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=BBH+Bogle&family=Inter:wght@300;400;600&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n\t--ramen-red: #bc2026;\r\n\t--ramen-gold: #d4af37;\r\n\t--nori-black: #1a1a1a;\r\n\t--broth-white: #fdfaf5;\r\n\t--wood-dark: #2c1e14;\r\n}\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: var(--broth-white);\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tcolor: var(--nori-black);\r\n\tline-height: 1.6;\r\n}\r\n\r\nnav {\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\theight: 80px;\r\n\tbackground-color: rgba(253, 250, 245, 0.95);\r\n\tbackdrop-filter: blur(5px);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 3rem;\r\n\tz-index: 1000;\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\nnav button {\r\n\tbackground: none;\r\n\tborder: none;\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--nori-black);\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n\tpadding: 5px 0;\r\n}\r\n\r\nnav button::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 6px;\r\n\theight: 6px;\r\n\tbackground: var(--ramen-red);\r\n\tborder-radius: 50%;\r\n\tbottom: -5px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%) scale(0);\r\n\ttransition: transform 0.2s ease;\r\n}\r\n\r\nnav button:hover::after {\r\n\ttransform: translateX(-50%) scale(1);\r\n}\r\n\r\n.hero {\r\n\theight: 92vh;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: var(--nori-black);\r\n\tbackground: var(--broth-white);\r\n}\r\n\r\n.hero::before {\r\n\tdisplay: none;\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n.left {\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\ttext-align: center;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: #000;\r\n}\r\n.right {\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n@media (max-width: 768px) {\r\n\t.left,\r\n\t.right {\r\n\t\twidth: 100%;\r\n\t}\r\n\t.hero {\r\n\t\tflex-direction: column;\r\n\t\tpadding: 2rem 0;\r\n\t}\r\n}\r\n.hero-img {\r\n\twidth: 90%;\r\n\theight: 85%;\r\n\tbackground: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.hero-head,\r\n.hero-tag,\r\n.hero-btn {\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tz-index: 2;\r\n}\r\n\r\n.hero-head {\r\n\tfont-family: \"BBH Bogle\", serif;\r\n\tfont-size: 5rem;\r\n\tmargin: 0;\r\n\tmargin-top: -50px;\r\n\tfont-weight: 400;\r\n\tletter-spacing: -2px;\r\n}\r\n\r\n.hero-tag {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 300;\r\n\tmargin-top: 1rem;\r\n\topacity: 0.9;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n.hero-btn {\r\n\tmargin-top: 3rem;\r\n\tpadding: 15px 40px;\r\n\tcolor: #fff;\r\n\tbackground: var(--nori-black);\r\n\tborder: none;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tcursor: pointer;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.hero-btn:hover {\r\n\tbackground: var(--ramen-red);\r\n\tcolor: #fff;\r\n}\r\n\r\n.menu {\r\n\tbackground-color: var(--broth-white);\r\n\tpadding: 2rem;\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.menu-title {\r\n\tfont-family: \"BBH Bogle\", serif;\r\n\tfont-size: 3rem;\r\n\ttext-align: center;\r\n\tmargin-bottom: 5rem;\r\n\tmargin-top: 0px;\r\n\tcolor: var(--nori-black);\r\n}\r\n\r\n.menu-grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n\tgap: 4rem 2rem;\r\n\tmax-width: 1200px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.ramen-card {\r\n\tbackground: transparent;\r\n\tpadding: 0;\r\n\tborder: none;\r\n\tborder-radius: 50px;\r\n\tbox-shadow: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\ttext-align: center;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n.ramen-card img {\r\n\twidth: 100%;\r\n\taspect-ratio: 1 / 1;\r\n\tobject-fit: cover;\r\n\tmargin-bottom: 1.5rem;\r\n\tborder-radius: 50%;\r\n\tfilter: brightness(0.95);\r\n\ttransition: filter 0.3s ease;\r\n}\r\n\r\n.ramen-card:hover img {\r\n\tfilter: brightness(1.1);\r\n}\r\n.ramen-card:hover {\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.ramen-card h3 {\r\n\tfont-family: \"BBH Bogle\", serif;\r\n\tfont-size: 1.6rem;\r\n\tfont-weight: 400;\r\n\tmargin: 0 0 0.5rem 0;\r\n\tcolor: var(--nori-black);\r\n}\r\n\r\n.ramen-card p {\r\n\tfont-size: 0.9rem;\r\n\tcolor: #666;\r\n\tmargin-bottom: 1rem;\r\n\tline-height: 1.5;\r\n}\r\n\r\n.ramen-card span {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--ramen-red);\r\n\tmargin-top: auto;\r\n}\r\n\r\n.about {\r\n\theight: 92vh;\r\n\tbackground: var(--broth-white);\r\n\tpadding: 2rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.about-glass {\r\n\tmax-width: 700px;\r\n\tbackground: transparent;\r\n\tborder: none;\r\n\tbox-shadow: none;\r\n\ttext-align: center;\r\n\tpadding: 0;\r\n}\r\n\r\n.about-glass h2 {\r\n\tfont-family: \"BBH Bogle\", serif;\r\n\tfont-size: 2.5rem;\r\n\tmargin-bottom: 2rem;\r\n\tmargin-top: 0px;\r\n\tcolor: var(--nori-black);\r\n}\r\n\r\n.about-glass p {\r\n\tfont-size: 1.1rem;\r\n\tcolor: #444;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.about-glass span {\r\n\tdisplay: block;\r\n\tmargin-top: 3rem;\r\n\tfont-family: \"Inter\", sans-serif;\r\n\tfont-size: 0.8rem;\r\n\tletter-spacing: 3px;\r\n\ttext-transform: uppercase;\r\n\tcolor: var(--ramen-gold);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\t.hero-head {\r\n\t\tfont-size: 3.5rem;\r\n\t}\r\n\tnav {\r\n\t\tgap: 1rem;\r\n\t}\r\n\t.menu-grid {\r\n\t\tgap: 3rem;\r\n\t}\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\nfunction About() {\r\n\tconst section = document.createElement(\"section\");\r\n\tsection.className = \"about\";\r\n\r\n\tsection.innerHTML = `\r\n    <div class=\"about-glass\">\r\n      <h2>Our Story</h2>\r\n      <p>\r\n        Midnight Ramen was born in the quiet hours, when the city is half asleep\r\n        and hunger feels louder than traffic.\r\n      </p>\r\n      <p>\r\n        We slow-simmer our broths for hours, because shortcuts taste like regret.\r\n        Every bowl is built to warm cold hands, tired minds, and hungry souls.\r\n      </p>\r\n      <p>\r\n        No frozen shortcuts. No fake flavors. Just honest bowls under neon lights.\r\n      </p>\r\n      <span>Open till late. Open for you.</span>\r\n    </div>\r\n  `;\r\n\r\n\treturn section;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/assets/images/hero.png"
/*!************************************!*\
  !*** ./src/assets/images/hero.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"627fc48bcc74c013fc01.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/hero.png?\n}");

/***/ },

/***/ "./src/assets/images/miso.jpg"
/*!************************************!*\
  !*** ./src/assets/images/miso.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b3caa2cbb1cfeb8d736e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/miso.jpg?\n}");

/***/ },

/***/ "./src/assets/images/shoyu.jpg"
/*!*************************************!*\
  !*** ./src/assets/images/shoyu.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1c8d36991025e72923ae.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/shoyu.jpg?\n}");

/***/ },

/***/ "./src/assets/images/spicy.jpg"
/*!*************************************!*\
  !*** ./src/assets/images/spicy.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ea0f4f7adb221fa65ca5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/spicy.jpg?\n}");

/***/ },

/***/ "./src/assets/images/tonkotsu.jpg"
/*!****************************************!*\
  !*** ./src/assets/images/tonkotsu.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c85f1f84f730dec7327d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/tonkotsu.jpg?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\nfunction Home(onTabClick = () => {}) {\r\n\tconst div = document.createElement(\"div\");\r\n\tdiv.innerHTML = `\r\n    <div class=\"hero\">\r\n\t\t\t<div class=\"left\">\r\n\t\t\t\t<h1 class=\"hero-head\">Midnight Ramen</h1>\r\n\t\t\t\t<p class=\"hero-tag\">\r\n\t\t\t\t\tSlow simmered broths. Neon nights. Soul healing bowls.\r\n\t\t\t\t</p>\r\n\t\t\t\t<button class=\"hero-btn\">View Menu</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"right\">\r\n\t\t\t\t<div class=\"hero-img\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  `;\r\n\tdiv\r\n\t\t.querySelector(\".hero-btn\")\r\n\t\t.addEventListener(\"click\", () => onTabClick(\"Menu\"));\r\n\treturn div;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Restaurant Page Loaded\");\r\nconst content = document.getElementById(\"content\");\r\n\r\nfunction loadPage(page) {\r\n\tcontent.innerHTML = \"\";\r\n\tconsole.log(\"Loading:\", page);\r\n\r\n\tconst pages = { Home: _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Menu: _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], About: _about__WEBPACK_IMPORTED_MODULE_3__[\"default\"] };\r\n\tcontent.appendChild(pages[page](loadPage));\r\n}\r\n\r\nconst nav = (0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(loadPage);\r\ndocument.body.insertBefore(nav, content);\r\n\r\nloadPage(\"Home\");\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_tonkotsu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/tonkotsu.jpg */ \"./src/assets/images/tonkotsu.jpg\");\n/* harmony import */ var _assets_images_miso_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/miso.jpg */ \"./src/assets/images/miso.jpg\");\n/* harmony import */ var _assets_images_shoyu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/shoyu.jpg */ \"./src/assets/images/shoyu.jpg\");\n/* harmony import */ var _assets_images_spicy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/spicy.jpg */ \"./src/assets/images/spicy.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction Menu() {\r\n\tconst section = document.createElement(\"section\");\r\n\tsection.className = \"menu\";\r\n\r\n\tsection.innerHTML = `\r\n    <h2 class=\"menu-title\">Our Bowls</h2>\r\n    <div class=\"menu-grid\">\r\n      ${card(\r\n\t\t\t\t\"Tonkotsu Ramen\",\r\n\t\t\t\t\"Rich pork bone broth, 12h simmer\",\r\n\t\t\t\t\"₹320\",\r\n\t\t\t\t_assets_images_tonkotsu_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n\t\t\t)}\r\n      ${card(\r\n\t\t\t\t\"Miso Ramen\",\r\n\t\t\t\t\"Savory fermented miso, garlic oil\",\r\n\t\t\t\t\"₹290\",\r\n\t\t\t\t_assets_images_miso_jpg__WEBPACK_IMPORTED_MODULE_1__\r\n\t\t\t)}\r\n      ${card(\r\n\t\t\t\t\"Shoyu Ramen\",\r\n\t\t\t\t\"Classic soy broth, light & clean\",\r\n\t\t\t\t\"₹270\",\r\n\t\t\t\t_assets_images_shoyu_jpg__WEBPACK_IMPORTED_MODULE_2__\r\n\t\t\t)}\r\n      ${card(\r\n\t\t\t\t\"Spicy Dragon\",\r\n\t\t\t\t\"Chilli paste, sesame oil, heat\",\r\n\t\t\t\t\"₹340\",\r\n\t\t\t\t_assets_images_spicy_jpg__WEBPACK_IMPORTED_MODULE_3__\r\n\t\t\t)}\r\n    </div>\r\n  `;\r\n\r\n\treturn section;\r\n}\r\n\r\nfunction card(name, desc, price, img) {\r\n\treturn `\r\n    <div class=\"ramen-card\">\r\n      <img src=\"${img}\" alt=\"${name}\">\r\n      <h3>${name}</h3>\r\n      <p>${desc}</p>\r\n      <span>${price}</span>\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/navbar.js"
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\nfunction Navbar(onTabClick) {\r\n\tconst nav = document.createElement(\"nav\");\r\n\r\n\t[\"Home\", \"Menu\", \"About\"].forEach((tab) => {\r\n\t\tconst btn = document.createElement(\"button\");\r\n\t\tbtn.textContent = tab;\r\n\t\tbtn.addEventListener(\"click\", () => onTabClick(tab));\r\n\t\tnav.appendChild(btn);\r\n\t});\r\n\r\n\treturn nav;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;