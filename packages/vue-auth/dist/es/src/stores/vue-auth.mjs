import { ref as v, toValue as l } from "vue";
import { url as h, getAuthConfig as f } from "../utils/config.mjs";
import d from "axios";
import { defineStore as y } from "pinia";
import { createCountdown as w } from "../utils/plugins.mjs";
d.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
d.defaults.headers.common.Accept = "application/json";
d.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function H(k) {
  return y(
    "vue-auth",
    () => {
      const o = v({}), n = v(), i = v(!1);
      return {
        user: o,
        token: n,
        isAuthenticated: i,
        login: async (r, s = f()) => {
          var u;
          const c = h("login");
          try {
            const { data: t } = await d.post(
              c,
              l(r),
              s.axiosConfig
            ), {
              user: e,
              token: a,
              message: g
            } = s.transformResponse ? s.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return o.value = e, n.value = a, i.value = !0, localStorage.setItem(s.storageKey ?? "auth_token", t.token), { user: e, token: a, message: g };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        reset: async (r, s = f()) => {
          var u;
          const c = h("reset");
          try {
            const { data: t } = await d.post(
              c,
              l(r),
              s.axiosConfig
            ), { user: e, message: a } = s.transformResponse ? s.transformResponse(t) : { user: t.user, message: t.message };
            return { user: e, message: a };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        logout: async (r = f(), s) => {
          var t;
          const c = r.setAuthHeaders ? await r.setAuthHeaders({ user: o.value, token: n.value }) : r.getAuthHeaders ? await r.getAuthHeaders({ user: o.value, token: n.value }) : {}, u = h("logout");
          try {
            await d.post(u, l(s), {
              headers: { ...c },
              ...r.axiosConfig
            }), o.value = {}, n.value = void 0, i.value = !1, localStorage.removeItem(r.storageKey ?? "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (r, s = f()) => {
          var t;
          const c = s.setAuthHeaders ? await s.setAuthHeaders({ user: o.value, token: n.value }) : s.getAuthHeaders ? await s.getAuthHeaders({ user: o.value, token: n.value }) : {}, u = h("forgot");
          try {
            const { data: e } = await d.post(u, l(r), {
              headers: { ...c },
              ...s.axiosConfig
            }), { timeout: a, message: g } = s.transformResponse ? s.transformResponse(e) : { timeout: e.timeout, message: e.message }, m = w(a);
            return { timeout: a, countdown: m, message: g };
          } catch (e) {
            const { response: a } = e;
            return {
              error: (a == null ? void 0 : a.data) || {},
              countdown: v(0),
              message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message
            };
          }
        },
        register: async (r, s = f()) => {
          var u;
          const c = h("register");
          try {
            const { data: t } = await d.post(
              c,
              l(r),
              s.axiosConfig
            ), {
              user: e,
              token: a,
              message: g
            } = s.transformResponse ? s.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return o.value = e, n.value = a, i.value = !0, localStorage.setItem(s.storageKey ?? "auth_token", t.token), { user: e, token: a, message: g };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        loadUserFromStorage: async (r = f(), s, c) => {
          var e;
          const u = localStorage.getItem(r.storageKey ?? "auth_token") ?? n.value, t = r.setAuthHeaders ? await r.setAuthHeaders({ user: o.value, token: n.value }) : r.getAuthHeaders ? await r.getAuthHeaders({ user: o.value, token: n.value }) : {};
          if (u) {
            if (n.value = u, i.value = !0, r.endpoints.profile && (!c || !r.disableAutoRefresh)) {
              const a = h("profile");
              try {
                const { data: g } = await d.get(a, {
                  headers: { ...t },
                  params: { ...l(s) },
                  ...r.axiosConfig
                }), { user: m, message: A } = r.transformResponse ? r.transformResponse(g) : { user: g.user, message: g.message };
                return o.value = m, { user: m, message: A };
              } catch (g) {
                const { response: m } = g;
                return {
                  user: {},
                  error: (m == null ? void 0 : m.data) || {},
                  message: (e = m == null ? void 0 : m.data) == null ? void 0 : e.message
                };
              }
            }
          } else if (Object.entries(o.value).length > 0)
            return { user: o.value };
          return { user: {} };
        }
      };
    },
    k
  );
}
const U = (k) => H(k)();
export {
  H as createVueAuthStore,
  U as useAuthStore
};
