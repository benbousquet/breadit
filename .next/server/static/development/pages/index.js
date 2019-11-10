module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/button/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/input/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/input/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/layout/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/layout/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/layout/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/menu/style/index.css");

__webpack_require__(/*! ../../tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/style/index.css":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/style/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tooltip/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/typography/style/css.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/typography/style/css.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/typography/style/index.css");

__webpack_require__(/*! ../../tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");

__webpack_require__(/*! ../../input/style/css */ "./node_modules/antd/lib/input/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/typography/style/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/typography/style/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tilt */ "react-tilt");
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_tilt__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\dev\\node_projects\\breadit\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

const {
  Header,
  Footer,
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a;
const {
  Title
} = antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default.a;
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: ["1"],
  style: {
    lineHeight: "64px",
    display: "flex",
    justifyContent: "center"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
  key: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Home"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
  key: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Apply for a Breadit Card"))), __jsx(Content, {
  style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(Title, {
  style: {
    textAlign: "center",
    paddingTop: "20px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Introducing the Breadit Card"), __jsx(react_tilt__WEBPACK_IMPORTED_MODULE_7___default.a, {
  className: "Tilt",
  options: {
    max: 30
  },
  style: {
    height: 500,
    width: 500,
    display: "flex",
    justifySelf: "center"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  className: "Tilt-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("img", {
  style: {
    height: 500
  },
  src: "/stock4.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
})))), __jsx(Footer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Footer"))));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\node_projects\breadit\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/typography":
/*!**************************************!*\
  !*** external "antd/lib/typography" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tilt":
/*!*****************************!*\
  !*** external "react-tilt" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tilt");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map