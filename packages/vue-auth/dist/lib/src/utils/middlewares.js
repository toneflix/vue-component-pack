"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=(r,s)=>JSON.stringify(r)===JSON.stringify(s),l=(r,s,i)=>{const e=i?i.resolve(s):s;return typeof e=="string"?r.path===e:r.path===e.path&&m(r.query,e.query)},g=r=>(s,i,e,u,n)=>{if(!u.isAuthenticated&&!l(s,r,n)&&s.meta.requiresAuth)return e(r);e()},y=(r,s,i="roles",e="requiresAdmin")=>(u,n,a,t,d)=>{if(!t.user[i])return a();const f=Array.isArray(t.user[i])?t.user[i]:[String(t.user[i])],o=typeof s=="string"?[s]:s;if(!f.some(h=>o.includes(h))&&!l(u,r,d)&&u.meta[e])return a(r);a()};exports.authMiddleware=g;exports.roleMiddleware=y;
