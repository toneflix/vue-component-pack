"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i={class:"input-checkbox"},u={class:"field-check"},r=["id","name","checked"],c={key:0,class:"field-anotations"},d=["for"],m={key:1,class:"field-hint"},p=e.defineComponent({name:"InputField",__name:"input-checkbox",props:e.mergeModels({type:{},name:{},label:{},value:{},placeholder:{},count:{},max:{},min:{},col:{},autogrow:{type:Boolean},hint:{},secret:{type:Boolean},group:{},choices:{},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},pattern:{},multiple:{type:Boolean},autofocus:{type:Boolean},step:{},maxLength:{},minLength:{},customValidation:{},validationMessage:{},icon:{},tooltip:{},format:{},styleClass:{},prefix:{},suffix:{},default:{},trueValue:{type:[Boolean,Number,String],default:!0},falseValue:{type:[Boolean,Number,String],default:!1}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const l=o,a=e.useModel(o,"modelValue"),s=t=>{const n=t.target;a.value=n.checked?l.trueValue:l.falseValue};return(t,n)=>(e.openBlock(),e.createElementBlock("div",i,[e.createElementVNode("div",u,[e.createElementVNode("input",{id:"vf-"+t.name,name:t.name,checked:a.value===t.trueValue,type:"checkbox",onChange:s},null,40,r)]),t.label||t.hint?(e.openBlock(),e.createElementBlock("div",c,[t.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:"vf-"+t.name},e.toDisplayString(t.label),9,d)):e.createCommentVNode("",!0),t.hint?(e.openBlock(),e.createElementBlock("p",m,e.toDisplayString(t.hint),1)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)]))}});exports.default=p;
