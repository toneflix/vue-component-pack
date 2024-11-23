import { createVueAuthStore as A } from "../stores/vue-auth.mjs";
import { getAuthConfig as e } from "../utils/config.mjs";
import { storeToRefs as S } from "pinia";
const k = (s) => {
  const o = A(s)(), n = (t, r = e()) => o.login(t, r), u = (t, r = e()) => o.register(t, r), c = (t = e(), r) => o.logout(t, r), g = (t, r = e()) => o.forgot(t, r), i = (t, r = e()) => o.reset(t, r), m = (t = e(), r, l) => o.loadUserFromStorage(t, r, l), { user: f, token: a, isAuthenticated: h } = S(o);
  return {
    user: f,
    token: a,
    isAuthenticated: h,
    reset: i,
    login: n,
    logout: c,
    forgot: g,
    register: u,
    loadUserFromStorage: m
  };
};
export {
  k as useAuth
};
