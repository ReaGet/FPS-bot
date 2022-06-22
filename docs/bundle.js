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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fpc-bot/./src/scss/main.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/utils */ \"./src/js/helpers/utils.js\");\n/* harmony import */ var _models_cat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/cat */ \"./src/js/models/cat.js\");\n/* harmony import */ var _helpers_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/consts */ \"./src/js/helpers/consts.js\");\n/* harmony import */ var _helpers_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/draw */ \"./src/js/helpers/draw.js\");\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this.FPS = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.FPSmeter)();\r\n    this.canvas = document.querySelector('#canvas');\r\n    this.ctx = canvas.getContext('2d');\r\n    this.draw = new _helpers_draw__WEBPACK_IMPORTED_MODULE_3__.Draw(this.ctx);\r\n    this.paused = false;\r\n    this.generateCatsThrottle = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.Throttle)(this.generateCats.bind(this), _helpers_consts__WEBPACK_IMPORTED_MODULE_2__.GENERATION_INTERVAL);\r\n\r\n    this.cats = [];\r\n\r\n    this.generateCats();\r\n    this.loop();\r\n  }\r\n\r\n  generateCats() {\r\n    for (let i = 0; i < _helpers_consts__WEBPACK_IMPORTED_MODULE_2__.CATS_TO_GENERATE; i++) {\r\n      let [width, height] = [40, 50];\r\n      this.cats.push(\r\n        new _models_cat__WEBPACK_IMPORTED_MODULE_1__.Cat(\r\n          (_helpers_consts__WEBPACK_IMPORTED_MODULE_2__.WIDTH - width) / 2,\r\n          (_helpers_consts__WEBPACK_IMPORTED_MODULE_2__.HEIGHT - height) / 2,\r\n          width,\r\n          height\r\n        )\r\n      );\r\n    }\r\n  }\r\n\r\n  enablePause() {\r\n    this.paused = true;\r\n  }\r\n\r\n  disablePause() {\r\n    this.paused = false;\r\n  }\r\n\r\n  togglePause() {\r\n    this.paused = this.paused;\r\n  }\r\n\r\n  loop() {\r\n    window.requestAnimationFrame(() => {\r\n      this.update();\r\n      this.render();\r\n  \r\n      this.loop();\r\n    });\r\n  }\r\n\r\n  update() {\r\n    if (this.FPS() < 10) {\r\n      return;\r\n    }\r\n\r\n    this.generateCatsThrottle();\r\n  }\r\n\r\n  render() {\r\n    // if (paused) return;\r\n    this.draw.rect(0, 0, _helpers_consts__WEBPACK_IMPORTED_MODULE_2__.WIDTH, _helpers_consts__WEBPACK_IMPORTED_MODULE_2__.HEIGHT, _helpers_consts__WEBPACK_IMPORTED_MODULE_2__.BG_COLOR)\r\n\r\n    for (let i = 0; i < this.cats.length; i++) {\r\n      let cat = this.cats[i];\r\n      cat.render(this.ctx);\r\n    }\r\n\r\n    const fpsText = `${this.FPS()} fps`;\r\n    this.draw.textOverlay(\r\n      fpsText, 0, 0, '#fff', '#000', 18\r\n    )\r\n    \r\n    const catsText = `${this.cats.length} cats`;\r\n    const offset = this.draw.measureText(catsText).width + 20;\r\n    this.draw.textOverlay(\r\n      catsText, _helpers_consts__WEBPACK_IMPORTED_MODULE_2__.WIDTH - offset, 0, '#fff', '#000', 18\r\n    )\r\n  }\r\n}\n\n//# sourceURL=webpack://fpc-bot/./src/js/app.js?");

/***/ }),

/***/ "./src/js/helpers/consts.js":
/*!**********************************!*\
  !*** ./src/js/helpers/consts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BG_COLOR\": () => (/* binding */ BG_COLOR),\n/* harmony export */   \"CATS_TO_GENERATE\": () => (/* binding */ CATS_TO_GENERATE),\n/* harmony export */   \"GENERATION_INTERVAL\": () => (/* binding */ GENERATION_INTERVAL),\n/* harmony export */   \"HEIGHT\": () => (/* binding */ HEIGHT),\n/* harmony export */   \"MOVE_TYPES\": () => (/* binding */ MOVE_TYPES),\n/* harmony export */   \"WIDTH\": () => (/* binding */ WIDTH)\n/* harmony export */ });\nconst WIDTH = 350;\r\nconst HEIGHT = 500;\r\nconst BG_COLOR = '#fefefe';\r\nconst MOVE_TYPES = {\r\n  infinity: 1,\r\n  bounce: 2\r\n};\r\nconst GENERATION_INTERVAL = 1 * 1000; // Seconds * 1000\r\nconst CATS_TO_GENERATE = 300;\n\n//# sourceURL=webpack://fpc-bot/./src/js/helpers/consts.js?");

/***/ }),

/***/ "./src/js/helpers/draw.js":
/*!********************************!*\
  !*** ./src/js/helpers/draw.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Draw\": () => (/* binding */ Draw)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Context} ctx Cavnas context \r\n */\r\nfunction Draw(ctx) {\r\n  this.ctx = ctx;\r\n}\r\n/**\r\n * \r\n * @param {String} text to display\r\n * @param {Number} x position by x\r\n * @param {Number} y position by y\r\n * @param {String} color RGBA or HEX color in string `rgba(0, 0, 0, 1)` \r\n * @param {String} font font-size, font-weight, font-family `bold 24px monospace`\r\n */\r\nDraw.prototype.text = function(text, x, y, color, font) {\r\n  this.ctx.fillStyle = color || '#333';\r\n  this.ctx.font = font || '24px monospace';\r\n  this.ctx.fillText(text, x, y);\r\n}\r\n/**\r\n * \r\n * @param {String} text to display\r\n * @param {Number} x position by x\r\n * @param {Number} y position by y\r\n * @param {String} textColor RGBA or HEX color in string `rgba(0, 0, 0, 1)` \r\n * @param {String} bgColor RGBA or HEX color in string `rgba(0, 0, 0, 1)` \r\n * @param {String} size font-weight: 600, font-size: size, font-family: monospace\r\n */\r\nDraw.prototype.textOverlay = function(text, x, y, textColor, bgColor, size) {\r\n  let {width} = this.measureText(text);\r\n\r\n  this.rect(x, y, width + 20, size * 2, bgColor);\r\n  this.text(text, x + 10, y + size * 1.25, textColor, `600 ${size}px monospace`);\r\n}\r\n/**\r\n * \r\n * @param {Number} x \r\n * @param {Number} y \r\n * @param {Number} width \r\n * @param {Number} height \r\n * @param {String} color RGBA or HEX color in string `rgba(0, 0, 0, 1)` \r\n */\r\nDraw.prototype.rect = function(x, y, width, height, color) {\r\n  this.ctx.fillStyle = color;\r\n  this.ctx.fillRect(x, y, width, height);\r\n}\r\n/**\r\n * \r\n * @param {String} text \r\n * @returns Object with parameters\r\n */\r\nDraw.prototype.measureText = function(text) {\r\n  return this.ctx.measureText(text);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://fpc-bot/./src/js/helpers/draw.js?");

/***/ }),

/***/ "./src/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./src/js/helpers/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FPSmeter\": () => (/* binding */ FPSmeter),\n/* harmony export */   \"Throttle\": () => (/* binding */ Throttle),\n/* harmony export */   \"getRandBetween\": () => (/* binding */ getRandBetween),\n/* harmony export */   \"getRandBetweenHard\": () => (/* binding */ getRandBetweenHard),\n/* harmony export */   \"getRandColor\": () => (/* binding */ getRandColor)\n/* harmony export */ });\n/**\r\n * \r\n * @returns rgb( [0-255], [0-255], [0-255] )\r\n */\r\nfunction getRandColor() {\r\n  const r = getRandBetween(0, 255);\r\n  const g = getRandBetween(0, 255);\r\n  const b = getRandBetween(0, 255);\r\n\r\n  return `rgb(${r}, ${g}, ${b})`;\r\n}\r\n/**\r\n * \r\n * @param {Number} min random value\r\n * @param {Number} max random value\r\n * @returns Random number between Min and Max\r\n */\r\nfunction getRandBetween(min, max) {\r\n  return Math.round(Math.random() * (max - min));\r\n}\r\n/**\r\n * \r\n * @param {Number} min \r\n * @param {Number} max \r\n * @param {Number} small \r\n * @returns Min or Max exactly\r\n */\r\nfunction getRandBetweenHard(min, max, small) {\r\n  return Math.random() < 0.5 \r\n    ? getRandBetween(min, min + small) \r\n    : getRandBetween(max, max - small);\r\n}\r\n/**\r\n * \r\n * @returns current FPS\r\n */\r\nfunction FPSmeter() {\r\n  const times = Array(60).fill(performance.now());\r\n\r\n  return function FPS() {\r\n    const now = performance.now();\r\n    while (times.length > 0 && times[0] <= now - 1000) {\r\n      times.shift();\r\n    }\r\n    if (times.length < 65)\r\n      times.push(now);\r\n    return times.length;\r\n  }\r\n}\r\n/**\r\n * @param {Function} fn to callback\r\n * @param {Number} ms interval that tells how often trigger callback \r\n * @returns throttling function\r\n */\r\nfunction Throttle(fn, ms) {\r\n  let timer = null;\r\n\r\n  return function throttling(...args) {\r\n    if (timer) return;\r\n\r\n    timer = setTimeout(() => {\r\n      fn(...args);\r\n      clearTimeout(timer);\r\n      timer = null;\r\n    }, ms);\r\n  }\r\n}\n\n//# sourceURL=webpack://fpc-bot/./src/js/helpers/utils.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\nconst app = new _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://fpc-bot/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/cat.js":
/*!******************************!*\
  !*** ./src/js/models/cat.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cat\": () => (/* binding */ Cat)\n/* harmony export */ });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ \"./src/js/helpers/utils.js\");\n/* harmony import */ var _helpers_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/consts */ \"./src/js/helpers/consts.js\");\n\r\n\r\n\r\nclass Cat {\r\n  constructor(x, y, w, h) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.w = w;\r\n    this.h = h;\r\n    this.maxSpeed = 10;\r\n    this.minSpeed = 5;\r\n    this.speed = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getRandBetween)(this.minSpeed, this.maxSpeed);\r\n    this.angle = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getRandBetween)(0, 360) * Math.PI / 180;\r\n    this.vx = this.speed * Math.cos(this.angle) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getRandBetween)(-3, 3);\r\n    this.vy = this.speed * Math.sin(this.angle) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getRandBetween)(-3, 3);\r\n    this.ay = 0.3;\r\n    this.color = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getRandColor)();\r\n    this.moveType = 1;\r\n  }\r\n\r\n  update() {\r\n    this.x += this.vx;\r\n    this.y += this.vy;\r\n\r\n    if (this.moveType == _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.MOVE_TYPES.bounce) {\r\n      this.bounceMove();\r\n    } else {\r\n      this.infinityMove();\r\n    }    \r\n  }\r\n\r\n  bounceMove() {\r\n    if (this.x < 0 || this.x + this.w > _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.WIDTH)\r\n      this.vx *= -1;\r\n\r\n    if (this.y < 0 || this.y + this.h > _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.HEIGHT)\r\n      this.vy *= -1;\r\n  }\r\n\r\n  infinityMove() {\r\n    if(this.x > _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.WIDTH) this.x = -this.w;\r\n    if(this.x + this.w < 0) this.x = _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.WIDTH;\r\n    if(this.y > _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.HEIGHT) this.y = -this.h;\r\n    if(this.y + this.h < 0) this.y = _helpers_consts__WEBPACK_IMPORTED_MODULE_1__.HEIGHT;\r\n  }\r\n\r\n  render(ctx) {\r\n    this.update();\r\n\r\n    ctx.fillStyle = this.color;\r\n    ctx.fillRect(this.x, this.y, this.w, this.h);\r\n  }\r\n}\n\n//# sourceURL=webpack://fpc-bot/./src/js/models/cat.js?");

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;