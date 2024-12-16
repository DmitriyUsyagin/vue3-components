(function(){"use strict";var t={1403:function(t,n,e){var o=e(5130),r=e(6768);const a={class:"container column"},u={class:"container"},l={key:0,class:"card"};function c(t,n,e,o,c,i){const s=(0,r.g2)("FormComponent"),d=(0,r.g2)("app-content-def"),p=(0,r.g2)("PreviewComponent"),m=(0,r.g2)("appComments"),v=(0,r.g2)("app-loader");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",a,[(0,r.bF)(s,{onAddContent:i.handleAddContent},null,8,["onAddContent"]),c.active?((0,r.uX)(),(0,r.Wv)(d,{key:0})):((0,r.uX)(),(0,r.Wv)(p,{key:1,contents:c.contents},null,8,["contents"]))]),(0,r.Lk)("div",u,[(0,r.Lk)("p",null,[c.blockComments?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",{key:0,class:"btn primary",onClick:n[0]||(n[0]=(...t)=>i.loadComments&&i.loadComments(...t))}," Загрузить комментарии "))]),c.blockComments?((0,r.uX)(),(0,r.CE)("div",l,[n[1]||(n[1]=(0,r.Lk)("h2",null,"Комментарии",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.comments,(t=>((0,r.uX)(),(0,r.Wv)(m,{key:t.id,comment:t},null,8,["comment"])))),128))])):(0,r.Q3)("",!0),c.loading?((0,r.uX)(),(0,r.Wv)(v,{key:1})):(0,r.Q3)("",!0)])],64)}e(4114);const i={class:"card card-w70"};function s(t,n,e,o,a,u){return(0,r.uX)(),(0,r.CE)("div",i,n[0]||(n[0]=[(0,r.Lk)("h1",null,"Введите данные в блок",-1)]))}var d={data(){return{}},computed:{},methods:{},mounted(){},components:{}},p=e(1241);const m=(0,p.A)(d,[["render",s]]);var v=m;const f={class:"card card-w30"},k={class:"form-control"},h={class:"form-control"},y=["disabled"];function C(t,n,e,a,u,l){return(0,r.uX)(),(0,r.CE)("div",f,[(0,r.Lk)("div",k,[n[4]||(n[4]=(0,r.Lk)("label",{for:"type"},"Тип блока",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>u.selectedType=t),id:"type"},n[3]||(n[3]=[(0,r.Lk)("option",{value:"title"},"Заголовок",-1),(0,r.Lk)("option",{value:"subtitle"},"Подзаголовок",-1),(0,r.Lk)("option",{value:"avatar"},"Аватар",-1),(0,r.Lk)("option",{value:"text"},"Текст",-1)]),512),[[o.u1,u.selectedType]])]),(0,r.Lk)("div",h,[n[5]||(n[5]=(0,r.Lk)("label",{for:"value"},"Значение",-1)),(0,r.bo)((0,r.Lk)("textarea",{id:"value",rows:"3","onUpdate:modelValue":n[1]||(n[1]=t=>u.inputText=t)},null,512),[[o.Jo,u.inputText,void 0,{trim:!0}]])]),(0,r.Lk)("button",{class:"btn primary",onClick:n[2]||(n[2]=(...t)=>l.addContent&&l.addContent(...t)),disabled:this.inputText.length<3}," Добавить ",8,y)])}var b={data(){return{selectedType:"title",inputText:""}},computed:{},methods:{addContent(){const t={type:this.selectedType,value:this.inputText};this.$emit("add-content",t),this.inputText=""}},mounted(){},components:{}};const g=(0,p.A)(b,[["render",C]]);var L=g,X=e(4232);const E={class:"card card-w70"},_={key:0},w={key:1},x=["src"],T={key:3};function A(t,n,e,o,a,u){return(0,r.uX)(),(0,r.CE)("div",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.contents,((t,n)=>((0,r.uX)(),(0,r.CE)("div",{key:n},["title"===t.type?((0,r.uX)(),(0,r.CE)("h1",_,(0,X.v_)(t.value),1)):(0,r.Q3)("",!0),"subtitle"===t.type?((0,r.uX)(),(0,r.CE)("h2",w,(0,X.v_)(t.value),1)):(0,r.Q3)("",!0),"avatar"===t.type?((0,r.uX)(),(0,r.CE)("img",{key:2,class:"avatar",src:t.value,alt:"Avatar"},null,8,x)):(0,r.Q3)("",!0),"text"===t.type?((0,r.uX)(),(0,r.CE)("p",T,(0,X.v_)(t.value),1)):(0,r.Q3)("",!0)])))),128))])}var O={props:{contents:{type:Array,required:!0}},data(){return{active:this.contents.value}}};const j=(0,p.A)(O,[["render",A],["__scopeId","data-v-fb4f42ca"]]);var F=j;const Q={class:"loader"};function P(t,n,e,o,a,u){return(0,r.uX)(),(0,r.CE)("div",Q)}var S={data(){return{}},computed:{},methods:{},mounted(){},components:{}};const W=(0,p.A)(S,[["render",P]]);var I=W,K=e(4373);const M={class:"list"},U={class:"list-item"};function V(t,n,e,o,a,u){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("ul",M,[(0,r.Lk)("li",U,[(0,r.Lk)("div",null,[(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,(0,X.v_)(e.comment.name),1)]),(0,r.Lk)("small",null," e-mail: "+(0,X.v_)(e.comment.email),1),(0,r.Lk)("p",null,(0,X.v_)(e.comment.body),1),n[0]||(n[0]=(0,r.Lk)("hr",null,null,-1))])])])])}var q={props:["comment"],data(){return{}},computed:{},methods:{},mounted(){},components:{}};const D=(0,p.A)(q,[["render",V]]);var J=D,$={data(){return{contents:[],active:!0,comments:[],loading:!1,blockComments:!1}},computed:{},methods:{handleAddContent(t){this.contents.push(t),this.active=!1},async loadComments(){try{this.loading=!0;const t=await K.A.get("https://jsonplaceholder.typicode.com/comments?_limit=42");this.comments=t.data,this.loading=!1}catch(t){this.loading=!1,console.error("ОШИБКА ПРИ ПОЛУЧЕНИИ КОММЕНТАРИЕВ",t)}this.blockComments=!0}},mounted(){},components:{FormComponent:L,PreviewComponent:F,appContentDef:v,appLoader:I,appComments:J}};const z=(0,p.A)($,[["render",c]]);var B=z;(0,o.Ef)(B).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var u=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],a=t[s][2];for(var l=!0,c=0;c<o.length;c++)(!1&a||u>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(l=!1,a<u&&(u=a));if(l){t.splice(s--,1);var i=r();void 0!==i&&(n=i)}}return n}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,u=o[0],l=o[1],c=o[2],i=0;if(u.some((function(n){return 0!==t[n]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(c)var s=c(e)}for(n&&n(o);i<u.length;i++)a=u[i],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(s)},o=self["webpackChunkcourse_paper_2"]=self["webpackChunkcourse_paper_2"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(1403)}));o=e.O(o)})();
//# sourceMappingURL=app.304d73df.js.map