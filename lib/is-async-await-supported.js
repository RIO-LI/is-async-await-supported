(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/function.name-polyfill/Function.name.js":
/*!**************************************************************!*\
  !*** ./node_modules/function.name-polyfill/Function.name.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n\nvar fnNameMatchRegex = /^\\s*function(?:\\s|\\s*\\/\\*.*\\*\\/\\s*)+([^\\(\\s\\/]*)\\s*/;\n\nfunction _name() {\n  var match, name;\n  if (this === Function || this === Function.prototype.constructor) {\n    name = \"Function\";\n  }\n  else if (this !== Function.prototype) {\n    match = (\"\" + this).match(fnNameMatchRegex);\n    name = match && match[1];\n  }\n  return name || \"\";\n}\n\n// Inspect the polyfill-ability of this browser\nvar needsPolyfill = !(\"name\" in Function.prototype && \"name\" in (function x() {}));\nvar canDefineProp = typeof Object.defineProperty === \"function\" &&\n  (function() {\n    var result;\n    try {\n      Object.defineProperty(Function.prototype, \"_xyz\", {\n        get: function() {\n          return \"blah\";\n        },\n        configurable: true\n      });\n      result = Function.prototype._xyz === \"blah\";\n      delete Function.prototype._xyz;\n    }\n    catch (e) {\n      result = false;\n    }\n    return result;\n  })();\nvar canDefineGetter = typeof Object.prototype.__defineGetter__ === \"function\" &&\n  (function() {\n    var result;\n    try {\n      Function.prototype.__defineGetter__(\"_abc\", function() {\n        return \"foo\";\n      });\n      result = Function.prototype._abc === \"foo\";\n      delete Function.prototype._abc;\n    }\n    catch (e) {\n      result = false;\n    }\n    return result;\n  })();\n\n\n\n// Add the \"private\" property for testing, even if the real property can be polyfilled\nFunction.prototype._name = _name;\n\n\n// Polyfill it!\n// For:\n//  * IE >=9 <12\n//  * Chrome <33\nif (needsPolyfill) {\n  // For:\n  //  * IE >=9 <12\n  //  * Chrome >=5 <33\n  if (canDefineProp) {\n    Object.defineProperty(Function.prototype, \"name\", {\n      get: function() {\n        var name = _name.call(this);\n\n        // Since named function definitions have immutable names, also memoize the\n        // output by defining the `name` property directly on this Function\n        // instance so that this polyfill will not need to be invoked again\n        if (this !== Function.prototype) {\n          Object.defineProperty(this, \"name\", {\n            value: name,\n            configurable: true\n          });\n        }\n\n        return name;\n      },\n      configurable: true\n    });\n  }\n  // For:\n  //  * Chrome <5\n  else if (canDefineGetter) {\n    // NOTE:\n    // The snippet:\n    //\n    //     x.__defineGetter__('y', z);\n    //\n    // ...is essentially equivalent to:\n    //\n    //     Object.defineProperty(x, 'y', {\n    //       get: z,\n    //       configurable: true,  // <-- key difference #1\n    //       enumerable: true     // <-- key difference #2\n    //     });\n    //\n    Function.prototype.__defineGetter__(\"name\", function() {\n      var name = _name.call(this);\n\n      // Since named function definitions have immutable names, also memoize the\n      // output by defining the `name` property directly on this Function\n      // instance so that this polyfill will not need to be invoked again\n      if (this !== Function.prototype) {\n        this.__defineGetter__(\"name\", function() { return name; });\n      }\n\n      return name;\n    });\n  }\n}\n\n})();\n\n\n//# sourceURL=webpack:///./node_modules/function.name-polyfill/Function.name.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! function.name-polyfill */ \"./node_modules/function.name-polyfill/Function.name.js\");\nfunction isAsyncAwaitSupport() {\n    var func;\n    var asyncFuncConstructor;\n    try {\n        eval(\"func = async function(){};\");\n    }\n    catch (e) {\n        return false;\n    }\n    // 由于async函数的构造器不是全局对象，所以我们需要由下面代码来获取async函数的构造器\n    asyncFuncConstructor = Object.getPrototypeOf(func).constructor;\n    return asyncFuncConstructor != null && asyncFuncConstructor.name == 'AsyncFunction';\n}\nexports.isAsyncAwaitSupport = isAsyncAwaitSupport;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });
});