(this["webpackJsonptest-iona"]=this["webpackJsonptest-iona"]||[]).push([[5],{144:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(0),r=a.n(c),s=a(16),o=a(127),l=a.n(o),i="https://api.thecatapi.com/v1";function p(e){return l.a.get("".concat(i,"/images/search?limit=10&page=").concat(e.page,"&breed_id=").concat(e.id))}var u=a(227),m=a(226),d=a(222),f=a(223),E=a(229),h=a(14),b=(a(144),u.a.Option),g=m.a.Meta;t.default=function(){var e=Object(c.useContext)(s.a),t=e.dispatch,a=e.catsDataSource,o=a.catBreeds,v=a.catList,y=a.catID,C=Object(c.useState)(1),O=Object(n.a)(C,2),D=O[0],S=O[1],T=Object(c.useState)(!0),j=Object(n.a)(T,2),x=j[0],_=j[1],k=Object(c.useState)(!0),A=Object(n.a)(k,2),w=A[0],I=A[1];Object(c.useEffect)((function(){l.a.get("".concat(i,"/breeds")).then((function(e){var a=e.data;t({type:"GET_BREEDS",data:a})}))}),[t]);var B=function(){S(1),_(!0),t({type:"CAT_ID",catID:void 0}),t({type:"GET_CATS",data:[]})};return r.a.createElement(d.a,{className:"home-wrapper"},r.a.createElement(f.a,{md:{span:16,offset:4},sm:{span:20,offset:2},xs:{span:21,offset:1}},r.a.createElement("h1",null,"CAT BROWSER"),r.a.createElement("h4",null,"Breed"),r.a.createElement(u.a,{className:"catbreed-select",placeholder:"Select Cat Breed",showSearch:!0,allowClear:!0,defaultValue:y,onChange:function(e){if(!e)return B();p({id:e,page:D}).then((function(a){var n=a.data,c=e;console.log(n),S(D+1),_(!1),t({type:"CAT_ID",catID:c}),t({type:"GET_CATS",data:n})}))}},o.map((function(e){return r.a.createElement(b,{value:e.id,key:e.id},e.name)})))),r.a.createElement(f.a,{md:{span:16,offset:4},sm:{span:20,offset:2},xs:{span:21,offset:1},className:"mt20"},r.a.createElement(d.a,{type:"flex",justify:"start",align:"top",gutter:[16,16]},v.map((function(e){return r.a.createElement(f.a,{md:{span:6},sm:{span:12},xs:{span:24},key:e.id},r.a.createElement(m.a,{hoverable:!0,key:e.id,cover:r.a.createElement("img",{alt:"example",src:e.url})},r.a.createElement(g,{className:"text-center",description:r.a.createElement(h.b,{to:"/".concat(e.id)},r.a.createElement(E.a,{onClick:function(){var a;a=e.id,console.log(a),t({type:"SELECTED_CAT",id:a})}},"View Details"))})))}))),w?r.a.createElement(E.a,{className:"mt20",type:"primary",disabled:x,onClick:function(){p({id:y,page:D}).then((function(e){var a=e.data;console.log(a);var n=[];a.map((function(e){return-1===v.findIndex((function(t){return t.id===e.id}))?n.push(e):null})),n.length>0?(S(D+1),t({type:"LOAD_MORE",moreData:n})):I(!1)}))}},"Load more"):null))}}}]);
//# sourceMappingURL=5.7c99d95a.chunk.js.map