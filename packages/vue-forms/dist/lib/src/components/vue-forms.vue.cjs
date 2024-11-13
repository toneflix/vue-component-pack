"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),S=require("./form-group.vue.cjs");;/* empty css                    */const L=require("../utils/providers.cjs"),y=require("./form-actions.vue.cjs"),N={key:0,class:"group-separator"},$={key:1,class:"form-groups"},F={class:"group-title"},w={key:0,class:"group-subtitle"},q={key:0,class:"group-label"},U={key:0,class:"group-separator"},z=e.defineComponent({__name:"vue-forms",props:e.mergeModels({loading:{type:Boolean},useGrid:{type:Boolean},rounded:{type:Boolean},bordered:{type:Boolean},separator:{type:Boolean},groupMeta:{},hideSubmit:{type:Boolean},hideCancel:{type:Boolean},cancelLabel:{},submitLabel:{},showGroupLabels:{type:Boolean}},{fields:{default:()=>[]},fieldsModifiers:{},modelValue:{required:!0},modelModifiers:{}}),emits:e.mergeModels(["cancel","submit"],["update:fields","update:modelValue"]),setup(m,{emit:G}){const V=G,d=e.useModel(m,"fields"),u=e.useModel(m,"modelValue"),p=["input","select","checkbox","radio","switch","textarea"],t=e.computed(()=>d.value.some(r=>!!r.group)),C=e.computed(()=>M(d.value)),M=r=>{const a={},l=[];return t.value?(r.forEach(o=>{o.group?(a[o.group]||(a[o.group]=[]),a[o.group].push(o)):l.push(o)}),{...a,ungrouped:l}):{ungrouped:[]}},b=()=>{V("submit")};return(r,a)=>t.value?(e.openBlock(),e.createElementBlock("div",$,[e.renderSlot(r.$slots,"prepend",{props:{formFields:d.value,isGrouped:t.value,useGrid:r.useGrid,bordered:r.bordered,rounded:r.rounded,hideSubmit:r.hideSubmit,separator:r.separator}}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(C.value,(l,o)=>{var s,c,g,h,k,B,f,v;return e.openBlock(),e.createElementBlock(e.Fragment,null,[o&&r.separator?(e.openBlock(),e.createElementBlock("hr",{class:"group-separator",key:o+"separator"})):e.createCommentVNode("",!0),(s=r.groupMeta)!=null&&s[o]?(e.openBlock(),e.createElementBlock("div",{class:"group-header",key:o+"header"},[e.createElementVNode("h3",F,e.toDisplayString(r.groupMeta[o].title),1),r.groupMeta[o].subtitle?(e.openBlock(),e.createElementBlock("p",w,e.toDisplayString(r.groupMeta[o].subtitle),1)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),o?(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["group",{bordered:!((c=r.groupMeta)!=null&&c[o])&&r.bordered||!!((h=(g=r.groupMeta)==null?void 0:g[o])!=null&&h.bordered),rounded:!((k=r.groupMeta)!=null&&k[o])&&r.rounded||!!((f=(B=r.groupMeta)==null?void 0:B[o])!=null&&f.rounded)}]),key:o+"group"},[o!=="ungrouped"&&r.showGroupLabels&&!((v=r.groupMeta)!=null&&v[o])?(e.openBlock(),e.createElementBlock("label",q,e.toDisplayString(e.unref(L.titleCase)(String(o))),1)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["vue-forms",{"form-row":!r.useGrid,"form-grid":r.useGrid}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l,n=>(e.openBlock(),e.createBlock(S.default,{key:n.name,field:n,"use-grid":r.useGrid,modelValue:u.value[n.name],"onUpdate:modelValue":i=>u.value[n.name]=i},e.createSlots({_:2},[e.renderList(p,i=>({name:i,fn:e.withCtx(E=>[e.renderSlot(r.$slots,i,e.mergeProps({ref_for:!0},E))])}))]),1032,["field","use-grid","modelValue","onUpdate:modelValue"]))),128))],2)],2)):e.createCommentVNode("",!0)],64)}),256)),e.renderSlot(r.$slots,"default",{props:{formFields:d.value,isGrouped:t.value,useGrid:r.useGrid,bordered:r.bordered,rounded:r.rounded,hideSubmit:r.hideSubmit,separator:r.separator}}),r.separator&&(!r.hideSubmit||!r.hideSubmit)?(e.openBlock(),e.createElementBlock("hr",U)):e.createCommentVNode("",!0),e.renderSlot(r.$slots,"actions",{},()=>[e.createVNode(y.default,{loading:r.loading,"hide-submit":r.hideSubmit,"hide-cancel":r.hideCancel,"submit-label":r.submitLabel,"cancel-label":r.cancelLabel,onSubmit:b,onCancel:a[1]||(a[1]=l=>r.$emit("cancel"))},null,8,["loading","hide-submit","hide-cancel","submit-label","cancel-label"])])])):(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["vue-forms",{"form-row":!r.useGrid,"form-grid":r.useGrid,bordered:r.bordered,rounded:r.rounded}])},[e.renderSlot(r.$slots,"prepend",{props:{formFields:d.value,isGrouped:t.value,useGrid:r.useGrid,bordered:r.bordered,rounded:r.rounded,hideSubmit:r.hideSubmit,separator:r.separator}}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.value,l=>(e.openBlock(),e.createBlock(S.default,{key:l.name,field:l,"use-grid":r.useGrid,modelValue:u.value[l.name],"onUpdate:modelValue":o=>u.value[l.name]=o},e.createSlots({_:2},[e.renderList(p,o=>({name:o,fn:e.withCtx(s=>[e.renderSlot(r.$slots,o,e.mergeProps({ref_for:!0},s))])}))]),1032,["field","use-grid","modelValue","onUpdate:modelValue"]))),128)),e.renderSlot(r.$slots,"default",{props:{formFields:d.value,isGrouped:t.value,useGrid:r.useGrid,bordered:r.bordered,rounded:r.rounded,hideSubmit:r.hideSubmit,separator:r.separator}}),r.separator&&(!r.hideSubmit||!r.hideSubmit)?(e.openBlock(),e.createElementBlock("hr",N)):e.createCommentVNode("",!0),e.renderSlot(r.$slots,"actions",{},()=>[e.createVNode(y.default,{loading:r.loading,"hide-submit":r.hideSubmit,"hide-cancel":r.hideCancel,"submit-label":r.submitLabel,"cancel-label":r.cancelLabel,onSubmit:b,onCancel:a[0]||(a[0]=l=>r.$emit("cancel"))},null,8,["loading","hide-submit","hide-cancel","submit-label","cancel-label"])])],2))}});exports.default=z;
