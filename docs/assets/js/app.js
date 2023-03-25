(function(){"use strict";var o={6811:function(o,e,t){var n=t(9242),l=t(3396);const i={class:"wrap"},a=(0,l._)("h1",null,"TODOリスト",-1),u=(0,l._)("p",{class:"explanation"},[(0,l.Uk)("小さいリストはドラッグアンドドロップで移動できます"),(0,l._)("br"),(0,l.Uk)("ページを閉じても内容が1時間残ります")],-1),d={class:"todo-list"},r={class:"todo-list__head"},c=["onUpdate:modelValue"],s={class:"todo-list__btn-wrap"},p=["onClick"];function v(o,e,t,v,f,h){const _=(0,l.up)("childTodo");return(0,l.wg)(),(0,l.iD)("div",i,[a,u,(0,l._)("ul",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.parentTodos,((o,t)=>((0,l.wg)(),(0,l.iD)("li",{class:"todo-list__item",key:o.key},[(0,l._)("div",r,[(0,l.wy)((0,l._)("input",{class:"todo-list__input parent-input",type:"text","onUpdate:modelValue":o=>v.parentTodos[t].text=o,onInput:e[0]||(e[0]=(...o)=>v.todoSave&&v.todoSave(...o))},null,40,c),[[n.nr,v.parentTodos[t].text]]),(0,l._)("div",s,[(0,l._)("button",{class:"todo-list__btn add-btn",onClick:e[1]||(e[1]=(...o)=>v.addParent&&v.addParent(...o))}),(0,l._)("button",{class:"todo-list__btn del-btn",onClick:o=>v.deleteTodo(t)},null,8,p)])]),(0,l.Wm)(_,{index:t},null,8,["index"])])))),128))])])}t(7658);var f=t(4870);const h={class:"child-todo"},_={class:"child-list__item"},b=["onUpdate:modelValue"],g=["onClick"];function m(o,e,t,i,a,u){const d=(0,l.up)("draggable");return(0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("button",{class:"child-add-btn",onClick:e[0]||(e[0]=o=>i.addChild())},"リスト追加"),(0,l.Wm)(d,{class:"child-list",modelValue:i.childTodos,"onUpdate:modelValue":e[2]||(e[2]=o=>i.childTodos=o),"item-key":"todo",group:"todo"},{item:(0,l.w5)((({index:o})=>[(0,l._)("div",_,[(0,l.wy)((0,l._)("input",{class:"child-list__input child-input",type:"text","onUpdate:modelValue":e=>i.childTodos[o]=e,onInput:e[1]||(e[1]=(...o)=>i.inputTodo&&i.inputTodo(...o))},null,40,b),[[n.nr,i.childTodos[o]]]),(0,l._)("button",{class:"child-list__btn del-btn",onClick:e=>i.deleteTodoChild(o)},null,8,g)])])),_:1},8,["modelValue"])])}var k=t(6983),y=t.n(k),T={components:{draggable:y()},props:["index"],setup(o){const e=(0,f.iH)([]),t=(0,f.iH)(o.index),n=(0,f.iH)(document.cookie),i=(0,f.iH)(n.value.split(";")),a=(0,f.iH)(!1),u=()=>{for(let o of i.value){let n="todoChild"+t.value+"=";if(-1!=o.indexOf(n)){let t=o.trim().slice(n.length);e.value=JSON.parse(t),a.value=!0;break}}};u(),(0,l.bv)((()=>{a.value||d(t.value)}));const d=()=>{e.value.push(""),c()},r=o=>{e.value.length>1&&(console.log(e.value.length),e.value.splice(o,1),c())},c=()=>{document.cookie="todoChild"+t.value+"="+JSON.stringify(e.value)+"; max-age=3600;"},s=()=>{c()};return{childTodos:e,cookies:n,cookiesArray:i,cookieFlg:a,todoIndex:t,inputTodo:s,addChild:d,deleteTodoChild:r,cookieTodoChild:u,todoSave:c}}},x=t(89);const O=(0,x.Z)(T,[["render",m],["__scopeId","data-v-52ef6516"]]);var w=O,C={components:{childTodo:w},setup(){const o=(0,f.iH)([]),e=(0,f.iH)(0),t=(0,f.iH)(document.cookie),n=(0,f.iH)(t.value.split(";")),i=(0,f.iH)(!1),a=()=>{for(let e of n.value){let t=e.trim().substr(0,5);if("todo="==t){let t=e.trim().slice(5);o.value=JSON.parse(t),i.value=!0;break}}i.value&&(e.value=o.value.length)};a(),(0,l.bv)((()=>{i.value||u()}));const u=()=>{o.value.push({text:[],key:[]}),o.value[e.value].text.push(""),o.value[e.value].key.push((new Date).getTime().toString()),e.value++,r()},d=t=>{e.value>0&&(o.value.splice(t,1),e.value--,r(),document.cookie="todoChild"+e.value+"=; max-age=0;")},r=()=>{document.cookie="todo ="+JSON.stringify(o.value)+"; max-age=3600;"};return{parentTodos:o,parentCount:e,cookies:t,cookiesArray:n,cookieFlg:i,addParent:u,deleteTodo:d,cookieTodo:a,todoSave:r}}};const S=(0,x.Z)(C,[["render",v]]);var H=S;(0,n.ri)(H).mount("#app")}},e={};function t(n){var l=e[n];if(void 0!==l)return l.exports;var i=e[n]={exports:{}};return o[n].call(i.exports,i,i.exports,t),i.exports}t.m=o,function(){var o=[];t.O=function(e,n,l,i){if(!n){var a=1/0;for(c=0;c<o.length;c++){n=o[c][0],l=o[c][1],i=o[c][2];for(var u=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(t.O).every((function(o){return t.O[o](n[d])}))?n.splice(d--,1):(u=!1,i<a&&(a=i));if(u){o.splice(c--,1);var r=l();void 0!==r&&(e=r)}}return e}i=i||0;for(var c=o.length;c>0&&o[c-1][2]>i;c--)o[c]=o[c-1];o[c]=[n,l,i]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){t.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var l,i,a=n[0],u=n[1],d=n[2],r=0;if(a.some((function(e){return 0!==o[e]}))){for(l in u)t.o(u,l)&&(t.m[l]=u[l]);if(d)var c=d(t)}for(e&&e(n);r<a.length;r++)i=a[r],t.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return t.O(c)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6811)}));n=t.O(n)})();
//# sourceMappingURL=app.js.map