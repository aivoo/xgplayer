!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),l=n(3),f=(r=l)&&r.__esModule?r:{default:r};var a=function(){return{level:"debug",historyMax:100}},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n._configs=Object.assign({},a(),e),n._history=[],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"beforeCreate",value:function(){var e=this;Object.keys(f.default).forEach((function(t){var n=f.default[t];e[t]=e._log.bind(e,f.default[n],t)}))}},{key:"setLevel",value:function(e){t.isLevelInvalid(e)&&(this._level=e)}},{key:"_log",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i;e<this.level&&(i=console).log.apply(i,["["+t+"] "].concat(r));this._history.length<this._configs.historyMax&&(this._history.push([t].concat(r)),this.emit&&this.emit.apply(this,["log",t].concat(r)))}},{key:"destroy",value:function(){this._history=[]}},{key:"level",get:function(){if(!t.isLevelInvalid(this._configs.level))return f.default.debug;var e=this._configs.level;return"string"===e?f.default[e]:this._configs.level}}],[{key:"isLevelInvalid",value:function(e){var t=void 0===e?"undefined":o(e),n=Object.keys(f.default);return"string"===t&&n.indexOf(e)>=0&&("number"===t&&e>=0&&e<=4)}}]),t}(u.BasePlugin);t.default=c,e.exports=t.default},function(e,t){e.exports=xgplayer},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={error:0,warn:1,info:2,verbose:3,debug:4},e.exports=t.default}]);