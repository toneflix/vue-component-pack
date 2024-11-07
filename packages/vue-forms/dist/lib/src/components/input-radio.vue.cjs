"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("../utils/providers.cjs"),d={class:"input-radio"},u={key:0},c={key:0,class:"sr-only"},m={class:"radio-container"},p=["id","name","value","checked"],y=["for"],B={class:"field-anotations"},g={key:0,class:"field-hint"},k=e.defineComponent({name:"InputField",__name:"input-radio",props:e.mergeModels({type:{},name:{},label:{},value:{},placeholder:{},count:{},max:{},min:{},col:{},autogrow:{type:Boolean},hint:{},secret:{type:Boolean},group:{},choices:{},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},pattern:{},multiple:{type:Boolean},step:{},maxLength:{},minLength:{},customValidation:{type:Function},validationMessage:{},icon:{},tooltip:{},format:{},styleClass:{},prefix:{},suffix:{},default:{},trueValue:{type:[Boolean,Number,String]},falseValue:{type:[Boolean,Number,String]}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=e.useModel(a,"modelValue"),r=t=>{const n=t.target;l.value=n.value};return(t,n)=>(e.openBlock(),e.createElementBlock("div",d,[t.label?(e.openBlock(),e.createElementBlock("label",u,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("fieldset",null,[t.label?(e.openBlock(),e.createElementBlock("legend",c,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",m,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.choices,(o,i)=>(e.openBlock(),e.createElementBlock("div",{class:"radio-item",key:i},[e.createElementVNode("input",{type:"radio",id:o+t.name,name:t.name,value:o,checked:l.value===o,onChange:r},null,40,p),e.createElementVNode("label",{for:o+t.name},e.toDisplayString(e.unref(s.titleCase)(o)),9,y)]))),128))])]),e.createElementVNode("div",B,[t.hint?(e.openBlock(),e.createElementBlock("p",g,e.toDisplayString(t.hint),1)):e.createCommentVNode("",!0)])]))}});exports.default=k;
