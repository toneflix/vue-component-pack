"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./input-checkbox.vue.cjs"),n=require("./input-field.vue.cjs"),p=require("./input-select.vue.cjs"),m=require("./input-radio.vue.cjs"),i=require("./input-switch.vue.cjs"),f=e.defineComponent({__name:"form-group",props:e.mergeModels({field:{},useGrid:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const d=r,o=e.useModel(r,"modelValue"),a=e.computed(()=>["text","email","url","password","number","date","datetime-local","month","search","tel","time","week","file"].includes(d.field.type));return(l,u)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(`form-group col-${l.useGrid?"span-":""}${l.field.col}`)},[e.renderSlot(l.$slots,"input",e.mergeProps(l.field,{modelValue:o.value}),()=>[a.value?(e.openBlock(),e.createBlock(n.default,e.mergeProps({key:0,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=t=>o.value=t)},l.field),null,16,["modelValue"])):e.createCommentVNode("",!0)],!0),e.renderSlot(l.$slots,"select",e.mergeProps(l.field,{modelValue:o.value}),()=>[l.field.type==="select"?(e.openBlock(),e.createBlock(p.default,e.mergeProps({key:0,modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=t=>o.value=t)},l.field),null,16,["modelValue"])):e.createCommentVNode("",!0)],!0),e.renderSlot(l.$slots,"checkbox",e.mergeProps(l.field,{modelValue:o.value}),()=>[l.field.type==="checkbox"?(e.openBlock(),e.createBlock(s.default,e.mergeProps({key:0,modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=t=>o.value=t)},l.field),null,16,["modelValue"])):e.createCommentVNode("",!0)],!0),e.renderSlot(l.$slots,"radio",e.mergeProps(l.field,{modelValue:o.value}),()=>[l.field.type==="radio"?(e.openBlock(),e.createBlock(m.default,e.mergeProps({key:0,modelValue:o.value,"onUpdate:modelValue":u[3]||(u[3]=t=>o.value=t)},l.field),null,16,["modelValue"])):e.createCommentVNode("",!0)],!0),e.renderSlot(l.$slots,"switch",e.mergeProps(l.field,{modelValue:o.value}),()=>[l.field.type==="switch"?(e.openBlock(),e.createBlock(i.default,e.mergeProps({key:0,modelValue:o.value,"onUpdate:modelValue":u[4]||(u[4]=t=>o.value=t)},l.field),null,16,["modelValue"])):e.createCommentVNode("",!0)],!0)],2))}});exports.default=f;