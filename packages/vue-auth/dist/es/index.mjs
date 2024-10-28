import { getActivePinia as h, createPinia as f } from "pinia";
import { runMiddlewares as A } from "./src/utils/plugins.mjs";
import { createCountdown as y, reshapeError as C } from "./src/utils/plugins.mjs";
import { setAuthConfig as g } from "./src/utils/config.mjs";
import { useAuthStore as P } from "./src/stores/vue-auth.mjs";
import { useInlineAuth as G } from "./src/composables/useInlineAuth.mjs";
import { useAuth as S } from "./src/composables/useAuth.mjs";
import { authMiddleware as F, guestMiddleware as U, roleMiddleware as j } from "./src/utils/middlewares.mjs";
const I = (t) => {
  const { router: i, loginRouteName: o, defaultAuthRouteName: l } = t;
  return {
    install: (n) => {
      if (g(t), !!!h()) {
        const r = f();
        n.use(r);
      }
      const e = P();
      i && i.beforeEach((r, m, u) => {
        const c = r.meta.requiresAuth, d = r.meta.requiresGuest, s = o ? i.resolve(o) : null, a = l ? i.resolve(l) : null;
        if (s != null && s.name && c && !e.isAuthenticated)
          return u({
            name: s.name,
            query: { redirect: r.fullPath }
          });
        if (a != null && a.name && d && e.isAuthenticated)
          return u({
            name: a.name,
            query: { redirect: r.fullPath }
          });
        t.middlewares ? A(t.middlewares, r, m, u, i, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : u();
      }), e.loadUserFromStorage(t), n.config.globalProperties.$user = e.user, n.config.globalProperties.$isAuthenticated = e.isAuthenticated;
    }
  };
};
export {
  F as authMiddleware,
  I as authPlugin,
  y as createCountdown,
  U as guestMiddleware,
  C as reshapeError,
  j as roleMiddleware,
  A as runMiddlewares,
  S as useAuth,
  G as useInlineAuth
};
