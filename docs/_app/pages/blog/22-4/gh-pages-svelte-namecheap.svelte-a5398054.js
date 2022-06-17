import{S as ue,i as ge,s as de,e as n,t as i,k as N,c as o,a as r,h as a,d as h,m as O,b as A,g as ce,J as e,K as le,L as me,j as be,n as pe,M as we}from"../../../chunks/index-dd919fc5.js";import{L as fe,a as ve}from"../../../chunks/LocalStore-76516329.js";function _e(g){let t,m,d,b,w,y,H,c,U,l,E,j,$,f,T,K,R,q,B,v,D,C,J,M,k,S,P,z,F,_,x,Q,V,I,L,W,X,ee;return{c(){t=n("article"),m=n("h1"),d=i("Setting up a website with github pages, sveltekit, and namecheap in 2022"),b=N(),w=n("aside"),y=i(`This blog post is simply intended to document the steps taken in setting up
  this site. I have a very short-term memory for this shit and will likely forget
  all the details within a week - so this has to be written down asap, for whenever
  it needs to be done again.`),H=i(`

Github username: `),c=n("input"),U=N(),l=n("section"),E=n("h2"),j=i("Setting up gh-pages"),$=i(`
  Create a git repository. If this is your "main" github site, it should match the url
  it will be hosted at (`),f=n("a"),T=i(g[0]),K=i(".github.io"),R=i(`).
  `),q=n("br"),B=i(`
  Next we need to enable github pages. Open your repository at 
  `),v=n("a"),D=i("S"),J=i(`

  https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de`),M=N(),k=n("section"),S=n("h2"),P=i("Generating the site with sveltekit"),z=i(`
  https://sveltesaas.com/articles/sveltekit-github-pages-guide/`),F=N(),_=n("section"),x=n("h2"),Q=i("Linking a custom domain"),V=i(`
  https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/

  https://www.geeksforgeeks.org/publish-websites-on-github-pages-with-a-custom-domain/

  There are 2 sides to this story, because we like security. 
  `),I=n("ol"),L=n("li"),W=i("Github needs to know that being"),this.h()},l(p){t=o(p,"ARTICLE",{});var s=r(t);m=o(s,"H1",{});var te=r(m);d=a(te,"Setting up a website with github pages, sveltekit, and namecheap in 2022"),te.forEach(h),b=O(s),w=o(s,"ASIDE",{});var se=r(w);y=a(se,`This blog post is simply intended to document the steps taken in setting up
  this site. I have a very short-term memory for this shit and will likely forget
  all the details within a week - so this has to be written down asap, for whenever
  it needs to be done again.`),se.forEach(h),H=a(s,`

Github username: `),c=o(s,"INPUT",{type:!0}),U=O(s),l=o(s,"SECTION",{});var u=r(l);E=o(u,"H2",{});var ie=r(E);j=a(ie,"Setting up gh-pages"),ie.forEach(h),$=a(u,`
  Create a git repository. If this is your "main" github site, it should match the url
  it will be hosted at (`),f=o(u,"A",{href:!0});var Y=r(f);T=a(Y,g[0]),K=a(Y,".github.io"),Y.forEach(h),R=a(u,`).
  `),q=o(u,"BR",{}),B=a(u,`
  Next we need to enable github pages. Open your repository at 
  `),v=o(u,"A",{href:!0});var ae=r(v);D=a(ae,"S"),ae.forEach(h),J=a(u,`

  https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de`),u.forEach(h),M=O(s),k=o(s,"SECTION",{});var Z=r(k);S=o(Z,"H2",{});var ne=r(S);P=a(ne,"Generating the site with sveltekit"),ne.forEach(h),z=a(Z,`
  https://sveltesaas.com/articles/sveltekit-github-pages-guide/`),Z.forEach(h),F=O(s),_=o(s,"SECTION",{});var G=r(_);x=o(G,"H2",{});var oe=r(x);Q=a(oe,"Linking a custom domain"),oe.forEach(h),V=a(G,`
  https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/

  https://www.geeksforgeeks.org/publish-websites-on-github-pages-with-a-custom-domain/

  There are 2 sides to this story, because we like security. 
  `),I=o(G,"OL",{});var he=r(I);L=o(he,"LI",{});var re=r(L);W=a(re,"Github needs to know that being"),re.forEach(h),he.forEach(h),G.forEach(h),s.forEach(h),this.h()},h(){A(c,"type","text"),A(f,"href","https://github.com/saxxie-dev/saxxie-dev.github.io"),A(v,"href",C="https://github.com/"+g[0]+"/saxxie-dev.github.io")},m(p,s){ce(p,t,s),e(t,m),e(m,d),e(t,b),e(t,w),e(w,y),e(t,H),e(t,c),le(c,g[0]),e(t,U),e(t,l),e(l,E),e(E,j),e(l,$),e(l,f),e(f,T),e(f,K),e(l,R),e(l,q),e(l,B),e(l,v),e(v,D),e(l,J),e(t,M),e(t,k),e(k,S),e(S,P),e(k,z),e(t,F),e(t,_),e(_,x),e(x,Q),e(_,V),e(_,I),e(I,L),e(L,W),X||(ee=me(c,"input",g[2]),X=!0)},p(p,[s]){s&1&&c.value!==p[0]&&le(c,p[0]),s&1&&be(T,p[0]),s&1&&C!==(C="https://github.com/"+p[0]+"/saxxie-dev.github.io")&&A(v,"href",C)},i:pe,o:pe,d(p){p&&h(t),X=!1,ee()}}}function ke(g,t,m){let d;const b=new fe(ve.ghUsername,"saxxie-dev");we(g,b,y=>m(0,d=y));function w(){d=this.value,b.set(d)}return[d,b,w]}class Se extends ue{constructor(t){super(),ge(this,t,ke,_e,de,{})}}export{Se as default};
