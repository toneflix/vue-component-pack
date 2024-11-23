import { ref as v, toValue as i } from "vue";
import { url as f, getAuthConfig as h, buildHeaders as R } from "../utils/config.mjs";
import m from "axios";
import { defineStore as S } from "pinia";
import { createCountdown as C } from "../utils/plugins.mjs";
m.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
m.defaults.headers.common.Accept = "application/json";
m.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function b(k) {
  return S(
    "vue-auth",
    () => {
      const u = v({}), g = v(), w = v(!1), d = v(!1);
      return {
        user: u,
        token: g,
        refreshed: w,
        isAuthenticated: d,
        login: async (s, r = h()) => {
          var o;
          const n = f("login");
          try {
            const { data: t } = await m.post(
              n,
              i(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: c
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return u.value = e, g.value = a, d.value = !0, globalThis.localStorage.setItem(r.storageKey ?? "auth_token", t.token), { user: e, token: a, message: c };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        reset: async (s, r = h()) => {
          var o;
          const n = f("reset");
          try {
            const { data: t } = await m.post(
              n,
              i(s),
              r.axiosConfig
            ), { user: e, message: a } = r.transformResponse ? r.transformResponse(t) : { user: t.user, message: t.message };
            return { user: e, message: a };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        logout: async (s = h(), r) => {
          var t;
          const n = await R(s, u.value, g.value), o = f("logout");
          try {
            await m.post(o, i(r), {
              headers: { ...n },
              ...s.axiosConfig
            }), u.value = {}, g.value = void 0, d.value = !1, globalThis.localStorage.removeItem(s.storageKey ?? "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (s, r = h()) => {
          var t;
          const n = await R(r, u.value, g.value), o = f("forgot");
          try {
            const { data: e } = await m.post(o, i(s), {
              headers: { ...n },
              ...r.axiosConfig
            }), { timeout: a, message: c } = r.transformResponse ? r.transformResponse(e) : { timeout: e.timeout, message: e.message }, l = C(a);
            return { timeout: a, countdown: l, message: c };
          } catch (e) {
            const { response: a } = e;
            return {
              error: (a == null ? void 0 : a.data) || {},
              countdown: v(0),
              message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message
            };
          }
        },
        register: async (s, r = h()) => {
          var o;
          const n = f("register");
          try {
            const { data: t } = await m.post(
              n,
              i(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: c
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return u.value = e, g.value = a, d.value = !0, globalThis.localStorage.setItem(r.storageKey ?? "auth_token", t.token), { user: e, token: a, message: c };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        loadUserFromStorage: async (s = h(), r, n) => {
          var e;
          const o = globalThis.localStorage.getItem(s.storageKey ?? "auth_token") ?? g.value, t = await R(
            s,
            u.value,
            g.value
          );
          if (o && s.endpoints.profile && (g.value = o, d.value = !0, !n || !s.disableAutoRefresh)) {
            const a = f("profile");
            try {
              const { data: c } = await m.get(a, {
                headers: { ...t },
                params: { ...i(r) },
                ...s.axiosConfig
              }), { user: l, message: y } = s.transformResponse ? s.transformResponse(c) : { user: c.user, message: c.message };
              return u.value = l, { user: l, message: y };
            } catch (c) {
              const { response: l, status: y } = c;
              return y === 401 && (u.value = {}, g.value = void 0, w.value = !0, d.value = !1, globalThis.localStorage.removeItem(s.storageKey ?? "auth_token")), {
                user: {},
                error: (l == null ? void 0 : l.data) || {},
                message: (e = l == null ? void 0 : l.data) == null ? void 0 : e.message
              };
            }
          }
          return Object.entries(u.value).length > 0 ? { user: u.value } : { user: {} };
        }
      };
    },
    k
  );
}
const V = (k) => b(k)();
export {
  b as createVueAuthStore,
  V as useAuthStore
};
