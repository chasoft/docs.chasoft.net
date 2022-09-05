/*! For license information please see 5d717ed6.1ba318a9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[7671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(640);const l={sidebar_position:81},o="Internationalization (i18n)",s={unversionedId:"aris/guides/internationalization",id:"aris/guides/internationalization",title:"Internationalization (i18n)",description:"Aris supports multiple languages, and it has its mechanism for internationalization.",source:"@site/docs/aris/guides/internationalization.md",sourceDirName:"aris/guides",slug:"/aris/guides/internationalization",permalink:"/docs/aris/guides/internationalization",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/aris/guides/internationalization.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{sidebar_position:81},sidebar:"tutorialSidebar",previous:{title:"Markdown",permalink:"/docs/aris/guides/markdown"},next:{title:"Styling and Layout",permalink:"/docs/aris/guides/styling-and-layout"}},u={},c=[{value:"Config languages",id:"config-languages",level:2},{value:"Languages sample structure",id:"languages-sample-structure",level:2},{value:"Translate mechanism",id:"translate-mechanism",level:2},{value:"Structure of language file",id:"structure-of-language-file",level:3},{value:"Use the translation files",id:"use-the-translation-files",level:2},{value:"Video tutorial",id:"video-tutorial",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"internationalization-i18n"},"Internationalization (i18n)"),(0,r.kt)("p",null,"Aris supports multiple languages, and it has its mechanism for internationalization."),(0,r.kt)("h2",{id:"config-languages"},"Config languages"),(0,r.kt)("p",null,"The following example is to support 2 languages, English (en) and Vietnamese (vi). Please don't hesitate to update ",(0,r.kt)("inlineCode",{parentName:"p"},"config.tsx")," to match your desired languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/app/data/settings/config.tsx"',title:'"/app/data/settings/config.tsx"'},'/******************************************************************************\n * LANGUAGES SETTINGS\n * Reference 2 letters language code at https://www.iban.com/country-codes\n * Modify all variables below to add/remove supported languages for your site\n */\n\nexport type Language = "en" | "vi"\nexport const SUPPORTED_LANGUAGES: Language[] = ["en", "vi"]\nexport const DEFAULT_LANGUAGE: Language = "en"\nexport const CURRENCY: Record<Language, string> = {\n    "en": "USD",\n    "vi": "VND"\n}\n')),(0,r.kt)("h2",{id:"languages-sample-structure"},"Languages sample structure"),(0,r.kt)("p",null,"Take a look at folder ",(0,r.kt)("inlineCode",{parentName:"p"},"app/languages")," for more details. The simplest way to create a language file is to duplicate existing language files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/app/languages/languageSwitcherLangTable.ts"',title:'"/app/languages/languageSwitcherLangTable.ts"'},'import type { Language } from "~/data/settings/config"\n\n/**\n * Keys or langKeys\n * Recommend to use langKeys in the component,\n * the actual text would be supplied by translation system\n */\n\nconst langKey = [\n    "english",\n    "vietnamese",\n] as const\n\n/**\n * Types to data consistency checking\n */\n\ntype LangKey = typeof langKey[number]\ntype LangTable = { [key in Language]: { [P in LangKey]: string } }\n\n/**\n * Values for each languages\n */\n\nconst languageSwitcherLangTable: LangTable = {\n    en: {\n        "english": "English",\n        "vietnamese": "Vietnamese",\n    },\n    vi: {\n        "english": "Ti\u1ebfng Anh",\n        "vietnamese": "Ti\u1ebfng Vi\u1ec7t",\n    },\n}\n\nexport default languageSwitcherLangTable\n')),(0,r.kt)("h2",{id:"translate-mechanism"},"Translate mechanism"),(0,r.kt)("h3",{id:"structure-of-language-file"},"Structure of language file"),(0,r.kt)("p",null,"First we declare an array of language key. Here, there are 2 sample language key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const langKey = [\n    "english",\n    "vietnamese",\n] as const\n')),(0,r.kt)("p",null,"and down below the file, we just compose the translation for each language key in each language with following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const languageSwitcherLangTable: LangTable = {\n    en: {\n        "english": "English",\n        "vietnamese": "Vietnamese",\n    },\n    vi: {\n        "english": "Ti\u1ebfng Anh",\n        "vietnamese": "Ti\u1ebfng Vi\u1ec7t",\n    },\n}\n')),(0,r.kt)("p",null,"And if you do anything wrong, the typescript would alert with incorrect content."),(0,r.kt)("h2",{id:"use-the-translation-files"},"Use the translation files"),(0,r.kt)("p",null,"There are two cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You are using a content block. For example,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<FaqsBlock\n  langTable={faqsServicesLangTable}\n  faqs={faqsServices}   // <== just provided the language table>\n/>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Or you are updating a React component."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import useTranslate from "~/utils/useTranslate"\n...\n// you use a translation hook\nconst { t } = useTranlsate([.../* put your language table here*/...])\n...\n//and in the body of the component, just use t function to do the translation\n{t("language-key")}\n...\n')),(0,r.kt)("p",{parentName:"li"},"For more details about using ",(0,r.kt)("inlineCode",{parentName:"p"},"useTranslate"),", take a look at ",(0,r.kt)("a",{parentName:"p",href:"../advanced-guides/useTranslate"},"useTranslate"),"."))),(0,r.kt)("h2",{id:"video-tutorial"},"Video tutorial"),(0,r.kt)("div",{className:"video-container"},(0,r.kt)(i.Z,{id:"YEFoHFK5ydU",playlist:!1,title:"Introduction about multi-languages feature",poster:"hqdefault",noCookie:!0,mdxType:"LiteYouTubeEmbed"})))}g.isMDXComponent=!0},640:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};function i(e){var t=a.useState(!1),n=t[0],i=t[1],l=a.useState(!1),o=l[0],s=l[1],u=encodeURIComponent(e.id),c="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,g=e.poster||"hqdefault",d="&"+e.params||0,m=e.muted?"&mute=1":"",f=e.announce||"Watch",h=e.webp?"webp":"jpg",y=e.webp?"vi_webp":"vi",k=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+y+"/"+c+"/"+g+"."+h:"https://i.ytimg.com/"+y+"/"+u+"/"+g+"."+h),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?b+"/embed/videoseries?autoplay=1"+m+"&list="+u+d:b+"/embed/"+u+"?autoplay=1&state=1"+m+d,w=e.activatedClass||"lyt-activated",T=e.adNetwork||!1,N=e.aspectHeight||9,E=e.aspectWidth||16,O=e.iframeClass||"",L=e.playerClass||"lty-playbtn",x=e.wrapperClass||"yt-lite",C=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload";return a.useEffect((function(){o&&C()}),[o]),a.createElement(a.Fragment,null,a.createElement("link",{rel:S,href:k,as:"image"}),a.createElement(a.Fragment,null,n&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:b}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),T&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){n||i(!0)},onClick:function(){o||s(!0)},className:x+" "+(o?w:""),"data-title":p,style:r({backgroundImage:"url("+k+")"},{"--aspect-ratio":N/E*100+"%"})},a.createElement("button",{className:L,"aria-label":f+" "+p}),o&&a.createElement("iframe",{className:O,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}}}]);