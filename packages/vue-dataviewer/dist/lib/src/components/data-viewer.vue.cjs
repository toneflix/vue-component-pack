"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");;/* empty css                    */const P=require("./dialog/TDialog.vue.cjs"),M=require("./main-content.vue.cjs"),s=require("../utils/providers.cjs"),y=e.defineComponent({name:"DataViewer",__name:"data-viewer",props:e.mergeModels({listClass:{},dialogClass:{},dialogZIndex:{},exclusions:{default:()=>["id"]},formExclusions:{default:()=>["id","imageUrl"]},booleanLabels:{},rounded:{type:Boolean},bordered:{type:Boolean},separator:{type:Boolean},shadow:{type:Boolean},dateProps:{},imageProps:{default:()=>["imageUrl"]},dateFormat:{default:"do MMM, yyyy h:mm a"},labelsMap:{},valuesMap:{},titles:{},contentClass:{},data:{},form:{},formProps:{},mode:{},errors:{},saving:{type:Boolean},loading:{type:Boolean}},{data:{required:!0},dataModifiers:{},form:{required:!1},formModifiers:{},mode:{default:"view"},modeModifiers:{},loading:{type:Boolean,default:!1},loadingModifiers:{},saving:{type:Boolean,default:!1},savingModifiers:{},errors:{default:{}},errorsModifiers:{}}),emits:e.mergeModels(["toggleDialog","click:save"],["update:data","update:form","update:mode","update:loading","update:saving","update:errors"]),setup(t,{expose:p}){const i=e.useModel(t,"data"),m=e.useModel(t,"form"),n=e.useModel(t,"mode"),g=e.useModel(t,"loading"),u=e.useModel(t,"saving"),f=e.useModel(t,"errors"),d=e.ref(!1),v=(a,r="view")=>{a&&(i.value=a),n.value=r,d.value=!0};return p({dialogToggle:d,closeDialog:()=>d.value=!1}),(a,r)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.renderSlot(a.$slots,"default",{viewData:i.value,viewMode:n.value,saving:u.value,toggleDialog:v}),e.createVNode(P.default,{modelValue:d.value,"onUpdate:modelValue":r[9]||(r[9]=o=>d.value=o),"z-index":a.dialogZIndex,"dialog-class":a.dialogClass},{default:e.withCtx(()=>[e.createVNode(M.default,e.mergeProps({"dialog-mode":"",class:"constrained"},a.$props,{form:m.value,"onUpdate:form":r[0]||(r[0]=o=>m.value=o),data:i.value,"onUpdate:data":r[1]||(r[1]=o=>i.value=o),errors:f.value,"onUpdate:errors":r[2]||(r[2]=o=>f.value=o),loading:g.value,"onUpdate:loading":r[3]||(r[3]=o=>g.value=o),mode:n.value,"onUpdate:mode":r[4]||(r[4]=o=>n.value=o),saving:u.value,"onUpdate:saving":r[5]||(r[5]=o=>u.value=o),onUpdateData:r[6]||(r[6]=(o,l)=>a.$emit("toggleDialog",o,l)),"onClick:save":r[7]||(r[7]=o=>a.$emit("click:save",o)),onToggleDialog:r[8]||(r[8]=o=>d.value=o)}),e.createSlots({"form-prepend":e.withCtx(o=>[e.renderSlot(a.$slots,"form-prepend",e.normalizeProps(e.guardReactiveProps(o)))]),"form-append":e.withCtx(o=>[e.renderSlot(a.$slots,"form-append",e.normalizeProps(e.guardReactiveProps(o)))]),_:2},[e.renderList(e.unref(s.slotNames),o=>({name:o,fn:e.withCtx(l=>[o==="form-append"||o==="form-prepend"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:0},e.unref(s.casts).form(l)))):o==="list-prepend"||o==="list-append"||o==="list-after"||o==="footer"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:1},e.unref(s.casts).list(l)))):o==="list-item"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:2},e.unref(s.casts).listItem(l)))):o==="img-list-item"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:3},e.unref(s.casts).imgListItem(l)))):o==="image-viewer"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:4},e.unref(s.casts).imageViewer(l)))):o==="loader"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:5},e.unref(s.casts).loader(l)))):o==="image"?e.renderSlot(a.$slots,o,e.normalizeProps(e.mergeProps({key:6},e.unref(s.casts).image(l)))):e.createCommentVNode("",!0)])})),e.renderList(e.unref(s.formSlotNames),o=>({name:o,fn:e.withCtx(l=>[e.renderSlot(a.$slots,o,e.normalizeProps(e.guardReactiveProps(l)))])}))]),1040,["form","data","errors","loading","mode","saving"])]),_:3},8,["modelValue","z-index","dialog-class"])],64))}});exports.default=y;
