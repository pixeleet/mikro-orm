(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{546:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(6),b=(a(0),a(803)),c={id:"arraycollection",title:"Class: ArrayCollection<T, O>",sidebar_label:"ArrayCollection"},l={unversionedId:"api/classes/arraycollection",id:"api/classes/arraycollection",isDocsHomePage:!1,title:"Class: ArrayCollection<T, O>",description:"Type parameters",source:"@site/docs/api/classes/arraycollection.md",slug:"/api/classes/arraycollection",permalink:"/docs/next/api/classes/arraycollection",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/arraycollection.md",version:"current",sidebar_label:"ArrayCollection",sidebar:"API",previous:{title:"Class: AbstractSqlPlatform",permalink:"/docs/next/api/classes/abstractsqlplatform"},next:{title:"Class: ArrayCriteriaNode",permalink:"/docs/next/api/classes/arraycriterianode"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Indexable",id:"indexable",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_property",id:"_property",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"items",id:"items",children:[]},{value:"owner",id:"owner",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"length",id:"length",children:[]},{value:"property",id:"property",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Symbol.iterator",id:"symboliterator",children:[]},{value:"add",id:"add",children:[]},{value:"contains",id:"contains",children:[]},{value:"count",id:"count",children:[]},{value:"getIdentifiers",id:"getidentifiers",children:[]},{value:"getItems",id:"getitems",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"propagate",id:"propagate",children:[]},{value:"propagateToInverseSide",id:"propagatetoinverseside",children:[]},{value:"propagateToOwningSide",id:"propagatetoowningside",children:[]},{value:"remove",id:"remove",children:[]},{value:"removeAll",id:"removeall",children:[]},{value:"set",id:"set",children:[]},{value:"shouldPropagateToCollection",id:"shouldpropagatetocollection",children:[]},{value:"toArray",id:"toarray",children:[]},{value:"toJSON",id:"tojson",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"O"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"ArrayCollection")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/collection"}),"Collection")))),Object(b.b)("h2",{id:"indexable"},"Indexable"),Object(b.b)("p",null,"\u25aa ","[k: number]",": T"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new ArrayCollection"),"(",Object(b.b)("inlineCode",{parentName:"p"},"owner"),": O & ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<","O>, ",Object(b.b)("inlineCode",{parentName:"p"},"items?"),": T[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/arraycollection"}),"ArrayCollection")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L12"}),"packages/core/src/entity/ArrayCollection.ts:12"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"owner")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O & ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<","O>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"items?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/arraycollection"}),"ArrayCollection")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"_property"},"_","property"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","property"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L12"}),"packages/core/src/entity/ArrayCollection.ts:12"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initialized"},"initialized"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("strong",{parentName:"p"},"initialized"),": boolean = true"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L11"}),"packages/core/src/entity/ArrayCollection.ts:11"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"items"},"items"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"items"),": Set","<","T> = new Set","<","T>()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L10"}),"packages/core/src/entity/ArrayCollection.ts:10"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"owner"},"owner"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"owner"),": O & ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<","O>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L14"}),"packages/core/src/entity/ArrayCollection.ts:14"))),Object(b.b)("h2",{id:"accessors"},"Accessors"),Object(b.b)("h3",{id:"length"},"length"),Object(b.b)("p",null,"\u2022 get ",Object(b.b)("strong",{parentName:"p"},"length"),"(): number"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L114"}),"packages/core/src/entity/ArrayCollection.ts:114"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," number"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"property"},"property"),Object(b.b)("p",null,"\u2022 get ",Object(b.b)("strong",{parentName:"p"},"property"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L127"}),"packages/core/src/entity/ArrayCollection.ts:127"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"symboliterator"},"[Symbol.iterator]"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"[Symbol.iterator]"),"(): IterableIterator","<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L118"}),"packages/core/src/entity/ArrayCollection.ts:118"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," IterableIterator","<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"add"},"add"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"add"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>)[]): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L58"}),"packages/core/src/entity/ArrayCollection.ts:58"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...items")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>)[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"contains"},"contains"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"contains"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"check?"),": boolean): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L97"}),"packages/core/src/entity/ArrayCollection.ts:97"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"check?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(): number"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L102"}),"packages/core/src/entity/ArrayCollection.ts:102"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," number"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getidentifiers"},"getIdentifiers"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getIdentifiers"),"<","U>(",Object(b.b)("inlineCode",{parentName:"p"},"field?"),": string): U[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L46"}),"packages/core/src/entity/ArrayCollection.ts:46"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#iprimarykey"}),"IPrimaryKey")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary\\","<","T> & IPrimaryKey")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"field?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," U[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getitems"},"getItems"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getItems"),"(): T[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L27"}),"packages/core/src/entity/ArrayCollection.ts:27"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrate"},"hydrate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hydrate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"items"),": T[]): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L78"}),"packages/core/src/entity/ArrayCollection.ts:78"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"items")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(",Object(b.b)("inlineCode",{parentName:"p"},"fully?"),": boolean): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L106"}),"packages/core/src/entity/ArrayCollection.ts:106"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fully")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagate"},"propagate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"propagate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L137"}),"packages/core/src/entity/ArrayCollection.ts:137"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagatetoinverseside"},"propagateToInverseSide"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"propagateToInverseSide"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L145"}),"packages/core/src/entity/ArrayCollection.ts:145"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagatetoowningside"},"propagateToOwningSide"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"propagateToOwningSide"),"(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L153"}),"packages/core/src/entity/ArrayCollection.ts:153"))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"remove"},"remove"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"remove"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>)[]): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L83"}),"packages/core/src/entity/ArrayCollection.ts:83"))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...items")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>)[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removeall"},"removeAll"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"removeAll"),"(): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L93"}),"packages/core/src/entity/ArrayCollection.ts:93"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"set"},"set"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"set"),"(",Object(b.b)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>)[]): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L70"}),"packages/core/src/entity/ArrayCollection.ts:70"))),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"items")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<","T>)[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"shouldpropagatetocollection"},"shouldPropagateToCollection"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"shouldPropagateToCollection"),"(",Object(b.b)("inlineCode",{parentName:"p"},"collection"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/arraycollection"}),"ArrayCollection"),"<","O, T>, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"add",'"'," ","|"," ",'"',"remove",'"',"): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L163"}),"packages/core/src/entity/ArrayCollection.ts:163"))),Object(b.b)("h4",{id:"parameters-11"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"collection")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/arraycollection"}),"ArrayCollection"),"<","O, T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"add",'"'," ","|"," ",'"',"remove",'"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toarray"},"toArray"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toArray"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L31"}),"packages/core/src/entity/ArrayCollection.ts:31"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),"[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7248762/packages/core/src/entity/ArrayCollection.ts#L42"}),"packages/core/src/entity/ArrayCollection.ts:42"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),"[]"))}p.isMDXComponent=!0},803:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),j=r,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(s,l(l({ref:t},i),{},{components:a})):n.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);