import{F as H,O as W,P as Y,t as F,Q as N,v as M,R as P,h as w,T as k,V as A,y as p,x as m,C as h,W as I,X as L,Y as R,i as $,Z as q,_ as B,$ as K,a0 as Q,a1 as X,a2 as Z,A as j,I as z,n as G,K as J,c as U}from"./runtime.B-n-TQZU.js";import{b as x}from"./disclose-version.BmLDqCXR.js";const V=new Set,O=new Set;function ee(e,r,a,n){function s(t){if(n.capture||v.call(r,t),!t.cancelBubble)return a.call(this,t)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function oe(e,r,a,n,s){var t={capture:n,passive:s},u=ee(e,r,a,t);(r===document.body||r===window||r===document)&&H(()=>{r.removeEventListener(e,u,t)})}function de(e){for(var r=0;r<e.length;r++)V.add(e[r]);for(var a of O)a(e)}function v(e){var D;var r=this,a=r.ownerDocument,n=e.type,s=((D=e.composedPath)==null?void 0:D.call(e))||[],t=s[0]||e.target,u=0,_=e.__root;if(_){var l=s.indexOf(_);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var c=s.indexOf(r);if(c===-1)return;l<=c&&(u=l)}if(t=s[u]||e.target,t!==r){Y(e,"currentTarget",{configurable:!0,get(){return t||a}});try{for(var y,i=[];t!==null;){var f=t.parentNode||t.host||null;try{var o=t["__"+n];if(o!==void 0&&!t.disabled)if(F(o)){var[E,...T]=o;E.apply(t,[e,...T])}else o.call(t,e)}catch(b){y?i.push(b):y=b}if(e.cancelBubble||f===r||f===null)break;t=f}if(y){for(let b of i)queueMicrotask(()=>{throw b});throw y}}finally{e.__root=r,delete e.currentTarget}}}let d;function re(){d=void 0}function ue(e){let r=null,a=w;var n;if(w){for(r=h,d===void 0&&(d=I(document.head));d!==null&&(d.nodeType!==8||d.data!==k);)d=A(d);d===null?p(!1):d=m(A(d))}w||(n=document.head.appendChild(N()));try{M(()=>e(n),P)}finally{a&&(p(!0),d=h,m(r))}}const te=["wheel","mousewheel","touchstart","touchmove"];function ae(e){return te.includes(e)}function fe(e,r){r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ne(e,r){const a=r.anchor??r.target.appendChild(N());return C(e,{...r,anchor:a})}function le(e,r){L(),r.intro=r.intro??!1;const a=r.target,n=w,s=h;try{for(var t=I(a);t&&(t.nodeType!==8||t.data!==k);)t=A(t);if(!t)throw R;p(!0),m(t),$();const u=C(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==q)throw B(),R;return p(!1),u}catch(u){if(u===R)return r.recover===!1&&K(),L(),Q(a),p(!1),ne(e,r);throw u}finally{p(n),m(s),re()}}const g=new Map;function C(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:u=!0}){L();var _=new Set,l=i=>{for(var f=0;f<i.length;f++){var o=i[f];if(!_.has(o)){_.add(o);var E=ae(o);r.addEventListener(o,v,{passive:E});var T=g.get(o);T===void 0?(document.addEventListener(o,v,{passive:E}),g.set(o,1)):g.set(o,T+1)}}};l(X(V)),O.add(l);var c=void 0,y=Z(()=>(j(()=>{if(t){z({});var i=U;i.c=t}s&&(n.$$events=s),w&&x(a,null),c=e(a,n)||{},w&&(G.nodes_end=h),t&&J()}),()=>{for(var i of _){r.removeEventListener(i,v);var f=g.get(i);--f===0?(document.removeEventListener(i,v),g.delete(i)):g.set(i,f)}O.delete(l),S.delete(c)}));return S.set(c,y),c}let S=new WeakMap;function ce(e){const r=S.get(e);r&&r()}export{ue as a,de as d,oe as e,le as h,ne as m,fe as s,ce as u};
