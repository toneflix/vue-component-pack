import{d as F,p as t,C as o,c as u,o as c,j as a,G as p,af as h,a as r}from"./chunks/framework.B40iR5CR.js";const v=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"events.md","filePath":"events.md"}'),m={name:"events.md"},B=F({...m,setup(b){const e=t(""),k=t(""),E=t(""),d=i=>{alert(`The value has changed to ${i}`)},g=i=>{alert(`OTP input completed with value: ${i}`)},y=i=>{alert(`New value is ${i}`)};return(i,s)=>{const l=o("otp-input");return c(),u("div",null,[s[3]||(s[3]=a("h1",{id:"events",tabindex:"-1"},[r("Events "),a("a",{class:"header-anchor",href:"#events","aria-label":'Permalink to "Events"'},"​")],-1)),s[4]||(s[4]=a("p",null,"This page demonstrates usage of the events emitted by OTP Input.",-1)),s[5]||(s[5]=a("h3",{id:"update-modelvalue",tabindex:"-1"},[r("update:modelValue "),a("a",{class:"header-anchor",href:"#update-modelvalue","aria-label":'Permalink to "update:modelValue"'},"​")],-1)),s[6]||(s[6]=a("p",null,"Emitted when the component needs to update the model.",-1)),p(l,{modelValue:e.value,"onUpdate:modelValue":[s[0]||(s[0]=n=>e.value=n),y]},null,8,["modelValue"]),s[7]||(s[7]=h("",3)),p(l,{modelValue:k.value,"onUpdate:modelValue":s[1]||(s[1]=n=>k.value=n),onChange:d},null,8,["modelValue"]),s[8]||(s[8]=h("",3)),p(l,{modelValue:E.value,"onUpdate:modelValue":s[2]||(s[2]=n=>E.value=n),onComplete:g},null,8,["modelValue"]),s[9]||(s[9]=h("",1))])}}});export{v as __pageData,B as default};
