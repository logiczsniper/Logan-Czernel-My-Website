(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-54163e26":"bdcafdfa","chunk-99071b12":"881b26f0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-54163e26":1,"chunk-99071b12":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-54163e26":"21d50a54","chunk-99071b12":"ef18d33f"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1107:function(e,t,n){},"2e5c":function(e,t,n){"use strict";var r=n("8649"),a=n.n(r);a.a},"46e9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("a4c0"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{attrs:{id:"view"}})],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{id:"link",to:"/"}},[e._v("Home")]),n("router-link",{attrs:{id:"link",to:"/work"}},[e._v("Work")]),n("router-link",{attrs:{id:"link",to:"/about"}},[e._v("About")])],1)},c=[],l={name:"Navbar",props:{isPressed:Boolean}},u=l,f=(n("f1cc"),n("2877")),d=Object(f["a"])(u,s,c,!1,null,"122ea39c",null),h=d.exports,p={components:{Navbar:h},data:function(){return{}}},m=p,v=(n("034f"),Object(f["a"])(m,o,i,!1,null,null,null)),g=v.exports,b=(n("d3b7"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Headshot"),n("Hello",{attrs:{msg:"Hey there. I am"}}),n("Links")],1)},k=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"box"}},[n("vue-typed-js",{attrs:{typeSpeed:110,backDelay:950,backSpeed:85,strings:["learning","leading","Logan."]}},[n("h1",[e._v(" Hey there, I'm "),n("div",{staticClass:"typing-box"},[n("span",{staticClass:"typing"})])])])],1)},_=[],j={name:"Hello",props:{msg:String}},O=j,C=(n("60bc"),Object(f["a"])(O,w,_,!1,null,"99768c0a",null)),E=C.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{attrs:{id:"connect"}},[n("div",{staticClass:"link"},[n("a",{attrs:{href:"https://www.linkedin.com/in/loganczernel/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin-in",attrs:{id:"item"}})])]),n("div",{staticClass:"link"},[n("a",{attrs:{href:"https://github.com/logiczsniper",target:"_blank"}},[n("i",{staticClass:"fab fa-github",attrs:{id:"item"}})])]),n("div",{staticClass:"link"},[n("a",{attrs:{href:"https://mail.google.com/mail/u/0/?view=cm&fs=1&to=lczernel@gmail.com&su=Great Website&tf=1m",target:"_blank"}},[n("i",{staticClass:"fas fa-envelope",attrs:{id:"item"}})])])])}],S={name:"Links"},A=S,P=(n("2e5c"),Object(f["a"])(A,H,x,!1,null,"51c5efc5",null)),T=P.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"headshot-border"}},[r("img",{attrs:{id:"headshot",alt:"My face.",src:n("e739")}})])}],$={name:"Headshot"},M=$,D=(n("6fc2"),Object(f["a"])(M,L,N,!1,null,"5c375244",null)),G=D.exports,W={name:"Home",components:{Hello:E,Links:T,Headshot:G}},B=W,I=Object(f["a"])(B,y,k,!1,null,"c36667da",null),J=I.exports;r["a"].use(b["a"]);var q=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return n.e("chunk-54163e26").then(n.bind(null,"f820"))}},{path:"/work",name:"Work",component:function(){return n.e("chunk-99071b12").then(n.bind(null,"f126"))},props:{works:[{title:"Howth Golf Live: Competition Scoring",details:"App on both iOS & Android which facilitates live competition scoring for Howth Golf Club. Certain users can become admins with a special code, which enables them to create/modify/delete competitions. Other users can gain access to certain competitions. All other users can only view the data as it is changed in real time.",tools:"Dart & Flutter 💙.",image:"howthlive"},{title:"Hungeon: Haskell Adventure",details:"Explore randomly generated dungeons; dive as deep as possible before your flame runs out! Each level you pass, your torch loses fuel quicker. This was a fantastic project, so much fun to make & it introduced me to the world of functional programming.",tools:"Haskell & Gloss 💜.",image:"hungeon"},{title:"Take-Off 2: Fly Higher",details:"Control a space ship, dodging obstacles at various altitudes. Make it to space if you can! An updated version of my first ever project (Take-Off), featuring much cleaner code (& 180 lines less) & massive gameplay & graphics improvement.",tools:"Python & Pygame 💚.",image:"takeoff"},{title:"Naruto Jutsu Detection : Wear OS",details:"Tracks your wrist movements & plays the original Naruto jutsu audio when you make the correct hand seals! With the watch on the right hand, the user selects whichever jutsu they will attempt to perform. After moving to the starting position & tapping the screen, they begin the seals. The app listens to accelerometer data for the duration of the selected gesture. If the user was accurate enough, the appropriate jutsu sound is played.",tools:"Java & Gson 🧡.",image:"jutsu"}]}}],z=new b["a"]({routes:q}),F=z;r["a"].config.productionTip=!1,r["a"].use(a["default"]),new r["a"]({router:F,render:function(e){return e(g)}}).$mount("#app")},"60bc":function(e,t,n){"use strict";var r=n("c47e"),a=n.n(r);a.a},"6fc2":function(e,t,n){"use strict";var r=n("1107"),a=n.n(r);a.a},"85ec":function(e,t,n){},8649:function(e,t,n){},c47e:function(e,t,n){},e739:function(e,t,n){e.exports=n.p+"img/headshot-blue.83aff96c.png"},f1cc:function(e,t,n){"use strict";var r=n("46e9"),a=n.n(r);a.a}});
//# sourceMappingURL=app.d1f34fcc.js.map