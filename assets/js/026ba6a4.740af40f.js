"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[8462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:20},o="useTranslate",s={unversionedId:"aris/advanced-guides/useTranslate",id:"aris/advanced-guides/useTranslate",title:"useTranslate",description:"Aris has a powerful hook to do the translation called useTranslate. It accepts an array of language table, that means, you can combine the translation from more than one language table (less translation duplication)",source:"@site/docs/aris/advanced-guides/useTranslate.md",sourceDirName:"aris/advanced-guides",slug:"/aris/advanced-guides/useTranslate",permalink:"/docs/aris/advanced-guides/useTranslate",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/aris/advanced-guides/useTranslate.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Files structure",permalink:"/docs/aris/advanced-guides/files-structure"},next:{title:"Baris-A - Serverless Template for Personal Websites",permalink:"/docs/baris-a"}},i={},u=[{value:"Declare",id:"declare",level:2},{value:"Usage of <code>t</code> function",id:"usage-of-t-function",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usetranslate"},"useTranslate"),(0,r.kt)("p",null,"Aris has a powerful hook to do the translation called ",(0,r.kt)("inlineCode",{parentName:"p"},"useTranslate"),". It accepts an array of language table, that means, you can combine the translation from more than one language table ",(0,r.kt)("em",{parentName:"p"},"(less translation duplication)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default function useTranslate(langTables: LangTable[]): {\n  lang: Language\n  t: (key: string, values?: string[] => string\n}\n")),(0,r.kt)("h2",{id:"declare"},"Declare"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import useTranslate from "~/utils/useTranslate"\n...\n/**\n * `lang` is the current seleted language of Aris\n * `t` is a function to get the translation text from provided language key\n */\nconst { lang, t } = useTranslate([...])\n...\n\n')),(0,r.kt)("h2",{id:"usage-of-t-function"},"Usage of ",(0,r.kt)("inlineCode",{parentName:"h2"},"t")," function"),(0,r.kt)("p",null,"Simple and common usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"t(langKey)\n")),(0,r.kt)("p",null,"That means if you "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'//if current language is English then\n//the following command will return `English`\nt("english")\n')),(0,r.kt)("p",null,"More advanced usage is when you want to put one or more values to placeholders in the translation... This would help to separated the translation with values."),(0,r.kt)("p",null,"For example, you have a sample language table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const sampleLangTable: LangTable = {\n  en: {\n    "our-life-time-pricing-is-dollar": "Our lifetime pricing is %s dollars.",\n  },\n  vi: {\n    "our-life-time-pricing-is-dollar": "G\xf3i tr\u1ecdn \u0111\u1eddi l\xe0 %s \u0111\xf4 la.",\n  },\n}\n')),(0,r.kt)("p",null,"You would not want to hard-code the pricing to the translation. Then, we provide a placeholder to fill in which is ",(0,r.kt)("inlineCode",{parentName:"p"},"%s"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'t("our-life-time-pricing-is-dollar", ["199"])\n\n//would return:\n//if current language is en: `Our lifetime pricing is 199 dollars.`\n//if current language is vi: `G\xf3i tr\u1ecdn \u0111\u1eddi l\xe0 199 \u0111\xf4 la.`\n')),(0,r.kt)("p",null,"It is worth mentioning that you can have multi-placeholders and multi values to fill in. But they will fill in by its order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'t("Hello %s, how are you %s?", ["Brian", "yesterday"])\n// return: Hello Brian, how are you yesterday?\n')))}p.isMDXComponent=!0}}]);