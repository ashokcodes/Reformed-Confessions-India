import{s as w,n as h,r as D,c as G,d as j,e as J,u as K,g as Q,f as V}from"../chunks/scheduler.CEVhU-LI.js";import{S as H,i as I,e as p,c as v,y as $,k as d,g as O,d as x,s as b,a as A,f as E,z as N,h as m,A as B,u as F,v as M,w as U,o as y,m as q,x as z}from"../chunks/index.B0zUYpi2.js";import{c as g}from"../chunks/counter.D9o0_CKQ.js";function W(i){let e,n='<h1 class="svelte-1mxqn55">Indian Reformed Confessions</h1>';return{c(){e=p("header"),e.innerHTML=n,this.h()},l(s){e=v(s,"HEADER",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1i7hr2a"&&(e.innerHTML=n),this.h()},h(){d(e,"class","svelte-1mxqn55")},m(s,l){O(s,e,l)},p:h,i:h,o:h,d(s){s&&x(e)}}}class X extends H{constructor(e){super(),I(this,e,null,W,w,{})}}function Y(i){let e,n,s="Previous",l,a,u="Next",r,t,o,L="हिंदी",c,P="मराठी",f,k="తెలుగు",S,R;return{c(){e=p("footer"),n=p("button"),n.textContent=s,l=b(),a=p("button"),a.textContent=u,r=b(),t=p("select"),o=p("option"),o.textContent=L,c=p("option"),c.textContent=P,f=p("option"),f.textContent=k,this.h()},l(C){e=v(C,"FOOTER",{class:!0});var _=A(e);n=v(_,"BUTTON",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-p86wl"&&(n.textContent=s),l=E(_),a=v(_,"BUTTON",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-1x8i5qd"&&(a.textContent=u),r=E(_),t=v(_,"SELECT",{name:!0,class:!0});var T=A(t);o=v(T,"OPTION",{autofocus:!0,"data-svelte-h":!0}),$(o)!=="svelte-10x3pjd"&&(o.textContent=L),c=v(T,"OPTION",{"data-svelte-h":!0}),$(c)!=="svelte-e0vrgc"&&(c.textContent=P),f=v(T,"OPTION",{"data-svelte-h":!0}),$(f)!=="svelte-1gcr5dj"&&(f.textContent=k),T.forEach(x),_.forEach(x),this.h()},h(){d(n,"class","svelte-voo7oo"),d(a,"class","svelte-voo7oo"),o.__value="hindi",N(o,o.__value),d(o,"autofocus",""),c.__value="marathi",N(c,c.__value),f.__value="mercedes",N(f,f.__value),d(t,"name","language"),d(t,"class","svelte-voo7oo"),d(e,"class","svelte-voo7oo")},m(C,_){O(C,e,_),m(e,n),m(e,l),m(e,a),m(e,r),m(e,t),m(t,o),m(t,c),m(t,f),o.focus(),S||(R=[B(n,"click",i[1]),B(a,"click",i[0])],S=!0)},p:h,i:h,o:h,d(C){C&&x(e),S=!1,D(R)}}}function Z(i,e,n){let s;return G(i,g,u=>n(2,s=u)),[()=>{s==4?j(g,s=0,s):g.update(u=>u+1)},()=>{s==0?j(g,s=4,s):g.update(u=>u-1)}]}class tt extends H{constructor(e){super(),I(this,e,Z,Y,w,{})}}function et(i){let e,n,s,l,a;e=new X({});const u=i[1].default,r=J(u,i,i[0],null);return l=new tt({}),{c(){F(e.$$.fragment),n=b(),r&&r.c(),s=b(),F(l.$$.fragment)},l(t){M(e.$$.fragment,t),n=E(t),r&&r.l(t),s=E(t),M(l.$$.fragment,t)},m(t,o){U(e,t,o),O(t,n,o),r&&r.m(t,o),O(t,s,o),U(l,t,o),a=!0},p(t,[o]){r&&r.p&&(!a||o&1)&&K(r,u,t,t[0],a?V(u,t[0],o,null):Q(t[0]),null)},i(t){a||(y(e.$$.fragment,t),y(r,t),y(l.$$.fragment,t),a=!0)},o(t){q(e.$$.fragment,t),q(r,t),q(l.$$.fragment,t),a=!1},d(t){t&&(x(n),x(s)),z(e,t),r&&r.d(t),z(l,t)}}}function st(i,e,n){let{$$slots:s={},$$scope:l}=e;return i.$$set=a=>{"$$scope"in a&&n(0,l=a.$$scope)},[l,s]}class lt extends H{constructor(e){super(),I(this,e,st,et,w,{})}}export{lt as component};