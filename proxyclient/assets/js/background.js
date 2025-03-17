/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Proxy/Proxy.ts":
/*!********************************!*\
  !*** ./src/App/Proxy/Proxy.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Proxy: () => (/* binding */ Proxy)
/* harmony export */ });
/* harmony import */ var _App_Proxy_ProxyManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Proxy/ProxyManager */ "./src/App/Proxy/ProxyManager.ts");
/* harmony import */ var _App_Proxy_ProxyConfigurator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/App/Proxy/ProxyConfigurator */ "./src/App/Proxy/ProxyConfigurator.ts");


class Proxy {
    constructor() {
        this.init();
    }
    init() {
        const ProxyConfiguratorInstance = new _App_Proxy_ProxyConfigurator__WEBPACK_IMPORTED_MODULE_1__.ProxyConfigurator();
        const ProxyManagerInstance = new _App_Proxy_ProxyManager__WEBPACK_IMPORTED_MODULE_0__.ProxyManager(ProxyConfiguratorInstance);
        chrome.runtime.onMessage.addListener((requset) => {
            if (requset) {
                ProxyManagerInstance.connect(requset);
            }
            else {
                ProxyManagerInstance.disconnect();
            }
        });
    }
}


/***/ }),

/***/ "./src/App/Proxy/ProxyConfigurator.ts":
/*!********************************************!*\
  !*** ./src/App/Proxy/ProxyConfigurator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyConfigurator: () => (/* binding */ ProxyConfigurator)
/* harmony export */ });
class ProxyConfigurator {
    configure(proxyItem) {
        const config = {
            mode: 'fixed_servers',
            rules: {
                bypassList: ['<local>'],
                singleProxy: {
                    scheme: proxyItem.type.toLowerCase(),
                    host: proxyItem.ip,
                    port: parseInt(proxyItem.port)
                }
            }
        };
        if (proxyItem.user && proxyItem.password) {
            config.rules.singleProxy.username = proxyItem.user;
            config.rules.singleProxy.password = proxyItem.password;
        }
        return config;
    }
}


/***/ }),

/***/ "./src/App/Proxy/ProxyManager.ts":
/*!***************************************!*\
  !*** ./src/App/Proxy/ProxyManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyManager: () => (/* binding */ ProxyManager)
/* harmony export */ });
class ProxyManager {
    ProxyConfiguratorInstance;
    constructor(ProxyConfiguratorInstance) {
        this.ProxyConfiguratorInstance = ProxyConfiguratorInstance;
    }
    connect(proxyItem) {
        const config = this.ProxyConfiguratorInstance.configure(proxyItem);
        // to do: error handler and success callback
        chrome.proxy.settings.set({
            value: config,
            scope: 'regular'
        });
    }
    disconnect() {
        chrome.proxy.settings.clear({ scope: 'regular' });
    }
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_Proxy_Proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Proxy/Proxy */ "./src/App/Proxy/Proxy.ts");

const ProxyIns = new _App_Proxy_Proxy__WEBPACK_IMPORTED_MODULE_0__.Proxy();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1U7QUFDM0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyRUFBaUI7QUFDL0QseUNBQXlDLGlFQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0NBQXNDLGtCQUFrQjtBQUN4RDtBQUNBOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUMscUJBQXFCLG1EQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm94eS9Qcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Byb3h5L1Byb3h5Q29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvUHJveHkvUHJveHlNYW5hZ2VyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3h5TWFuYWdlciB9IGZyb20gJ0AvQXBwL1Byb3h5L1Byb3h5TWFuYWdlcic7XG5pbXBvcnQgeyBQcm94eUNvbmZpZ3VyYXRvciB9IGZyb20gJ0AvQXBwL1Byb3h5L1Byb3h5Q29uZmlndXJhdG9yJztcbmV4cG9ydCBjbGFzcyBQcm94eSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBQcm94eUNvbmZpZ3VyYXRvckluc3RhbmNlID0gbmV3IFByb3h5Q29uZmlndXJhdG9yKCk7XG4gICAgICAgIGNvbnN0IFByb3h5TWFuYWdlckluc3RhbmNlID0gbmV3IFByb3h5TWFuYWdlcihQcm94eUNvbmZpZ3VyYXRvckluc3RhbmNlKTtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1c2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxdXNldCkge1xuICAgICAgICAgICAgICAgIFByb3h5TWFuYWdlckluc3RhbmNlLmNvbm5lY3QocmVxdXNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBQcm94eU1hbmFnZXJJbnN0YW5jZS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm94eUNvbmZpZ3VyYXRvciB7XG4gICAgY29uZmlndXJlKHByb3h5SXRlbSkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBtb2RlOiAnZml4ZWRfc2VydmVycycsXG4gICAgICAgICAgICBydWxlczoge1xuICAgICAgICAgICAgICAgIGJ5cGFzc0xpc3Q6IFsnPGxvY2FsPiddLFxuICAgICAgICAgICAgICAgIHNpbmdsZVByb3h5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZTogcHJveHlJdGVtLnR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgaG9zdDogcHJveHlJdGVtLmlwLFxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBwYXJzZUludChwcm94eUl0ZW0ucG9ydClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm94eUl0ZW0udXNlciAmJiBwcm94eUl0ZW0ucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGNvbmZpZy5ydWxlcy5zaW5nbGVQcm94eS51c2VybmFtZSA9IHByb3h5SXRlbS51c2VyO1xuICAgICAgICAgICAgY29uZmlnLnJ1bGVzLnNpbmdsZVByb3h5LnBhc3N3b3JkID0gcHJveHlJdGVtLnBhc3N3b3JkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb3h5TWFuYWdlciB7XG4gICAgUHJveHlDb25maWd1cmF0b3JJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihQcm94eUNvbmZpZ3VyYXRvckluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuUHJveHlDb25maWd1cmF0b3JJbnN0YW5jZSA9IFByb3h5Q29uZmlndXJhdG9ySW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbm5lY3QocHJveHlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuUHJveHlDb25maWd1cmF0b3JJbnN0YW5jZS5jb25maWd1cmUocHJveHlJdGVtKTtcbiAgICAgICAgLy8gdG8gZG86IGVycm9yIGhhbmRsZXIgYW5kIHN1Y2Nlc3MgY2FsbGJhY2tcbiAgICAgICAgY2hyb21lLnByb3h5LnNldHRpbmdzLnNldCh7XG4gICAgICAgICAgICB2YWx1ZTogY29uZmlnLFxuICAgICAgICAgICAgc2NvcGU6ICdyZWd1bGFyJ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgY2hyb21lLnByb3h5LnNldHRpbmdzLmNsZWFyKHsgc2NvcGU6ICdyZWd1bGFyJyB9KTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb3h5IH0gZnJvbSAnQC9BcHAvUHJveHkvUHJveHknO1xuY29uc3QgUHJveHlJbnMgPSBuZXcgUHJveHkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==