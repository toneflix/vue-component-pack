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
      const u = v({}), n = v(), i = v(!1);
      return {
        user: u,
        token: n,
        isAuthenticated: i,
        login: async (r, s = f()) => {
          var o;
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
            return u.value = e, n.value = a, i.value = !0, localStorage.setItem(s.storageKey ?? "auth_token", t.token), { user: e, token: a, message: g };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        reset: async (r, s = f()) => {
          var o;
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
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        logout: async (r = f(), s) => {
          var t;
          const c = r.setAuthHeaders ? await r.setAuthHeaders({ user: u.value, token: n.value }) : r.getAuthHeaders ? await r.getAuthHeaders({ user: u.value, token: n.value }) : {}, o = h("logout");
          try {
            await d.post(o, l(s), {
              headers: { ...c },
              ...r.axiosConfig
            }), u.value = {}, n.value = void 0, i.value = !1, localStorage.removeItem(r.storageKey ?? "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (r, s = f()) => {
          var t;
          const c = s.setAuthHeaders ? await s.setAuthHeaders({ user: u.value, token: n.value }) : s.getAuthHeaders ? await s.getAuthHeaders({ user: u.value, token: n.value }) : {}, o = h("forgot");
          try {
            const { data: e } = await d.post(o, l(r), {
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
          var o;
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
            return u.value = e, n.value = a, i.value = !0, localStorage.setItem(s.storageKey ?? "auth_token", t.token), { user: e, token: a, message: g };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
          }
        },
        loadUserFromStorage: async (r = f(), s, c) => {
          var e;
          const o = localStorage.getItem(r.storageKey ?? "auth_token"), t = r.setAuthHeaders ? await r.setAuthHeaders({ user: u.value, token: n.value }) : r.getAuthHeaders ? await r.getAuthHeaders({ user: u.value, token: n.value }) : {};
          if (o && (n.value = o, i.value = !0, r.endpoints.profile && (!c || !r.disableAutoRefresh))) {
            const a = h("profile");
            try {
              const { data: g } = await d.get(a, {
                headers: { ...t },
                params: { ...l(s) },
                ...r.axiosConfig
              }), { user: m, message: A } = r.transformResponse ? r.transformResponse(g) : { user: g.user, message: g.message };
              return u.value = m, { user: m, message: A };
            } catch (g) {
              const { response: m } = g;
              return {
                user: {},
                error: (m == null ? void 0 : m.data) || {},
                message: (e = m == null ? void 0 : m.data) == null ? void 0 : e.message
              };
            }
          }
          return { user: {} };
        }
      };
    },
    k
  );
}
const V = (k) => H(k)();
export {
  H as createVueAuthStore,
  V as useAuthStore
};
