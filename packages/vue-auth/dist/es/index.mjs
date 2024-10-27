import { createPinia as f } from "pinia";
import { runMiddlewares as h } from "./src/utils/plugins.mjs";
import { setAuthConfig as A } from "./src/utils/config.mjs";
import { useAuthStore as g } from "./src/stores/auth.mjs";
import { useInlineAuth as p } from "./src/composables/useInlineAuth.mjs";
import { useAuth as N } from "./src/composables/useAuth.mjs";
const y = (r) => {
  const { router: i, loginRouteName: o, defaultAuthRouteName: l } = r;
  return {
    install: (s) => {
      A(r);
      const e = g();
      if (!Object.keys(s._context.config.globalProperties).includes("$pinia")) {
        const t = f();
        s.use(t);
      }
      i && i.beforeEach((t, c, u) => {
        const m = t.meta.requiresAuth, d = t.meta.requiresGuest, n = o ? i.resolve(o) : null, a = l ? i.resolve(l) : null;
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
        r.middlewares ? h(r.middlewares, t, c, u, i, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : u();
      }), e.loadUserFromStorage(r), s.config.globalProperties.$user = e.user, s.config.globalProperties.$isAuthenticated = e.isAuthenticated;
    }
  };
};
export {
  y as authPlugin,
  N as useAuth,
  p as useInlineAuth
};
