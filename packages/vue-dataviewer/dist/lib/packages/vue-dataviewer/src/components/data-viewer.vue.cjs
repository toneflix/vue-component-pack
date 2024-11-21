"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");;/* empty css                    */const v=require("./dialog/TDialog.vue.cjs"),P=require("./main-content.vue.cjs"),l=require("../utils/providers.cjs"),M=e.defineComponent({name:"DataViewer",__name:"data-viewer",props:e.mergeModels({listClass:{},exclusions:{default:()=>["id"]},formExclusions:{default:()=>["id","imageUrl"]},booleanLabels:{},rounded:{type:Boolean},bordered:{type:Boolean},separator:{type:Boolean},shadow:{type:Boolean},dateProps:{},imageProps:{default:()=>["imageUrl"]},dateFormat:{default:"do MMM, yyyy h:mm a"},labelsMap:{},valuesMap:{},titles:{},data:{},form:{},mode:{},errors:{},saving:{type:Boolean},loading:{type:Boolean}},{data:{required:!0},dataModifiers:{},form:{required:!1},formModifiers:{},mode:{default:"view"},modeModifiers:{},loading:{type:Boolean,default:!1},loadingModifiers:{},saving:{type:Boolean,default:!1},savingModifiers:{},errors:{default:{}},errorsModifiers:{}}),emits:e.mergeModels(["toggleDialog","click:save"],["update:data","update:form","update:mode","update:loading","update:saving","update:errors"]),setup(s){const n=e.useModel(s,"data"),m=e.useModel(s,"form"),d=e.useModel(s,"mode"),g=e.useModel(s,"loading"),u=e.useModel(s,"saving"),f=e.useModel(s,"errors"),i=e.ref(!1),p=(a,o="view")=>{a&&(n.value=a),d.value=o,i.value=!0};return(a,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.renderSlot(a.$slots,"default",{viewData:n.value,viewMode:d.value,saving:u.value,toggleDialog:p}),e.createVNode(v.default,e.mergeProps({modelValue:i.value,"onUpdate:modelValue":o[9]||(o[9]=r=>i.value=r)},a.$attrs),{default:e.withCtx(()=>[e.createVNode(P.default,e.mergeProps({"dialog-mode":"",class:"constrained"},a.$props,{form:m.value,"onUpdate:form":o[0]||(o[0]=r=>m.value=r),data:n.value,"onUpdate:data":o[1]||(o[1]=r=>n.value=r),errors:f.value,"onUpdate:errors":o[2]||(o[2]=r=>f.value=r),loading:g.value,"onUpdate:loading":o[3]||(o[3]=r=>g.value=r),mode:d.value,"onUpdate:mode":o[4]||(o[4]=r=>d.value=r),saving:u.value,"onUpdate:saving":o[5]||(o[5]=r=>u.value=r),onUpdateData:o[6]||(o[6]=(r,t)=>a.$emit("toggleDialog",r,t)),"onClick:save":o[7]||(o[7]=r=>a.$emit("click:save",r)),onToggleDialog:o[8]||(o[8]=r=>i.value=r)}),e.createSlots({"form-prepend":e.withCtx(r=>[e.renderSlot(a.$slots,"form-prepend",e.normalizeProps(e.guardReactiveProps(r)))]),"form-append":e.withCtx(r=>[e.renderSlot(a.$slots,"form-append",e.normalizeProps(e.guardReactiveProps(r)))]),_:2},[e.renderList(e.unref(l.slotNames),r=>({name:r,fn:e.withCtx(t=>[r==="form-append"||r==="form-prepend"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:0},e.unref(l.casts).form(t)))):r==="list-prepend"||r==="list-append"||r==="list-after"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:1},e.unref(l.casts).list(t)))):r==="list-item"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:2},e.unref(l.casts).listItem(t)))):r==="img-list-item"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:3},e.unref(l.casts).imgListItem(t)))):r==="image-viewer"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:4},e.unref(l.casts).imageViewer(t)))):r==="loader"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:5},e.unref(l.casts).loader(t)))):r==="image"?e.renderSlot(a.$slots,r,e.normalizeProps(e.mergeProps({key:6},e.unref(l.casts).image(t)))):e.createCommentVNode("",!0)])})),e.renderList(e.unref(l.formSlotNames),r=>({name:r,fn:e.withCtx(t=>[e.renderSlot(a.$slots,r,e.normalizeProps(e.guardReactiveProps(t)))])}))]),1040,["form","data","errors","loading","mode","saving"])]),_:3},16,["modelValue"])],64))}});exports.default=M;
