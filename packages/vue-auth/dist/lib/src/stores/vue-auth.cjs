"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("vue"),n=require("../utils/config.cjs"),h=require("axios"),k=require("pinia"),y=require("../utils/plugins.cjs");h.defaults.headers.common["Content-Type"]="application/json; charset=utf-8";h.defaults.headers.common.Accept="application/json";h.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";function v(f){return k.defineStore("vue-auth",()=>{const o=m.ref({}),c=m.ref(),i=m.ref(!1);return{user:o,token:c,isAuthenticated:i,login:async(r,s=n.getAuthConfig())=>{var u;const g=n.url("login");try{const{data:t}=await h.post(g,m.toValue(r),s.axiosConfig),{user:e,token:a,message:l}=s.transformResponse?s.transformResponse(t):{user:t.user,token:t.token,message:t.message};return o.value=e,c.value=a,i.value=!0,localStorage.setItem(s.storageKey??"auth_token",t.token),{user:e,token:a,message:l}}catch(t){const{response:e}=t;return{user:{},error:(e==null?void 0:e.data)||{},message:(u=e==null?void 0:e.data)==null?void 0:u.message}}},reset:async(r,s=n.getAuthConfig())=>{var u;const g=n.url("reset");try{const{data:t}=await h.post(g,m.toValue(r),s.axiosConfig),{user:e,message:a}=s.transformResponse?s.transformResponse(t):{user:t.user,message:t.message};return{user:e,message:a}}catch(t){const{response:e}=t;return{user:{},error:(e==null?void 0:e.data)||{},message:(u=e==null?void 0:e.data)==null?void 0:u.message}}},logout:async(r=n.getAuthConfig(),s)=>{var t;const g=r.setAuthHeaders?await r.setAuthHeaders({user:o.value,token:c.value}):r.getAuthHeaders?await r.getAuthHeaders({user:o.value,token:c.value}):{},u=n.url("logout");try{await h.post(u,m.toValue(s),{headers:{...g},...r.axiosConfig}),o.value={},c.value=void 0,i.value=!1,localStorage.removeItem(r.storageKey??"auth_token")}catch(e){const{response:a}=e;return{error:(a==null?void 0:a.data)||{},message:(t=a==null?void 0:a.data)==null?void 0:t.message}}},forgot:async(r,s=n.getAuthConfig())=>{var t;const g=s.setAuthHeaders?await s.setAuthHeaders({user:o.value,token:c.value}):s.getAuthHeaders?await s.getAuthHeaders({user:o.value,token:c.value}):{},u=n.url("forgot");try{const{data:e}=await h.post(u,m.toValue(r),{headers:{...g},...s.axiosConfig}),{timeout:a,message:l}=s.transformResponse?s.transformResponse(e):{timeout:e.timeout,message:e.message},d=y.createCountdown(a);return{timeout:a,countdown:d,message:l}}catch(e){const{response:a}=e;return{error:(a==null?void 0:a.data)||{},countdown:m.ref(0),message:(t=a==null?void 0:a.data)==null?void 0:t.message}}},register:async(r,s=n.getAuthConfig())=>{var u;const g=n.url("register");try{const{data:t}=await h.post(g,m.toValue(r),s.axiosConfig),{user:e,token:a,message:l}=s.transformResponse?s.transformResponse(t):{user:t.user,token:t.token,message:t.message};return o.value=e,c.value=a,i.value=!0,localStorage.setItem(s.storageKey??"auth_token",t.token),{user:e,token:a,message:l}}catch(t){const{response:e}=t;return{user:{},error:(e==null?void 0:e.data)||{},message:(u=e==null?void 0:e.data)==null?void 0:u.message}}},loadUserFromStorage:async(r=n.getAuthConfig(),s,g)=>{var e;const u=localStorage.getItem(r.storageKey??"auth_token"),t=r.setAuthHeaders?await r.setAuthHeaders({user:o.value,token:c.value}):r.getAuthHeaders?await r.getAuthHeaders({user:o.value,token:c.value}):{};if(u&&(c.value=u,i.value=!0,r.endpoints.profile&&(!g||!r.disableAutoRefresh))){const a=n.url("profile");try{const{data:l}=await h.get(a,{headers:{...t},params:{...m.toValue(s)},...r.axiosConfig}),{user:d,message:A}=r.transformResponse?r.transformResponse(l):{user:l.user,message:l.message};return o.value=d,{user:d,message:A}}catch(l){const{response:d}=l;return{user:{},error:(d==null?void 0:d.data)||{},message:(e=d==null?void 0:d.data)==null?void 0:e.message}}}return{user:{}}}}},f)}const w=f=>v(f)();exports.createVueAuthStore=v;exports.useAuthStore=w;
