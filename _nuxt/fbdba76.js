(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{506:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return h}));var o=n(507),r=n(0),c=Object(r.h)("v-card__actions"),l=Object(r.h)("v-card__subtitle"),d=Object(r.h)("v-card__text"),h=Object(r.h)("v-card__title");o.a},507:function(e,t,n){"use strict";n(12),n(13),n(14),n(5),n(16),n(11),n(17);var o=n(2),r=(n(22),n(186),n(187),n(508),n(232)),c=n(234),l=n(100),d=n(7);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(c.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=v({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=c.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},508:function(e,t,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("e23b7040",content,!0,{sourceMap:!1})},509:function(e,t,n){var o=n(19)(!1);o.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=o},517:function(e,t,n){var content=n(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("e562ce00",content,!0,{sourceMap:!1})},532:function(e,t,n){"use strict";n(517)},533:function(e,t,n){var o=n(19)(!1);o.push([e.i,".video-container{position:relative;padding-bottom:56.25%;height:0}.video-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=o},544:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{videos:[{src:"https://www.youtube.com/embed/dXlIDSDf25E",title:"Smart Farming",id:"dXlIDSDf25E",show:!1},{src:"https://www.youtube.com/embed/kM5732TubOI",title:"Bushfire Warning System",id:"kM5732TubOI",show:!1,transcript:"The issue of fires in Australia has attracted a lot of attention globally. After months of unusually hot, dry weather, the fires have caused at least thousands of people to flee and hundreds of millions of animals to die, and have destroyed more than 2,000 homes. No doubt the photos of the fires shocked the world, but satellite images from space are even more revealing of the daunting problems Australians must face. National media and satellite observers are updating the fires on a daily basis. The fires are moving too fast for animals with severe water shortages to escape, and no trees can survive the blaze. Many of the surviving animals were unable to find safe habitat for shelter. Some species may face severe and irreparable ongoing damage. The combination of low-orbiting satellites and infrared imaging technology can effectively capture changes in parameters such as surface temperature to provide timely warning of fire locations. nasa is using multiple sensors to track the movement of smoke from the Australian fires. Their instruments are working together to detect actively burning fires, track the transport of smoke from fires, provide information for fire management, and map the extent of ecosystem change based on the extent and severity of fire damage. many of NASA's extensive Earth observation instruments help us understand fires in the Earth system. Satellites in polar orbit provide observations of the entire Earth several times a day, while satellites in geostationary orbit provide low-resolution images of fires, smoke, and clouds every 5 to 15 minutes. Therefore, promoting the application of low-orbit satellites for fire warning as soon as possible can effectively reduce property damage and ecological damage."},{src:"https://www.youtube.com/embed/F_xUbcLB_Bo",title:"Autonomous Shipping",id:"F_xUbcLB_Bo",show:!1,transcript:"Autonomous ships, also known as autonomous container ships or maritime autonomous surface ships (MASS), are crewless vessels that transport either containers or bulk cargo over navigable waters with little or no human interaction. Different methods and levels of autonomy can be achieved through monitoring and remote control from a nearby manned ship, an onshore control center or through artificial intelligence and machine learning, letting the vessel itself decide the course of action. Autonomous shipping has four major challenges: high data volume, low communication bandwidth, high communication cost, and harsh marine environment. The application of low orbiting satellites can be an effective solution to the problem. Low orbit satellites' high precision imaging, communication and other functions can provide 360° intelligent perception of the ship's surrounding posture and warn the crew of danger signals to support ships navigating in complex environments and narrow waterways. In the field of maritime communication, low-orbiting satellites can provide data relay services for telecom operators and enterprises, serve maritime scientific data transmission, and carry out information pushing such as fishing situation and early warning; in the field of integrated ocean sensing communication, low-orbiting satellites can carry out ocean data collection, provide ship AIS/VDES services and ship timing and location, etc. For personal application issues, low-orbiting satellites can provide voice, fax and data services for all types and tonnage of ships, while satisfying crew members to talk, weibo and video with their families, boosting crew morale and improving mental state. "},{src:"https://www.youtube.com/embed/d4v0-_t1PFU",title:"Smart Mining",id:"d4v0-_t1PFU",show:!1,transcript:"In the past decade, the mining industry has faced an increasingly difficult situation - low mining efficiency, poor safety and high costs. In the coming decade, new technologies such as safety sensor technology, big data and spatial data visualization technology, smart mines, low-orbiting satellites and monitoring technology will lead the industry into the era of intelligence in the era of smart mining. Mining by its nature has a negative impact on the environment. While this is an unavoidable reality, mining companies can significantly reduce this impact by tracking how resources are extracted and disposed of. For example, low-orbiting satellites can be used to monitor excavation and mining projects, keeping detailed records of the spread of waste and hazardous substances. By introducing an element of accountability, mining companies will be more mindful of their activities, assessing and minimizing the subsequent ripple effects. In addition to documenting the impact of mines on surrounding ecosystems, LEO satellites can be used to assess pipeline infrastructure and detention ponds, while also providing safety monitoring in hazardous areas and asset management across multiple sites. By providing a detailed picture of what is not visible to the naked eye on the ground, LEO satellites only become more important to the smooth and successful operation of mining operations. "},{src:"https://www.youtube.com/embed/piP6wrwKFgw",title:"Tsuanami Warning System",id:"piP6wrwKFgw",show:!1,transcript:"Tsunamis are a devastating disaster that cannot be accurately predicted at this time. The main way to achieve rapid or real-time warning of tsunamis is to improve earthquake and tsunami monitoring networks and build a better tsunami warning system to minimize the impact of tsunami disasters. Since submarine earthquakes may occur in any region of the global oceanic subduction zone, tsunami monitoring and early warning must first have the ability to observe the sea. The harsh environment in the ocean makes it difficult to install detection sensors, and information transmission is also very difficult, even if signs of a tsunami are detected, it is difficult to make early warning notifications in the first place. Low-orbiting satellites have the potential to enable ocean observation capabilities. Low orbiting satellites have high temporal and spatial resolution. Low-orbiting satellites can observe the hydrological changes in the ocean from the air and continuously gather monitoring information to the early warning system. The information is then transmitted to processing systems that will rapidly process, analyze, calculate, and identify parameters characteristic of dangerous earthquakes and tsunamis. Based on this information, early warning personnel carry out the production of tsunami warning products, and finally, again via low-orbiting satellites, release tsunami warning information to areas where communication is difficult, such as ships at sea and people on shore. Minimize the possible economic losses and human casualties caused by tsunamis. "}]}}},r=(n(532),n(35)),c=n(46),l=n.n(c),d=n(235),h=n(507),v=n(506),m=n(489),f=n(494),w=n(128),y=n(490),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticStyle:{"margin-left":"2px"}},e._l(e.videos,(function(video){return n("v-col",{key:video.id,attrs:{lg:4,md:6,sm:12,cols:12}},[n("v-card",[n("v-card-title",[e._v(" "+e._s(video.title)+" ")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{src:video.src,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"orange lighten-2",text:""},on:{click:function(e){video.show=!video.show}}},[e._v(e._s(video.show?"Hide Transcript":"Show Transcript"))])],1),e._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:video.show,expression:"video.show"}]},[n("v-divider"),e._v(" "),n("v-card-text",[e._v("\n              "+e._s(video.transcript)+"\n            ")])],1)])],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VDivider:f.a,VExpandTransition:w.a,VRow:y.a})}}]);