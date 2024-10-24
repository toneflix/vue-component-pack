import { createPinia as f } from "pinia";
import { setAuthConfig as h } from "./src/config.mjs";
import { useAuthStore as A } from "./src/stores/auth.mjs";
import { useAuth as I } from "./src/composables/useAuth.mjs";
const p = (u) => {
  const { router: r, loginRouteName: a, defaultAuthRouteName: l } = u;
  return {
    install: (n) => {
      const t = A();
      if (!Object.keys(n._context.config.globalProperties).includes("$pinia")) {
        const e = f();
        n.use(e);
      }
      h(u), r && r.beforeEach((e, g, o) => {
        const c = e.meta.requiresAuth, m = e.meta.requiresGuest, s = a ? r.resolve(a) : null, i = l ? r.resolve(l) : null;
        if (s != null && s.name && c && !t.isAuthenticated)
          return o({
            name: s.name,
            query: { redirect: e.fullPath }
          });
        if (i != null && i.name && m && t.isAuthenticated)
          return o({
            name: i.name,
            query: { redirect: e.fullPath }
          });
        o();
      }), t.loadUserFromStorage(u), n.config.globalProperties.$user = t.user;
    }
  };
};
export {
  p as authPlugin,
  I as useAuth
};
