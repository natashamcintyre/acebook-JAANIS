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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/users.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/users.jsx":
/*!****************************************!*\
  !*** ./app/javascript/packs/users.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/aracho/Makers/Projects/week8/acebook-JAANIS/app/javascript/packs/users.jsx: 'return' outside of function (21:0)\n\n  19 | }\n  20 | \n> 21 | return (\n     | ^\n  22 |   <>\n  23 |   <h2>Acebook helps you connect with the world</h2>\n  24 |   <h3>Sign up now and start talking to your friends</h3> \n    at Object._raise (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.parseReturnStatement (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:12037:12)\n    at Object.parseStatementContent (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Object.parseStatement (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Object.parseBlockBody (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Object.parseTopLevel (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:11607:10)\n    at Object.parse (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:13415:10)\n    at parse (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/parser/lib/index.js:13468:38)\n    at parser (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:261:32)\n    at /Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:223:11)\n    at /Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:189:28\n    at /Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\n    at /Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:113:33\n    at step (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:287:14)\n    at /Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/aracho/Makers/Projects/week8/acebook-JAANIS/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=users-e8d5729e50092db780cf.js.map