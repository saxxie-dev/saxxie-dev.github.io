import{S as q,i as K,s as G,O as Q,t as J,P as U,a as k,d,h as N,b as h,g as j,J as f,j as Z,n as z,e as P,c as M,x as T,k as y,y as L,m as E,z as S,r as x,p as I,C,Q as oe,L as ce,N as he}from"../../chunks/index-061f4183.js";import{L as ue,a as fe}from"../../chunks/LocalStore-76516329.js";function ge(n){let e,s,r,t,a,i=`${n[0][0]}/${n[0][1]}`,l;return{c(){e=Q("svg"),s=Q("circle"),r=Q("path"),t=Q("circle"),a=Q("text"),l=J(i),this.h()},l(o){e=U(o,"svg",{viewBox:!0,class:!0});var u=k(e);s=U(u,"circle",{x:!0,y:!0,r:!0,class:!0}),k(s).forEach(d),r=U(u,"path",{d:!0,class:!0}),k(r).forEach(d),t=U(u,"circle",{x:!0,y:!0,r:!0,class:!0}),k(t).forEach(d),a=U(u,"text",{x:!0,y:!0,lengthAdjust:!0,textLength:!0,class:!0});var w=k(a);l=N(w,i),w.forEach(d),u.forEach(d),this.h()},h(){h(s,"x","0"),h(s,"y","0"),h(s,"r","1"),h(s,"class","outer svelte-wbjmu1"),h(r,"d",`M 0 -1 A 1 1 0 ${n[1]>.5?1:0} 1 ${Math.sin(n[2])} ${-Math.cos(n[2])} L 0 0`),h(r,"class","svelte-wbjmu1"),h(t,"x","0"),h(t,"y","0"),h(t,"r","0.7"),h(t,"class","inner svelte-wbjmu1"),h(a,"x","-0.69"),h(a,"y","0.175"),h(a,"lengthAdjust","spacingAndGlyphs"),h(a,"textLength","1.38"),h(a,"class","svelte-wbjmu1"),h(e,"viewBox","-1 -1 2 2"),h(e,"class","svelte-wbjmu1")},m(o,u){j(o,e,u),f(e,s),f(e,r),f(e,t),f(e,a),f(a,l)},p(o,[u]){u&1&&i!==(i=`${o[0][0]}/${o[0][1]}`)&&Z(l,i)},i:z,o:z,d(o){o&&d(e)}}}function de(n,e,s){let{progress:r}=e;const t=r[0]/r[1],a=Math.max(Math.min(t,.995),.005),i=2*Math.PI*a;return n.$$set=l=>{"progress"in l&&s(0,r=l.progress)},[r,t,i]}class pe extends q{constructor(e){super(),K(this,e,de,ge,G,{progress:0})}}function ae(n,e,s){const r=n.slice();return r[4]=e[s],r}function le(n){let e,s=n[4][0]+"",r,t,a;return{c(){e=P("a"),r=J(s),a=J("\xA0"),this.h()},l(i){e=M(i,"A",{href:!0});var l=k(e);r=N(l,s),l.forEach(d),a=N(i,"\xA0"),this.h()},h(){h(e,"href",t=n[4][1])},m(i,l){j(i,e,l),f(e,r),j(i,a,l)},p(i,l){l&4&&s!==(s=i[4][0]+"")&&Z(r,s),l&4&&t!==(t=i[4][1])&&h(e,"href",t)},d(i){i&&d(e),i&&d(a)}}}function ne(n){let e,s;return{c(){e=P("p"),s=J(n[3]),this.h()},l(r){e=M(r,"P",{class:!0});var t=k(e);s=N(t,n[3]),t.forEach(d),this.h()},h(){h(e,"class","svelte-l2oc00")},m(r,t){j(r,e,t),f(e,s)},p(r,t){t&8&&Z(s,r[3])},d(r){r&&d(e)}}}function me(n){let e,s,r,t,a,i,l,o,u;s=new pe({props:{progress:n[0]}});let w=n[2],v=[];for(let g=0;g<w.length;g+=1)v[g]=le(ae(n,w,g));let p=n[3]&&ne(n);return{c(){e=P("section"),T(s.$$.fragment),r=y(),t=P("div"),a=P("h2"),i=J(n[1]),l=y();for(let g=0;g<v.length;g+=1)v[g].c();o=y(),p&&p.c(),this.h()},l(g){e=M(g,"SECTION",{class:!0});var _=k(e);L(s.$$.fragment,_),r=E(_),t=M(_,"DIV",{class:!0});var b=k(t);a=M(b,"H2",{class:!0});var m=k(a);i=N(m,n[1]),m.forEach(d),l=E(b);for(let A=0;A<v.length;A+=1)v[A].l(b);o=E(b),p&&p.l(b),b.forEach(d),_.forEach(d),this.h()},h(){h(a,"class","svelte-l2oc00"),h(t,"class","svelte-l2oc00"),h(e,"class","svelte-l2oc00")},m(g,_){j(g,e,_),S(s,e,null),f(e,r),f(e,t),f(t,a),f(a,i),f(t,l);for(let b=0;b<v.length;b+=1)v[b].m(t,null);f(t,o),p&&p.m(t,null),u=!0},p(g,[_]){const b={};if(_&1&&(b.progress=g[0]),s.$set(b),(!u||_&2)&&Z(i,g[1]),_&4){w=g[2];let m;for(m=0;m<w.length;m+=1){const A=ae(g,w,m);v[m]?v[m].p(A,_):(v[m]=le(A),v[m].c(),v[m].m(t,o))}for(;m<v.length;m+=1)v[m].d(1);v.length=w.length}g[3]?p?p.p(g,_):(p=ne(g),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(g){u||(x(s.$$.fragment,g),u=!0)},o(g){I(s.$$.fragment,g),u=!1},d(g){g&&d(e),C(s),oe(v,g),p&&p.d()}}}function $e(n,e,s){let{progress:r=[0,1]}=e,{title:t}=e,{links:a=[]}=e,{review:i=void 0}=e;return n.$$set=l=>{"progress"in l&&s(0,r=l.progress),"title"in l&&s(1,t=l.title),"links"in l&&s(2,a=l.links),"review"in l&&s(3,i=l.review)},[r,t,a,i]}class D extends q{constructor(e){super(),K(this,e,$e,me,G,{progress:0,title:1,links:2,review:3})}}var se;(n=>{n.map=(e,s)=>s===null?null:e(s),n.fallback=(e,s)=>e===null?s:e})(se||(se={}));class ve{constructor(){var e;this.subscriptions=[],this.localStore=new ue(fe.darkmode,null),this.darkmodeQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.pushUpdate=s=>{this.subscriptions.map(r=>r(s))},this.handleLocalstoreChange=s=>{s!==null?this.pushUpdate(s):this.pushUpdate(this.defaultValue)},this.handleBrowserSettingsChange=s=>this.localStore.get()!==null?this.pushUpdate(s.matches):null,this.subscribe=s=>{const r=this.localStore.get();return s(r===null?this.defaultValue:r),this.subscriptions.push(s),()=>{this.subscriptions.splice(this.subscriptions.findIndex(t=>t===s),1)}},this.set=this.localStore.set,this.update=s=>{this.localStore.update(r=>s(se.fallback(r,this.defaultValue)))},this.localStore.subscribe(this.handleLocalstoreChange),(e=this.darkmodeQuery)==null||e.addEventListener("change",this.handleBrowserSettingsChange)}get defaultValue(){var e;return!!((e=this.darkmodeQuery)!=null&&e.matches)}}const ie=new ve;function _e(n){let e,s,r,t,a,i,l;return{c(){e=P("label"),s=P("input"),r=y(),t=P("span"),this.h()},l(o){e=M(o,"LABEL",{class:!0});var u=k(e);s=M(u,"INPUT",{type:!0,class:!0}),r=E(u),t=M(u,"SPAN",{class:!0,title:!0}),k(t).forEach(d),u.forEach(d),this.h()},h(){h(s,"type","checkbox"),h(s,"class","svelte-11e8ebp"),h(t,"class","slider svelte-11e8ebp"),h(t,"title",a=`Toggle dark mode (${n[0]})`),h(e,"class","switch svelte-11e8ebp")},m(o,u){j(o,e,u),f(e,s),s.checked=n[0],f(e,r),f(e,t),i||(l=ce(s,"change",n[1]),i=!0)},p(o,[u]){u&1&&(s.checked=o[0]),u&1&&a!==(a=`Toggle dark mode (${o[0]})`)&&h(t,"title",a)},i:z,o:z,d(o){o&&d(e),i=!1,l()}}}function we(n,e,s){let r;he(n,ie,a=>s(0,r=a));function t(){r=this.checked,ie.set(r)}return n.$$.update=()=>{n.$$.dirty&1&&(document.body.classList.toggle("darkmode",r),document.body.classList.toggle("lightmode",!r))},[r,t]}class be extends q{constructor(e){super(),K(this,e,we,_e,G,{})}}function ke(n){let e,s,r,t,a,i;return a=new be({}),{c(){e=P("header"),s=P("a"),r=J("saxxie.dev"),t=y(),T(a.$$.fragment),this.h()},l(l){e=M(l,"HEADER",{class:!0});var o=k(e);s=M(o,"A",{href:!0,class:!0});var u=k(s);r=N(u,"saxxie.dev"),u.forEach(d),t=E(o),L(a.$$.fragment,o),o.forEach(d),this.h()},h(){h(s,"href","https://saxxie.dev"),h(s,"class","svelte-16hkxuc"),h(e,"class","svelte-16hkxuc")},m(l,o){j(l,e,o),f(e,s),f(s,r),f(e,t),S(a,e,null),i=!0},p:z,i(l){i||(x(a.$$.fragment,l),i=!0)},o(l){I(a.$$.fragment,l),i=!1},d(l){l&&d(e),C(a)}}}class ye extends q{constructor(e){super(),K(this,e,null,ke,G,{})}}function Ee(n){let e,s,r,t,a,i,l,o,u,w,v,p,g,_,b,m,A,H,W,R,Y,B,ee,F,te,V,X;return e=new ye({}),o=new D({props:{title:"Databases, Types, and the Relational Model",links:[["PDF","https://www.dcs.warwick.ac.uk/~hugh/TTM/DTATRM.pdf"]],progress:[0,16]}}),w=new D({props:{title:"Introduction to Categories and Categorical Logic",links:[["PDF","https://arxiv.org/pdf/1102.1313v1.pdf"]],progress:[0,8]}}),p=new D({props:{title:"Visual Group Theory",links:[["PDF","https://raw.githubusercontent.com/liwei766/visual-group-theory/master/visual%20group%20theory.pdf"]],progress:[7,10]}}),_=new D({props:{title:"HoTTEST Summer school",links:[["Lectures","https://www.youtube.com/playlist?list=PLtIZ5qxwSNnzpNqfXzJjlHI9yCAzRzKtx"],["Course site","https://uwo.ca/math/faculty/kapulkin/seminars/hottest_summer_school_2022.html"]],progress:[3,7]}}),m=new D({props:{title:"Avigad - Logic and Proof",links:[["PDF","https://leanprover.github.io/logic_and_proof/logic_and_proof.pdf"]],progress:[0,24]}}),H=new D({props:{title:"Out of the East - Spices and the Medieval Imagination",links:[["PDF","https://literacias.net/bibliodigital/download/368/Out%20of%20the%20East%20Spices%20and%20the%20-%20Paul%20Freedman.pdf"]],progress:[56,301],review:"Easy read about just how chaotic the history of the spice trade was, was reminded about this book from a tiktok"}}),R=new D({props:{title:"Learn Rust With Entirely Too Many Linked Lists",links:[["Ebook","https://rust-unofficial.github.io/too-many-lists/index.html"]],progress:[8,8],review:"The funniest premise for an intro-to-X-language book I've seen. The content is great too; great practice of 'who owns what' within persistent data structures"}}),B=new D({props:{title:"Jacobs + Rutten introductions to (co)algebra and (co)induction",links:[["Tutorial","http://www.cs.ru.nl/B.Jacobs/PAPERS/JR.pdf"],["Introduction","https://homepages.cwi.nl/~janr/papers/files-of-papers/2011_Jacobs_Rutten_new.pdf"]],progress:[1,2],review:`Bart Jacobs is THE coalgebra person, he also has a book I've thought about reading.
      The tutorial is where the whole algebra == inductive type thing finally clicked.`}}),F=new D({props:{title:"Bob Harper's HoTT Course",links:[["Lectures","https://www.youtube.com/playlist?list=PL1-2D_rCQBarjdqnM21sOsx09CtFSVO6Z"],["Course Site","http://www.cs.cmu.edu/~rwh/courses/hott/"]],progress:[7,23],review:"Most *complete* HoTT video lectures currently published, as far as I can tell. That should be changing very soon, however."}}),V=new D({props:{title:"Effect typing in Koka",links:[["Documentation","https://koka-lang.github.io/koka/doc/book.html#sec-effect-types"]],progress:[1,1],review:"Probably the best-documented actual implementation of algebraic effects."}}),{c(){T(e.$$.fragment),s=y(),r=P("main"),t=P("article"),a=P("aside"),i=J(`Things I've read/watched, want to read/watch, etc. I'll be including things only
    if they're involved enough to be worth tracking my progress on.`),l=y(),T(o.$$.fragment),u=y(),T(w.$$.fragment),v=y(),T(p.$$.fragment),g=y(),T(_.$$.fragment),b=y(),T(m.$$.fragment),A=y(),T(H.$$.fragment),W=y(),T(R.$$.fragment),Y=y(),T(B.$$.fragment),ee=y(),T(F.$$.fragment),te=y(),T(V.$$.fragment),this.h()},l(c){L(e.$$.fragment,c),s=E(c),r=M(c,"MAIN",{class:!0});var O=k(r);t=M(O,"ARTICLE",{class:!0});var $=k(t);a=M($,"ASIDE",{class:!0});var re=k(a);i=N(re,`Things I've read/watched, want to read/watch, etc. I'll be including things only
    if they're involved enough to be worth tracking my progress on.`),re.forEach(d),l=E($),L(o.$$.fragment,$),u=E($),L(w.$$.fragment,$),v=E($),L(p.$$.fragment,$),g=E($),L(_.$$.fragment,$),b=E($),L(m.$$.fragment,$),A=E($),L(H.$$.fragment,$),W=E($),L(R.$$.fragment,$),Y=E($),L(B.$$.fragment,$),ee=E($),L(F.$$.fragment,$),te=E($),L(V.$$.fragment,$),$.forEach(d),O.forEach(d),this.h()},h(){h(a,"class","svelte-xvy4fv"),h(t,"class","svelte-xvy4fv"),h(r,"class","svelte-xvy4fv")},m(c,O){S(e,c,O),j(c,s,O),j(c,r,O),f(r,t),f(t,a),f(a,i),f(t,l),S(o,t,null),f(t,u),S(w,t,null),f(t,v),S(p,t,null),f(t,g),S(_,t,null),f(t,b),S(m,t,null),f(t,A),S(H,t,null),f(t,W),S(R,t,null),f(t,Y),S(B,t,null),f(t,ee),S(F,t,null),f(t,te),S(V,t,null),X=!0},p:z,i(c){X||(x(e.$$.fragment,c),x(o.$$.fragment,c),x(w.$$.fragment,c),x(p.$$.fragment,c),x(_.$$.fragment,c),x(m.$$.fragment,c),x(H.$$.fragment,c),x(R.$$.fragment,c),x(B.$$.fragment,c),x(F.$$.fragment,c),x(V.$$.fragment,c),X=!0)},o(c){I(e.$$.fragment,c),I(o.$$.fragment,c),I(w.$$.fragment,c),I(p.$$.fragment,c),I(_.$$.fragment,c),I(m.$$.fragment,c),I(H.$$.fragment,c),I(R.$$.fragment,c),I(B.$$.fragment,c),I(F.$$.fragment,c),I(V.$$.fragment,c),X=!1},d(c){C(e,c),c&&d(s),c&&d(r),C(o),C(w),C(p),C(_),C(m),C(H),C(R),C(B),C(F),C(V)}}}class Se extends q{constructor(e){super(),K(this,e,null,Ee,G,{})}}export{Se as default};
