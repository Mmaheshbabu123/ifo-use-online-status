!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.YourLibraryName=t(require("react")):e.YourLibraryName=t(e.React)}(self,(e=>(()=>{"use strict";var t={156:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};r.r(o),r.d(o,{default:()=>f});var i=r(156),l=r.n(i);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,u=[],a=!0,f=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const f=function(e){var t=e.popupStyle,n=e.popupContentStyle,r=e.offlineAction,o=e.onlineAction,a=e.showText,f=void 0===a||a,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center"},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{backgroundColor:"white",padding:"20px",borderRadius:"5px",textAlign:"center"},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return console.log("User is offline. Performing offline action...")},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return console.log("User is online. Performing online action...")},o=u((0,i.useState)(navigator.onLine),2),l=o[0],a=o[1],f=u((0,i.useState)(!1),2),c=f[0],s=f[1];return(0,i.useEffect)((function(){var e=function(){a(!0),s(!1),r()},t=function(){a(!1),s(!0),n()};return window.addEventListener("online",e),window.addEventListener("offline",t),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t)}}),[n,r]),{isOnline:l,showPopup:c,initialPopupStyle:e,initialPopupContentStyle:t,setShowPopup:s}}(t,n,r,o),s=c.isOnline,p=c.showPopup,d=c.initialPopupStyle,y=c.initialPopupContentStyle,v=c.setShowPopup;return l().createElement("div",null,f&&l().createElement("h1",null,s?"Online":"Offline"),p&&l().createElement("div",{style:d},l().createElement("div",{style:y},l().createElement("h2",null,"You are offline!"),l().createElement("button",{onClick:function(){return v(!1)}},"Close"))))};return o})()));