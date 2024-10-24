import { createAuthStore as a } from "../stores/auth.mjs";
import { getAuthConfig as o } from "../config.mjs";
const m = () => {
  const e = a()(), s = (t, r = o()) => e.login(t, r), n = (t, r = o()) => e.register(t, r), u = (t = o(), r) => e.logout(t, r), c = (t, r = o()) => e.forgot(t, r), g = (t, r = o()) => e.reset(t, r), i = (t = o(), r) => e.loadUserFromStorage(t, r);
  return {
    user: e.user,
    isAuthenticated: e.isAuthenticated,
    reset: g,
    login: s,
    logout: u,
    forgot: c,
    register: n,
    loadUserFromStorage: i
  };
};
export {
  m as useAuth
};
