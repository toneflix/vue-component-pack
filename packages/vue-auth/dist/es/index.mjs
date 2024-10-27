import { getActivePinia as d, createPinia as f } from "pinia";
import { runMiddlewares as A } from "./src/utils/plugins.mjs";
import { setAuthConfig as P } from "./src/utils/config.mjs";
import { useAuthStore as g } from "./src/stores/auth.mjs";
import { useInlineAuth as N } from "./src/composables/useInlineAuth.mjs";
import { useAuth as $ } from "./src/composables/useAuth.mjs";
const p = (r) => {
  const { router: i, loginRouteName: o, defaultAuthRouteName: l } = r;
  return {
    install: (a) => {
      if (P(r), !!!d()) {
        const t = f();
        a.use(t);
      }
      const e = g();
      i && i.beforeEach((t, c, s) => {
        const m = t.meta.requiresAuth, h = t.meta.requiresGuest, u = o ? i.resolve(o) : null, n = l ? i.resolve(l) : null;
        if (u != null && u.name && m && !e.isAuthenticated)
          return s({
            name: u.name,
            query: { redirect: t.fullPath }
          });
        if (n != null && n.name && h && e.isAuthenticated)
          return s({
            name: n.name,
            query: { redirect: t.fullPath }
          });
        r.middlewares ? A(r.middlewares, t, c, s, i, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : s();
      }), e.loadUserFromStorage(r), a.config.globalProperties.$user = e.user, a.config.globalProperties.$isAuthenticated = e.isAuthenticated;
    }
  };
};
export {
  p as authPlugin,
  $ as useAuth,
  N as useInlineAuth
};
