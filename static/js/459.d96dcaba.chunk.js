"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{193:function(n,t,r){r.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return o},tx:function(){return v}});var e=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"39ffc17877ae637e34c517b3cb306e6a",language:"en-US"}},i=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",s);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t),s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t),s);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?"),s);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?"),s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},459:function(n,t,r){r.r(t),r.d(t,{default:function(){return j}});var e,a,u,c,s,i=r(861),o=r(439),f=r(757),p=r.n(f),v=r(791),d=r(193),l=r(168),h=r(924),x=r(87),Z=h.ZP.ul(e||(e=(0,l.Z)([""]))),m=h.ZP.li(a||(a=(0,l.Z)(["\n  font-size: 25px;\n  padding-top: 5px;\n"]))),w=(0,h.ZP)(x.rU)(u||(u=(0,l.Z)([""]))),k=r(184),g=function(n){var t=n.movies;return(0,k.jsx)(Z,{children:t.map((function(n){return(0,k.jsx)(m,{children:(0,k.jsx)(w,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})},b=h.ZP.main(c||(c=(0,l.Z)(["\n  padding-left: 20px;\n"]))),y=h.ZP.h2(s||(s=(0,l.Z)(["\n  font-size: 30px;\n"]))),j=function(){var n=(0,v.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Df)();case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,k.jsxs)(b,{children:[(0,k.jsx)(y,{children:"Trending today"}),(0,k.jsx)(g,{movies:r})]})}}}]);
//# sourceMappingURL=459.d96dcaba.chunk.js.map