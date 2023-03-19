"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[497],{9319:function(e,t,n){var r=n(9439),s=n(2791),o=n(9667),c=n(184);t.Z=function(e){var t=e.link,n=e.alt,i=(0,s.useState)(!1),a=(0,r.Z)(i,2),l=a[0],u=a[1],d=(0,s.useRef)();return(0,c.jsxs)(c.Fragment,{children:[l||(0,c.jsx)(o.Z,{}),(0,c.jsx)("img",{ref:d,src:t,alt:n,onLoad:function(){return u(!0)},style:{display:l?"block":"none"}})]})}},668:function(e,t,n){n.r(t),n.d(t,{setContactEmail:function(){return a},setContactMessage:function(){return u},setContactName:function(){return i},setContactSubject:function(){return l},setModalImage:function(){return d},setModalMsgBtnText:function(){return y},setModalMsgHeader:function(){return m},setModalMsgText:function(){return _},setModalMsgVisible:function(){return p},setModalSplide:function(){return f},setNavClose:function(){return c},setNavOpen:function(){return o},setSelectedPortfolio:function(){return E},setSelectedPortfolioImage:function(){return g},setTheme:function(){return s}});var r=n(2196),s=function(e){return{type:r.V.SET_THEME,payload:e}},o=function(){return{type:r.V.SET_NAV_OPEN}},c=function(){return{type:r.V.SET_NAV_CLOSE}},i=function(e){return{type:r.V.SET_CONTACT_NAME,payload:e}},a=function(e){return{type:r.V.SET_CONTACT_EMAIL,payload:e}},l=function(e){return{type:r.V.SET_CONTACT_SUBJECT,payload:e}},u=function(e){return{type:r.V.SET_CONTACT_MESSAGE,payload:e}},d=function(e){return{type:r.V.SET_MODAL_IMAGE,payload:e}},f=function(e){return{type:r.V.SET_MODAL_SPLIDE,payload:e}},p=function(e){return{type:r.V.SET_MODALMSG,payload:e}},m=function(e){return{type:r.V.SET_MODALMSG_HEADER,payload:e}},_=function(e){return{type:r.V.SET_MODALMSG_TEXT,payload:e}},y=function(e){return{type:r.V.SET_MODALMSG_BTNTEXT,payload:e}},E=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO,payload:e}},g=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO_IMAGE,payload:e}}},7497:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(668),s=n(7781),o=n(9101),c=n(2791),i=(n(8677),n(418)),a=n(9319),l=n(184),u=(0,o.$j)((function(e){return{selected:e.portfolios.selected,selectedImage:e.portfolios.selectedImage,show:e.modalSplide.show,list:e.portfolios.list}}),(function(e){return{setStore:(0,s.DE)(r,e)}}))((function(e){var t=(0,c.useRef)(),n=(0,c.useRef)(),r=(0,c.useRef)(),s=(0,c.useRef)(),o={lazyLoad:!1,perPage:12,gap:10,rewind:!1,pagination:!1,isNavigation:!0,focus:"center",breakpoints:{1600:{perPage:10},1241:{perPage:8},992:{perPage:7},768:{perPage:5},480:{perPage:4}}},u={lazyLoad:!0,type:"fade",rewind:!1,pagination:!1,speed:500,wheel:!0,wheelSleep:300},d=function(){e.setStore.setSelectedPortfolioImage(s.current.index),document.querySelector("body").classList.remove("noscroll"),e.setStore.setModalSplide(!1)},f=function(e){s.current.go(e)};function p(e){"Escape"===e.key&&d(),37===e.keyCode&&f("<"),39===e.keyCode&&f(">")}return(0,c.useEffect)((function(){return s.current=new i.ZP(n.current,o),r.current=new i.ZP(t.current,u),r.current.sync(s.current),r.current.mount(),s.current.mount(),function(){s.current.destroy(),r.current.destroy()}}),[e.selected]),(0,c.useEffect)((function(){return f(e.selectedImage),e.show&&document.addEventListener("keyup",p),e.show&&document.querySelector("body").classList.add("noscroll"),function(){document.removeEventListener("keyup",p)}}),[e.show]),(0,c.useMemo)((function(){return(0,l.jsxs)("div",{className:e.show?"modal-splide__background show":"modal-splide__background",children:[(0,l.jsx)("div",{className:"modal",children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{id:"modalMain",className:"splide",ref:t,children:(0,l.jsx)("div",{className:"splide__track",children:(0,l.jsx)("ul",{className:"splide__list",children:e.list[e.selected].images.map((function(t){return(0,l.jsx)("li",{className:"splide__slide",children:e.show?(0,l.jsx)(a.Z,{link:t.images[t.images.length-1].image,alt:t.descr}):(0,l.jsx)(l.Fragment,{})},t.images[0].image)}))})})}),(0,l.jsx)("div",{id:"modalThumbs",className:"splide",ref:n,children:(0,l.jsx)("div",{className:"splide__track",children:(0,l.jsx)("ul",{className:"splide__list",children:e.list[e.selected].images.map((function(t){return(0,l.jsx)("li",{className:"splide__slide",children:e.show?(0,l.jsx)(a.Z,{link:t.images[0].image,alt:t.descr}):(0,l.jsx)(l.Fragment,{})},t.images[0].image)}))})})})]})})}),(0,l.jsx)("button",{className:"modal__close",onClick:d,children:(0,l.jsx)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg","aria-label":"Close this modal window",children:(0,l.jsx)("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"})})})]})}),[e.show,e.selected])}))},8677:function(){}}]);
//# sourceMappingURL=497.d4b5751f.chunk.js.map