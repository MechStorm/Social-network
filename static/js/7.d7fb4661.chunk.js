(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[7],{235:function(e,n,t){e.exports=t.p+"static/media/userProfile.dc8b1732.png"},307:function(e,n,t){e.exports={usersPage:"Users_usersPage__3JG0O",iconAndStatus:"Users_iconAndStatus__zyjDO",followBtn:"Users_followBtn__fqKGO",followingBtn:"Users_followingBtn__1EPC-",userStatus:"Users_userStatus__1ce9I",userLocation:"Users_userLocation__3RqpU",nextBtn:"Users_nextBtn__rI3kh"}},308:function(e,n,t){e.exports={numbers:"Pagination_numbers__2s51s",activeNum:"Pagination_activeNum__3xNJe",btnPrev:"Pagination_btnPrev__2LxEB",btnNext:"Pagination_btnNext__2PgK_"}},315:function(e,n,t){"use strict";t.r(n);var r=t(23),a=t(24),o=t(26),u=t(25),l=t(67),s=t(27),i=t(0),c=t.n(i),f=t(17),g=t(307),p=t.n(g),m=t(235),v=t.n(m),d=t(10),P=function(e){var n=e.isProcess,t=e.follow,r=e.unfollow,a=e.users;return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.usersPage},c.a.createElement("div",{className:p.a.iconAndStatus},c.a.createElement("div",null,c.a.createElement(d.b,{to:"/profile/"+a.id},c.a.createElement("img",{src:null!=a.photos.small?a.photos.small:v.a,alt:"user"}))),c.a.createElement("div",{className:p.a.followBtn},a.followed?c.a.createElement("button",{className:p.a.followingBtn,disabled:n.some((function(e){return e===a.id})),onClick:function(){r(a.id)}},"Unfollow"):c.a.createElement("button",{className:p.a.followingBtn,disabled:n.some((function(e){return e===a.id})),onClick:function(){t(a.id)}},"Follow"))),c.a.createElement("div",{className:p.a.userStatus},c.a.createElement("div",null,c.a.createElement("p",null,a.name),c.a.createElement("p",null,a.status)),c.a.createElement("div",{className:p.a.userLocation},c.a.createElement("div",null,"u.location.country"),c.a.createElement("div",null,"u.location.city")))))},h=t(60),_=t(308),b=t.n(_),w=function(e){for(var n=e.totalItemCount,t=e.pageSize,r=e.currentPage,a=e.onPageChange,o=e.portionSize,u=void 0===o?10:o,l=Math.ceil(n/t),s=[],f=1;f<=l;f++)s.push(f);var g=Math.ceil(l/u),p=Object(i.useState)(1),m=Object(h.a)(p,2),v=m[0],d=m[1],P=(v-1)*u+1,_=v*u;return c.a.createElement("div",null,c.a.createElement("div",{className:b.a.numbers},v>1&&c.a.createElement("button",{className:b.a.btnPrev,onClick:function(){return d(v-1)}},"Prev"),s.filter((function(e){return e>=P&&e<=_})).map((function(e){return c.a.createElement("span",{className:r===e&&b.a.activeNum,onClick:function(){return a(e)}},e)})),g>v&&c.a.createElement("button",{className:b.a.btnNext,onClick:function(){return d(v+1)}},"Next")))},E=function(e){var n=e.totalCount,t=e.pageSize,r=e.currentPage,a=e.onPageChange,o=e.isProcess,u=e.follow,l=e.unfollow,s=e.users;return c.a.createElement("div",null,c.a.createElement(w,{totalItemCount:n,pageSize:t,currentPage:r,onPageChange:a}),s.map((function(e){return c.a.createElement(P,{users:e,key:e.id,isProcess:o,follow:u,unfollow:l})})))},C=t(84),y=t(53),N=t(19);function S(e,n){return e===n}function O(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function j(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var x=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,u=r.pop(),l=j(r),s=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],n=l.length,t=0;t<n;t++)e.push(l[t].apply(null,arguments));return s.apply(null,e)}));return i.resultFunc=u,i.dependencies=l,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,t=null,r=null;return function(){return O(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var U=x((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),k=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalCount},A=function(e){return e.usersPage.currentPage},B=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.toggleIsFollowingProcess},I=function(e){return e.userAuth.isAuth},J=function(e){function n(e){var t;Object(r.a)(this,n);return(t=Object(o.a)(this,Object(u.a)(n).call(this,e))).onPageChange=function(e){t.props.getUsersTC(e,t.props.pageSize)}.bind(Object(l.a)(t)),t}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsersTC)(e.currentPage,e.pageSize)}},{key:"render",value:function(){var e=this.props,n=e.isFetching,t=e.totalCount,r=e.pageSize,a=e.currentPage,o=e.unfollowing,u=e.following,l=e.users,s=e.isProcess;return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(y.a,null):null,c.a.createElement(E,{totalCount:t,pageSize:r,currentPage:a,onPageChange:this.onPageChange,unfollow:o,follow:u,users:l,isProcess:s}))}}]),n}(c.a.Component);n.default=Object(N.d)(Object(f.b)((function(e){return{users:U(e),pageSize:k(e),totalCount:z(e),currentPage:A(e),isFetching:B(e),isProcess:F(e),isAuth:I(e)}}),{following:C.b,unfollowing:C.d,getUsersTC:C.c}))(J)}}]);
//# sourceMappingURL=7.d7fb4661.chunk.js.map