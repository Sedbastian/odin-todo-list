(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".divFormularioProyecto {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    \n\n    padding: 2rem;\n    background-color: yellowgreen;\n    border-style: solid;\n    border-color: black;\n    border-width: 1rem;\n\n    color: darkblue;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{o:()=>C,e:()=>x});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),c=n(569),i=n.n(c),s=n(565),u=n.n(s),l=n(216),d=n.n(l),p=n(589),m=n.n(p),f=n(426),v={};function b(e,t){const n=[];return{titulo:e,descripcion:t,tareas:n,fabricarTarea:function(e,t,r,o){n.push({titulo:e,descripcion:t,vencimiento:r,prioridad:o,notas:"",checklist:{}})}}}function h(e){y[e.titulo]=e}v.styleTagTransform=m(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const y={};function C(e,t){h(b(e,t)),console.log(y)}function x(e,t,n){y[n].fabricarTarea(e,t),console.log(y)}h(b("Tareas Sueltas","Estas son Tareas que no están relacionadas con ningún proyecto en especial.")),y["Tareas Sueltas"].fabricarTarea("Primera Tarea","Solo una prueba","7/7","mediana"),y["Tareas Sueltas"].fabricarTarea("Segunda Tarea","Segunda prueba","8/8","baja"),console.log(y),document.querySelector(".proyectoNuevo").addEventListener("click",(function(){const e=document.createElement("div");e.classList.add("divFormularioProyecto"),document.createElement("h2").textContent="Crear Nuevo Proyecto",e.appendChild(crearNuevaTarea);const t=document.createElement("label");t.setAttribute("for","titulo"),t.textContent="Titulo:",e.appendChild(t);const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","titulo"),e.appendChild(n);const r=document.createElement("label");r.setAttribute("for","descripcion"),r.textContent="Descripcion:",e.appendChild(r);const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","descripcion"),e.appendChild(o);const a=document.createElement("button");a.addEventListener("click",(function(){C(`${n.value}`,`${o.value}`),i.removeChild(e)})),a.setAttribute("class","botonFormulario"),a.textContent="Crear Proyecto",e.appendChild(a);const c=document.createElement("button");c.addEventListener("click",(function(){i.removeChild(e)})),c.setAttribute("class","botonFormulario"),c.textContent="Cancelar",e.appendChild(c);const i=document.querySelector("body");i.appendChild(e)})),document.querySelector(".tareaNueva").addEventListener("click",(function(){const e=document.createElement("div");e.classList.add("divFormularioTarea");const t=document.createElement("h2");t.textContent="Crear Nueva Tarea",e.appendChild(t);const n=document.createElement("label");n.setAttribute("for","titulo"),n.textContent="Titulo:",e.appendChild(n);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","titulo"),e.appendChild(r);const o=document.createElement("label");o.setAttribute("for","descripcion"),o.textContent="Descripcion:",e.appendChild(o);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","descripcion"),e.appendChild(a);const c=document.createElement("label");c.setAttribute("for","proyecto"),c.textContent="Proyecto al que pertenece:",e.appendChild(c);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","proyecto"),e.appendChild(i);const s=document.createElement("button");s.addEventListener("click",(function(){x(`${r.value}`,`${a.value}`,`${i.value}`),l.removeChild(e)})),s.setAttribute("class","botonFormulario"),s.textContent="Crear Tarea",e.appendChild(s);const u=document.createElement("button");u.addEventListener("click",(function(){l.removeChild(e)})),u.setAttribute("class","botonFormulario"),u.textContent="Cancelar",e.appendChild(u);const l=document.querySelector("body");l.appendChild(e)}))})()})();