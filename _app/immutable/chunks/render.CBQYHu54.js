import{F as W,O as Y,P as q,n as B,Q as D,p as C,R as F,q as w,T as N,V as L,x as p,w as m,B as h,W as I,X as O,Y as R,t as M,Z as P,_ as $,$ as z,a0 as K,a1 as Q,a2 as X,z as Z,I as j,k as G,K as J,c as U}from"./runtime.Cv-66xM_.js";import{b as x}from"./disclose-version.BMPrUPSD.js";const V=new Set,S=new Set;function ee(e,r,a,n){function s(t){if(n.capture||v.call(r,t),!t.cancelBubble)return a.call(this,t)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Y(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function oe(e,r,a,n,s){var t={capture:n,passive:s},u=ee(e,r,a,t);(r===document.body||r===window||r===document)&&W(()=>{r.removeEventListener(e,u,t)})}function de(e){for(var r=0;r<e.length;r++)V.add(e[r]);for(var a of S)a(e)}function v(e){var A;var r=this,a=r.ownerDocument,n=e.type,s=((A=e.composedPath)==null?void 0:A.call(e))||[],t=s[0]||e.target,u=0,_=e.__root;if(_){var l=s.indexOf(_);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var c=s.indexOf(r);if(c===-1)return;l<=c&&(u=l)}if(t=s[u]||e.target,t!==r){q(e,"currentTarget",{configurable:!0,get(){return t||a}});try{for(var y,i=[];t!==null;){var f=t.parentNode||t.host||null;try{var o=t["__"+n];if(o!==void 0&&!t.disabled)if(B(o)){var[E,...T]=o;E.apply(t,[e,...T])}else o.call(t,e)}catch(b){y?i.push(b):y=b}if(e.cancelBubble||f===r||f===null)break;t=f}if(y){for(let b of i)queueMicrotask(()=>{throw b});throw y}}finally{e.__root=r,delete e.currentTarget}}}let d;function re(){d=void 0}function ue(e){let r=null,a=w;var n;if(w){for(r=h,d===void 0&&(d=I(document.head));d!==null&&(d.nodeType!==8||d.data!==N);)d=L(d);d===null?p(!1):d=m(L(d))}w||(n=document.head.appendChild(D()));try{C(()=>e(n),F)}finally{a&&(p(!0),d=h,m(r))}}const te=["wheel","mousewheel","touchstart","touchmove"];function ae(e){return te.includes(e)}function fe(e,r){r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ne(e,r){const a=r.anchor??r.target.appendChild(D());return H(e,{...r,anchor:a})}function le(e,r){O(),r.intro=r.intro??!1;const a=r.target,n=w,s=h;try{for(var t=I(a);t&&(t.nodeType!==8||t.data!==N);)t=L(t);if(!t)throw R;p(!0),m(t),M();const u=H(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==P)throw $(),R;return p(!1),u}catch(u){if(u===R)return r.recover===!1&&z(),O(),K(a),p(!1),ne(e,r);throw u}finally{p(n),m(s),re()}}const g=new Map;function H(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:u=!0}){O();var _=new Set,l=i=>{for(var f=0;f<i.length;f++){var o=i[f];if(!_.has(o)){_.add(o);var E=ae(o);r.addEventListener(o,v,{passive:E});var T=g.get(o);T===void 0?(document.addEventListener(o,v,{passive:E}),g.set(o,1)):g.set(o,T+1)}}};l(Q(V)),S.add(l);var c=void 0,y=X(()=>(Z(()=>{if(t){j({});var i=U;i.c=t}s&&(n.$$events=s),w&&x(a,null),c=e(a,n)||{},w&&(G.nodes_end=h),t&&J()}),()=>{for(var i of _){r.removeEventListener(i,v);var f=g.get(i);--f===0?(document.removeEventListener(i,v),g.delete(i)):g.set(i,f)}S.delete(l),k.delete(c)}));return k.set(c,y),c}let k=new WeakMap;function ce(e){const r=k.get(e);r&&r()}export{ue as a,de as d,oe as e,le as h,ne as m,fe as s,ce as u};
