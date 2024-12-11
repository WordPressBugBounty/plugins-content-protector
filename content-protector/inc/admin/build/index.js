/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@codeamp/block-components/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@codeamp/block-components/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! For license information please see index.js.LICENSE.txt */
!function(){var e={814:function(e,t,o){var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=r(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var l=c.apply(null,o);l&&e.push(l)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n):window.classNames=c}()},922:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(c[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},499:function(e){"use strict";e.exports=function(e){return e[1]}},245:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,':root{--wp-admin-theme-color: #007cba;--wp-admin-theme-color--rgb: 0,124,186;--wp-admin-theme-color-darker-10: #006ba1;--wp-admin-theme-color-darker-10--rgb: 0,107,160.5;--wp-admin-theme-color-darker-20: #005a87;--wp-admin-theme-color-darker-20--rgb: 0,90,135;--wp-admin-border-width-focus: 2px}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){:root{--wp-admin-border-width-focus: 1.5px}}.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}.codeamp-components-multi-select-control__input-container{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;padding:6px 8px;box-shadow:0 0 0 transparent;transition:box-shadow 0.1s linear;border-radius:2px;border:1px solid #757575;font-size:16px;line-height:normal;width:100%;margin:0 0 8px 0;padding:0;cursor:text}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__input-container{transition-duration:0s;transition-delay:0s}}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}}.codeamp-components-multi-select-control__input-container:focus{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container::-webkit-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container::-moz-placeholder{opacity:1;color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container:-ms-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container.is-disabled{background:#ddd;border-color:#ddd}.codeamp-components-multi-select-control__input-container.is-active{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{display:inline-block;flex:1;font-family:inherit;font-size:16px;width:100%;max-width:100%;margin-left:4px;padding:0;min-height:24px;min-width:50px;background:inherit;border:0;color:#1e1e1e;box-shadow:none}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{font-size:13px}}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input:focus,.codeamp-components-multi-select-control.is-active .codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{outline:none;box-shadow:none}.codeamp-components-multi-select-control__input-container .codeamp-components-multi-select-control__token+input[type="text"].codeamp-components-multi-select-control__input{width:auto}.codeamp-components-multi-select-control__help{font-size:12px;font-style:normal;color:#757575}.codeamp-components-multi-select-control__tokens-container{padding:4px}.codeamp-components-multi-select-control__token{font-size:13px;display:flex;color:#1e1e1e;max-width:100%}.codeamp-components-multi-select-control__token.is-borderless{position:relative;padding:0 24px 0 0}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__token-text{background:transparent;color:var(--wp-admin-theme-color)}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__remove-token{background:transparent;color:#757575;position:absolute;top:1px;right:0;padding:0}.codeamp-components-multi-select-control__token.is-borderless.is-success .codeamp-components-multi-select-control__token-text{color:#4ab866}.codeamp-components-multi-select-control__token.is-borderless.is-error .codeamp-components-multi-select-control__token-text{color:#cc1818;border-radius:4px 0 0 4px;padding:0 4px 0 6px}.codeamp-components-multi-select-control__token.is-borderless.is-validating .codeamp-components-multi-select-control__token-text{color:#1e1e1e}.codeamp-components-multi-select-control__token.is-disabled .codeamp-components-multi-select-control__remove-token{cursor:default}.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{display:inline-block;line-height:24px;height:auto;background:#ddd;min-width:unset;transition:all 0.2s cubic-bezier(0.4, 1, 0.4, 1)}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{transition-duration:0s;transition-delay:0s;animation-duration:1ms;animation-delay:0s}}.codeamp-components-multi-select-control__token-text{border-radius:2px 0 0 2px;padding:0 0 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.codeamp-components-multi-select-control__remove-token.components-button{cursor:pointer;border-radius:0 2px 2px 0;padding:0 2px;color:#1e1e1e;line-height:10px;overflow:initial}.codeamp-components-multi-select-control__remove-token.components-button:hover{color:#1e1e1e}.codeamp-components-multi-select-control__suggestions-list{flex:1 0 100%;min-width:100%;max-height:9em;overflow-y:auto;transition:all 0.15s ease-in-out;list-style:none;border-top:1px solid #757575;margin:0;padding:0}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__suggestions-list{transition-duration:0s;transition-delay:0s}}.codeamp-components-multi-select-control__no-suggestions{color:#757575;font-size:13px;margin:0;display:block;padding:4px 8px}.codeamp-components-multi-select-control__suggestion{color:#757575;display:block;font-size:13px;padding:4px 8px;margin:0;cursor:pointer}.codeamp-components-multi-select-control__suggestion.is-selected{background:var(--wp-admin-theme-color);color:#fff}.codeamp-components-multi-select-control__suggestion-match{text-decoration:underline}\n',""]),t.Z=c},313:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,".codeamp-components-resource-select-control>.components-base-control__field{position:relative;display:flex;flex-wrap:wrap}.codeamp-components-resource-select-control>.components-base-control__field>.components-base-control__label{flex:2}.codeamp-components-resource-select-control__label{margin-bottom:8px}.codeamp-components-resource-select-control__add_button{padding:0;margin:0;min-height:revert;height:auto;color:var(--wp-admin-theme-color);align-self:center;justify-content:right;margin-bottom:8px}.codeamp-components-resource-select-control__add_button:hover{text-decoration:underline}.codeamp-components-resource-select-control__edit_button.components-button.is-secondary{height:auto;margin-bottom:0}.codeamp-components-resource-select-control__select{width:auto;flex:1}.codeamp-components-resource-select-control .components-base-control{margin-bottom:0}.codeamp-components-resource-select-control .components-base-control__field{margin-bottom:0}.codeamp-components-resource-select-control .components-base-control{flex:1}\n",""]),t.Z=c},379:function(e){"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},c=[],l=0;l<e.length;l++){var a=e[l],s=n.base?a[0]+n.base:a[0],u=i[s]||0,p="".concat(s," ").concat(u);i[s]=u+1;var d=o(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var f=r(m,n);n.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var l=o(i[c]);t[l].references--}for(var a=n(e,r),s=0;s<i.length;s++){var u=o(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},569:function(e){"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,o){"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.amdO={},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};!function(){"use strict";o.r(n),o.d(n,{MultiSelectControl:function(){return we},ResourceSelectControl:function(){return O}});var e=window.wp.i18n,t=window.wp.components,r=window.wp.compose,i=o(379),c=o.n(i),l=o(795),a=o.n(l),s=o(569),u=o.n(s),p=o(565),d=o.n(p),m=o(216),f=o.n(m),v=o(589),b=o.n(v),y=o(313),g={};g.styleTagTransform=b(),g.setAttributes=d(),g.insert=u().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),c()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;var h=o(814),_=o.n(h);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},w.apply(this,arguments)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var S=function(){},O=function o(n){var i,c,l,a,s=n.onChange,u=void 0===s?S:s,p=n.onPrimaryAction,d=void 0===p?S:p,m=n.onSecondaryAction,f=void 0===m?S:m,v=n.label,b=void 0===v?"":v,y=n.primaryActionLabel,g=void 0===y?(0,e.__)("Edit","codeamp-block-components"):y,h=n.secondaryActionLabel,O=void 0===h?(0,e.__)("Add new","codeamp-block-components"):h,k=n.loadingLabel,E=void 0===k?(0,e.__)("Loading","codeamp-block-components"):k,j=n.showPrimaryAction,A=void 0===j||j,I=n.disabled,C=void 0!==I&&I,P=n.showSecondaryAction,L=void 0===P||P,M=n.defaultOption,R=n.options,T=n.value,N=n.help,D=n.primaryActionProps,B=n.secondaryActionProps,z=n.id,W=n.className,F=[];E&&(F=[{value:"loading",label:E}]),R&&(F=[],M&&F.push(M),(l=F).push.apply(l,function(e){if(Array.isArray(e))return x(e)}(a=R)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?x(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var H=(0,r.useInstanceId)(o,"codeamp-components-resource-select-control");return z&&(H=z),React.createElement(t.BaseControl,{id:H,className:_()("components-base-control codeamp-components-resource-select-control",W),help:N,label:b,__nextHasNoMarginBottom:!0},L&&React.createElement(t.Button,w({className:"codeamp-components-resource-select-control__add_button",disabled:C,onClick:f},B),null!==(i=null==B?void 0:B.label)&&void 0!==i?i:O),React.createElement(t.__experimentalHStack,null,React.createElement(t.SelectControl,{id:H,value:T,options:F,className:"codeamp-components-resource-select-control__select",onChange:u,disabled:C,__nextHasNoMarginBottom:!0}),A&&React.createElement(t.Button,w({onClick:d,variant:"secondary",disabled:C,className:"codeamp-components-resource-select-control__edit_button"},D),null!==(c=null==D?void 0:D.label)&&void 0!==c?c:g)))},k=window.wp.element,E=window.wp.a11y,j=window.wp.isShallowEqual,A=o.n(j),I=window.wp.primitives,C=(0,k.createElement)(I.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,k.createElement)(I.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),P=function(){};function L(o){var n=o.value,i=o.label,c=o.title,l=o.isBorderless,a=void 0!==l&&l,s=o.disabled,u=void 0!==s&&s,p=o.onClickRemove,d=void 0===p?P:p,m=o.onMouseEnter,f=o.onMouseLeave,v=o.messages,b=o.termPosition,y=o.termsCount,g=(0,r.useInstanceId)(L),h=_()("codeamp-components-multi-select-control__token",{"is-borderless":a,"is-disabled":u}),w=(0,e.sprintf)((0,e.__)("%1$s (%2$s of %3$s)"),i,b,y);return React.createElement("span",{className:h,onMouseEnter:m,onMouseLeave:f,title:c,style:{margin:"0"}},React.createElement("span",{className:"codeamp-components-multi-select-control__token-text",id:"codeamp-components-multi-select-control__token-text-".concat(g)},React.createElement(t.VisuallyHidden,{as:"span"},w),React.createElement("span",{"aria-hidden":"true"},i)),React.createElement(t.Button,{className:"codeamp-components-multi-select-control__remove-token",icon:C,onClick:u?P:function(){return d({value:n})},label:v.remove,"aria-describedby":"codeamp-components-multi-select-control__token-text-".concat(g)}))}var M=["value","isExpanded","instanceId","selectedSuggestionIndex","className","onChange","onFocus","onBlur"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},R.apply(this,arguments)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var N=(0,k.forwardRef)((function(e,t){var o=e.value,n=e.isExpanded,r=e.instanceId,i=e.selectedSuggestionIndex,c=e.className,l=e.onChange,a=e.onFocus,s=e.onBlur,u=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,M),p=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),d=p[0],m=p[1],f=o?o.length+1:0;return React.createElement("input",R({ref:t,id:r,type:"text"},u,{value:o||"",onChange:function(e){l&&l({value:e.target.value})},onFocus:function(e){m(!0),null==a||a(e)},onBlur:function(e){m(!1),null==s||s(e)},size:f,className:_()(c,"codeamp-components-multi-select-control__input"),autoComplete:"off",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-owns":n?"".concat(r,"-suggestions"):void 0,"aria-activedescendant":d&&-1!==i&&n?"".concat(r,"-suggestions-").concat(i):void 0,"aria-describedby":"".concat(r,"-howto"),"data-lpignore":"true"}))}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e){return B="function"==typeof Symbol&&"symbol"===D(Symbol.iterator)?function(e){return D(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":D(e)},B(e)}function z(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function W(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function F(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if("number"!=typeof o){var r=e.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function H(e){return F(e)}function V(e){return F(e,!0)}function U(e){var t=function(e){var t,o,n,r=e.ownerDocument,i=r.body,c=r&&r.documentElement;return o=(t=e.getBoundingClientRect()).left,n=t.top,{left:o-=c.clientLeft||i.clientLeft||0,top:n-=c.clientTop||i.clientTop||0}}(e),o=e.ownerDocument,n=o.defaultView||o.parentWindow;return t.left+=H(n),t.top+=V(n),t}var Z,$=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),q=/^(top|right|bottom|left)$/;function K(e,t){for(var o=0;o<e.length;o++)t(e[o])}function G(e){return"border-box"===Z(e,"boxSizing")}"undefined"!=typeof window&&(Z=window.getComputedStyle?function(e,t,o){var n="",r=e.ownerDocument,i=o||r.defaultView.getComputedStyle(e,null);return i&&(n=i.getPropertyValue(t)||i[t]),n}:function(e,t){var o=e.currentStyle&&e.currentStyle[t];if($.test(o)&&!q.test(t)){var n=e.style,r=n.left,i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,n.left="fontSize"===t?"1em":o||0,o=n.pixelLeft+"px",n.left=r,e.runtimeStyle.left=i}return""===o?"auto":o});var J=["margin","border","padding"];function X(e,t,o){var n,r={},i=e.style;for(n in t)t.hasOwnProperty(n)&&(r[n]=i[n],i[n]=t[n]);for(n in o.call(e),t)t.hasOwnProperty(n)&&(i[n]=r[n])}function Y(e,t,o){var n,r,i,c=0;for(r=0;r<t.length;r++)if(n=t[r])for(i=0;i<o.length;i++){var l;l="border"===n?"".concat(n+o[i],"Width"):n+o[i],c+=parseFloat(Z(e,l))||0}return c}function Q(e){return null!=e&&e==e.window}var ee={};function te(e,t,o){if(Q(e))return"width"===t?ee.viewportWidth(e):ee.viewportHeight(e);if(9===e.nodeType)return"width"===t?ee.docWidth(e):ee.docHeight(e);var n="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,i=(Z(e),G(e)),c=0;(null==r||r<=0)&&(r=void 0,(null==(c=Z(e,t))||Number(c)<0)&&(c=e.style[t]||0),c=parseFloat(c)||0),void 0===o&&(o=i?1:-1);var l=void 0!==r||i,a=r||c;if(-1===o)return l?a-Y(e,["border","padding"],n):c;if(l){var s=2===o?-Y(e,["border"],n):Y(e,["margin"],n);return a+(1===o?0:s)}return c+Y(e,J.slice(o),n)}K(["Width","Height"],(function(e){ee["doc".concat(e)]=function(t){var o=t.document;return Math.max(o.documentElement["scroll".concat(e)],o.body["scroll".concat(e)],ee["viewport".concat(e)](o))},ee["viewport".concat(e)]=function(t){var o="client".concat(e),n=t.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var oe={position:"absolute",visibility:"hidden",display:"block"};function ne(e){var t,o=arguments;return 0!==e.offsetWidth?t=te.apply(void 0,o):X(e,oe,(function(){t=te.apply(void 0,o)})),t}function re(e,t,o){var n=o;if("object"!==B(t))return void 0!==n?("number"==typeof n&&(n+="px"),void(e.style[t]=n)):Z(e,t);for(var r in t)t.hasOwnProperty(r)&&re(e,r,t[r])}K(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);ee["outer".concat(t)]=function(t,o){return t&&ne(t,e,o?0:1)};var o="width"===e?["Left","Right"]:["Top","Bottom"];ee[e]=function(t,n){return void 0===n?t&&ne(t,e,-1):t?(Z(t),G(t)&&(n+=Y(t,["padding","border"],o)),re(t,e,n)):void 0}}));var ie=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?W(o,!0).forEach((function(t){z(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):W(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return U(e);!function(e,t){"static"===re(e,"position")&&(e.style.position="relative");var o,n,r=U(e),i={};for(n in t)t.hasOwnProperty(n)&&(o=parseFloat(re(e,n))||0,i[n]=o+t[n]-r[n]);re(e,i)}(e,t)},isWindow:Q,each:K,css:re,clone:function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(Q(e)){if(void 0===t)return H(e);window.scrollTo(t,V(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(Q(e)){if(void 0===t)return V(e);window.scrollTo(H(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},ee);function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var le=function(e){e.preventDefault()},ae=function(t){var o=t.selectedIndex,n=t.scrollIntoView,i=t.searchValue,c=t.onHover,l=t.onSelect,a=t.suggestions,s=void 0===a?[]:a,u=t.instanceId,p=t.__experimentalRenderItem,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),m=d[0],f=d[1],v=(0,r.useRefEffect)((function(e){var t;return o>-1&&n&&e.children[o]&&(f(!0),function(e,t,o){o=o||{},9===t.nodeType&&(t=ie.getWindow(t));var n=o.allowHorizontalScroll,r=o.onlyScrollIfNeeded,i=o.alignWithTop,c=o.alignWithLeft,l=o.offsetTop||0,a=o.offsetLeft||0,s=o.offsetBottom||0,u=o.offsetRight||0;n=void 0===n||n;var p,d,m,f,v,b,y,g,h,_,w=ie.isWindow(t),x=ie.offset(e),S=ie.outerHeight(e),O=ie.outerWidth(e);w?(y=t,_=ie.height(y),h=ie.width(y),g={left:ie.scrollLeft(y),top:ie.scrollTop(y)},v={left:x.left-g.left-a,top:x.top-g.top-l},b={left:x.left+O-(g.left+h)+u,top:x.top+S-(g.top+_)+s},f=g):(p=ie.offset(t),d=t.clientHeight,m=t.clientWidth,f={left:t.scrollLeft,top:t.scrollTop},v={left:x.left-(p.left+(parseFloat(ie.css(t,"borderLeftWidth"))||0))-a,top:x.top-(p.top+(parseFloat(ie.css(t,"borderTopWidth"))||0))-l},b={left:x.left+O-(p.left+m+(parseFloat(ie.css(t,"borderRightWidth"))||0))+u,top:x.top+S-(p.top+d+(parseFloat(ie.css(t,"borderBottomWidth"))||0))+s}),v.top<0||b.top>0?!0===i?ie.scrollTop(t,f.top+v.top):!1===i?ie.scrollTop(t,f.top+b.top):v.top<0?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top):r||((i=void 0===i||!!i)?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top)),n&&(v.left<0||b.left>0?!0===c?ie.scrollLeft(t,f.left+v.left):!1===c?ie.scrollLeft(t,f.left+b.left):v.left<0?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left):r||((c=void 0===c||!!c)?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left)))}(e.children[o],e,{onlyScrollIfNeeded:!0}),t=requestAnimationFrame((function(){f(!1)}))),function(){void 0!==t&&cancelAnimationFrame(t)}}),[o,n]),b=function(e){return function(){m||null==c||c(e)}},y=function(e){return function(){null==l||l(e)}};return React.createElement("ul",{ref:v,className:"codeamp-components-multi-select-control__suggestions-list",id:"".concat(u,"-suggestions"),role:"listbox"},0===s.length&&React.createElement("li",{className:"codeamp-components-multi-select-control__no-suggestions",role:"option"},(0,e.__)("No results found.","codeamp-block-components")),s.map((function(e,t){var n,r=function(e){var t=e.label.toLocaleLowerCase().indexOf(i);return{suggestionBeforeMatch:e.label.substring(0,t),suggestionMatch:e.label.substring(t,t+i.length),suggestionAfterMatch:e.label.substring(t+i.length)}}(e),c=_()("codeamp-components-multi-select-control__suggestion",{"is-selected":t===o});return n="function"==typeof p?p({item:e}):r?React.createElement("span",{"aria-label":e.label},r.suggestionBeforeMatch,React.createElement("strong",{className:"codeamp-components-multi-select-control__suggestion-match"},r.suggestionMatch),r.suggestionAfterMatch):e.label,React.createElement("li",{id:"".concat(u,"-suggestions-").concat(t),role:"option",className:c,key:e.value,onMouseDown:le,onClick:y(e),onMouseEnter:b(e),"aria-selected":t===o},n)})))},se=o(245),ue={};function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},pe.apply(this,arguments)}function de(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function me(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ve(e){return function(e){if(Array.isArray(e))return ge(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ye(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||ye(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){if(e){if("string"==typeof e)return ge(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?ge(e,t):void 0}}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(""===e)return null;var o=null!=e?e:"",n=t.find((function(e){return-1!==e.label.toLocaleLowerCase().indexOf(o.trim().toLocaleLowerCase())}));return n}ue.styleTagTransform=b(),ue.setAttributes=d(),ue.insert=u().bind(null,"head"),ue.domAPI=a(),ue.insertStyleElement=f(),c()(se.Z,ue),se.Z&&se.Z.locals&&se.Z.locals;var _e=function(){};function we(o){var n=o.autoCapitalize,i=o.autoComplete,c=o.maxLength,l=o.placeholder,a=o.label,s=void 0===a?(0,e.__)("Add item"):a,u=o.help,p=o.className,d=o.suggestions,m=void 0===d?[]:d,f=o.options,v=void 0===f?[]:f,b=o.maxSuggestions,y=void 0===b?100:b,g=o.value,h=void 0===g?[]:g,w=o.onChange,x=void 0===w?function(){}:w,S=o.onInputChange,O=void 0===S?function(){}:S,j=o.onFocus,I=void 0===j?void 0:j,C=(o.isBorderless,o.id),P=o.disabled,M=void 0!==P&&P,R=o.messages,T=void 0===R?{added:(0,e.__)("Item added."),removed:(0,e.__)("Item removed."),remove:(0,e.__)("Remove item"),__experimentalInvalid:(0,e.__)("Invalid item")}:R,D=o.__experimentalRenderItem,B=o.__experimentalAutoSelectFirstMatch,z=void 0===B||B,W=o.__experimentalValidateInput,F=void 0===W?function(){return!0}:W,H=o.__experimentalCloseSuggestionsOnSelect,V=void 0===H||H,U=o.__next36pxDefaultSize,Z=void 0!==U&&U,$=(0,r.useInstanceId)(we,"codeamp-components-multi-select-control");C&&($=C);var q=be((0,k.useState)(""),2),K=q[0],G=q[1],J=be((0,k.useState)(0),2),X=J[0],Y=J[1],Q=be((0,k.useState)(!1),2),ee=Q[0],te=Q[1],oe=be((0,k.useState)(!1),2),ne=oe[0],re=oe[1],ie=be((0,k.useState)(-1),2),ce=ie[0],le=ie[1],se=be((0,k.useState)(!1),2),ue=se[0],ye=se[1],ge=(0,r.usePrevious)(m),xe=(0,r.usePrevious)(h),Se=(0,k.useRef)(null),Oe=(0,k.useRef)(null),ke=(0,r.useDebounce)(E.speak,500);function Ee(){var e;null===(e=Se.current)||void 0===e||e.focus()}function je(){var e;return Se.current===(null===(e=Se.current)||void 0===e?void 0:e.ownerDocument.activeElement)}function Ae(e){je()||e.target===Oe.current?(te(!0),re(!0)):te(!1),"function"==typeof I&&I(e)}function Ie(e){e.target===Oe.current&&ee&&e.preventDefault()}function Ce(e){Te(e.value),Ee()}function Pe(e){var t=!1;return je()&&We()&&(e(),t=!0),t}function Le(){var e=ze()-1;e>-1&&Te(h[e])}function Me(){var e=ze();e<h.length&&(Te(h[e]),function(e){Y(h.length-Math.max(e,-1)-1)}(e))}function Re(e){F(e.label)?(function(e){if(ve(new Set(e.filter((function(e){return!function(e){return h.some((function(t){return Ne(e)===Ne(t)}))}(e)})))),e.length>0){var t=ve(h);t.splice.apply(t,[ze(),0].concat(ve(e))),x(t)}}([e.value]),(0,E.speak)(T.added,"assertive"),G(""),ye(!1),le(-1),V&&re(!1),ee&&Ee()):(0,E.speak)(T.__experimentalInvalid,"assertive")}function Te(e){var t=h.filter((function(t){return Ne(t)!==Ne(e)}));x(t),(0,E.speak)(T.removed,"assertive")}function Ne(e){return"object"===fe(e)?e.value:e}function De(){return v.filter((function(e){return-1===h.indexOf(e.value)}))}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:De(),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y;if(""!==e.trim()){var n=[],r=[];t.forEach((function(t){var o=t.label.toLocaleLowerCase().indexOf(e.trim().toLocaleLowerCase());0===o?n.push(t):o>0&&r.push(t)})),t=n.concat(r)}return t.slice(0,o)}function ze(){return h.length-X}function We(){return 0===K.length}function Fe(){var e,t;return(null===(e=he(K))||void 0===e||null===(t=e.label)||void 0===t?void 0:t.length)>0}function He(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=Be(K),n=o.length>0;t&&(z&&n?(le(0),ye(!0)):(le(-1),ye(!1))),le(0);var r=n?(0,e.sprintf)((0,e._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",o.length),o.length):(0,e.__)("No results.");ke(r,"assertive")}(0,k.useEffect)((function(){ee&&!je()&&Ee()}),[ee]),(0,k.useEffect)((function(){var e=!A()(m,ge||[]);(e||h!==xe)&&He(e)}),[m,ge,h,xe]),(0,k.useEffect)((function(){He()}),[K]),M&&ee&&(te(!1),G(""));var Ve,Ue,Ze=_()(p,"codeamp-components-multi-select-control__input-container",{"is-active":ee,"is-disabled":M}),$e={className:"components-base-control codeamp-components-multi-select-control",tabIndex:-1},qe=Be();return M||($e=Object.assign({},$e,{onKeyDown:function(e){var t=!1;if(!e.defaultPrevented){switch(e.code){case"Backspace":t=Pe(Le);break;case"Enter":case"Space":t=function(){var e=!1,t=function(){if(-1!==ce)return Be()[ce]}();return t&&ne?(Re(t),e=!0):Fe()&&""!==K.trim()&&(Re(K),e=!0),e}();break;case"ArrowLeft":t=function(){var e=!1;return We()&&(Y((function(e){return Math.min(e+1,h.length)})),e=!0),e}();break;case"ArrowUp":t=ne?(le((function(e){return(0===e?Be(K,De(),h,y).length:e)-1})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"ArrowRight":t=function(){var e=!1;return We()&&(Y((function(e){return Math.max(e-1,0)})),e=!0),e}();break;case"ArrowDown":t=ne?(le((function(e){return(e+1)%Be(K,De(),h,y).length})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"Delete":t=Pe(Me);break;case"Escape":t=function(e){return e.target instanceof HTMLInputElement&&(G(e.target.value),re(!1),le(-1),ye(!1)),!0}(e)}t&&e.preventDefault()}},onKeyPress:function(e){var t=!1;44===e.charCode&&(Fe()&&Re(K),t=!0),t&&e.preventDefault()},onFocus:Ae})),React.createElement(t.BaseControl,{id:$,label:s,help:u},React.createElement("div",$e,React.createElement("div",{ref:Oe,className:Ze,tabIndex:-1,onMouseDown:Ie,onTouchStart:Ie},React.createElement(t.Flex,{className:"codeamp-components-multi-select-control__tokens-container",justify:"flex-start",align:"flex-start",gap:"4px",wrap:!0,__next36pxDefaultSize:Z,hasTokens:!!h.length},(Ue=h.map((function(e){return v.find((function(t){return t.value===e}))||null})).map((function(e,o){return function(e,o){var n=e.value,r=e.label,i=e.onMouseEnter,c=void 0===i?_e:i,l=e.onMouseLeave,a=void 0===l?_e:l,s=e.isBorderless,u=void 0!==s&&s,p=n,d=o+1;return React.createElement(t.FlexItem,{key:"token-"+p},React.createElement(L,{value:p,label:r,title:"string"!=typeof token?r:void 0,onClickRemove:Ce,isBorderless:u,onMouseEnter:c,onMouseLeave:a,disabled:M,messages:T,termPosition:d,termsCount:h.length}))}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?de(Object(o),!0).forEach((function(t){me(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):de(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e),o)})),Ue.splice(ze(),0,(Ve={instanceId:$,autoCapitalize:n,autoComplete:i,placeholder:0===h.length?l:"",key:"input",disabled:M,value:K,onBlur:function(){Fe()?te(!1):(G(""),Y(0),te(!1),re(!1),le(-1),ye(!1))},isExpanded:ne,selectedSuggestionIndex:ce,style:{lineHeight:"24px"},onClick:Ae},React.createElement(N,pe({},Ve,{onChange:c&&h.length>=c?void 0:function(e){var t=e.value;G(t),re(!0),O(t)},ref:Se})))),Ue)),ne&&React.createElement(ae,{instanceId:$,match:he(K,v),searchValue:K.trim(),suggestions:qe,selectedIndex:ce,scrollIntoView:ue,onHover:function(e){var t=Be().indexOf(e);t>=0&&(le(t),ye(!1))},onSelect:function(e){Re(e)},__experimentalRenderItem:D}))))}}();var r=exports;for(var i in n)r[i]=n[i];n.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();

/***/ }),

/***/ "./src/meta/general/Meta.js":
/*!**********************************!*\
  !*** ./src/meta/general/Meta.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Metabox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Metabox */ "./src/meta/general/Metabox.jsx");
/* harmony import */ var _meta_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta.scss */ "./src/meta/general/meta.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Meta() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Metabox__WEBPACK_IMPORTED_MODULE_0__["default"], {});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);

/***/ }),

/***/ "./src/meta/general/Metabox.jsx":
/*!**************************************!*\
  !*** ./src/meta/general/Metabox.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_generate_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-generate-password */ "./node_modules/js-generate-password/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  __
} = wp.i18n;
function Metabox() {
  const [postID, setPostID] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [meta, setMeta] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(options.meta);
  const [activateProtection, setActivateProtection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [protectionType, setProtectionType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('password');
  const [userRoles, setUserRoles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [protectChildPages, setProtectChildPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showUserSettings, setShowUserSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showOverwriteTexts, setShowOverwriteTexts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showMiscSettings, setShowMiscSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [hasCopied, setHasCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [hasLinkCopied, setHasLinkCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [unlockLink, setUnlockLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [numberOfPasswords, setNumberOfPasswords] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
  const [passwordGenerateType, setPasswordGenerateType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('password');
  const [generatedPassword, setGeneratedPassword] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(meta.passster_password);
  const [generatedPasswords, setGeneratedPasswords] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(meta.passster_passwords);
  const [fetchedChildPages, setFetchedChildPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [multiplePasswordLists, setMultiplePasswordLists] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const fetchPostID = () => {
    if (!fetchCorePostId) {
      let urlParams = new URLSearchParams(window.location.search);
      let postID = urlParams.get('post');

      // Now set the post ID:
      setPostID(postID);
    }
  };
  const fetchCorePostId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    if (getCurrentPostId()) {
      setPostID(getCurrentPostId());
      return true;
    } else {
      return false;
    }
  }, []);
  const saveMeta = (meta_key, value) => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/passster/v1/meta?meta_key=' + meta_key + '&post_id=' + postID,
      method: 'POST',
      data: {
        meta_value: value
      }
    });
    setMeta({
      ...meta,
      [meta_key]: value
    });
  };
  const saveChildMeta = (childID, meta_key, value) => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/passster/v1/meta?meta_key=' + meta_key + '&post_id=' + childID,
      method: 'POST',
      data: {
        meta_value: value
      }
    });
  };
  const getChildPages = postID => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/passster/v1/child-pages?post_id=' + postID
    }).then(childs => {
      setFetchedChildPages(childs);
    });
  };
  const password_lists = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEntityRecords
    } = select('core');
    return getEntityRecords('postType', 'password_lists', {
      per_page: -1,
      order: 'asc',
      status: 'publish'
    });
  }, []);
  const generatePasswords = () => {
    if ('passwords' === passwordGenerateType) {
      let passwords = '';
      if (meta.passster_passwords !== undefined) {
        passwords = meta.passster_passwords;
      }
      if ('' !== passwords) {
        passwords = passwords + ',';
      }
      for (let i = 0; i < numberOfPasswords; i++) {
        let password = (0,js_generate_password__WEBPACK_IMPORTED_MODULE_4__.GeneratePassword)({
          length: options.password_length,
          uppercase: options.include_uppercase,
          numbers: options.include_numbers,
          symbols: false
        });
        passwords = passwords += password + ',';
      }
      passwords = passwords.slice(0, -1);
      setGeneratedPasswords(passwords);
      saveMeta("passster_passwords", passwords);
    } else if ('password' === passwordGenerateType) {
      let password = (0,js_generate_password__WEBPACK_IMPORTED_MODULE_4__.GeneratePassword)({
        length: options.password_length,
        uppercase: options.include_uppercase,
        numbers: options.include_numbers,
        symbols: false
      });
      setGeneratedPassword(password);
      saveMeta("passster_password", password);
    }
  };
  const getSelectablePasswordLists = () => {
    if (!password_lists) {
      return [];
    }
    const options = [];

    // Add no role.
    options.push({
      label: __('No Password List', 'content-protector'),
      value: 0
    });
    password_lists.map(function (password_list) {
      if (password_list.title.raw && password_list.title.raw !== '') {
        options.push({
          label: password_list.title.raw,
          value: password_list.id
        });
      }
      return password_list;
    });
    return options;
  };
  const getSelectableUserRoles = () => {
    if (!userRoles) {
      return [];
    }
    const options = [];

    // Add no role.
    options.push({
      label: __('No Role', 'content-protector'),
      value: 'no-role'
    });
    for (const userRole in userRoles) {
      options.push({
        label: userRoles[userRole].name,
        value: userRole
      });
    }
    return options;
  };
  const getAreaShortcode = () => {
    let shortcode = '';
    if (!activateProtection) {
      return shortcode;
    }

    // Modify based on protection type.
    switch (meta.passster_protection_type) {
      case 'password':
        shortcode = '[passster password="' + meta.passster_password + '" ';
        break;
      case 'passwords':
        shortcode = '[passster passwords="' + meta.passster_passwords + '" ';
        break;
      case 'password_list':
        shortcode = '[passster password_list="' + meta.passster_password_list + '" ';
        break;
      case 'password_lists':
        shortcode = '[passster password_lists="' + meta.passster_password_lists.join('|') + '" ';
        break;
      case 'recaptcha':
        shortcode = '[passster recaptcha="true" ';
        break;
      default:
        shortcode = '[passster password="' + meta.passster_password + '" ';
    }
    shortcode += 'area="' + postID + '" ';
    if (showUserSettings) {
      // Modify based on user restriction.
      if ('' !== meta.passster_user_restriction) {
        if ('user-role' === meta.passster_user_restriction_type && 'no-role' !== meta.passster_user_restriction) {
          shortcode += 'role="' + meta.passster_user_restriction + '" ';
        } else {
          if ('no-role' !== meta.passster_user_restriction) {
            shortcode += 'user="' + meta.passster_user_restriction + '" ';
          }
        }
      }
    }
    if (showOverwriteTexts) {
      // Modify based on changed defaults.
      if ('' !== meta.passster_headline) {
        shortcode += 'headline="' + meta.passster_headline + '" ';
      }
      if ('' !== meta.passster_instruction) {
        shortcode += 'instruction="' + meta.passster_instruction + '" ';
      }
      if ('' !== meta.passster_placeholder) {
        shortcode += 'placeholder="' + meta.passster_placeholder + '" ';
      }
      if ('' !== meta.passster_button) {
        shortcode += 'button="' + meta.passster_button + '" ';
      }
      if ('' !== meta.passster_id) {
        shortcode += 'id="' + meta.passster_id + '" ';
      }
    }
    if (showMiscSettings) {
      // Modify based on misc settings.
      if ('' !== meta.passster_redirect_url) {
        shortcode += 'redirect="' + meta.passster_redirect_url + '" ';
      }
      if ('yes' === meta.passster_hide) {
        shortcode += 'hide="true" ';
      }
    }
    shortcode = shortcode.replace(/\s?$/, '');
    shortcode += ']';
    return shortcode;
  };
  const generateUnlockLink = () => {
    let link = '';
    switch (protectionType) {
      case 'password':
        link = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
          path: '/passster/v1/link?password=' + meta.passster_password + '&post_id=' + postID + '&is_list=false',
          method: 'GET'
        }).then(res => {
          setUnlockLink(res);
        });
        break;
      case 'passwords':
        let passwords = meta.passster_passwords.split(',');
        link = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
          path: '/passster/v1/link?password=' + passwords[0] + '&post_id=' + postID + '&is_list=false',
          method: 'GET'
        }).then(res => {
          setUnlockLink(res);
        });
        break;
      case 'password_list':
        link = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
          path: '/passster/v1/link?password=' + meta.passster_password_list + '&post_id=' + postID + '&is_list=true',
          method: 'GET'
        }).then(res => {
          setUnlockLink(res);
        });
        break;
      case 'password_lists':
        link = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
          path: '/passster/v1/link?password=' + meta.passster_password_lists + '&post_id=' + postID + '&is_list=true' + '&is_multiple=true',
          method: 'GET'
        }).then(res => {
          setUnlockLink(res);
        });
        break;
    }
  };
  const showShortcode = () => {
    let show = false;
    switch (meta.passster_protection_type) {
      case 'password':
        if (meta.passster_password) {
          show = true;
        }
        break;
      case 'passwords':
        if (meta.passster_password) {
          show = true;
        }
        break;
      case 'password_list':
        if (meta.passster_password_list) {
          show = true;
        }
        break;
      case 'password_lists':
        if (meta.passster_password_lists) {
          show = true;
        }
        break;
      case 'recaptcha':
        show = true;
        break;
    }
    return show;
  };
  const updateChildPages = useChild => {
    if (useChild) {
      // Maybe fetch child pages.
      getChildPages(postID);
      if (fetchedChildPages) {
        fetchedChildPages.forEach(function (childID) {
          // Update meta for these pages.
          saveChildMeta(childID, "passster_activate_protection", activateProtection);
          saveChildMeta(childID, "passster_protection_type", protectionType);
          if (options.is_pro) {
            switch (protectionType) {
              case 'password':
                saveChildMeta(childID, "passster_password", meta.passster_password);
                break;
              case 'passwords':
                saveChildMeta(childID, "passster_passwords", meta.passster_passwords);
                break;
              case 'password_list':
                saveChildMeta(childID, "passster_password_list", meta.passster_password_list);
                break;
              case 'password_lists':
                saveChildMeta(childID, "passster_password_lists", meta.passster_password_lists);
                break;
            }
          } else {
            saveChildMeta(childID, "passster_password", meta.passster_password);
          }
          if (options.is_pro) {
            // Maybe overwrite user restriction.
            if (showUserSettings) {
              saveChildMeta(childID, "passster_activate_user_restriction", showUserSettings);
              saveChildMeta(childID, "passster_user_restriction_type", meta.passster_user_restriction_type);
              saveChildMeta(childID, "passster_user_restriction", meta.passster_user_restriction);
            }
          }

          // Maybe overwrite labels.
          if (showOverwriteTexts) {
            saveChildMeta(childID, "passster_activate_overwrite_defaults", showOverwriteTexts);
            saveChildMeta(childID, "passster_headline", meta.passster_headline);
            saveChildMeta(childID, "passster_instruction", meta.passster_instruction);
            saveChildMeta(childID, "passster_placeholder", meta.passster_placeholder);
            saveChildMeta(childID, "passster_button", meta.passster_button);
            saveChildMeta(childID, "passster_id", meta.passster_id);
          }

          // Maybe overwrite miscs.
          if (showMiscSettings) {
            saveChildMeta(childID, "passster_activate_misc_settings", showMiscSettings);
            saveChildMeta(childID, "passster_hide", meta.passster_hide);
            saveChildMeta(childID, "passster_redirect_url", meta.passster_redirect_url);
          }
        });
      }
    } else {
      // Maybe fetch child pages.
      getChildPages(postID);
      if (fetchedChildPages) {
        fetchedChildPages.forEach(function (childID) {
          // Update meta for these pages.
          saveChildMeta(childID, "passster_activate_protection", false);
          saveChildMeta(childID, "passster_protection_type", "");
          if (options.is_pro) {
            saveChildMeta(childID, "passster_password", "");
            saveChildMeta(childID, "passster_passwords", "");
            saveChildMeta(childID, "passster_password_list", 0);

            // Clear user restriction.
            saveChildMeta(childID, "passster_user_restriction_type", "username");
            saveChildMeta(childID, "passster_user_restriction", "");
          } else {
            saveChildMeta(childID, "passster_password", "");
          }

          // Clear labels.
          saveChildMeta(childID, "passster_headline", "");
          saveChildMeta(childID, "passster_instruction", "");
          saveChildMeta(childID, "passster_placeholder", "");
          saveChildMeta(childID, "passster_button", "");
          saveChildMeta(childID, "passster_id", "");

          // Clear miscs.
          saveChildMeta(childID, "passster_hide", "");
          saveChildMeta(childID, "passster_redirect_url", "");
        });
      }
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchPostID();
    if (options.is_pro) {
      // Setup user roles.
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: '/passster/v1/user-roles'
      }).then(value => {
        setUserRoles(value);
      });
    }
    if (meta.passster_password_lists) {
      setMultiplePasswordLists(meta.passster_password_lists);
    }

    // Check for post type.
    if ('protected_areas' === options.post_type) {
      setActivateProtection(true);
    }

    // Check if global protection.
    if (options.global_protection_id == postID) {
      setActivateProtection(true);
    }

    // Toggle settings.
    if (meta.passster_activate_protection) {
      setActivateProtection(true);
    } else {
      if ('protected_areas' !== options.post_type && options.global_protection_id != postID) {
        setActivateProtection(false);
      }
    }
    if (meta.passster_protect_child_pages) {
      setProtectChildPages(true);
    }
    if (protectChildPages) {
      updateChildPages(true);
    } else {
      updateChildPages(false);
    }
    if (options.is_pro) {
      if (meta.passster_activate_user_restriction) {
        setShowUserSettings(true);
      }
    }
    if (meta.passster_activate_overwrite_defaults) {
      setShowOverwriteTexts(true);
    }
    if (meta.passster_activate_misc_settings) {
      setShowMiscSettings(true);
    }
    if (meta.passster_password) {
      setGeneratedPassword(meta.passster_password);
    }
    if (options.is_pro) {
      if (meta.passster_passwords) {
        setGeneratedPassword(meta.passster_passwords);
      }
    }
    setProtectionType(meta.passster_protection_type);
    if (options.is_pro) {
      // Genenerate encrypted unlock link.
      generateUnlockLink();
    }

    // Save shortcode to meta.
    if (showShortcode()) {
      saveMeta("passster_area_shortcode", getAreaShortcode());
    } else {
      saveMeta("passster_area_shortcode", "");
    }
  }, [postID]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "meta-settings",
    children: ['protected_areas' !== options.post_type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
      label: __('Activate Protection', 'content-protector'),
      checked: activateProtection,
      onChange: value => {
        setActivateProtection(value);
        saveMeta("passster_activate_protection", value);
      }
    }), activateProtection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: ['page' === options.post_type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        label: __('Protect Child Pages', 'content-protector'),
        checked: protectChildPages,
        onChange: value => {
          setProtectChildPages(value);
          saveMeta("passster_protect_child_pages", value);
          updateChildPages(value);
        }
      }), options.is_pro ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: __('Protection Mode', 'content-protector'),
          value: protectionType,
          options: [{
            label: __('Password', 'content-protector'),
            value: 'password'
          }, {
            label: __('Passwords', 'content-protector'),
            value: 'passwords'
          }, {
            label: __('Password List', 'content-protector'),
            value: 'password_list'
          }, {
            label: __('Password Lists', 'content-protector'),
            value: 'password_lists'
          }, {
            label: __('reCAPTCHA', 'content-protector'),
            value: 'recaptcha'
          }],
          onChange: value => {
            saveMeta("passster_protection_type", value);
            setProtectionType(value);
          }
        }), protectionType == 'password' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Password', 'content-protector'),
            placeholder: "password1",
            value: generatedPassword,
            onChange: value => {
              setGeneratedPassword(value);
              saveMeta("passster_password", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
            margin: 5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            style: {
              top: "-5px",
              position: "relative"
            },
            onClick: () => {
              setPasswordGenerateType('password');
              generatePasswords();
            },
            variant: "secondary",
            children: __('Generate password', 'content-protector')
          })]
        }), protectionType == 'passwords' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Passwords', 'content-protector'),
            placeholder: "password1,password2,password3",
            value: generatedPasswords,
            onChange: value => {
              setGeneratedPasswords(value);
              saveMeta("passster_passwords", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: __('Number of passwords to generate', 'content-protector'),
                help: __("How many passwords do you want to generate?", 'content-protector'),
                type: "number",
                value: numberOfPasswords,
                onChange: value => {
                  setNumberOfPasswords(value);
                }
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
                style: {
                  top: "-5px",
                  position: "relative"
                },
                onClick: () => {
                  setPasswordGenerateType('passwords');
                  generatePasswords();
                },
                variant: "secondary",
                children: __('Generate password', 'content-protector')
              })
            })
          })]
        }), protectionType == 'password_list' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: __('Password List', 'content-protector'),
            options: getSelectablePasswordLists(),
            value: meta.passster_password_list,
            onChange: value => {
              saveMeta("passster_password_list", value);
            }
          })
        }), protectionType == 'password_lists' && multiplePasswordLists && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            multiple: true,
            label: __('Password Lists', 'content-protector'),
            options: getSelectablePasswordLists(),
            value: meta.passster_password_lists,
            onChange: value => {
              setMultiplePasswordLists(value);
              saveMeta("passster_password_lists", value);
            }
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Password', 'content-protector'),
          placeholder: "password1",
          value: generatedPassword,
          onChange: value => {
            setGeneratedPassword(value);
            saveMeta("passster_password", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          style: {
            top: "-5px",
            position: "relative"
          },
          onClick: () => {
            setPasswordGenerateType('password');
            generatePasswords();
          },
          variant: "secondary",
          children: __('Generate password', 'content-protector')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), options.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('User Restriction', 'content-protector'),
          checked: showUserSettings,
          onChange: value => {
            setShowUserSettings(value);
            saveMeta("passster_activate_user_restriction", value);
          }
        }), showUserSettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: __('Choose User Restriction Type', 'content-protector'),
            options: [{
              label: __('Username', 'content-protector'),
              value: 'username'
            }, {
              label: __('User Role', 'content-protector'),
              value: 'user-role'
            }],
            value: meta.passster_user_restriction_type,
            onChange: value => {
              saveMeta("passster_user_restriction_type", value);
            }
          }), meta.passster_user_restriction_type === 'user-role' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: __('User Role', 'content-protector'),
            value: meta.passster_user_restriction,
            placeholder: "subscriber",
            options: getSelectableUserRoles(),
            onChange: value => {
              saveMeta("passster_user_restriction", value);
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Username', 'content-protector'),
            value: meta.passster_user_restriction,
            placeholder: "user_a",
            onChange: value => {
              saveMeta("passster_user_restriction", value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        label: __('Overwrite Defaults', 'content-protector'),
        checked: showOverwriteTexts,
        onChange: value => {
          setShowOverwriteTexts(value);
          saveMeta("passster_activate_overwrite_defaults", value);
        }
      }), showOverwriteTexts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Headline', 'content-protector'),
          placeholder: __('Protected Area', 'content-protector'),
          help: __('This is the headline of your password-protection form.', 'content-protector'),
          value: meta.passster_headline,
          onChange: value => {
            saveMeta("passster_headline", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('Instruction', 'content-protector'),
          placeholder: __('This content is password-protected. Please verify with a password to unlock the content.', 'content-protector'),
          help: __('The instruction text appears before the password input field. Use it for hints or additional explanation.', 'content-protector'),
          value: meta.passster_instruction,
          onChange: value => {
            saveMeta("passster_instruction", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Placeholder', 'content-protector'),
          placeholder: __('Enter your password..', 'content-protector'),
          help: __('Edit the placeholder text of the password field.', 'content-protector'),
          value: meta.passster_placeholder,
          onChange: value => {
            saveMeta("passster_placeholder", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Button Label', 'content-protector'),
          placeholder: __('Unlock', 'content-protector'),
          help: __('Edit the text that appears on the button.', 'content-protector'),
          value: meta.passster_button,
          onChange: value => {
            saveMeta("passster_button", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Unique ID', 'content-protector'),
          placeholder: __('my-custom-id', 'content-protector'),
          help: __('Give your password form a unique ID.', 'content-protector'),
          value: meta.passster_id,
          onChange: value => {
            saveMeta("passster_id", value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        label: __('Misc Settings', 'content-protector'),
        checked: showMiscSettings,
        onChange: value => {
          setShowMiscSettings(value);
          saveMeta("passster_activate_misc_settings", value);
        }
      }), showMiscSettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: __('Hide/Show', 'content-protector'),
          options: [{
            label: __('No', 'content-protector'),
            value: 'no'
          }, {
            label: __('Yes', 'content-protector'),
            value: 'yes'
          }],
          value: meta.passster_hide,
          help: __('Hide this password form. It will not show the password form, but it will show the unlocked content.', 'content-protector'),
          onChange: value => {
            saveMeta("passster_hide", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Redirect', 'content-protector'),
          placeholder: "https://your-url.com",
          type: "url",
          help: __('Redirect the user to this URL once they submit the correct password.', 'content-protector'),
          value: meta.passster_redirect_url,
          onChange: value => {
            saveMeta("passster_redirect_url", value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), 'protected_areas' === options.post_type && showShortcode() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ClipboardButton, {
        variant: "primary",
        text: getAreaShortcode(),
        onCopy: () => setHasCopied(true),
        onFinishCopy: () => setHasCopied(false),
        children: hasCopied ? __('Copied!', 'content-protector') : __('Copy Shortcode', 'content-protector')
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [protectionType === 'password' && meta.passster_password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ClipboardButton, {
          variant: "secondary",
          text: unlockLink,
          onCopy: () => setHasLinkCopied(true),
          onFinishCopy: () => setHasLinkCopied(false),
          children: hasLinkCopied ? __('Copied Link!', 'content-protector') : __('Copy Unlock Link', 'content-protector')
        }), protectionType === 'passwords' && meta.passster_passwords && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ClipboardButton, {
          variant: "secondary",
          text: unlockLink,
          onCopy: () => setHasLinkCopied(true),
          onFinishCopy: () => setHasLinkCopied(false),
          children: hasLinkCopied ? __('Copied Link!', 'content-protector') : __('Copy Unlock Link', 'content-protector')
        }), protectionType === 'password_list' && meta.passster_password_list && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ClipboardButton, {
          variant: "secondary",
          text: unlockLink,
          onCopy: () => setHasLinkCopied(true),
          onFinishCopy: () => setHasLinkCopied(false),
          children: hasLinkCopied ? __('Copied Link!', 'content-protector') : __('Copy Unlock Link', 'content-protector')
        })]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Metabox);

/***/ }),

/***/ "./src/meta/password-lists/Metabox.jsx":
/*!*********************************************!*\
  !*** ./src/meta/password-lists/Metabox.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_generate_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-generate-password */ "./node_modules/js-generate-password/dist/index.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const {
  __
} = wp.i18n;
function Metabox() {
  const [postId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(options.post_id);
  const [meta, setMeta] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(options.meta);
  const [expirationMode, setExpirationMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("first_usage");
  const [expireAfterUsage, setExpireAfterUsage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [numberOfPasswords, setNumberOfPasswords] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const [isReset, setIsReset] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const saveMeta = (meta_key, value) => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/passster/v1/meta?meta_key=' + meta_key + '&post_id=' + postId,
      method: 'POST',
      data: {
        meta_value: value
      }
    });
    setMeta({
      ...meta,
      [meta_key]: value
    });
  };
  const deleteMeta = meta_key => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/passster/v1/meta?meta_key=' + meta_key + '&post_id=' + postId,
      method: 'POST',
      data: {
        delete: true
      }
    });
  };
  const generatePasswords = () => {
    let passwords = '';
    if (meta.passster_passwords !== undefined) {
      passwords = meta.passster_passwords;
    }
    if ('' !== passwords) {
      passwords = passwords + ',';
    }
    for (let i = 0; i < numberOfPasswords; i++) {
      let password = (0,js_generate_password__WEBPACK_IMPORTED_MODULE_3__.GeneratePassword)({
        length: options.password_length,
        uppercase: options.include_uppercase,
        numbers: options.include_numbers,
        symbols: false
      });
      passwords = passwords += password + ',';
    }
    passwords = passwords.slice(0, -1);
    saveMeta("passster_passwords", passwords);
  };
  const columns = [{
    name: __('Password', 'content-protector'),
    selector: row => row.password,
    sortable: true
  }, {
    name: __('Number of usages', 'content-protector'),
    selector: row => row.usage,
    sortable: true
  }, {
    name: __('Expires in', 'content-protector'),
    selector: row => row.time,
    sortable: true
  }, {
    name: __('Expired', 'content-protector'),
    selector: row => row.expired,
    sortable: true
  }];
  const runResetStatistics = () => {
    // Delete Meta.
    deleteMeta('passster_expired_passwords');
    deleteMeta('passster_expired_passwords_statistics');
    setIsReset(true);
    setTimeout(function () {
      setIsReset(false);
    }, 2000);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (meta.passster_expire_mode) {
      setExpirationMode(meta.passster_expire_mode);
    }
    if (meta.passster_expire_passwords) {
      setExpireAfterUsage(true);
    }
  }, [postId, meta]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "paswword-list-settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      className: "add-passwords",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
          children: __('Add Passwords', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('Passwords', 'content-protector'),
          placeholder: __('password1,password2,password3', 'content-protector'),
          rows: "15",
          help: __('Add a comma-separated list of passwords.', 'content-protector'),
          value: meta.passster_passwords,
          onChange: value => {
            saveMeta("passster_passwords", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          justify: "left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: __('Number of passwords to generate', 'content-protector'),
                help: __("How many passwords do you want to generate? We automatically add the generated passwords to your password list.", 'content-protector'),
                type: "number",
                value: numberOfPasswords,
                onChange: value => {
                  setNumberOfPasswords(value);
                }
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
                style: {
                  top: "-5px",
                  position: "relative"
                },
                onClick: generatePasswords,
                variant: "primary",
                children: __('Generate passwords', 'content-protector')
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      className: "expire-passswords",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
          children: __('Expiration', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: __('Choose an expiration mode', 'content-protector'),
          value: meta.passster_expire_mode,
          options: [{
            label: __('First Usage', 'content-protector'),
            value: 'first_usage'
          }, {
            label: __('Number of usages', 'content-protector'),
            value: 'number_of_usages'
          }, {
            label: __('By Interval', 'content-protector'),
            value: 'interval'
          }],
          onChange: value => {
            // Reset existing values.
            if (value === 'first_usage') {
              saveMeta("passster_expire_usage", '');
              saveMeta("passster_expire_time", '');
              saveMeta("passster_expire_time_unit", 'day');
            } else if (value === 'number_of_usages') {
              saveMeta("passster_expire_passwords", false);
              saveMeta("passster_expire_time", '');
              saveMeta("passster_expire_time_unit", 'day');
            } else if (value === 'interval') {
              saveMeta("passster_expire_usage", '');
              saveMeta("passster_expire_passwords", false);
            }
            saveMeta("passster_expire_mode", value);
            setExpirationMode(value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), 'first_usage' === expirationMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Expire Password after usage', 'content-protector'),
          help: __("The password will be immediately removed from the password list after it's first usage.", 'content-protector'),
          checked: expireAfterUsage,
          onChange: value => {
            setExpireAfterUsage(value);
            saveMeta("passster_expire_passwords", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), 'number_of_usages' === expirationMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Expire after number of usage', 'content-protector'),
          help: __("The password will be removed from the password list after the number of usage is reached.", 'content-protector'),
          type: "number",
          value: meta.passster_expire_usage,
          onChange: value => {
            saveMeta("passster_expire_usage", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), 'interval' === expirationMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          justify: "left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: __('Expire after a time interval', 'content-protector'),
                help: __("Expire the password after a specific time interval. It starts tracking once the password is used for the first time.", 'content-protector'),
                type: "number",
                value: meta.passster_expire_time,
                onChange: value => {
                  saveMeta("passster_expire_time", value);
                }
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
                className: "time-unit-select",
                label: __('Time Unit', 'content-protector'),
                value: meta.passster_expire_time_unit,
                options: [{
                  label: __('Days', 'content-protector'),
                  value: 'day'
                }, {
                  label: __('Hours', 'content-protector'),
                  value: 'hour'
                }, {
                  label: __('Weeks', 'content-protector'),
                  value: 'week'
                }, {
                  label: __('Months', 'content-protector'),
                  value: 'month'
                }],
                onChange: value => {
                  saveMeta("passster_expire_time_unit", value);
                }
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), meta.passster_expired_passwords_statistics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
          children: __('Usage', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
          columns: columns,
          data: meta.passster_expired_passwords_statistics,
          pagination: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: runResetStatistics,
          variant: "secondary",
          children: __('Reset Expiration Statistics', 'content-protector')
        }), isReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
          type: "slide-in",
          options: {
            origin: 'top'
          },
          children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
            status: "success",
            className: "expiration-notice",
            isDismissible: false,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              children: __('Expiration Statistics resetted successfully.', 'content-protector')
            })
          })
        }) : '']
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Metabox);

/***/ }),

/***/ "./src/meta/password-lists/PasswordListMeta.js":
/*!*****************************************************!*\
  !*** ./src/meta/password-lists/PasswordListMeta.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Metabox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Metabox */ "./src/meta/password-lists/Metabox.jsx");
/* harmony import */ var _meta_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta.scss */ "./src/meta/password-lists/meta.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function PasswordListMeta() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Metabox__WEBPACK_IMPORTED_MODULE_0__["default"], {});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordListMeta);

/***/ }),

/***/ "./src/settings/Settings.js":
/*!**********************************!*\
  !*** ./src/settings/Settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/settings/components/SettingsPage.jsx");
/* harmony import */ var _settings_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.scss */ "./src/settings/settings.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Settings() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/settings/components/DimensionControl.jsx":
/*!******************************************************!*\
  !*** ./src/settings/components/DimensionControl.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DimensionControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  __
} = wp.i18n;
function DimensionControl({
  onChange,
  label,
  units,
  value
}) {
  const availableUnits = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseCustomUnits)({
    availableUnits: ['%', 'px', 'em', 'rem', 'vw']
  });
  const selectedUnit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalParseQuantityAndUnitFromRawValue)(value), [value])[1] || availableUnits[0]?.value || 'px';
  const handleChange = unitValue => {
    // Prevent the unit from getting returned if there is no actual value set.
    const [newValue, newUnit] =
    // eslint-disable-line
    (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalParseQuantityAndUnitFromRawValue)(unitValue);
    if (newValue) {
      onChange(unitValue);
    }
    console.log(unitValue);
  };
  const handleUnitChange = newUnit => {
    // Attempt to smooth over differences between currentUnit and newUnit.
    // This should slightly improve the experience of switching between unit types.
    const [currentValue, currentUnit] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalParseQuantityAndUnitFromRawValue)(value);
    if (['em', 'rem'].includes(newUnit) && currentUnit === 'px') {
      // Convert pixel value to an approximate of the new unit, assuming a root size of 16px.
      onChange((currentValue / 16).toFixed(2) + newUnit);
    } else if (['em', 'rem'].includes(currentUnit) && newUnit === 'px') {
      // Convert to pixel value assuming a root size of 16px.
      onChange(Math.round(currentValue * 16) + newUnit);
    } else if (['vh', 'vw', '%'].includes(newUnit) && currentValue > 100) {
      // When converting to `vh`, `vw`, or `%` units, cap the new value at 100.
      onChange(100 + newUnit);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("fieldset", {
    className: "components-dimension-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      className: "components-base-control__label formatted-label",
      children: __('Form width', 'content-protector')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      value: value,
      units: availableUnits,
      onChange: handleChange,
      onUnitChange: handleUnitChange,
      min: 0,
      size: '__unstable-large'
    })]
  });
}

/***/ }),

/***/ "./src/settings/components/SettingsPage.jsx":
/*!**************************************************!*\
  !*** ./src/settings/components/SettingsPage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_GeneralSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/GeneralSettings */ "./src/settings/pages/GeneralSettings.jsx");
/* harmony import */ var _pages_DesignSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/DesignSettings */ "./src/settings/pages/DesignSettings.jsx");
/* harmony import */ var _pages_GlobalProtectionSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/GlobalProtectionSettings */ "./src/settings/pages/GlobalProtectionSettings.jsx");
/* harmony import */ var _pages_WooIntegrationSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/WooIntegrationSettings */ "./src/settings/pages/WooIntegrationSettings.jsx");
/* harmony import */ var _pages_AdvancedSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/AdvancedSettings */ "./src/settings/pages/AdvancedSettings.jsx");
/* harmony import */ var _pages_ExternalSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/ExternalSettings */ "./src/settings/pages/ExternalSettings.jsx");
/* harmony import */ var _pages_SystemStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/SystemStatus */ "./src/settings/pages/SystemStatus.jsx");
/* harmony import */ var _pages_Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Utilities */ "./src/settings/pages/Utilities.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const {
  __
} = wp.i18n;
function SettingsPage() {
  const [activeItem, setActiveItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)('/');
  const [initialSet, setInitialSet] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (!initialSet) {
      setActiveItem('/');
      setInitialSet(true);
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: 'plugin-settings-container',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorProvider, {
      initialPath: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Flex, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Card, {
            className: 'plugin-nav',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-logo',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                alt: "Logo",
                src: options.logo
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
              children: ["Version: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
                children: options.version
              })]
            }), !options.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'save-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
                href: "https://passster.com/#pricing",
                target: "_blank",
                variant: "primary",
                children: __('Passster PRO', 'content-protector')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/'),
                className: activeItem === '/' ? 'is-active-item' : '',
                path: "/",
                children: __('General', 'content-protector')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/design-settings'),
                className: activeItem === '/design-settings' ? 'is-active-item' : '',
                path: "/design-settings",
                children: __('Design', 'content-protector')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/advanced-settings'),
                className: activeItem === '/advanced-settings' ? 'is-active-item' : '',
                path: "/advanced-settings",
                children: __('Advanced', 'content-protector')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/global-protection'),
                className: activeItem === '/global-protection' ? 'is-active-item' : '',
                path: "/global-protection",
                children: __('Global Protection', 'content-protector')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/woo-integration'),
                className: activeItem === '/woo-integration' ? 'is-active-item' : '',
                path: "/woo-integration",
                children: __('WooCommerce Integration', 'content-protector')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/external-settings'),
                className: activeItem === '/external-settings' ? 'is-active-item' : '',
                path: "/external-settings",
                children: __('External Services', 'content-protector')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/system-status'),
                className: activeItem === '/system-status' ? 'is-active-item' : '',
                path: "/system-status",
                children: __('System Status', 'content-protector')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorButton, {
                onClick: () => setActiveItem('/utilities'),
                className: activeItem === '/utilities' ? 'is-active-item' : '',
                path: "/utilities",
                children: __('Utilities', 'content-protector')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
                href: "https://patrickposner.dev/passster/docs/",
                target: "_blank",
                children: [__('Documentation', 'content-protector'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Dashicon, {
                    icon: "admin-links"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
                href: "https://patrickposner.dev/passster/changelogs/",
                target: "_blank",
                children: [__('Changelog', 'content-protector'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Dashicon, {
                    icon: "admin-links"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
                href: "https://passster.com/#free-vs-pro",
                target: "_blank",
                style: {
                  color: '#6804cc'
                },
                children: [__('Lite vs. Pro', 'content-protector'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Dashicon, {
                    icon: "admin-links"
                  })
                })]
              })]
            })]
          })
        }), activeItem === '/' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_GeneralSettings__WEBPACK_IMPORTED_MODULE_0__["default"], {})
            })
          })
        }), activeItem === '/design-settings' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/design-settings",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_DesignSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {})
            })
          })
        }), activeItem === '/global-protection' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/global-protection",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_GlobalProtectionSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {})
            })
          })
        }), activeItem === '/woo-integration' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/woo-integration",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_WooIntegrationSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            })
          })
        }), activeItem === '/advanced-settings' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/advanced-settings",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_AdvancedSettings__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            })
          })
        }), activeItem === '/external-settings' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/external-settings",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_ExternalSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {})
            })
          })
        }), activeItem === '/system-status' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/system-status",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_SystemStatus__WEBPACK_IMPORTED_MODULE_6__["default"], {})
            })
          })
        }), activeItem === '/utilities' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
          isBlock: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.__experimentalNavigatorScreen, {
            path: "/utilities",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: 'plugin-settings',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_Utilities__WEBPACK_IMPORTED_MODULE_7__["default"], {})
            })
          })
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

/***/ }),

/***/ "./src/settings/context/SettingsContext.jsx":
/*!**************************************************!*\
  !*** ./src/settings/context/SettingsContext.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContext: () => (/* binding */ SettingsContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  __
} = wp.i18n;
const SettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function SettingsContextProvider(props) {
  const defaultSettings = {
    headline: __('Protected Area', 'content-protector'),
    instruction: __('This content is password-protected. Please verify with a password to unlock the content.', 'content-protector'),
    placeholder: __('Enter your password..', 'content-protector'),
    error: __('Sorry, there was an error.', 'content-protector'),
    button_label: __('Unlock', 'content-protector'),
    password_length: 6,
    include_uppercase: false,
    include_numbers: false,
    show_password: false,
    form_max_width: "600px",
    center_form: false,
    form_background_color: '#FAFAFA',
    form_margin: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0'
    },
    form_padding: {
      top: '10px',
      left: '30px',
      right: '30px',
      bottom: '30px'
    },
    form_border_radius: 0,
    headline_font_color: '#6804cc',
    headline_font_size: 24,
    headline_font_weight: 500,
    instruction_font_color: '#000',
    instruction_font_size: 16,
    instruction_font_weight: '300',
    button_background_color: '#6804cc',
    button_font_color: '#fff',
    button_background_color_hover: '#000',
    button_font_color_hover: '#fff',
    button_margin: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0'
    },
    button_padding: {
      top: '10px',
      left: '10px',
      right: '10px',
      bottom: '10px'
    },
    button_border_radius: 0,
    button_font_size: 16,
    button_font_weight: '300',
    unlock_mode: false,
    disable_cookie: false,
    cookie_duration: 2,
    cookie_duration_unit: 'days',
    third_party_shortcodes: '',
    use_concurrent: false,
    number_of_concurrents: 1,
    track_ip: false,
    recaptcha_version: 'v3',
    recaptcha_site_key: '',
    recaptcha_secret: '',
    recaptcha_language: 'en',
    bitly_token: ''
  };
  const [settingsSaved, setSettingsSaved] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSettings);
  const [configs, setConfigs] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const getSettings = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/settings'
    }).then(options => {
      setSettings(options);
    });
  };
  const saveSettings = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/settings',
      method: 'POST',
      data: settings
    });
  };
  const resetSettings = () => {
    setSettings(defaultSettings);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/settings',
      method: 'POST',
      data: defaultSettings
    });
  };
  const resetConcurrent = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/reset-concurrent',
      method: 'POST',
      reset: true
    });
  };
  const migrateSettings = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/migrate',
      method: 'POST',
      migrate: true
    });
  };
  const importSettings = newSettings => {
    setSettings(newSettings);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/settings',
      method: 'POST',
      data: newSettings
    });
  };
  const updateSetting = (key, value) => {
    setSettings({
      ...settings,
      [key]: value
    });
  };
  const getStatus = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/system-status'
    }).then(configs => {
      setConfigs(configs);
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getSettings();
    getStatus();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SettingsContext.Provider, {
    value: {
      settings,
      configs,
      settingsSaved,
      setSettingsSaved,
      updateSetting,
      setSettings,
      saveSettings,
      resetSettings,
      importSettings,
      resetConcurrent,
      migrateSettings
    },
    children: props.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsContextProvider);

/***/ }),

/***/ "./src/settings/pages/AdvancedSettings.jsx":
/*!*************************************************!*\
  !*** ./src/settings/pages/AdvancedSettings.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  __
} = wp.i18n;
function AdvancedSettings() {
  const {
    settings,
    updateSetting,
    saveSettings,
    settingsSaved,
    setSettingsSaved,
    resetConcurrent
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const [unlockMode, setUnlockMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [disableCookie, setDisableCookie] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [useConcurrent, setUseConcurrent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isConcurrentReset, setIsConcurrentReset] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [trackIp, setTrackIp] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const setSavingSettings = () => {
    saveSettings();
    setSettingsSaved(true);
    setTimeout(function () {
      setSettingsSaved(false);
    }, 2000);
  };
  const runResetConcurrent = () => {
    setIsConcurrentReset(true);
    resetConcurrent();
    setTimeout(function () {
      setIsConcurrentReset(false);
    }, 2000);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings.unlock_mode) {
      setUnlockMode(settings.unlock_mode);
    }
    if (settings.disable_cookie) {
      setDisableCookie(settings.disable_cookie);
    }
    if (settings.use_concurrent) {
      setUseConcurrent(settings.use_concurrent);
    }
    if (settings.track_ip) {
      setTrackIp(settings.track_ip);
    }
  }, [settings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "inner-settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('Usage Mode', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Use Ajax', 'content-protector'),
          help: unlockMode ? __('You are using Ajax for unlocking content. Make sure to add any shortcodes of a page into the Third-Party-Shortcodes setting.', 'content-protector') : __('Unlock content with Ajax (no reload). It is not recommended for entire pages or when using a Third-Party Page Builder.', 'content-protector'),
          checked: unlockMode,
          onChange: value => {
            setUnlockMode(value);
            updateSetting("unlock_mode", value);
          }
        }), unlockMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Disable Cookie', 'content-protector'),
          help: disableCookie ? __('Each time a user visits the protected content it needs to be unlocked again.', 'content-protector') : __('The password is stored in a cookie. Next time the content is unlocked automatically.', 'content-protector'),
          checked: disableCookie,
          onChange: value => {
            setDisableCookie(value);
            updateSetting("disable_cookie", value);
          }
        }), !disableCookie && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Cookie Lifetime', 'content-protector'),
            help: __('The lifetime of your cookie is based on this number and the lifetime unit below. Once a cookie expires, the user will need to enter the password again.', 'content-protector'),
            type: 'number',
            value: settings.cookie_duration,
            onChange: value => {
              updateSetting("cookie_duration", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: __('Cookie Lifetime Unit', 'content-protector'),
            value: settings.cookie_duration_unit,
            options: [{
              label: __('Days', 'content-protector'),
              value: 'days'
            }, {
              label: __('Hours', 'content-protector'),
              value: 'hours'
            }, {
              label: __('Minutes', 'content-protector'),
              value: 'minutes'
            }],
            onChange: value => {
              updateSetting("cookie_duration_unit", value);
            }
          })]
        }), unlockMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('Third-Party-Shortcodes', 'content-protector'),
          help: __('Add a comma separated list of shortcodes you want to use inside of Passster. You can also use {post-id} to add the ID of the current page/post dynamically. ', 'content-protector'),
          value: settings.third_party_shortcodes,
          onChange: value => {
            updateSetting("third_party_shortcodes", value);
          }
        })]
      })]
    }), options.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: __('Concurrent Usage', 'content-protector')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
            label: __('Track Concurrent Usage', 'content-protector'),
            help: useConcurrent ? __('Track and prevent concurrent usage of the same password.', 'content-protector') : __('Do not track concurrent usages. A password can be used without any limitations to unlock your content.', 'content-protector'),
            checked: useConcurrent,
            onChange: value => {
              setUseConcurrent(value);
              updateSetting("use_concurrent", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Number of Allowed Concurrent Usages', 'content-protector'),
            help: __('Limit the number of logins with one password at the same time. It will create a custom database table to track the usage of the passwords. It uses the current IP of the user to recognize them. You can use the shortcode [passster-logout] to handle the logout.', 'content-protector'),
            value: settings.number_of_concurrents,
            type: 'number',
            onChange: value => {
              updateSetting("number_of_concurrents", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: runResetConcurrent,
            variant: "secondary",
            children: __('Reset Concurrent Data', 'content-protector')
          }), isConcurrentReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
            type: "slide-in",
            options: {
              origin: 'top'
            },
            children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
              status: "success",
              isDismissible: false,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: __('Concurrent data resetted successfully.', 'content-protector')
              })
            })
          }) : '']
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: __('Statistics', 'content-protector')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
            label: __('Track IP', 'content-protector'),
            help: trackIp ? __('Track the IP of the user in statistics.', 'content-protector') : __('Do not track the IP of the user in statistics', 'content-protector'),
            checked: trackIp,
            onChange: value => {
              setTrackIp(value);
              updateSetting("track_ip", value);
            }
          })
        })]
      })]
    }), !options.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: __('Concurrent Usage', 'content-protector')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
          children: [__('Keep track of how often a password is used at the same time to prevent abuse and unallowed sharing.', 'content-protector'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
            margin: 10
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
              href: "https://passster.com/#free-vs-pro",
              target: "_blank",
              className: "button",
              style: {
                marginRight: '10px'
              },
              children: __('Lite vs Pro', 'content-protector')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
              href: "https://passster.com/#pricing",
              target: "_blank",
              className: "button-primary button",
              children: __('Get Passster PRO!', 'content-protector')
            })]
          })]
        })]
      })]
    }), settingsSaved && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
      type: "slide-in",
      options: {
        origin: 'top'
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "success",
        isDismissible: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('Settings saved successfully.', 'content-protector')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "save-settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: setSavingSettings,
        variant: "primary",
        children: __('Save Settings', 'content-protector')
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedSettings);

/***/ }),

/***/ "./src/settings/pages/DesignSettings.jsx":
/*!***********************************************!*\
  !*** ./src/settings/pages/DesignSettings.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var _components_DimensionControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DimensionControl */ "./src/settings/components/DimensionControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const {
  __
} = wp.i18n;
function DesignSettings() {
  const {
    settings,
    updateSetting,
    saveSettings,
    settingsSaved,
    setSettingsSaved
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const [borderRadius, setBorderRadius] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.form_border_radius));
  const [buttonBorderRadius, setButtonBorderRadius] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.button_border_radius));
  const [headlineFontSize, setHeadlineFontSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.headline_font_size));
  const [instructionFontSize, setInstructionFontSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.instruction_font_size));
  const [buttonFontSize, setButtonFontSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(settings.button_font_size ? parseInt(settings.button_font_size) : 16);
  const [headlineFontWeight, setHeadlineFontWeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.headline_font_weight));
  const [instructionFontWeight, setInstructionFontWeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.instruction_font_weight));
  const [buttonFontWeight, setButtonFontWeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(settings.button_font_weight));
  const [showPassword, setShowPassword] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [hideHeadline, setHideHeadline] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [centerForm, setCenterForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [buttonState, setButtonState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isOpenSections, setIsOpenSections] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    form: true,
    spacing: true,
    instruction: true,
    button: true
  });
  const toggleSection = section => {
    setIsOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  const instructionFallbackFontSize = 16;
  const buttonFallbackFontSize = 14;
  const fallbackFontSize = 24;
  const fontColors = [{
    name: 'passster',
    color: '#6804cc'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'black',
    color: '#000'
  }];
  const backgroundColors = [{
    name: 'passster',
    color: '#6804cc'
  }, {
    name: 'light-grey',
    color: '#FAFAFA'
  }, {
    name: 'black',
    color: '#000'
  }];
  const [formPadding, setFormPadding] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: '10px',
    left: '30px',
    right: '30px',
    bottom: '30px'
  });
  const [formMargin, setFormMargin] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  });
  const [buttonPadding, setButtonPadding] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '10px'
  });
  const [buttonMargin, setButtonMargin] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  });
  const fontSizes = [{
    name: __('Small'),
    slug: 'small',
    size: 12
  }, {
    name: __('Medium'),
    slug: 'medium',
    size: 16
  }, {
    name: __('Big'),
    slug: 'big',
    size: 24
  }];
  const setSavingSettings = () => {
    saveSettings();
    setSettingsSaved(true);
    setTimeout(function () {
      setSettingsSaved(false);
    }, 2000);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings.show_password) {
      setShowPassword(settings.show_password);
    }
    if (settings.center_form) {
      setCenterForm(settings.center_form);
    }
    if (settings.form_margin) {
      setFormMargin(settings.form_margin);
    }
    if (settings.form_padding) {
      setFormPadding(settings.form_padding);
    }
    if (settings.button_margin) {
      setButtonMargin(settings.button_margin);
    }
    if (settings.button_padding) {
      setButtonPadding(settings.button_padding);
    }
  }, [settings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: 'inner-settings',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        onClick: () => toggleSection('form'),
        className: "header_collapse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: __('Form', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: isOpenSections.form ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-up-alt2"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-down-alt2"
          })
        })]
      }), isOpenSections.form && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_DimensionControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: __('Form width', 'ollie-blocks'),
          value: settings.form_max_width,
          onChange: value => {
            updateSetting('form_max_width', value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Form position', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Center Form', 'content-protector'),
          help: centerForm ? __('Center the password form in the middle of the page.', 'content-protector') : __('Do not center the password form.', 'content-protector'),
          checked: centerForm,
          onChange: value => {
            setCenterForm(value);
            updateSetting('center_form', value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Background Color', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
            colors: backgroundColors,
            value: settings.form_background_color,
            onChange: value => {
              updateSetting('form_background_color', value);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Spacing Controls', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalBoxControl, {
              label: __('Margin', 'content-protector'),
              values: formMargin,
              help: __('Margin is the space around an element. The higher the value the more space is around the password form.', 'content-protector'),
              onChange: value => {
                setFormMargin(value);
                updateSetting('form_margin', value);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalBoxControl, {
              label: __('Padding', 'content-protector'),
              values: formPadding,
              help: __('Padding is the space between an element and its content. The higher the value the more space is inside the password form.', 'content-protector'),
              onChange: value => {
                setFormPadding(value);
                updateSetting('form_padding', value);
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: __('Border Radius', 'content-protector'),
          value: borderRadius,
          onChange: value => {
            setBorderRadius(value);
            updateSetting('form_border_radius', value);
          },
          help: __('The higher the border radius the more rounded are the corners of the form.', 'content-protector'),
          min: 0,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Show Password', 'content-protector'),
          help: showPassword ? __('Add a checkbox to show the password before submitting.', 'content-protector') : __('Do not add a checkbox to view the password', 'content-protector'),
          checked: showPassword,
          onChange: value => {
            setShowPassword(value);
            updateSetting('show_password', value);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        onClick: () => toggleSection('spacing'),
        className: "header_collapse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: __('Headline', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: isOpenSections.spacing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-up-alt2"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-down-alt2"
          })
        })]
      }), isOpenSections.spacing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Font Controls', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Color', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
            colors: fontColors,
            value: settings.headline_font_color,
            onChange: value => {
              updateSetting('headline_font_color', value);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FontSizePicker, {
          fontSizes: fontSizes,
          value: headlineFontSize,
          fallbackFontSize: fallbackFontSize,
          onChange: value => {
            setHeadlineFontSize(value);
            updateSetting('headline_font_size', value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: __('Font weight', 'content-protector'),
          value: headlineFontWeight,
          onChange: value => {
            setHeadlineFontWeight(value);
            updateSetting('headline_font_weight', value);
          },
          min: 100,
          step: 100,
          max: 700
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Hide Headline', 'content-protector'),
          help: hideHeadline ? __('The password form will be shown without the headline', 'content-protector') : __('The password form will include the headline', 'content-protector'),
          checked: hideHeadline,
          onChange: value => {
            setHideHeadline(value);
            updateSetting('hide_headline', value);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        onClick: () => toggleSection('instruction'),
        className: "header_collapse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: __('Instruction', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: isOpenSections.instruction ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-up-alt2"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-down-alt2"
          })
        })]
      }), isOpenSections.instruction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Font Controls', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Color', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
            colors: fontColors,
            value: settings.instruction_font_color,
            onChange: value => {
              updateSetting('instruction_font_color', value);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FontSizePicker, {
          fontSizes: fontSizes,
          value: instructionFontSize,
          fallbackFontSize: instructionFallbackFontSize,
          onChange: value => {
            setInstructionFontSize(value);
            updateSetting('instruction_font_size', value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: __('Font weight', 'content-protector'),
          value: instructionFontWeight,
          onChange: value => {
            setInstructionFontWeight(value);
            updateSetting('instruction_font_weight', value);
          },
          min: 100,
          step: 100,
          max: 700
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        onClick: () => toggleSection('button'),
        className: "header_collapse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: __('Button', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: isOpenSections.button ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-up-alt2"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "dashicons dashicons-arrow-down-alt2"
          })
        })]
      }), isOpenSections.button && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Color Controls', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), buttonState ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
            className: 'formatted-label',
            children: __('Background Color (Hover)', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
              colors: backgroundColors,
              value: settings.button_background_color_hover,
              onChange: value => {
                updateSetting('button_background_color_hover', value);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
            margin: 5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
            className: 'formatted-label',
            children: __('Font Color (Hover)', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
              colors: fontColors,
              value: settings.button_font_color_hover,
              onChange: value => {
                updateSetting('button_font_color_hover', value);
              }
            })
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
            className: 'formatted-label',
            children: __('Background Color', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
              colors: backgroundColors,
              value: settings.button_background_color,
              onChange: value => {
                updateSetting('button_background_color', value);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
            margin: 5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
            className: 'formatted-label',
            children: __('Font Color', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
              colors: fontColors,
              value: settings.button_font_color,
              onChange: value => {
                updateSetting('button_font_color', value);
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Change button State', 'content-protector'),
          help: buttonState ? __('Set colors (hover)', 'content-protector') : __('Set colors', 'content-protector'),
          checked: buttonState,
          onChange: value => {
            setButtonState(value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Spacing Controls', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalBoxControl, {
              label: __('Margin', 'content-protector'),
              values: buttonMargin,
              help: __('Margin is the space around an element. The higher the value the more space is around the password form.', 'content-protector'),
              onChange: value => {
                setButtonMargin(value);
                updateSetting('button_margin', value);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalBoxControl, {
              label: __('Padding', 'content-protector'),
              values: buttonPadding,
              help: __('Padding is the space between an element and its content. The higher the value the more space is inside the password form.', 'content-protector'),
              onChange: value => {
                setButtonPadding(value);
                updateSetting('button_padding', value);
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: __('Border Radius', 'content-protector'),
          value: buttonBorderRadius,
          help: __('The higher the border radius the more rounded are the corners of the button.', 'content-protector'),
          onChange: value => {
            setButtonBorderRadius(value);
            updateSetting('button_border_radius', value);
          },
          min: 0,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          className: 'formatted-label',
          children: __('Font Controls', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FontSizePicker, {
          fontSizes: fontSizes,
          value: buttonFontSize,
          fallbackFontSize: buttonFallbackFontSize,
          onChange: value => {
            setButtonFontSize(value);
            updateSetting('button_font_size', value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: __('Font weight', 'content-protector'),
          value: buttonFontWeight,
          onChange: value => {
            setButtonFontWeight(value);
            updateSetting('button_font_weight', value);
          },
          min: 100,
          step: 100,
          max: 700
        })]
      })]
    }), settingsSaved && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
      type: "slide-in",
      options: {
        origin: 'top'
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "success",
        isDismissible: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: __('Settings saved successfully.', 'content-protector')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: 'save-settings',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: setSavingSettings,
        variant: "primary",
        children: __('Save Settings', 'content-protector')
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignSettings);

/***/ }),

/***/ "./src/settings/pages/ExternalSettings.jsx":
/*!*************************************************!*\
  !*** ./src/settings/pages/ExternalSettings.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  __
} = wp.i18n;
function ExternalSettings() {
  const {
    settings,
    updateSetting,
    saveSettings,
    settingsSaved,
    setSettingsSaved
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const [recaptchaVersion, setRecaptchaVersion] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('v3');
  const setSavingSettings = () => {
    saveSettings();
    setSettingsSaved(true);
    setTimeout(function () {
      setSettingsSaved(false);
    }, 2000);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings.recaptcha_version) {
      setRecaptchaVersion(settings.recaptcha_version);
    }
  }, [settings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "inner-settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('reCAPTCHA', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: options.is_pro ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: __('reCAPTCHA Type', 'content-protector'),
            value: recaptchaVersion,
            options: [{
              label: __('Google reCAPTCHA V2 (Checkbox)', 'content-protector'),
              value: 'v2'
            }, {
              label: __('Google reCAPTCHA V3 (invisible CAPTCHA)', 'content-protector'),
              value: 'v3'
            }, {
              label: __('hCAPTCHA', 'content-protector'),
              value: 'hcaptcha'
            }],
            onChange: value => {
              setRecaptchaVersion(value);
              updateSetting("recaptcha_version", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Site Key', 'content-protector'),
            help: __('Add your reCAPTCHA Site Key here.', 'content-protector'),
            value: settings.recaptcha_site_key,
            onChange: value => {
              updateSetting("recaptcha_site_key", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Secret', 'content-protector'),
            help: __('Add your reCAPTCHA Secret here.', 'content-protector'),
            value: settings.recaptcha_secret,
            onChange: value => {
              updateSetting("recaptcha_secret", value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            label: __('Language', 'content-protector'),
            help: __('Add your language here. For example, ‘en’ for English or ‘de’ for German.', 'content-protector'),
            placeholder: "en",
            value: settings.recaptcha_language,
            onChange: value => {
              updateSetting("recaptcha_language", value);
            }
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: [__('reCAPTCHA is only available within the pro version of Passster.', 'content-protector'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "button button-primary",
            style: {
              marginLeft: "10px",
              paddingTop: "2px"
            },
            href: "https://patrickposner.dev/plugins/passster",
            target: "_blank",
            children: __('Get Passster PRO', 'content-protector')
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('Bit.ly', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: options.is_pro ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Bit.ly Access Token', 'content-protector'),
          help: __('Add your Bit.ly access token here.', 'content-protector'),
          value: settings.bitly_token,
          onChange: value => {
            updateSetting("bitly_token", value);
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: [__('Bit.ly is only available within the pro version of Passster.', 'content-protector'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "button button-primary",
            style: {
              marginLeft: "10px",
              paddingTop: "2px"
            },
            href: "https://patrickposner.dev/plugins/passster",
            target: "_blank",
            children: __('Get Passster PRO', 'content-protector')
          })]
        })
      })]
    }), settingsSaved && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
      type: "slide-in",
      options: {
        origin: 'top'
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "success",
        isDismissible: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('Settings saved successfully.', 'content-protector')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "save-settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: setSavingSettings,
        variant: "primary",
        children: __('Save Settings', 'content-protector')
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalSettings);

/***/ }),

/***/ "./src/settings/pages/GeneralSettings.jsx":
/*!************************************************!*\
  !*** ./src/settings/pages/GeneralSettings.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  __
} = wp.i18n;
function GeneralSettings() {
  const {
    settings,
    updateSetting,
    saveSettings,
    settingsSaved,
    setSettingsSaved
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const [includeUppercase, setIncludeUppercase] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [includeNumbers, setIncludeNumbers] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const setSavingSettings = () => {
    saveSettings();
    setSettingsSaved(true);
    setTimeout(function () {
      setSettingsSaved(false);
    }, 2000);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings.include_uppercase) {
      setIncludeUppercase(settings.include_uppercase);
    }
    if (settings.include_numbers) {
      setIncludeNumbers(settings.include_numbers);
    }
  }, [settings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "inner-settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: __('Form Labels & Description', 'content-protector')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('Edit the text that’s used within the password form on this page. You can overwrite these settings individually per area/page.', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Headline', 'content-protector'),
          help: __('This is the headline of your password-protection form.', 'content-protector'),
          value: settings.headline,
          onChange: value => {
            updateSetting("headline", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('Instruction', 'content-protector'),
          help: __('The instruction text appears before the password input field. Use it for hints or additional explanation.', 'content-protector'),
          value: settings.instruction,
          onChange: value => {
            updateSetting("instruction", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Placeholder', 'content-protector'),
          help: __('Edit the placeholder text of the password field.', 'content-protector'),
          value: settings.placeholder,
          onChange: value => {
            updateSetting("placeholder", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('Error', 'content-protector'),
          help: __('Edit the error message that appears if a user enters the wrong password.', 'content-protector'),
          value: settings.error,
          onChange: value => {
            updateSetting("error", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Button Label', 'content-protector'),
          help: __('Edit the text that appears on the button.', 'content-protector'),
          value: settings.button_label,
          onChange: value => {
            updateSetting("button_label", value);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: __('Generating Passwords', 'content-protector')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Password length', 'content-protector'),
          help: __('Set a default length for generated passwords.', 'content-protector'),
          type: "number",
          value: settings.password_length,
          onChange: value => {
            updateSetting("password_length", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Include uppercase characters', 'content-protector'),
          help: includeUppercase ? __('Include uppercase characters in passwords.', 'content-protector') : __('Generate passwords only with lowercase.', 'content-protector'),
          checked: includeUppercase,
          onChange: value => {
            setIncludeUppercase(value);
            updateSetting("include_uppercase", value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Include numbers', 'content-protector'),
          help: includeNumbers ? __('Include numbers in passwords.', 'content-protector') : __('Generate passwords without numbers.', 'content-protector'),
          checked: includeNumbers,
          onChange: value => {
            setIncludeNumbers(value);
            updateSetting("include_numbers", value);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), settingsSaved && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
      type: "slide-in",
      options: {
        origin: 'top'
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "success",
        isDismissible: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('Settings saved successfully.', 'content-protector')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "save-settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: setSavingSettings,
        variant: "primary",
        children: __('Save Settings', 'content-protector')
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/settings/pages/GlobalProtectionSettings.jsx":
/*!*********************************************************!*\
  !*** ./src/settings/pages/GlobalProtectionSettings.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codeamp/block-components */ "./node_modules/@codeamp/block-components/dist/index.js");
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  __
} = wp.i18n;
function GlobalProtectionSettings() {
  const {
    settings,
    updateSetting,
    saveSettings,
    settingsSaved,
    setSettingsSaved
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const [activateGlobalProtection, setActivateGlobalProtection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [pages, setPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [excludablePages, setExcludablePages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [globalProtectionId, setGlobalProtectionId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(settings.global_protection_id);
  const [editUrl, setEditUrl] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(options.global_edit_url);
  const setSavingSettings = () => {
    saveSettings();
    setSettingsSaved(true);
    setTimeout(function () {
      setSettingsSaved(false);
    }, 2000);
  };
  const updateEditUrl = global_protection_id => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/passster/v1/edit-url?post_id=' + global_protection_id
    }).then(url => {
      setEditUrl(url);
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Get global page selection
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/passster/v1/pages'
    }).then(fetched_pages => {
      let pages = fetched_pages;
      pages.unshift({
        label: __('No page selected', 'content-protector'),
        value: 0
      });
      setPages(pages);
    });

    // Get excludable page selection
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/passster/v1/excludable-pages'
    }).then(fetched_pages => {
      setExcludablePages(fetched_pages);
    });
    if (settings.activate_global_protection) {
      setActivateGlobalProtection(settings.activate_global_protection);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "inner-settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: __('Global Protection', 'content-protector')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: __('Activate Global Protection', 'content-protector'),
          help: activateGlobalProtection ? __('Global Password Protection is activated.', 'content-protector') : __('Global Password Protection is deactivated.', 'content-protector'),
          checked: activateGlobalProtection,
          onChange: value => {
            setActivateGlobalProtection(value);
            updateSetting("activate_global_protection", value);
          }
        }), activateGlobalProtection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: __('Select a Page', 'content-protector'),
            options: pages,
            help: __('Visitors who still need to submit the correct password will be redirected to this page. Please follow the link below to set it up.', 'content-protector'),
            value: globalProtectionId,
            onChange: value => {
              updateSetting("global_protection_id", value);
              setGlobalProtectionId(value);
              updateEditUrl(value);
            }
          }), globalProtectionId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: editUrl,
            children: __('Customize the Global Protection Page', 'content-protector')
          }), excludablePages && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
              margin: 5
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "formatted-label",
              children: __('Exclude pages', 'content-protector')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "ps-multi-select",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_4__.MultiSelectControl, {
                value: settings.exclude_pages,
                options: excludablePages,
                onChange: value => {
                  updateSetting("exclude_pages", value);
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              id: "inspector-select-control-0__help",
              className: "components-base-control__help css-1n1x27z ej5x27r1",
              children: __('Select pages that should not be affected by global protection. This can be useful for information about data privacy or terms of use pages.', 'content-protector')
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), settingsSaved && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
      type: "slide-in",
      options: {
        origin: 'top'
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "success",
        isDismissible: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: __('Settings saved successfully.', 'content-protector')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "save-settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: setSavingSettings,
        variant: "primary",
        children: __('Save Settings', 'content-protector')
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalProtectionSettings);

/***/ }),

/***/ "./src/settings/pages/SystemStatus.jsx":
/*!*********************************************!*\
  !*** ./src/settings/pages/SystemStatus.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function SystemStatus() {
  const {
    configs
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const statusData = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: Object.keys(configs).map(key => {
      const items = configs[key];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: key
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              style: {
                maxWidth: "300px"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("table", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
                  className: "table-data",
                  children: Object.entries(items).map(item => {
                    if (typeof item[1] == "boolean") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      className: "table-row",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
                          children: item[0]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        children: [" ", item[1] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
                          className: "icon-yes",
                          icon: "yes"
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
                          className: "icon-no",
                          icon: "no"
                        }), " "]
                      })]
                    }, item[0]);
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      className: "table-row",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
                          children: item[0]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        children: [" ", item[1], " "]
                      })]
                    }, item[0]);
                  })
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        })]
      }, key);
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "inner-settings",
    children: statusData()
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemStatus);

/***/ }),

/***/ "./src/settings/pages/Utilities.jsx":
/*!******************************************!*\
  !*** ./src/settings/pages/Utilities.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/settings/context/SettingsContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  __
} = wp.i18n;
function Utilities() {
  const {
    settings,
    importSettings,
    saveSettings,
    resetSettings,
    migrateSettings
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.SettingsContext);
  const [isExport, setIsExport] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isImport, setIsImport] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isReset, setIsReset] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMigrate, setIsMigrate] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [hasCopied, setHasCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [importData, setImportData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const setImportDataValue = event => {
    setImportData(JSON.parse(event.target.value));
  };
  const runImportSettings = () => {
    importSettings(importData);
    setIsImport(true);
    setTimeout(function () {
      setIsImport(false);
    }, 2000);
  };
  const runResetSettings = () => {
    resetSettings();
    setIsReset(true);
    setTimeout(function () {
      setIsReset(false);
    }, 2000);
  };
  const runMigrateSettings = () => {
    migrateSettings();
    saveSettings();
    setIsMigrate(true);
    setTimeout(function () {
      setIsMigrate(false);
    }, 2000);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "inner-settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('Migrate Settings', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('Migrate all of your customizer settings and options within version 4 of Passster.', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: runMigrateSettings,
            variant: "primary",
            children: __('Migrate settings', 'content-protector')
          })
        }), isMigrate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
          type: "slide-in",
          options: {
            origin: 'top'
          },
          children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
            status: "success",
            isDismissible: false,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: __('Settings migration successfully.', 'content-protector')
            })
          })
        }) : '']
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('Export', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: !isExport ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: setIsExport,
            variant: "primary",
            children: __('Export Settings', 'content-protector')
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: JSON.stringify(settings)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ClipboardButton, {
              variant: "secondary",
              text: JSON.stringify(settings),
              onCopy: () => setHasCopied(true),
              onFinishCopy: () => setHasCopied(false),
              children: hasCopied ? __('Copied!', 'content-protector') : __('Copy export data', 'content-protector')
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('Import', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('Paste in the JSON string you got from your export to import all settings for the plugin.', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
            rows: "8",
            cols: "60",
            name: "import-data",
            onChange: setImportDataValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: runImportSettings,
            variant: "primary",
            children: __('Import Settings', 'content-protector')
          })
        }), isImport ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
          type: "slide-in",
          options: {
            origin: 'top'
          },
          children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
            status: "success",
            isDismissible: false,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: __('Settings imported successfully.', 'content-protector')
            })
          })
        }) : '']
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: __('Reset Plugin Data', 'content-protector')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: __('By clicking the following button, you will reset all plugin settings. This can be useful if you want to import a new set of settings or you want a fresh start.', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: runResetSettings,
            variant: "secondary",
            children: __('Reset Plugin Settings', 'content-protector')
          })
        }), isReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
          type: "slide-in",
          options: {
            origin: 'top'
          },
          children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
            status: "success",
            isDismissible: false,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: __('Settings resetted successfully.', 'content-protector')
            })
          })
        }) : '']
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utilities);

/***/ }),

/***/ "./src/settings/pages/WooIntegrationSettings.jsx":
/*!*******************************************************!*\
  !*** ./src/settings/pages/WooIntegrationSettings.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  __
} = wp.i18n;
function WooIntegrationSettings() {
  const [isCollapsed, setIsCollapsed] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: 'inner-settings',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        onClick: () => setIsCollapsed(!isCollapsed),
        className: "header_collapse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: __('WooCommerce Integration', 'content-protector')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: isCollapsed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "dashicons dashicons-arrow-up-alt2"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "dashicons dashicons-arrow-down-alt2"
          })
        })]
      }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
        children: [__('Enable protection features in your WooCommerce store through Passster.', 'content-protector'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), __('Lite/free version'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "upsell-settings-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: "upsell-settings-list-item",
            children: __('Implement full store protection.', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: "upsell-settings-list-item",
            children: __('Protect individual products with passwords.', 'content-protector')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 5
        }), __('Pro Version'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "upsell-settings-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: "upsell-settings-list-item",
            children: __('Choose from multiple protection modes.', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: "upsell-settings-list-item",
            children: __('Apply protection based on user roles.', 'content-protector')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
          margin: 10
        }), !options.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            href: "https://passster.com/#free-vs-pro",
            target: "_blank",
            className: "button",
            style: {
              marginRight: '10px'
            },
            children: __('Lite vs Pro', 'content-protector')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            href: "https://passster.com/#pricing",
            target: "_blank",
            className: "button-primary button",
            children: __('Get Passster PRO!', 'content-protector')
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
      margin: 5
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WooIntegrationSettings);

/***/ }),

/***/ "./src/statistics/Statistics.js":
/*!**************************************!*\
  !*** ./src/statistics/Statistics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_StatisticsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context/StatisticsContext */ "./src/statistics/context/StatisticsContext.jsx");
/* harmony import */ var _components_StatisticsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/StatisticsPage */ "./src/statistics/components/StatisticsPage.jsx");
/* harmony import */ var _statistics_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.scss */ "./src/statistics/statistics.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Statistics() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_context_StatisticsContext__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_StatisticsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statistics);

/***/ }),

/***/ "./src/statistics/components/StatisticsPage.jsx":
/*!******************************************************!*\
  !*** ./src/statistics/components/StatisticsPage.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var _context_StatisticsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StatisticsContext */ "./src/statistics/context/StatisticsContext.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const {
  __
} = wp.i18n;
function StatisticsPage() {
  const {
    statistics,
    resetStatistics
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_StatisticsContext__WEBPACK_IMPORTED_MODULE_2__.StatisticsContext);
  const [isReset, setIsReset] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const runResetStatistics = () => {
    resetStatistics();
    setIsReset(true);
    setTimeout(function () {
      setIsReset(false);
    }, 2000);
  };
  const columns = [{
    name: __('Password', 'content-protector'),
    selector: row => row.password,
    sortable: true
  }, {
    name: __('Number of Usages', 'content-protector'),
    selector: row => row.number_of_usages,
    sortable: true
  }, {
    name: __('First Usage', 'content-protector'),
    selector: row => row.first_usage,
    sortable: true
  }, {
    name: __('IP Address', 'content-protector'),
    selector: row => row.ip
  }, {
    name: __('Browser', 'content-protector'),
    selector: row => row.browser
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "plugin-settings-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "plugin-logo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              alt: "Logo",
              src: options.logo
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            children: ["Version: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
              children: options.version
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: runResetStatistics,
            variant: "primary",
            children: __('Reset Statistics', 'content-protector')
          }), isReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
            type: "slide-in",
            options: {
              origin: 'top'
            },
            children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
              status: "success",
              isDismissible: false,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                children: __('Statistics resetted successfully.', 'content-protector')
              })
            })
          }) : '']
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "content",
      children: statistics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
        columns: columns,
        data: statistics,
        pagination: true
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticsPage);

/***/ }),

/***/ "./src/statistics/context/StatisticsContext.jsx":
/*!******************************************************!*\
  !*** ./src/statistics/context/StatisticsContext.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsContext: () => (/* binding */ StatisticsContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  __
} = wp.i18n;
const StatisticsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function StatisticsContextProvider(props) {
  const [statistics, setStatistics] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const getStatistics = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/statistics'
    }).then(data => {
      if (data) {
        setStatistics(data);
      } else {
        setStatistics([]);
      }
    });
  };
  const resetStatistics = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/passster/v1/reset-statistics',
      method: 'POST',
      reset: true
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getStatistics();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StatisticsContext.Provider, {
    value: {
      statistics,
      resetStatistics
    },
    children: props.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticsContextProvider);

/***/ }),

/***/ "./node_modules/js-generate-password/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-generate-password/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneratePassword = void 0;
const password_generator_1 = __webpack_require__(/*! ./lib/password-generator */ "./node_modules/js-generate-password/dist/lib/password-generator.js");
const check_options_error_1 = __webpack_require__(/*! ./lib/check-options-error */ "./node_modules/js-generate-password/dist/lib/check-options-error.js");
const process_options_1 = __webpack_require__(/*! ./lib/process-options */ "./node_modules/js-generate-password/dist/lib/process-options.js");
function GeneratePassword(options) {
    let pswd;
    if (options) {
        options = (0, process_options_1.processOption)(options);
        (0, check_options_error_1.checkError)(options);
        pswd = (0, password_generator_1.generatePswd)(options);
        return pswd;
    }
    else {
        let opt = {
            length: 10,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: false,
            exclude: "",
            minLengthLowercase: 1,
            minLengthUppercase: 1,
            minLengthNumbers: 1,
            minLengthSymbols: 0,
        };
        options = (0, process_options_1.processOption)(opt);
        (0, check_options_error_1.checkError)(options);
        pswd = (0, password_generator_1.generatePswd)(options);
        return pswd;
    }
}
exports.GeneratePassword = GeneratePassword;
exports["default"] = { GeneratePassword };


/***/ }),

/***/ "./node_modules/js-generate-password/dist/lib/check-options-error.js":
/*!***************************************************************************!*\
  !*** ./node_modules/js-generate-password/dist/lib/check-options-error.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkError = void 0;
const checkError = (options) => {
    const { length, lowercase, uppercase, numbers, symbols, minLengthLowercase, minLengthUppercase, minLengthNumbers, minLengthSymbols, } = options;
    //Checking if the sum of minimum characters of Lowercase, uppercase, numbers and special case is greater than the total password length.
    if (minLengthLowercase +
        minLengthUppercase +
        minLengthNumbers +
        minLengthSymbols >
        length) {
        throw new Error("Sum of Minimum Characters in the passwords greater than the length of the Password to be generated.");
    }
    //Checking if lowercase, uppercase , numbers and special characters have all been set to false.
    if (lowercase == false &&
        uppercase == false &&
        numbers == false &&
        symbols == false) {
        throw new Error("Alphabets, Numbers and Symbols are all set to False. No valid Characters to generate the Password.");
    }
};
exports.checkError = checkError;
// module.exports = checkError;


/***/ }),

/***/ "./node_modules/js-generate-password/dist/lib/generate-random-number.js":
/*!******************************************************************************!*\
  !*** ./node_modules/js-generate-password/dist/lib/generate-random-number.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateRandomNumbers = void 0;
const generateRandomNumbers = (upperLimit) => {
    return Math.floor(Math.random() * upperLimit);
};
exports.generateRandomNumbers = generateRandomNumbers;
// module.exports = generateRandomNumbers;


/***/ }),

/***/ "./node_modules/js-generate-password/dist/lib/password-generator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/js-generate-password/dist/lib/password-generator.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generatePswd = void 0;
// const generategenerateRandomNumberss = require("./generate-random-number");
// const shuffleString = require("./shuffle-string");
const generate_random_number_1 = __webpack_require__(/*! ./generate-random-number */ "./node_modules/js-generate-password/dist/lib/generate-random-number.js");
const shuffle_string_1 = __webpack_require__(/*! ./shuffle-string */ "./node_modules/js-generate-password/dist/lib/shuffle-string.js");
const generatePswd = (options) => {
    let pswd = "";
    let minChar = "";
    let { length, lowercase, uppercase, numbers, symbols, minLengthLowercase, minLengthUppercase, minLengthNumbers, minLengthSymbols, exclude, } = options;
    let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    lowercaseChar = removeExceptions(lowercaseChar, exclude);
    let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    uppercaseChar = removeExceptions(uppercaseChar, exclude);
    let numberChar = "0123456789";
    numberChar = removeExceptions(numberChar, exclude);
    let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_{|}~";
    specialChar = removeExceptions(specialChar, exclude);
    //  Generating a minChar string that holds minimum number of characters on the User Option Selection.
    // The minChar variable will store the minimum number of characters for each type - lowercase, uppercase, numbers, and symbols.
    //  Then, the minChar variable is shuffled to make the password random.
    let upperLimit = lowercaseChar.length;
    for (let i = 0; i < minLengthLowercase; i++) {
        minChar += lowercaseChar.charAt((0, generate_random_number_1.generateRandomNumbers)(upperLimit));
    }
    upperLimit = uppercaseChar.length;
    for (let i = 0; i < minLengthUppercase; i++) {
        minChar += uppercaseChar.charAt((0, generate_random_number_1.generateRandomNumbers)(upperLimit));
    }
    upperLimit = numberChar.length;
    for (let i = 0; i < minLengthNumbers; i++) {
        minChar += numberChar.charAt((0, generate_random_number_1.generateRandomNumbers)(upperLimit));
    }
    upperLimit = specialChar.length;
    for (let i = 0; i < minLengthSymbols; i++) {
        minChar += specialChar.charAt((0, generate_random_number_1.generateRandomNumbers)(upperLimit));
    }
    //Shuffling the minChar to generate a password that holds minimum criteria.
    pswd = pswd + (0, shuffle_string_1.shuffleString)(minChar);
    let characterString = "";
    characterString = lowercase
        ? characterString + lowercaseChar
        : characterString;
    characterString = uppercase
        ? characterString + uppercaseChar
        : characterString;
    characterString = numbers ? characterString + numberChar : characterString;
    characterString = symbols ? characterString + specialChar : characterString;
    let remainingChar = length - pswd.length;
    upperLimit = characterString.length;
    for (let i = 0; i < remainingChar; i++) {
        pswd += characterString.charAt((0, generate_random_number_1.generateRandomNumbers)(upperLimit));
    }
    return pswd;
};
exports.generatePswd = generatePswd;
const removeExceptions = (str, EXCEPTIONS) => {
    EXCEPTIONS === null || EXCEPTIONS === void 0 ? void 0 : EXCEPTIONS.split("").forEach((char) => {
        str = str.replace(char, "");
    });
    return str;
};
// module.exports = generatePassword;


/***/ }),

/***/ "./node_modules/js-generate-password/dist/lib/process-options.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-generate-password/dist/lib/process-options.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processOption = void 0;
const processOption = (options) => {
    {
        options.length = typeof options.length == "undefined" ? 10 : options.length;
        options.lowercase =
            typeof options.lowercase == "undefined" ? true : options.lowercase;
        options.uppercase =
            typeof options.uppercase == "undefined" ? true : options.uppercase;
        options.numbers =
            typeof options.numbers == "undefined" ? true : options.numbers;
        options.symbols =
            typeof options.symbols == "undefined" ? false : options.symbols;
        if (options.lowercase) {
            options.minLengthLowercase =
                typeof options.minLengthLowercase == "undefined"
                    ? 1
                    : options.minLengthLowercase;
        }
        else {
            options.minLengthLowercase = 0;
        }
        if (options.uppercase) {
            options.minLengthUppercase =
                typeof options.minLengthUppercase == "undefined"
                    ? 1
                    : options.minLengthUppercase;
        }
        else {
            options.minLengthUppercase = 0;
        }
        if (options.numbers) {
            options.minLengthNumbers =
                typeof options.minLengthNumbers == "undefined"
                    ? 1
                    : options.minLengthNumbers;
        }
        else {
            options.minLengthNumbers = 0;
        }
        if (options.symbols) {
            options.minLengthSymbols =
                typeof options.minLengthSymbols == "undefined"
                    ? 1
                    : options.minLengthSymbols;
        }
        else {
            options.minLengthSymbols = 0;
        }
        options.exclude =
            typeof options.exclude == "undefined" ? "" : options.exclude;
    }
    return options;
};
exports.processOption = processOption;
// module.exports = processOption;


/***/ }),

/***/ "./node_modules/js-generate-password/dist/lib/shuffle-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/js-generate-password/dist/lib/shuffle-string.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shuffleString = void 0;
const shuffleString = (str) => {
    let arr = str.split("");
    let n = arr.length;
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr.join("");
};
exports.shuffleString = shuffleString;
// module.exports = shuffleString;


/***/ }),

/***/ "./src/meta/general/meta.scss":
/*!************************************!*\
  !*** ./src/meta/general/meta.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/meta/password-lists/meta.scss":
/*!*******************************************!*\
  !*** ./src/meta/password-lists/meta.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/settings/settings.scss":
/*!************************************!*\
  !*** ./src/settings/settings.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/statistics/statistics.scss":
/*!****************************************!*\
  !*** ./src/statistics/statistics.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-data-table-component/dist/index.cjs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-data-table-component/dist/index.cjs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var e=__webpack_require__(/*! react */ "react"),t=__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a,l=o(e),r=n(e),i=n(t);function s(e,t){return e[t]}function d(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function c(e=[],t,n="id"){const o=e.slice(),a=s(t,n);return a?o.splice(o.findIndex((e=>s(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function g(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function u(e,t){return Math.ceil(e/t)}function p(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(a||(a={}));const b=()=>null;function m(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{conditionalStyle:o,classNames:a.join(" ")}}function f(e,t=[],n="id"){const o=s(e,n);return o?t.some((e=>s(e,n)===o)):t.some((t=>t===e))}function h(e,t){return t?e.findIndex((e=>w(e.id,t))):-1}function w(e,t){return e==t}function x(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!f(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!f(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:c(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:d(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!f(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const C=t.css`
	pointer-events: none;
	opacity: 0.4;
`,y=i.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&C};
	${({theme:e})=>e.table.style};
`,v=t.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,R=i.default.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&v};
	${({theme:e})=>e.head.style};
`,S=i.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,E=(e,...n)=>t.css`
		@media screen and (max-width: ${599}px) {
			${t.css(e,...n)}
		}
	`,O=(e,...n)=>t.css`
		@media screen and (max-width: ${959}px) {
			${t.css(e,...n)}
		}
	`,$=(e,...n)=>t.css`
		@media screen and (max-width: ${1280}px) {
			${t.css(e,...n)}
		}
	`,P=e=>(n,...o)=>t.css`
			@media screen and (max-width: ${e}px) {
				${t.css(n,...o)}
			}
		`,k=i.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,D=i.default(k)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&t.css`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&E`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&O`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&$`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&P(e)`
    display: none;
  `};
`,H=t.css`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,j=i.default(D).attrs((e=>({style:e.style})))`
	${({$renderAsCell:e})=>!e&&H};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var F=l.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:g}){const{conditionalStyle:u,classNames:p}=m(n,t.conditionalCellStyles,["rdt_TableCell"]);return l.createElement(j,{id:e,"data-column-id":t.id,role:"cell",className:p,"data-tag":a,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:u,$isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:g},!t.cell&&l.createElement("div",{"data-tag":a},function(e,t,n,o){return t?n&&"function"==typeof n?n(e,o):t(e,o):null}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));const T="input";var I=l.memo((function({name:e,component:t=T,componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:r=!1,onClick:i=b}){const s=t,d=s!==T?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=l.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return l.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:r?b:i,name:e,"aria-label":e,checked:a,disabled:r},c,{onChange:b}))}));const M=i.default(k)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function A({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return l.createElement(M,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},l.createElement(I,{name:e,component:r,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const L=i.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function _({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:o,row:a,onToggled:r}){const i=t?n.expanded:n.collapsed;return l.createElement(L,{"aria-disabled":e,onClick:()=>r&&r(a),"data-testid":`expander-button-${o}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const z=i.default(k)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function N({row:e,expanded:t=!1,expandableIcon:n,id:o,onToggled:a,disabled:r=!1}){return l.createElement(z,{onClick:e=>e.stopPropagation(),$noPadding:!0},l.createElement(_,{id:o,row:e,expanded:t,expandableIcon:n,disabled:r,onToggled:a}))}const W=i.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var B=l.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const r=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return l.createElement(W,{className:r,$extendedRowStyle:o},l.createElement(t,Object.assign({data:e},n)))}));const G="allowRowEvents";var V,U,q;exports.Direction=void 0,(V=exports.Direction||(exports.Direction={})).LTR="ltr",V.RTL="rtl",V.AUTO="auto",exports.Alignment=void 0,(U=exports.Alignment||(exports.Alignment={})).LEFT="left",U.RIGHT="right",U.CENTER="center",exports.Media=void 0,(q=exports.Media||(exports.Media={})).SM="sm",q.MD="md",q.LG="lg";const Y=t.css`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,K=t.css`
	&:hover {
		cursor: pointer;
	}
`,J=i.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&Y};
	${({$pointerOnHover:e})=>e&&K};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function Q({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:o=!1,dense:a=!1,expandableIcon:r,expandableRows:i=!1,expandableRowsComponent:d,expandableRowsComponentProps:c,expandableRowsHideExpander:g,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:f=!1,id:h,expandableInheritConditionalStyles:x,keyField:C,onRowClicked:y=b,onRowDoubleClicked:v=b,onRowMouseEnter:R=b,onRowMouseLeave:S=b,onRowExpandToggled:E=b,onSelectedRow:O=b,pointerOnHover:$=!1,row:P,rowCount:k,rowIndex:D,selectableRowDisabled:H=null,selectableRows:j=!1,selectableRowsComponent:T,selectableRowsComponentProps:I,selectableRowsHighlight:M=!1,selectableRowsSingle:L=!1,selected:_,striped:z=!1,draggingColumnId:W,onDragStart:V,onDragOver:U,onDragEnd:q,onDragEnter:Y,onDragLeave:K}){const[Q,X]=l.useState(n);l.useEffect((()=>{X(n)}),[n]);const Z=l.useCallback((()=>{X(!Q),E(!Q,P)}),[Q,E,P]),ee=$||i&&(u||p),te=l.useCallback((e=>{e.target.getAttribute("data-tag")===G&&(y(P,e),!o&&i&&u&&Z())}),[o,u,i,Z,y,P]),ne=l.useCallback((e=>{e.target.getAttribute("data-tag")===G&&(v(P,e),!o&&i&&p&&Z())}),[o,p,i,Z,v,P]),oe=l.useCallback((e=>{R(P,e)}),[R,P]),ae=l.useCallback((e=>{S(P,e)}),[S,P]),le=s(P,C),{conditionalStyle:re,classNames:ie}=m(P,t,["rdt_TableRow"]),se=M&&_,de=x?re:{},ce=z&&D%2==0;return l.createElement(l.Fragment,null,l.createElement(J,{id:`row-${h}`,role:"row",$striped:ce,$highlightOnHover:f,$pointerOnHover:!o&&ee,$dense:a,onClick:te,onDoubleClick:ne,onMouseEnter:oe,onMouseLeave:ae,className:ie,$selected:se,$conditionalStyle:re},j&&l.createElement(A,{name:`select-row-${le}`,keyField:C,row:P,rowCount:k,selected:_,selectableRowsComponent:T,selectableRowsComponentProps:I,selectableRowDisabled:H,selectableRowsSingle:L,onSelectedRow:O}),i&&!g&&l.createElement(N,{id:le,expandableIcon:r,expanded:Q,row:P,onToggled:Z,disabled:o}),e.map((e=>e.omit?null:l.createElement(F,{id:`cell-${e.id}-${le}`,key:`cell-${e.id}-${le}`,dataTag:e.ignoreRowClick||e.button?null:G,column:e,row:P,rowIndex:D,isDragging:w(W,e.id),onDragStart:V,onDragOver:U,onDragEnd:q,onDragEnter:Y,onDragLeave:K})))),i&&Q&&l.createElement(B,{key:`expander-${le}`,data:P,extendedRowStyle:de,extendedClassNames:ie,ExpanderComponent:d,expanderComponentProps:c}))}const X=i.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,Z=({sortActive:e,sortDirection:t})=>r.default.createElement(X,{$sortActive:e,$sortDirection:t},"▲"),ee=i.default(D)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,te=t.css`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&t.css`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ne=i.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&te};
`,oe=i.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ae=l.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:u,onSort:p,onDragStart:b,onDragOver:m,onDragEnd:f,onDragEnter:h,onDragLeave:x}){l.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[C,y]=l.useState(!1),v=l.useRef(null);if(l.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[C]),e.omit)return null;const R=()=>{if(!e.sortable&&!e.selector)return;let t=r;w(o.id,e.id)&&(t=r===a.ASC?a.DESC:a.ASC),p({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||u})},S=e=>l.createElement(Z,{sortActive:e,sortDirection:r}),E=()=>l.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!e.sortable||!w(o.id,e.id)),$=!e.sortable||t,P=e.sortable&&!i&&!e.right,k=e.sortable&&!i&&e.right,D=e.sortable&&i&&!e.right,H=e.sortable&&i&&e.right;return l.createElement(ee,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:w(e.id,n),onDragStart:b,onDragOver:m,onDragEnd:f,onDragEnter:h,onDragLeave:x},e.name&&l.createElement(ne,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:$?void 0:R,onKeyPress:$?void 0:e=>{"Enter"===e.key&&R()},$sortActive:!$&&O,disabled:$},!$&&H&&E(),!$&&k&&S(O),"string"==typeof e.name?l.createElement(oe,{title:C?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!$&&D&&E(),!$&&P&&S(O)))}));const le=i.default(k)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function re({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!o,u=d?t.filter((e=>!d(e))):t,p=0===u.length,b=Math.min(t.length,u.length);return l.createElement(le,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},l.createElement(I,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:u,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:p}))}function ie(e=exports.Direction.AUTO){const t="object"==typeof window,[n,o]=l.useState(!1);return l.useEffect((()=>{if(t)if("auto"!==e)o("rtl"===e);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],a="rtl"===t.dir||"rtl"===n.dir;o(e&&a)}}),[e,t]),n}const se=i.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,de=i.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ce=i.default.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function ge({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const r=ie(a),i=o>0;return n?l.createElement(ce,{$visible:i},l.cloneElement(n,{selectedCount:o})):l.createElement(ce,{$visible:i,$rtl:r},l.createElement(se,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,r)),l.createElement(de,null,t))}const ue=i.default.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,pe=i.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,be=i.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,me=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:r,direction:i,showMenu:s=!0})=>l.createElement(ue,{className:"rdt_TableHeader",role:"heading","aria-level":1},l.createElement(pe,null,e),t&&l.createElement(be,null,t),s&&l.createElement(ge,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:r}));function fe(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;const he={left:"flex-start",right:"flex-end",center:"center"},we=i.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>he[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,xe=e=>{var{align:t="right",wrapContent:n=!0}=e,o=fe(e,["align","wrapContent"]);return l.createElement(we,Object.assign({align:t,$wrapContent:n},o))},Ce=i.default.div`
	display: flex;
	flex-direction: column;
`,ye=i.default.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:n})=>e&&t.css`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${n?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:n="100vh"})=>e&&t.css`
			max-height: ${n};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,ve=i.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Re=i.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Se=i.default(k)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Ee=i.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Oe=()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M7 10l5 5 5-5z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),$e=i.default.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Pe=i.default.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,ke=e=>{var{defaultValue:t,onChange:n}=e,o=fe(e,["defaultValue","onChange"]);return l.createElement(Pe,null,l.createElement($e,Object.assign({onChange:n,defaultValue:t},o)),l.createElement(Oe,null))},De={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return r.default.createElement("div",null,"To add an expander pass in a component instance via ",r.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:r.default.createElement((()=>r.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),r.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:r.default.createElement((()=>r.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),r.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:r.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:r.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:exports.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),r.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:exports.Direction.AUTO,onChangePage:b,onChangeRowsPerPage:b,onRowClicked:b,onRowDoubleClicked:b,onRowMouseEnter:b,onRowMouseLeave:b,onRowExpandToggled:b,onSelectedRowsChange:b,onSort:b,onColumnOrderChange:b},He={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},je=i.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Fe=i.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Te=i.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${E`
    width: 100%;
    justify-content: space-around;
  `};
`,Ie=i.default.span`
	flex-shrink: 1;
	user-select: none;
`,Me=i.default(Ie)`
	margin: 0 24px;
`,Ae=i.default(Ie)`
	margin: 0 4px;
`;var Le=l.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=De.direction,paginationRowsPerPageOptions:a=De.paginationRowsPerPageOptions,paginationIconLastPage:r=De.paginationIconLastPage,paginationIconFirstPage:i=De.paginationIconFirstPage,paginationIconNext:s=De.paginationIconNext,paginationIconPrevious:d=De.paginationIconPrevious,paginationComponentOptions:c=De.paginationComponentOptions,onChangeRowsPerPage:g=De.onChangeRowsPerPage,onChangePage:p=De.onChangePage}){const b=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=l.useState(t);return l.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),m=ie(o),f=b.width&&b.width>599,h=u(t,e),w=n*e,x=w-e+1,C=1===n,y=n===h,v=Object.assign(Object.assign({},He),c),R=n===h?`${x}-${t} ${v.rangeSeparatorText} ${t}`:`${x}-${w} ${v.rangeSeparatorText} ${t}`,S=l.useCallback((()=>p(n-1)),[n,p]),E=l.useCallback((()=>p(n+1)),[n,p]),O=l.useCallback((()=>p(1)),[p]),$=l.useCallback((()=>p(u(t,e))),[p,t,e]),P=l.useCallback((e=>g(Number(e.target.value),n)),[n,g]),k=a.map((e=>l.createElement("option",{key:e,value:e},e)));v.selectAllRowsItem&&k.push(l.createElement("option",{key:-1,value:t},v.selectAllRowsItemText));const D=l.createElement(ke,{onChange:P,defaultValue:e,"aria-label":v.rowsPerPageText},k);return l.createElement(je,{className:"rdt_Pagination"},!v.noRowsPerPage&&f&&l.createElement(l.Fragment,null,l.createElement(Ae,null,v.rowsPerPageText),D),f&&l.createElement(Me,null,R),l.createElement(Te,null,l.createElement(Fe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,$isRTL:m},i),l.createElement(Fe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,$isRTL:m},d),!v.noRowsPerPage&&!f&&D,l.createElement(Fe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":y,onClick:E,disabled:y,$isRTL:m},s),l.createElement(Fe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":y,onClick:$,disabled:y,$isRTL:m},r)))}));const _e=(e,t)=>{const n=l.useRef(!0);l.useEffect((()=>{n.current?n.current=!1:e()}),t)};function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ne=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===We}(e)}(e)};var We="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Be(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ye((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ge(e,t,n){return e.concat(t).map((function(e){return Be(e,n)}))}function Ve(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function Ue(e,t){try{return t in e}catch(e){return!1}}function qe(e,t,n){var o={};return n.isMergeableObject(e)&&Ve(e).forEach((function(t){o[t]=Be(e[t],n)})),Ve(t).forEach((function(a){(function(e,t){return Ue(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Ue(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ye;var n=t.customMerge(e);return"function"==typeof n?n:Ye}(a,n)(e[a],t[a],n):o[a]=Be(t[a],n))})),o}function Ye(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ge,n.isMergeableObject=n.isMergeableObject||Ne,n.cloneUnlessOtherwiseSpecified=Be;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):qe(e,t,n):Be(t,n)}Ye.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ye(e,n,t)}),{})};var Ke=ze(Ye);const Je={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Qe={default:Je,light:Je,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Xe(e,t,n,o){const[r,i]=l.useState((()=>g(e))),[s,d]=l.useState(""),c=l.useRef("");_e((()=>{i(g(e))}),[e]);const u=l.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(c.current=(null===(o=null===(n=r[h(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[r]),p=l.useCallback((e=>{var n;const{attributes:o}=e.target,a=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(a&&c.current&&a!==c.current){const e=h(r,c.current),n=h(r,a),o=[...r];o[e]=r[n],o[n]=r[e],i(o),t(o)}}),[t,r]),b=l.useCallback((e=>{e.preventDefault()}),[]),m=l.useCallback((e=>{e.preventDefault()}),[]),f=l.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),w=function(e=!1){return e?a.ASC:a.DESC}(o),x=l.useMemo((()=>r[h(r,null==n?void 0:n.toString())]||{}),[n,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:u,handleDragEnter:p,handleDragOver:b,handleDragLeave:m,handleDragEnd:f,defaultSortDirection:w,defaultSortColumn:x}}var Ze=l.memo((function(e){const{data:n=De.data,columns:o=De.columns,title:r=De.title,actions:i=De.actions,keyField:d=De.keyField,striped:c=De.striped,highlightOnHover:g=De.highlightOnHover,pointerOnHover:b=De.pointerOnHover,dense:m=De.dense,selectableRows:h=De.selectableRows,selectableRowsSingle:w=De.selectableRowsSingle,selectableRowsHighlight:C=De.selectableRowsHighlight,selectableRowsNoSelectAll:v=De.selectableRowsNoSelectAll,selectableRowsVisibleOnly:E=De.selectableRowsVisibleOnly,selectableRowSelected:O=De.selectableRowSelected,selectableRowDisabled:$=De.selectableRowDisabled,selectableRowsComponent:P=De.selectableRowsComponent,selectableRowsComponentProps:D=De.selectableRowsComponentProps,onRowExpandToggled:H=De.onRowExpandToggled,onSelectedRowsChange:j=De.onSelectedRowsChange,expandableIcon:F=De.expandableIcon,onChangeRowsPerPage:T=De.onChangeRowsPerPage,onChangePage:I=De.onChangePage,paginationServer:M=De.paginationServer,paginationServerOptions:A=De.paginationServerOptions,paginationTotalRows:L=De.paginationTotalRows,paginationDefaultPage:_=De.paginationDefaultPage,paginationResetDefaultPage:z=De.paginationResetDefaultPage,paginationPerPage:N=De.paginationPerPage,paginationRowsPerPageOptions:W=De.paginationRowsPerPageOptions,paginationIconLastPage:B=De.paginationIconLastPage,paginationIconFirstPage:G=De.paginationIconFirstPage,paginationIconNext:V=De.paginationIconNext,paginationIconPrevious:U=De.paginationIconPrevious,paginationComponent:q=De.paginationComponent,paginationComponentOptions:Y=De.paginationComponentOptions,responsive:K=De.responsive,progressPending:J=De.progressPending,progressComponent:X=De.progressComponent,persistTableHead:Z=De.persistTableHead,noDataComponent:ee=De.noDataComponent,disabled:te=De.disabled,noTableHead:ne=De.noTableHead,noHeader:oe=De.noHeader,fixedHeader:le=De.fixedHeader,fixedHeaderScrollHeight:ie=De.fixedHeaderScrollHeight,pagination:se=De.pagination,subHeader:de=De.subHeader,subHeaderAlign:ce=De.subHeaderAlign,subHeaderWrap:ge=De.subHeaderWrap,subHeaderComponent:ue=De.subHeaderComponent,noContextMenu:pe=De.noContextMenu,contextMessage:be=De.contextMessage,contextActions:fe=De.contextActions,contextComponent:he=De.contextComponent,expandableRows:we=De.expandableRows,onRowClicked:Oe=De.onRowClicked,onRowDoubleClicked:$e=De.onRowDoubleClicked,onRowMouseEnter:Pe=De.onRowMouseEnter,onRowMouseLeave:ke=De.onRowMouseLeave,sortIcon:He=De.sortIcon,onSort:je=De.onSort,sortFunction:Fe=De.sortFunction,sortServer:Te=De.sortServer,expandableRowsComponent:Ie=De.expandableRowsComponent,expandableRowsComponentProps:Me=De.expandableRowsComponentProps,expandableRowDisabled:Ae=De.expandableRowDisabled,expandableRowsHideExpander:ze=De.expandableRowsHideExpander,expandOnRowClicked:Ne=De.expandOnRowClicked,expandOnRowDoubleClicked:We=De.expandOnRowDoubleClicked,expandableRowExpanded:Be=De.expandableRowExpanded,expandableInheritConditionalStyles:Ge=De.expandableInheritConditionalStyles,defaultSortFieldId:Ve=De.defaultSortFieldId,defaultSortAsc:Ue=De.defaultSortAsc,clearSelectedRows:qe=De.clearSelectedRows,conditionalRowStyles:Ye=De.conditionalRowStyles,theme:Je=De.theme,customStyles:Ze=De.customStyles,direction:et=De.direction,onColumnOrderChange:tt=De.onColumnOrderChange,className:nt}=e,{tableColumns:ot,draggingColumnId:at,handleDragStart:lt,handleDragEnter:rt,handleDragOver:it,handleDragLeave:st,handleDragEnd:dt,defaultSortDirection:ct,defaultSortColumn:gt}=Xe(o,tt,Ve,Ue),[{rowsPerPage:ut,currentPage:pt,selectedRows:bt,allSelected:mt,selectedCount:ft,selectedColumn:ht,sortDirection:wt,toggleOnSelectedRowsChange:xt},Ct]=l.useReducer(x,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:gt,toggleOnSelectedRowsChange:!1,sortDirection:ct,currentPage:_,rowsPerPage:N,selectedRowsFlag:!1,contextMessage:De.contextMessage}),{persistSelectedOnSort:yt=!1,persistSelectedOnPageChange:vt=!1}=A,Rt=!(!M||!vt&&!yt),St=se&&!J&&n.length>0,Et=q||Le,Ot=l.useMemo((()=>((e={},t="default",n="default")=>{const o=Qe[t]?t:n;return Ke({table:{style:{color:(a=Qe[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(Ze,Je)),[Ze,Je]),$t=l.useMemo((()=>Object.assign({},"auto"!==et&&{dir:et})),[et]),Pt=l.useMemo((()=>{if(Te)return n;if((null==ht?void 0:ht.sortFunction)&&"function"==typeof ht.sortFunction){const e=ht.sortFunction,t=wt===a.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{const a=t(e),l=t(o);if("asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==ht?void 0:ht.selector,wt,Fe)}),[Te,ht,wt,n,Fe]),kt=l.useMemo((()=>{if(se&&!M){const e=pt*ut,t=e-ut;return Pt.slice(t,e)}return Pt}),[pt,se,M,ut,Pt]),Dt=l.useCallback((e=>{Ct(e)}),[]),Ht=l.useCallback((e=>{Ct(e)}),[]),jt=l.useCallback((e=>{Ct(e)}),[]),Ft=l.useCallback(((e,t)=>Oe(e,t)),[Oe]),Tt=l.useCallback(((e,t)=>$e(e,t)),[$e]),It=l.useCallback(((e,t)=>Pe(e,t)),[Pe]),Mt=l.useCallback(((e,t)=>ke(e,t)),[ke]),At=l.useCallback((e=>Ct({type:"CHANGE_PAGE",page:e,paginationServer:M,visibleOnly:E,persistSelectedOnPageChange:vt})),[M,vt,E]),Lt=l.useCallback((e=>{const t=u(L||kt.length,e),n=p(pt,t);M||At(n),Ct({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[pt,At,M,L,kt.length]);if(se&&!M&&Pt.length>0&&0===kt.length){const e=u(Pt.length,ut),t=p(pt,e);At(t)}_e((()=>{j({allSelected:mt,selectedCount:ft,selectedRows:bt.slice(0)})}),[xt]),_e((()=>{je(ht,wt,Pt.slice(0))}),[ht,wt]),_e((()=>{I(pt,L||Pt.length)}),[pt]),_e((()=>{T(ut,pt)}),[ut]),_e((()=>{At(_)}),[_,z]),_e((()=>{if(se&&M&&L>0){const e=u(L,ut),t=p(pt,e);pt!==t&&At(t)}}),[L]),l.useEffect((()=>{Ct({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:qe})}),[w,qe]),l.useEffect((()=>{if(!O)return;const e=Pt.filter((e=>O(e))),t=w?e.slice(0,1):e;Ct({type:"SELECT_MULTIPLE_ROWS",keyField:d,selectedRows:t,totalRows:Pt.length,mergeSelections:Rt})}),[n,O]);const _t=E?kt:Pt,zt=vt||w||v;return l.createElement(t.ThemeProvider,{theme:Ot},!oe&&(!!r||!!i)&&l.createElement(me,{title:r,actions:i,showMenu:!pe,selectedCount:ft,direction:et,contextActions:fe,contextComponent:he,contextMessage:be}),de&&l.createElement(xe,{align:ce,wrapContent:ge},ue),l.createElement(ye,Object.assign({$responsive:K,$fixedHeader:le,$fixedHeaderScrollHeight:ie,className:nt},$t),l.createElement(Re,null,J&&!Z&&l.createElement(ve,null,X),l.createElement(y,{disabled:te,className:"rdt_Table",role:"table"},!ne&&(!!Z||Pt.length>0&&!J)&&l.createElement(R,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:le},l.createElement(S,{className:"rdt_TableHeadRow",role:"row",$dense:m},h&&(zt?l.createElement(k,{style:{flex:"0 0 48px"}}):l.createElement(re,{allSelected:mt,selectedRows:bt,selectableRowsComponent:P,selectableRowsComponentProps:D,selectableRowDisabled:$,rowData:_t,keyField:d,mergeSelections:Rt,onSelectAllRows:Ht})),we&&!ze&&l.createElement(Se,null),ot.map((e=>l.createElement(ae,{key:e.id,column:e,selectedColumn:ht,disabled:J||0===Pt.length,pagination:se,paginationServer:M,persistSelectedOnSort:yt,selectableRowsVisibleOnly:E,sortDirection:wt,sortIcon:He,sortServer:Te,onSort:Dt,onDragStart:lt,onDragOver:it,onDragEnd:dt,onDragEnter:rt,onDragLeave:st,draggingColumnId:at}))))),!Pt.length&&!J&&l.createElement(Ee,null,ee),J&&Z&&l.createElement(ve,null,X),!J&&Pt.length>0&&l.createElement(Ce,{className:"rdt_TableBody",role:"rowgroup"},kt.map(((e,t)=>{const n=s(e,d),o=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(n)?t:n,a=f(e,bt,d),r=!!(we&&Be&&Be(e)),i=!!(we&&Ae&&Ae(e));return l.createElement(Q,{id:o,key:o,keyField:d,"data-row-id":o,columns:ot,row:e,rowCount:Pt.length,rowIndex:t,selectableRows:h,expandableRows:we,expandableIcon:F,highlightOnHover:g,pointerOnHover:b,dense:m,expandOnRowClicked:Ne,expandOnRowDoubleClicked:We,expandableRowsComponent:Ie,expandableRowsComponentProps:Me,expandableRowsHideExpander:ze,defaultExpanderDisabled:i,defaultExpanded:r,expandableInheritConditionalStyles:Ge,conditionalRowStyles:Ye,selected:a,selectableRowsHighlight:C,selectableRowsComponent:P,selectableRowsComponentProps:D,selectableRowDisabled:$,selectableRowsSingle:w,striped:c,onRowExpandToggled:H,onRowClicked:Ft,onRowDoubleClicked:Tt,onRowMouseEnter:It,onRowMouseLeave:Mt,onSelectedRow:jt,draggingColumnId:at,onDragStart:lt,onDragOver:it,onDragEnd:dt,onDragEnter:rt,onDragLeave:st})})))))),St&&l.createElement("div",null,l.createElement(Et,{onChangePage:At,onChangeRowsPerPage:Lt,rowCount:L||Pt.length,currentPage:pt,rowsPerPage:ut,direction:et,paginationRowsPerPageOptions:W,paginationIconLastPage:B,paginationIconFirstPage:G,paginationIconNext:V,paginationIconPrevious:U,paginationComponentOptions:Y})))}));exports.STOP_PROP_TAG=G,exports.createTheme=function(e="default",t,n="default"){return Qe[e]||(Qe[e]=Ke(Qe[n],t||{})),Qe[e]=Ke(Qe[e],t||{}),Qe[e]},exports["default"]=Ze,exports.defaultThemes=Qe;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStyleSheet: () => (/* binding */ vt),
/* harmony export */   StyleSheetConsumer: () => (/* binding */ Be),
/* harmony export */   StyleSheetContext: () => (/* binding */ $e),
/* harmony export */   StyleSheetManager: () => (/* binding */ Ye),
/* harmony export */   ThemeConsumer: () => (/* binding */ tt),
/* harmony export */   ThemeContext: () => (/* binding */ et),
/* harmony export */   ThemeProvider: () => (/* binding */ ot),
/* harmony export */   __PRIVATE__: () => (/* binding */ gt),
/* harmony export */   createGlobalStyle: () => (/* binding */ ft),
/* harmony export */   css: () => (/* binding */ lt),
/* harmony export */   "default": () => (/* binding */ dt),
/* harmony export */   isStyledComponent: () => (/* binding */ se),
/* harmony export */   keyframes: () => (/* binding */ mt),
/* harmony export */   styled: () => (/* binding */ dt),
/* harmony export */   useTheme: () => (/* binding */ nt),
/* harmony export */   version: () => (/* binding */ v),
/* harmony export */   withTheme: () => (/* binding */ yt)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/styled-components/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/styled-components/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.13",g="/*!sc*/\n",S="undefined"!=typeof window&&"HTMLElement"in window,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),b={},E=/invalid hook call/i,N=new Set,P=function(t,n){if(true){var o=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];E.test(t)?(a=!1,N.delete(s)):i.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),a&&!N.has(s)&&(console.warn(s),N.add(s))}catch(e){E.test(e.message)&&N.delete(s)}finally{console.error=i}}},_=Object.freeze([]),C=Object.freeze({});function I(e,t,n){return void 0===n&&(n=C),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(e){return e.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(e){return String.fromCharCode(e+(e>25?39:97))};function x(e){var t,n="";for(t=Math.abs(e);t>k;t=t/k|0)n=j(t%k)+n;return(j(t%k)+n).replace(T,"$1-$2")}var V,F=5381,M=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},z=function(e){return M(F,e)};function $(e){return x(z(e)>>>0)}function B(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function L(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var G="function"==typeof Symbol&&Symbol.for,Y=G?Symbol.for("react.memo"):60115,W=G?Symbol.for("react.forward_ref"):60112,q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[W]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y]=U,V);function X(e){return("type"in(t=e)&&t.type.$$typeof)===Y?U:"$$typeof"in e?J[e.$$typeof]:q;var t}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(e,t,n){if("string"!=typeof t){if(ne){var o=te(t);o&&o!==ne&&oe(e,o,n)}var r=K(t);Q&&(r=r.concat(Q(t)));for(var s=X(e),i=X(t),a=0;a<r.length;++a){var c=r[a];if(!(c in H||n&&n[c]||i&&c in i||s&&c in s)){var l=ee(t,c);try{Z(e,c,l)}catch(e){}}}}return e}function re(e){return"function"==typeof e}function se(e){return"object"==typeof e&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ae(e,t){if(0===e.length)return"";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function ce(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function le(e,t,n){if(void 0===n&&(n=!1),!n&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=le(e[o],t[o]);else if(ce(t))for(var o in t)e[o]=le(e[o],t[o]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t})}var pe= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:0;function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function he(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return false?0:new Error(de.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([pe[t]],n,!1)).trim())}var fe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat(g);return t},e}(),me=1<<30,ye=new Map,ve=new Map,ge=1,Se=function(e){if(ye.has(e))return ye.get(e);for(;ve.has(ge);)ge++;var t=ge++;if( true&&((0|t)<0||t>me))throw he(16,"".concat(t));return ye.set(e,t),ve.set(t,e),t},we=function(e,t){ge=t+1,ye.set(e,t),ve.set(t,e)},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o)},Pe=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(g),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(Ee);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(we(u,l),Ne(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},_e=function(e){for(var t=document.querySelectorAll(be),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(f)!==m&&(Pe(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Ce(){return true?__webpack_require__.nc:0}var Ie=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,m),o.setAttribute(y,v);var i=Ce();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},Ae=function(){function e(e){this.element=Ie(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw he(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Oe=function(){function e(e){this.element=Ie(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),De=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Re=S,Te={isServer:!S,useCSSOMInjection:!w},ke=function(){function e(e,n,o){void 0===e&&(e=C),void 0===n&&(n={});var r=this;this.options=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},Te),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&S&&Re&&(Re=!1,_e(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return ve.get(e)}(n);if(void 0===r)return"continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return"continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(g)},s=0;s<n;s++)r(s);return o}(r)})}return e.registerId=function(e){return Se(e)},e.prototype.rehydrate=function(){!this.server&&S&&_e(this)},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=!0),new e((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new De(n):t?new Ae(n):new Oe(n)}(this.options),new fe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ve(e.children,t)),e})}function Fe(e){var t,n,o,r=void 0===e?C:e,s=r.options,i=void 0===s?C:s,a=r.plugins,c=void 0===a?_:a,l=function(e,o,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(je,n).replace(o,l))}),i.prefix&&u.push(stylis__WEBPACK_IMPORTED_MODULE_6__.prefixer),u.push(stylis__WEBPACK_IMPORTED_MODULE_7__.stringify);var p=function(e,r,s,a){void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(xe,""),l=stylis__WEBPACK_IMPORTED_MODULE_8__.compile(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=Ve(l,i.namespace));var p=[];return stylis__WEBPACK_IMPORTED_MODULE_7__.serialize(l,stylis__WEBPACK_IMPORTED_MODULE_6__.middleware(u.concat(stylis__WEBPACK_IMPORTED_MODULE_6__.rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||he(15),M(e,t.name)},F).toString():"",p}var Me=new ke,ze=Fe(),$e=react__WEBPACK_IMPORTED_MODULE_1___default().createContext({shouldForwardProp:void 0,styleSheet:Me,stylis:ze}),Be=$e.Consumer,Le=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0);function Ge(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)($e)}function Ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],r=t[1],c=Ge().styleSheet,l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,c]),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return Fe({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:l,stylis:u}},[e.shouldForwardProp,l,u]);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement($e.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Le.Provider,{value:u},e.children))}var We=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ze);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw he(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=ze),this.name+e.hash},e}(),qe=function(e){return e>="A"&&e<="Z"};function He(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;qe(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Ue=function(e){return null==e||!1===e||""===e},Je=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Ue(i)&&(Array.isArray(i)&&i.isCss||re(i)?r.push("".concat(He(s),":"),i,";"):ce(i)?r.push.apply(r,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)(["".concat(s," {")],Je(i),!1),["}"],!1)):r.push("".concat(He(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"]||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Xe(e,t,n,o){if(Ue(e))return[];if(se(e))return[".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var r=e(t);return false||"object"!=typeof r||Array.isArray(r)||r instanceof We||ce(r)||null===r||console.error("".concat(B(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Xe(r,t,n,o)}var s;return e instanceof We?n?(e.inject(n,o),[e.getName(o)]):[e]:ce(e)?Je(e):Array.isArray(e)?Array.prototype.concat.apply(_,e.map(function(e){return Xe(e,t,n,o)})):[e.toString()]}function Ze(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!se(n))return!1}return!0}var Ke=z(v),Qe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=M(Ke,t),this.baseStyle=n,ke.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else{var r=ae(Xe(this.rules,e,t,n)),s=x(M(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}o=ie(o,s),this.staticRulesId=s}else{for(var a=M(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u, true&&(a=M(a,u));else if(u){var p=ae(Xe(u,e,t,n));a=M(a,p+l),c+=p}}if(c){var d=x(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=ie(o,d)}}return o},e}(),et=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0),tt=et.Consumer;function nt(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(et);if(!e)throw he(18);return e}function ot(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),r=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return function(e,n){if(!e)throw he(14);if(re(e)){var o=e(n);if( true&&(null===o||Array.isArray(o)||"object"!=typeof o))throw he(7);return o}if(Array.isArray(e)||"object"!=typeof e)throw he(8);return n?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),e):e}(e.theme,n)},[e.theme,n]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(et.Provider,{value:r},e.children):null}var rt={},st=new Set;function it(e,r,s){var i=se(e),a=e,c=!L(e),p=r.attrs,d=void 0===p?_:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":R(e);rt[n]=(rt[n]||0)+1;var o="".concat(n,"-").concat($(v+n+rt[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return L(e)?"styled.".concat(e):"Styled(".concat(B(e),")")}(e):m,g=r.displayName&&r.componentId?"".concat(R(r.displayName),"-").concat(r.componentId):r.componentId||f,S=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,w=r.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(r.shouldForwardProp){var E=r.shouldForwardProp;w=function(e,t){return b(e,t)&&E(e,t)}}else w=b}var N=new Qe(s,g,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),m=Ge(),y=e.shouldForwardProp||m.shouldForwardProp; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(d);var v=I(r,f,c)||C,g=function(e,n,o){for(var r,s=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=re(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?ie(s[c],a[c]):"style"===c?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},s[c]),a[c]):a[c]}return n.className&&(s.className=ie(s.className,n.className)),s}(i,r,v),S=g.as||h,w={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?w.as=g.forwardedAs:y&&!y(b,S)||(w[b]=g[b],y||"development"!=="development"||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"])(b)||st.has(b)||!A.has(S)||(st.add(b),console.warn('styled-components: it looks like an unknown prop "'.concat(b,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var E=function(e,t){var n=Ge(),o=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(o),o}(a,g); true&&e.warnTooManyClasses&&e.warnTooManyClasses(E);var N=ie(p,d);return E&&(N+=" "+E),g.className&&(N+=" "+g.className),w[L(S)&&!A.has(S)?"class":"className"]=N,w.ref=s,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(S,w)}(D,e,r)}O.displayName=y;var D=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O);return D.attrs=S,D.componentStyle=N,D.displayName=y,D.shouldForwardProp=w,D.foldedComponentIds=i?ie(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=g,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)le(e,r[o],!0);return e}({},a.defaultProps,e):e}}), true&&(P(y,g),D.warnTooManyClasses=function(e,t){var n={},o=!1;return function(r){if(!o&&(n[r]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=!0,n={}}}}(y,g)),ue(D,function(){return".".concat(D.styledComponentId)}),c&&oe(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function at(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var ct=function(e){return Object.assign(e,{isCss:!0})};function lt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(re(t)||ce(t))return ct(Xe(at(_,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!0))));var r=t;return 0===n.length&&1===r.length&&"string"==typeof r[0]?Xe(r):ct(Xe(at(r,n)))}function ut(n,o,r){if(void 0===r&&(r=C),!o)throw he(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,lt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],s,!1)))};return s.attrs=function(e){return ut(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ut(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),e))},s}var pt=function(e){return ut(it,e)},dt=pt;A.forEach(function(e){dt[e]=pt(e)});var ht=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ze(e),ke.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,o){var r=o(ae(Xe(this.rules,t,n,o)),""),s=this.componentId+e;n.insertRules(s,s,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,o){e>2&&ke.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o)},e}();function ft(n){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var i=lt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([n],r,!1)),a="sc-global-".concat($(JSON.stringify(i))),c=new ht(i,a); true&&P(a);var l=function(e){var t=Ge(),n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),r=react__WEBPACK_IMPORTED_MODULE_1___default().useRef(t.styleSheet.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component ".concat(a," was given child JSX. createGlobalStyle does not render children.")), true&&i.some(function(e){return"string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.styleSheet.server&&u(r,e,t.styleSheet,n,t.stylis),react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(function(){if(!t.styleSheet.server)return u(r,e,t.styleSheet,n,t.stylis),function(){return c.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function u(e,n,o,r,s){if(c.isStatic)c.renderStyles(e,b,o,s);else{var i=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{theme:I(n,r,l.defaultProps)});c.renderStyles(e,i,o,s)}}return react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function mt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o]; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var r=ae(lt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))),s=$(r);return new We(s,r)}function yt(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function(n,r){var s=I(n,react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),e.defaultProps);return true&&void 0===s&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(B(e),'"')),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n,{theme:s,ref:r}))});return n.displayName="WithTheme(".concat(B(e),")"),oe(n,e)}var vt=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ce(),o=ae([n&&'nonce="'.concat(n,'"'),"".concat(f,'="true"'),"".concat(y,'="').concat(v,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw he(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw he(2);var r=e.instance.toString();if(!r)return[];var s=((n={})[f]="",n[y]=v,n.dangerouslySetInnerHTML={__html:r},n),i=Ce();return i&&(s.nonce=i),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},s,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ke({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw he(2);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ye,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw he(3)},e}(),gt={StyleSheet:ke,mainSheet:Me}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var St="__sc-".concat(f,"__"); true&&"undefined"!=typeof window&&(window[St]||(window[St]=0),1===window[St]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[St]+=1);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/styled-components/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitlessKeys)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Enum.js":
/*!************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Enum.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SCOPE: () => (/* binding */ SCOPE),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'
var SCOPE = '@scope'


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Middleware.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Middleware.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/styled-components/node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(children = element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
								// :placeholder
								case '::placeholder':
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Parser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Parser.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f', (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(index ? points[index - 1] : 0)) != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent, declarations), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length, siblings)
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Prefixer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Prefixer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span', 0) ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span', 0) ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch', 0) ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Serializer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET: if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(element.value = element.props.join(','))) return ''
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lift: () => (/* binding */ lift),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(root, root.siblings)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Utility.js":
/*!***************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Utility.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/tslib/tslib.es6.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/tslib/tslib.es6.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/Settings */ "./src/settings/Settings.js");
/* harmony import */ var _statistics_Statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics/Statistics */ "./src/statistics/Statistics.js");
/* harmony import */ var _meta_general_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta/general/Meta */ "./src/meta/general/Meta.js");
/* harmony import */ var _meta_password_lists_PasswordListMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta/password-lists/PasswordListMeta */ "./src/meta/password-lists/PasswordListMeta.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// eslint-disable-next-line import/no-extraneous-dependencies






if (options.screen === 'meta') {
  let meta = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('passster-metabox'));
  meta.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_meta_general_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
} else if (options.screen === 'password-lists') {
  let lists_meta = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('password-lists-metabox'));
  lists_meta.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_meta_password_lists_PasswordListMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
} else if (options.screen === 'passster-statistics') {
  let lists_meta = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('passster-statistics'));
  lists_meta.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_statistics_Statistics__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
} else if (options.screen === 'passster-settings') {
  let settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('passster-settings'));
  settings.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_settings_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map