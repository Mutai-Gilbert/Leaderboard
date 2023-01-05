"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hero {\n  display: flex;\n  flex-direction: row;\n}\n\n.title {\n  text-align: left;\n  margin: 15px;\n}\n\n.body {\n  display: flex;\n  gap: 10%;\n  width: 80%;\n  align-self: center;\n  justify-self: center;\n}\n\n.recent {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.scores {\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n  width: 45%;\n  background-color: rgba(255, 255, 255, 0.45);\n  backdrop-filter: blur(15px);\n  padding: 10px;\n}\n\n.score-board {\n  border: 2px solid black;\n  padding: 5px;\n  margin-top: 15px;\n}\n\n.refresh-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.45);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(15px);\n  width: 80px;\n}\n\n.container {\n  border: 3px black solid;\n  height: 35vh;\n}\n\n.adding-score {\n  display: flex;\n  flex-direction: column;\n  gap: 5vh;\n  width: 45%;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background-color: rgba(255, 255, 255, 0.45);\n  backdrop-filter: blur(15px);\n  padding: 10px;\n  float: right;\n}\n\n.name-score {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.submit-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  width: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.45);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(15px);\n}\n\np:nth-of-type(even) {\n  background-color: rgb(233, 231, 235);\n}\n",""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var b=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:b,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},340:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),c=t.n(a),i=t(569),s=t.n(i),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),b=t.n(f),g=t(426),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const m=document.querySelector(".refresh-button"),x=document.querySelector("form"),v=async()=>{(n=>{const e=document.querySelector(".score-board");e.innerHTML="",n.result.forEach((n=>{const t=document.createElement("p");t.innerHTML=`${n.user}: ${n.score}`,e.appendChild(t)}))})(await(async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rz215bgYBb0lSnJ7gUWT/scores/");return await n.json()})())};x.addEventListener("submit",(async n=>{n.preventDefault();const e=document.querySelector("#name"),t=document.querySelector("#score"),r={user:e.value,score:t.value};e.value="",t.value="",await(async n=>{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rz215bgYBb0lSnJ7gUWT/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await e.json()})(r)})),m.addEventListener("click",(async()=>{v()})),v()}},n=>{n(n.s=340)}]);