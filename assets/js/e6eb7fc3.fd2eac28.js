"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[2678],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:g,groupId:b,className:y}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[E,O]=(0,r.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==E&&h.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,a=P.indexOf(t),n=h[a].value;n!==E&&(T(t),O(n),null!=b&&w(b,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{var r;const t=P.indexOf(e.currentTarget)-1;a=null!=(r=P[t])?r:P[P.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>P.push(e),onKeyDown:S,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},1007:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),r=a(6010);const l="browserWindow_my1Q",o="browserWindowHeader_jXSR",i="buttons_uHc7",s="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",p="bar_rrRL",d="browserWindowBody_Idgs";function m(e){let{children:t,minHeight:a,url:m="http://localhost:3000"}=e;return n.createElement("div",{className:l,style:{minHeight:a}},n.createElement("div",{className:o},n.createElement("div",{className:i},n.createElement("span",{className:u,style:{background:"#f25f58"}}),n.createElement("span",{className:u,style:{background:"#fbbe3c"}}),n.createElement("span",{className:u,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(s,"text--truncate")},m),n.createElement("div",{className:c},n.createElement("div",null,n.createElement("span",{className:p}),n.createElement("span",{className:p}),n.createElement("span",{className:p})))),n.createElement("div",{className:d},t))}},1880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162),a(1007);const l={sidebar_position:10},o="Create a page",i={unversionedId:"baris-a/guides/create-a-page",id:"baris-a/guides/create-a-page",title:"Create a page",description:"Page Overview",source:"@site/docs/baris-a/guides/create-a-page.mdx",sourceDirName:"baris-a/guides",slug:"/baris-a/guides/create-a-page",permalink:"/docs/baris-a/guides/create-a-page",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/baris-a/guides/create-a-page.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/baris-a/guides"},next:{title:"Blog & Portfolio",permalink:"/docs/baris-a/guides/blog-portfolio"}},s={},u=[{value:"Page Overview",id:"page-overview",level:2},{value:"Some behaviors",id:"some-behaviors",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-page"},"Create a page"),(0,r.kt)("h2",{id:"page-overview"},"Page Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page")," is everything you need to know about, to design your website wich Baris-A. Page has 2 sections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Page = {\n    settings: PageSettings\n    content: PageContent\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Settings"),": All behaviors of your page."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Type declaration of page settings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type PageSettings = {\n  /**\n   * BASIC\n   */\n  title: string\n  subTitle: string\n  description: string\n  /**\n   * NAVIGATION\n   * slug="/contact" => your-domain.com/contact\n   * slug="/contact/details" => your-domain.com/contact/details\n   */\n  slug: string\n  /**\n   * PAGE BANNERS\n   */\n  banners: ImgSrcSet[]\n  isFullHeight: boolean\n  defaultBanners: boolean\n  bannersExtra: BannersExtraProps\n  /**\n   * LANGUAGES\n   * if you don\'t want multi-language => `language={}`\n   */\n  language: LangTable | undefined\n  /**\n   * SIDE-BAR\n   */\n  showProfileSidebar: boolean\n  hideSidebarInSmallScreen: boolean\n}\n')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Content"),": Content of your page"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Type declaration of page content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type PageContent = Array<(\n  {\n    type: "headerBlock"\n    data: {...}\n  } | {\n    type: "textBlock"\n    data: {...}\n  } | {\n    type: "quoteBlock"\n    data: {...}\n  } | {\n    type: "list"\n    data: ListItem[]\n  } | {\n    type: "text"\n    data: MarkdownText\n    compact?: boolean\n    lang?: Language\n  } | {\n    type: "categoryGrid"\n    data: []\n  } | {\n    type: "imageGrid"\n    data: []\n  } | {\n    type: "youtube"\n    data: {...}\n  } | {\n    type: "video"\n    data: {...}\n  } | {\n    type: "resume.education"\n    data: []\n  } | {\n    type: "resume.experience"\n    data: []\n  } | {\n    type: "image"\n    data: {...}\n  } | {\n    type: "links"\n    data: []\n  } | {\n    type: "facts"\n    data: []\n  } | {\n    type: "telephone"\n    data: {..}\n  } | {\n    type: "email"\n    data: {..}\n  } | {\n    type: "address"\n    data: {..}\n  }  | {\n    type: "telephone-email" | "email-telephone"\n    data: {...}\n  } | {\n    type: "contactForm"\n  } | {\n    type: "faqs",\n    data: []\n  } | {\n    type: "map",\n    data: {...}\n  } | {\n    type: "breadcrumbs",\n    data: []\n  }\n)>\n'))))),(0,r.kt)("h2",{id:"some-behaviors"},"Some behaviors"),(0,r.kt)("p",null,"Some behaviors you should be aware."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The language file is optional. If you only support one language, just ignore the language files."),(0,r.kt)("li",{parentName:"ul"},"The path of you page is declare at ",(0,r.kt)("inlineCode",{parentName:"li"},"slug"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'settings: {\n  ...\n  /**\n   * NAVIGATION\n   * slug="/contact" => your-domain.com/contact\n   * slug="/contact/details" => your-domain.com/contact/details\n   */\n  slug: "/about",\n  ...\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Let you open each pre-made page and see the data. Then you will understand how everything is working. I have some statements which you should be aware."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The three following default folders are just to arrangment the files. You can can create any folders, or not using any folder at all, all should be all right. Just put your ",(0,r.kt)("inlineCode",{parentName:"p"},"page files")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"\\app\\data\\pages")," "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\app\\data\\pages\\blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\app\\data\\pages\\default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\app\\data\\pages\\optional")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not forget to declare your files in ",(0,r.kt)("inlineCode",{parentName:"p"},"app\\data\\pages\\index.ts"),". Baris-A read this file to do his job.")))))}p.isMDXComponent=!0}}]);