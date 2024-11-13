"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),E=require("dayjs"),n=require("../utils/providers.cjs"),C=require("./TBtn.vue.cjs"),V=require("./dialog/TCard.vue.cjs"),D=require("./TInnerLoading.vue.cjs"),h=require("@toneflix/vue-forms"),N={class:"flex items-center justify-between"},S={class:"card-title"},_={key:1},$={class:"t-list",separator:""},q={class:"t-item-section avatar"},A={class:"t-avatar"},j=["src"],L={class:"t-item-section"},U={class:"t-item-label caption"},T={key:0,class:"t-item-label"},z={key:1,class:"t-item-label"},O={key:2,class:"img-preview"},Y=["src"],F=e.defineComponent({name:"MainContent",__name:"main-content",props:e.mergeModels({titles:{default:()=>({view:"view Data",edit:"Edit Data",doc:"View Docs"})},dialogMode:{type:Boolean},exclusions:{default:()=>["id","user","imageUrl","createdAt","updatedAt"]},formExclusions:{default:()=>["id","user","imageUrl","createdAt","updatedAt"]},booleanLabels:{},rounded:{type:Boolean},bordered:{type:Boolean},separator:{type:Boolean},shadow:{type:Boolean}},{data:{},dataModifiers:{},form:{default:{}},formModifiers:{},mode:{default:"view"},modeModifiers:{},loading:{type:Boolean,default:!1},loadingModifiers:{},saving:{type:Boolean,default:!1},savingModifiers:{},errors:{default:{}},errorsModifiers:{}}),emits:e.mergeModels(["updateData","click:save","toggleDialog"],["update:data","update:form","update:mode","update:loading","update:saving","update:errors"]),setup(r,{emit:y}){const m=y,a=e.useModel(r,"data"),d=e.useModel(r,"form"),i=r,s=e.useModel(r,"mode"),b=e.useModel(r,"loading"),w=e.useModel(r,"saving"),v=e.useModel(r,"errors"),p=e.ref(!1),f=e.computed(()=>a.value?Object.entries(a.value).filter(t=>s.value==="edit"?![...i.exclusions,...i.formExclusions].includes(t[0]):!i.exclusions.includes(t[0])):[]),B=e.computed(()=>f.value.map(([t,o])=>({col:12,name:t,type:typeof o=="boolean"?"radio":"text",label:n.titleCase(n.slug(t," ")),choices:[{label:"Accept",value:!0},{label:"Reject",value:!0}]}))),g=(t,o="view")=>{a.value=t,s.value=o,p.value=!0;const l=Object.fromEntries(Object.entries(t).map(([u,c])=>[n.slug(u),k(c)]));m("updateData",l,o)},M=(t,o)=>{var l,u,c;return(l=i.booleanLabels)!=null&&l[t]?o?(u=i.booleanLabels)==null?void 0:u[t][0]:(c=i.booleanLabels)==null?void 0:c[t][1]:o?"Active":"Inactive"},k=(t,o)=>o&&o.includes("edAt",o.length-4)?E(String(t)).format("Do MMM, YYYY h:MM A"):typeof t=="boolean"?Number(t):Array.isArray(t)&&t.every(l=>typeof l=="string")&&s.value==="view"?n.titleCase(t.join(", ")):t;return(t,o)=>(e.openBlock(),e.createBlock(V.default,{class:e.normalizeClass({"t-card-border":t.bordered,"t-card-shadow":t.shadow,"t-card-rounded":t.rounded})},{header:e.withCtx(()=>[e.renderSlot(t.$slots,"header",{},()=>[e.createElementVNode("div",N,[e.createElementVNode("div",S,e.toDisplayString({view:t.titles.view,edit:t.titles.edit,doc:t.titles.doc}[s.value||"view"]),1),t.dialogMode?(e.openBlock(),e.createElementBlock("button",{key:0,class:"close-btn",onClick:o[0]||(o[0]=l=>t.$emit("toggleDialog",p.value))}," × ")):e.createCommentVNode("",!0)])])]),default:e.withCtx(()=>[e.createElementVNode("div",null,[s.value==="edit"?(e.openBlock(),e.createBlock(e.unref(h.VueForms),{key:0,rounded:"","show-group-labels":"",class:"p-4 m-4 mx-auto",fields:B.value,loading:w.value,modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=l=>d.value=l),onCancel:o[2]||(o[2]=l=>s.value="view"),onSubmit:o[3]||(o[3]=l=>m("click:save",a.value))},e.createSlots({_:2},[t.$slots["form-prepend"]?{name:"prepend",fn:e.withCtx(()=>[e.renderSlot(t.$slots,"form-prepend",{form:d.value,errors:v.value,viewData:a.value})]),key:"0"}:void 0,t.$slots["form-append"]?{name:"default",fn:e.withCtx(()=>[e.renderSlot(t.$slots,"form-append",{form:d.value,errors:v.value,viewData:a.value})]),key:"1"}:void 0]),1032,["fields","loading","modelValue"])):s.value==="view"&&a.value?(e.openBlock(),e.createElementBlock("div",_,[e.createElementVNode("div",$,[a.value.imageUrl?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["q-my-sm t-item clickable",{"t-item-separator":t.separator}]),onClick:o[4]||(o[4]=l=>g(a.value,"doc"))},[e.createElementVNode("div",q,[e.createElementVNode("div",A,[e.createElementVNode("img",{src:a.value.imageUrl,alt:"Document"},null,8,j)])]),o[6]||(o[6]=e.createElementVNode("div",{class:"t-item-section"},[e.createElementVNode("div",{class:"t-item-label"},"Click to expand")],-1))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(f.value,l=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["q-my-sm t-item",{"t-item-separator":t.separator}]),key:l[0]},[e.createElementVNode("div",L,[e.createElementVNode("div",U,e.toDisplayString(e.unref(n.titleCase)(e.unref(n.slug)(l[0]))),1),typeof l[1]=="boolean"?(e.openBlock(),e.createElementBlock("div",T,[e.createElementVNode("div",{class:e.normalizeClass(["t-chip t-chip-square",l[1]?"t-chip-green":"t-chip-red"])},e.toDisplayString(M(e.unref(n.slug)(l[0]),l[1])),3)])):(e.openBlock(),e.createElementBlock("div",z,e.toDisplayString(k(l[1],l[0])),1))])],2))),128)),e.renderSlot(t.$slots,"list-append",{viewData:a.value})]),e.renderSlot(t.$slots,"list-after",{viewData:a.value})])):a.value?(e.openBlock(),e.createElementBlock("div",O,[e.createVNode(C.default,{dense:"",color:"primary",label:"Return",icon:"fas fa-arrow-left",onClick:o[5]||(o[5]=l=>g(a.value,"view"))}),a.value.imageUrl?(e.openBlock(),e.createElementBlock("img",{key:0,style:{width:"100%"},src:a.value.imageUrl,alt:"Document"},null,8,Y)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)]),e.createVNode(D.default,{showing:b.value},null,8,["showing"])]),_:3},8,["class"]))}});exports.default=F;
