import { createAuthStore as c } from "../stores/auth.mjs";
import { getAuthConfig as o } from "../config.mjs";
const A = () => {
  const e = c()(), s = (t, r = o()) => e.login(t, r), u = (t, r = o()) => e.register(t, r), n = (t = o(), r) => e.logout(t, r), i = (t = o(), r) => e.loadUserFromStorage(t, r);
  return {
    user: e.user,
    isAuthenticated: e.isAuthenticated,
    login: s,
    register: u,
    logout: n,
    loadUserFromStorage: i
  };
};
export {
  A as useAuth
};
