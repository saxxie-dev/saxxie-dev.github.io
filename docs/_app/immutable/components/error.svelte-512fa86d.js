import{S as A,i as C,s as F,k as v,q as k,a as h,e as q,l as g,m as E,r as $,h as p,c as R,b as u,F as P,u as S,A as w,G}from"../chunks/index-6970f8fd.js";import{s as H}from"../chunks/singletons-d5387a6e.js";const O=()=>{const t=H,s={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(s,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return B(),{}},enumerable:!1}}),s},z={subscribe(t){return O().page.subscribe(t)}};function B(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function N(t){let s,i=t[0].error.frame+"",o;return{c(){s=v("pre"),o=k(i)},l(r){s=g(r,"PRE",{});var a=E(s);o=$(a,i),a.forEach(p)},m(r,a){u(r,s,a),P(s,o)},p(r,a){a&1&&i!==(i=r[0].error.frame+"")&&S(o,i)},d(r){r&&p(s)}}}function y(t){let s,i=t[0].error.stack+"",o;return{c(){s=v("pre"),o=k(i)},l(r){s=g(r,"PRE",{});var a=E(s);o=$(a,i),a.forEach(p)},m(r,a){u(r,s,a),P(s,o)},p(r,a){a&1&&i!==(i=r[0].error.stack+"")&&S(o,i)},d(r){r&&p(s)}}}function D(t){let s,i=t[0].status+"",o,r,a,b=t[0].error.message+"",_,d,c,m,l=t[0].error.frame&&N(t),n=t[0].error.stack&&y(t);return{c(){s=v("h1"),o=k(i),r=h(),a=v("pre"),_=k(b),d=h(),l&&l.c(),c=h(),n&&n.c(),m=q()},l(e){s=g(e,"H1",{});var f=E(s);o=$(f,i),f.forEach(p),r=R(e),a=g(e,"PRE",{});var j=E(a);_=$(j,b),j.forEach(p),d=R(e),l&&l.l(e),c=R(e),n&&n.l(e),m=q()},m(e,f){u(e,s,f),P(s,o),u(e,r,f),u(e,a,f),P(a,_),u(e,d,f),l&&l.m(e,f),u(e,c,f),n&&n.m(e,f),u(e,m,f)},p(e,[f]){f&1&&i!==(i=e[0].status+"")&&S(o,i),f&1&&b!==(b=e[0].error.message+"")&&S(_,b),e[0].error.frame?l?l.p(e,f):(l=N(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null),e[0].error.stack?n?n.p(e,f):(n=y(e),n.c(),n.m(m.parentNode,m)):n&&(n.d(1),n=null)},i:w,o:w,d(e){e&&p(s),e&&p(r),e&&p(a),e&&p(d),l&&l.d(e),e&&p(c),n&&n.d(e),e&&p(m)}}}function I(t,s,i){let o;return G(t,z,r=>i(0,o=r)),[o]}class L extends A{constructor(s){super(),C(this,s,I,D,F,{})}}export{L as default};
