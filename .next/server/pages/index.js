"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"Link\": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_1__.default)\n/* harmony export */ });\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/components/layout.jsx\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./src/components/link.jsx\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctZWxldmVudHkvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcz8yYWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbmV4cG9ydCB7IExheW91dCwgTGluayB9O1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/index.js\n");

/***/ }),

/***/ "./src/components/layout.jsx":
/*!***********************************!*\
  !*** ./src/components/layout.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ \"./src/components/index.js\");\n\n\nvar _jsxFileName = \"/Users/leo.generali/Programming/Personal/personal-site/src/components/layout.jsx\";\n\n\nfunction Layout({\n  children\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: \"container w-full mx-auto mt-12 mb-32 px-6 md:px-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"flex\",\n        children: _constants__WEBPACK_IMPORTED_MODULE_1__.NAV.map((link, index) => {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: index === 0 ? \"mr-auto\" : \"mr-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Link, {\n              href: link.slug,\n              children: link.anchor\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 17\n            }, this)\n          }, link.slug, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"container w-full mx-auto flex-grow px-6 md:px-10\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: \"container w-full mx-auto mt-32 pb-8 px-6 md:px-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-xs\",\n        children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Link, {\n          href: \"https://nextjs.org/\",\n          children: \"NextJS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 22\n        }, this), \" and\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Link, {\n          href: \"https://tailwindcss.com/\",\n          children: \"TailwindCSS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNFLE1BQVQsQ0FBZ0I7QUFBRUMsRUFBQUE7QUFBRixDQUFoQixFQUE4QjtBQUMzQyxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG9EQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQSxrQkFDR0gsK0NBQUEsQ0FBUSxDQUFDSyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDeEIsOEJBQ0U7QUFBb0IscUJBQVMsRUFBRUEsS0FBSyxLQUFLLENBQVYsR0FBYyxTQUFkLEdBQTBCLE1BQXpEO0FBQUEsbUNBQ0UsOERBQUMsNkNBQUQ7QUFBTSxrQkFBSSxFQUFFRCxJQUFJLENBQUNFLElBQWpCO0FBQUEsd0JBQXdCRixJQUFJLENBQUNHO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFTSCxJQUFJLENBQUNFLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUtELFNBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUU7QUFBTSxlQUFTLEVBQUMsa0RBQWhCO0FBQUEsZ0JBQ0dKO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBZUU7QUFBUSxlQUFTLEVBQUMsbURBQWxCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLFNBQWI7QUFBQSwrQ0FDYSw4REFBQyw2Q0FBRDtBQUFNLGNBQUksRUFBQyxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYixVQUNnRSxHQURoRSxlQUVFLDhEQUFDLDZDQUFEO0FBQU0sY0FBSSxFQUFDLDBCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBLGtCQURGO0FBd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1lbGV2ZW50eS8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qc3g/MmY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOQVYgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250YWluZXIgdy1mdWxsIG14LWF1dG8gbXQtMTIgbWItMzIgcHgtNiBtZDpweC0xMFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIHtOQVYubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17bGluay5zbHVnfSBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJtci1hdXRvXCIgOiBcIm1yLTJcIn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5zbHVnfT57bGluay5hbmNob3J9PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHctZnVsbCBteC1hdXRvIGZsZXgtZ3JvdyBweC02IG1kOnB4LTEwXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctZnVsbCBteC1hdXRvIG10LTMyIHBiLTggcHgtNiBtZDpweC0xMFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+XG4gICAgICAgICAgUG93ZXJlZCBieSA8TGluayBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiPk5leHRKUzwvTGluaz4gYW5ke1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhaWx3aW5kY3NzLmNvbS9cIj5UYWlsd2luZENTUzwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTkFWIiwiTGluayIsIkxheW91dCIsImNoaWxkcmVuIiwibWFwIiwibGluayIsImluZGV4Iiwic2x1ZyIsImFuY2hvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout.jsx\n");

/***/ }),

/***/ "./src/components/link.jsx":
/*!*********************************!*\
  !*** ./src/components/link.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Link)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/leo.generali/Programming/Personal/personal-site/src/components/link.jsx\";\nfunction Link({\n  href,\n  children\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n    className: \"text-indigo-400 hover:text-indigo-600 underline\",\n    href: href,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saW5rLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFNBQVNBLElBQVQsQ0FBYztBQUFFQyxFQUFBQSxJQUFGO0FBQVFDLEVBQUFBO0FBQVIsQ0FBZCxFQUFrQztBQUMvQyxzQkFDRTtBQUFHLGFBQVMsRUFBQyxpREFBYjtBQUErRCxRQUFJLEVBQUVELElBQXJFO0FBQUEsY0FDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctZWxldmVudHkvLi9zcmMvY29tcG9uZW50cy9saW5rLmpzeD82NDlmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBocmVmLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIGhvdmVyOnRleHQtaW5kaWdvLTYwMCB1bmRlcmxpbmVcIiBocmVmPXtocmVmfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsImhyZWYiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/link.jsx\n");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NAV\": () => (/* binding */ NAV),\n/* harmony export */   \"PROJECTS\": () => (/* binding */ PROJECTS)\n/* harmony export */ });\nconst NAV = [{\n  anchor: \"Home\",\n  slug: \"/\"\n}, {\n  anchor: \"Writing\",\n  slug: \"/writing/\"\n}];\nconst PROJECTS = [{\n  pageTitle: \"Better Gradient Tool\",\n  order: \"1\",\n  name: \"Better Gradient Tool 🎨\",\n  description: \"Gradient selecting tool built with React. Helps developers and designers find new gradient color schemes to use on their websites. User can filter by color to quickly find gradients for their projects. Save the gradients you love to your favorites and come back to them at any time - even if you close your browser.\",\n  liveUrl: \"https://leo-generali.github.io/better-gradient-tool/\",\n  githubUrl: \"https://github.com/leo-generali/better-gradient-tool\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsR0FBRyxHQUFHLENBQ2pCO0FBQ0VDLEVBQUFBLE1BQU0sRUFBRSxNQURWO0FBRUVDLEVBQUFBLElBQUksRUFBRTtBQUZSLENBRGlCLEVBS2pCO0FBQ0VELEVBQUFBLE1BQU0sRUFBRSxTQURWO0FBRUVDLEVBQUFBLElBQUksRUFBRTtBQUZSLENBTGlCLENBQVo7QUFXQSxNQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsRUFBQUEsU0FBUyxFQUFFLHNCQURiO0FBRUVDLEVBQUFBLEtBQUssRUFBRSxHQUZUO0FBR0VDLEVBQUFBLElBQUksRUFBRSx5QkFIUjtBQUlFQyxFQUFBQSxXQUFXLEVBQ1QsNlRBTEo7QUFNRUMsRUFBQUEsT0FBTyxFQUFFLHNEQU5YO0FBT0VDLEVBQUFBLFNBQVMsRUFBRTtBQVBiLENBRHNCLENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1lbGV2ZW50eS8uL3NyYy9jb25zdGFudHMuanM/NWZiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTkFWID0gW1xuICB7XG4gICAgYW5jaG9yOiBcIkhvbWVcIixcbiAgICBzbHVnOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIGFuY2hvcjogXCJXcml0aW5nXCIsXG4gICAgc2x1ZzogXCIvd3JpdGluZy9cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUUyA9IFtcbiAge1xuICAgIHBhZ2VUaXRsZTogXCJCZXR0ZXIgR3JhZGllbnQgVG9vbFwiLFxuICAgIG9yZGVyOiBcIjFcIixcbiAgICBuYW1lOiBcIkJldHRlciBHcmFkaWVudCBUb29sIPCfjqhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR3JhZGllbnQgc2VsZWN0aW5nIHRvb2wgYnVpbHQgd2l0aCBSZWFjdC4gSGVscHMgZGV2ZWxvcGVycyBhbmQgZGVzaWduZXJzIGZpbmQgbmV3IGdyYWRpZW50IGNvbG9yIHNjaGVtZXMgdG8gdXNlIG9uIHRoZWlyIHdlYnNpdGVzLiBVc2VyIGNhbiBmaWx0ZXIgYnkgY29sb3IgdG8gcXVpY2tseSBmaW5kIGdyYWRpZW50cyBmb3IgdGhlaXIgcHJvamVjdHMuIFNhdmUgdGhlIGdyYWRpZW50cyB5b3UgbG92ZSB0byB5b3VyIGZhdm9yaXRlcyBhbmQgY29tZSBiYWNrIHRvIHRoZW0gYXQgYW55IHRpbWUgLSBldmVuIGlmIHlvdSBjbG9zZSB5b3VyIGJyb3dzZXIuXCIsXG4gICAgbGl2ZVVybDogXCJodHRwczovL2xlby1nZW5lcmFsaS5naXRodWIuaW8vYmV0dGVyLWdyYWRpZW50LXRvb2wvXCIsXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sZW8tZ2VuZXJhbGkvYmV0dGVyLWdyYWRpZW50LXRvb2xcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiTkFWIiwiYW5jaG9yIiwic2x1ZyIsIlBST0pFQ1RTIiwicGFnZVRpdGxlIiwib3JkZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaXZlVXJsIiwiZ2l0aHViVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants.js\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\n\nvar _jsxFileName = \"/Users/leo.generali/Programming/Personal/personal-site/src/pages/index.jsx\";\n\n\nfunction HomePage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"mb-20\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"intro text-white mb-24 text-4xl font-extrabold reveal leading-tight\",\n        style: {\n          \"--animation-delay\": \"0.2s\",\n          \"--animation-reveal-start-pos\": \"-1rem\",\n          lineHeight: 1.1111111\n        },\n        children: [\"Hey there!\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"mr-1\",\n          role: \"img\",\n          \"aria-label\": \"Wave emoji\",\n          children: \"\\uD83D\\uDC4B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this), \" \", \"I'm Leo, a software engineer living and working in New York City.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flow reveal\",\n        style: {\n          \"--animation-delay\": \"0.5s\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"I'm currently working over at\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: \"https://www.hearstautos.com/\",\n            children: \"Hearst Autos\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), \" where I help build applications that connect automobile shoppers and vendors.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Getting in touch with me is easy! You can find me on\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: \"https://twitter.com/itsLeeOhGee\",\n            children: \"Twitter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), \",\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: \"https://www.linkedin.com/in/leogenerali/\",\n            children: \"LinkedIn\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), \", or \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: \"https://github.com/leo-generali\",\n            children: \"Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 18\n          }, this), \". To say hello, you can\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: \"mailto:me@leogenerali.com?Subject=Hello!\",\n            children: \"reach me by email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this), \".\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"If I'm not coding I'm probably out running. If that sounds like your type of thing, you can\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: \"https://www.strava.com/athletes/11876587\",\n            children: \"check out my latest runs\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this), \" \", \"on Strava.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"When I find myself with a spare minute or two I enjoy working on personal projects. I'll typically try to solve an issue I'm running into. I learn a thing or two in the process and maybe solve a problem for others too. Here are some of the cooler things I've made:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"reveal\",\n      style: {\n        \"--animation-delay\": \"0.7s\"\n      },\n      children: _constants__WEBPACK_IMPORTED_MODULE_2__.PROJECTS.map(project => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-xl font-bold mb-4\",\n            children: project.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flow border-l-4 border-gray-500 pl-4\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: project.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n              href: project.liveUrl,\n              children: \"Live\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, this), \" |\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n              href: project.githubUrl,\n              children: \"Github\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, this)]\n        }, project.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0csUUFBVCxHQUFvQjtBQUNqQyxzQkFDRSw4REFBQywrQ0FBRDtBQUFBLDRCQUNFO0FBQVMsZUFBUyxFQUFDLE9BQW5CO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFDLHFFQURaO0FBRUUsYUFBSyxFQUFFO0FBQ0wsK0JBQXFCLE1BRGhCO0FBRUwsMENBQWdDLE9BRjNCO0FBR0xDLFVBQUFBLFVBQVUsRUFBRTtBQUhQLFNBRlQ7QUFBQSxpQ0FRYSxHQVJiLGVBU0U7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQXVCLGNBQUksRUFBQyxLQUE1QjtBQUFrQyx3QkFBVyxZQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixFQVNzRSxHQVR0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWFFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRTtBQUFFLCtCQUFxQjtBQUF2QixTQUFwQztBQUFBLGdDQUNFO0FBQUEsc0RBQ2dDLEdBRGhDLGVBRUUsOERBQUMsNkNBQUQ7QUFBTSxnQkFBSSxFQUFDLDhCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUEsNkVBQ3VELEdBRHZELGVBRUUsOERBQUMsNkNBQUQ7QUFBTSxnQkFBSSxFQUFDLGlDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLE9BRStELEdBRi9ELGVBR0UsOERBQUMsNkNBQUQ7QUFBTSxnQkFBSSxFQUFDLDBDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLHdCQU1PLDhEQUFDLDZDQUFEO0FBQU0sZ0JBQUksRUFBQyxpQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOUCw2QkFPcUIsR0FQckIsZUFRRSw4REFBQyw2Q0FBRDtBQUFNLGdCQUFJLEVBQUMsMENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBb0JFO0FBQUEsb0hBRXlCLEdBRnpCLGVBR0UsOERBQUMsNkNBQUQ7QUFBTSxnQkFBSSxFQUFDLDBDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLEVBS1UsR0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGLGVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW1ERTtBQUNFLGVBQVMsRUFBQyxRQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0wsNkJBQXFCO0FBRGhCLE9BRlQ7QUFBQSxnQkFNR0Ysb0RBQUEsQ0FBY0ksT0FBRCxJQUFhO0FBQ3pCLDRCQUNFO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLHdCQUFiO0FBQUEsc0JBQXVDQSxPQUFPLENBQUNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsc0NBQWY7QUFBQSxtQ0FDRTtBQUFBLHdCQUFJRCxPQUFPLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFLRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFLDhEQUFDLDZDQUFEO0FBQU0sa0JBQUksRUFBRUYsT0FBTyxDQUFDRyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixRQUM2QyxHQUQ3QyxlQUVFLDhEQUFDLDZDQUFEO0FBQU0sa0JBQUksRUFBRUgsT0FBTyxDQUFDSSxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQSxXQUFVSixPQUFPLENBQUNDLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFZRCxPQWJBO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctZWxldmVudHkvLi9zcmMvcGFnZXMvaW5kZXguanN4PzBlZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0LCBMaW5rIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUFJPSkVDVFMgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTIwXCI+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNsYXNzTmFtZT1cImludHJvIHRleHQtd2hpdGUgbWItMjQgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgcmV2ZWFsIGxlYWRpbmctdGlnaHRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBcIi0tYW5pbWF0aW9uLWRlbGF5XCI6IFwiMC4yc1wiLFxuICAgICAgICAgICAgXCItLWFuaW1hdGlvbi1yZXZlYWwtc3RhcnQtcG9zXCI6IFwiLTFyZW1cIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMTExMTExMSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgSGV5IHRoZXJlIXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xXCIgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJXYXZlIGVtb2ppXCI+8J+Rizwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgSSdtIExlbywgYSBzb2Z0d2FyZSBlbmdpbmVlciBsaXZpbmcgYW5kIHdvcmtpbmcgaW4gTmV3IFlvcmsgQ2l0eS5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG93IHJldmVhbFwiIHN0eWxlPXt7IFwiLS1hbmltYXRpb24tZGVsYXlcIjogXCIwLjVzXCIgfX0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJJ20gY3VycmVudGx5IHdvcmtpbmcgb3ZlciBhdHtcIiBcIn1cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5oZWFyc3RhdXRvcy5jb20vXCI+SGVhcnN0IEF1dG9zPC9MaW5rPiB3aGVyZVxuICAgICAgICAgICAgSSBoZWxwIGJ1aWxkIGFwcGxpY2F0aW9ucyB0aGF0IGNvbm5lY3QgYXV0b21vYmlsZSBzaG9wcGVycyBhbmRcbiAgICAgICAgICAgIHZlbmRvcnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0dGluZyBpbiB0b3VjaCB3aXRoIG1lIGlzIGVhc3khIFlvdSBjYW4gZmluZCBtZSBvbntcIiBcIn1cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2l0c0xlZU9oR2VlXCI+VHdpdHRlcjwvTGluaz4se1wiIFwifVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sZW9nZW5lcmFsaS9cIj5cbiAgICAgICAgICAgICAgTGlua2VkSW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICwgb3IgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sZW8tZ2VuZXJhbGlcIj5HaXRodWI8L0xpbms+LiBUb1xuICAgICAgICAgICAgc2F5IGhlbGxvLCB5b3UgY2Fue1wiIFwifVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzptZUBsZW9nZW5lcmFsaS5jb20/U3ViamVjdD1IZWxsbyFcIj5cbiAgICAgICAgICAgICAgcmVhY2ggbWUgYnkgZW1haWxcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJZiBJJ20gbm90IGNvZGluZyBJJ20gcHJvYmFibHkgb3V0IHJ1bm5pbmcuIElmIHRoYXQgc291bmRzIGxpa2UgeW91clxuICAgICAgICAgICAgdHlwZSBvZiB0aGluZywgeW91IGNhbntcIiBcIn1cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5zdHJhdmEuY29tL2F0aGxldGVzLzExODc2NTg3XCI+XG4gICAgICAgICAgICAgIGNoZWNrIG91dCBteSBsYXRlc3QgcnVuc1xuICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgIG9uIFN0cmF2YS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaGVuIEkgZmluZCBteXNlbGYgd2l0aCBhIHNwYXJlIG1pbnV0ZSBvciB0d28gSSBlbmpveSB3b3JraW5nIG9uXG4gICAgICAgICAgICBwZXJzb25hbCBwcm9qZWN0cy4gSSdsbCB0eXBpY2FsbHkgdHJ5IHRvIHNvbHZlIGFuIGlzc3VlIEknbSBydW5uaW5nXG4gICAgICAgICAgICBpbnRvLiBJIGxlYXJuIGEgdGhpbmcgb3IgdHdvIGluIHRoZSBwcm9jZXNzIGFuZCBtYXliZSBzb2x2ZSBhXG4gICAgICAgICAgICBwcm9ibGVtIGZvciBvdGhlcnMgdG9vLiBIZXJlIGFyZSBzb21lIG9mIHRoZSBjb29sZXIgdGhpbmdzIEkndmVcbiAgICAgICAgICAgIG1hZGU6XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGNsYXNzTmFtZT1cInJldmVhbFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCItLWFuaW1hdGlvbi1kZWxheVwiOiBcIjAuN3NcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge1BST0pFQ1RTLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5uYW1lfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPntwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb3cgYm9yZGVyLWwtNCBib3JkZXItZ3JheS01MDAgcGwtNFwiPlxuICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2plY3QubGl2ZVVybH0+TGl2ZTwvTGluaz4gfHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9qZWN0LmdpdGh1YlVybH0+R2l0aHViPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJQUk9KRUNUUyIsIkhvbWVQYWdlIiwibGluZUhlaWdodCIsIm1hcCIsInByb2plY3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaXZlVXJsIiwiZ2l0aHViVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();