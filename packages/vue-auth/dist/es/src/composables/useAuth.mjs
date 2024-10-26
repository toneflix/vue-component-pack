import { createAuthStore as h } from "../stores/auth.mjs";
import { getAuthConfig as e } from "../config.mjs";
import { storeToRefs as l } from "pinia";
const F = () => {
  const o = h()(), s = (t, r = e()) => o.login(t, r), n = (t, r = e()) => o.register(t, r), u = (t = e(), r) => o.logout(t, r), c = (t, r = e()) => o.forgot(t, r), g = (t, r = e()) => o.reset(t, r), i = (t = e(), r) => o.loadUserFromStorage(t, r), { user: m, token: f, isAuthenticated: a } = l(o);
  return {
    user: m,
    token: f,
    isAuthenticated: a,
    reset: g,
    login: s,
    logout: u,
    forgot: c,
    register: n,
    loadUserFromStorage: i
  };
};
export {
  F as useAuth
};
