(this["webpackJsonptest-iona"]=this["webpackJsonptest-iona"]||[]).push([[1],{16:function(e,t,a){"use strict";var n=a(18),c=a(0),r=a.n(c),o=a(7),i=function(e,t){switch(t.type){case"GET_BREEDS":return Object(o.a)({},e,{catBreeds:t.data});case"GET_CATS":return Object(o.a)({},e,{catList:t.data});case"LOAD_MORE":return Object(o.a)({},e,{catList:e.catList.concat(t.moreData)});case"CAT_ID":return Object(o.a)({},e,{catID:t.catID});case"SELECTED_CAT":var a=e.catList.filter((function(e){return e.id===t.id}));return Object(o.a)({},e,{selectedCat:a});default:return e}};a.d(t,"a",(function(){return l}));var l=Object(c.createContext)();t.b=function(e){var t={catBreeds:[],catList:[],catID:void 0,selectedCat:{}},a=Object(c.useReducer)(i,t),o=Object(n.a)(a,2),s=o[0],u=o[1];return r.a.createElement(l.Provider,{value:{catsDataSource:s,dispatch:u}},e.children)}},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),i=(a(26),a(27),a(14)),l=a(5),s=a(16),u=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(5)]).then(a.bind(null,230))})),d=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,225))}));var m=function(){return c.a.createElement(s.b,null,c.a.createElement(i.a,null,c.a.createElement(l.c,null,c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"LOADING...")},c.a.createElement(l.a,{exact:!0,path:"/",component:u}),c.a.createElement(l.a,{exact:!0,path:"/:id",component:d})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,2,4]]]);
//# sourceMappingURL=main.3da2677c.chunk.js.map