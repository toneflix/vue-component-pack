import { ref as n } from "vue";
import { getAuthConfig as k, createCountdown as F } from "../config.mjs";
import { createAuthStore as U } from "../stores/auth.mjs";
import { storeToRefs as d } from "pinia";
const j = () => {
  const i = U()(), v = (m) => {
    const l = n(), s = n();
    return {
      send: async () => {
        const t = await m();
        return t.error && l.value ? l.value(t.error) : !t.error && s.value && s.value(t), t;
      },
      onError: (t) => {
        l.value = t;
      },
      onSuccess: (t) => {
        s.value = t;
      }
    };
  }, f = (m, l = k()) => {
    const s = n(), c = n(), u = n(), a = n(), t = async () => {
      const e = await i.login(m, l);
      s.value = e.user, c.value = e.error, u.value = e.token, a.value = e.message;
      const S = {
        user: e.user,
        message: e.message,
        token: e.token
      };
      return e.error && (S.error = e.error), S;
    }, { send: g, onError: o, onSuccess: r } = v(t);
    return {
      send: g,
      user: s,
      token: u,
      error: c,
      message: a,
      onError: o,
      onSuccess: r
    };
  }, w = (m, l = k()) => {
    const s = n(), c = n(), u = n(), a = n(), t = async () => {
      const e = await i.register(m, l);
      return s.value = e.user, c.value = e.error, u.value = e.token, a.value = e.message, { user: e.user, error: e.error, token: e.token, message: e.message };
    }, { send: g, onError: o, onSuccess: r } = v(t);
    return {
      send: g,
      user: s,
      token: u,
      error: c,
      message: a,
      onError: o,
      onSuccess: r
    };
  }, E = (m = k(), l) => {
    const s = n(), c = n(), u = async () => {
      const o = await i.logout(m, l);
      return s.value = o == null ? void 0 : o.error, c.value = o == null ? void 0 : o.message, { error: o == null ? void 0 : o.error, message: o == null ? void 0 : o.message };
    }, { send: a, onError: t, onSuccess: g } = v(u);
    return {
      send: a,
      error: s,
      message: c,
      onError: t,
      onSuccess: g
    };
  }, h = (m, l = k()) => {
    const s = n(), c = n(), u = n(), a = n(0), t = async () => {
      const e = await i.forgot(m, l);
      return s.value = e == null ? void 0 : e.error, c.value = e == null ? void 0 : e.message, u.value = e.timeout, F(u, (S) => {
        a.value = S;
      }), {
        error: e.error,
        message: e.message,
        timeout: e.timeout,
        countdown: a.value
      };
    }, { send: g, onError: o, onSuccess: r } = v(t);
    return {
      send: g,
      error: s,
      message: c,
      timeout: u,
      onError: o,
      onSuccess: r,
      countdown: a
    };
  }, y = (m, l = k()) => {
    const s = n(), c = n(), u = n(), a = async () => {
      const r = await i.reset(m, l);
      return s.value = r.user, c.value = r == null ? void 0 : r.error, u.value = r == null ? void 0 : r.message, { error: r.error, message: r.message, user: s.value };
    }, { send: t, onError: g, onSuccess: o } = v(a);
    return {
      send: t,
      user: s,
      error: c,
      message: u,
      onError: g,
      onSuccess: o
    };
  }, A = (m = k(), l) => {
    const s = n(), c = n(), u = n(), a = async () => {
      const r = await i.loadUserFromStorage(m, l);
      return s.value = r.user, c.value = r == null ? void 0 : r.error, u.value = r == null ? void 0 : r.message, { error: r.error, message: r.message, user: s.value };
    }, { send: t, onError: g, onSuccess: o } = v(a);
    return {
      send: t,
      user: s,
      error: c,
      message: u,
      onError: g,
      onSuccess: o
    };
  }, { user: p, token: C, isAuthenticated: b } = d(i);
  return {
    user: p,
    token: C,
    isAuthenticated: b,
    reset: y,
    login: f,
    logout: E,
    forgot: h,
    register: w,
    loadUserFromStorage: A
  };
};
export {
  j as useInlineAuth
};
