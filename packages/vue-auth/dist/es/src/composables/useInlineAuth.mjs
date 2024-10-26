import { ref as r } from "vue";
import { getAuthConfig as k, createCountdown as F } from "../config.mjs";
import { createAuthStore as U } from "../stores/auth.mjs";
import { storeToRefs as x } from "pinia";
const q = () => {
  const m = U()(), f = (g) => {
    const l = r(), n = r();
    return {
      send: async () => {
        const s = await g();
        return s.error && l.value ? l.value(s.error) : !s.error && n.value && n.value(s), s;
      },
      onError: (s) => {
        l.value = s;
      },
      onSuccess: (s) => {
        n.value = s;
      }
    };
  }, S = (g, l = k()) => {
    const n = r(), t = r(), u = r(), c = r(!1), s = r(), i = async () => {
      c.value = !0;
      const e = await m.login(g, l);
      n.value = e.user, t.value = e.error, u.value = e.token, s.value = e.message, c.value = !1;
      const d = {
        user: e.user,
        message: e.message,
        token: e.token,
        loading: !1
      };
      return e.error && (d.error = e.error), d;
    }, { send: v, onError: a, onSuccess: o } = f(i);
    return {
      send: v,
      user: n,
      token: u,
      error: t,
      loading: c,
      message: s,
      onError: a,
      onSuccess: o
    };
  }, w = (g, l = k()) => {
    const n = r(), t = r(), u = r(), c = r(!1), s = r(), i = async () => {
      c.value = !0;
      const e = await m.register(g, l);
      return n.value = e.user, t.value = e.error, u.value = e.token, s.value = e.message, c.value = !1, {
        user: e.user,
        error: e.error,
        token: e.token,
        message: e.message,
        loading: c.value
      };
    }, { send: v, onError: a, onSuccess: o } = f(i);
    return {
      send: v,
      user: n,
      token: u,
      error: t,
      loading: c,
      message: s,
      onError: a,
      onSuccess: o
    };
  }, E = (g = k(), l) => {
    const n = r(), t = r(!1), u = r(), c = async () => {
      t.value = !0;
      const a = await m.logout(g, l);
      return n.value = a == null ? void 0 : a.error, u.value = a == null ? void 0 : a.message, t.value = !1, { error: a == null ? void 0 : a.error, message: a == null ? void 0 : a.message, loading: t.value };
    }, { send: s, onError: i, onSuccess: v } = f(c);
    return {
      send: s,
      error: n,
      loading: t,
      message: u,
      onError: i,
      onSuccess: v
    };
  }, h = (g, l = k()) => {
    const n = r(), t = r(!1), u = r(), c = r(), s = r(0), i = async () => {
      t.value = !0;
      const e = await m.forgot(g, l);
      return n.value = e == null ? void 0 : e.error, u.value = e == null ? void 0 : e.message, c.value = e.timeout, t.value = !1, F(c, (d) => {
        s.value = d;
      }), {
        error: e.error,
        loading: t.value,
        message: e.message,
        timeout: e.timeout,
        countdown: s.value
      };
    }, { send: v, onError: a, onSuccess: o } = f(i);
    return {
      send: v,
      error: n,
      loading: t,
      message: u,
      timeout: c,
      onError: a,
      onSuccess: o,
      countdown: s
    };
  }, y = (g, l = k()) => {
    const n = r(), t = r(), u = r(!1), c = r(), s = async () => {
      u.value = !0;
      const o = await m.reset(g, l);
      return n.value = o.user, t.value = o == null ? void 0 : o.error, c.value = o == null ? void 0 : o.message, u.value = !1, { error: o.error, message: o.message, user: n.value, loading: u.value };
    }, { send: i, onError: v, onSuccess: a } = f(s);
    return {
      send: i,
      user: n,
      error: t,
      loading: u,
      message: c,
      onError: v,
      onSuccess: a
    };
  }, A = (g = k(), l) => {
    const n = r(), t = r(), u = r(!1), c = r(), s = async () => {
      u.value = !0;
      const o = await m.loadUserFromStorage(g, l);
      return n.value = o.user, t.value = o == null ? void 0 : o.error, c.value = o == null ? void 0 : o.message, u.value = !1, { error: o.error, message: o.message, user: n.value, loading: u.value };
    }, { send: i, onError: v, onSuccess: a } = f(s);
    return {
      send: i,
      user: n,
      error: t,
      loading: u,
      message: c,
      onError: v,
      onSuccess: a
    };
  }, { user: p, token: C, isAuthenticated: b } = x(m);
  return {
    user: p,
    token: C,
    isAuthenticated: b,
    reset: y,
    login: S,
    logout: E,
    forgot: h,
    register: w,
    loadUserFromStorage: A
  };
};
export {
  q as useInlineAuth
};
