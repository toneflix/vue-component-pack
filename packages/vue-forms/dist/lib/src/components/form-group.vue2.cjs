"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),f=require("./input-checkbox.vue.cjs"),v=require("./input-field.vue.cjs"),c=require("./input-select.vue.cjs"),y=require("./input-radio.vue.cjs"),g=require("./input-switch.vue.cjs"),k=require("./input-textarea.vue.cjs"),P=e.defineComponent({__name:"form-group",props:e.mergeModels({field:{},useGrid:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const d=r,t=e.useModel(r,"modelValue"),a=e.computed(()=>["text","email","url","password","number","date","datetime-local","month","search","tel","time","week","file"].includes(d.field.type)),i=e.useSlots(),p=["input","select","checkbox","radio","switch","textarea"];function m(l){const o=i[l];return o?o().some(s=>{var n;return s.type!==Comment&&((n=s.children)==null?void 0:n.length)})&&(d.field.type===l||l==="input"&&a.value):!1}const V=e.computed(()=>p.some(m));return(l,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([`form-group col-${l.useGrid?"span-":""}${l.field.col}`,{unsloted:!V.value}])},[a.value?e.renderSlot(l.$slots,"input",e.mergeProps({key:0},l.field,{modelValue:t.value}),()=>[e.createVNode(v.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u)},l.field),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="select"?e.renderSlot(l.$slots,"select",e.mergeProps({key:1},l.field,{modelValue:t.value}),()=>[e.createVNode(c.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=u=>t.value=u)},l.field,{type:"select"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="checkbox"?e.renderSlot(l.$slots,"checkbox",e.mergeProps({key:2},l.field,{modelValue:t.value}),()=>[e.createVNode(f.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=u=>t.value=u)},l.field,{type:"checkbox"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="radio"?e.renderSlot(l.$slots,"radio",e.mergeProps({key:3},l.field,{modelValue:t.value}),()=>[e.createVNode(y.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o[3]||(o[3]=u=>t.value=u)},l.field,{type:"radio"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="switch"?e.renderSlot(l.$slots,"switch",e.mergeProps({key:4},l.field,{modelValue:t.value}),()=>[e.createVNode(g.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o[4]||(o[4]=u=>t.value=u)},l.field,{type:"switch"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0),l.field.type==="textarea"?e.renderSlot(l.$slots,"textarea",e.mergeProps({key:5},l.field,{modelValue:t.value}),()=>[e.createVNode(k.default,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o[5]||(o[5]=u=>t.value=u)},l.field,{type:"textarea"}),null,16,["modelValue"])],!0):e.createCommentVNode("",!0)],2))}});exports.default=P;
