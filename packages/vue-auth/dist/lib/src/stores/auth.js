"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("vue"),c=require("../utils/config.js"),l=require("axios"),v=require("pinia"),k=require("../utils/plugins.js");l.defaults.headers.common["Content-Type"]="application/json; charset=utf-8";l.defaults.headers.common.Accept="application/json";l.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";function h(){return v.defineStore("vue-auth",()=>{const m=g.ref({}),d=g.ref(),i=g.ref(!1);return{user:m,token:d,isAuthenticated:i,login:async(s,r=c.getAuthConfig())=>{var u;const n=c.url("login");try{const{data:t}=await l.post(n,g.toValue(s),r.axiosConfig),{user:e,token:a,message:o}=r.transformResponse?r.transformResponse(t):{user:t.user,token:t.token,message:t.message};return m.value=e,d.value=a,i.value=!0,localStorage.setItem(r.storageKey||"auth_token",t.token),{user:e,token:a,message:o}}catch(t){const{response:e}=t;return{user:{},error:(e==null?void 0:e.data)||{},message:(u=e==null?void 0:e.data)==null?void 0:u.message}}},reset:async(s,r=c.getAuthConfig())=>{var u;const n=c.url("reset");try{const{data:t}=await l.post(n,g.toValue(s),r.axiosConfig),{user:e,message:a}=r.transformResponse?r.transformResponse(t):{user:t.user,message:t.message};return{user:e,message:a}}catch(t){const{response:e}=t;return{user:{},error:(e==null?void 0:e.data)||{},message:(u=e==null?void 0:e.data)==null?void 0:u.message}}},logout:async(s=c.getAuthConfig(),r)=>{var t;const n=s.getAuthHeaders?await s.getAuthHeaders({user:m.value,token:d.value}):{},u=c.url("logout");try{await l.post(u,g.toValue(r),{headers:{...n},...s.axiosConfig}),m.value={},d.value=void 0,i.value=!1,localStorage.removeItem(s.storageKey||"auth_token")}catch(e){const{response:a}=e;return{error:(a==null?void 0:a.data)||{},message:(t=a==null?void 0:a.data)==null?void 0:t.message}}},forgot:async(s,r=c.getAuthConfig())=>{var t;const n=r.getAuthHeaders?await r.getAuthHeaders({user:m.value,token:d.value}):{},u=c.url("forgot");try{const{data:e}=await l.post(u,g.toValue(s),{headers:{...n},...r.axiosConfig}),{timeout:a,message:o}=r.transformResponse?r.transformResponse(e):{timeout:e.timeout,message:e.message},f=k.createCountdown(a);return{timeout:a,countdown:f,message:o}}catch(e){const{response:a}=e;return{error:(a==null?void 0:a.data)||{},countdown:g.ref(0),message:(t=a==null?void 0:a.data)==null?void 0:t.message}}},register:async(s,r=c.getAuthConfig())=>{var u;const n=c.url("register");try{const{data:t}=await l.post(n,g.toValue(s),r.axiosConfig),{user:e,token:a,message:o}=r.transformResponse?r.transformResponse(t):{user:t.user,token:t.token,message:t.message};return m.value=e,d.value=a,i.value=!0,localStorage.setItem(r.storageKey||"auth_token",t.token),{user:e,token:a,message:o}}catch(t){const{response:e}=t;return{user:{},error:(e==null?void 0:e.data)||{},message:(u=e==null?void 0:e.data)==null?void 0:u.message}}},loadUserFromStorage:async(s=c.getAuthConfig(),r)=>{var t;const n=localStorage.getItem(s.storageKey||"auth_token"),u=s.getAuthHeaders?await s.getAuthHeaders({user:m.value,token:d.value}):{};if(n&&(d.value=n,i.value=!0,s.endpoints.profile)){const e=c.url("profile");try{const{data:a}=await l.get(e,{headers:{...u},params:{...g.toValue(r)},...s.axiosConfig}),{user:o,message:f}=s.transformResponse?s.transformResponse(a):{user:a.user,message:a.message};return m.value=o,{user:o,message:f}}catch(a){const{response:o}=a;return{user:{},error:(o==null?void 0:o.data)||{},message:(t=o==null?void 0:o.data)==null?void 0:t.message}}}return{user:{}}}}},{persist:!0})}const y=h();exports.createAuthStore=h;exports.useAuthStore=y;
