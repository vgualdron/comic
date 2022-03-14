(function(t){function e(e){for(var a,c,r=e[0],s=e[1],u=e[2],m=0,d=[];m<r.length;m++)c=r[m],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.19e8d707.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),r={},s=Object(c["a"])(r,o,i,!1,null,null,null),u=s.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comics"},[n("navbar",{on:{showPoints:function(e){t.showModal=!t.showModal}}}),n("div",{staticClass:"is-flex-grow-1 is-flex comics__container"},[n("div",{staticClass:"comics__points-table"},[n("points-table")],1),n("div",{staticClass:"comics__content is-flex-grow-1"},[n("comic")],1)]),t.showModal?n("comic-modal-points",{on:{close:function(e){t.showModal=!t.showModal}}}):t._e()],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar is-fixed-top",class:t.selectedNavTheme,attrs:{id:"navbar"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"#"}},[n("img",{attrs:{src:t.companyLogo,alt:"Comics project",width:"100",height:"28"}})]),n("div",{staticClass:"navbar-burger burger",class:{"is-active":t.active},attrs:{"data-target":"navbarExampleTransparentExample"},on:{click:function(e){t.active=!t.active}}},[n("span"),n("span"),n("span")])]),n("div",{staticClass:"navbar-menu",class:{"is-active":t.active}},[n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"navbar-item",on:{click:t.showPoints}},[n("span",[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-flag-checkered"}}),t._v(" Show table points ")],1)])])])])])])])])},p=[],C=n("4ffd"),b=n.n(C),h={name:"Navbar",data:function(){return{active:!1,companyLogo:b.a,selectedNavTheme:"is-warning"}},methods:{showPoints:function(){this.$emit("showPoints")}}},_=h,v=Object(c["a"])(_,f,p,!1,null,null,null),O=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comics__div max-width"},[n("comic-card")],1)},N=[],P=n("1da1"),T=n("5530"),w=(n("96cf"),n("2f62")),E={PATH:"@module/comics",actions:{FETCH_COMIC:"@actions/fetchComic",UPDATE_CURRENT_NUMBER_COMIC:"@actions/updateCurrentNumberComic",FETCH_POINTS:"@actions/fetchPoints",UPDATE_POINTS:"@actions/updatePoints"},getters:{},mutations:{SET_COMIC:"@mutations/setComic",SET_CURRENT_NUMBER_COMIC:"@mutations/setCurrentNumberComic",SET_POINTS:"@mutations/setPoints",SET_LOADING_COMIC:"@mutations/setLoadingComic"}},j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comics__card card"},[t._m(0),n("div",{staticClass:"comics__card-content card-content"},[t.isLoadingComic?n("loader"):n("div",{staticClass:"comics__content-div"},[n("h5",{staticClass:"title is-5"},[t._v(t._s(t.comic.title))]),n("comic-rating",{staticClass:"comics__rating"}),n("img",{staticClass:"mt-6",attrs:{alt:"Comic image",src:t.comic.img},on:{click:function(e){t.showModal=!t.showModal}}})],1)],1),t.isLoadingComic?t._e():n("footer",{staticClass:"comics__card-footer card-footer is-inline-block  p-2"},[n("comic-pagination")],1),t.showModal?n("comic-modal",{on:{close:function(e){t.showModal=!t.showModal}}}):t._e()],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title title is-4"},[t._v(" Rate comics ")])])}],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pagination",{attrs:{startPage:t.minNumberComic,endPage:t.maxNumberComic,nextPage:t.currentNumberComic+1,previusPage:t.currentNumberComic-1},on:{clickStart:function(e){return t.update(t.minNumberComic)},clickEnd:function(e){return t.update(t.maxNumberComic)},clickRandom:function(e){t.update(Math.floor(Math.random()*t.maxNumberComic))},clickNext:function(e){return t.update(t.currentNumberComic+1)},clickPrevius:function(e){return t.update(t.currentNumberComic-1)}}})],1)},S=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"is-inline-flex pagination is-rounded",attrs:{role:"navigation","aria-label":"pagination"}},[n("ul",{staticClass:"pagination-list"},[n("li",{on:{click:function(e){return t.emit("clickStart")}}},[n("a",{staticClass:"pagination-link"},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-backward-step"}})],1)]),t._m(0),n("li",{on:{click:function(e){return t.emit("clickPrevius")}}},[n("a",{staticClass:"pagination-link"},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-caret-left"}})],1)]),n("li",{on:{click:function(e){return t.emit("clickRandom")}}},[n("a",{staticClass:"pagination-link"},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-shuffle"}})],1)]),n("li",{on:{click:function(e){return t.emit("clickNext")}}},[n("a",{staticClass:"pagination-link"},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-caret-right"}})],1)]),t._m(1),n("li",{on:{click:function(e){return t.emit("clickEnd")}}},[n("a",{staticClass:"pagination-link"},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-forward-step"}})],1)])])])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"pagination-ellipsis"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"pagination-ellipsis"})])}],R=(n("a9e3"),{name:"Pagination",data:function(){return{}},props:{startPage:Number,endPage:Number,previusPage:Number,nextPage:Number},methods:{emit:function(t){this.$emit(t)}}}),y=R,A=Object(c["a"])(y,k,I,!1,null,null,null),H=A.exports,$={name:"ComicPagination",components:{Pagination:H},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["minNumberComic","maxNumberComic","currentNumberComic"])),data:function(){return{}},methods:Object(T["a"])(Object(T["a"])({},Object(w["b"])(E.PATH,{updateCurrentNumberComic:E.actions.UPDATE_CURRENT_NUMBER_COMIC,fetchComic:E.actions.FETCH_COMIC})),{},{update:function(t){t<=this.maxNumberComic&&t>=this.minNumberComic&&(this.updateCurrentNumberComic(t),this.fetchComic())}})},U=$,L=Object(c["a"])(U,M,S,!1,null,null,null),F=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("rating",{attrs:{items:t.items,legend:"Rating:"},on:{change:t.update},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}):t._e()},B=[],G=n("0a2e"),J={name:"ComicRating",components:{Rating:G["a"]},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["minNumberComic","maxNumberComic","comic"])),data:function(){return{show:!0,value:0,items:[{title:"5 Stars",value:5},{title:"4 Stars",value:4},{title:"3 Stars",value:3},{title:"2 Stars",value:2},{title:"1 Star",value:1}]}},methods:Object(T["a"])(Object(T["a"])({},Object(w["b"])(E.PATH,{updateCurrentNumberComic:E.actions.UPDATE_CURRENT_NUMBER_COMIC,fetchComic:E.actions.FETCH_COMIC,updatePoints:E.actions.UPDATE_POINTS})),{},{update:function(t){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=t,e.updatePoints({path:"comics",data:Object(T["a"])(Object(T["a"])({},e.comic),{},{points:t})}),e.updateCurrentNumberComic(Math.floor(Math.random()*e.maxNumberComic)),e.show=!1,n.next=6,e.fetchComic();case 6:e.value=0,e.show=!0;case 8:case"end":return n.stop()}}),n)})))()}})},V=J,q=Object(c["a"])(V,D,B,!1,null,null,null),z=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{on:{close:t.close},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",{staticClass:"image"},[n("img",{attrs:{src:t.comic.img,alt:""}})])]},proxy:!0}])})},Q=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background",on:{click:t.close}}),n("div",{staticClass:"modal-content",staticStyle:{width:"auto"}},[t._t("content")],2),n("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.close}})])},X=[],Y={name:"Modal",data:function(){return{}},methods:{close:function(){this.$emit("close")}}},Z=Y,tt=Object(c["a"])(Z,W,X,!1,null,null,null),et=tt.exports,nt={name:"ComicModal",data:function(){return{}},components:{Modal:et},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["comic"])),methods:{close:function(){this.$emit("close")}}},at=nt,ot=Object(c["a"])(at,K,Q,!1,null,null,null),it=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("figure",{staticClass:"loader image is-128x128"}),n("p",[t._v(" Loading ")])])}],st={name:"Loader",data:function(){return{}},props:{},methods:{}},ut=st,lt=Object(c["a"])(ut,ct,rt,!1,null,null,null),mt=lt.exports,dt={name:"ComicCard",data:function(){return{showModal:!1}},components:{ComicPagination:F,ComicRating:z,Loader:mt,ComicModal:it},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["comic","isLoadingComic"])),methods:{}},ft=dt,pt=Object(c["a"])(ft,j,x,!1,null,null,null),Ct=pt.exports,bt={name:"Comic",components:{ComicCard:Ct},props:{},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["comic"])),mounted:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchComic();case 2:t.fetchPoints("comics");case 3:case"end":return e.stop()}}),e)})))()},methods:Object(T["a"])({},Object(w["b"])(E.PATH,{fetchComic:E.actions.FETCH_COMIC,fetchPoints:E.actions.FETCH_POINTS}))},ht=bt,_t=Object(c["a"])(ht,g,N,!1,null,null,null),vt=_t.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t.points&&t.points.length>0?n("v-table",{attrs:{headers:t.headers,rows:t.points,showHeadersInFooter:!0,id:"tablePoints"}}):n("notification",{attrs:{text:"Not found data."}})],1)},gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title title is-4"},[t._v(" General rating ")])])}],Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("thead",[n("tr",t._l(t.headers,(function(e,a){return n("th",{key:t.id+"_header_"+a},[t._v(" "+t._s(e.label)+" ")])})),0)]),t.showHeadersInFooter?n("tfoot",[n("tr",t._l(t.headers,(function(e,a){return n("th",{key:t.id+"_footer_"+a},[t._v(" "+t._s(e.label)+" ")])})),0)]):t._e(),n("tbody",t._l(t.rows,(function(e,a){return n("tr",{key:t.id+"_row_"+a},t._l(t.headers,(function(a,o){return n("td",{key:t.id+"_td_"+o},[t._v(" "+t._s(e[a.field])+" ")])})),0)})),0)])},Pt=[],Tt={name:"Table",data:function(){return{}},components:{},props:{id:String,headers:Array,rows:Array,showHeadersInFooter:Boolean},methods:{}},wt=Tt,Et=Object(c["a"])(wt,Nt,Pt,!1,null,null,null),jt=Et.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[t._v(" "+t._s(t.text)+" ")])},Mt=[],St={name:"Notification",data:function(){return{showNotification:!0}},props:{text:String},methods:{}},kt=St,It=Object(c["a"])(kt,xt,Mt,!1,null,null,null),Rt=It.exports,yt={name:"PointsTable",components:{VTable:jt,Notification:Rt},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["points"])),data:function(){return{headers:[{field:"num",label:"Number"},{field:"title",label:"Name"},{field:"points",label:"Points"}]}},methods:Object(T["a"])(Object(T["a"])({},Object(w["b"])(E.PATH,{updateCurrentNumberComic:E.actions.UPDATE_CURRENT_NUMBER_COMIC,fetchComic:E.actions.FETCH_COMIC})),{},{update:function(t){t<=this.maxNumberComic&&t>=this.minNumberComic&&(this.updateCurrentNumberComic(t),this.fetchComic())}})},At=yt,Ht=Object(c["a"])(At,Ot,gt,!1,null,null,null),$t=Ht.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{on:{close:t.close},scopedSlots:t._u([{key:"content",fn:function(){return[n("points-table")]},proxy:!0}])})},Lt=[],Ft={name:"ComicModalPoints",data:function(){return{}},components:{Modal:et,PointsTable:$t},computed:Object(T["a"])({},Object(w["c"])(E.PATH,["comic"])),methods:{close:function(){this.$emit("close")}}},Dt=Ft,Bt=Object(c["a"])(Dt,Ut,Lt,!1,null,null,null),Gt=Bt.exports,Jt={name:"Home",data:function(){return{showModal:!1}},components:{Navbar:O,Comic:vt,PointsTable:$t,ComicModalPoints:Gt}},Vt=Jt,qt=Object(c["a"])(Vt,m,d,!1,null,null,null),zt=qt.exports,Kt=[{path:"/",component:zt}];a["a"].use(l["a"]);var Qt,Wt,Xt=new l["a"]({routes:Kt}),Yt=Xt,Zt=n("ade3"),te={minNumberComic:1,maxNumberComic:2592,currentNumberComic:1,comic:{num:1},points:[],isLoadingComic:!1},ee=(n("99af"),n("bc3a")),ne=n.n(ee),ae=(n("7db0"),n("d3b7"),n("c740"),n("4e82"),n("e9c4"),function(t){var e=JSON.parse(localStorage.getItem(t));return e}),oe=function(t){var e=t.path,n=t.data,a=ae(e)?ae(e):[],o=a.find((function(t){return t.num==n.num}));if(o){var i=a.findIndex((function(t){return t.num==n.num}));a[i]=Object(T["a"])(Object(T["a"])({},o),{},{points:o.points+n.points})}else a.push(n);return a.sort((function(t,e){return parseFloat(e.points)-parseFloat(t.points)})),localStorage.setItem(e,JSON.stringify(a)),JSON.parse(localStorage.getItem(e))},ie={fetchComic:function(t){var e=t.number;return ne()({url:"".concat("https://novumcolombia.com/proxy.php","/").concat(e,"/info.0.json?number=").concat(e),method:"GET"})},fetchPoints:function(t){return ae(t)},addPoints:function(t){var e=t.path,n=t.data;return oe({data:n,path:e})}},ce=(Qt={},Object(Zt["a"])(Qt,E.actions.FETCH_COMIC,(function(t){return Object(P["a"])(regeneratorRuntime.mark((function e(){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,e.prev=1,n(E.mutations.SET_LOADING_COMIC,!0),o={number:a.currentNumberComic},e.next=6,ie.fetchComic(o);case 6:i=e.sent,n(E.mutations.SET_COMIC,i.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.error(e.t0);case 13:return e.prev=13,n(E.mutations.SET_LOADING_COMIC,!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()})),Object(Zt["a"])(Qt,E.actions.UPDATE_CURRENT_NUMBER_COMIC,(function(t,e){var n=t.commit;n(E.mutations.SET_CURRENT_NUMBER_COMIC,e)})),Object(Zt["a"])(Qt,E.actions.FETCH_POINTS,(function(t,e){return Object(P["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,ie.fetchPoints(e);case 4:o=n.sent,a(E.mutations.SET_POINTS,o),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()})),Object(Zt["a"])(Qt,E.actions.UPDATE_POINTS,(function(t,e){return Object(P["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,ie.addPoints(e);case 4:o=n.sent,a(E.mutations.SET_POINTS,o),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()})),Qt),re={},se=(Wt={},Object(Zt["a"])(Wt,E.mutations.SET_COMIC,(function(t,e){t.comic=e})),Object(Zt["a"])(Wt,E.mutations.SET_CURRENT_NUMBER_COMIC,(function(t,e){t.currentNumberComic=e})),Object(Zt["a"])(Wt,E.mutations.SET_POINTS,(function(t,e){t.points=e})),Object(Zt["a"])(Wt,E.mutations.SET_LOADING_COMIC,(function(t,e){t.isLoadingComic=e})),Wt),ue={namespaced:!0,state:te,actions:ce,getters:re,mutations:se},le=E.PATH;a["a"].use(w["a"]);var me=new w["a"].Store({modules:Object(Zt["a"])({},le,ue)});n("c1c3"),n("e27f"),a["a"].config.productionTip=!1,new a["a"]({router:Yt,store:me,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},c1c3:function(t,e,n){},e27f:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=n("ecee"),i=n("c074"),c=n("ad3d");o["c"].add(i["f"]),o["c"].add(i["c"]),o["c"].add(i["b"]),o["c"].add(i["a"]),o["c"].add(i["e"]),o["c"].add(i["g"]),o["c"].add(i["d"]),a["a"].component("font-awesome-icon",c["a"])}});
//# sourceMappingURL=app.5f93abf8.js.map