/*! For license information please see df662556.8df55fb2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[3421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:k,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[E,T]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==E&&g.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==E&&(O(t),T(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),r=n(6010);const o="browserWindow_my1Q",l="browserWindowHeader_jXSR",i="buttons_uHc7",s="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";function m(e){let{children:t,minHeight:n,url:m="http://localhost:3000"}=e;return a.createElement("div",{className:o,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:i},a.createElement("span",{className:c,style:{background:"#f25f58"}}),a.createElement("span",{className:c,style:{background:"#fbbe3c"}}),a.createElement("span",{className:c,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s,"text--truncate")},m),a.createElement("div",{className:u},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:p},t))}},6022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=(n(5488),n(5162),n(1007)),l=n(640);const i={sidebar_position:80},s="Markdown",c={unversionedId:"aris/guides/markdown",id:"aris/guides/markdown",title:"Markdown",description:"Lists of all supported markdown syntaxes and examples",source:"@site/docs/aris/guides/markdown.mdx",sourceDirName:"aris/guides",slug:"/aris/guides/markdown",permalink:"/docs/aris/guides/markdown",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/aris/guides/markdown.mdx",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Content blocks",permalink:"/docs/aris/guides/content-blocks"},next:{title:"Internationalization (i18n)",permalink:"/docs/aris/guides/internationalization"}},u={},d=[{value:"Format text",id:"format-text",level:2},{value:"This is H2",id:"this-is-h2",level:2},{value:"This is H3",id:"this-is-h3",level:3},{value:"This is H4",id:"this-is-h4",level:4},{value:"Table",id:"table",level:2},{value:"Block of code",id:"block-of-code",level:2},{value:"Video tutorial",id:"video-tutorial",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"Lists of all supported markdown syntaxes and examples"),(0,r.kt)("h2",{id:"format-text"},"Format text"),(0,r.kt)("p",null,"Formatting text in markdown is simple, and you can do it as you're typing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# This is H1\n\nThe **quick fox** jumps over the _lazy_ dog.\n\n## This is H2\n\nThe quick fox fly jumps over the _**lazy**_ dog.\n\n1. fox\n2. dog\n3. lazy\n\n### This is H3\n\n> All Things are Difficult Before they are Easy\n\nUt `pariatur ad ea aute ullamco velit commodo`.\nLaboris consectetur culpa aute. **`Aliqua`** consectetur id irure.\n\n- item 1\n- item 2\n- item 3\n\n")),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("h2",{id:"this-is-h2"},"This is H2"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"quick fox")," jumps over the ",(0,r.kt)("em",{parentName:"p"},"lazy")," dog."),(0,r.kt)("h3",{id:"this-is-h3"},"This is H3"),(0,r.kt)("p",null,"The quick fox fly jumps over the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"lazy"))," dog."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"this-is-h4"},"This is H4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All Things are Difficult Before they are Easy")),(0,r.kt)("p",null,"Ut ",(0,r.kt)("inlineCode",{parentName:"p"},"pariatur ad ea aute ullamco velit commodo"),".\nLaboris consectetur culpa aute. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Aliqua"))," consectetur id irure.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There are two ways to make the text ",(0,r.kt)("strong",{parentName:"p"},"italic"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"_italic_")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"*italic*"),". And there are three ways to make the text both ",(0,r.kt)("strong",{parentName:"p"},"bold and italic"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"***bold***")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"**_bold_**")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_**bold**_"))),(0,r.kt)("h2",{id:"table"},"Table"),(0,r.kt)("p",null,"Tables in markdown is a bit complicated. And if you are not very familiar with markdown, you can use the following table example or using ",(0,r.kt)("a",{parentName:"p",href:"https://stackedit.io/app"},"https://stackedit.io/app")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'| | Regular | Extended |\n|--|:--:|:--:|\n| **Number of end products** | 1 | unlimited |\n| **Use in a single end product** | \u2705 | \u2705 |\n| **Use in an end product that\'s sold** | \u274c | \u2705 |\n| **On-demand products/services**<br />_(e.g. "made to order" or "create your own" apps and sites)_ | \u274c | \u2705 |\n')),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Regular"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Extended"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Number of end products")),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unlimited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Use in a single end product")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Use in an end product that's sold")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"On-demand products/services"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},'(e.g. "made to order" or "create your own" apps and sites)')),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"))))),(0,r.kt)("h2",{id:"block-of-code"},"Block of code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n    ```\n    export const SOCIAL_LINKS: IconProps[] = [\n      {\n        url: "https://facebook.com",\n        name: "facebook"\n      },\n      {\n        url: "https://www.linkedin.com",\n        name: "linkedin"\n      },\n      {\n        url: "https://github.com",\n        name: "github"\n      }\n    ]\n    ```\n\n')),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export const SOCIAL_LINKS: IconProps[] = [\n  {\n    url: "https://facebook.com",\n    name: "facebook"\n  },\n  {\n    url: "https://www.linkedin.com",\n    name: "linkedin"\n  },\n  {\n    url: "https://github.com",\n    name: "github"\n  }\n]\n'))),(0,r.kt)("h2",{id:"video-tutorial"},"Video tutorial"),(0,r.kt)("div",{className:"video-container"},(0,r.kt)(l.Z,{id:"YEFoHFK5ydU",playlist:!1,title:"Quick introduction to Markdown format",poster:"hqdefault",noCookie:!0,mdxType:"LiteYouTubeEmbed"})))}m.isMDXComponent=!0},640:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};function o(e){var t=a.useState(!1),n=t[0],o=t[1],l=a.useState(!1),i=l[0],s=l[1],c=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,p=e.poster||"hqdefault",m="&"+e.params||0,k=e.muted?"&mute=1":"",h=e.announce||"Watch",b=e.webp?"webp":"jpg",f=e.webp?"vi_webp":"vi",g=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+f+"/"+u+"/"+p+"."+b:"https://i.ytimg.com/"+f+"/"+c+"/"+p+"."+b),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?y+"/embed/videoseries?autoplay=1"+k+"&list="+c+m:y+"/embed/"+c+"?autoplay=1&state=1"+k+m,w=e.activatedClass||"lyt-activated",N=e.adNetwork||!1,E=e.aspectHeight||9,T=e.aspectWidth||16,x=e.iframeClass||"",O=e.playerClass||"lty-playbtn",_=e.wrapperClass||"yt-lite",C=e.onIframeAdded||function(){},j=e.rel?"prefetch":"preload";return a.useEffect((function(){i&&C()}),[i]),a.createElement(a.Fragment,null,a.createElement("link",{rel:j,href:g,as:"image"}),a.createElement(a.Fragment,null,n&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:y}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),N&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){n||o(!0)},onClick:function(){i||s(!0)},className:_+" "+(i?w:""),"data-title":d,style:r({backgroundImage:"url("+g+")"},{"--aspect-ratio":E/T*100+"%"})},a.createElement("button",{className:O,"aria-label":h+" "+d}),i&&a.createElement("iframe",{className:x,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}}}]);