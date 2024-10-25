import { createAuthStore as a } from "../stores/auth.mjs";
import { getAuthConfig as e } from "../config.mjs";
import { storeToRefs as s } from "pinia";
const S = () => {
  const o = a()(), n = (t, r = e()) => o.login(t, r), u = (t, r = e()) => o.register(t, r), c = (t = e(), r) => o.logout(t, r), g = (t, r = e()) => o.forgot(t, r), i = (t, r = e()) => o.reset(t, r), m = (t = e(), r) => o.loadUserFromStorage(t, r);
  return {
    user: s(o).user,
    isAuthenticated: s(o).isAuthenticated,
    reset: i,
    login: n,
    logout: c,
    forgot: g,
    register: u,
    loadUserFromStorage: m
  };
};
export {
  S as useAuth
};
