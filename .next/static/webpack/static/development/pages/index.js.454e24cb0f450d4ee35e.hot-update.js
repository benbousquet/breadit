webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_home_cardShowcase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/cardShowcase */ "./components/home/cardShowcase.js");
/* harmony import */ var _components_home_explainationText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/explainationText */ "./components/home/explainationText.js");
/* harmony import */ var _components_home_lenderExplaination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/lenderExplaination */ "./components/home/lenderExplaination.js");
/* harmony import */ var _components_home_waitList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/waitList */ "./components/home/waitList.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_12__);








var _temp,
    _jsxFileName = "C:\\dev\\node_projects\\breadit\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Header,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Footer,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Content;
/* harmony default export */ __webpack_exports__["default"] = (new (_temp =
/*#__PURE__*/
function () {
  function _temp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _temp);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "componentDidMount", function () {
      react_scroll__WEBPACK_IMPORTED_MODULE_12__["Events"].scrollEvent.register("begin", function (to, element) {
        console.log("begin", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_12__["Events"].scrollEvent.register("end", function (to, element) {
        console.log("end", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_12__["scrollSpy"].update();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "componentWillUnmount", function () {
      react_scroll__WEBPACK_IMPORTED_MODULE_12__["Events"].scrollEvent.remove("begin");
      react_scroll__WEBPACK_IMPORTED_MODULE_12__["Events"].scrollEvent.remove("end");
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_temp, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
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
          lineNumber: 39
        },
        __self: this
      }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "1",
        to: "waitList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Apply for a Breadit Card"))), __jsx(Content, {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_components_home_cardShowcase__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx(_components_home_explainationText__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx(_components_home_lenderExplaination__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(_components_home_waitList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "waitList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Footer")));
    }
  }]);

  return _temp;
}(), _temp)());

/***/ })

})
//# sourceMappingURL=index.js.454e24cb0f450d4ee35e.hot-update.js.map