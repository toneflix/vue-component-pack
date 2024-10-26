import { runMiddlewares as h, setAuthConfig as f } from "./src/config.mjs";
import { createPinia as A } from "pinia";
import { useAuthStore as g } from "./src/stores/auth.mjs";
import { useInlineAuth as $ } from "./src/composables/useInlineAuth.mjs";
import { useAuth as N } from "./src/composables/useAuth.mjs";
const w = (r) => {
  const { router: i, loginRouteName: l, defaultAuthRouteName: o } = r;
  return {
    install: (s) => {
      f(r);
      const e = g();
      if (!Object.keys(s._context.config.globalProperties).includes("$pinia")) {
        const t = A();
        s.use(t);
      }
      i && i.beforeEach((t, c, u) => {
        const m = t.meta.requiresAuth, d = t.meta.requiresGuest, n = l ? i.resolve(l) : null, a = o ? i.resolve(o) : null;
        if (n != null && n.name && m && !e.isAuthenticated)
          return u({
            name: n.name,
            query: { redirect: t.fullPath }
          });
        if (a != null && a.name && d && e.isAuthenticated)
          return u({
            name: a.name,
            query: { redirect: t.fullPath }
          });
        r.middlewares ? h(r.middlewares, t, c, u, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : u();
      }), e.loadUserFromStorage(r), s.config.globalProperties.$user = e.user, s.config.globalProperties.$isAuthenticated = e.isAuthenticated;
    }
  };
};
export {
  w as authPlugin,
  N as useAuth,
  $ as useInlineAuth
};
