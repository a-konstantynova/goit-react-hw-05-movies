(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{44:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(45),i=n.n(r),o=n(1);function a(t){var e=t.children;return Object(o.jsx)("div",{className:i.a.wrapper,children:e})}},45:function(t,e,n){t.exports={wrapper:"WrapperContainer_wrapper__1nrVs"}},46:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d}));var r=n(47),i=n.n(r),o=n(49),a="1659d5b138150865a2bed507fd13cdc7",c="https://api.themoviedb.org/3/";function s(){return u.apply(this,arguments)}function u(){return u=Object(o.a)(i.a.mark((function t(){var e,n,r,o=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(){return s("".concat(c,"trending/movie/week?api_key=").concat(a))}function h(t){return s("".concat(c,"search/movie?api_key=").concat(a,"&query=").concat(t))}function f(t){return s("".concat(c,"movie/").concat(t,"?api_key=").concat(a))}function p(t){return s("".concat(c,"movie/").concat(t,"/credits?api_key=").concat(a))}function d(t){return s("".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(a))}},47:function(t,e,n){t.exports=n(48)},48:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new N(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return D()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,o,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(P([])));x&&x!==n&&r.call(x,o)&&(b=x);var w=y.prototype=g.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return m.prototype=y,s(w,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(O.prototype),s(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),s(w,c,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},49:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return i}))},56:function(t,e,n){t.exports={img:"MovieDetailsPage_img__1cBsq",infoContainer:"MovieDetailsPage_infoContainer__1slLW",descContainer:"MovieDetailsPage_descContainer__2daJx",genre:"MovieDetailsPage_genre__1uPyB",genreTitle:"MovieDetailsPage_genreTitle__tZZJ6",btn:"MovieDetailsPage_btn__1QB0w",list:"MovieDetailsPage_list__2mFhs",itemLink:"MovieDetailsPage_itemLink__bDZCY",textWrap:"MovieDetailsPage_textWrap__1zbT0",container:"MovieDetailsPage_container__3RLPb"}},61:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(7),i=n(0),o=n(2),a=n(6),c=n(44),s=n(46),u=n(10),l=n(56),h=n.n(l),f=n(1),p=Object(i.lazy)((function(){return n.e(0).then(n.bind(null,60))})),d=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,58))}));function v(){var t=Object(o.h)().movieId,e=Object(o.f)(),n=Object(o.g)(),l=Object(i.useState)(null),v=Object(r.a)(l,2),g=v[0],m=v[1],y=Object(i.useState)("idle"),b=Object(r.a)(y,2),j=b[0],x=b[1];Object(i.useEffect)((function(){x("pending"),s.a(t).then(m),x("resolved")}),[t]);return Object(f.jsxs)(c.a,{children:["pending"===j&&Object(f.jsx)(u.a,{}),Object(f.jsx)("button",{type:"button",className:h.a.btn,onClick:function(){e.pathname==="/movies/".concat(t)&&n(-1),e.pathname==="/movies/".concat(t,"/cast")&&n(-2),e.pathname==="/movies/".concat(t,"/reviews")&&n(-2)},children:"Go back"}),g&&Object(f.jsxs)("div",{className:h.a.infoContainer,children:[Object(f.jsx)("img",{className:h.a.img,src:"https://image.tmdb.org/t/p/w300".concat(g.poster_path),alt:g.original_title||g.name}),Object(f.jsxs)("div",{className:h.a.descContainer,children:[Object(f.jsx)("h2",{children:g.original_title||g.name}),Object(f.jsxs)("p",{children:["Average rating: ",g.vote_average]}),Object(f.jsx)("h3",{children:"Overview"}),Object(f.jsx)("p",{children:g.overview}),Object(f.jsx)("h3",{children:"Genres"}),Object(f.jsx)("div",{className:h.a.genre,children:g.genres.map((function(t){return Object(f.jsx)("span",{className:h.a.genreTitle,children:t.name},t.id)}))})]})]}),Object(f.jsxs)("div",{className:h.a.container,children:[Object(f.jsx)("span",{className:h.a.textWrap,children:"Additional information"}),Object(f.jsxs)("ul",{className:h.a.list,children:[Object(f.jsx)("li",{className:h.a.itemLink,children:Object(f.jsx)(a.c,{to:"cast",children:"Cast"})}),Object(f.jsx)("li",{className:h.a.itemLink,children:Object(f.jsx)(a.c,{to:"reviews",children:"Reviews"})})]})]}),Object(f.jsx)(i.Suspense,{fallback:Object(f.jsx)(u.a,{}),children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{path:"/cast",element:Object(f.jsx)(p,{})}),Object(f.jsx)(o.b,{path:"/reviews",element:Object(f.jsx)(d,{})})]})})]})}}}]);
//# sourceMappingURL=movies-details-page.a11e4c23.chunk.js.map