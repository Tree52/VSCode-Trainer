var yn=Array.isArray,wn=Array.from,Tn=Object.defineProperty,et=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,mn=Object.prototype,An=Array.prototype,Bt=Object.getPrototypeOf;const kn=()=>{};function gn(t){return t()}function ft(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,_t=4,N=8,ct=16,T=32,tt=64,I=128,U=256,d=512,A=1024,C=2048,x=4096,q=8192,Vt=16384,pt=32768,In=65536,$t=1<<18,st=Symbol("$state"),Rn=Symbol("");function vt(t){return t===this.v}function Gt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Gt(t,this.v)}function Kt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Sn(){throw new Error("hydration_failed")}function On(t){throw new Error("props_invalid_value")}function xn(){throw new Error("state_descriptors_fixed")}function Dn(){throw new Error("state_prototype_fixed")}function zt(){throw new Error("state_unsafe_local_read")}function Jt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:vt,version:0}}function Nn(t){return Qt(nt(t))}function Cn(t){var r;const n=nt(t);return n.equals=ht,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function Qt(t){return l!==null&&l.f&y&&(E===null?cn([t]):E.push(t)),t}function qn(t,n){return l!==null&&J()&&l.f&y&&(E===null||!E.includes(t))&&Jt(),t.equals(n)||(t.v=n,t.version=bt(),dt(t,A),J()&&i!==null&&i.f&d&&!(i.f&T)&&(p!==null&&p.includes(t)?(h(i,A),K(i)):m===null?pn([t]):m.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=J(),s=r.length,u=0;u<s;u++){var o=r[u],_=o.f;_&A||!e&&o===i||(h(o,n),_&(d|I)&&(_&y?dt(o,C):K(o)))}}const Pn=1,bn=2,Fn=16,Mn=1,Ln=2,Yn=4,jn=8,Hn=16,Un=1,Bn=2,tn="[",nn="[!",rn="]",Et={},Vn=Symbol();function yt(t){console.warn("hydration_mismatch")}let D=!1;function $n(t){D=t}let w;function B(t){if(t===null)throw yt(),Et;return w=t}function Gn(){return B(P(w))}function Kn(t){if(D){if(P(w)!==null)throw yt(),Et;w=t}}function Zn(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===rn){if(t===0)return n;t-=1}else(r===tn||r===nn)&&(t+=1)}var e=P(n);n.remove(),n=e}}var ut,en,wt,Tt;function Wn(){if(ut===void 0){ut=window,en=document;var t=Element.prototype,n=Node.prototype;wt=et(n,"firstChild").get,Tt=et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function mt(t=""){return document.createTextNode(t)}function W(t){return wt.call(t)}function P(t){return Tt.call(t)}function Xn(t){if(!D)return W(t);var n=W(w);return n===null&&(n=w.appendChild(mt())),B(n),n}function zn(t,n){if(!D){var r=W(t);return r instanceof Comment&&r.data===""?P(r):r}return w}function Jn(t,n=1,r=!1){let e=D?w:t;for(;n--;)e=P(e);if(!D)return e;var s=e.nodeType;if(r&&s!==3){var u=mt();return e==null||e.before(u),B(u),u}return B(e),e}function Qn(t){t.textContent=""}function At(t){i===null&&l===null&&Wt(),l!==null&&l.f&I&&Zt(),rt&&Kt()}function sn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&tt)!==0,u=i,o={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var _=S;try{ot(!0),G(o),o.f|=Vt}catch(k){throw Y(o),k}finally{ot(_)}}else n!==null&&K(o);var a=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null;if(!a&&!s&&e&&(u!==null&&sn(o,u),l!==null&&l.f&y)){var c=l;(c.children??(c.children=[])).push(o)}return o}function tr(t){const n=b(N,null,!1);return h(n,d),n.teardown=t,n}function nr(t){At();var n=i!==null&&(i.f&N)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push(t)}else{var e=kt(t);return e}}function rr(t){return At(),gt(t)}function er(t){const n=b(tt,t,!0);return()=>{Y(n)}}function kt(t){return b(_t,t,!1)}function gt(t){return b(N,t,!0)}function sr(t){return gt(t)}function ur(t,n=0){return b(N|ct|n,t,!0)}function or(t,n=!0){return b(N|T,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=rt,e=l;lt(!0),at(null);try{n.call(null)}finally{lt(r),at(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var u=e===s?null:P(e);e.remove(),e=u}r=!0}Mt(t,n&&!r),L(t,0),h(t,q);var o=t.transitions;if(o!==null)for(const a of o)a.stop();It(t);var _=t.parent;_!==null&&_.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function lr(t,n){var r=[];St(t,r,!0),un(r,()=>{Y(t),n&&n()})}function un(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function St(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,u=(e.f&pt)!==0||(e.f&T)!==0;St(e,n,u?r:!1),e=s}}}function ar(t){Ot(t,!0)}function Ot(t,n){if(t.f&x){t.f^=x,j(t)&&G(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&T)!==0;Ot(r,s?n:!1),r=e}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&u.in()}}const on=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,$=!1,X=[],z=[];function xt(){V=!1;const t=X.slice();X=[],ft(t)}function Dt(){$=!1;const t=z.slice();z=[],ft(t)}function ir(t){V||(V=!0,queueMicrotask(xt)),X.push(t)}function fr(t){$||($=!0,on(Dt)),z.push(t)}function ln(){V&&xt(),$&&Dt()}function an(t){let n=y|A;i===null&&(n|=I);const r={children:null,deps:null,equals:vt,f:n,fn:t,reactions:null,v:null,version:0};if(l!==null&&l.f&y){var e=l;(e.children??(e.children=[])).push(r)}return r}function _r(t){const n=an(t);return n.equals=ht,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?fn(e):Y(e)}}}function Ct(t){var n;Nt(t),n=Ft(t);var r=(R||t.f&I)&&t.deps!==null?C:d;h(t,r),t.equals(n)||(t.v=n,t.version=bt())}function fn(t){Nt(t),L(t,0),h(t,q),t.children=t.deps=t.reactions=t.fn=null}const qt=0,_n=1;let H=qt,M=!1,S=!1,rt=!1;function ot(t){S=t}function lt(t){rt=t}let g=[],O=0,l=null;function at(t){l=t}let i=null,E=null;function cn(t){E=t}let p=null,v=0,m=null;function pn(t){m=t}let Pt=0,R=!1,f=null;function bt(){return++Pt}function J(){return f!==null&&f.l===null}function j(t){var o,_;var n=t.f;if(n&A)return!0;if(n&C){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var u=r[s];if(j(u)&&Ct(u),e&&i!==null&&!R&&!((_=u==null?void 0:u.reactions)!=null&&_.includes(t))&&(u.reactions??(u.reactions=[])).push(t),u.version>t.version)return!0}}e||h(t,d)}return!1}function vn(t,n,r){throw t}function Ft(t){var k;var n=p,r=v,e=m,s=l,u=R,o=E;p=null,v=0,m=null,l=t.f&(T|tt)?null:t,R=!S&&(t.f&I)!==0,E=null;try{var _=(0,t.fn)(),a=t.deps;if(p!==null){var c;if(L(t,v),a!==null&&v>0)for(a.length=v+p.length,c=0;c<p.length;c++)a[v+c]=p[c];else t.deps=a=p;if(!R)for(c=v;c<a.length;c++)((k=a[c]).reactions??(k.reactions=[])).push(t)}else a!==null&&v<a.length&&(L(t,v),a.length=v);return _}finally{p=n,v=r,m=e,l=s,R=u,E=o}}function hn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h(n,C),n.f&(I|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)hn(t,r[e])}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function G(t){var n=t.f;if(!(n&q)){h(t,d);var r=t.ctx,e=i,s=f;i=t,f=r;try{n&ct||Mt(t),It(t);var u=Ft(t);t.teardown=typeof u=="function"?u:null,t.version=Pt}catch(o){vn(o)}finally{i=e,f=s}}}function Lt(){O>1e3&&(O=0,Xt()),O++}function Yt(t){var n=t.length;if(n!==0){Lt();var r=S;S=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&T))it([s]);else{var u=[];jt(s,u),it(u)}}}finally{S=r}}}function it(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(q|x))&&j(e)&&(G(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}}function dn(){if(M=!1,O>1001)return;const t=g;g=[],Yt(t),M||(O=0)}function K(t){H===qt&&(M||(M=!0,queueMicrotask(dn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&T){if(!(r&d))return;h(n,C)}}g.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,u=(s&(q|x))===0,o=(s&T)!==0,_=(s&d)!==0,a=r.first;if(u&&(!o||!_)){if(o&&h(r,d),s&N){if(!o&&j(r)&&G(r),a=r.first,a!==null){r=a;continue}}else if(s&_t)if(o||_){if(a!==null){r=a;continue}}else e.push(r)}var c=r.next;if(c===null){let F=r.parent;for(;F!==null;){if(t===F)break t;var k=F.next;if(k!==null){r=k;continue t}F=F.parent}}r=c}for(var Z=0;Z<e.length;Z++)a=e[Z],n.push(a),jt(a,n)}function Ht(t){var n=H,r=g;try{Lt();const s=[];H=_n,g=s,M=!1,Yt(r);var e=t==null?void 0:t();return ln(),(g.length>0||s.length>0)&&Ht(),O=0,e}finally{H=n,g=r}}async function cr(){await Promise.resolve(),Ht()}function pr(t){var n=t.f;if(n&q)return t.v;if(l!==null){E!==null&&E.includes(t)&&zt();var r=l.deps;p===null&&r!==null&&r[v]===t?v++:p===null?p=[t]:p.push(t),m!==null&&i!==null&&i.f&d&&!(i.f&T)&&m.includes(t)&&(h(i,A),K(i))}if(n&y){var e=t;j(e)&&Ct(e)}return t.v}function vr(t){const n=l;try{return l=null,t()}finally{l=n}}const En=~(A|C|d);function h(t,n){t.f=t.f&En|n}function hr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function dr(t){const n=f;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)kt(e[r])}f=n.p,n.m=!0}return{}}function Er(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(st in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&st in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const u=e[s].get;if(u)try{u.call(t)}catch{}}}}}export{Sn as $,or as A,lr as B,w as C,kn as D,pt as E,tr as F,Cn as G,nn as H,hr as I,sr as J,dr as K,Xn as L,Kn as M,Jn as N,ir as O,Tn as P,mt as Q,$t as R,st as S,tn as T,Vn as U,P as V,W,Wn as X,Et as Y,rn as Z,yt as _,nt as a,Qn as a0,wn as a1,er as a2,Un as a3,Bn as a4,kt as a5,gt as a6,On as a7,In as a8,Yn as a9,ht as aa,Mn as ab,Ln as ac,jn as ad,an as ae,_r as af,Hn as ag,Ht as ah,cr as ai,Nn as aj,x as ak,Pn as al,Fn as am,bn as an,St as ao,un as ap,Y as aq,fr as ar,Rn as as,en as at,ut as au,Gt as av,nr as b,f as c,vr as d,Er as e,gn as f,pr as g,D as h,Gn as i,zn as j,An as k,xn as l,et as m,i as n,mn as o,Dn as p,Bt as q,ft as r,qn as s,yn as t,rr as u,ur as v,Zn as w,B as x,$n as y,ar as z};