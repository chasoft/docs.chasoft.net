/*! For license information please see c271d924.82aaf8a1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[9360],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),o=t(7294),r=t(6010),i=t(2389),l=t(7392),s=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:i,block:d,defaultValue:m,values:k,groupId:g,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,l.l)(y,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(n=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[x,T]=(0,o.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==x&&y.some((n=>n.value===e))&&T(e)}const L=e=>{const n=e.currentTarget,t=C.indexOf(n),a=y[t].value;a!==x&&(E(n),T(a),null!=g&&N(g,String(a)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=C.indexOf(e.currentTarget)+1;t=null!=(a=C[n])?a:C[0];break}case"ArrowLeft":{var o;const n=C.indexOf(e.currentTarget)-1;t=null!=(o=C[n])?o:C[C.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>C.push(e),onKeyDown:P,onFocus:L,onClick:L},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},2168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(7462),o=(t(7294),t(3905)),r=t(5488),i=t(5162),l=t(640);const s={sidebar_position:5},c="Home",u={unversionedId:"aris/guides/pages/home",id:"aris/guides/pages/home",title:"Home",description:"Your front page \ud83c\udfe1, the page that your visitors will see when they access your root domain. You can create your own personalized version depending on your interests.",source:"@site/docs/aris/guides/pages/home.mdx",sourceDirName:"aris/guides/pages",slug:"/aris/guides/pages/home",permalink:"/docs/aris/guides/pages/home",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/aris/guides/pages/home.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Pages",permalink:"/docs/aris/guides/pages"},next:{title:"About",permalink:"/docs/aris/guides/pages/about"}},p={},d=[{value:"\ud83d\udcdd Forewords block",id:"-forewords-block",level:2},{value:"\ud83e\udd14 Want homepage as bioLink?",id:"-want-homepage-as-biolink",level:2},{value:"Video tutorial",id:"video-tutorial",level:2}],m={toc:d};function k(e){let{components:n,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"home"},"Home"),(0,o.kt)("p",null,"Your front page \ud83c\udfe1, the page that your visitors will see when they access your ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," domain. You can create your own personalized version depending on your interests."),(0,o.kt)("p",null,"Of course, you can use any ",(0,o.kt)("a",{parentName:"p",href:"/docs/aris/guides/content-blocks"},"content blocks")," but the ",(0,o.kt)("inlineCode",{parentName:"p"},"homepage")," should be concise, tidy and providing overview information only. We have some recommended content blocks for your reference."),(0,o.kt)("p",null,"Homepage file is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"app\\routes\\__layout\\index.tsx")),". It is safe for you to edit the lines between the markers."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"File",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app\\routes__layout\\index.tsx"',title:'"app\\routes__layout\\index.tsx"'},"...\n{\n  /*********************************\n  * \n  *   START PAGE CONTENT \n  * \n  ********************************/\n}\n\n//place your content for homepage here\n\n{\n  /*********************************\n  * \n  *   END PAGE CONTENT \n  * \n  ********************************/\n}\n...\n"))),(0,o.kt)(i.Z,{value:"Content blocks",mdxType:"TabItem"},(0,o.kt)("p",null,"Recommended content blocks for your homepage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aris/guides/content-blocks#linksgrid"},"LinksGrid")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aris/guides/content-blocks#latestportfolio"},"LatestPortfolio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aris/guides/content-blocks#latestblogposts"},"LatestBlogPosts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aris/guides/content-blocks#linkslist"},"LinksList")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forewords")))),(0,o.kt)(i.Z,{value:"Examples",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<LinksGrid links={linksGrid} className="mb-10" />\n\n<LatestPortfolio\n  display={["title", "image", "description"]}\n  limit={2}\n/>\n\n<LatestBlogPosts\n  display={["title", "image"]}\n  limit={2}\n  showAsColumn\n/>\n\n<LatestContent.Note />\n<LatestContent.Announcement />\n<LatestContent.Update />\n\n<Markdown.Wrapper>\n  <Component />\n</Markdown.Wrapper>\n\n<TextHeader text={t("Curated links for your best")} />\n<LinksList links={linksList} className="my-10" />\n')))),(0,o.kt)("h2",{id:"-forewords-block"},"\ud83d\udcdd Forewords block"),(0,o.kt)("p",null,"All content should be composed using Markdown format. That's why we created a special file just for you to write for the homepage."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data file is ",(0,o.kt)("inlineCode",{parentName:"p"},"~/data/content/foreword.mdx"),". Open this file, and please don't hesitate to edit, write... anything you like.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To display this content, you would need to:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the files to ",(0,o.kt)("inlineCode",{parentName:"p"},"app\\routes\\__layout\\index.tsx"),". But don't worry, it is declared already."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import Component from "~/data/content/foreword.mdx"\nimport Markdown from "~/components/Markdown"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste this code to the your desired place in ",(0,o.kt)("inlineCode",{parentName:"p"},"app\\routes\\__layout\\index.tsx")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Markdown.Wrapper>\n  <Component />\n</Markdown.Wrapper>\n")))))),(0,o.kt)("h2",{id:"-want-homepage-as-biolink"},"\ud83e\udd14 Want homepage as bioLink?"),(0,o.kt)("p",null,"If you want your homepage as a bioLink, which display a list of links. You can use the following samples:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Examples 1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<TextHeader text={t("Curated links for your best")} />\n<LinksList links={linksList} className="my-10" />\n'))),(0,o.kt)(i.Z,{value:"Data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export const linksList: LinkMeta[] = [\n  {\n    type: undefined,\n    title: "Upcoming events",\n    description: "Upcoming events",\n    slug: "/",\n    iconPicture: undefined\n  },\n  {\n    type: "zip",\n    title: "All chess matches with comments",\n    description: "Collected from 3 millions matches",\n    slug: "/",\n    iconPicture: undefined,\n    decoration: {\n      backgroundColor: ["blue", "red", "white"]\n    }\n  },\n  {\n    type: "xls",\n    title: "Dashboard for lazy man",\n    description: "Automate your daily tasks",\n    slug: "/",\n    iconPicture: undefined,\n    decoration: {\n      isBold: true,\n      isItalic: true\n    }\n  },\n  {\n    type: "youtube",\n    title: "My programming youtube channel",\n    slug: "/contact",\n    iconPicture: undefined,\n    decoration: {\n      isItalic: true\n    }\n  },\n  {\n    type: "cv",\n    title: "Curriculum vitae of Brian",\n    slug: "/files/mycv.pdf",\n    iconPicture: "/img/background/placeholder.svg",\n    decoration: {\n      isDownloadable: true\n    }\n  },\n]\n'))),(0,o.kt)(i.Z,{value:"Type declaration",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * This is to build links list for homepage\n * to fullfill the features of biolink services\n */\ntype LinkMeta = {\n  /**\n   * if you set a type for a link\n   * we will show an icon for the link (default icon)\n   * if you don\'t set imageUrl.\n   */\n  type?: LinkMetaType\n  title: string,\n  description?: string\n  slug: string,\n  iconPicture?: string,\n  decoration?: {\n    /**\n     * we will fill gradient the background\n     * 1st & 2nd is background gradient\n     * 3rd is text-color\n     */\n    backgroundColor?: [string, string, string]\n    isTextCenter?: boolean\n    isBold?: boolean\n    isItalic?: boolean\n    isDownloadable?: boolean\n  }\n}\n\ntype LinkMetaType =\n  | "pdf"\n  | "doc"\n  | "link"\n  | "youtube"\n  | "ppt"\n  | "powerpoint"\n  | "excel"\n  | "xls"\n  | "word"\n  | "cv"\n  | "resume"\n  | "facebook"\n  | "linkedin"\n  | "tiktok"\n  | "instagram"\n  | "messenger"\n  | "hotline"\n  | "telephone"\n  | "phone"\n  | "shopping"\n  | "video"\n  | "laptop"\n  | "computer"\n  | "hardware"\n  | "zip"\n')))),(0,o.kt)("p",null,"Or you can combine ",(0,o.kt)("inlineCode",{parentName:"p"},"LinksGrid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LinksList")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Examples 2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<LinksGrid links={linksGrid} className="mb-10" />\n<TextHeader text={t("Curated links for your best")} />\n<LinksList links={linksList} className="my-10" />\n'))),(0,o.kt)(i.Z,{value:"Data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export const linksGrid: LinkMeta[] = [\n  {\n    title: "link1",\n    slug: "/about",\n    iconPicture: "/img/background/placeholder.svg",\n  },\n  {\n    title: "link2",\n    slug: "/terms-of-service",\n    iconPicture: "/img/background/placeholder.svg",\n  },\n  {\n    title: "link3",\n    slug: "https://twitter.com/",\n    iconPicture: "/img/background/placeholder.svg",\n    decoration: {\n      isBold: true,\n      isItalic: true\n    }\n  },\n  {\n    title: "link4",\n    slug: "/contact",\n    iconPicture: "/img/background/placeholder.svg",\n    decoration: {\n      isItalic: true\n    }\n  }\n]\n\nexport const linksList: LinkMeta[] = [\n  {\n    type: undefined,\n    title: "Upcoming events",\n    description: "Upcoming events",\n    slug: "/",\n    iconPicture: undefined\n  },\n  {\n    type: "zip",\n    title: "All chess matches with comments",\n    description: "Collected from 3 millions matches",\n    slug: "/",\n    iconPicture: undefined,\n    decoration: {\n      backgroundColor: ["blue", "red", "white"]\n    }\n  },\n  {\n    type: "xls",\n    title: "Dashboard for lazy man",\n    description: "Automate your daily tasks",\n    slug: "/",\n    iconPicture: undefined,\n    decoration: {\n      isBold: true,\n      isItalic: true\n    }\n  },\n  {\n    type: "youtube",\n    title: "My programming youtube channel",\n    slug: "/contact",\n    iconPicture: undefined,\n    decoration: {\n      isItalic: true\n    }\n  },\n  {\n    type: "cv",\n    title: "Curriculum vitae of Brian",\n    slug: "/files/mycv.pdf",\n    iconPicture: "/img/background/placeholder.svg",\n    decoration: {\n      isDownloadable: true\n    }\n  },\n]\n'))),(0,o.kt)(i.Z,{value:"Type declaration",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * This is to build links list for homepage\n * to fullfill the features of biolink services\n */\ntype LinkMeta = {\n  /**\n   * if you set a type for a link\n   * we will show an icon for the link (default icon)\n   * if you don\'t set imageUrl.\n   */\n  type?: LinkMetaType\n  title: string,\n  description?: string\n  slug: string,\n  iconPicture?: string,\n  decoration?: {\n    /**\n     * we will fill gradient the background\n     * 1st & 2nd is background gradient\n     * 3rd is text-color\n     */\n    backgroundColor?: [string, string, string]\n    isTextCenter?: boolean\n    isBold?: boolean\n    isItalic?: boolean\n    isDownloadable?: boolean\n  }\n}\n\ntype LinkMetaType =\n  | "pdf"\n  | "doc"\n  | "link"\n  | "youtube"\n  | "ppt"\n  | "powerpoint"\n  | "excel"\n  | "xls"\n  | "word"\n  | "cv"\n  | "resume"\n  | "facebook"\n  | "linkedin"\n  | "tiktok"\n  | "instagram"\n  | "messenger"\n  | "hotline"\n  | "telephone"\n  | "phone"\n  | "shopping"\n  | "video"\n  | "laptop"\n  | "computer"\n  | "hardware"\n  | "zip"\n')))),(0,o.kt)("p",null,"Then, you would have a very ",(0,o.kt)("strong",{parentName:"p"},"elegant")," homepage as you wish."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mobile home preview",src:t(5028).Z,width:"1024",height:"964"}))),(0,o.kt)("h2",{id:"video-tutorial"},"Video tutorial"),(0,o.kt)("div",{className:"video-container"},(0,o.kt)(l.Z,{id:"YEFoHFK5ydU",playlist:!1,title:"Introduction about Home page",poster:"hqdefault",noCookie:!0,mdxType:"LiteYouTubeEmbed"})))}k.isMDXComponent=!0},640:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),o=function(){return o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},o.apply(this,arguments)};function r(e){var n=a.useState(!1),t=n[0],r=n[1],i=a.useState(!1),l=i[0],s=i[1],c=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,d=e.poster||"hqdefault",m="&"+e.params||0,k=e.muted?"&mute=1":"",g=e.announce||"Watch",f=e.webp?"webp":"jpg",h=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+h+"/"+u+"/"+d+"."+f:"https://i.ytimg.com/"+h+"/"+c+"/"+d+"."+f),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?b+"/embed/videoseries?autoplay=1"+k+"&list="+c+m:b+"/embed/"+c+"?autoplay=1&state=1"+k+m,w=e.activatedClass||"lyt-activated",N=e.adNetwork||!1,x=e.aspectHeight||9,T=e.aspectWidth||16,C=e.iframeClass||"",E=e.playerClass||"lty-playbtn",L=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},O=e.rel?"prefetch":"preload";return a.useEffect((function(){l&&P()}),[l]),a.createElement(a.Fragment,null,a.createElement("link",{rel:O,href:y,as:"image"}),a.createElement(a.Fragment,null,t&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:b}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),N&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){t||r(!0)},onClick:function(){l||s(!0)},className:L+" "+(l?w:""),"data-title":p,style:o({backgroundImage:"url("+y+")"},{"--aspect-ratio":x/T*100+"%"})},a.createElement("button",{className:E,"aria-label":g+" "+p}),l&&a.createElement("iframe",{className:C,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}},5028:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mobile-home-preview-9e56edd9a6d7c6dca245e48c8203dff4.webp"}}]);