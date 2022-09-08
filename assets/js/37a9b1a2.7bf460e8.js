"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[536],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>s});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=m(t),c=i,f=s["".concat(l,".").concat(c)]||s[c]||p[c]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],o={id:"bundling",title:"Bundle Formats"},d=void 0,u={unversionedId:"bundling",id:"bundling",title:"Bundle Formats",description:"When bundling, each of the modules gets assigned a numeric id, meaning no dynamic requires are supported. Requires are changed by its numeric version, and modules are stored in different possible formats. Three different formats of bundling are supported:",source:"@site/../docs/Bundling.md",sourceDirName:".",slug:"/bundling",permalink:"/metro/docs/bundling",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Bundling.md",tags:[],version:"current",lastUpdatedAt:1662650038,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{id:"bundling",title:"Bundle Formats"},sidebar:"docs",previous:{title:"Local Development Setup",permalink:"/metro/docs/local-development"},next:{title:"Caching",permalink:"/metro/docs/caching"}},s={},m=[{value:"Plain bundle",id:"plain-bundle",level:2},{value:"Indexed RAM bundle",id:"indexed-ram-bundle",level:2},{value:"File RAM bundle",id:"file-ram-bundle",level:2}],c={toc:m};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"When bundling, each of the modules gets assigned a numeric id, meaning no dynamic requires are supported. Requires are changed by its numeric version, and modules are stored in different possible formats. Three different formats of bundling are supported:"),(0,a.mdx)("h2",{id:"plain-bundle"},"Plain bundle"),(0,a.mdx)("p",null,"This is the standard bundling format. In this format, all files are wrapped with a function call, then added to the global file. This is useful for environments that expect a JS only bundle (e.g. a browser). Just requiring the entry point with the ",(0,a.mdx)("inlineCode",{parentName:"p"},".bundle")," extension should trigger a build of it."),(0,a.mdx)("h2",{id:"indexed-ram-bundle"},"Indexed RAM bundle"),(0,a.mdx)("p",null,"This format composes the bundle as a binary file, which format has the following parts (all numbers are expressed in Little Endian):"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A magic number: a ",(0,a.mdx)("inlineCode",{parentName:"li"},"uint32")," must be located at the beginning of the file, with the value ",(0,a.mdx)("inlineCode",{parentName:"li"},"0xFB0BD1E5"),". This is used to verify the file."),(0,a.mdx)("li",{parentName:"ul"},"An offset table: the table is a sequence of ",(0,a.mdx)("inlineCode",{parentName:"li"},"uint32")," pairs, with a header",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"For the header, two ",(0,a.mdx)("inlineCode",{parentName:"li"},"uint32"),"s can be found: the length of the table, and the length of the startup code."),(0,a.mdx)("li",{parentName:"ul"},"For the pairs, they represent the offset in the file and the length of code module, in bytes."))),(0,a.mdx)("li",{parentName:"ul"},"Each of the modules, finished by a null byte (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\0"),").")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"` 0                   1                   2                   3                   4                   5                   6\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          Magic number                         |                          Header size                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                       Startup code size                       |                        Module 0 offset                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        Module 0 length                        |                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                                                               +\n|                                                                                                                               |\n+                                                              ...                                                              +\n|                                                                                                                               |\n+                                                               +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |                        Module n offset                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        Module n length                        | Module 0 code | Module 0 code |      ...      |       \\0      |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n| Module 1 code | Module 1 code |      ...      |       \\0      |                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                                                               +\n|                                                                                                                               |\n+                                                              ...                                                              +\n|                                                                                                                               |\n+                                                               +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               | Module n code | Module n code |      ...      |       \\0      |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+`\n")),(0,a.mdx)("p",null,"This structure is optimal for an environment that is able to load all code in memory at once:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"By using the offset table, one can load any module in constant time, where the code for module ",(0,a.mdx)("inlineCode",{parentName:"li"},"x")," is located at ",(0,a.mdx)("inlineCode",{parentName:"li"},"file[(x + 3) * sizeof(uint32)]"),". Since there is a null character (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\0"),") separating all modules, usually length does not even need to be used, and the module can be loaded directly as an ASCIIZ string."),(0,a.mdx)("li",{parentName:"ul"},"Startup code is always found at ",(0,a.mdx)("inlineCode",{parentName:"li"},"file[sizeof(uint32)]"),".")),(0,a.mdx)("p",null,"This bundling is usually used by iOS."),(0,a.mdx)("h2",{id:"file-ram-bundle"},"File RAM bundle"),(0,a.mdx)("p",null,"Each module is stored as a file, with the name ",(0,a.mdx)("inlineCode",{parentName:"p"},"js-modules/${id}.js"),", plus an extra file called ",(0,a.mdx)("inlineCode",{parentName:"p"},"UNBUNDLE")," is created, which its only content is the magic number, ",(0,a.mdx)("inlineCode",{parentName:"p"},"0xFB0BD1E5"),". Note that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"UNBUNDLE")," file is created at the root.\nThis bundling is usually used by Android, since package contents are zipped, and access to a zipped file is much faster. If the indexed format was used instead, all the bundled should be unzipped at once to get the code for the corresponding module."))}p.isMDXComponent=!0}}]);