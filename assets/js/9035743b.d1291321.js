(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,s=d["".concat(c,".").concat(u)]||d[u]||m[u]||b;return a?r.a.createElement(s,l(l({ref:t},p),{},{components:a})):r.a.createElement(s,l({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},608:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(1048)),c={id:"knex.knex.havingrange",title:"Interface: HavingRange<TRecord, TResult>",sidebar_label:"HavingRange",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.havingrange",id:"version-4.4/api/interfaces/knex.knex.havingrange",isDocsHomePage:!1,title:"Interface: HavingRange<TRecord, TResult>",description:"Interface: HavingRange",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.havingrange.md",slug:"/api/interfaces/knex.knex.havingrange",permalink:"/docs/api/interfaces/knex.knex.havingrange",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.havingrange.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612893806,sidebar_label:"HavingRange",sidebar:"version-4.4/API",previous:{title:"Interface: Having<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.having"},next:{title:"Interface: Intersect<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.intersect"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-havingrangetrecord-tresult"},"Interface: HavingRange<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".HavingRange"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HavingRange"))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"HavingRange"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": K, ",Object(b.b)("inlineCode",{parentName:"p"},"values"),": readonly (",Object(b.b)("em",{parentName:"p"},"Readonly"),"<TRecord","[K]",">"," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<TRecord","[K]",">",">",")[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol"))))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:null},"K")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"values")),Object(b.b)("td",{parentName:"tr",align:null},"readonly (",Object(b.b)("em",{parentName:"td"},"Readonly"),"<TRecord","[K]",">"," ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<TRecord","[K]",">",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1418"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"HavingRange"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"values"),": readonly ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value")),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"values")),Object(b.b)("td",{parentName:"tr",align:null},"readonly ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1422"))}o.isMDXComponent=!0}}]);