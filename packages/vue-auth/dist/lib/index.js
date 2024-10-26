"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("./src/config.js"),f=require("pinia"),m=require("./src/stores/auth.js"),g=require("./src/composables/useInlineAuth.js"),q=require("./src/composables/useAuth.js"),P=u=>{const{router:i,loginRouteName:l,defaultAuthRouteName:c}=u;return{install:r=>{o.setAuthConfig(u);const e=m.useAuthStore();if(!Object.keys(r._context.config.globalProperties).includes("$pinia")){const t=f.createPinia();r.use(t)}i&&i.beforeEach((t,h,s)=>{const d=t.meta.requiresAuth,A=t.meta.requiresGuest,n=l?i.resolve(l):null,a=c?i.resolve(c):null;if(n!=null&&n.name&&d&&!e.isAuthenticated)return s({name:n.name,query:{redirect:t.fullPath}});if(a!=null&&a.name&&A&&e.isAuthenticated)return s({name:a.name,query:{redirect:t.fullPath}});u.middlewares?o.runMiddlewares(u.middlewares,t,h,s,{user:e.user,token:e.token,isAuthenticated:e.isAuthenticated}):s()}),e.loadUserFromStorage(u),r.config.globalProperties.$user=e.user,r.config.globalProperties.$isAuthenticated=e.isAuthenticated}}};exports.useInlineAuth=g.useInlineAuth;exports.useAuth=q.useAuth;exports.authPlugin=P;
