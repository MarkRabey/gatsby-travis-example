(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0e2Q":function(e,t,a){e.exports=a.p+"static/iphone_6_plus_settings-3b3ac73907cf91475ed2ce364ce2421a.png"},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),o=a("7oih"),r=a("obyI"),c=a.n(r),i=a("dwco"),s=a.n(i),m=function(e){return e.children},d=function(e){Object(l.useEffect)((function(){s.a.polyfill()}),[]);var t=function(t){t.preventDefault();var l=e.onClick,n=void 0===l?function(){}:l,o=0,r=!0,c=e.type,i=e.element,s=e.offset,m=e.timeout;if(c&&i)switch(c){case"class":r=!!(o=document.getElementsByClassName(i)[0]);break;case"id":r=!!(o=document.getElementById(i))}r?a(o,s,m):console.log("Element not found: "+i),n(t)},a=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:l+t,left:0,behavior:"smooth"})}),a):window.scroll({top:l+t,left:0,behavior:"smooth"})};return n.a.createElement(m,null,"object"==typeof e.children?n.a.cloneElement(e.children,{onClick:t}):n.a.createElement("span",{onClick:t},e.children))},f=function(e){var t=Object(l.useState)(!1),a=t[0],o=t[1],r=Object(l.useState)(""),i=r[0],s=r[1],m=Object(l.useState)(0),f=m[0],u=m[1],p=function(e){return o(e)},v=function(){u(window.pageYOffset)};return Object(l.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[]),Object(l.useEffect)((function(){var e=f>300?"navbar-shrink":"";e!==i&&s(e)}),[f,i]),n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+i+" "+(e.nohero?"navbar--no-hero":""),id:"mainNav"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"#page-top"},c.a.siteTitle),n.a.createElement("button",{onClick:function(e){return p(!a)},className:"navbar-toggler navbar-toggler-right "+(a?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":a,"aria-label":"Toggle navigation"},"Menu",n.a.createElement("i",{className:"fas fa-bars"})),n.a.createElement("div",{className:"collapse navbar-collapse "+(a?"show":""),id:"navbarResponsive"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(d,{onClick:function(e){return p(!a)},type:"id",element:"download"},n.a.createElement("a",{className:"nav-link",href:"#download"},"Download"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d,{onClick:function(e){return p(!a)},type:"id",element:"features"},n.a.createElement("a",{className:"nav-link",href:"#features"},"Features"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d,{onClick:function(e){return p(!a)},type:"id",element:"contact"},n.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")))))))},u=a("RXfu"),p=a.n(u),v=a("c5x/"),h=a.n(v),E=a("0e2Q"),b=a.n(E),g={home:p.a,edit:h.a,settings:b.a},y=function(e){var t=e.device,a=e.orientation,l=e.color,o=e.screen;return n.a.createElement("div",{className:"device-container"},n.a.createElement("div",{className:"device-mockup "+t+" "+a+" "+l},n.a.createElement("div",{className:"device"},n.a.createElement("div",{className:"screen"},n.a.createElement("img",{src:g[o],className:"img-fluid",alt:"Screenshot of Ticker on an iPhone"})),n.a.createElement("div",{className:"button"}))))};y.defaultProps={device:"iphone6_plus",orientation:"portrait",color:"white",screen:"home"};var N=y,w=function(e){return n.a.createElement("header",{className:"masthead"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col-lg-7 my-auto"},n.a.createElement("div",{className:"header-content mx-auto"},n.a.createElement("h1",{className:"mb-5"},"Minimalistic countdowns and reminders"),n.a.createElement(d,{type:"id",element:"download"},n.a.createElement("a",{href:"#download",className:"btn btn-outline btn-xl"},"Get Started")))),n.a.createElement("div",{className:"col-lg-5 my-auto"},n.a.createElement(N,null)))))},k=a("JwsL"),x=a("d4CT"),T=a.n(x),S=function(){return n.a.createElement("section",{className:"download bg-primary text-center",id:"download"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement("h2",{className:"section-heading"},"Try it out for yourself!"),n.a.createElement("p",null,"Our app is currently available on iOS devices. Coming soon to Android and Web!"),n.a.createElement("div",{className:"badges"},n.a.createElement("a",{className:"badge-link",href:"/#"},n.a.createElement("img",{src:T.a,alt:""})))))))},C=function(){return n.a.createElement("section",{className:"features",id:"features"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-heading text-center"},n.a.createElement("h2",null,"Set a timer, get a reminder"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 my-auto"},n.a.createElement(N,{color:"black",screen:"edit"})),n.a.createElement("div",{className:"col-lg-8 my-auto"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-screen-smartphone text-primary"}),n.a.createElement("h3",null,"Simple Configuration"),n.a.createElement("p",{className:"text-muted"},"Easily add important dates!"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-camera text-primary"}),n.a.createElement("h3",null,"Flexible Date Format"),n.a.createElement("p",{className:"text-muted"},"Quickly change how dates appear for you!")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-lock-open text-primary"}),n.a.createElement("h3",null,"Flexible Start Dates"),n.a.createElement("p",{className:"text-muted"},"Start displaying countdown progress whenever you want!"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-present text-primary"}),n.a.createElement("h3",null,"Organize Your Countdowns"),n.a.createElement("p",{className:"text-muted"},"Colour code your appointments or events (more colours coming soon!)")))))))))};function O(){return n.a.createElement("ul",{className:"list-inline list-social"},c.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return n.a.createElement("li",{key:a,className:"list-inline-item  "},n.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("i",{className:"fab  "+t})))})))}var X=function(){return n.a.createElement("section",{className:"contact bg-secondary",id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Get Connected"),n.a.createElement(O,null)))};t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(f,null),n.a.createElement(w,null),n.a.createElement(S,null),n.a.createElement(C,null),n.a.createElement(X,null),n.a.createElement(k.a,null))}},RXfu:function(e,t,a){e.exports=a.p+"static/iphone_6_plus_home-389eb6cd1c7d45e4dff6de992b24f055.png"},"c5x/":function(e,t,a){e.exports=a.p+"static/iphone_6_plus_edit-2f7ac8940a20d5bee4703781f15dd680.png"},d4CT:function(e,t,a){e.exports=a.p+"static/app-store-badge-d0558d91063038236b60e3ef71fdc1fd.svg"},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||c,scrollIntoView:l.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=f(this),l=a.getBoundingClientRect(),o=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+o.left-l.left,a.scrollTop+o.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function d(e){var t=s(e,"Y")&&m(e,"Y"),a=s(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}function u(t){var a,l,n,r,c=(o()-t.startTime)/468;r=c=c>1?1:c,a=.5*(1-Math.cos(Math.PI*r)),l=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(u.bind(e,t))}function p(a,l,r){var i,s,m,d,f=o();a===t.body?(i=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,d=n.scroll):(i=a,s=a.scrollLeft,m=a.scrollTop,d=c),u({scrollable:i,method:d,startTime:f,startX:s,startY:m,x:l,y:r})}}}}()},obyI:function(e,t){e.exports={siteTitle:"Ticker",manifestName:"ticker",manifestShortName:"Ticker",manifestStartUrl:"/",manifestBackgroundColor:"#1976d2",manifestThemeColor:"#1976d2",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/MarkRabey"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://linkedin.com/in/markrabey/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/WideAsleepDad"},{icon:"fa-instagram",name:"Facebook",url:"https://instagram.com/WideAsleepDad"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-800d521512ac196475be.js.map