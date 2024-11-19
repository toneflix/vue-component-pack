import { ref as r } from "vue";
import { createCountdown as U } from "../utils/plugins.mjs";
import { createVueAuthStore as x } from "../stores/vue-auth.mjs";
import { getAuthConfig as k } from "../utils/config.mjs";
import { storeToRefs as I } from "pinia";
const z = (S) => {
  const m = x(S)(), f = (g) => {
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
  }, w = (g, l = k()) => {
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
  }, E = (g, l = k()) => {
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
  }, h = (g = k(), l) => {
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
  }, y = (g, l = k()) => {
    const n = r(), t = r(!1), u = r(), c = r(), s = r(0), i = async () => {
      t.value = !0;
      const e = await m.forgot(g, l);
      return n.value = e == null ? void 0 : e.error, u.value = e == null ? void 0 : e.message, c.value = e.timeout, t.value = !1, U(c, (d) => {
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
  }, A = (g, l = k()) => {
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
  }, p = (g = k(), l) => {
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
  }, { user: C, token: b, isAuthenticated: F } = I(m);
  return {
    user: C,
    token: b,
    isAuthenticated: F,
    reset: A,
    login: w,
    logout: h,
    forgot: y,
    register: E,
    loadUserFromStorage: p
  };
};
export {
  z as useInlineAuth
};
