var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/arrange.js":
/*!************************!*\
  !*** ./src/arrange.js ***!
  \************************/
/*! exports provided: arrangeAllArtboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrangeAllArtboards", function() { return arrangeAllArtboards; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var arrangeAllArtboards = function arrangeAllArtboards(page) {
  var artboards = page.layers.filter(_helpers__WEBPACK_IMPORTED_MODULE_1__["layerIsArtboard"]).sort(_helpers__WEBPACK_IMPORTED_MODULE_1__["sortByName"]);
  var gutter = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getGutter"])(artboards);
  arrange(artboards, gutter);
  sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].message("Artboards arranged ✅");
};

var arrange = function arrange(artboards, gutter) {
  artboards = artboards.sort(function (a, b) {
    var slashesA = (a.name.match(/\//g) || []).length;
    var slashesB = (b.name.match(/\//g) || []).length;

    if (slashesA !== slashesB) {
      return slashesA - slashesB;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  });
  var adj = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getAdjcencyList"])(artboards);
  var roots = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getRoots"])(artboards, adj);
  var maxY = 0;

  var placeNode = function placeNode(node) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var deltaX = 0;
    var deltaY = 0;
    var maxHeight = 0;

    if (node.value) {
      var _iterator = _createForOfIteratorHelper(node.value),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var artboard = _step.value;
          artboard.frame.x = x + deltaX;
          artboard.frame.y = y + deltaY;
          deltaX += gutter + artboard.frame.width;
          maxHeight = Math.max(maxHeight, artboard.frame.height);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      deltaX += gutter;
    }

    var _iterator2 = _createForOfIteratorHelper(node.children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;
        maxY = Math.max(y + deltaY, maxY);
        placeNode(child, x + deltaX, maxY);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    deltaY = Math.max(gutter + maxHeight, deltaY);
    maxY = Math.max(y + deltaY, maxY);
  };

  var _iterator3 = _createForOfIteratorHelper(roots),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var root = _step3.value;
      placeNode(root, 0, maxY + gutter * 5);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: Node, getAdjcencyList, getName, getRoots, getGutter, sortByName, layerIsArtboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjcencyList", function() { return getAdjcencyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoots", function() { return getRoots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGutter", function() { return getGutter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerIsArtboard", function() { return layerIsArtboard; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Node(value, name, children, parent) {
  this.value = value;
  this.children = children || new Set();
}
var getAdjcencyList = function getAdjcencyList(artboards) {
  var adj = new Map();

  var _iterator = _createForOfIteratorHelper(artboards),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var artboard = _step.value;
      var name = getName(artboard);
      var node = adj.get() || new Node([]);
      node.value.push(artboard);
      adj.set(name, node);
      var parts = name.split("/");
      parts.pop();

      while (parts.length) {
        var part = parts.pop();
        var parentName = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(parts), [part]).join("/");
        var parentNode = adj.get(parentName) || new Node();
        parentNode.children.add(node);
        adj.set(parentName, parentNode);
        node = parentNode;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return adj;
};
/**
 * Returns artboard name without comments
 * (e.g `A/B/C # a comment` becomes `A/B/C`)
 */

var getName = function getName(artboard) {
  return artboard.name.match(/^[^#]*/)[0].trim();
};
var getRoots = function getRoots(artboards, adj) {
  var roots = new Set();

  var _iterator2 = _createForOfIteratorHelper(artboards),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var artboard = _step2.value;
      roots.add(getName(artboard).split("/")[0]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return Array.from(roots).map(function (r) {
    return adj.get(r);
  });
};
var getGutter = function getGutter(artboards) {
  var MIN_GUTTER = 20;
  var MAX_GUTTER = 250;
  var totalDimensions = 0;

  var _iterator3 = _createForOfIteratorHelper(artboards),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var artboard = _step3.value;
      totalDimensions += artboard.frame.height;
      totalDimensions += artboard.frame.width;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var averageDimension = totalDimensions / (artboards.length * 2);
  var gutter = averageDimension / 10;
  return Math.max(Math.min(Math.round(gutter / 10) * 10, MAX_GUTTER), MIN_GUTTER);
};
var sortByName = function sortByName(a, b) {
  return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
};
var layerIsArtboard = function layerIsArtboard(l) {
  return l.background;
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: tidyUpCurrent, tidyUpAll, arrangeCurrent, arrangeAll, sortCurrent, sortAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tidyUpCurrent", function() { return tidyUpCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tidyUpAll", function() { return tidyUpAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrangeCurrent", function() { return arrangeCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrangeAll", function() { return arrangeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCurrent", function() { return sortCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortAll", function() { return sortAll; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arrange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrange */ "./src/arrange.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // documentation: https://developer.sketchapp.com/reference/api/

var tidyUpCurrent = function tidyUpCurrent() {
  return runner([sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].getSelectedDocument().selectedPage], 'Organized page', tidyUp);
};
var tidyUpAll = function tidyUpAll() {
  return runner(sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].getSelectedDocument().pages, 'Organized all pages', tidyUp);
};
var arrangeCurrent = function arrangeCurrent() {
  return runner([sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].getSelectedDocument().selectedPage], 'Arranged page', arrange);
};
var arrangeAll = function arrangeAll() {
  return runner(sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].getSelectedDocument().pages, 'Arranged all pages', arrange);
};
var sortCurrent = function sortCurrent() {
  return runner([sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].getSelectedDocument().selectedPage], 'Sorted page', sort);
};
var sortAll = function sortAll() {
  return runner(sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].getSelectedDocument().pages, 'Sorted all pages', sort);
};

var runner = function runner(pages, message, handler) {
  var _iterator = _createForOfIteratorHelper(pages),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var page = _step.value;
      handler(page);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].message("".concat(message, " \u2705"));
};

var tidyUp = function tidyUp(page) {
  sort(page);
  arrange(page);
};

var arrange = function arrange(page) {
  Object(_arrange__WEBPACK_IMPORTED_MODULE_1__["arrangeAllArtboards"])(page);
};

var sort = function sort(page) {
  var order = page.layers.map(function (l) {
    return l.name;
  }).sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  });
  var orderMap = {};

  for (var i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }

  var _iterator2 = _createForOfIteratorHelper(page.layers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var layer = _step2.value;
      layer.index = orderMap[layer.name];
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['tidyUpCurrent'] = __skpm_run.bind(this, 'tidyUpCurrent');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['tidyUpAll'] = __skpm_run.bind(this, 'tidyUpAll');
globalThis['arrangeCurrent'] = __skpm_run.bind(this, 'arrangeCurrent');
globalThis['arrangeAll'] = __skpm_run.bind(this, 'arrangeAll');
globalThis['sortCurrent'] = __skpm_run.bind(this, 'sortCurrent');
globalThis['sortAll'] = __skpm_run.bind(this, 'sortAll')

//# sourceMappingURL=__main.js.map