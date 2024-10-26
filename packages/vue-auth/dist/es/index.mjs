import { runMiddlewares as f, setAuthConfig as h } from "./src/config.mjs";
import { createPinia as A } from "pinia";
import { useAuthStore as P } from "./src/stores/auth.mjs";
import { useInlineAuth as p } from "./src/composables/useInlineAuth.mjs";
import { useAuth as N } from "./src/composables/useAuth.mjs";
const w = (t) => {
  const { router: s, loginRouteName: l, defaultAuthRouteName: o } = t;
  return {
    install: (a) => {
      h(t);
      const e = P();
      if (!Object.keys(a._context.config.globalProperties).includes("$pinia")) {
        const r = A();
        a.use(r);
      }
      s && s.beforeEach((r, c, i) => {
        const m = r.meta.requiresAuth, d = r.meta.requiresGuest, u = l ? s.resolve(l) : null, n = o ? s.resolve(o) : null;
        if (u != null && u.name && m && !e.isAuthenticated)
          return i({
            name: u.name,
            query: { redirect: r.fullPath }
          });
        if (n != null && n.name && d && e.isAuthenticated)
          return i({
            name: n.name,
            query: { redirect: r.fullPath }
          });
        t.middlewares ? f(t.middlewares, r, c, i, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : i();
      }), e.loadUserFromStorage(t), a.config.globalProperties.$user = e.user;
    }
  };
};
export {
  w as authPlugin,
  N as useAuth,
  p as useInlineAuth
};
