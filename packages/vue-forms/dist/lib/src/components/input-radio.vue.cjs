"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),d=require("../utils/providers.cjs"),m={class:"input-radio"},c={key:0},p={key:0,class:"sr-only"},v={class:"radio-container"},y=["id","name","value","checked"],f=["for"],g={class:"field-anotations"},B={key:0,class:"field-hint"},k=e.defineComponent({name:"InputField",__name:"input-radio",props:e.mergeModels({type:{},name:{},label:{},value:{},placeholder:{},count:{},max:{},min:{},col:{},autogrow:{type:Boolean},hint:{},secret:{type:Boolean},group:{},choices:{default:()=>[]},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},pattern:{},multiple:{type:Boolean},step:{},maxLength:{},minLength:{},customValidation:{},validationMessage:{},icon:{},tooltip:{},format:{},styleClass:{},prefix:{},suffix:{},default:{},trueValue:{type:[Boolean,Number,String]},falseValue:{type:[Boolean,Number,String]}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=a,n=e.useModel(a,"modelValue"),s=e.computed(()=>{var t;return((t=r.choices)==null?void 0:t.map(l=>typeof l=="object"&&l!==null&&"label"in l&&"value"in l?l:{label:String(l),value:l}))??[]}),i=t=>{const l=t.target;n.value=l.value};return(t,l)=>(e.openBlock(),e.createElementBlock("div",m,[t.label?(e.openBlock(),e.createElementBlock("label",c,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("fieldset",null,[t.label?(e.openBlock(),e.createElementBlock("legend",p,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",v,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.value,(o,u)=>(e.openBlock(),e.createElementBlock("div",{class:"radio-item",key:u},[e.createElementVNode("input",{type:"radio",id:"vf-"+o.value+t.name,name:t.name,value:o.value,checked:n.value===o.value,onChange:i},null,40,y),e.createElementVNode("label",{for:"vf-"+o.value+t.name},e.toDisplayString(e.unref(d.titleCase)(o.label)),9,f)]))),128))])]),e.createElementVNode("div",g,[t.hint?(e.openBlock(),e.createElementBlock("p",B,e.toDisplayString(t.hint),1)):e.createCommentVNode("",!0)])]))}});exports.default=k;
