"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("vue"),p=require("../utils/plugins.cjs"),F=require("../stores/vue-auth.cjs"),d=require("../utils/config.cjs"),I=require("pinia"),T=()=>{const v=F.createVueAuthStore()(),m=g=>{const l=r.ref(),n=r.ref();return{send:async()=>{const s=await g();return s.error&&l.value?l.value(s.error):!s.error&&n.value&&n.value(s),s},onError:s=>{l.value=s},onSuccess:s=>{n.value=s}}},h=(g,l=d.getAuthConfig())=>{const n=r.ref(),t=r.ref(),u=r.ref(),c=r.ref(!1),s=r.ref(),i=async()=>{c.value=!0;const e=await v.login(g,l);n.value=e.user,t.value=e.error,u.value=e.token,s.value=e.message,c.value=!1;const S={user:e.user,message:e.message,token:e.token,loading:!1};return e.error&&(S.error=e.error),S},{send:f,onError:a,onSuccess:o}=m(i);return{send:f,user:n,token:u,error:t,loading:c,message:s,onError:a,onSuccess:o}},k=(g,l=d.getAuthConfig())=>{const n=r.ref(),t=r.ref(),u=r.ref(),c=r.ref(!1),s=r.ref(),i=async()=>{c.value=!0;const e=await v.register(g,l);return n.value=e.user,t.value=e.error,u.value=e.token,s.value=e.message,c.value=!1,{user:e.user,error:e.error,token:e.token,message:e.message,loading:c.value}},{send:f,onError:a,onSuccess:o}=m(i);return{send:f,user:n,token:u,error:t,loading:c,message:s,onError:a,onSuccess:o}},A=(g=d.getAuthConfig(),l)=>{const n=r.ref(),t=r.ref(!1),u=r.ref(),c=async()=>{t.value=!0;const a=await v.logout(g,l);return n.value=a==null?void 0:a.error,u.value=a==null?void 0:a.message,t.value=!1,{error:a==null?void 0:a.error,message:a==null?void 0:a.message,loading:t.value}},{send:s,onError:i,onSuccess:f}=m(c);return{send:s,error:n,loading:t,message:u,onError:i,onSuccess:f}},w=(g,l=d.getAuthConfig())=>{const n=r.ref(),t=r.ref(!1),u=r.ref(),c=r.ref(),s=r.ref(0),i=async()=>{t.value=!0;const e=await v.forgot(g,l);return n.value=e==null?void 0:e.error,u.value=e==null?void 0:e.message,c.value=e.timeout,t.value=!1,p.createCountdown(c,S=>{s.value=S}),{error:e.error,loading:t.value,message:e.message,timeout:e.timeout,countdown:s.value}},{send:f,onError:a,onSuccess:o}=m(i);return{send:f,error:n,loading:t,message:u,timeout:c,onError:a,onSuccess:o,countdown:s}},C=(g,l=d.getAuthConfig())=>{const n=r.ref(),t=r.ref(),u=r.ref(!1),c=r.ref(),s=async()=>{u.value=!0;const o=await v.reset(g,l);return n.value=o.user,t.value=o==null?void 0:o.error,c.value=o==null?void 0:o.message,u.value=!1,{error:o.error,message:o.message,user:n.value,loading:u.value}},{send:i,onError:f,onSuccess:a}=m(s);return{send:i,user:n,error:t,loading:u,message:c,onError:f,onSuccess:a}},y=(g=d.getAuthConfig(),l)=>{const n=r.ref(),t=r.ref(),u=r.ref(!1),c=r.ref(),s=async()=>{u.value=!0;const o=await v.loadUserFromStorage(g,l);return n.value=o.user,t.value=o==null?void 0:o.error,c.value=o==null?void 0:o.message,u.value=!1,{error:o.error,message:o.message,user:n.value,loading:u.value}},{send:i,onError:f,onSuccess:a}=m(s);return{send:i,user:n,error:t,loading:u,message:c,onError:f,onSuccess:a}},{user:E,token:b,isAuthenticated:q}=I.storeToRefs(v);return{user:E,token:b,isAuthenticated:q,reset:C,login:h,logout:A,forgot:w,register:k,loadUserFromStorage:y}};exports.useInlineAuth=T;