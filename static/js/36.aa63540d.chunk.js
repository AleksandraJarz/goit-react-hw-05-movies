"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{193:function(t,n,r){r.d(n,{Df:function(){return i},M1:function(){return f},TP:function(){return p},V0:function(){return o},tx:function(){return h}});var e=r(861),a=r(757),c=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"39ffc17877ae637e34c517b3cb306e6a",language:"en-US"}},i=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day",s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(n),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},36:function(t,n,r){r.r(n),r.d(n,{default:function(){return U}});var e,a,c,u,s,i,o,p=r(861),f=r(439),h=r(757),l=r.n(h),d=r(791),v=r(689),x=r(193),m=r(168),Z=r(924),g=Z.ZP.ul(e||(e=(0,m.Z)(["\n  padding-left: 0px;\n  margin-left: 20px;\n"]))),w=Z.ZP.li(a||(a=(0,m.Z)(["\n  width: 200px;\n  list-style: none;\n  border-bottom: 0.5px solid black;\n  padding-block: 10px;\n"]))),b=Z.ZP.h3(c||(c=(0,m.Z)([""]))),k=Z.ZP.img(u||(u=(0,m.Z)(["\n  height: 150px;\n"]))),y=Z.ZP.p(s||(s=(0,m.Z)([""]))),_=Z.ZP.div(i||(i=(0,m.Z)([""]))),j=r(184),P=function(t){var n=t.cast;return(0,j.jsx)(g,{children:n.map((function(t){return(0,j.jsx)(w,{children:(0,j.jsxs)(_,{children:[(0,j.jsx)(k,{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(t.profile_path),alt:t.original_name}),(0,j.jsx)(b,{children:t.name}),(0,j.jsxs)(y,{children:["Character: ",t.character]})]})},t.id)}))})},C=Z.ZP.div(o||(o=(0,m.Z)([""]))),U=function(){var t=(0,v.UO)().movieId,n=(0,d.useState)([]),r=(0,f.Z)(n,2),e=r[0],a=r[1];return(0,d.useEffect)((function(){var n=function(){var n=(0,p.Z)(l().mark((function n(){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.M1)(t);case 3:r=n.sent,a(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,j.jsxs)(j.Fragment,{children:[0!==e.length&&(0,j.jsx)(P,{cast:e}),0===e.length&&(0,j.jsx)(C,{children:"We don't have any cast for this movie."})]})}}}]);
//# sourceMappingURL=36.aa63540d.chunk.js.map