import { ref as n } from "vue";
import { getAuthConfig as S, createCountdown as C } from "../config.mjs";
import { createAuthStore as b } from "../stores/auth.mjs";
import { storeToRefs as k } from "pinia";
const R = () => {
  const i = b()(), v = (m) => {
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
  }, w = (m, l = S()) => {
    const s = n(), c = n(), u = n(), a = n(), t = async () => {
      const e = await i.login(m, l);
      s.value = e.user, c.value = e.error, u.value = e.token, a.value = e.message;
      const f = {
        user: e.user,
        message: e.message,
        token: e.token
      };
      return e.error && (f.error = e.error), f;
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
  }, h = (m, l = S()) => {
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
  }, A = (m = S(), l) => {
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
  }, E = (m, l = S()) => {
    const s = n(), c = n(), u = n(), a = n(0), t = async () => {
      const e = await i.forgot(m, l);
      return s.value = e == null ? void 0 : e.error, c.value = e == null ? void 0 : e.message, u.value = e.timeout, C(u, (f) => {
        a.value = f;
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
  }, y = (m, l = S()) => {
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
  }, p = (m = S(), l) => {
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
  };
  return {
    user: k(i).user,
    isAuthenticated: k(i).isAuthenticated,
    reset: y,
    login: w,
    logout: A,
    forgot: E,
    register: h,
    loadUserFromStorage: p
  };
};
export {
  R as useInlineAuth
};
