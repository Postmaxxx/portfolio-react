"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[461],{668:function(t,e,n){n.r(e),n.d(e,{setContactEmail:function(){return i},setContactMessage:function(){return d},setContactName:function(){return a},setContactSubject:function(){return l},setImgLoaded:function(){return M},setModal:function(){return s},setModalDescr:function(){return E},setModalImage:function(){return f},setModalLink:function(){return p},setModalMsgBtnText:function(){return S},setModalMsgHeader:function(){return y},setModalMsgText:function(){return T},setModalMsgVisible:function(){return _},setNavClose:function(){return u},setNavOpen:function(){return c},setSelectedPortfolio:function(){return m},setTheme:function(){return o}});var r=n(2196),o=function(t){return{type:r.V.SET_THEME,payload:t}},c=function(){return{type:r.V.SET_NAV_OPEN}},u=function(){return{type:r.V.SET_NAV_CLOSE}},a=function(t){return{type:r.V.SET_CONTACT_NAME,payload:t}},i=function(t){return{type:r.V.SET_CONTACT_EMAIL,payload:t}},l=function(t){return{type:r.V.SET_CONTACT_SUBJECT,payload:t}},d=function(t){return{type:r.V.SET_CONTACT_MESSAGE,payload:t}},s=function(t){return{type:r.V.SET_MODAL,payload:t}},f=function(t){return{type:r.V.SET_MODAL_IMAGE,payload:t}},E=function(t){return{type:r.V.SET_MODAL_DESCR,payload:t}},p=function(t){return{type:r.V.SET_MODAL_LINK,payload:t}},_=function(t){return{type:r.V.SET_MODALMSG,payload:t}},y=function(t){return{type:r.V.SET_MODALMSG_HEADER,payload:t}},T=function(t){return{type:r.V.SET_MODALMSG_TEXT,payload:t}},S=function(t){return{type:r.V.SET_MODALMSG_BTNTEXT,payload:t}},m=function(t){return{type:r.V.SET_SELECTED_PORTFOLIO,payload:t}},M=function(t){return{type:r.V.SET_IMG_LOADED,payload:t}}},8461:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(668),o=n(7781),c=n(3531),u=n(2791),a=n(9966),i=n(3258),l=(n(8677),n(184)),d=(0,c.$j)((function(t){return{store:t}}),(function(t){return{setStore:(0,o.DE)(r,t)}}))((function(t){var e=function(){t.setStore.setModal(!1)},n=function(t){"IMG"!==t.currentTarget.tagName&&e()};return(0,u.useLayoutEffect)((function(){var t=document.querySelector(".modal__background");i.Z.getState().modal?t.classList.add("show"):t.classList.remove("show")}),[i.Z.getState().modal]),(0,u.useLayoutEffect)((function(){document.querySelector(".modal__background").addEventListener("click",(function(t){return t.target===t.currentTarget&&e()})),document.addEventListener("keydown",(function(t){return"Escape"===t.key&&e()}));var t=document.querySelector(".modal").childNodes[0].childNodes[0],n=document.createElement("img");return t.innerHTML=(0,a.Z)(),n.onload=function(){null===t||void 0===t||t.replaceChildren(n)},n.src=i.Z.getState().modalImage,n.alt=i.Z.getState().modalDescr,function(){document.querySelector(".modal__background").removeEventListener("click",(function(t){return t.target===t.currentTarget&&e()})),document.removeEventListener("keydown",(function(t){return"Escape"===t.key&&e()}))}}),[i.Z.getState().modalImage]),(0,l.jsxs)("div",{className:"modal__background",onClick:n,children:[(0,l.jsx)("div",{className:"modal",children:(0,l.jsx)("div",{onClick:n,children:(0,l.jsx)("div",{onClick:n,children:(0,l.jsx)("img",{src:"",alt:""})})})}),(0,l.jsx)("div",{className:"modal__close",children:(0,l.jsx)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",onClick:e,"aria-label":"Close this modal window",children:(0,l.jsx)("path",{onClick:e,d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"})})})]})}))},8677:function(){}}]);
//# sourceMappingURL=461.65deddc1.chunk.js.map