!function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=15)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(14)},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(3),c=t.n(n);function s(e,r,t,n,c,s,u){try{var o=e[s](u),i=o.value}catch(e){return void t(e)}o.done?r(i):Promise.resolve(i).then(n,c)}function u(e){return function(){var r=this,t=arguments;return new Promise((function(n,c){var u=e.apply(r,t);function o(e){s(u,n,c,o,i,"next",e)}function i(e){s(u,n,c,o,i,"throw",e)}o(void 0)}))}}var o=t(1),i=t(7),a=t.n(i),l=t(8),p=t.n(l),d=t(2),f=t(0),j=function(){return Object(f.jsx)("div",{className:"Red",children:"Red"})},b=function(){return Object(f.jsx)(j,{})},x=function(){return Object(f.jsx)("div",{className:"Blue",children:"Blue"})},O=function(){return Object(f.jsx)(x,{})},h=function(){return Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/red",children:"Red"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/blue",children:"Blue"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/users",children:"Users"})})]})},v=function(e){var r=e.users;return r?Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:r.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},m=t(4);function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){y(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E=t(9),_=t.n(E),R=t(5),w=c.a.mark(G),P=c.a.mark(C),U="users/GET_USER",k=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},T=function(e){return{type:U,payload:e}},q=function(e){return _.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function G(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R.call)(q,e.payload);case 3:return r=t.sent,t.next=6,Object(R.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(R.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),w,null,[[0,8]])}function C(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.takeEvery)(U,G);case 2:case"end":return e.stop()}}),P)}var D={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return g(g({},e),{},{loading:g(g({},e.loading),{},{users:!0})});case"users/GET_USERS_SUCCESS":return g(g({},e),{},{loading:g(g({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return g(g({},e),{},{loading:g(g({},e.loading),{},{users:!1}),error:g(g({},e.error),{},{users:r.payload})});case U:return g(g({},e),{},{loading:g(g({},e.loading),{},{user:!0}),error:g(g({},e.error),{},{user:null})});case"users/GET_USER_SUCCESS":return g(g({},e),{},{loading:g(g({},e.loading),{},{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return g(g({},e),{},{loading:g(g({},e.loading),{},{user:!1}),error:g(g({},e.error),{},{user:r.payload})});default:return e}},N=Object(o.createContext)(null),A=N,F=function(e){var r=e.resolve,t=Object(o.useContext)(N);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},I=Object(m.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=u(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,_.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(k(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return Object(o.useEffect)((function(){r||t()}),[t,r]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{users:r}),Object(f.jsx)(F,{resolve:t})]})})),M=function(e){var r=e.user,t=r.email,n=r.name,c=r.username;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:[c," (",n,")"]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"e-mail: "}),t]})]})},B=function(e){var r,t,n=e.id,c=Object(m.useSelector)((function(e){return e.users.user})),s=Object(m.useDispatch)();return r=function(){return s(T(n))},(t=Object(o.useContext)(N))&&!t.done&&t.promises.push(Promise.resolve(r())),Object(o.useEffect)((function(){c&&c.id===parseInt(n,10)||s(T(n))}),[s,n,c]),c?Object(f.jsx)(M,{user:c}):null},J=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I,{}),Object(f.jsx)(d.Route,{path:"/users/:id",render:function(e){var r=e.match;return Object(f.jsx)(B,{id:r.params.id})}})]})};var Y=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(h,{}),Object(f.jsx)("hr",{}),Object(f.jsx)(d.Route,{path:"/red",component:b}),Object(f.jsx)(d.Route,{path:"/blue",component:O}),Object(f.jsx)(d.Route,{path:"/users",component:J})]})},$=t(10),z=t.n($),H=t(12),K=t.n(H),Q=t(6),V=t(13),W=t.n(V),X=c.a.mark(Z);function Z(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.all)([C()]);case 2:case"end":return e.stop()}}),X)}var ee=Object(Q.combineReducers)({users:L}),re=t(11),te=t.n(re),ne=JSON.parse(K.a.readFileSync(z.a.resolve("./build/asset-manifest.json"),"utf8")),ce=Object.keys(ne.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(ne.files[e],'"><\/script>')})).join("");function se(e,r){return'\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="utf-8 />\n        <link rel="shorcut icon" href="/favicon.ico" />\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(ne.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n        <noscript>you neet to enable Javascript to run this app.</noscript>\n        <div id="root">\n            ').concat(e,"\n        </div>\n        ").concat(r,'\n        <script src="').concat(ne.files["runtime-main.js"],'"><\/script>\n        ').concat(ce,'\n        <script src="').concat(ne.files["main.js"],'"><\/script>\n    </body>\n    </html>\n    ')}var ue=p()(),oe=function(){var e=u(c.a.mark((function e(r,t,n){var s,u,o,i,l,p,j,b,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},u=te()(),o=Object(Q.createStore)(ee,Object(Q.applyMiddleware)(W.a,u)),i=u.run(Z).toPromise(),l={done:!1,promises:[]},p=Object(f.jsx)(A.Provider,{value:l,children:Object(f.jsx)(m.Provider,{store:o,children:Object(f.jsx)(d.StaticRouter,{location:r.url,context:s,children:Object(f.jsx)(Y,{})})})}),a.a.renderToStaticMarkup(p),o.dispatch(re.END),e.prev=8,e.next=11,i;case 11:return e.next=13,Promise.all(l.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.status(500));case 18:l.done=!0,j=a.a.renderToString(p),b=JSON.stringify(o.getState()).replace(/</g,"\\u003c"),x="<script>__PRELOADED_STATE__ = ".concat(b,"<\/script>"),t.send(se(j,x));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),ie=p.a.static(z.a.resolve("./build"),{index:!1});ue.use(ie),ue.use(oe),ue.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);