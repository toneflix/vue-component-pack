import { runMiddlewares as f, setAuthConfig as h } from "./src/config.mjs";
import { createPinia as A } from "pinia";
import { useAuthStore as P } from "./src/stores/auth.mjs";
import { useInlineAuth as G } from "./src/composables/useInlineAuth.mjs";
import { useAuth as S } from "./src/composables/useAuth.mjs";
import "./src/types.mjs";
const w = (t) => {
  const { router: i, loginRouteName: l, defaultAuthRouteName: o } = t;
  return {
    install: (a) => {
      h(t);
      const e = P();
      if (!Object.keys(a._context.config.globalProperties).includes("$pinia")) {
        const r = A();
        a.use(r);
      }
      i && i.beforeEach((r, c, s) => {
        const m = r.meta.requiresAuth, d = r.meta.requiresGuest, u = l ? i.resolve(l) : null, n = o ? i.resolve(o) : null;
        if (u != null && u.name && m && !e.isAuthenticated)
          return s({
            name: u.name,
            query: { redirect: r.fullPath }
          });
        if (n != null && n.name && d && e.isAuthenticated)
          return s({
            name: n.name,
            query: { redirect: r.fullPath }
          });
        t.middlewares ? f(t.middlewares, r, c, s, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : s();
      }), e.loadUserFromStorage(t), a.config.globalProperties.$user = e.user;
    }
  };
};
export {
  w as authPlugin,
  S as useAuth,
  G as useInlineAuth
};
