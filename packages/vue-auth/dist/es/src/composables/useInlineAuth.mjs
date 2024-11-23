import { ref as r } from "vue";
import { createCountdown as U } from "../utils/plugins.mjs";
import { createVueAuthStore as x } from "../stores/vue-auth.mjs";
import { getAuthConfig as k } from "../utils/config.mjs";
import { storeToRefs as I } from "pinia";
const z = (S) => {
  const m = x(S)(), f = (g) => {
    const l = r(), u = r();
    return {
      send: async () => {
        const s = await g();
        return s.error && l.value ? l.value(s.error) : !s.error && u.value && u.value(s), s;
      },
      onError: (s) => {
        l.value = s;
      },
      onSuccess: (s) => {
        u.value = s;
      }
    };
  }, w = (g, l = k()) => {
    const u = r(), o = r(), a = r(), n = r(!1), s = r(), i = async () => {
      n.value = !0;
      const e = await m.login(g, l);
      u.value = e.user, o.value = e.error, a.value = e.token, s.value = e.message, n.value = !1;
      const d = {
        user: e.user,
        message: e.message,
        token: e.token,
        loading: !1
      };
      return e.error && (d.error = e.error), d;
    }, { send: v, onError: t, onSuccess: c } = f(i);
    return {
      send: v,
      user: u,
      token: a,
      error: o,
      loading: n,
      message: s,
      onError: t,
      onSuccess: c
    };
  }, E = (g, l = k()) => {
    const u = r(), o = r(), a = r(), n = r(!1), s = r(), i = async () => {
      n.value = !0;
      const e = await m.register(g, l);
      return u.value = e.user, o.value = e.error, a.value = e.token, s.value = e.message, n.value = !1, {
        user: e.user,
        error: e.error,
        token: e.token,
        message: e.message,
        loading: n.value
      };
    }, { send: v, onError: t, onSuccess: c } = f(i);
    return {
      send: v,
      user: u,
      token: a,
      error: o,
      loading: n,
      message: s,
      onError: t,
      onSuccess: c
    };
  }, h = (g = k(), l) => {
    const u = r(), o = r(!1), a = r(), n = async () => {
      o.value = !0;
      const t = await m.logout(g, l);
      return u.value = t == null ? void 0 : t.error, a.value = t == null ? void 0 : t.message, o.value = !1, { error: t == null ? void 0 : t.error, message: t == null ? void 0 : t.message, loading: o.value };
    }, { send: s, onError: i, onSuccess: v } = f(n);
    return {
      send: s,
      error: u,
      loading: o,
      message: a,
      onError: i,
      onSuccess: v
    };
  }, y = (g, l = k()) => {
    const u = r(), o = r(!1), a = r(), n = r(), s = r(0), i = async () => {
      o.value = !0;
      const e = await m.forgot(g, l);
      return u.value = e == null ? void 0 : e.error, a.value = e == null ? void 0 : e.message, n.value = e.timeout, o.value = !1, U(n, (d) => {
        s.value = d;
      }), {
        error: e.error,
        loading: o.value,
        message: e.message,
        timeout: e.timeout,
        countdown: s.value
      };
    }, { send: v, onError: t, onSuccess: c } = f(i);
    return {
      send: v,
      error: u,
      loading: o,
      message: a,
      timeout: n,
      onError: t,
      onSuccess: c,
      countdown: s
    };
  }, A = (g, l = k()) => {
    const u = r(), o = r(), a = r(!1), n = r(), s = async () => {
      a.value = !0;
      const c = await m.reset(g, l);
      return u.value = c.user, o.value = c == null ? void 0 : c.error, n.value = c == null ? void 0 : c.message, a.value = !1, { error: c.error, message: c.message, user: u.value, loading: a.value };
    }, { send: i, onError: v, onSuccess: t } = f(s);
    return {
      send: i,
      user: u,
      error: o,
      loading: a,
      message: n,
      onError: v,
      onSuccess: t
    };
  }, p = (g = k(), l, u) => {
    const o = r(), a = r(), n = r(!1), s = r(), i = async () => {
      n.value = !0;
      const e = await m.loadUserFromStorage(g, l, u);
      return o.value = e.user, a.value = e == null ? void 0 : e.error, s.value = e == null ? void 0 : e.message, n.value = !1, { error: e.error, message: e.message, user: o.value, loading: n.value };
    }, { send: v, onError: t, onSuccess: c } = f(i);
    return {
      send: v,
      user: o,
      error: a,
      loading: n,
      message: s,
      onError: t,
      onSuccess: c
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
