"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[608],{668:function(e,n,t){t.r(n),t.d(n,{setContactEmail:function(){return l},setContactMessage:function(){return u},setContactName:function(){return a},setContactSubject:function(){return o},setImgLoaded:function(){return m},setModal:function(){return d},setModalDescr:function(){return p},setModalImage:function(){return h},setModalLink:function(){return _},setModalMsgBtnText:function(){return y},setModalMsgHeader:function(){return x},setModalMsgText:function(){return v},setModalMsgVisible:function(){return f},setNavClose:function(){return i},setNavOpen:function(){return c},setSelectedPortfolio:function(){return j},setTheme:function(){return s}});var r=t(2196),s=function(e){return{type:r.V.SET_THEME,payload:e}},c=function(){return{type:r.V.SET_NAV_OPEN}},i=function(){return{type:r.V.SET_NAV_CLOSE}},a=function(e){return{type:r.V.SET_CONTACT_NAME,payload:e}},l=function(e){return{type:r.V.SET_CONTACT_EMAIL,payload:e}},o=function(e){return{type:r.V.SET_CONTACT_SUBJECT,payload:e}},u=function(e){return{type:r.V.SET_CONTACT_MESSAGE,payload:e}},d=function(e){return{type:r.V.SET_MODAL,payload:e}},h=function(e){return{type:r.V.SET_MODAL_IMAGE,payload:e}},p=function(e){return{type:r.V.SET_MODAL_DESCR,payload:e}},_=function(e){return{type:r.V.SET_MODAL_LINK,payload:e}},f=function(e){return{type:r.V.SET_MODALMSG,payload:e}},x=function(e){return{type:r.V.SET_MODALMSG_HEADER,payload:e}},v=function(e){return{type:r.V.SET_MODALMSG_TEXT,payload:e}},y=function(e){return{type:r.V.SET_MODALMSG_BTNTEXT,payload:e}},j=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO,payload:e}},m=function(e){return{type:r.V.SET_IMG_LOADED,payload:e}}},6608:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(668),s=t(7781),c=t(3531),i=t(9439),a=t(2791),l=t(184);var o=function(e){var n=e.skill,t=e.speed,r=(0,a.useState)(0),s=(0,i.Z)(r,2),c=s[0],o=s[1];return(0,a.useEffect)((function(){var e=setInterval((function(){o((function(e){return e<n.percent-.2?e+.1+(1-e/n.percent)*t:n.percent}))}),10);return function(){return clearInterval(e)}}),[]),(0,l.jsxs)("div",{className:"resume__skill",children:[(0,l.jsx)("h5",{children:n.name}),(0,l.jsxs)("div",{className:"skill__graph",children:[(0,l.jsxs)("span",{children:[Math.round(c),"%"]}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"skill__percent-line",style:{width:"".concat(c.toFixed(2),"%")}})})]})]})},u=function(e){var n=e.historyBlock;return(0,l.jsxs)("div",{className:"history__block",children:[(0,l.jsx)("div",{children:(0,l.jsx)("span",{children:n.date})}),(0,l.jsxs)("div",{className:"history__description",children:[(0,l.jsx)("h4",{children:n.header}),n.link?(0,l.jsx)("a",{href:n.link,target:"_blank",children:(0,l.jsx)("span",{children:n.subHeader})}):(0,l.jsx)("span",{children:n.subHeader}),(0,l.jsx)("p",{children:n.text})]})]})},d=t(9123),h=(0,c.$j)((function(e){return{store:e}}),(function(e){return{setStore:(0,s.DE)(r,e)}}))((function(e){return(0,l.jsx)("div",{className:"page-container",children:(0,l.jsxs)("div",{className:"page_resume",children:[(0,l.jsxs)("section",{className:"skills",children:[(0,l.jsxs)("h2",{children:["My skills",(0,l.jsx)("em",{children:"My skills"})]}),(0,l.jsx)("div",{className:"skills__container",children:e.store.skills.map((function(n,t){return(0,l.jsx)(o,{skill:n,speed:e.store.skillFillSpeed},t)}))})]}),(0,l.jsxs)("section",{className:"history",children:[(0,l.jsxs)("h2",{children:["Resume",(0,l.jsx)("em",{children:"Resume"})]}),(0,l.jsxs)("div",{className:"history__section",children:[(0,l.jsxs)("div",{className:"history__header",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,l.jsxs)("g",{children:[(0,l.jsx)("path",{d:"m496,120h-112c0-8.844-7.164-16-16-16v-16c0-26.469-21.531-48-48-48h-128c-26.469,0-48,21.531-48,48v16c-8.836,0-16,7.156-16,16h-112c-8.836,0-16,7.156-16,16v304c0,8.844 7.164,16 16,16h48c0,8.836 7.163,16 16,16h32c8.837,0 16-7.164 16-16h256c0,8.836 7.163,16 16,16h32c8.837,0 16-7.164 16-16h48c8.836,0 16-7.156 16-16v-304c0-8.844-7.164-16-16-16zm-320-32c0-8.828 7.18-16 16-16h128c8.82,0 16,7.172 16,16v16c-8.836,0-16,7.156-16,16h-128c0-8.844-7.164-16-16-16v-16zm304,336h-448v-272h448v272z"}),(0,l.jsx)("path",{d:"m128,376c8.836,0 16-7.156 16-16v-144c0-8.844-7.164-16-16-16s-16,7.156-16,16v144c0,8.844 7.164,16 16,16z"}),(0,l.jsx)("path",{d:"m384,376c8.836,0 16-7.156 16-16v-144c0-8.844-7.164-16-16-16s-16,7.156-16,16v144c0,8.844 7.164,16 16,16z"})]})}),(0,l.jsx)("h3",{children:"Work experience"})]}),(0,l.jsx)("div",{className:"history__content",children:e.store.workExperience.map((function(e,n){return(0,l.jsx)(u,{historyBlock:e},n)}))})]}),(0,l.jsxs)("div",{className:"history__section",children:[(0,l.jsxs)("div",{className:"history__header",children:[(0,l.jsx)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(1.5)"},children:(0,l.jsx)("path",{d:"M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z"})}),(0,l.jsx)("h3",{children:"Education"})]}),(0,l.jsx)("div",{className:"history__content",children:e.store.education.map((function(e,n){return(0,l.jsx)(u,{historyBlock:e},n)}))})]})]}),(0,l.jsx)("a",{className:"link_button",href:d,target:"_blank",children:"Download cv"})]})})}))}}]);
//# sourceMappingURL=608.ff0f87da.chunk.js.map