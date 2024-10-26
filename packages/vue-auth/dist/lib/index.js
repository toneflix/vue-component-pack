"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const A=require("pinia"),f=require("./src/config.js"),m=require("./src/stores/auth.js"),g=require("./src/composables/useInlineAuth.js"),q=require("./src/composables/useAuth.js"),d=s=>{const{router:t,loginRouteName:l,defaultAuthRouteName:o}=s;return{install:i=>{f.setAuthConfig(s);const u=m.useAuthStore();if(!Object.keys(i._context.config.globalProperties).includes("$pinia")){const e=A.createPinia();i.use(e)}t&&t.beforeEach((e,v,a)=>{const c=e.meta.requiresAuth,h=e.meta.requiresGuest,r=l?t.resolve(l):null,n=o?t.resolve(o):null;if(r!=null&&r.name&&c&&!u.isAuthenticated)return a({name:r.name,query:{redirect:e.fullPath}});if(n!=null&&n.name&&h&&u.isAuthenticated)return a({name:n.name,query:{redirect:e.fullPath}});a()}),u.loadUserFromStorage(s),i.config.globalProperties.$user=u.user}}};exports.useInlineAuth=g.useInlineAuth;exports.useAuth=q.useAuth;exports.authPlugin=d;
