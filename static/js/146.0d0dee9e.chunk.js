"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[146],{146:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(689),c=e(193),i=e(168),o=e(924),u=e(87),s=(0,o.ZP)(u.rU)(r||(r=(0,i.Z)(["\n  font-size: 15px;\n  text-decoration: none;\n  font-weight: 600;\n  color: inherit;\n\n  &:hover {\n    background-color: #ff8800;\n  }\n"]))),f=e(184);function l(){var n=(0,c.Z)("trending/all/day?").filmData,t=(0,a.TH)(),e=n.results;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})]})}},193:function(n,t,e){var r=e(861),a=e(439),c=e(757),i=e.n(c),o=e(340),u=e(791);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";t.Z=function(n){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),c=e[0],s=e[1],f=(0,u.useState)([!1]),l=(0,a.Z)(f,2),d=l[0],h=l[1],p=(0,u.useState)([!1]),v=(0,a.Z)(p,2),m=v[0],Z=v[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.next=3,o.Z.get("".concat(n).concat("api_key=39ffc17877ae637e34c517b3cb306e6a"));case 3:e=t.sent,r=e.data,s(r),h(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(n){Z(!0),h(!1)}))}),[n]),{filmData:c,isLoading:d,error:m}}}}]);
//# sourceMappingURL=146.0d0dee9e.chunk.js.map