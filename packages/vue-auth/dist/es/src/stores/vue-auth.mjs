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
      const n = v({}), g = v(), h = v(!1);
      return {
        user: n,
        token: g,
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
            return n.value = e, g.value = a, h.value = !0, localStorage.setItem(r.storageKey ?? "auth_token", t.token), { user: e, token: a, message: c };
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
          const u = await y(s, n.value, g.value), o = i("logout");
          try {
            await l.post(o, d(r), {
              headers: { ...u },
              ...s.axiosConfig
            }), n.value = {}, g.value = void 0, h.value = !1, localStorage.removeItem(s.storageKey ?? "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (s, r = f()) => {
          var t;
          const u = await y(r, n.value, g.value), o = i("forgot");
          try {
            const { data: e } = await l.post(o, d(s), {
              headers: { ...u },
              ...r.axiosConfig
            }), { timeout: a, message: c } = r.transformResponse ? r.transformResponse(e) : { timeout: e.timeout, message: e.message }, m = S(a);
            return { timeout: a, countdown: m, message: c };
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
            return n.value = e, g.value = a, h.value = !0, localStorage.setItem(r.storageKey ?? "auth_token", t.token), { user: e, token: a, message: c };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        loadUserFromStorage: async (s = f(), r, u) => {
          var e;
          const o = localStorage.getItem(s.storageKey ?? "auth_token") ?? g.value, t = await y(s, n.value, g.value);
          if (o) {
            if (g.value = o, h.value = !0, s.endpoints.profile && (!u || !s.disableAutoRefresh)) {
              const a = i("profile");
              try {
                const { data: c } = await l.get(a, {
                  headers: { ...t },
                  params: { ...d(r) },
                  ...s.axiosConfig
                }), { user: m, message: R } = s.transformResponse ? s.transformResponse(c) : { user: c.user, message: c.message };
                return n.value = m, { user: m, message: R };
              } catch (c) {
                const { response: m } = c;
                return {
                  user: {},
                  error: (m == null ? void 0 : m.data) || {},
                  message: (e = m == null ? void 0 : m.data) == null ? void 0 : e.message
                };
              }
            }
          } else if (Object.entries(n.value).length > 0)
            return { user: n.value };
          return { user: {} };
        }
      };
    },
    k
  );
}
const V = (k) => C(k)();
export {
  C as createVueAuthStore,
  V as useAuthStore
};
