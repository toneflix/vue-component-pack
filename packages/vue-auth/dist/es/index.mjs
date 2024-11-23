import { getActivePinia as f, createPinia as h } from "pinia";
import { runMiddlewares as A } from "./src/utils/plugins.mjs";
import { createCountdown as k, reshapeError as x } from "./src/utils/plugins.mjs";
import { setAuthConfig as g } from "./src/utils/config.mjs";
import { useAuthStore as P } from "./src/stores/vue-auth.mjs";
import { useInlineAuth as E } from "./src/composables/useInlineAuth.mjs";
import { useAuth as H } from "./src/composables/useAuth.mjs";
import { authMiddleware as S, guestMiddleware as F, isCurrent as O, roleMiddleware as U } from "./src/utils/middlewares.mjs";
const C = (r) => {
  const { router: i, loginRouteName: o, defaultAuthRouteName: d } = r;
  return {
    install: (l) => {
      if (g(r), !!!f()) {
        const t = h();
        l.use(t);
      }
      const e = P(r.storageOptions);
      i && (e.$subscribe((t, s) => {
        r.resetHandler && s.refreshed && (s.refreshed = !1, r.resetHandler(i));
      }), i.beforeEach((t, s, u) => {
        const c = t.meta.requiresAuth, m = t.meta.requiresGuest, a = o ? i.resolve(o) : null, n = d ? i.resolve(d) : null;
        if (a != null && a.name && c && !e.isAuthenticated)
          return u({
            name: a.name,
            query: { redirect: t.fullPath }
          });
        if (n != null && n.name && m && e.isAuthenticated)
          return u({
            name: n.name,
            query: { redirect: t.fullPath }
          });
        r.middlewares ? A(r.middlewares, t, s, u, i, {
          user: e.user,
          token: e.token,
          isAuthenticated: e.isAuthenticated
        }) : u();
      })), e.loadUserFromStorage(r, void 0, !0), l.config.globalProperties.$user = e.user, l.config.globalProperties.$isAuthenticated = e.isAuthenticated;
    }
  };
};
export {
  S as authMiddleware,
  C as authPlugin,
  k as createCountdown,
  F as guestMiddleware,
  O as isCurrent,
  x as reshapeError,
  U as roleMiddleware,
  A as runMiddlewares,
  H as useAuth,
  P as useAuthStore,
  E as useInlineAuth
};
