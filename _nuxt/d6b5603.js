(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{537:function(t,e,r){"use strict";r.r(e);var n={methods:{sendMessage:function(){alert("send message")}}},o=r(33),l=r(46),c=r.n(l),d=r(232),f=r(488),h=r(2),v=(r(39),r(62),r(235),r(14),r(5),r(11),r(47),r(126),r(12),r(13),r(16),r(17),r(7)),m=r(95),w=r(117);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(v.a)(m.a,Object(w.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:_({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),j=r(489),V=r(146),B=r(492),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("v-row",{staticClass:"mb-n6"},[r("v-col",[r("v-text-field",{attrs:{label:"Name",dense:"",outlined:""}})],1),t._v(" "),r("v-col",[r("v-text-field",{attrs:{label:"Email",dense:"",outlined:""}})],1)],1),t._v(" "),r("v-row",{staticClass:"mb-n6"},[r("v-col",[r("v-text-field",{attrs:{label:"Subject",dense:"",outlined:""}})],1)],1),t._v(" "),r("v-row",{staticClass:"mb-n6"},[r("v-col",[r("v-textarea",{attrs:{dense:"",label:"Your Message","auto-grow":"",outlined:"",rows:"8","row-height":"20"}})],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{staticClass:"my-2",attrs:{color:"primary"},on:{click:t.sendMessage}},[t._v("SEND MESSAGE")]),r("v-btn",{staticClass:"my-2 ml-3"},[t._v("clear")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:f.a,VForm:y,VRow:j.a,VTextField:V.a,VTextarea:B.a})}}]);