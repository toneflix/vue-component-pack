import { ref as v, toValue as d } from "vue";
import { url as i, getAuthConfig as f, buildHeaders as y } from "../utils/config.mjs";
import l from "axios";
import { defineStore as w } from "pinia";
import { createCountdown as S } from "../utils/plugins.mjs";
l.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
l.defaults.headers.common.Accept = "application/json";
l.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function C(k) {
  return w(
    "vue-auth",
    () => {
      const n = v({}), m = v(), h = v(!1);
      return {
        user: n,
        token: m,
        isAuthenticated: h,
        login: async (s, r = f()) => {
          var o;
          const u = i("login");
          try {
            const { data: t } = await l.post(
              u,
              d(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: c
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return n.value = e, m.value = a, h.value = !0, globalThis.localStorage.setItem(r.storageKey ?? "auth_token", t.token), { user: e, token: a, message: c };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        reset: async (s, r = f()) => {
          var o;
          const u = i("reset");
          try {
            const { data: t } = await l.post(
              u,
              d(s),
              r.axiosConfig
            ), { user: e, message: a } = r.transformResponse ? r.transformResponse(t) : { user: t.user, message: t.message };
            return { user: e, message: a };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        logout: async (s = f(), r) => {
          var t;
          const u = await y(s, n.value, m.value), o = i("logout");
          try {
            await l.post(o, d(r), {
              headers: { ...u },
              ...s.axiosConfig
            }), n.value = {}, m.value = void 0, h.value = !1, globalThis.localStorage.removeItem(s.storageKey ?? "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (s, r = f()) => {
          var t;
          const u = await y(r, n.value, m.value), o = i("forgot");
          try {
            const { data: e } = await l.post(o, d(s), {
              headers: { ...u },
              ...r.axiosConfig
            }), { timeout: a, message: c } = r.transformResponse ? r.transformResponse(e) : { timeout: e.timeout, message: e.message }, g = S(a);
            return { timeout: a, countdown: g, message: c };
          } catch (e) {
            const { response: a } = e;
            return {
              error: (a == null ? void 0 : a.data) || {},
              countdown: v(0),
              message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message
            };
          }
        },
        register: async (s, r = f()) => {
          var o;
          const u = i("register");
          try {
            const { data: t } = await l.post(
              u,
              d(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: c
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return n.value = e, m.value = a, h.value = !0, globalThis.localStorage.setItem(r.storageKey ?? "auth_token", t.token), { user: e, token: a, message: c };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        loadUserFromStorage: async (s = f(), r, u) => {
          var e;
          const o = globalThis.localStorage.getItem(s.storageKey ?? "auth_token") ?? m.value, t = await y(s, n.value, m.value);
          if (o && s.endpoints.profile && (m.value = o, h.value = !0, !u || !s.disableAutoRefresh)) {
            const a = i("profile");
            try {
              const { data: c } = await l.get(a, {
                headers: { ...t },
                params: { ...d(r) },
                ...s.axiosConfig
              }), { user: g, message: R } = s.transformResponse ? s.transformResponse(c) : { user: c.user, message: c.message };
              return n.value = g, { user: g, message: R };
            } catch (c) {
              const { response: g } = c;
              return {
                user: {},
                error: (g == null ? void 0 : g.data) || {},
                message: (e = g == null ? void 0 : g.data) == null ? void 0 : e.message
              };
            }
          }
          return Object.entries(n.value).length > 0 ? { user: n.value } : { user: {} };
        }
      };
    },
    k
  );
}
const U = (k) => C(k)();
export {
  C as createVueAuthStore,
  U as useAuthStore
};
