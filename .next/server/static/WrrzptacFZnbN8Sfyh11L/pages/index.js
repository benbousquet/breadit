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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1SKB":
/***/ (function(module, exports) {



/***/ }),

/***/ "1mXb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("KCAv");

__webpack_require__("bAY4");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "1rNB":
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "89vs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("1rNB");

__webpack_require__("QU2i");

__webpack_require__("1mXb");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "BQtn":
/***/ (function(module, exports) {



/***/ }),

/***/ "Fwwi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("YwLm");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "KCAv":
/***/ (function(module, exports) {



/***/ }),

/***/ "QU2i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("iGLF");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/css.js
var css = __webpack_require__("lBu3");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/style/css.js
var style_css = __webpack_require__("Fwwi");

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/antd/lib/typography/style/css.js
var typography_style_css = __webpack_require__("89vs");

// EXTERNAL MODULE: external "antd/lib/typography"
var typography_ = __webpack_require__("S4j3");
var typography_default = /*#__PURE__*/__webpack_require__.n(typography_);

// EXTERNAL MODULE: ./components/home/creditCard/style.css
var style = __webpack_require__("BQtn");

// CONCATENATED MODULE: ./components/home/creditCard/index.js

var __jsx = external_react_default.a.createElement;

/* harmony default export */ var creditCard = (() => __jsx("div", {
  class: "card"
}, __jsx("div", {
  class: "card__front card__part"
}, __jsx("img", {
  class: "card__front-square card__square",
  src: "https://image.ibb.co/cZeFjx/little_square.png"
}), __jsx("p", {
  class: "card_numer"
}, "**** **** **** 6258"), __jsx("div", {
  class: "card__space-75"
}, __jsx("span", {
  class: "card__label"
}, "Card holder"), __jsx("p", {
  class: "card__info"
}, "John Doe")), __jsx("div", {
  class: "card__space-25"
}, __jsx("span", {
  class: "card__label"
}, "Expires"), __jsx("p", {
  class: "card__info"
}, "10/25"))), __jsx("div", {
  class: "card__back card__part"
}, __jsx("div", {
  class: "card__black-line"
}), __jsx("div", {
  class: "card__back-content"
}, __jsx("div", {
  class: "card__secret"
}, __jsx("p", {
  class: "card__secret--last"
}, "420")), __jsx("img", {
  class: "card__back-square card__square",
  src: "https://image.ibb.co/cZeFjx/little_square.png"
}), __jsx("img", {
  class: "card__back-logo card__logo",
  src: "https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
})))));
// EXTERNAL MODULE: external "react-tilt"
var external_react_tilt_ = __webpack_require__("rZPD");
var external_react_tilt_default = /*#__PURE__*/__webpack_require__.n(external_react_tilt_);

// CONCATENATED MODULE: ./components/home/cardShowcase.js



var cardShowcase_jsx = external_react_default.a.createElement;


const {
  Title
} = typography_default.a;
/* harmony default export */ var cardShowcase = (() => cardShowcase_jsx("div", null, cardShowcase_jsx(Title, {
  style: {
    textAlign: "center",
    paddingTop: "20px"
  }
}, "Introducing the Breadit Card"), cardShowcase_jsx("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}, cardShowcase_jsx(external_react_tilt_default.a, {
  className: "Tilt",
  options: {
    max: 30
  },
  style: {
    height: 190,
    width: 320,
    padding: "30px 0"
  }
}, cardShowcase_jsx("div", {
  className: "Tilt-inner"
}, cardShowcase_jsx(creditCard, null))))));
// CONCATENATED MODULE: ./components/home/explainationText.js



var explainationText_jsx = external_react_default.a.createElement;
const {
  Title: explainationText_Title,
  Paragraph
} = typography_default.a;
/* harmony default export */ var explainationText = (() => explainationText_jsx("div", {
  style: {
    backgroundColor: "white",
    width: "100%"
  }
}, explainationText_jsx("div", {
  style: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
}, explainationText_jsx("div", {
  style: {
    width: "25%"
  }
}, explainationText_jsx(explainationText_Title, null, "Gain the availablity of a Creditcard but with all the requirements"), explainationText_jsx(Paragraph, null, "The ", explainationText_jsx("span", {
  style: {
    color: "brown"
  }
}, "Breadit Card"), " lets you get instant cash to use without needing a creditscore and retains the same availablity")), explainationText_jsx("img", {
  src: "/stock1.png"
}))));
// CONCATENATED MODULE: ./components/home/lenderExplaination.js



var lenderExplaination_jsx = external_react_default.a.createElement;
const {
  Title: lenderExplaination_Title,
  Paragraph: lenderExplaination_Paragraph
} = typography_default.a;
/* harmony default export */ var lenderExplaination = (() => lenderExplaination_jsx("div", {
  style: {
    width: "100%"
  }
}, lenderExplaination_jsx("div", {
  style: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
}, lenderExplaination_jsx("img", {
  src: "/stock2.png"
}), lenderExplaination_jsx("div", {
  style: {
    width: "25%"
  }
}, lenderExplaination_jsx(lenderExplaination_Title, null, "Got some extra cash? Invest it over time"), lenderExplaination_jsx(lenderExplaination_Paragraph, null, "Breadit allows you to loan money to other people though microloans. Let your money increase overtime with no effort at all!")))));
// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/css.js
var button_style_css = __webpack_require__("bAY4");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/css.js
var input_style_css = __webpack_require__("1mXb");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./components/home/waitList.js







var waitList_jsx = external_react_default.a.createElement;
const {
  Title: waitList_Title,
  Paragraph: waitList_Paragraph
} = typography_default.a;
/* harmony default export */ var waitList = (() => waitList_jsx("div", {
  style: {
    padding: "80px 0",
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
}, waitList_jsx("div", {
  style: {
    width: "50%"
  }
}, waitList_jsx("div", null, waitList_jsx(waitList_Title, null, "Interested?"), waitList_jsx(waitList_Paragraph, {
  style: {
    fontSize: "18px"
  }
}, "Enter your email to recieve information as we release them \uD83D\uDE0A")), waitList_jsx("div", {
  style: {
    display: "flex",
    flexDirection: "row"
  }
}, waitList_jsx(input_default.a, {
  size: "large",
  placeholder: "Email"
}), waitList_jsx(button_default.a, {
  size: "large",
  type: "primary"
}, "Sign Up")))));
// CONCATENATED MODULE: ./pages/index.js





var pages_jsx = external_react_default.a.createElement;




const {
  Header,
  Footer,
  Content
} = layout_default.a;
/* harmony default export */ var pages = __webpack_exports__["default"] = (() => pages_jsx("div", null, pages_jsx(layout_default.a, null, pages_jsx(Header, null, pages_jsx(menu_default.a, {
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: ["1"],
  style: {
    lineHeight: "64px",
    display: "flex",
    justifyContent: "center"
  }
}, pages_jsx(menu_default.a.Item, {
  key: "1"
}, "Home"), pages_jsx(menu_default.a.Item, {
  key: "2"
}, "Apply for a Breadit Card"))), pages_jsx(Content, {
  style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}, pages_jsx(cardShowcase, null), pages_jsx(explainationText, null), pages_jsx(lenderExplaination, null), pages_jsx(waitList, {
  id: "waitList"
})), pages_jsx(Footer, null, "Footer"))));

/***/ }),

/***/ "Rdar":
/***/ (function(module, exports) {



/***/ }),

/***/ "S4j3":
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "YwLm":
/***/ (function(module, exports) {



/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "bAY4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("Rdar");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "iGLF":
/***/ (function(module, exports) {



/***/ }),

/***/ "lBu3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("vVUs");

__webpack_require__("QU2i");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "rZPD":
/***/ (function(module, exports) {

module.exports = require("react-tilt");

/***/ }),

/***/ "vVUs":
/***/ (function(module, exports) {



/***/ })

/******/ });