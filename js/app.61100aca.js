(function(t){function e(e){for(var o,i,c=e[0],s=e[1],a=e[2],h=0,p=[];h<c.length;h++)i=c[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,a||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],o=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(o=!1)}o&&(l.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},l=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/shphuang/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var u=s;l.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"00a7":function(t,e,r){"use strict";r("1041")},1041:function(t,e,r){},1317:function(t,e,r){"use strict";r("d273")},"54eb":function(t,e,r){"use strict";r("b5cf")},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{style:t.style,attrs:{id:"app"}},[e("Keep-alive",[e("router-view")],1)],1)},l=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-page"},[e("div",{staticClass:"search-wrap"},[e("el-input",{attrs:{placeholder:"请输入内容",autofocus:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t._v("网站")]},proxy:!0},{key:"append",fn:function(){return[e("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.onSearch}})]},proxy:!0}]),model:{value:t.wd,callback:function(e){t.wd=e},expression:"wd"}})],1)])},c=[],s=(r("14d9"),r("ade3"));r("d9e2");class a{constructor(t=null){Object(s["a"])(this,"router",void 0),this.router=t}registerRouter(t=null){this.router=t}getRouter(){if(null==this.router)throw new Error("没有注册router，请先注册");return this.router}go(t=1){return this.getRouter().go(t),this}back(t=1){return this.getRouter().go(-t),this}push(t=null){return null==t||this.getRouter().push(t),this}}const u=new a;var h={name:"Search",data(){return{wd:""}},mounted(){},methods:{onSearch:function(){u.push({path:"/searchList/"+this.wd})}}},p=h,d=(r("54eb"),r("2877")),f=Object(d["a"])(p,i,c,!1,null,"e5fdd93a",null),m=f.exports,v={name:"App",components:{Search:m},data:function(){return{style:"width: 100%; height: 100%"}},methods:{},created(){},mounted(){let t=window.screen.availHeight;window.screen.availWidth;this.style=`width: 100%; height: ${t}px`}},x=v,b=Object(d["a"])(x,n,l,!1,null,null,null),y=b.exports,w=r("8c4f"),g=function(){var t=this,e=t._self._c;return e("div",[e("el-input",{attrs:{placeholder:"请输入内容",autofocus:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t._v("网站")]},proxy:!0},{key:"append",fn:function(){return[e("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.displayVideo}})]},proxy:!0}]),model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),e("IframeVideo",{attrs:{url:t.iframeUrl}}),e("div",t._l(t.videoParseUrls,(function(r){return e("el-button",{key:r.id,class:t.active==r.id?"active":"",staticStyle:{width:"100px"},attrs:{type:"info",plain:""},on:{click:function(e){return t.changeParseUrl(r.url,r.id)}}},[t._v(" "+t._s(r.name))])})),1),e("hr")],1)},z=[],q=function(){var t=this,e=t._self._c;return e("div",[e("iframe",{style:t.iframeStyle,attrs:{allowfullscreen:"",allowtransparency:"",frameborder:"0",src:t.url}})])},j=[],k={name:"IframeVideo",data:function(){return{iframeStyle:"width: 100%;"}},props:{url:String},created(){console.log("IframeVideo create...")},mounted(){let t=window.screen.width,e=t*(9/16);this.iframeStyle=`width: ${t}px;height:${e}px `}},_=k,U=Object(d["a"])(_,q,j,!1,null,"328c12c2",null),P=U.exports,S={name:"Display",components:{IframeVideo:P},data:function(){return{active:0,parseUrl:"https://jx.xmflv.com/?url=",diplayList:[{text:"1",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/l0045z5d3s0.html"},{text:"2",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/h0045wjre9t.html"},{text:"3",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/k0045u85whw.html"},{text:"4",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/r0045oqamks.html"},{text:"5",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/p00451sh1ra.html"},{text:"6",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/r00452bpw1n.html"},{text:"7",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/e0045wq8zb4.html"},{text:"8",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/r0045e72evb.html"},{text:"9",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/o0045unuyv0.html"},{text:"10",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/u00453elsdd.html"},{text:"11",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/s0045bd6c3e.html"},{text:"15",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/j0045kheuy2.html"},{text:"16",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/v0045fskqmn.html"},{text:"17",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/i0045kwjaza.html"},{text:"18",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/w0045dgqn8h.html"},{text:"19",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/m0045bi7dl9.html"},{text:"20",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/t00452byn8s.html"},{text:"21",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/v0045ha5f0x.html"},{text:"22",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/y0045tbr46n.html"},{text:"23",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/n0045c15ptf.html"},{text:"24",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/k00459u4hr3.html"}],videoParseUrls:[{id:"0",url:"https://jx.xmflv.com/?url=",name:"网站1",isDefault:!0},{id:"1",url:"https://okjx.cc/?url=",name:"网站2",isDefault:!1},{id:"2",url:"https://jx.aidouer.net/?url=",name:"网站3",isDefault:!1},{id:"3",url:"https://jx.jsonplayer.com/player/?url=",name:"网站4",isDefault:!1},{id:"4",url:"https://jx.bozrc.com:4433/player/?url=",name:"网站5",isDefault:!1},{id:"5",url:"https://api.okjx.cc:3389/jx.php?url=",name:"网站6",isDefault:!1}],videoParseUrl:{id:"1",url:"https://jx.xmflv.com/?url=",name:"jx.xmflv.com",isDefault:!0},iframeUrl:"/unvideo.html",url:"https://www.bilibili.com/video/BV18P411M74U/?spm_id_from=333.1007.tianma.2-1-3.click"}},methods:{getVideoParseUrls(){if(this.videoParseUrls.length>0)return this.videoParseUrls;let t=[{id:"0",url:"https://jx.xmflv.com/?url=",name:"网站1",isDefault:!0},{id:"1",url:"https://okjx.cc/?url=",name:"网站2",isDefault:!1},{id:"2",url:"https://jx.aidouer.net/?url=",name:"网站3",isDefault:!1},{id:"3",url:"https://jx.jsonplayer.com/player/?url=",name:"网站4",isDefault:!1},{id:"4",url:"https://jx.bozrc.com:4433/player/?url=",name:"网站5",isDefault:!1},{id:"5",url:"https://api.okjx.cc:3389/jx.php?url=",name:"网站6",isDefault:!1}];return this.videoParseUrls=t,this.videoParseUrls},getVideoParseUrl(t="default"){return this.videoParseUrl},changeVideo:function(t){console.log(t);let e=this.getVideoParseUrl();this.iframeUrl=e.url+t},changeParseUrl:function(t,e){this.parseUrl=t,this.active=e},displayVideo:function(){console.log(this.parseUrl+this.url),this.iframeUrl=this.parseUrl+this.url}},created(){console.log("VideoDisplay create...")},mounted(){this.videoParseUrl=this.getVideoParseUrl()}},O=S,D=(r("1317"),Object(d["a"])(O,g,z,!1,null,"1733f056",null)),V=D.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("el-page-header",{staticClass:"page-header",attrs:{content:"搜索详情"},on:{back:t.goBack}}),e("div",{staticClass:"main-page"},[e("el-input",{attrs:{placeholder:"请输入内容"},scopedSlots:t._u([{key:"prepend",fn:function(){return[t._v("网站")]},proxy:!0},{key:"append",fn:function(){return[e("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.onSearch}})]},proxy:!0}]),model:{value:t.wd,callback:function(e){t.wd=e},expression:"wd"}})],1)],1)},M=[],C={name:"SearchList",props:{id:String},data(){return{wd:""}},mounted(){this.wd=this.id},methods:{goBack:function(){u.back(1)},onSearch:function(){}}},I=C,L=(r("00a7"),Object(d["a"])(I,R,M,!1,null,"b1dab142",null)),$=L.exports;o["default"].use(w["a"]);const B=[{path:"/",component:m},{path:"/display",component:V},{path:"/searchList/:id",component:$,props:!0}],T=new w["a"]({routes:B});u.registerRouter(T);var J=r("5c96"),A=r.n(J);r("0fae");o["default"].use(A.a),window.router=T,o["default"].config.productionTip=!1,new o["default"]({router:T,render:t=>t(y)}).$mount("#app")},b5cf:function(t,e,r){},d273:function(t,e,r){}});
//# sourceMappingURL=app.61100aca.js.map