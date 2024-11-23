import { getActivePinia as h, createPinia as f } from "pinia";
import { runMiddlewares as A } from "./src/utils/plugins.mjs";
import { createCountdown as x, reshapeError as y } from "./src/utils/plugins.mjs";
import { setAuthConfig as g } from "./src/utils/config.mjs";
import { useAuthStore as P } from "./src/stores/vue-auth.mjs";
import { useInlineAuth as G } from "./src/composables/useInlineAuth.mjs";
import { useAuth as S } from "./src/composables/useAuth.mjs";
import { authMiddleware as F, guestMiddleware as O, isCurrent as U, roleMiddleware as j } from "./src/utils/middlewares.mjs";
const C = (t) => {
  const { router: i, loginRouteName: o, defaultAuthRouteName: l } = t;
  return {
    install: (n) => {
      if (g(t), !!!h()) {
        const r = f();
        n.use(r);
      }
      const e = P(t.storageOptions);
      i && i.beforeEach((r, d, u) => {
        const m = r.meta.requiresAuth, c = r.meta.requiresGuest, s = o ? i.resolve(o) : null, a = l ? i.resolve(l) : null;
        if (s != null && s.name && m && !e.isAuthenticated)
          return u({
            name: s.name,
            query: { redirect: r.fullPath }
          });
        if (a != null && a.name && c && e.isAuthenticated)
          return u({
            name: a.name,
            query: { redirect: r.fullPath }
          });
        t.middlewares ? A(t.middlewares, r, d, u, i, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : u();
      }), e.loadUserFromStorage(t, void 0, !0), n.config.globalProperties.$user = e.user, n.config.globalProperties.$isAuthenticated = e.isAuthenticated;
    }
  };
};
export {
  F as authMiddleware,
  C as authPlugin,
  x as createCountdown,
  O as guestMiddleware,
  U as isCurrent,
  y as reshapeError,
  j as roleMiddleware,
  A as runMiddlewares,
  S as useAuth,
  P as useAuthStore,
  G as useInlineAuth
};
