(function(e){function t(t){for(var o,a,i=t[0],s=t[1],c=t[2],p=0,h=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&h.push(l[a][0]),l[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==l[s]&&(o=!1)}o&&(n.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},l={app:0},n=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/shphuang/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00a7":function(e,t,r){"use strict";r("1041")},"06ec":function(e,t,r){"use strict";r("efce")},1041:function(e,t,r){},"276b":function(e,t,r){},"4bfd":function(e,t,r){"use strict";r("276b")},"55b7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Keep-alive",[t("router-view")],1)],1)},n=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-page"},[t("div",{staticClass:"search-wrap"},[t("el-input",{attrs:{placeholder:"请输入内容",autofocus:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v("网站")]},proxy:!0},{key:"append",fn:function(){return[t("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.onSearch}})]},proxy:!0}]),model:{value:e.wd,callback:function(t){e.wd=t},expression:"wd"}})],1)])},i=[],s=(r("14d9"),r("ade3"));r("d9e2");class c{constructor(e=null){Object(s["a"])(this,"router",void 0),this.router=e}registerRouter(e=null){this.router=e}getRouter(){if(null==this.router)throw new Error("没有注册router，请先注册");return this.router}go(e=1){return this.getRouter().go(e),this}back(e=1){return this.getRouter().go(-e),this}push(e=null){return null==e||this.getRouter().push(e),this}}const u=new c;var p={name:"Search",data(){return{wd:""}},mounted(){},methods:{onSearch:function(){console.log("onSearch"),""!=this.wd&&(u.push({path:"/displayNew?wd="+this.wd}),this.wd="")}}},h=p,d=(r("601b"),r("2877")),f=Object(d["a"])(h,a,i,!1,null,"8a3745c4",null),m=f.exports,v={name:"App",components:{Search:m},data:function(){return{}},methods:{},created(){},mounted(){}},x=v,b=(r("4bfd"),Object(d["a"])(x,l,n,!1,null,null,null)),y=b.exports,w=r("8c4f"),g=function(){var e=this,t=e._self._c;return t("div",[t("el-input",{attrs:{placeholder:"请输入内容",autofocus:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v("网站")]},proxy:!0},{key:"append",fn:function(){return[t("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.displayVideo}})]},proxy:!0}]),model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),t("IframeVideo",{attrs:{url:e.iframeUrl}}),t("div",e._l(e.videoParseUrls,(function(r){return t("el-button",{key:r.id,class:e.active==r.id?"active":"",staticStyle:{width:"100px"},attrs:{type:"info",plain:""},on:{click:function(t){return e.changeParseUrl(r.url,r.id)}}},[e._v(" "+e._s(r.name))])})),1),t("hr")],1)},z=[],j=function(){var e=this,t=e._self._c;return t("div",[e.isShowIframe?t("iframe",{ref:"iframeId",style:e.iframeStyle,attrs:{allowfullscreen:"",allowtransparency:"",frameborder:"0",src:e.url}}):e._e()])},q=[],k={name:"IframeVideo",data:function(){return{iframeStyle:"width: 100%",isShowIframe:!0}},props:{url:String,callback:Function},methods:{reloadIframe:function(){this.isShowIframe=!this.isShowIframe,window.setTimeout(()=>{this.isShowIframe=!this.isShowIframe},0)},adapterIframe:function(){let e=this.$refs.iframeId.offsetWidth,t=e*(9/16);this.iframeStyle=`width:${e}px;height:${t}px`}},created(){},mounted(){this.adapterIframe(),this.adapterIframe()}},U=k,S=Object(d["a"])(U,j,q,!1,null,"2fe0c1bb",null),_=S.exports,P={name:"Display",components:{IframeVideo:_},data:function(){return{active:0,parseUrl:"https://jx.xmflv.com/?url=",diplayList:[{text:"1",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/l0045z5d3s0.html"},{text:"2",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/h0045wjre9t.html"},{text:"3",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/k0045u85whw.html"},{text:"4",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/r0045oqamks.html"},{text:"5",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/p00451sh1ra.html"},{text:"6",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/r00452bpw1n.html"},{text:"7",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/e0045wq8zb4.html"},{text:"8",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/r0045e72evb.html"},{text:"9",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/o0045unuyv0.html"},{text:"10",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/u00453elsdd.html"},{text:"11",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/s0045bd6c3e.html"},{text:"15",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/j0045kheuy2.html"},{text:"16",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/v0045fskqmn.html"},{text:"17",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/i0045kwjaza.html"},{text:"18",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/w0045dgqn8h.html"},{text:"19",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/m0045bi7dl9.html"},{text:"20",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/t00452byn8s.html"},{text:"21",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/v0045ha5f0x.html"},{text:"22",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/y0045tbr46n.html"},{text:"23",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/n0045c15ptf.html"},{text:"24",herf:"https://v.qq.com/x/cover/mzc00200pzl5rvb/k00459u4hr3.html"}],videoParseUrls:[{id:"0",url:"https://jx.xmflv.com/?url=",name:"网站1",isDefault:!0},{id:"1",url:"https://okjx.cc/?url=",name:"网站2",isDefault:!1},{id:"2",url:"https://jx.aidouer.net/?url=",name:"网站3",isDefault:!1},{id:"3",url:"https://jx.jsonplayer.com/player/?url=",name:"网站4",isDefault:!1},{id:"4",url:"https://jx.bozrc.com:4433/player/?url=",name:"网站5",isDefault:!1},{id:"5",url:"https://api.okjx.cc:3389/jx.php?url=",name:"网站6",isDefault:!1}],videoParseUrl:{id:"1",url:"https://jx.xmflv.com/?url=",name:"jx.xmflv.com",isDefault:!0},iframeUrl:"/unvideo.html",url:"https://www.bilibili.com/video/BV18P411M74U/?spm_id_from=333.1007.tianma.2-1-3.click"}},methods:{getVideoParseUrls(){if(this.videoParseUrls.length>0)return this.videoParseUrls;let e=[{id:"0",url:"https://jx.xmflv.com/?url=",name:"网站1",isDefault:!0},{id:"1",url:"https://okjx.cc/?url=",name:"网站2",isDefault:!1},{id:"2",url:"https://jx.aidouer.net/?url=",name:"网站3",isDefault:!1},{id:"3",url:"https://jx.jsonplayer.com/player/?url=",name:"网站4",isDefault:!1},{id:"4",url:"https://jx.bozrc.com:4433/player/?url=",name:"网站5",isDefault:!1},{id:"5",url:"https://api.okjx.cc:3389/jx.php?url=",name:"网站6",isDefault:!1}];return this.videoParseUrls=e,this.videoParseUrls},getVideoParseUrl(e="default"){return this.videoParseUrl},changeVideo:function(e){console.log(e);let t=this.getVideoParseUrl();this.iframeUrl=t.url+e},changeParseUrl:function(e,t){this.parseUrl=e,this.active=t},displayVideo:function(){console.log(this.parseUrl+this.url),this.iframeUrl=this.parseUrl+this.url}},created(){console.log("VideoDisplay create...")},mounted(){this.videoParseUrl=this.getVideoParseUrl()}},D=P,I=(r("89b8"),Object(d["a"])(D,g,z,!1,null,"dd2d8130",null)),O=I.exports,V=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100%",height:"100%"}},[t("el-page-header",{staticClass:"page-header",attrs:{content:"搜索详情"},on:{back:e.goBack}}),t("div",{staticClass:"main-page"},[t("el-input",{attrs:{placeholder:"请输入内容"},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v("网站")]},proxy:!0},{key:"append",fn:function(){return[t("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.onSearch}})]},proxy:!0}]),model:{value:e.wd,callback:function(t){e.wd=t},expression:"wd"}})],1)],1)},M=[],R={name:"SearchList",props:{id:String},data(){return{wd:""}},mounted(){this.wd=this.id},methods:{goBack:function(){u.back(1)},onSearch:function(){}}},B=R,C=(r("00a7"),Object(d["a"])(B,V,M,!1,null,"b1dab142",null)),$=C.exports,T=function(){var e=this,t=e._self._c;return t("div",[t("el-page-header",{staticClass:"page-header",attrs:{content:"播放"},on:{back:e.goBack}}),t("IframeVideo",{ref:"IframeVideo",attrs:{url:e.iframeUrl}}),t("div",{staticStyle:{"box-sizing":"border-box",width:"100%",padding:"0px 5px"}},[t("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},on:{change:e.reload},model:{value:e.parseUrl,callback:function(t){e.parseUrl=t},expression:"parseUrl"}},e._l(e.videoParseUrls,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.url}})})),1),t("el-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-refresh",circle:""},on:{click:e.reload}})],1),t("hr")],1)},L=[],N={name:"DisplayNew",components:{IframeVideo:_},props:{id:String},data:function(){return{active:0,parseUrl:"https://jx.xmflv.com/?url=",videoParseUrls:[{id:"0",url:"https://jx.xmflv.com/?url=",name:"网站1",isDefault:!0},{id:"1",url:"https://okjx.cc/?url=",name:"网站2",isDefault:!1},{id:"2",url:"https://jx.aidouer.net/?url=",name:"网站3",isDefault:!1},{id:"3",url:"https://jx.jsonplayer.com/player/?url=",name:"网站4",isDefault:!1},{id:"4",url:"https://jx.bozrc.com:4433/player/?url=",name:"网站5",isDefault:!1},{id:"5",url:"https://api.okjx.cc:3389/jx.php?url=",name:"网站6",isDefault:!1}],url:""}},methods:{goBack(){u.push({path:"/"})},reload(){this.$refs.IframeVideo.reloadIframe()}},computed:{iframeUrl(){let e=this.parseUrl+this.url;return console.log("displayUrl==>"+e),e}},watch:{id(){console.log("watch.id==>"+this.id),this.url=this.id}},created(){this.url=this.id},beforeMount(){},mounted(){}},J=N,A=(r("06ec"),Object(d["a"])(J,T,L,!1,null,"964b33b4",null)),E=A.exports;o["default"].use(w["a"]);const F=[{path:"/",component:m},{path:"/display",component:O},{path:"/searchList/:id",component:$,props:!0},{path:"/displayNew",component:E,props:e=>({id:e.query.wd})}],K=new w["a"]({routes:F});u.registerRouter(K);var W=r("5c96"),G=r.n(W);r("0fae");o["default"].use(G.a),window.router=K,o["default"].config.productionTip=!1,new o["default"]({router:K,render:e=>e(y)}).$mount("#app")},"601b":function(e,t,r){"use strict";r("55b7")},"89b8":function(e,t,r){"use strict";r("e597")},e597:function(e,t,r){},efce:function(e,t,r){}});
//# sourceMappingURL=app.3438d59c.js.map