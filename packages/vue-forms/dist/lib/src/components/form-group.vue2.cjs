"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),p=require("./input-checkbox.vue.cjs"),n=require("./input-field.vue.cjs"),i=require("./input-select.vue.cjs"),V=require("./input-radio.vue.cjs"),v=require("./input-switch.vue.cjs"),f=require("./input-textarea.vue.cjs"),y=e.defineComponent({__name:"form-group",props:e.mergeModels({field:{},useGrid:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const d=e.useSlots(),a=e.computed(()=>Object.keys(d).some(l=>l!=="default"&&d[l])),s=r,t=e.useModel(r,"modelValue"),m=e.computed(()=>["text","email","url","password","number","date","datetime-local","month","search","tel","time","week","file"].includes(s.field.type));return(l,u)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([`form-group col-${l.useGrid?"span-":""}${l.field.col}`,{"has-slot":a.value}])},[m.value?e.renderSlot(l.$slots,"input",e.mergeProps({key:0},l.field,{modelValue:t.value}),()=>[e.createVNode(n.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=o=>t.value=o)},l.field),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="select"?e.renderSlot(l.$slots,"select",e.mergeProps({key:1},l.field,{modelValue:t.value}),()=>[e.createVNode(i.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":u[1]||(u[1]=o=>t.value=o)},l.field,{type:"select"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="checkbox"?e.renderSlot(l.$slots,"checkbox",e.mergeProps({key:2},l.field,{modelValue:t.value}),()=>[e.createVNode(p.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=o=>t.value=o)},l.field,{type:"checkbox"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="radio"?e.renderSlot(l.$slots,"radio",e.mergeProps({key:3},l.field,{modelValue:t.value}),()=>[e.createVNode(V.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":u[3]||(u[3]=o=>t.value=o)},l.field,{type:"radio"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="switch"?e.renderSlot(l.$slots,"switch",e.mergeProps({key:4},l.field,{modelValue:t.value}),()=>[e.createVNode(v.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":u[4]||(u[4]=o=>t.value=o)},l.field,{type:"switch"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="textarea"?e.renderSlot(l.$slots,"textarea",e.mergeProps({key:5},l.field,{modelValue:t.value}),()=>[e.createVNode(f.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":u[5]||(u[5]=o=>t.value=o)},l.field,{type:"textarea"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0)],2))}});exports.default=y;
