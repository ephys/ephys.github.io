!function(e){var t={};function r(x){if(t[x])return t[x].exports;var l=t[x]={i:x,l:!1,exports:{}};return e[x].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,x){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:x})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){document.addEventListener("scroll",e=>{const t=window.innerHeight,r=(t-Math.min(document.scrollingElement.scrollTop,t))/t;document.querySelector(".welcome").style.opacity=r*r*r,document.querySelector(".welcome").style.minHeight=`${100*r}vh`,document.querySelector(".welcome").style.top=`-${(100-100*r)/5}vh`},{passive:!0});const r=document.querySelector(".welcome h1"),x=r.textContent,l=["_","\\","/","#","@","$","%","&","#","x"];function o(){return l[h(0,l.length-1)]}let p=0;function i(){var e,t;r.textContent=o()+o(),p++<6?setTimeout(i,160*(e=.3,t=1,Math.random()*(t-e)+e)):(setTimeout(u,1500*Math.random()/x.length),setTimeout(c,1200))}const f=x.length;let d=0;function u(){const e=(d-(t=0))/(f-1-t)*(.75-(l=.2))+l;var t,l;if(Math.random()<e?r.textContent=x.substr(0,d-1)+o()+o():(d+=1,r.textContent=x.substr(0,d)),d<x.length){const e=1e3*Math.random()/f;setTimeout(u,e)}else document.querySelector(".main").classList.add("visible"),setTimeout(()=>{document.querySelector(".welcome").classList.add("phase-2"),a(),n=1},400)}function a(){(function(e){const{keyframes:t,...r}=w[h(0,w.length-1)],x=e.animate(t,r);return new Promise(e=>{x.addEventListener("finish",()=>{e()})})})(r).then(()=>{setTimeout(a,3500*Math.random())})}r.style.opacity="0",document.fonts.ready.then(()=>{const e=[];for(const t of document.fonts.values())"Space Mono"===t.family&&e.push(t.loaded);Promise.race(e).then(()=>{const e=r.clientWidth,t=document.body.clientWidth-20;if(e>t){const x=128*(t/e);r.style.fontSize=x+"px"}r.textContent="",r.style.opacity="",setTimeout(i,1400*Math.random()/x.length)})});let n=0;const c=()=>{const e=h(0,d-1);r.textContent=m(r.textContent,e,o()),setTimeout(()=>{r.textContent=m(r.textContent,e,x.charAt(e))},500*Math.random()),setTimeout(c,Math.random()*(0===n?1e3:2500))};function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function m(e,t,r){return e.substr(0,t)+r+e.substr(t+r.length)}const w=[{keyframes:[{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)",offset:0},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)",offset:.2},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)",offset:.25},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)",offset:.5},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)",offset:.55},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)",offset:.75},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0px)",offset:.8},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0px)",offset:1},{textShadow:"none",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 7px 0 #0c33f5, -0.8px 0 0 lime"},{textShadow:"1.8px -5px 0 #0c33f5, -0.8px 0 0 lime"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"none",filter:"blur(0)"}],duration:100},{keyframes:[{textShadow:"45px 0 0 #0c33f5, -45px 0 0 lime",filter:"blur(0)"},{textShadow:"0 0 0 #0c33f5, 0 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px -10px 0 red, 3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 5px 0 red, 3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"30px 0 0 red, -30px 0 0 lime",filter:"blur(0)"},{textShadow:"0 0 0 red, 0 0 0 lime",filter:"blur(0)"}],duration:1e3},{keyframes:[{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"50px 0 0 red, -50px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"0 0 0 red, 0 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"3px 0 0 red, -3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"1px 0 0 red, -1px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0.5px)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 red, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"60px 0 0 lime, -60px 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"0 0 0 lime, 0 0 0 #0c33f5",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"0.8px 0 0 #0c33f5, -0.8px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"},{textShadow:"-3px 0 0 #0c33f5, 3px 0 0 lime",filter:"blur(0)"}],duration:1500}]}]);