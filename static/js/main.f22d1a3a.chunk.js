(this.webpackJsonpvanhack=this.webpackJsonpvanhack||[]).push([[0],{56:function(e,a,t){e.exports=t(87)},61:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),o=(t(61),t(50)),i=t(27),s=t.n(i),u=t(28),m=t(49),p=t(42),f=t(43),E=t.n(f),d=function(e){return"https://api-vanhack-prod.azurewebsites.net/v1/job/search/full/?MaxResultCount=".concat(10,"&SkipCount=").concat(e)},v=function(e){return"https://vanhack.com/platform/#/jobs/".concat(e)},h=function(e,a){return a||e||null},g=[],y=function(){var e=Object(p.a)(s.a.mark((function e(){var a,t,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,E.a.get(d(a));case 3:if(t=e.sent,n=t.data.result.items,g.push.apply(g,Object(m.a)(n.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{link:v(e.id),salary:h(e.salaryRangeStart,e.salaryRangeEnd)})})))),10!==n.length){e.next=9;break}return e.next=9,y(a+10);case 9:return e.abrupt("return",g.sort((function(e,a){return e.country<a.country?-1:1})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=y,k=t(103),x=t(104),w=t(105),j=t(106),B=t(107),O=t(48),N=t.n(O),C=t(101),T={primary:"#0675ce"},S=Object(C.a)({appBar:{backgroundColor:T.primary},features:{position:"absolute",right:"50px"}}),I=function(){var e=S();return r.a.createElement(k.a,{position:"fixed",color:"primary",className:e.appBar},r.a.createElement(x.a,null,r.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(N.a,null)),r.a.createElement(j.a,{variant:"h6"},"Van Hack"),r.a.createElement(B.a,{color:"inherit"},"Inicio")))},z=function(){return r.a.createElement(I,null)},D=t(108),H=t(109),R=Object(C.a)({spaceTop:{marginTop:"50px"}}),F=function(e){var a=e.children,t=e.fetchingData,n=R();return t?r.a.createElement(D.a,{size:150,style:{marginTop:"25%"}}):r.a.createElement(H.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"center",className:n.spaceTop},a)},J=function(e){var a=e.children,t=e.fetchingData;return r.a.createElement(F,{fetchingData:t},a)},M=function(e){var a=e.children,t=e.onClick;return r.a.createElement(H.a,{item:!0,xs:12,sm:3,onClick:t},a)},U=t(110),W=t(111),A=t(112),V=t(113),$=t(117),q=t(115),G=Object(C.a)({spaceTop:{marginTop:"40px"},spaceBottom:{marginBottom:"16px"},spacedBetween:{margin:"2px"}}),K=function(e){var a=e.country,t=e.city,n=e.currency,c=e.salary,l=e.link,o=e.positionName,i=e.mustHaveSkills,s=e.niceToHaveSkills,u=e.jump,m=G();return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement(H.a,{direction:"row",justify:"flex-start",alignItems:"center",xs:12,className:m.spaceTop},r.a.createElement(H.a,{item:!0,xs:3},r.a.createElement(j.a,{variant:"h3",gutterBottom:!0},a))),r.a.createElement(M,{onClick:function(){return window.open(l)}},r.a.createElement(U.a,null,r.a.createElement(W.a,null,r.a.createElement(A.a,null,r.a.createElement(H.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(H.a,{item:!0,xs:12,sm:6},r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("b",null,t))),r.a.createElement(H.a,{item:!0,xs:12,sm:6},r.a.createElement("div",null,c?r.a.createElement("b",null,c," ",n):"Not informed")),r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"middle",className:m.spaceBottom}),o),r.a.createElement(H.a,{item:!0,xs:12},null===i||void 0===i?void 0:i.map((function(e,a){var t=e.name;return r.a.createElement($.a,{className:m.spacedBetween,key:a,size:"small",avatar:r.a.createElement(q.a,null,t[0].toUpperCase()),label:t,color:"secondary"})})),null===s||void 0===s?void 0:s.map((function(e,a){var t=e.name;return r.a.createElement($.a,{className:m.spacedBetween,key:a,size:"small",avatar:r.a.createElement(q.a,null,t[0].toUpperCase()),label:t,color:"secondary",variant:"outlined"})})))))))))},L=t(114),P=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){b().then(c)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(L.a,null,r.a.createElement(J,{fetchingData:0===t.length},t.map((function(e,a){return r.a.createElement(K,Object.assign({key:a,jump:0===a||a>0&&e.country!==t[a-1].country},e))})))))};t(86);var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.f22d1a3a.chunk.js.map