"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i={class:"input-field"},u=["for"],s=["id","name"],d=["value"],m=e.defineComponent({name:"InputField",__name:"input-select",props:e.mergeModels({type:{},name:{},label:{},value:{},placeholder:{},count:{},max:{},min:{},col:{},autogrow:{type:Boolean},hint:{},secret:{type:Boolean},group:{},choices:{},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},pattern:{},multiple:{type:Boolean},step:{},maxLength:{},minLength:{},customValidation:{type:Function},validationMessage:{},icon:{},tooltip:{},format:{},styleClass:{},prefix:{},suffix:{},default:{},trueValue:{type:[Boolean,Number,String]},falseValue:{type:[Boolean,Number,String]}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=e.useModel(a,"modelValue");return(t,n)=>(e.openBlock(),e.createElementBlock("div",i,[t.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:t.name},e.toDisplayString(t.label),9,u)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("select",{id:t.name,name:t.name,"onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.choices,(o,r)=>(e.openBlock(),e.createElementBlock("option",{key:r,value:o},e.toDisplayString(o),9,d))),128))],8,s),[[e.vModelSelect,l.value]])]))}});exports.default=m;
