"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1341],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},942:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={},i="Vanilla JS Frontend",l={unversionedId:"gpt-researcher/frontend/vanilla-js-frontend",id:"gpt-researcher/frontend/vanilla-js-frontend",isDocsHomePage:!1,title:"Vanilla JS Frontend",description:"A lightweight solution using FastAPI to serve static files.",source:"@site/docs/gpt-researcher/frontend/vanilla-js-frontend.md",sourceDirName:"gpt-researcher/frontend",slug:"/gpt-researcher/frontend/vanilla-js-frontend",permalink:"/docs/gpt-researcher/frontend/vanilla-js-frontend",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/frontend/vanilla-js-frontend.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"NextJS Frontend",permalink:"/docs/gpt-researcher/frontend/nextjs-frontend"},next:{title:"discord-bot",permalink:"/docs/gpt-researcher/frontend/discord-bot"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"Setup and Running",id:"setup-and-running",children:[],level:4},{value:"Demo",id:"demo",children:[],level:4}],c={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vanilla-js-frontend"},"Vanilla JS Frontend"),(0,a.yg)("p",null,"A lightweight solution using FastAPI to serve static files."),(0,a.yg)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Python 3.11+"),(0,a.yg)("li",{parentName:"ul"},"pip")),(0,a.yg)("h4",{id:"setup-and-running"},"Setup and Running"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install required packages:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"pip install -r requirements.txt\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Start the server:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"python -m uvicorn main:app\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Access at ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:8000")))),(0,a.yg)("h4",{id:"demo"},"Demo"),(0,a.yg)("iframe",{height:"400",width:"700",src:"https://github.com/assafelovic/gpt-researcher/assets/13554167/dd6cf08f-b31e-40c6-9907-1915f52a7110",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);