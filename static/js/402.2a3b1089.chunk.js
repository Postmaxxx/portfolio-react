"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[402],{668:function(e,n,t){t.r(n),t.d(n,{setContactEmail:function(){return s},setContactMessage:function(){return l},setContactName:function(){return i},setContactSubject:function(){return c},setModalImage:function(){return d},setModalMsgBtnText:function(){return E},setModalMsgHeader:function(){return v},setModalMsgText:function(){return _},setModalMsgVisible:function(){return p},setModalSplide:function(){return f},setNavClose:function(){return u},setNavOpen:function(){return a},setSelectedPortfolio:function(){return S},setSelectedPortfolioImage:function(){return m},setTheme:function(){return o}});var r=t(2196),o=function(e){return{type:r.V.SET_THEME,payload:e}},a=function(){return{type:r.V.SET_NAV_OPEN}},u=function(){return{type:r.V.SET_NAV_CLOSE}},i=function(e){return{type:r.V.SET_CONTACT_NAME,payload:e}},s=function(e){return{type:r.V.SET_CONTACT_EMAIL,payload:e}},c=function(e){return{type:r.V.SET_CONTACT_SUBJECT,payload:e}},l=function(e){return{type:r.V.SET_CONTACT_MESSAGE,payload:e}},d=function(e){return{type:r.V.SET_MODAL_IMAGE,payload:e}},f=function(e){return{type:r.V.SET_MODAL_SPLIDE,payload:e}},p=function(e){return{type:r.V.SET_MODALMSG,payload:e}},v=function(e){return{type:r.V.SET_MODALMSG_HEADER,payload:e}},_=function(e){return{type:r.V.SET_MODALMSG_TEXT,payload:e}},E=function(e){return{type:r.V.SET_MODALMSG_BTNTEXT,payload:e}},S=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO,payload:e}},m=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO_IMAGE,payload:e}}},5402:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(2791),o=t(1087),a=t(668),u=t(7781),i=t(9101),s=t(184),c=(0,i.$j)((function(e){return{nav_ham:e.nav_ham,imageMe:e.imagesMe.side,pages:e.pages}}),(function(e){return{setStore:(0,u.DE)(a,e)}}))((function(e){var n=function(){""===e.nav_ham?e.setStore.setNavOpen():e.setStore.setNavClose()},t=function n(t){"nav_opened"===e.nav_ham&&t.clientX>250&&(e.setStore.setNavClose(),document.removeEventListener("click",n))};return(0,r.useEffect)((function(){return"nav_opened"===e.nav_ham&&document.addEventListener("click",t),function(){return document.removeEventListener("click",t)}})),(0,r.useEffect)((function(){var n,t,r=document.querySelector(".page-container"),o=document.querySelector(".side-panel"),a=document.querySelector(".hamburger");"nav_opened"===e.nav_ham?(null===r||void 0===r||null===(n=r.classList)||void 0===n||n.add("nav_opened"),o.classList.add("nav_opened"),a.classList.add("nav_opened")):(null===r||void 0===r||null===(t=r.classList)||void 0===t||t.remove("nav_opened"),o.classList.remove("nav_opened"),a.classList.remove("nav_opened"))}),[e.nav_ham]),(0,r.useMemo)((function(){return(0,s.jsxs)("div",{className:"side-panel",children:[(0,s.jsx)("figure",{children:(0,s.jsx)(o.rU,{to:"/home",children:(0,s.jsx)("img",{src:e.imageMe,alt:"It's me"})})}),(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{className:"site-navigation",children:e.pages.map((function(n,t){return(0,s.jsx)("li",{children:(0,s.jsx)(o.OL,{className:function(e){return e.isActive?"selected":""},onClick:e.setStore.setNavClose,to:n.link,children:n.text})},n.link)}))})}),(0,s.jsxs)("div",{className:"hamburger",onClick:n,children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})]})}),[e.pages])}))}}]);
//# sourceMappingURL=402.2a3b1089.chunk.js.map