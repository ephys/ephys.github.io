(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Bp6":function(e,t,n){e.exports={footer:"_1phFi",button:"_34029",contactInfo:"_1pANJ",socialLinks:"_342pw",sourceCode:"teXDp"}},"6Hpx":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),c=n("bZuh"),u=n.n(c);function s(e){var t,n=null!==(t=e.component)&&void 0!==t?t:"div";return a.a.createElement(n,Object.assign({},e,{className:i()(u.a.container,e.className)}))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},B7F5:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,u=void 0===o?24:o,s=c(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),a.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),a.a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),a.a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),a.a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),a.a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),a.a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),a.a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),a.a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))}));u.displayName="Sun";var s=u;function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=f(e,["color","size"]);return a.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}));p.displayName="Moon";var d=p,h=n("hwdJ"),m=n.n(h),y=new WeakMap;function v(e){return void 0===e&&(e=new Storage),function(t,n){var a=function(e){if(y.has(e))return y.get(e);var t;try{t=new EventTarget}catch(n){t=document.createElement("div")}return y.set(e,t),t}(e),o=Object(r.useState)((function(){var e=localStorage.getItem(t);if(null==e)return n;try{return JSON.parse(e)}catch(r){return console.error("use-local-storage: invalid stored value format, resetting to default"),console.error(r),n}})),i=o[0],c=o[1],u=Object(r.useRef)(i);u.current=i;var s=Object(r.useCallback)((function(e){"function"==typeof e&&(e=e(u.current)),u.current!==e&&(u.current=e,void 0===e?(localStorage.removeItem(t),c(n)):(c(e),localStorage.setItem(t,JSON.stringify(e))),a.dispatchEvent(new CustomEvent("uls:storage:"+t,{detail:e})))}),[a,t,n]);return Object(r.useEffect)((function(){function n(n){if(n.key===t&&n.storageArea===e)if(null!==n.newValue)try{s(JSON.parse(n.newValue))}catch(r){}else s(void 0)}function r(e){s(e.detail)}return a.addEventListener("uls:storage:"+t,r),window.addEventListener("storage",n),function(){a.removeEventListener("uls:storage:"+t,r),window.removeEventListener("storage",n)}}),[a,t,s]),[i,s]}}function b(e,t){return Object(r.useState)(t)}var g="undefined"==typeof localStorage?b:v(localStorage);"undefined"==typeof sessionStorage||v(sessionStorage);t.a=function(e){var t=g("prefers-dark-theme",!function(e){if("undefined"==typeof window||!window.matchMedia)return!1;var t=a.a.useState((function(){return window.matchMedia(e).matches})),n=t[0],r=t[1];return a.a.useEffect((function(){var t=function(e){r(e.matches)},n=window.matchMedia(e);return n.addListener(t),function(){n.removeListener(t)}}),[e]),n}("prefers-color-scheme: light")),n=t[0],r=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("html",{className:n?"dark":"light",lang:"en"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Work+Sans:400,700|Space+Mono:400,700"})),e.contentSectionId&&a.a.createElement("a",{href:"#"+e.contentSectionId,tabIndex:1,className:m.a.jumpToContent},"Skip to content"),a.a.createElement("button",{onClick:function(){return r((function(e){return!e}))},className:m.a.darkModeToggle,title:n?"Use Light mode":"Use Dark mode"},n?a.a.createElement(s,null):a.a.createElement(d,null)),a.a.createElement("main",null,e.children))}},H8eV:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,u=Object(i.useStaticQuery)("63159454").site,s=t||u.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c||u.siteMetadata.title,titleTemplate:null==c?null:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},Rxf4:function(e,t,n){e.exports={md:"_2Q7UI",h2:"wo1uz",red:"_1aHua",transparent:"_20JLR",link:"_3ZVs8"}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Zex6:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n("zLVn"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=n("TSYQ"),u=n.n(c),s=n("Rxf4"),l=n.n(s);function f(e){return o.a.createElement("div",{className:u()(l.a.md,e.className),dangerouslySetInnerHTML:{__html:e.html}})}function p(e){var t=e.red,n=e.transparent,a=Object(r.a)(e,["red","transparent"]);return o.a.createElement("h2",Object.assign({},a,{className:u()(l.a.h2,t&&l.a.red,n&&l.a.transparent)}))}function d(e){return o.a.createElement(i.Link,Object.assign({},e,{className:u()(l.a.link,e.className)}))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],i[s[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},bZuh:function(e,t,n){e.exports={container:"_3wAek"}},hwdJ:function(e,t,n){e.exports={jumpToContent:"_3uXkL",darkModeToggle:"_2GWKr"}},qhky:function(e,t,n){"use strict";(function(e){var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("YVoz"),y=n.n(m),v="bodyAttributes",b="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",O="http-equiv",S="innerHTML",A="itemprop",x="name",j="property",k="rel",L="src",M="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",_="encodeSpecialCharacters",R="onChangeClientState",H="titleTemplate",B=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,w.TITLE),n=X(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,P);return t||r||void 0},J=function(e){return X(e,R)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==S&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,a),ce(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[h.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===S||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(b,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,u,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:Q([E,M],e),bodyAttributes:K(v,e),defer:X(e,N),encode:X(e,_),htmlAttributes:K(b,e),linkTags:G(w.LINK,[k,E],e),metaTags:G(w.META,[x,C,O,j,A],e),noscriptTags:G(w.NOSCRIPT,[S],e),onChangeClientState:J(e),scriptTags:G(w.SCRIPT,[L,S],e),styleTags:G(w.STYLE,[T],e),title:W(e),titleAttributes:K(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),me=(a=he,i=o=function(e){function t(){return Z(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return D({},a,((t={})[r.type]=i,t.titleAttributes=D({},o),t));case w.BODY:return D({},a,{bodyAttributes:D({},o)});case w.HTML:return D({},a,{htmlAttributes:D({},o)})}return D({},a,((n={})[r.type]=D({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(a,r)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind,t.a=me}).call(this,n("yLpj"))},rXR3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("Zex6"),i=n("6Hpx"),c=n("1Bp6"),u=n.n(c);function s(){return a.a.createElement(i.a,null,a.a.createElement("footer",{className:u.a.footer},a.a.createElement(o.a,{transparent:!0},"Let's get in touch?"),a.a.createElement("div",{className:u.a.contactInfo},a.a.createElement("a",{target:"_blank",href:"mailto:hello@guylian.me",className:u.a.button},a.a.createElement("span",null,"hello@guylian.me")),a.a.createElement("div",{className:u.a.socialLinks},a.a.createElement("a",{href:"https://github.com/ephys",title:"My GitHub"},a.a.createElement("svg",{width:"70",height:"68",viewBox:"0 0 70 68",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M23.2708 54.7432C23.2708 55.0237 22.9482 55.2481 22.5414 55.2481C22.0785 55.2902 21.7559 55.0658 21.7559 54.7432C21.7559 54.4626 22.0785 54.2382 22.4853 54.2382C22.9061 54.1961 23.2708 54.4205 23.2708 54.7432ZM18.9084 54.1119C18.8102 54.3925 19.0907 54.7151 19.5115 54.7993C19.8762 54.9395 20.2971 54.7993 20.3812 54.5187C20.4654 54.2382 20.1989 53.9156 19.7781 53.7893C19.4134 53.6911 19.0066 53.8314 18.9084 54.1119ZM25.1083 53.8735C24.7015 53.9717 24.421 54.2382 24.4631 54.5608C24.5051 54.8414 24.8699 55.0237 25.2907 54.9255C25.6974 54.8273 25.978 54.5608 25.9359 54.2803C25.8938 54.0138 25.5151 53.8314 25.1083 53.8735ZM34.3381 0.12207C14.8826 0.12207 0 14.8925 0 34.3479C0 49.9039 9.79084 63.2155 23.7757 67.9005C25.5712 68.2231 26.2024 67.115 26.2024 66.2032C26.2024 65.3335 26.1603 60.5363 26.1603 57.5906C26.1603 57.5906 16.3414 59.6947 14.2795 53.4106C14.2795 53.4106 12.6804 49.3287 10.38 48.2767C10.38 48.2767 7.16779 46.0745 10.6044 46.1166C10.6044 46.1166 14.0971 46.3971 16.0188 49.7355C19.0907 55.1499 24.2386 53.593 26.2445 52.6672C26.5671 50.4229 27.4789 48.8659 28.4888 47.9401C20.6477 47.0704 12.7365 45.9342 12.7365 32.4403C12.7365 28.5828 13.8026 26.6471 16.0469 24.1784C15.6822 23.2666 14.4899 19.5074 16.4116 14.654C19.3432 13.7423 26.0902 18.4413 26.0902 18.4413C28.8956 17.6558 31.9114 17.249 34.8991 17.249C37.8869 17.249 40.9027 17.6558 43.7081 18.4413C43.7081 18.4413 50.4551 13.7282 53.3867 14.654C55.3084 19.5214 54.1161 23.2666 53.7514 24.1784C55.9957 26.6611 57.3704 28.5969 57.3704 32.4403C57.3704 45.9763 49.1085 47.0564 41.2674 47.9401C42.5579 49.0482 43.652 51.1523 43.652 54.4486C43.652 59.1757 43.6099 65.0249 43.6099 66.1752C43.6099 67.0869 44.2551 68.195 46.0366 67.8724C60.0636 63.2155 69.5739 49.9039 69.5739 34.3479C69.5739 14.8925 53.7935 0.12207 34.3381 0.12207ZM13.6342 48.5012C13.4519 48.6414 13.494 48.964 13.7324 49.2306C13.9569 49.455 14.2795 49.5532 14.4618 49.3708C14.6442 49.2306 14.6021 48.9079 14.3636 48.6414C14.1392 48.417 13.8166 48.3188 13.6342 48.5012ZM12.1193 47.365C12.0211 47.5473 12.1614 47.7718 12.4419 47.912C12.6664 48.0523 12.9469 48.0102 13.0451 47.8138C13.1433 47.6315 13.003 47.4071 12.7225 47.2668C12.4419 47.1826 12.2175 47.2247 12.1193 47.365ZM16.6641 52.3586C16.4396 52.5409 16.5238 52.9617 16.8464 53.2283C17.169 53.5509 17.5758 53.593 17.7582 53.3685C17.9405 53.1862 17.8564 52.7654 17.5758 52.4988C17.2672 52.1762 16.8464 52.1341 16.6641 52.3586ZM15.065 50.2966C14.8406 50.4369 14.8406 50.8016 15.065 51.1242C15.2894 51.4468 15.6681 51.5871 15.8505 51.4468C16.0749 51.2645 16.0749 50.8998 15.8505 50.5772C15.6541 50.2545 15.2894 50.1143 15.065 50.2966Z",fill:"#2B2782"})),a.a.createElement("span",null,"ephys")),a.a.createElement("a",{href:"https://twitter.com/ephys_",title:"My Twitter"},a.a.createElement("svg",{width:"72",height:"60",viewBox:"0 0 72 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M64.4358 15.2814C64.4814 15.9193 64.4814 16.5574 64.4814 17.1953C64.4814 36.6536 49.6713 59.074 22.6027 59.074C14.2633 59.074 6.51652 56.6587 0 52.4665C1.18486 52.6031 2.32399 52.6487 3.55444 52.6487C10.4354 52.6487 16.7697 50.3247 21.828 46.3601C15.357 46.2234 9.93419 41.9854 8.0658 36.1524C8.97727 36.289 9.88861 36.3802 10.8457 36.3802C12.1672 36.3802 13.4888 36.1978 14.7191 35.879C7.97476 34.5118 2.91635 28.5878 2.91635 21.4333V21.2511C4.87578 22.3448 7.15447 23.0283 9.56949 23.1194C5.6049 20.4763 3.00753 15.9649 3.00753 10.861C3.00753 8.12689 3.73651 5.62055 5.01254 3.43318C12.2582 12.3649 23.1494 18.1977 35.362 18.8358C35.1342 17.7421 34.9975 16.603 34.9975 15.4637C34.9975 7.35218 41.5596 0.744629 49.7166 0.744629C53.9545 0.744629 57.7824 2.52185 60.4711 5.39275C63.7976 4.75481 66.9874 3.52436 69.8129 1.83831C68.7191 5.25613 66.3951 8.12703 63.342 9.9497C66.304 9.63087 69.1749 8.81043 71.8179 7.6713C69.8132 10.5876 67.3067 13.185 64.4358 15.2814Z",fill:"#2B2782"})),a.a.createElement("span",null,"@ephys_")),a.a.createElement("a",{href:"",title:"My LinkedIn"},a.a.createElement("svg",{width:"64",height:"63",viewBox:"0 0 64 63",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M14.4583 62.84H1.43003V20.8853H14.4583V62.84ZM7.93715 15.1623C3.77113 15.1623 0.392029 11.7116 0.392029 7.5456C0.392029 5.54451 1.18696 3.62538 2.60194 2.2104C4.01693 0.795418 5.93606 0.000488281 7.93715 0.000488281C9.93824 0.000488281 11.8574 0.795418 13.2723 2.2104C14.6873 3.62538 15.4823 5.54451 15.4823 7.5456C15.4823 11.7116 12.1018 15.1623 7.93715 15.1623ZM63.2189 62.84H50.2187V42.4167C50.2187 37.5493 50.1205 31.3073 43.4451 31.3073C36.6714 31.3073 35.6334 36.5955 35.6334 42.066V62.84H22.6192V20.8853H35.1144V26.6083H35.2968C37.0361 23.3119 41.2849 19.8332 47.6237 19.8332C60.8091 19.8332 63.2329 28.5159 63.2329 39.7936V62.84H63.2189Z",fill:"#2B2782"})),a.a.createElement("span",null,"Guylian Cox")))),a.a.createElement("p",{className:u.a.sourceCode},a.a.createElement(o.b,{to:"https://github.com/ephys/ephys.github.io",target:"_blank"},"Check out the source code of this website"))))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-116b5e83d17246ba41c1.js.map