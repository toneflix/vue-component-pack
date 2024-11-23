"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("./form-group.vue.cjs"),v=require("./icon-edit.vue.cjs"),f=require("./icon-save.vue.cjs"),b={class:"vue-forms-controller inline-form"},k=e.defineComponent({name:"InlineForm",__name:"inline-form",props:e.mergeModels({name:{default:""},type:{default:"text"},expanded:{type:Boolean},showSave:{type:Boolean},labelTag:{default:"span"},labelClass:{},iconProps:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:e.mergeModels(["save"],["update:modelValue"]),setup(r,{emit:s}){const i=s,a=r,d=e.computed(()=>({type:a.type,name:a.name,autofocus:!a.expanded})),t=e.useModel(r,"modelValue"),o=e.ref("label"),m=()=>e.h(a.labelTag,{innerText:t.value,class:[a.labelClass,"inline-form-label"]}),p=()=>{o.value="label",i("save",t.value)};return(l,n)=>(e.openBlock(),e.createElementBlock("div",b,[l.expanded||o.value==="label"?e.renderSlot(l.$slots,"label",{key:0,label:t.value,value:t.value},()=>[e.createVNode(m)]):e.createCommentVNode("",!0),l.expanded||o.value==="input"?(e.openBlock(),e.createBlock(c.default,{key:1,"inline-mode":"",field:d.value,class:e.normalizeClass(["form-group inline-controller"]),modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u)},e.createSlots({_:2},[l.$slots.default?{name:"default",fn:e.withCtx(u=>[e.renderSlot(l.$slots,"default",e.mergeProps(u,{edit:()=>o.value="input"}))]),key:"0"}:void 0]),1032,["field","modelValue"])):e.createCommentVNode("",!0),!l.expanded&&o.value!=="input"?(e.openBlock(),e.createElementBlock("button",{key:2,class:"inline-button",onClick:n[1]||(n[1]=u=>o.value="input")},[e.createVNode(v.default,e.normalizeProps(e.guardReactiveProps(l.iconProps)),null,16)])):o.value==="input"?(e.openBlock(),e.createElementBlock("button",{key:3,class:"inline-button",onClick:p},[e.createVNode(f.default,e.normalizeProps(e.guardReactiveProps(l.iconProps)),null,16)])):e.createCommentVNode("",!0)]))}});exports.default=k;
