"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=(r,e)=>JSON.stringify(r)===JSON.stringify(e),d=(r,e,i)=>{const s=i?i.resolve(e):e;return typeof s=="string"?r.path===s:r.path===s.path&&o(r.query,s.query)},g=r=>(e,i,s,u,t)=>{if(!u.isAuthenticated&&!d(e,r,t)&&e.meta.requiresAuth)return s(r);s()},c=r=>(e,i,s,u,t)=>{if(u.isAuthenticated&&!d(e,r,t)&&e.meta.requiresGuest)return s(r);s()},y=(r,e,i="roles",s="requiresAdmin")=>(u,t,n,a,l)=>{if(!a.user[i])return n();const f=Array.isArray(a.user[i])?a.user[i]:[String(a.user[i])],h=typeof e=="string"?[e]:e;if(!f.some(m=>h.includes(m))&&!d(u,r,l)&&u.meta[s])return n(r);n()};exports.authMiddleware=g;exports.guestMiddleware=c;exports.roleMiddleware=y;
