!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.definition=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.definition=t())}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),l=function(e){return document.querySelector(e)},s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=l.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,f=0,u=[],d=n(4);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(b(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function h(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function g(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function y(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),g(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=f++;n=c||(c=y(t)),r=L.bind(null,n,a,!1),i=L.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),g(e,t),t}(t),r=j.bind(null,n,t),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=A.bind(null,n),i=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(l=o[a.id]).refs--,r.push(l)}e&&p(h(e,t),t);for(i=0;i<r.length;i++){var l;if(0===(l=r[i]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete o[l.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function L(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function A(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function j(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";n.r(t);var r={name:"definition",method:function(){let e=this;e.once("destroy",(function t(){e.off("destroy",t)}))}};function i(e="div",t="",n={},r=""){let i=document.createElement(e);return i.className=r,i.innerHTML=t,Object.keys(n).forEach(t=>{let r=t,o=n[t];"video"===e||"audio"===e?o&&i.setAttribute(r,o):i.setAttribute(r,o)}),i}function o(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,e=>e===t):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function a(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(t=>{t&&e.classList.add(t)}):o(e,t)||(e.className+=" "+t))}function l(e,t){e&&(e.classList?t.split(/\s+/g).forEach(t=>{e.classList.remove(t)}):o(e,t)&&t.split(/\s+/g).forEach(t=>{let n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))}function s(e,t){e&&t.split(/\s+/g).forEach(t=>{o(e,t)?l(e,t):a(e,t)})}let c={};Object.defineProperty(c,"device",{get:function(){return c.os.isPc?"pc":"mobile"}}),Object.defineProperty(c,"browser",{get:function(){let e=navigator.userAgent.toLowerCase(),t={ie:/rv:([\d.]+)\) like gecko/,firfox:/firefox\/([\d.]+)/,chrome:/chrome\/([\d.]+)/,opera:/opera.([\d.]+)/,safari:/version\/([\d.]+).*safari/};return[].concat(Object.keys(t).filter(n=>t[n].test(e)))[0]||""}}),Object.defineProperty(c,"os",{get:function(){let e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,r=/(?:Android)/.test(e),i=/(?:Firefox)/.test(e),o=/(?:iPad|PlayBook)/.test(e)||r&&!/(?:Mobile)/.test(e)||i&&/(?:Tablet)/.test(e),a=/(?:iPhone)/.test(e)&&!o;return{isTablet:o,isPhone:a,isAndroid:r,isPc:!(a||r||n||o),isSymbian:n,isWindowsPhone:t,isFireFox:i}}});var f=c;n(0);var u={name:"s_definition",method:function(){let e,t=this,n=t.root,r=i("xg-definition","",{tabindex:3},"xgplayer-definition");function c(){let e=t.definitionList,i=["<ul>"],o=t.config.url,l=document.createElement("a");t.switchURL?["mp4","hls","__flv__","dash"].every(e=>!t[e]||(t[e].url&&(l.href=t[e].url),"__flv__"===e&&(t[e]._options?l.href=t[e]._options.url:l.href=t[e]._mediaDataSource.url),"hls"===e&&(l.href=t[e].originUrl||t[e].url,o=l.href),o=l.href,!1)):o=t.currentSrc||t.src,e.forEach(e=>{l.href=e.url,t.dash?i.push(`<li url='${e.url}' cname='${e.name}' class='${e.selected?"selected":""}'>${e.name}</li>`):i.push(`<li url='${e.url}' cname='${e.name}' class='${l.href===o?"selected":""}'>${e.name}</li>`)});let s=e.filter(e=>(l.href=e.url,t.dash?!0===e.selected:l.href===o));i.push(`</ul><p class='name'>${(s[0]||{name:""}).name}</p>`);let c=n.querySelector(".xgplayer-definition");if(c){c.innerHTML=i.join("");let e=c.querySelector(".name");t.config.definitionActive&&"hover"!==t.config.definitionActive||e.addEventListener("mouseenter",e=>{e.preventDefault(),e.stopPropagation(),a(t.root,"xgplayer-definition-active"),c.focus()})}else{r.innerHTML=i.join("");let e=r.querySelector(".name");t.config.definitionActive&&"hover"!==t.config.definitionActive||e.addEventListener("mouseenter",e=>{e.preventDefault(),e.stopPropagation(),a(t.root,"xgplayer-definition-active"),r.focus()}),t.controls.appendChild(r)}}function u(e){t.definitionList=e,e&&e instanceof Array&&e.length>0&&(a(n,"xgplayer-is-definition"),t.once("canplay",c))}function d(){if(t.currentTime=t.curTime,e)t.pause();else{let e=t.play();void 0!==e&&e&&e.catch(e=>{})}}function p(){t.once("timeupdate",d)}function h(){l(n,"xgplayer-definition-active")}"mobile"===f.device&&(t.config.definitionActive="click"),t.on("resourceReady",u),["touchend","click"].forEach(n=>{r.addEventListener(n,(function(n){n.preventDefault(),n.stopPropagation();let i=t.definitionList,c=n.target||n.srcElement,u=document.createElement("a");if(c&&"li"===c.tagName.toLocaleLowerCase()){let n,r;if(Array.prototype.forEach.call(c.parentNode.childNodes,e=>{o(e,"selected")&&(n=e.getAttribute("cname"),l(e,"selected"),t.emit("beforeDefinitionChange",e.getAttribute("url")))}),t.dash&&i.forEach(e=>{e.selected=!1,e.name===c.innerHTML&&(e.selected=!0)}),a(c,"selected"),r=c.getAttribute("cname"),c.parentNode.nextSibling.innerHTML=""+c.getAttribute("cname"),u.href=c.getAttribute("url"),e=t.paused,t.switchURL){let e=document.createElement("a");["mp4","hls","__flv__","dash"].every(n=>!t[n]||(t[n].url&&(e.href=t[n].url),"__flv__"===n&&(t[n]._options?e.href=t[n]._options.url:e.href=t[n]._mediaDataSource.url),"hls"===n&&(e.href=t[n].originUrl||t[n].url),!1)),e.href===u.href||t.ended||t.switchURL(u.href)}else{if(t.hls){let e=document.createElement("a");e=t.hls.url}u.href!==t.currentSrc&&(t.curTime=t.currentTime,t.ended||(t.src=u.href))}navigator.userAgent.toLowerCase().indexOf("android")>-1?t.once("timeupdate",p):t.once("loadedmetadata",d),t.emit("definitionChange",{from:n,to:r}),"mobile"===f.device&&l(t.root,"xgplayer-definition-active")}else"click"!==t.config.definitionActive||!c||"p"!==c.tagName.toLocaleLowerCase()&&"em"!==c.tagName.toLocaleLowerCase()||("mobile"===f.device?s(t.root,"xgplayer-definition-active"):a(t.root,"xgplayer-definition-active"),r.focus());t.emit("focus")}),!1)}),r.addEventListener("mouseleave",e=>{e.preventDefault(),e.stopPropagation(),l(n,"xgplayer-definition-active")}),t.on("blur",h),t.once("destroy",(function e(){t.off("resourceReady",u),t.off("canplay",c),navigator.userAgent.toLowerCase().indexOf("android")>-1?(t.off("timeupdate",p),t.off("timeupdate",d)):t.off("loadedmetadata",d),t.off("blur",h),t.off("destroy",e)})),t.getCurrentDefinition=function(){let e=t.controls.querySelectorAll(".xgplayer-definition ul li");for(let t=0;t<e.length;t++)if(e[t].className&&e[t].className.indexOf("selected")>-1)return{name:e[t].getAttribute("cname"),url:e[t].getAttribute("url")};return{name:e[0].getAttribute("cname"),url:e[0].getAttribute("url")}},t.switchDefinition=function(e={}){let n=t.controls.querySelectorAll(".xgplayer-definition ul li");for(let t=0;t<n.length;t++)n[t].getAttribute("cname")!==e.name&&n[t].getAttribute("url")!==e.url&&t!==e.index||n[t].click()}}};t.default={name:"definition",method:function(){r.method.call(this),u.method.call(this)}}}])}));