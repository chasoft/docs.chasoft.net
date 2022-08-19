"use strict";(self.webpackChunkdocs_chasoft_net=self.webpackChunkdocs_chasoft_net||[]).push([[6124],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5162:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(7294),a=o(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:o,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:o},t)}},5488:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(7462),a=o(7294),r=o(6010),i=o(2389),l=o(7392),s=o(7094),u=o(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,o;const{lazy:i,block:d,defaultValue:m,values:f,groupId:g,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),y=(0,l.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(o=b.find((e=>e.props.default)))?void 0:o.props.value)?t:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[N,P]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=g){const e=w[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,o=T.indexOf(t),n=v[o].value;n!==N&&(O(t),P(n),null!=g&&x(g,String(n)))},E=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;o=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;o=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=o)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},v.map((e=>{let{value:t,label:o,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=o?o:t)}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},3344:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=o(7462),a=(o(7294),o(3905)),r=o(5488),i=o(5162);const l={sidebar_position:10},s="Portfolio",u={unversionedId:"ari/guides/portfolio",id:"ari/guides/portfolio",title:"Portfolio",description:"Portfolio section is a special section which assits you to write, talk about your projects, products... aka portfolio. Each portfolio would have metadata and portfolio body which is a .mdx file. Each portfolio can be connected by categories, tags.",source:"@site/docs/ari/guides/portfolio.md",sourceDirName:"ari/guides",slug:"/ari/guides/portfolio",permalink:"/docs/ari/guides/portfolio",draft:!1,editUrl:"https://github.com/chasoft/docs.chasoft.net/edit/master/docs/docs/ari/guides/portfolio.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Contact",permalink:"/docs/ari/guides/pages/contact"},next:{title:"Blog",permalink:"/docs/ari/guides/blog"}},p={},c=[{value:"Process to create a new portfolio",id:"process-to-create-a-new-portfolio",level:2},{value:"Format of a portfolio <code>.mdx</code>",id:"format-of-a-portfolio-mdx",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"portfolio"},"Portfolio"),(0,a.kt)("p",null,"Portfolio section is a special section which assits you to write, talk about your projects, products... aka portfolio. Each portfolio would have ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"portfolio body")," which is a ",(0,a.kt)("inlineCode",{parentName:"p"},".mdx")," file. Each portfolio can be connected by ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tags"),"."),(0,a.kt)("p",null,"All portfolios are stored at ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"app\\routes\\__layout\\portfolio\\__mdx\\"))," and metaData are declared in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"app\\data\\portfolio.server.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="portfolio location"',title:'"portfolio','location"':!0},"my-website\n\u251c\u2500\u2500 app\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u2514\u2500\u2500 __layout\n\u2502           \u2514\u2500\u2500 portfolio\n\u2502               \u2514\u2500\u2500 __mdx\n\u2502                   \u251c\u2500\u2500 product-1.mdx\n\u2502                   \u251c\u2500\u2500 project-a.mdx\n\u2502                   \u251c\u2500\u2500 ...\n\u2502                   \u2514\u2500\u2500 project-x.mdx\n\u2502\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app\\data\\portfolio.server.ts"',title:'"app\\data\\portfolio.server.ts"'},'...\n//import your portfolio files\nimport * as P0001 from "~/routes/__layout/portfolio/__mdx/project-a.mdx"\n...\n//extract meta data\nconst data = [\n  getMdxPortfolioMeta(P0001),\n  ...\n]\n')),(0,a.kt)("h2",{id:"process-to-create-a-new-portfolio"},"Process to create a new portfolio"),(0,a.kt)("p",null,"To add a new portfolio, you need to process 2 steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a portfolio file ",(0,a.kt)("inlineCode",{parentName:"li"},".mdx")," at ",(0,a.kt)("inlineCode",{parentName:"li"},"app\\routes\\__layout\\portfolio\\__mdx\\")),(0,a.kt)("li",{parentName:"ol"},"Declare your new portfolio at ",(0,a.kt)("inlineCode",{parentName:"li"},"app\\data\\portfolio.server.ts"))),(0,a.kt)("p",null,"Simple, heh?"),(0,a.kt)("h2",{id:"format-of-a-portfolio-mdx"},"Format of a portfolio ",(0,a.kt)("inlineCode",{parentName:"h2"},".mdx")),(0,a.kt)("p",null,"You would need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Markdown")," format to compose your portfolio. Markdown format is simple and easy. Trust me. You would love Markdown. It helps you to concentrate to your writing, not to be distracting from anything."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Metadata structure"),": There are a lot of properties and explain seems complicated but they are really simple. Please take a look at some portfolio files and you would understand easier.")),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Metadata structure",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Header structure kind of PORTFOLIO in `.mdx` format\n */\ntype PortfolioMeta = {\n  attributes: {\n    meta: {\n      title: string\n      description: string\n    },\n    properties: {\n      id: string\n      /**\n       * the day that your portfolio started\n       */\n      startedDate: string\n      /**\n       * the day that your portfolio is finished\n       */\n      accomplishedDate: string\n      /**\n       * helps to organize your blog posts in great flexible way\n       */\n      tags: string[]\n      images: ImgSrcSet[]\n      categories: string[]\n      /**\n       * language of the blog post\n       * it would be consider as default language is not provided\n       * UPDATE: i use array here for some users are too lazy to do the translation,\n       * then, at very first time, they will let the article available\n       * to more than 1 language! They will update this later!\n       */\n      language?: Language[]\n      /**\n       * decorate the header of the portfolio\n       */\n      pageHeaderMeta?: PageHeaderMeta\n    }\n  }\n  filename: string\n}\n\ntype ImgSrcSet = {\n  mobile: string\n  desktop?: string\n  description?: string\n}\n\ntype PageHeaderMeta = {\n  /**\n   * array of images\n   * if it has 2 images, 1st is for mobile, 2nd is for pc\n   */\n  featuredImage?: ImgSrcSet\n  backgroundColor?: string\n  height?: string\n  /**\n   * allow user to define image position\n   * https://developer.mozilla.org/en-US/docs/Web/CSS/object-position\n   * the default position is `center-center` aka `50% 50%`\n   */\n  objectPosition?: string\n  /**\n   * allow user to define image hovering position\n   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin\n   * the default position is `center-center` aka `50% 50%`\n   */\n  objectOrigin?: string\n}\n"))),(0,a.kt)(i.Z,{value:"Sample blog file",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'---\nmeta:\n  title: Excepteur irure velit velit\n  description: Sint aliquip minim adipisicing fugiat fugiat aute excepteur laborum deserunt aliquip. Aute irure do ea cupidatat irure velit et deserunt amet. Commodo laboris ex exercitation adipisicing minim. Do labore velit in voluptate\nproperties:\n  id: P0003\n  startedDate: 2022-05-12\n  accomplishedDate: 2022-05-17\n  tags:\n    - Travel\n  images:\n    - { mobile: /placeholder.svg, desktop: /placeholder.svg }\n  categories:\n    - website\n  language:\n    - vi\n  pageHeaderMeta: {\n    featuredImage: {mobile: /placeholder.svg},\n    objectPosition: 40\n  }\n---\nimport Video from "~/components/Video"\nimport Align from "~/components/Align"\nimport Map from "~/components/Map"\nimport Alert from "~/components/Alert"\n\n# Excepteur irure velit velit\n\n<Video.Youtube\n  id="PLCzpHpwST0xx8IxDzF82Va_rhIEcpbgW5"\n  playlistCoverId="F90ozD7peX0"\n  title="Ph\u01b0\u01a1ng \xdd"\n  alignment="right"\n/>\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n\n## ut labore et dolore\n\n* magnam aliquam\n* quaerat voluptatem.\n* quaerat voluptatem.\n* quaerat voluptatem.\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?\n\nFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\n<Map\n    defaultCenter={[10.8161863, 106.7782831]}\n    defaultZoom={16}\n    hasPadding={true}\n    markers={[\n        {\n            anchor: [10.8119658,106.7759439],\n            slug: "/blog/labore-nisi-cillum-voluptate-consequat-reprehenderit-laborum-deserunt-exercitation",\n            title: "Location 1",\n            description: "Esse consequat sunt aliqua exercitation consectetur aute amet et consequat velit voluptate."\n        },\n        {\n            anchor: [10.8161863, 106.7782831],\n            color: "red",\n            slug: "/blog/minim-sunt-velit-do-veniam-velit",\n            title: "Location 2",\n            description: "Ea duis pariatur officia enim officia nostrud elit ullamco."\n        },\n        {\n            anchor: [10.8172676,106.7824432],\n            color: "green",\n            slug: "/portfolio/incididunt-eu-lorem-ut-in-proident-labore-voluptate",\n            title: "Location 3",\n            description: "Voluptate ipsum magna sit nostrud incididunt laborum."\n        },\n    ]}\n/>\n\nSeparated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n\nA small river named Duden flows by their place and supplies it with the necessary regelialia.\n\nIt is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n\nEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n\n<Alert alertType="success">\nThe Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\'t listen.\n</Alert>\n\nShe packed her seven versalia, put her initial into the belt and made herself on the way.\n\nWhen she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.\n')))))}m.isMDXComponent=!0}}]);