import{S as T,o as k,a as L,s as c,b as q,c as o,g as x,U as u,d as m,e as F,f as H,h as K,i as M,j as U,k as E,l as Y,H as B,r as C,m as Z,n as I,p as O,q as S,t as D,u as z,E as G}from"./runtime.DbjViYUv.js";function g(a,b=null,P){if(typeof a!="object"||a===null||T in a)return a;const y=K(a);if(y!==k&&y!==L)return a;var f=new Map,d=M(a),v=c(0);d&&f.set("length",c(a.length));var l;return new Proxy(a,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&q();var r=f.get(e);return r===void 0?(r=c(t.value),f.set(e,r)):o(r,g(t.value,l)),!0},deleteProperty(n,e){var t=f.get(e);return t===void 0?e in n&&f.set(e,c(u)):(o(t,u),j(v)),!0},get(n,e,t){var _;if(e===T)return a;var r=f.get(e),i=e in n;if(r===void 0&&(!i||(_=x(n,e))!=null&&_.writable)&&(r=c(g(i?n[e]:u,l)),f.set(e,r)),r!==void 0){var s=m(r);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=f.get(e);r&&(t.value=m(r))}else if(t===void 0){var i=f.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===T)return!0;var t=f.get(e),r=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||F!==null&&(!r||(s=x(n,e))!=null&&s.writable)){t===void 0&&(t=c(r?g(n[e],l):u),f.set(e,t));var i=m(t);if(i===u)return!1}return r},set(n,e,t,r){var A;var i=f.get(e),s=e in n;if(d&&e==="length")for(var _=t;_<i.v;_+=1){var h=f.get(_+"");h!==void 0?o(h,u):_ in n&&(h=c(u),f.set(_+"",h))}i===void 0?(!s||(A=x(n,e))!=null&&A.writable)&&(i=c(void 0),o(i,g(t,l)),f.set(e,i)):(s=i.v!==u,o(i,g(t,l)));var w=Reflect.getOwnPropertyDescriptor(n,e);if(w!=null&&w.set&&w.set.call(r,t),!s){if(d&&typeof e=="string"){var N=f.get("length"),R=Number(e);Number.isInteger(R)&&R>=N.v&&o(N,R+1)}j(v)}return!0},ownKeys(n){m(v);var e=Reflect.ownKeys(n).filter(i=>{var s=f.get(i);return s===void 0||s.v!==u});for(var[t,r]of f)r.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){H()}})}function j(a,b=1){o(a,a.v+b)}function Q(a,b,P,y=null,f=!1){E&&Y();var d=a,v=null,l=null,n=null,e=f?G:0;U(()=>{if(n===(n=!!b()))return;let t=!1;if(E){const r=d.data===B;n===r&&(d=C(),Z(d),I(!1),t=!0)}n?(v?O(v):v=S(()=>P(d)),l&&D(l,()=>{l=null})):(l?O(l):y&&(l=S(()=>y(d))),v&&D(v,()=>{v=null})),t&&I(!0)},e),E&&(d=z)}export{Q as i,g as p};