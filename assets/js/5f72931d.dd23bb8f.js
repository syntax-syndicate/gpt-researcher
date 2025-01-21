"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9066],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,y=u["".concat(l,".").concat(h)]||u[h]||g[h]||i;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1121:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const i={},a="Troubleshooting",s={unversionedId:"gpt-researcher/gptr/troubleshooting",id:"gpt-researcher/gptr/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"We're constantly working to provide a more stable version. If you're running into any issues, please first check out the resolved issues or ask us via our Discord community.",source:"@site/docs/gpt-researcher/gptr/troubleshooting.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/troubleshooting",permalink:"/docs/gpt-researcher/gptr/troubleshooting",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Automated Tests",permalink:"/docs/gpt-researcher/gptr/automated-tests"},next:{title:"Log Files",permalink:"/docs/gpt-researcher/gptr/logs"}},l=[{value:"model: gpt-4 does not exist",id:"model-gpt-4-does-not-exist",children:[],level:3},{value:"cannot load library &#39;gobject-2.0-0&#39;",id:"cannot-load-library-gobject-20-0",children:[],level:3},{value:"cannot load library &#39;pango&#39;",id:"cannot-load-library-pango",children:[],level:3},{value:"Error processing the url",id:"error-processing-the-url",children:[],level:3},{value:"Chrome version issues",id:"chrome-version-issues",children:[],level:3}],p={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("p",null,"We're constantly working to provide a more stable version. If you're running into any issues, please first check out the resolved issues or ask us via our ",(0,o.yg)("a",{parentName:"p",href:"https://discord.gg/QgZXvJAccX"},"Discord community"),"."),(0,o.yg)("h3",{id:"model-gpt-4-does-not-exist"},"model: gpt-4 does not exist"),(0,o.yg)("p",null,"This relates to not having permission to use gpt-4 yet. Based on OpenAI, it will be ",(0,o.yg)("a",{parentName:"p",href:"https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4"},"widely available for all by end of July"),"."),(0,o.yg)("h3",{id:"cannot-load-library-gobject-20-0"},"cannot load library 'gobject-2.0-0'"),(0,o.yg)("p",null,"The issue relates to the library WeasyPrint (which is used to generate PDFs from the research report). Please follow this guide to resolve it: ",(0,o.yg)("a",{parentName:"p",href:"https://doc.courtbouillon.org/weasyprint/stable/first_steps.html"},"https://doc.courtbouillon.org/weasyprint/stable/first_steps.html")),(0,o.yg)("p",null,"Or you can install this package manually"),(0,o.yg)("p",null,"In case of MacOS you can install this lib using\n",(0,o.yg)("inlineCode",{parentName:"p"},"brew install glib pango"),"\nIf you face an issue with linking afterward, you can try running ",(0,o.yg)("inlineCode",{parentName:"p"},"brew link glib")),(0,o.yg)("p",null,"In case of Linux you can install this lib using\n",(0,o.yg)("inlineCode",{parentName:"p"},"sudo apt install libglib2.0-dev")),(0,o.yg)("h3",{id:"cannot-load-library-pango"},"cannot load library 'pango'"),(0,o.yg)("p",null,"In case of MacOS you can install this lib using\n",(0,o.yg)("inlineCode",{parentName:"p"},"brew install pango")),(0,o.yg)("p",null,"In case of Linux you can install this lib using\n",(0,o.yg)("inlineCode",{parentName:"p"},"sudo apt install libpango-1.0-0")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Workaround for Mac M chip users")),(0,o.yg)("p",null,"If the above solutions don't work, you can try the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Install a fresh version of Python 3.11 pointed to brew:\n",(0,o.yg)("inlineCode",{parentName:"li"},"brew install python@3.11")),(0,o.yg)("li",{parentName:"ul"},"Install the required libraries:\n",(0,o.yg)("inlineCode",{parentName:"li"},"brew install pango glib gobject-introspection")),(0,o.yg)("li",{parentName:"ul"},"Install the required GPT Researcher Python packages:\n",(0,o.yg)("inlineCode",{parentName:"li"},"pip3.11 install -r requirements.txt")),(0,o.yg)("li",{parentName:"ul"},"Run the app with Python 3.11 (using brew):\n",(0,o.yg)("inlineCode",{parentName:"li"},"python3.11 -m uvicorn main:app --reload"))),(0,o.yg)("h3",{id:"error-processing-the-url"},"Error processing the url"),(0,o.yg)("p",null,"We're using ",(0,o.yg)("a",{parentName:"p",href:"https://www.selenium.dev"},"Selenium")," for site scraping. Some sites fail to be scraped. In these cases, restart and try running again."),(0,o.yg)("h3",{id:"chrome-version-issues"},"Chrome version issues"),(0,o.yg)("p",null,"Many users have an issue with their chromedriver because the latest chrome browser version doesn't have a compatible chrome driver yet."),(0,o.yg)("p",null,"To downgrade your Chrome web browser using ",(0,o.yg)("a",{parentName:"p",href:"https://www.slimjet.com/chrome/google-chrome-old-version.php"},"slimjet"),", follow these steps. First, visit the website and scroll down to find the list of available older Chrome versions. Choose the version you wish to install\nmaking sure it's compatible with your operating system.\nOnce you've selected the desired version, click on the corresponding link to download the installer. Before proceeding with the installation, it's crucial to uninstall your current version of Chrome to avoid conflicts."),(0,o.yg)("p",null,"It's important to check if the version you downgrade to, has a chromedriver available in the official ",(0,o.yg)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"chrome driver website")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"If none of the above work, you can ",(0,o.yg)("a",{parentName:"strong",href:"https://app.tavily.com"},"try out our hosted beta"))))}u.isMDXComponent=!0}}]);