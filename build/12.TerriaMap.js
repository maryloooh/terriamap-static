((self||window).webpackJsonp=(self||window).webpackJsonp||[]).push([[12],{2767:function(e,r,t){"use strict";t(170),t(188),t(211),t(193),t(184),t(185),t(245),t(243),t(173),t(54),t(92),t(91),t(201),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t(177),t(178),t(171),t(172),t(53),t(176);var n,o=(n=t(2768))&&n.__esModule?n:{default:n},i=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=u(r);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(t(224));function u(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(u=function(e){return e?t:r})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function l(e,r,t){return(r=p(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){var r=function(e,r){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===a(r)?r:String(r)}var b=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"rollbar",void 0),this.rollbar=new o.default(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({captureUncaught:!0,captureUnhandledRejections:!0,enabled:!0},r))}var r,t,n;return r=e,(t=[{key:"error",value:function(e){e instanceof i.default?("function"==typeof e.severity?e.severity():e.severity)===i.TerriaErrorSeverity.Error?this.rollbar.error(e.toError()):this.rollbar.warning(e.toError()):this.rollbar.error(e)}}])&&f(r.prototype,t),n&&f(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();r.default=b}}]);