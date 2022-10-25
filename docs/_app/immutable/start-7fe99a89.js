var Fe=Object.defineProperty;var Je=(r,e,n)=>e in r?Fe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var ue=(r,e,n)=>(Je(r,typeof e!="symbol"?e+"":e,n),n);import{S as He,i as We,s as Ge,a as Me,e as U,c as Xe,b as z,g as Q,t as D,d as Z,f as T,h as V,j as Ye,o as _e,k as Qe,l as Ze,m as xe,n as de,p as H,q as et,r as tt,u as nt,v as B,w as te,x as K,y as F,z as je}from"./chunks/index-13bb7807.js";import{g as Ie,f as Ue,a as De,s as Y,b as me,i as rt,c as at}from"./chunks/singletons-d3a27dff.js";const st=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),it=function(r,e){return new URL(r,e).href},Te={},W=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=it(a,i),a in Te)return;Te[a]=!0;const u=a.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const o=document.createElement("link");if(o.rel=u?"stylesheet":st,u||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),u)return new Promise((f,p)=>{o.addEventListener("load",f),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};class ae{constructor(e,n){ue(this,"name","HttpError");ue(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ne{constructor(e,n){this.status=e,this.location=n}}function ot(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function lt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(r,e){const n=new URL(r);for(const i of ct){let a=n[i];Object.defineProperty(n,i,{get(){return e(),a},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(i,a,u)=>u(r,a),ut(n),n}function ut(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const Be=window.fetch;function pt(r,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${dt(e.body)}"]`);const a=document.querySelector(i);if(a&&a.textContent){const{body:u,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(u,t))}return Be(r,e)}const ht=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(r){const e=[],n=[];let i=!0;if(/\]\[/.test(r))throw new Error(`Invalid route ${r} \u2014 parameters must be separated`);if(Ce("[",r)!==Ce("]",r))throw new Error(`Invalid route ${r} \u2014 brackets are unbalanced`);return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(mt).map((u,t,o)=>{const f=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(p)return e.push(p[1]),n.push(p[2]),"(?:/(.*))?";const g=t===o.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((L,N)=>{if(N%2){const E=ht.exec(L);if(!E)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,J,G]=E;return e.push(J),n.push(G),A?"(.*?)":"([^/]+?)"}return g&&L.includes(".")&&(i=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:n}}function mt(r){return!/^\([^)]+\)$/.test(r)}function gt(r,e,n,i){const a={};for(let u=0;u<e.length;u+=1){const t=e[u],o=n[u],f=r[u+1]||"";if(o){const p=i[o];if(!p)throw new Error(`Missing "${o}" param matcher`);if(!p(f))return}a[t]=f}return a}function Ce(r,e){let n=0;for(let i=0;i<e.length;i+=1)e[i]===r&&(n+=1);return n}function wt(r,e,n,i){const a=new Set(e);return Object.entries(n).map(([o,[f,p,g]])=>{const{pattern:L,names:N,types:E}=_t(o),A={id:o,exec:J=>{const G=L.exec(J);if(G)return gt(G,N,E,i)},errors:[1,...g||[]].map(J=>r[J]),layouts:[0,...p||[]].map(t),leaf:u(f)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function u(o){const f=o<0;return f&&(o=~o),[f,r[o]]}function t(o){return o===void 0?o:[a.has(o),r[o]]}}function bt(r,e){return new ae(r,e)}function yt(r){let e,n,i;var a=r[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,o){e&&K(e,t,o),z(t,n,o),i=!0},p(t,o){const f={};if(o&2&&(f.data=t[1]),o&16&&(f.errors=t[4]),a!==(a=t[0][0])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{F(p,1)}),Z()}a?(e=new a(u(t)),B(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&V(n),e&&F(e,t)}}}function vt(r){let e,n,i;var a=r[0][0];function u(t){return{props:{data:t[1],errors:t[4],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,o){e&&K(e,t,o),z(t,n,o),i=!0},p(t,o){const f={};if(o&2&&(f.data=t[1]),o&16&&(f.errors=t[4]),o&1053&&(f.$$scope={dirty:o,ctx:t}),a!==(a=t[0][0])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{F(p,1)}),Z()}a?(e=new a(u(t)),B(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&V(n),e&&F(e,t)}}}function kt(r){let e,n,i;var a=r[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,o){e&&K(e,t,o),z(t,n,o),i=!0},p(t,o){const f={};if(o&4&&(f.data=t[2]),o&16&&(f.errors=t[4]),a!==(a=t[0][1])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{F(p,1)}),Z()}a?(e=new a(u(t)),B(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&V(n),e&&F(e,t)}}}function Et(r){let e,n,i;var a=r[0][1];function u(t){return{props:{data:t[2],errors:t[4],$$slots:{default:[$t]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,o){e&&K(e,t,o),z(t,n,o),i=!0},p(t,o){const f={};if(o&4&&(f.data=t[2]),o&16&&(f.errors=t[4]),o&1049&&(f.$$scope={dirty:o,ctx:t}),a!==(a=t[0][1])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{F(p,1)}),Z()}a?(e=new a(u(t)),B(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&V(n),e&&F(e,t)}}}function $t(r){let e,n,i;var a=r[0][2];function u(t){return{props:{data:t[3],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,o){e&&K(e,t,o),z(t,n,o),i=!0},p(t,o){const f={};if(o&8&&(f.data=t[3]),o&16&&(f.errors=t[4]),a!==(a=t[0][2])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{F(p,1)}),Z()}a?(e=new a(u(t)),B(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&V(n),e&&F(e,t)}}}function Rt(r){let e,n,i,a;const u=[Et,kt],t=[];function o(f,p){return f[0][2]?0:1}return e=o(r),n=t[e]=u[e](r),{c(){n.c(),i=U()},l(f){n.l(f),i=U()},m(f,p){t[e].m(f,p),z(f,i,p),a=!0},p(f,p){let g=e;e=o(f),e===g?t[e].p(f,p):(Q(),D(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(f,p):(n=t[e]=u[e](f),n.c()),T(n,1),n.m(i.parentNode,i))},i(f){a||(T(n),a=!0)},o(f){D(n),a=!1},d(f){t[e].d(f),f&&V(i)}}}function Ve(r){let e,n=r[6]&&qe(r);return{c(){e=Qe("div"),n&&n.c(),this.h()},l(i){e=Ze(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=xe(e);n&&n.l(a),a.forEach(V),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(i,a){z(i,e,a),n&&n.m(e,null)},p(i,a){i[6]?n?n.p(i,a):(n=qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&V(e),n&&n.d()}}}function qe(r){let e;return{c(){e=et(r[7])},l(n){e=tt(n,r[7])},m(n,i){z(n,e,i)},p(n,i){i&128&&nt(e,n[7])},d(n){n&&V(e)}}}function Lt(r){let e,n,i,a,u;const t=[vt,yt],o=[];function f(g,L){return g[0][1]?0:1}e=f(r),n=o[e]=t[e](r);let p=r[5]&&Ve(r);return{c(){n.c(),i=Me(),p&&p.c(),a=U()},l(g){n.l(g),i=Xe(g),p&&p.l(g),a=U()},m(g,L){o[e].m(g,L),z(g,i,L),p&&p.m(g,L),z(g,a,L),u=!0},p(g,[L]){let N=e;e=f(g),e===N?o[e].p(g,L):(Q(),D(o[N],1,1,()=>{o[N]=null}),Z(),n=o[e],n?n.p(g,L):(n=o[e]=t[e](g),n.c()),T(n,1),n.m(i.parentNode,i)),g[5]?p?p.p(g,L):(p=Ve(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){u||(T(n),u=!0)},o(g){D(n),u=!1},d(g){o[e].d(g),g&&V(i),p&&p.d(g),g&&V(a)}}}function St(r,e,n){let{stores:i}=e,{page:a}=e,{components:u}=e,{data_0:t=null}=e,{data_1:o=null}=e,{data_2:f=null}=e,{errors:p}=e;Ye(i.page.notify);let g=!1,L=!1,N=null;return _e(()=>{const E=i.page.subscribe(()=>{g&&(n(6,L=!0),n(7,N=document.title||"untitled page"))});return n(5,g=!0),E}),r.$$set=E=>{"stores"in E&&n(8,i=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,u=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,o=E.data_1),"data_2"in E&&n(3,f=E.data_2),"errors"in E&&n(4,p=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(a)},[u,t,o,f,p,g,L,N,i,a]}class Pt extends He{constructor(e){super(),We(this,e,St,Lt,Ge,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const Ot={},se=[()=>W(()=>import("./chunks/0-33580f40.js"),["chunks\\0-33580f40.js","components\\layout.svelte-0e199e90.js","chunks\\index-13bb7807.js"],import.meta.url),()=>W(()=>import("./chunks/1-10b4209c.js"),["chunks\\1-10b4209c.js","components\\error.svelte-ef1c3f5d.js","chunks\\index-13bb7807.js","chunks\\singletons-d3a27dff.js"],import.meta.url),()=>W(()=>import("./chunks/2-64d9e583.js"),["chunks\\2-64d9e583.js","components\\pages\\blog\\_layout.svelte-aaebeb6b.js","chunks\\index-13bb7807.js","chunks\\Header-47a2f786.js","assets\\Header-857f7152.css","chunks\\LocalStore-1308d339.js"],import.meta.url),()=>W(()=>import("./chunks/3-8cba61f0.js"),["chunks\\3-8cba61f0.js","components\\pages\\blog\\_error.svelte-6d4b387a.js","chunks\\index-13bb7807.js"],import.meta.url),()=>W(()=>import("./chunks/4-43c27a3e.js"),["chunks\\4-43c27a3e.js","components\\pages\\_page.svelte-62e3dace.js","chunks\\index-13bb7807.js"],import.meta.url),()=>W(()=>import("./chunks/5-7bce6879.js"),["chunks\\5-7bce6879.js","components\\pages\\blog\\22-10\\bad-maps\\_page.svelte-da86ec4c.js","chunks\\index-13bb7807.js"],import.meta.url),()=>W(()=>import("./chunks/6-f6cc35d7.js"),["chunks\\6-f6cc35d7.js","components\\pages\\blog\\22-4\\namecheap-ghpages-svelte\\_page.svelte-152f15bd.js","assets\\_page-5e98fbbf.css","chunks\\index-13bb7807.js","chunks\\LocalStore-1308d339.js"],import.meta.url),()=>W(()=>import("./chunks/7-9ab4fc41.js"),["chunks\\7-9ab4fc41.js","components\\pages\\notes\\learninglog\\_page.svelte-93a2cd08.js","assets\\_page-9de1f7e9.css","chunks\\index-13bb7807.js","chunks\\Header-47a2f786.js","assets\\Header-857f7152.css","chunks\\LocalStore-1308d339.js"],import.meta.url)],At=[],jt={"":[4],"notes/learninglog":[7],"blog/22-10/bad-maps":[5,[2],[3]],"blog/22-4/namecheap-ghpages-svelte":[6,[2],[3]]},It="/__data.js",Ke="sveltekit:scroll",M="sveltekit:index",pe=wt(se,At,jt,Ot),ge=se[0],we=se[1];ge();we();let ee={};try{ee=JSON.parse(sessionStorage[Ke])}catch{}function he(r){ee[r]=me()}function Ut({target:r,base:e,trailing_slash:n}){var Se;const i=[],a={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},o=!1,f=!0,p=!1,g=1,L=null,N,E=!0,A=(Se=history.state)==null?void 0:Se[M];A||(A=Date.now(),history.replaceState({...history.state,[M]:A},"",location.href));const J=ee[A];J&&(history.scrollRestoration="manual",scrollTo(J.x,J.y));let G=!1,x,be;async function ye(s,{noscroll:d=!1,replaceState:h=!1,keepfocus:l=!1,state:c={}},$){if(typeof s=="string"&&(s=new URL(s,Ie(document))),E)return le({url:s,scroll:d?me():null,keepfocus:l,redirect_chain:$,details:{state:c,replaceState:h},accepted:()=>{},blocked:()=>{}});await X(s)}async function ve(s){const d=Le(s);if(!d)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=Re(d),a.id=d.id,a.promise}async function ke(s,d,h,l){var v,y,b;const c=Le(s),$=be={};let _=c&&await Re(c);if(!_&&s.origin===location.origin&&s.pathname===location.pathname&&(_=await re({status:404,error:new Error(`Not found: ${s.pathname}`),url:s,routeId:null})),!_)return await X(s),!1;if(s=(c==null?void 0:c.url)||s,be!==$)return!1;if(i.length=0,_.type==="redirect")if(d.length>10||d.includes(s.pathname))_=await re({status:500,error:new Error("Redirect loop"),url:s,routeId:null});else return E?ye(new URL(_.location,s).href,{},[...d,s.pathname]):await X(new URL(_.location,location.href)),!1;else((y=(v=_.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await Y.updated.check()&&await X(s);if(p=!0,h&&h.details){const{details:P}=h,I=P.replaceState?0:1;P.state[M]=A+=I,history[P.replaceState?"replaceState":"pushState"](P.state,"",s)}if(o?(t=_.state,_.props.page&&(_.props.page.url=s),N.$set(_.props)):Ee(_),h){const{scroll:P,keepfocus:I}=h;if(!I){const k=document.body,O=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var m;(m=getSelection())==null||m.removeAllRanges()}),O!==null?k.setAttribute("tabindex",O):k.removeAttribute("tabindex")}if(await je(),f){const k=s.hash&&document.getElementById(s.hash.slice(1));P?scrollTo(P.x,P.y):k?k.scrollIntoView():scrollTo(0,0)}}else await je();a.promise=null,a.id=null,f=!0,_.props.page&&(x=_.props.page);const R=_.state.branch[_.state.branch.length-1];E=((b=R==null?void 0:R.node.shared)==null?void 0:b.router)!==!1,l&&l(),p=!1}function Ee(s){t=s.state;const d=document.querySelector("style[data-sveltekit]");if(d&&d.remove(),x=s.props.page,N=new Pt({target:r,props:{...s.props,stores:Y},hydrate:!0}),E){const h={from:null,to:new URL(location.href)};u.after_navigate.forEach(l=>l(h))}o=!0}async function ne({url:s,params:d,branch:h,status:l,error:c,routeId:$,validation_errors:_}){var I;const R=h.filter(Boolean),v={type:"loaded",state:{url:s,params:d,branch:h,error:c,session_id:g},props:{components:R.map(k=>k.node.component),errors:_}};let y={},b=!x;for(let k=0;k<R.length;k+=1){const O=R[k];y={...y,...O.data},(b||!t.branch.some(m=>m===O))&&(v.props[`data_${k}`]=y,b=b||Object.keys((I=O.data)!=null?I:{}).length>0)}if(b||(b=Object.keys(x.data).length!==Object.keys(y).length),!t.url||s.href!==t.url.href||t.error!==c||b){v.props.page={error:c,params:d,routeId:$,status:l,url:s,data:b?y:x.data};const k=(O,m)=>{Object.defineProperty(v.props.page,O,{get:()=>{throw new Error(`$page.${O} has been replaced by $page.url.${m}`)}})};k("origin","origin"),k("path","pathname"),k("query","searchParams")}return v}async function ie({loader:s,parent:d,url:h,params:l,routeId:c,server_data_node:$}){var y,b,P,I,k;let _=null;const R={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await s();if((y=v.shared)!=null&&y.load){let O=function(...w){for(const S of w){const{href:C}=new URL(S,h);R.dependencies.add(C)}};const m={};for(const w in l)Object.defineProperty(m,w,{get(){return R.params.add(w),l[w]},enumerable:!0});const j={routeId:c,params:m,data:(b=$==null?void 0:$.data)!=null?b:null,url:ft(h,()=>{R.url=!0}),async fetch(w,S){let C;typeof w=="string"?C=w:(C=w.url,S={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...S});const q=new URL(C,h).href;return O(q),o?Be(q,S):pt(C,S)},setHeaders:()=>{},depends:O,parent(){return R.parent=!0,d()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(P=await v.shared.load.call(null,j))!=null?P:null}return{node:v,loader:s,server:$,shared:(I=v.shared)!=null&&I.load?{type:"data",data:_,uses:R}:null,data:(k=_!=null?_:$==null?void 0:$.data)!=null?k:null}}function $e(s,d,h){if(!h)return!1;if(h.parent&&d||s.url&&h.url)return!0;for(const l of s.params)if(h.params.has(l))return!0;for(const l of h.dependencies)if(i.some(c=>c(l)))return!0;return!1}function oe(s,d){var h,l;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((h=s.uses.dependencies)!=null?h:[]),params:new Set((l=s.uses.params)!=null?l:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&d!=null?d:null}async function Re({id:s,url:d,params:h,route:l}){if(a.id===s&&a.promise)return a.promise;const{errors:c,layouts:$,leaf:_}=l,R=t.url&&{url:s!==t.url.pathname+t.url.search,params:Object.keys(h).filter(m=>t.params[m]!==h[m])},v=[...$,_];c.forEach(m=>m==null?void 0:m().catch(()=>{})),v.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let y=null;const b=v.reduce((m,j,w)=>{var q;const S=t.branch[w],C=!!(j!=null&&j[0])&&((S==null?void 0:S.loader)!==j[1]||$e(R,m.some(Boolean),(q=S.server)==null?void 0:q.uses));return m.push(C),m},[]);if(b.some(Boolean)){try{y=await ze(d,b)}catch(m){return re({status:500,error:m,url:d,routeId:l.id})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let I=!1;const k=v.map(async(m,j)=>{var ce,Pe;if(!m)return;const w=t.branch[j],S=(ce=P==null?void 0:P[j])!=null?ce:null;if((!S||S.type==="skip")&&m[1]===(w==null?void 0:w.loader)&&!$e(R,I,(Pe=w.shared)==null?void 0:Pe.uses))return w;if(I=!0,(S==null?void 0:S.type)==="error")throw S.httperror?bt(S.httperror.status,S.httperror.message):S.error;return ie({loader:m[1],url:d,params:h,routeId:l.id,parent:async()=>{var Ae;const Oe={};for(let fe=0;fe<j;fe+=1)Object.assign(Oe,(Ae=await k[fe])==null?void 0:Ae.data);return Oe},server_data_node:oe(S,w==null?void 0:w.server)})});for(const m of k)m.catch(()=>{});const O=[];for(let m=0;m<v.length;m+=1)if(v[m])try{O.push(await k[m])}catch(j){const w=j;if(w instanceof Ne)return{type:"redirect",location:w.location};const S=j instanceof ae?j.status:500;for(;m--;)if(c[m]){let C,q=m;for(;!O[q];)q-=1;try{return C={node:await c[m](),loader:c[m],data:{},server:null,shared:null},await ne({url:d,params:h,branch:O.slice(0,q+1).concat(C),status:S,error:w,routeId:l.id})}catch{continue}}X(d);return}else O.push(void 0);return await ne({url:d,params:h,branch:O,status:200,error:null,routeId:l.id})}async function re({status:s,error:d,url:h,routeId:l}){var y;const c={},$=await ge();let _=null;if($.server)try{const b=await ze(h,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{X(h);return}const R=await ie({loader:ge,url:h,params:c,routeId:l,parent:()=>Promise.resolve({}),server_data_node:oe(_)}),v={node:await we(),loader:we,shared:null,server:null,data:null};return await ne({url:h,params:c,branch:[R,v],status:s,error:d,routeId:l})}function Le(s){if(s.origin!==location.origin||!s.pathname.startsWith(e))return;const d=decodeURI(s.pathname.slice(e.length)||"/");for(const h of pe){const l=h.exec(d);if(l){const c=new URL(s.origin+ot(s.pathname,n)+s.search+s.hash);return{id:c.pathname+c.search,route:h,params:lt(l),url:c}}}}async function le({url:s,scroll:d,keepfocus:h,redirect_chain:l,details:c,accepted:$,blocked:_}){const R=t.url;let v=!1;const y={from:R,to:s,cancel:()=>v=!0};if(u.before_navigate.forEach(b=>b(y)),v){_();return}he(A),$(),o&&Y.navigating.set({from:t.url,to:s}),await ke(s,l,{scroll:d,keepfocus:h,details:c},()=>{const b={from:R,to:s};u.after_navigate.forEach(P=>P(b)),Y.navigating.set(null)})}function X(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{_e(()=>(u.after_navigate.push(s),()=>{const d=u.after_navigate.indexOf(s);u.after_navigate.splice(d,1)}))},before_navigate:s=>{_e(()=>(u.before_navigate.push(s),()=>{const d=u.before_navigate.indexOf(s);u.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(p||!o)&&(f=!1)},goto:(s,d={})=>ye(s,d,[]),invalidate:s=>{var d,h;if(s===void 0){for(const l of t.branch)(d=l==null?void 0:l.server)==null||d.uses.dependencies.add(""),(h=l==null?void 0:l.shared)==null||h.uses.dependencies.add("");i.push(()=>!0)}else if(typeof s=="function")i.push(s);else{const{href:l}=new URL(s,location.href);i.push(c=>c===l)}return L||(L=Promise.resolve().then(async()=>{await ke(new URL(location.href),[]),L=null})),L},prefetch:async s=>{const d=new URL(s,Ie(document));await ve(d)},prefetch_routes:async s=>{const h=(s?pe.filter(l=>s.some(c=>l.exec(c))):pe).map(l=>Promise.all([...l.layouts,l.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(h)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{let c=!1;const $={from:t.url,to:null,cancel:()=>c=!0};u.before_navigate.forEach(_=>_($)),c?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(A);try{sessionStorage[Ke]=JSON.stringify(ee)}catch{}}});const s=l=>{const c=Ue(l);c&&c.href&&c.hasAttribute("data-sveltekit-prefetch")&&ve(De(c))};let d;const h=l=>{clearTimeout(d),d=setTimeout(()=>{var c;(c=l.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",l=>{if(!E||l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const c=Ue(l);if(!c||!c.href)return;const $=c instanceof SVGAElement,_=De(c);if(!$&&!(_.protocol==="https:"||_.protocol==="http:"))return;const R=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||R.includes("external")||c.hasAttribute("data-sveltekit-reload")||($?c.target.baseVal:c.target))return;const[v,y]=_.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){G=!0,he(A),Y.page.set({...x,url:_}),Y.page.notify();return}le({url:_,scroll:c.hasAttribute("data-sveltekit-noscroll")?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault()})}),addEventListener("popstate",l=>{if(l.state&&E){if(l.state[M]===A)return;le({url:new URL(location.href),scroll:ee[l.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=l.state[M]},blocked:()=>{const c=A-l.state[M];history.go(c)}})}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[M]:++A},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s,error:d,node_ids:h,params:l,routeId:c,data:$,errors:_})=>{const R=new URL(location.href);let v;try{const y=h.map(async(b,P)=>{const I=$[P];return ie({loader:se[b],url:R,params:l,routeId:c,parent:async()=>{const k={};for(let O=0;O<P;O+=1)Object.assign(k,(await y[O]).data);return k},server_data_node:oe(I)})});v=await ne({url:R,params:l,branch:await Promise.all(y),status:s,error:d!=null&&d.__is_http_error?new ae(d.status,d.message):d,validation_errors:_,routeId:c})}catch(y){const b=y;if(b instanceof Ne){await X(new URL(y.location,location.href));return}v=await re({status:b instanceof ae?b.status:500,error:b,url:R,routeId:c})}Ee(v)}}}let Dt=1;async function ze(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+It,n.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),n.searchParams.set("__id",String(Dt++)),await W(()=>import(n.href),[],import.meta.url);const i=window.__sveltekit_data;return delete window.__sveltekit_data,i}function Vt(r){}async function qt({paths:r,target:e,route:n,spa:i,trailing_slash:a,hydrate:u}){const t=Ut({target:e,base:r.base,trailing_slash:a});rt({client:t}),at(r),u&&await t._hydrate(u),n&&(i&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Vt as set_public_env,qt as start};
