"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../stores/auth.js"),r=require("../config.js"),l=require("pinia"),S=()=>{const o=a.createAuthStore()(),n=(t,e=r.getAuthConfig())=>o.login(t,e),u=(t,e=r.getAuthConfig())=>o.register(t,e),s=(t=r.getAuthConfig(),e)=>o.logout(t,e),g=(t,e=r.getAuthConfig())=>o.forgot(t,e),i=(t,e=r.getAuthConfig())=>o.reset(t,e),c=(t=r.getAuthConfig(),e)=>o.loadUserFromStorage(t,e),{user:h,token:A,isAuthenticated:f}=l.storeToRefs(o);return{user:h,token:A,isAuthenticated:f,reset:i,login:n,logout:s,forgot:g,register:u,loadUserFromStorage:c}};exports.useAuth=S;
