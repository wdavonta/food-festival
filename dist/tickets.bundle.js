/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/tickets.js":
/*!******************************!*\
  !*** ./assets/js/tickets.js ***!
  \******************************/
/***/ (() => {

eval("if (window.location.href.indexOf(\"tickets\") > -1) {\n\n    const purchaseBtn = document.getElementById(\"purchaseBtn\");\n    const purchaseEmail = document.getElementById(\"purchaseEmail\");\n    const modalEl = document.querySelector(\".modal-content\");\n    const modalBodyEl = document.querySelector(\".modal-body\");\n    const modalFooterEl = document.querySelector(\".modal-footer\");\n\n\n    function purchaseTicket () {\n\n      modalEl.removeChild(modalBodyEl)\n      modalEl.removeChild(modalFooterEl)\n\n      modalEl.append(createEl(\"div\", {class: \"modal-body\"},\n        createEl(\"h5\", {class: \"modal-title\"}, \n        `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`\n        ),\n      ))\n      \n    }\n    purchaseBtn.addEventListener(\"click\", purchaseTicket);\n  }\n\n//# sourceURL=webpack://food-festival/./assets/js/tickets.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/tickets.js"]();
/******/ 	
/******/ })()
;