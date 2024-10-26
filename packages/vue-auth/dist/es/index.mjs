import { createPinia as f } from "pinia";
import { setAuthConfig as h } from "./src/config.mjs";
import { useAuthStore as A } from "./src/stores/auth.mjs";
import { useInlineAuth as x } from "./src/composables/useInlineAuth.mjs";
import { useAuth as N } from "./src/composables/useAuth.mjs";
const v = (i) => {
  const { router: r, loginRouteName: a, defaultAuthRouteName: l } = i;
  return {
    install: (n) => {
      h(i);
      const t = A();
      if (!Object.keys(n._context.config.globalProperties).includes("$pinia")) {
        const e = f();
        n.use(e);
      }
      r && r.beforeEach((e, g, o) => {
        const c = e.meta.requiresAuth, m = e.meta.requiresGuest, s = a ? r.resolve(a) : null, u = l ? r.resolve(l) : null;
        if (s != null && s.name && c && !t.isAuthenticated)
          return o({
            name: s.name,
            query: { redirect: e.fullPath }
          });
        if (u != null && u.name && m && t.isAuthenticated)
          return o({
            name: u.name,
            query: { redirect: e.fullPath }
          });
        o();
      }), t.loadUserFromStorage(i), n.config.globalProperties.$user = t.user;
    }
  };
};
export {
  v as authPlugin,
  N as useAuth,
  x as useInlineAuth
};
