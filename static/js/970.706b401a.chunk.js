"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[970],{668:function(e,n,c){c.r(n),c.d(n,{setContactEmail:function(){return l},setContactMessage:function(){return d},setContactName:function(){return i},setContactSubject:function(){return o},setImgLoaded:function(){return M},setModal:function(){return u},setModalDescr:function(){return m},setModalImage:function(){return h},setModalLink:function(){return p},setModalMsgBtnText:function(){return g},setModalMsgHeader:function(){return f},setModalMsgText:function(){return x},setModalMsgVisible:function(){return v},setNavClose:function(){return a},setNavOpen:function(){return r},setSelectedPortfolio:function(){return j},setTheme:function(){return s}});var t=c(2196),s=function(e){return{type:t.V.SET_THEME,payload:e}},r=function(){return{type:t.V.SET_NAV_OPEN}},a=function(){return{type:t.V.SET_NAV_CLOSE}},i=function(e){return{type:t.V.SET_CONTACT_NAME,payload:e}},l=function(e){return{type:t.V.SET_CONTACT_EMAIL,payload:e}},o=function(e){return{type:t.V.SET_CONTACT_SUBJECT,payload:e}},d=function(e){return{type:t.V.SET_CONTACT_MESSAGE,payload:e}},u=function(e){return{type:t.V.SET_MODAL,payload:e}},h=function(e){return{type:t.V.SET_MODAL_IMAGE,payload:e}},m=function(e){return{type:t.V.SET_MODAL_DESCR,payload:e}},p=function(e){return{type:t.V.SET_MODAL_LINK,payload:e}},v=function(e){return{type:t.V.SET_MODALMSG,payload:e}},f=function(e){return{type:t.V.SET_MODALMSG_HEADER,payload:e}},x=function(e){return{type:t.V.SET_MODALMSG_TEXT,payload:e}},g=function(e){return{type:t.V.SET_MODALMSG_BTNTEXT,payload:e}},j=function(e){return{type:t.V.SET_SELECTED_PORTFOLIO,payload:e}},M=function(e){return{type:t.V.SET_IMG_LOADED,payload:e}}},1970:function(e,n,c){c.r(n),c.d(n,{default:function(){return p}});var t=c(668),s=c(7781),r=c(3531),a=c(2791),i=c(9712),l=c(3258),o=(c(6068),c(184)),d=(0,r.$j)((function(e){return{store:e}}),(function(e){return{setStore:(0,s.DE)(t,e)}}))((function(e){return(0,a.useEffect)((function(){var n="dark"===l.Z.getState().theme?"night":"day",c=function(c){return c.addEventListener("click",(function(){return c=l.Z.getState().imagesMe[n].images.slice(-1)[0].image,t=l.Z.getState().imagesMe[n].descr,e.setStore.setModalImage(c),e.setStore.setModalDescr(t),void e.setStore.setModal(!0);var c,t}))};!function(e){var n,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,s=document.querySelector(e),r=document.createElement("img");s.innerHTML=String(i.Z),r.onload=function(){null===s||void 0===s||s.replaceChildren(r),t(null===s||void 0===s?void 0:s.querySelector("img"))},r.src=null===(n=c.find((function(e){return e.width>=(null===s||void 0===s?void 0:s.offsetWidth)})))||void 0===n?void 0:n.image}("#imageMe",l.Z.getState().imagesMe[n].images,(function(e){return c(e)}))}),[l.Z.getState().theme]),(0,o.jsxs)("div",{className:"about__container",children:[(0,o.jsx)("div",{className:"img-container",id:"imageMe"}),(0,o.jsxs)("div",{className:"descr",children:[(0,o.jsxs)("h3",{children:["I am ",(0,o.jsx)("em",{children:"Postnikov Max"})]}),(0,o.jsx)("p",{children:"Frontend Developer with over 4 year of experience in successfully creating and maintaining web sites and components supported by more than 10 years IT background."}),(0,o.jsx)("p",{children:"I am experience working with clients ranging from homepage owners to well-organized business with up to 10.000 visitors per day."}),(0,o.jsx)("ul",{children:e.store.me.map((function(e,n){return(0,o.jsxs)("li",{children:[(0,o.jsx)("b",{children:e.descr}),e.value]},n)}))}),(0,o.jsx)("a",{className:"link_button",href:e.store.resumeDoc,target:"_blank",children:"Download cv"})]})]})})),u=function(){return(0,o.jsxs)("div",{className:"services__container",children:[(0,o.jsxs)("div",{className:"service",children:[(0,o.jsxs)("svg",{className:"logo-design",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 70.39",children:[(0,o.jsx)("defs",{}),(0,o.jsx)("title",{children:"website-design"}),(0,o.jsx)("path",{className:"design-1",d:"M16.3,0H106a2.15,2.15,0,0,1,2.14,2.14V39.52l-3.36-2.27V8.91h-87V61.35h87V55.77l3.36,1.51v5.19a2.19,2.19,0,0,1-.39,1.23h11.76a3.35,3.35,0,0,1,0,6.69H3.35a3.35,3.35,0,1,1,0-6.69h11.2a2.12,2.12,0,0,1-.39-1.23V2.14A2.14,2.14,0,0,1,16.3,0ZM28.74,3.45a1.29,1.29,0,1,1-1.29,1.29,1.29,1.29,0,0,1,1.29-1.29Zm-4.51,0a1.29,1.29,0,1,1-1.29,1.29,1.29,1.29,0,0,1,1.29-1.29Zm-4.51,0a1.29,1.29,0,1,1-1.29,1.29,1.29,1.29,0,0,1,1.29-1.29Zm38.2,62h7a1.2,1.2,0,0,1,1.2,1.2h0a1.2,1.2,0,0,1-1.2,1.2h-7a1.2,1.2,0,0,1-1.2-1.2h0a1.2,1.2,0,0,1,1.2-1.2Z"}),(0,o.jsx)("path",{className:"design-2",d:"M37.25,45.05c-.92,0-.92-3.42,0-3.42H74.17a10.55,10.55,0,0,0,5.17,1.82,11,11,0,0,0,4.14-.37l1.89,2Zm-11.89,0c-.91,0-.91-3.42,0-3.42H34c.91,0,.91,3.42,0,3.42Zm-.29-7.15c-.92,0-.92-3.42,0-3.42H33.7c.91,0,.91,3.42,0,3.42Zm12.18,0c-.92,0-.92-3.42,0-3.42H69.3l.1.22c.51,1.1,1,2.18,1.59,3.2Z"}),(0,o.jsx)("path",{className:"design-3",d:"M78.16,13h17A2.77,2.77,0,0,1,98,15.73V26.58a2.77,2.77,0,0,1-2.76,2.76H89.51a11.07,11.07,0,0,0-1.75-2.49A15.21,15.21,0,0,0,80,22.55a21.7,21.7,0,0,0-4.62-.5V15.73A2.77,2.77,0,0,1,78.16,13Z"}),(0,o.jsx)("path",{className:"design-4",d:"M52.68,13h17a2.77,2.77,0,0,1,2.75,2.76v6.45c-1.39.14-2.67.34-3.74.54A4.53,4.53,0,0,0,65.1,28a4.4,4.4,0,0,0,.48,1.36H52.68a2.76,2.76,0,0,1-2.75-2.76V15.73A2.76,2.76,0,0,1,52.68,13Z"}),(0,o.jsx)("path",{className:"design-5",d:"M27.2,13h17A2.77,2.77,0,0,1,47,15.73V26.58a2.78,2.78,0,0,1-2.76,2.76h-17a2.76,2.76,0,0,1-2.75-2.76V15.73A2.76,2.76,0,0,1,27.2,13Z"}),(0,o.jsx)("path",{className:"design-1",d:"M69.55,27.17c4.64,3.09,4,11.12,10.26,11.78a6.49,6.49,0,0,0,4.93-1.61,4.15,4.15,0,0,0,1.34-2.7c.4-4.15-3.4-6.86-7-7.68a24.48,24.48,0,0,0-9.48.21Zm19,8.21a6.25,6.25,0,0,1-2.33,4l4.78,5a18.69,18.69,0,0,0,4.64-8.07,31.63,31.63,0,0,1-7.09-.95Zm8.29,1.93a21,21,0,0,1-4.48,7.93l22.17,9.95a6.26,6.26,0,0,0,1.46.54,2.36,2.36,0,0,0,2.74-2.92,2.77,2.77,0,0,0-1.21-1.45l-20.68-14Z"})]}),(0,o.jsx)("h4",{children:"Web Design"}),(0,o.jsx)("div",{className:"line"}),(0,o.jsx)("p",{children:"Implementing your design or creating new with close attention to every detail. Everything is significant to make a masterpiece."})]}),(0,o.jsxs)("div",{className:"service",children:[(0,o.jsxs)("svg",{className:"logo-frontend",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 490",children:[(0,o.jsx)("title",{children:"frontend"}),(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{className:"frontend-1",d:"M245,314.021c-5.936,0-10.743,4.813-10.743,10.749s4.808,10.751,10.743,10.751c5.938,0,10.75-4.815,10.75-10.751 S250.938,314.021,245,314.021z"}),(0,o.jsx)("path",{className:"frontend-2",d:"M480,21.003H10c-5.523,0-10,4.477-10,10v327.456c0,5.522,4.477,10,10,10h174.711l-17.492,42.43h-32.88 c-5.522,0-10,4.478-10,10v38.108c0,5.523,4.478,10,10,10h221.323c5.522,0,10-4.477,10-10v-38.108c0-5.522-4.478-10-10-10h-32.879 l-17.493-42.43H480c5.522,0,10-4.478,10-10V31.003C490,25.479,485.522,21.003,480,21.003z M470,41.003v240.901H20V41.003H470z M345.662,448.997H144.339v-18.108h201.323V448.997z M301.149,410.889H188.852l17.492-42.43h77.312L301.149,410.889z M20,348.459 v-46.555h450v46.555H20z"}),(0,o.jsx)("path",{className:"frontend-3",d:"M323.206,161.089L323.206,161.089L323.206,161.089c0-5.522-4.478-10-10.001-9.999l-10.664,0.001 c-0.603-3.473-1.497-6.846-2.686-10.08l9.221-5.324c4.782-2.763,6.421-8.879,3.658-13.661c-2.763-4.782-8.877-6.423-13.66-3.659 l-9.248,5.342c-2.233-2.669-4.699-5.135-7.368-7.369l5.342-9.247c2.763-4.782,1.125-10.899-3.657-13.661 c-4.782-2.764-10.898-1.125-13.661,3.657l-5.325,9.22c-3.234-1.189-6.607-2.084-10.08-2.688V92.962c0-5.523-4.477-10-10-10\r c-0.025,0-0.051,0.004-0.076,0.004s-0.051-0.004-0.076-0.004c-5.522,0-10,4.477-10,10v10.658c-3.473,0.604-6.846,1.498-10.08,2.688 l-5.325-9.22c-2.763-4.782-8.879-6.421-13.661-3.657c-4.782,2.762-6.42,8.879-3.657,13.661l5.342,9.247 c-2.669,2.234-5.135,4.7-7.368,7.369l-9.248-5.342c-4.783-2.764-10.897-1.123-13.66,3.659c-2.763,4.782-1.124,10.898,3.658,13.661 l9.221,5.324c-1.189,3.234-2.083,6.607-2.686,10.08l-10.664-0.001c-5.523-0.001-10.001,4.477-10.001,9.999l0,0l0,0l0,0l0,0\r c0,5.523,4.478,10,10.001,10l10.664-0.001c0.602,3.472,1.497,6.845,2.686,10.079l-9.221,5.325 c-4.782,2.763-6.421,8.878-3.658,13.661c2.763,4.781,8.877,6.422,13.66,3.658l9.248-5.342c2.233,2.67,4.699,5.136,7.368,7.369 l-5.342,9.248c-2.763,4.782-1.125,10.898,3.657,13.66c4.782,2.764,10.898,1.125,13.661-3.656l5.325-9.221 c3.234,1.189,6.607,2.085,10.08,2.688v10.658c0,5.523,4.478,10,10,10c0.025,0,0.051-0.004,0.076-0.004s0.051,0.004,0.076,0.004\r c5.523,0,10-4.477,10-10v-10.658c3.473-0.603,6.846-1.498,10.08-2.688l5.325,9.221c2.763,4.781,8.879,6.42,13.661,3.656\tc4.782-2.762,6.42-8.878,3.657-13.66l-5.342-9.248c2.669-2.233,5.135-4.699,7.368-7.369l9.248,5.342 c4.783,2.764,10.898,1.123,13.66-3.658c2.763-4.783,1.124-10.898-3.658-13.661l-9.221-5.325c1.189-3.234,2.083-6.607,2.686-10.079 l10.664,0.001C318.728,171.089,323.206,166.612,323.206,161.089L323.206,161.089L323.206,161.089z M245.076,199.433\r c-0.025,0-0.051-0.002-0.076-0.002s-0.051,0.002-0.076,0.002c-21.141,0-38.34-17.2-38.34-38.344 c0-21.143,17.199-38.344,38.34-38.344c0.025,0,0.051,0.002,0.076,0.002s0.051-0.002,0.076-0.002 c21.141,0,38.34,17.201,38.34,38.344C283.416,182.232,266.217,199.433,245.076,199.433z"})]})]}),(0,o.jsx)("h4",{children:"Frontend"}),(0,o.jsx)("div",{className:"line"}),(0,o.jsx)("p",{children:"Translating your dreams into web forms. Using the most modern technologies for the best performance and sustainability."})]}),(0,o.jsxs)("div",{className:"service",children:[(0,o.jsxs)("svg",{className:"logo-components",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 419.931 419.931",children:[(0,o.jsx)("title",{children:"components"}),(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{className:"components-1",d:"M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624\r v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293\r V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146\r c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066\r C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702\r c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z\r M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702\r h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702\r c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"}),(0,o.jsx)("path",{className:"components-2",d:"M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38\r l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68\r c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104\r v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392\r c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679\r c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38\r l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744\r c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695\r c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711\r c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709\r l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224\r c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361\r s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345\r c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809\r l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492\r c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787\r c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327\r c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336\r c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z"}),(0,o.jsx)("path",{className:"components-3",d:"M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118\r v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333\r c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336\r c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373\r L164.695,235.373z"}),(0,o.jsx)("path",{className:"components-4",d:"M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27\r c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516\r l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z"}),(0,o.jsx)("path",{className:"components-5",d:"M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912\r c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331\r c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923\r c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877\r C315.094,200.735,312.311,196.371,308.001,194.366z"})]})]}),(0,o.jsx)("h4",{children:"Components"}),(0,o.jsx)("div",{className:"line"}),(0,o.jsx)("p",{children:"Creating any kind of components to make your site unique and catchy. Animation, interactive and usability for outstanding experience."})]})]})},h=c(5491),m=(c(8677),(0,r.$j)((function(e){return{store:e}}),(function(e){return{setStore:(0,s.DE)(t,e)}}))((function(e){return(0,o.jsx)("div",{className:"reviews__container",children:(0,o.jsx)(h.tv,{options:{updateOnMove:!0,type:"loop",perPage:2,gap:"2rem",breakpoints:{768:{perPage:1,gap:"2rem"}},perMove:1,pagination:!1,arrows:!1,drag:!0,speed:500,snap:!1,wheel:!0,wheelSleep:500,autoplay:!0,interval:5e3,pauseOnHover:!0,rewind:!1},children:e.store.reviews.map((function(e,n){return(0,o.jsx)(h.jw,{children:(0,o.jsxs)("div",{className:"splide__slide-container",children:[(0,o.jsx)("div",{className:"review__slide",children:(0,o.jsx)("p",{children:e.text})}),(0,o.jsx)("span",{children:e.name}),(0,o.jsx)("span",{children:e.add})]})},n)}))})})})));var p=(0,r.$j)((function(e){return{store:e}}),(function(e){return{setStore:(0,s.DE)(t,e)}}))((function(){return(0,o.jsx)("div",{className:"page-container",children:(0,o.jsxs)("div",{className:"page_about",children:[(0,o.jsxs)("section",{className:"about_me",children:[(0,o.jsxs)("h2",{children:["About me",(0,o.jsx)("em",{children:"About me"})]}),(0,o.jsx)(d,{})]}),(0,o.jsxs)("section",{className:"services",children:[(0,o.jsxs)("h2",{children:["Services",(0,o.jsx)("em",{children:"Services"})]}),(0,o.jsx)(u,{})]}),(0,o.jsxs)("section",{className:"reviews",children:[(0,o.jsxs)("h2",{children:["Reviews",(0,o.jsx)("em",{children:"Reviews"})]}),(0,o.jsx)(m,{})]})]})})}))},8677:function(){}}]);
//# sourceMappingURL=970.706b401a.chunk.js.map