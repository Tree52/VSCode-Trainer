import{a as l,t as d}from"../chunks/disclose-version.D5vf0MEI.js";import{D as i,F as m,G as v,g as $,i as h,I as x,C as _,J as w,K as C,L as c,M as b,N as D}from"../chunks/runtime.BoHI-cDc.js";import{s as p}from"../chunks/render.UqJLycwB.js";import{i as E}from"../chunks/lifecycle.C0erDMZV.js";import{s as F}from"../chunks/entry.yzUvD-Mo.js";function G(s,r,t){if(s==null)return r(void 0),i;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function I(s,r,t){const e=t[r]??(t[r]={store:null,source:v(void 0),unsubscribe:i});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=i;else{var n=!0;e.unsubscribe=G(s,u=>{n?e.source.v=u:h(e.source,u)}),n=!1}return $(e.source)}function J(){const s={};return m(()=>{for(var r in s)s[r].unsubscribe()}),s}const K=()=>{const s=F;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},L={subscribe(s){return K().page.subscribe(s)}};var M=d("<h1> </h1> <p> </p>",1);function z(s,r){x(r,!1);const t=J(),e=()=>I(L,"$page",t);E();var n=M(),u=_(n),f=c(u);b(u);var a=D(u,2),g=c(a);b(a),w(()=>{var o;p(f,e().status),p(g,(o=e().error)==null?void 0:o.message)}),l(s,n),C()}export{z as component};