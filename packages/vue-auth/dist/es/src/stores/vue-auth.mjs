import { ref as i, toValue as d } from "vue";
import { url as l, getAuthConfig as h } from "../utils/config.mjs";
import m from "axios";
import { defineStore as y } from "pinia";
import { createCountdown as A } from "../utils/plugins.mjs";
m.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
m.defaults.headers.common.Accept = "application/json";
m.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function w(v) {
  return y(
    "vue-auth",
    () => {
      const n = i({}), g = i(), f = i(!1);
      return {
        user: n,
        token: g,
        isAuthenticated: f,
        login: async (s, r = h()) => {
          var u;
          const c = l("login");
          try {
            const { data: t } = await m.post(
              c,
              d(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: o
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return n.value = e, g.value = a, f.value = !0, localStorage.setItem(r.storageKey || "auth_token", t.token), { user: e, token: a, message: o };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        reset: async (s, r = h()) => {
          var u;
          const c = l("reset");
          try {
            const { data: t } = await m.post(
              c,
              d(s),
              r.axiosConfig
            ), { user: e, message: a } = r.transformResponse ? r.transformResponse(t) : { user: t.user, message: t.message };
            return { user: e, message: a };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        logout: async (s = h(), r) => {
          var t;
          const c = s.setAuthHeaders ? await s.setAuthHeaders({ user: n.value, token: g.value }) : s.getAuthHeaders ? await s.getAuthHeaders({ user: n.value, token: g.value }) : {}, u = l("logout");
          try {
            await m.post(u, d(r), {
              headers: { ...c },
              ...s.axiosConfig
            }), n.value = {}, g.value = void 0, f.value = !1, localStorage.removeItem(s.storageKey || "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (s, r = h()) => {
          var t;
          const c = r.setAuthHeaders ? await r.setAuthHeaders({ user: n.value, token: g.value }) : r.getAuthHeaders ? await r.getAuthHeaders({ user: n.value, token: g.value }) : {}, u = l("forgot");
          try {
            const { data: e } = await m.post(u, d(s), {
              headers: { ...c },
              ...r.axiosConfig
            }), { timeout: a, message: o } = r.transformResponse ? r.transformResponse(e) : { timeout: e.timeout, message: e.message }, k = A(a);
            return { timeout: a, countdown: k, message: o };
          } catch (e) {
            const { response: a } = e;
            return {
              error: (a == null ? void 0 : a.data) || {},
              countdown: i(0),
              message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message
            };
          }
        },
        register: async (s, r = h()) => {
          var u;
          const c = l("register");
          try {
            const { data: t } = await m.post(
              c,
              d(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: o
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return n.value = e, g.value = a, f.value = !0, localStorage.setItem(r.storageKey || "auth_token", t.token), { user: e, token: a, message: o };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        loadUserFromStorage: async (s = h(), r) => {
          var t;
          const c = localStorage.getItem(s.storageKey || "auth_token"), u = s.setAuthHeaders ? await s.setAuthHeaders({ user: n.value, token: g.value }) : s.getAuthHeaders ? await s.getAuthHeaders({ user: n.value, token: g.value }) : {};
          if (c && (g.value = c, f.value = !0, s.endpoints.profile)) {
            const e = l("profile");
            try {
              const { data: a } = await m.get(e, {
                headers: { ...u },
                params: { ...d(r) },
                ...s.axiosConfig
              }), { user: o, message: k } = s.transformResponse ? s.transformResponse(a) : { user: a.user, message: a.message };
              return n.value = o, { user: o, message: k };
            } catch (a) {
              const { response: o } = a;
              return {
                user: {},
                error: (o == null ? void 0 : o.data) || {},
                message: (t = o == null ? void 0 : o.data) == null ? void 0 : t.message
              };
            }
          }
          return { user: {} };
        }
      };
    },
    v
  );
}
const U = (v) => w(v)();
export {
  w as createVueAuthStore,
  U as useAuthStore
};
