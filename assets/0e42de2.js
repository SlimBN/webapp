(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{451:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(452),o=r(2),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},452:function(t,e,r){"use strict";r(11),r(12),r(210),r(9),r(211),r(24),r(16),r(17),r(13),r(10);var n=r(1),o=(r(453),r(212)),c=r(456),l=r(87),d=r(7);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},453:function(t,e,r){var content=r(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("e23b7040",content,!0,{sourceMap:!1})},455:function(t,e,r){(e=r(14)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},462:function(t,e,r){"use strict";r(11),r(12),r(9),r(47),r(157),r(93),r(454),r(24),r(16),r(17),r(13),r(19),r(35),r(42),r(67),r(70),r(10),r(48);var n=r(1),o=(r(295),r(3)),c=r(86),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),_=f.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(_)};function x(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=O.get(l);return v||function(){var t,e;for(e in v=[],y)y[e].forEach((function(t){var n=r[t],o=x(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},463:function(t,e,r){"use strict";r(11),r(33),r(12),r(9),r(47),r(157),r(454),r(16),r(17),r(13),r(19),r(35),r(68),r(42),r(67),r(10),r(48);var n=r(1),o=(r(295),r(3)),c=r(86),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return f.reduce((function(r,n){return r[t+Object(l.G)(n)]=e(),r}),{})}var _=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=h("align",(function(){return{type:String,default:null,validator:_}})),x=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},O=h("justify",(function(){return{type:String,default:null,validator:x}})),w=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},j=h("alignContent",(function(){return{type:String,default:null,validator:w}})),k={align:Object.keys(y),justify:Object.keys(O),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,r){var n=C[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:x}},O),{},{alignContent:{type:String,default:null,validator:w}},j),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),P.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},482:function(t,e,r){"use strict";var n={props:{services:{type:Array,default:null}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/services/"+t.id)},updatePagination:function(t){console.log(t)}}},o=r(54),c=r(63),l=r.n(c),d=r(452),v=r(645),f=r(162),m=r(184),h=r(445),_=r(489),y=r(53),x=r(448),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto"},[null==t.services.length?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):r("div",[r("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,"mobile-breakpoint":"100"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),n),[t._v("mdi-stop-circle")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Active")])]):r("div")]}},{key:"item.patientName",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(r.patientName)+" ( "+t._s(r.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var n=e.item;return[null==n.staffName?r("p",[t._v("Unassigned")]):r("p",[t._v(t._s(n.staffName)+" ( "+t._s(n.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCard:d.a,VDataTable:v.a,VIcon:f.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:y.a,VTooltip:x.a})},669:function(t,e,r){"use strict";r.r(e);r(41),r(28),r(27);var n=r(5),o={components:{"service-card":r(482).a},data:function(){return{staffdata:null,staffpatients:[],services:[],allservices:null,tab:null}},methods:{getStaffById:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/")).then((function(e){t.staffdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getStaffPatinets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/patients")).then((function(e){t.staffpatients=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAcitveAssignedServices:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("services/staff/".concat(t.$route.params.id,"/?active=true")).then((function(e){null!==e&&(t.services=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getHistoricalAssignedServices:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("services/staff/".concat(t.$route.params.id,"/?")).then((function(e){null!==e&&(t.allservices=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},handleClick:function(t){this.$router.push("/services/"+t.id)},updatePagination:function(t){console.log(t)}},created:function(){this.getStaffById(),this.getAcitveAssignedServices()},computed:{desserts:{get:function(){return[{name:"Name",calories:null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName},{name:"Role",calories:"undefined"==this.staffdata.user?"No role":this.staffdata.user.roles[0].name.toLowerCase()},{name:"Depatment",calories:""},{name:"Work Shift",calories:""},{name:"Location",calories:""},{name:"Jelly bean",calories:375},{name:"Is Staff",calories:"undefined"==this.staffdata.user.isStaff?"":this.staffdata.user.isStaff},{name:"Level",calories:null==this.staffdata.level?"None":this.staffdata.level},{name:"Phone",calories:null==this.staffdata.contacts?"None ":this.staffdata.contacts},{name:"Email",calories:this.staffdata.email},{name:"Joining Date",calories:(new Date).toISOString().slice(0,10)}]}}}},c=r(54),l=r(63),d=r.n(l),v=r(189),f=r(452),m=r(451),h=r(462),_=r(442),y=r(162),x=r(186),O=r(121),w=r(36),j=r(191),k=r(184),C=r(463),S=r(586),P=r(639),V=r(684),N=r(676),D=r(633),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[null==t.staffdata?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):r("v-card",{attrs:{flat:"",tile:"",outlined:""}},[r("v-card-title",{staticClass:"d-flex flex-row justify-center mb-2"},[r("v-avatar",{attrs:{size:"82"}},[r("img",{attrs:{alt:"user",height:"100%",width:"100%",src:null==t.staffdata.imageUrl?"https://boylancode.com/wp-content/uploads/2018/09/Man-Placeholder-Headshot.png":t.staffdata.imageUrl}})])],1),t._v(" "),r("div",{staticClass:"d-flex flex-row justify-center mb-2"},[r("v-icon",{staticClass:"red--text lighten-4 mx-1"},[t._v("mdi-account-lock")]),t._v(" "),r("v-icon",{staticClass:"blue--text lighten-4 mx-1"},[t._v("mdi-camera")]),t._v(" "),r("v-icon",{staticClass:"orange--text mx-1"},[t._v("mdi-pencil")])],1),t._v(" "),r("v-card-text",[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[t._l(t.desserts,(function(e){return r("tr",{key:e.name},[r("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.calories))])])})),t._v(" "),r("tr")],2)]},proxy:!0}])})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-card",{attrs:{outlined:"",tile:""}},[r("v-list",{staticClass:"ma-0 pa-0"},[r("v-list-item-group",{attrs:{color:"primary"}},[r("v-list-item",{staticClass:"ma-0 pa-0",attrs:{inactive:"",ripple:!1}},[r("v-list-item-content",{staticClass:"ma-0 pa-0"},[r("v-tabs",{staticClass:"elevation-2",attrs:{"slider-color":"primary","slider-size":"3",color:"primary",left:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{staticClass:"ffont-weight-normal"},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-eye")]),t._v("Profile")],1)]),t._v(" "),r("v-tab",{staticClass:"font-weight-normal"},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-account")]),t._v("Payroll")],1)]),t._v(" "),r("v-tab",{staticClass:"font-weight-normal"},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-medical-bag")]),t._v(" Leaves")],1)]),t._v(" "),r("v-tab",{staticClass:"font-weight-normal"},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-history")]),t._v("\n                      Attandence")],1)]),t._v(" "),r("v-tab",{staticClass:"font-weight-normal"},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Document")],1)]),t._v(" "),r("v-tab",{staticClass:"font-weight-normal"},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Timeline")],1)]),t._v(" "),r("v-tab",{staticClass:"font-weight-normal",on:{click:t.getHistoricalAssignedServices}},[r("span",[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("Service\n                      History")],1)])],1),t._v(" "),r("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("h2",{staticClass:"ma-8"},[t._v("Profile")])]),t._v(" "),r("v-tab-item",[r("service-card",{attrs:{services:t.services}})],1),t._v(" "),r("v-tab-item",[r("h2",{staticClass:"ma-8"},[t._v("Leaves")])]),t._v(" "),r("v-tab-item",[r("h2",{staticClass:"ma-8"},[t._v("Attendance")])]),t._v(" "),r("v-tab-item",[r("h1",{staticClass:"ma-8"},[t._v("Document")])]),t._v(" "),r("v-tab-item",[r("h1",{staticClass:"ma-8"},[t._v("Timeline")])]),t._v(" "),r("v-tab-item",[null==t.allservices?r("v-progress-circular"):r("service-card",{attrs:{services:t.allservices}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:v.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VCol:h.a,VContainer:_.a,VIcon:y.a,VList:x.a,VListItem:O.a,VListItemContent:w.a,VListItemGroup:j.a,VProgressCircular:k.a,VRow:C.a,VSimpleTable:S.a,VTab:P.a,VTabItem:V.a,VTabs:N.a,VTabsItems:D.a})}}]);