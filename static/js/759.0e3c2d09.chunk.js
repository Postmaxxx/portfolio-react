"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[759],{668:function(t,e,n){n.r(e),n.d(e,{setContactEmail:function(){return h},setContactMessage:function(){return l},setContactName:function(){return o},setContactSubject:function(){return s},setImgLoaded:function(){return y},setModal:function(){return u},setModalDescr:function(){return m},setModalImage:function(){return d},setModalLink:function(){return p},setModalMsgBtnText:function(){return w},setModalMsgHeader:function(){return S},setModalMsgText:function(){return f},setModalMsgVisible:function(){return g},setNavClose:function(){return a},setNavOpen:function(){return r},setSelectedPortfolio:function(){return _},setTheme:function(){return c}});var i=n(2196),c=function(t){return{type:i.V.SET_THEME,payload:t}},r=function(){return{type:i.V.SET_NAV_OPEN}},a=function(){return{type:i.V.SET_NAV_CLOSE}},o=function(t){return{type:i.V.SET_CONTACT_NAME,payload:t}},h=function(t){return{type:i.V.SET_CONTACT_EMAIL,payload:t}},s=function(t){return{type:i.V.SET_CONTACT_SUBJECT,payload:t}},l=function(t){return{type:i.V.SET_CONTACT_MESSAGE,payload:t}},u=function(t){return{type:i.V.SET_MODAL,payload:t}},d=function(t){return{type:i.V.SET_MODAL_IMAGE,payload:t}},m=function(t){return{type:i.V.SET_MODAL_DESCR,payload:t}},p=function(t){return{type:i.V.SET_MODAL_LINK,payload:t}},g=function(t){return{type:i.V.SET_MODALMSG,payload:t}},S=function(t){return{type:i.V.SET_MODALMSG_HEADER,payload:t}},f=function(t){return{type:i.V.SET_MODALMSG_TEXT,payload:t}},w=function(t){return{type:i.V.SET_MODALMSG_BTNTEXT,payload:t}},_=function(t){return{type:i.V.SET_SELECTED_PORTFOLIO,payload:t}},y=function(t){return{type:i.V.SET_IMG_LOADED,payload:t}}},5759:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var i=n(2791),c=n(3531),r=n(668),a=n(7781),o=n(8683),h={};h=(0,o.Z)((0,o.Z)({},h),{},{width:70,height:40,circleSize:14,duration:2e3,theme:"light",numberOfStars:30,nodeForTheme:document.querySelector("body"),saveState:"",starsBlinkingDuration:[.9,1.2,1.4,1.6,1.8,2.1],starsBlinkingAnimation:"\n        0% { opacity: .2 }\n        50% { opacity: .8 }\n        100% { opacity: .2 }",clouds:[{width:30,gap:15,top:0,speed:7,opacity:1},{width:25,gap:20,top:25,speed:4,opacity:.85},{width:20,gap:20,top:40,speed:5,opacity:.7}]});var s={};s=(0,o.Z)((0,o.Z)({},s),{},{width:h.width,height:h.height,circleSize:h.circleSize,duration:h.duration,theme:h.theme,numberOfStars:h.numberOfStars,starsBlinkingDuration:h.starsBlinkingDuration,clouds:h.clouds,starsBlinkingAnimation:h.starsBlinkingAnimation,isChanging:!1,nodeForTheme:h.nodeForTheme,saveState:h.saveState});var l=function(t,e,n){return new Promise((function(i){setTimeout((function(){t&&s._contentSwitcher.classList.remove(t),e&&s._contentSwitcher.classList.add(e),i()}),n)}))},u=function(){s.isChanging||(s.saveState&&localStorage.setItem(s.saveState,s.theme),s.isChanging=!0,"light"===s.theme?(s.nodeForTheme.classList.remove("dark"),l("","theme_light_1",0).then((function(){return l("theme_light_1","theme_light_2",s.duration/4)})).then((function(){l("theme_light_2","theme_light",30),s.isChanging=!1}))):(s.nodeForTheme.classList.add("dark"),l("theme_light","theme_light_back_1",0).then((function(){return l("theme_light_back_1","theme_light_back_2",s.duration/4)})).then((function(){l("theme_light_back_2","",30),s.isChanging=!1}))))},d=function(t){s.themeSwitcher=t.themeSwitcher,s._themeSwitcher=document.querySelector(t.themeSwitcher),s.star=t.star,s.cloud=t.cloud,s.nodeForTheme=t.nodeForTheme?t.nodeForTheme:h.nodeForTheme,s.width=t.width?t.width:h.width,s.height=t.height?t.height:h.height,s.circleSize=t.circleSize?t.circleSize:h.circleSize,s.duration=t.duration?t.duration:h.duration,s.theme=t.theme?t.theme:h.theme,s.numberOfStars=t.numberOfStars?t.numberOfStars:h.numberOfStars,s.starsBlinkingDuration=t.starsBlinkingDuration?t.starsBlinkingDuration:h.starsBlinkingDuration,s.clouds=t.clouds?t.clouds:h.clouds,s.starsBlinkingAnimation=t.starsBlinkingAnimation?t.starsBlinkingAnimation:h.starsBlinkingAnimation,s.saveState=t.saveState?t.saveState:h.saveState,new Promise((function(t){var e;e="light",document.querySelector(s.themeSwitcher).innerHTML='\n        <div class="content-switcher '.concat("dark"!==e?"theme_light":"",'">\n            <div class="dark"></div>\n            <div class="light"></div>\n        </div>'),s._contentSwitcher=s._themeSwitcher.querySelector(".content-switcher"),function(){var t=s.width/2-s.circleSize,e=document.createElement("style");document.head.appendChild(e);var n=e.sheet;n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher {\n            width: ").concat(s.width,"px;\n            height: ").concat(s.height,"px;\n            border-radius: ").concat(s.height/2,"px;\n            position: relative;\n            overflow: hidden;\n            cursor: pointer;\n\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher > div {\n            position: absolute;\n            height: 100%;\n            width: 100%;\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher > div.light {\n            background-color: rgb(100 181 245);\n            clip-path: circle(").concat(s.circleSize,"px at ").concat(t,"px 50%);\n            transition: ").concat(s.duration/4,"ms cubic-bezier(0,1,0,1);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher > div.dark {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(0,1,0,1);\n            background-color: #002E6E;\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_1 .light {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(1,0,1,0);\n            clip-path: circle(").concat(10*s.width,"px at ").concat(t-10*s.width+s.circleSize,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_2 .light {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(1,0,1,0);\n            clip-path: circle(").concat(10*s.width,"px at ").concat(t-10*s.width+s.circleSize,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_2 .dark {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(1,0,1,0);\n            clip-path: circle(").concat(10*s.width,"px at ").concat(t+10*s.width+s.circleSize,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light .light {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(0,1,0,1);\n            z-index: 900;\n            clip-path: circle(").concat(10*s.width,"px at ").concat(s.circleSize-9*s.width,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light .dark {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(0,1,0,1);\n            z-index: 1000;\n            clip-path: circle(").concat(s.circleSize,"px at ").concat(t+2*s.circleSize,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_back_1 .light {\n            transition: 0ms;\n            z-index: 900;\n            clip-path: circle(").concat(10*s.width,"px at ").concat(s.circleSize-9*s.width,"px 50%);\n\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_back_1 .dark {\n            transition: ").concat(s.duration/4,"ms cubic-bezier(1,0,1,0);\n            z-index: 1000;\n            clip-path: circle(").concat(10*s.width,"px at ").concat(t+s.circleSize+10*s.width,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_back_2 .light {\n            transition: 0ms;\n            z-index: 1000;\n            clip-path: circle(").concat(10*s.width,"px at ").concat(t-10*s.width+s.circleSize,"px 50%);\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher.theme_light_back_2 .dark {\n            transition: 0ms;\n            z-index: 900;\n            clip-path: circle(").concat(10*s.width,"px at ").concat(t+s.circleSize+10*s.width,"px 50%);\n        }")),s.starsBlinkingDuration.forEach((function(t,e){n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher .dark .theme_dark__star-").concat(e," {\n            animation: star-blink ").concat(t,"s linear infinite;\n        }"))})),n.insertRule("\n        @keyframes star-blink {\n            ".concat(s.starsBlinkingAnimation,"\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher .light > div {\n            display: inline-block;\n            height: auto;\n            position: absolute;\n            left: 0;\n        }")),s.clouds.forEach((function(t,e){n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher .light .clouds-").concat(e," {\n            width: ").concat(6*t.width+5*t.gap,"px;\n            top: ").concat(t.top,"%;\n            animation: theme-clouds-").concat(e,"  linear infinite;\n            animation-duration: ").concat(t.speed,"s;\n        }")),n.insertRule("\n        ".concat(s.themeSwitcher," > .content-switcher .light .clouds-").concat(e," .cloud {\n            width: ").concat(t.width,"px;\n            margin-right: ").concat(t.gap,"px;\n            opacity: ").concat(t.opacity,";\n        }")),n.insertRule("\n        @keyframes theme-clouds-".concat(e," {\n            0% { transform: translateX(0); }\n            100% { transform: translateX(").concat(-(t.width+t.gap),"px); }\n        }"))}))}(),new Array(s.numberOfStars).fill("").map((function(){var t=Math.floor(20*Math.random()+1);return t=t>13?Math.floor(t/3):t,{x:Math.floor(Math.random()*s.width),y:Math.floor(Math.random()*s.height),size:t,blinkDuration:Math.floor(Math.random()*s.starsBlinkingDuration.length)}})).forEach((function(t){s._themeSwitcher.querySelector(".content-switcher .dark").innerHTML+='\n                <img class="theme_dark__star-'.concat(t.blinkDuration,'" src="').concat(s.star,'" style="position: absolute; left: ').concat(t.x,"px; top: ").concat(t.y,"px; width: ").concat(t.size,'px; aspect-ratio: 1">\n            ')})),function(){var t=new Array(Math.ceil(s.width/(s.clouds[s.clouds.length-1].width+s.clouds[s.clouds.length-1].gap)+2)).fill("");s.clouds.forEach((function(e,n){s._themeSwitcher.querySelector(".content-switcher .light").innerHTML+='\n        <div class="clouds-'.concat(n,'">\n            ').concat(t.map((function(){return'<img class="cloud" src="'.concat(s.cloud,'" >')})).join(""),"\n        </div>")}))}(),t()})).then((function(){"dark"==s.theme&&u(),s._themeSwitcher.addEventListener("click",(function(){s.theme="light"===s.theme?"dark":"light",u()}))}))};var m=n.p+"static/media/theme_day__cloud.80c89d8495d611d774dba896d4b50489.svg";var p=n.p+"static/media/theme_nigth__star.fe104e84f6e48f1218e1f0dcfabeaf3a.svg",g=n(184),S=(0,c.$j)((function(t){return{store:t}}),(function(t){return{setStore:(0,a.DE)(r,t)}}))((function(t){return(0,i.useEffect)((function(){t.setStore.setTheme(localStorage.getItem("theme")||"light");var e=".theme-switcher",n={themeSwitcher:e,star:p,cloud:m,width:document.querySelector(e).offsetWidth,height:document.querySelector(e).offsetHeight,circleSize:Math.round(document.querySelector(e).offsetHeight/3),duration:2e3,theme:localStorage.getItem("theme")||"light",numberOfStars:30,nodeForTheme:document.querySelector("body"),saveState:"theme"};d(n)}),[]),(0,g.jsx)("div",{className:"theme-switcher__container",children:(0,g.jsx)("div",{className:"theme-switcher",onClick:function(){t.setStore.setTheme(document.getElementsByTagName("BODY")[0].classList.contains("dark")?"dark":"light")},"aria-label":"Change the site theme"})})}))}}]);
//# sourceMappingURL=759.0e3c2d09.chunk.js.map