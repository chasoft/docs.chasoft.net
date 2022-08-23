/*! For license information please see 2056a275.80ccfd35.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[9707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),o=r(640);const l={sidebar_position:50},i="Deployment to Cloudflare Pages",p={unversionedId:"ari/guides/deployment",id:"ari/guides/deployment",title:"Deployment to Cloudflare Pages",description:"ari 1.x deployment model",source:"@site/docs/ari/guides/deployment.md",sourceDirName:"ari/guides",slug:"/ari/guides/deployment",permalink:"/docs/ari/guides/deployment",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/docs/ari/guides/deployment.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Styling and Layout",permalink:"/docs/ari/guides/styling-and-layout"},next:{title:"Internationalization (i18n)",permalink:"/docs/ari/guides/internationalization"}},u={},s=[{value:"Video tutorial",id:"video-tutorial",level:2}],d={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment-to-cloudflare-pages"},"Deployment to Cloudflare Pages"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ari 1.x deployment model",src:r(5501).Z,width:"547",height:"243"})),(0,a.kt)("p",null,"Ari 1.x only support to deploy to Cloudflare Pages. The deployment process is very great simple and easy as described below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have your own local development environment, modify Ari as you wish. Tested locally.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a GitHub repository ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"(private repository)"))," and push Ari to your GitHub repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect your GitHub account to Cloudflare Pages."))),(0,a.kt)("p",null,"And everything would be executed automatically. Every time you update your GitHub, your Ari would be deployed to Cloudflare Pages automatically."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Ari")," could be ported to run on any serverless platform ",(0,a.kt)("em",{parentName:"p"},"(thanks to ",(0,a.kt)("a",{parentName:"em",href:"https://remix.run/"},"Remix Web Framework"),")")," such as:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"AWS"),(0,a.kt)("li",{parentName:"ul"},"Cloudflare worker"),(0,a.kt)("li",{parentName:"ul"},"FlyIo"),(0,a.kt)("li",{parentName:"ul"},"Netlify"),(0,a.kt)("li",{parentName:"ul"},"Vercel"),(0,a.kt)("li",{parentName:"ul"},"Any Express server")),(0,a.kt)("p",{parentName:"admonition"},"but for the very first version of ",(0,a.kt)("strong",{parentName:"p"},"Ari")," ",(0,a.kt)("em",{parentName:"p"},"(1.x)"),", we only support to deploy to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Cloudflare Pages")),". The reason is that ",(0,a.kt)("strong",{parentName:"p"},"Ari")," (1.x) focus on ",(0,a.kt)("inlineCode",{parentName:"p"},"standalone spirit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"effordable spirit"),". You would have a powerful Serverless Personal Website for ",(0,a.kt)("inlineCode",{parentName:"p"},"FREE")," when deploy to ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloudflare Pages"))),(0,a.kt)("h2",{id:"video-tutorial"},"Video tutorial"),(0,a.kt)("div",{className:"video-container"},(0,a.kt)(o.Z,{id:"X8T4qx_VO50",playlist:!1,title:"Deploy Ari to Cloudflare Pages",poster:"hqdefault",noCookie:!0,mdxType:"LiteYouTubeEmbed"})))}c.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],l=n.useState(!1),i=l[0],p=l[1],u=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,c=e.poster||"hqdefault",m="&"+e.params||0,y=e.muted?"&mute=1":"",f=e.announce||"Watch",w=e.webp?"webp":"jpg",k=e.webp?"vi_webp":"vi",b=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+k+"/"+s+"/"+c+"."+w:"https://i.ytimg.com/"+k+"/"+u+"/"+c+"."+w),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var N=e.playlist?v+"/embed/videoseries?autoplay=1"+y+"&list="+u+m:v+"/embed/"+u+"?autoplay=1&state=1"+y+m,h=e.activatedClass||"lyt-activated",g=e.adNetwork||!1,P=e.aspectHeight||9,Z=e.aspectWidth||16,A=e.iframeClass||"",O=e.playerClass||"lty-playbtn",V=e.wrapperClass||"yt-lite",z=e.onIframeAdded||function(){},x=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&z()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:x,href:b,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:v}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),g&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||p(!0)},className:V+" "+(i?h:""),"data-title":d,style:a({backgroundImage:"url("+b+")"},{"--aspect-ratio":P/Z*100+"%"})},n.createElement("button",{className:O,"aria-label":f+" "+d}),i&&n.createElement("iframe",{className:A,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:N})))}},5501:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/webp;base64,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"}}]);