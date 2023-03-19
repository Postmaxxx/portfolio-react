"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[608],{668:function(e,n,t){t.r(n),t.d(n,{setContactEmail:function(){return a},setContactMessage:function(){return u},setContactName:function(){return o},setContactSubject:function(){return l},setModalImage:function(){return d},setModalMsgBtnText:function(){return x},setModalMsgHeader:function(){return _},setModalMsgText:function(){return p},setModalMsgVisible:function(){return f},setModalSplide:function(){return h},setNavClose:function(){return i},setNavOpen:function(){return c},setSelectedPortfolio:function(){return v},setSelectedPortfolioImage:function(){return m},setTheme:function(){return s}});var r=t(2196),s=function(e){return{type:r.V.SET_THEME,payload:e}},c=function(){return{type:r.V.SET_NAV_OPEN}},i=function(){return{type:r.V.SET_NAV_CLOSE}},o=function(e){return{type:r.V.SET_CONTACT_NAME,payload:e}},a=function(e){return{type:r.V.SET_CONTACT_EMAIL,payload:e}},l=function(e){return{type:r.V.SET_CONTACT_SUBJECT,payload:e}},u=function(e){return{type:r.V.SET_CONTACT_MESSAGE,payload:e}},d=function(e){return{type:r.V.SET_MODAL_IMAGE,payload:e}},h=function(e){return{type:r.V.SET_MODAL_SPLIDE,payload:e}},f=function(e){return{type:r.V.SET_MODALMSG,payload:e}},_=function(e){return{type:r.V.SET_MODALMSG_HEADER,payload:e}},p=function(e){return{type:r.V.SET_MODALMSG_TEXT,payload:e}},x=function(e){return{type:r.V.SET_MODALMSG_BTNTEXT,payload:e}},v=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO,payload:e}},m=function(e){return{type:r.V.SET_SELECTED_PORTFOLIO_IMAGE,payload:e}}},6608:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(668),s=t(7781),c=t(9101),i=t(9439),o=t(2791),a=t(184);var l=function(e){var n=e.name,t=e.percent,r=(0,o.useState)(0),s=(0,i.Z)(r,2),c=s[0],l=s[1];return(0,o.useEffect)((function(){return setTimeout((function(){l(t)}),100),function(){l(0)}}),[]),(0,a.jsxs)("div",{className:"resume__skill",children:[(0,a.jsx)("h5",{children:n}),(0,a.jsxs)("div",{className:"skill__graph",children:[(0,a.jsxs)("span",{className:c?"visible":"",children:[c,"%"]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"skill__percent-line",style:{width:c+"%"}})})]})]})},u=function(e){var n=e.historyBlock;return(0,a.jsxs)("div",{className:"history__block",children:[(0,a.jsx)("div",{children:(0,a.jsx)("span",{children:n.date})}),(0,a.jsxs)("div",{className:"history__description",children:[(0,a.jsx)("h4",{children:n.header}),n.link?(0,a.jsx)("a",{className:"decorated",href:n.link,target:"_blank",rel:"noreferrer",children:n.subHeader}):(0,a.jsx)("span",{children:n.subHeader}),(0,a.jsx)("p",{children:n.text})]})]})},d=t(9123),h=(0,c.$j)((function(e){return{skills:e.skills,workExperience:e.workExperience,education:e.education}}),(function(e){return{setStore:(0,s.DE)(r,e)}}))((function(e){var n=function(e,n){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("show"),n.unobserve(e.target))}))},t={threshold:.4};return(0,o.useEffect)((function(){var e=new IntersectionObserver(n,t),r=document.querySelectorAll(".history .history__block .history__description");return r.forEach((function(n){return e.observe(n)})),function(){r.forEach((function(n){return e.unobserve(n)}))}}),[]),(0,a.jsx)("div",{className:"page-container",children:(0,a.jsxs)("div",{className:"page_resume",children:[(0,a.jsxs)("section",{className:"skills",children:[(0,a.jsxs)("h2",{children:["My skills",(0,a.jsx)("em",{children:"My skills"})]}),(0,a.jsx)("div",{className:"skills__container",children:e.skills.map((function(e){return(0,a.jsx)(l,{name:e.name,percent:e.percent},e.name)}))})]}),(0,a.jsxs)("section",{className:"history",children:[(0,a.jsxs)("h2",{children:["Resume",(0,a.jsx)("em",{children:"Resume"})]}),(0,a.jsxs)("div",{className:"history__section",children:[(0,a.jsxs)("div",{className:"history__header",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,a.jsxs)("g",{children:[(0,a.jsx)("path",{d:"m496,120h-112c0-8.844-7.164-16-16-16v-16c0-26.469-21.531-48-48-48h-128c-26.469,0-48,21.531-48,48v16c-8.836,0-16,7.156-16,16h-112c-8.836,0-16,7.156-16,16v304c0,8.844 7.164,16 16,16h48c0,8.836 7.163,16 16,16h32c8.837,0 16-7.164 16-16h256c0,8.836 7.163,16 16,16h32c8.837,0 16-7.164 16-16h48c8.836,0 16-7.156 16-16v-304c0-8.844-7.164-16-16-16zm-320-32c0-8.828 7.18-16 16-16h128c8.82,0 16,7.172 16,16v16c-8.836,0-16,7.156-16,16h-128c0-8.844-7.164-16-16-16v-16zm304,336h-448v-272h448v272z"}),(0,a.jsx)("path",{d:"m128,376c8.836,0 16-7.156 16-16v-144c0-8.844-7.164-16-16-16s-16,7.156-16,16v144c0,8.844 7.164,16 16,16z"}),(0,a.jsx)("path",{d:"m384,376c8.836,0 16-7.156 16-16v-144c0-8.844-7.164-16-16-16s-16,7.156-16,16v144c0,8.844 7.164,16 16,16z"})]})}),(0,a.jsx)("h3",{children:"Work experience"})]}),(0,a.jsx)("div",{className:"history__content",children:e.workExperience.map((function(e,n){return(0,a.jsx)(u,{historyBlock:e},n)}))})]}),(0,a.jsxs)("div",{className:"history__section",children:[(0,a.jsxs)("div",{className:"history__header",children:[(0,a.jsx)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(1.5)"},children:(0,a.jsx)("path",{d:"M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z"})}),(0,a.jsx)("h3",{children:"Education"})]}),(0,a.jsx)("div",{className:"history__content",children:e.education.map((function(e,n){return(0,a.jsx)(u,{historyBlock:e},n)}))})]})]}),(0,a.jsx)("a",{className:"link_button",href:d,target:"_blank",rel:"noreferrer",children:"Download cv"})]})})}))}}]);
//# sourceMappingURL=608.f7c6470c.chunk.js.map