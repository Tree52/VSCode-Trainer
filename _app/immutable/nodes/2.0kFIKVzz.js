import{a as u,t as L}from"../chunks/disclose-version.D5vf0MEI.js";import{q as X,a6 as Z,aj as _,i as l,g as n,I as R,N as b,L as v,M as h,K as D,a as F,C as M,ak as G,al as j,J as H,ae as A}from"../chunks/runtime.BoHI-cDc.js";import{d as z,a as Y,e as w,s as T}from"../chunks/render.UqJLycwB.js";import{p as d,i as O}from"../chunks/if.C3wqKK_i.js";import{i as ee}from"../chunks/lifecycle.C0erDMZV.js";let $=!1;function te(){$||($=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const o of e.target.elements)(t=o.__on_r)==null||t.call(o)})},{capture:!0}))}function oe(e,t,o,i){o=o==null?null:o+"";var c=e.__attributes??(e.__attributes={});if(X){c[t]=e.getAttribute(t);return}c[t]!==(c[t]=o)&&(o===null?e.removeAttribute(t):e.setAttribute(t,o))}function se(e,t,o){if(o){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function ne(e,t,o,i=o){e.addEventListener(t,o);const c=e.__on_r;c?e.__on_r=()=>{c(),i()}:e.__on_r=i,te()}function re(e,t,o){ne(e,"change",()=>{o(e.files)}),Z(()=>{e.files=t()})}const ie=!0,De=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie},Symbol.toStringTag,{value:"Module"})),ae=""+new URL("../assets/copyLineDown.CIZRnuR1.mp4",import.meta.url).href,ce=""+new URL("../assets/copyLineUp.AqibnicA.mp4",import.meta.url).href,le=""+new URL("../assets/deleteLine.0Q7Xww42.mp4",import.meta.url).href,de=""+new URL("../assets/indentLine.ck51bokl.mp4",import.meta.url).href,fe=""+new URL("../assets/insertLineAbove.BGUumwZU.mp4",import.meta.url).href,pe=""+new URL("../assets/insertLineBelow.CzoWgCBC.mp4",import.meta.url).href,me=""+new URL("../assets/moveLineDown.CPXveQnj.mp4",import.meta.url).href,ue=""+new URL("../assets/moveLineUp.BT-m1vzA.mp4",import.meta.url).href,ve=""+new URL("../assets/outdentLine.DvU2vvYm.mp4",import.meta.url).href,he=""+new URL("../assets/toggleWordWrap.CcI2MWlk.mp4",import.meta.url).href,E=e=>{let t=_(d(e));return{reset:()=>l(t,d(e)),set v(i){l(t,d(i))},get v(){return n(t)}}},p=E({"Copy Line Down":{combos:["shift+alt+down"],command:"editor.action.copyLinesDownAction",src:ae},"Copy Line Up":{combos:["shift+alt+up"],command:"editor.action.copyLinesUpAction",src:ce},"Delete Line":{combos:["ctrl+shift+k"],command:"editor.action.deleteLines",src:le},"Indent Line":{combos:["ctrl+]"],command:"editor.action.indentLines",src:de},"Insert Line Above":{combos:["ctrl+shift+enter"],command:"editor.action.insertLineBefore",src:fe},"Insert Line Below":{combos:["ctrl+enter"],command:"editor.action.insertLineAfter",src:pe},"Move Line Down":{combos:["alt+down"],command:"editor.action.moveLinesDownAction",src:me},"Move Line Up":{combos:["alt+up"],command:"editor.action.moveLinesUpAction",src:ue},"Outdent Line":{combos:["ctrl+[","shift+tab"],command:"editor.action.outdentLines",src:ve},"View: Toggle Word Wrap":{combos:["alt+z"],command:"editor.action.toggleWordWrap",src:he}}),U=E(!1),Le=e=>{const t=e.target,o=t.files?t.files[0]:null;if(o){const i=new FileReader;i.onload=()=>{try{const c=i.result.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//gm,"");let r=JSON.parse(c);const m=Object.keys(p.v),y=Object.values(p.v).map(f=>f.command);for(let f=0;f<r.length;(f+=1)-1){const k=y.indexOf(r[f].command);k!==-1&&p.v[m[k]].combos.push(r[f].key)}alert("Custom keybindings added.")}catch(c){console.log(c),alert("It didn't work, sorry. Check console.")}},i.readAsText(o)}};var ge=L('<div class="p-2"><label class="cursor-pointer" for="file-upload">Upload keybindings.json</label> <input accept=".json" class="hidden" id="file-upload" type="file"></div>');function we(e,t){R(t,!0);let o=_(void 0);var i=ge(),c=b(v(i),2);c.__change=[Le],h(i),re(c,()=>n(o),r=>l(o,r)),u(e,i),D()}z(["change"]);var be=L('<header class="flex items-center justify-center"><!></header>');function _e(e,t){R(t,!1),ee();var o=be(),i=v(o);O(i,()=>!U.v,c=>{we(c,{})}),h(o),u(e,o),D()}var ye=L('<button class="border-2 border-white px-2 py-1 text-3xl font-bold">Enter</button>'),ke=L('<div class="spinner svelte-18c3q72"></div>'),Ue=L('<div class="text-white"> </div> <div> </div> <div class="flex w-1/2 items-center justify-center p-2"><video autoplay loop muted class="svelte-18c3q72"></video> <!></div>',1),xe=L('<!> <div class="absolute right-0 top-0 scale-50"><a href="https://github.com/Tree52/VSCode-Trainer"><svg height="96" width="98" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"></path></svg></a></div> <main class="flex flex-1 flex-col items-center justify-center"><!></main>',1);function Ie(e,t){R(t,!0);const o=(s,a)=>Math.floor(Math.random()*(a-s+1))+s;let i=_(d(o(0,Object.keys(p.v).length-1))),c=A(()=>Object.values(p.v)[n(i)].src),r=_(d([])),m=_(!1);const y=A(()=>{const s=[];n(r).includes("control")&&s.push("ctrl"),n(r).includes("shift")&&s.push("shift"),n(r).includes("alt")&&s.push("alt"),n(r).includes("meta")&&s.push("win");for(let a=0;a<n(r).length;(a+=1)-1)if(!(n(r)[a]==="control"||n(r)[a]==="shift"||n(r)[a]==="alt"||n(r)[a]==="meta"))switch(n(r)[a]){case"arrowup":s.push("up");break;case"arrowdown":s.push("down");break;case"arrowleft":s.push("left");break;case"arrowright":s.push("right");break;default:s.push(n(r)[a]);break}return s.join("+")}),f=A(()=>{const s=Object.values(p.v)[n(i)].combos;for(let a=0;a<s.length;(a+=1)-1)if(n(y)===s[a])return!0;return!1}),k=s=>{s.key==="Enter"&&(U.v=!0),s.key==="Escape"&&l(r,d([])),s.preventDefault(),!s.repeat&&n(r).push(s.key.toLowerCase())},P=s=>{l(r,d(n(r).filter(a=>a!==s.key.toLowerCase())))};F(()=>{if(n(f)){l(r,d([]));const s=n(i);for(;s===n(i);)l(i,d(o(0,Object.keys(p.v).length-1)))}});var I=xe();Y(s=>{G.title="VSCode Trainer"}),w("blur",j,()=>{l(r,d([]))}),w("keydown",j,k),w("keyup",j,P);var S=M(I);_e(S,{});var W=b(S,4),q=v(W);O(q,()=>!U.v,s=>{var a=ye();a.__click=()=>{U.v=!0},u(s,a)},s=>{var a=Ue(),x=M(a),K=v(x);h(x);var C=b(x,2),J=v(C);h(C);var B=b(C,2),g=v(B),N=b(g,2);O(N,()=>n(m),V=>{var Q=ke();u(V,Q)}),h(B),H(()=>{T(K,n(y)),T(J,Object.keys(p.v)[n(i)]),oe(g,"src",n(c)),se(g,"isLoading",n(m))}),w("canplay",g,()=>{l(m,!1)}),w("loadstart",g,()=>{l(m,!0)}),u(s,a)}),h(W),u(e,I),D()}z(["click"]);export{Ie as component,De as universal};