(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(e,t,r){var content=r(259);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("265da9ba",content,!0,{sourceMap:!1})},258:function(e,t,r){"use strict";var n=r(247);r.n(n).a},259:function(e,t,r){(e.exports=r(58)(!1)).push([e.i,"@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.features{display:-webkit-box;display:flex;justify-content:space-around;flex-wrap:wrap;margin:2rem 0}.features>p{padding:8px}.features>.feature{width:calc((100% - 1rem)/3);min-width:260px;margin:.5rem .1rem;align-self:flex-start}.features>.feature>.feature-title{text-align:center;padding:7px 8px 4px;font-size:20px;font-weight:500;color:#43394e}.features>.feature>.desc{text-align:center;color:#4e4e4e;margin:0 1.5rem}.divider{height:3px;margin:.5rem 1.5rem;padding:0;display:block;border:0;-webkit-transition:margin-left .3s cubic-bezier(.4,0,.2,1);transition:margin-left .3s cubic-bezier(.4,0,.2,1);will-change:margin-left}",""])},260:function(e,t,r){"use strict";r.r(t);r(30);var n=r(7),o=r(60),c=r(63),l=r(61),f=r(62),d=r(15),m=r(46),h=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),t}(m.b),v=w=h([Object(m.a)({name:"Home",resource:"Features",data:function(){return{features:[],title:"Home"}},head:function(){return{title:"Jeanne | ".concat(this.title),meta:[{hid:"og-title",property:"og:title",content:"Jeanne | ".concat(this.title)},{hid:"og-url",property:"og:url",content:"https://jeannebot.info"},{hid:"twitter-title",name:"twitter:title",content:"Jeanne | ".concat(this.title)}]}},created:function(){var e=localStorage.getItem("user"),t={writeKey:"mdz26zo4FRZrjbkS"};if(e)try{var r=JSON.parse(e);t.userId=r.id,t.traits={name:r.username,createdAt:(new Date).toISOString()}}catch(e){}var n=document.createElement("script");n.type="text/javascript",n.defer=!0,n.innerHTML='(function() { window.satismeter = window.satismeter || function() {(window.satismeter.q = window.satismeter.q || []).push(arguments);};window.satismeter.l = 1 * new Date();var script = document.createElement("script");var parent = document.getElementsByTagName("script")[0].parentNode;script.async = 1;script.src = "https://app.satismeter.com/satismeter.js";parent.appendChild(script);})(); satismeter('.concat(JSON.stringify(t),");"),document.body.appendChild(n)},beforeMount:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$utils.sleep(1);case 2:return this.$store.commit("updateTitle","Home"),e.prev=3,e.next=6,this.$getResource("features");case 6:this.features=e.sent,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0),this.$utils.alertError(e.t0.message);case 13:case"end":return e.stop()}},e,this,[[3,9]])}));return function(){return e.apply(this,arguments)}}()})],w),y=(r(258),r(33)),component=Object(y.a)(v,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"features"},e._l(e.features,function(t){return r("div",{key:t.title,staticClass:"feature"},[r("p",{staticClass:"feature-title"},[e._v(e._s(t.title))]),e._v(" "),r("hr",{staticClass:"divider"}),e._v(" "),r("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.desc)}})])}),0)])},[],!1,null,null,null);t.default=component.exports}}]);