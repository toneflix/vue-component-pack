import { ref as i, toValue as l } from "vue";
import { getAuthConfig as d, url as f } from "../utils/config.mjs";
import m from "axios";
import { defineStore as y } from "pinia";
import { createCountdown as A } from "../utils/plugins.mjs";
m.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
m.defaults.headers.common.Accept = "application/json";
m.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function w() {
  const { storageOptions: k } = d();
  return y(
    "vue-auth",
    () => {
      const c = i({}), g = i(), h = i(!1);
      return {
        user: c,
        token: g,
        isAuthenticated: h,
        login: async (s, r = d()) => {
          var u;
          const n = f("login");
          try {
            const { data: t } = await m.post(
              n,
              l(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: o
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return c.value = e, g.value = a, h.value = !0, localStorage.setItem(r.storageKey || "auth_token", t.token), { user: e, token: a, message: o };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        reset: async (s, r = d()) => {
          var u;
          const n = f("reset");
          try {
            const { data: t } = await m.post(
              n,
              l(s),
              r.axiosConfig
            ), { user: e, message: a } = r.transformResponse ? r.transformResponse(t) : { user: t.user, message: t.message };
            return { user: e, message: a };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        logout: async (s = d(), r) => {
          var t;
          const n = s.setAuthHeaders ? await s.setAuthHeaders({ user: c.value, token: g.value }) : s.getAuthHeaders ? await s.getAuthHeaders({ user: c.value, token: g.value }) : {}, u = f("logout");
          try {
            await m.post(u, l(r), {
              headers: { ...n },
              ...s.axiosConfig
            }), c.value = {}, g.value = void 0, h.value = !1, localStorage.removeItem(s.storageKey || "auth_token");
          } catch (e) {
            const { response: a } = e;
            return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
          }
        },
        forgot: async (s, r = d()) => {
          var t;
          const n = r.setAuthHeaders ? await r.setAuthHeaders({ user: c.value, token: g.value }) : r.getAuthHeaders ? await r.getAuthHeaders({ user: c.value, token: g.value }) : {}, u = f("forgot");
          try {
            const { data: e } = await m.post(u, l(s), {
              headers: { ...n },
              ...r.axiosConfig
            }), { timeout: a, message: o } = r.transformResponse ? r.transformResponse(e) : { timeout: e.timeout, message: e.message }, v = A(a);
            return { timeout: a, countdown: v, message: o };
          } catch (e) {
            const { response: a } = e;
            return {
              error: (a == null ? void 0 : a.data) || {},
              countdown: i(0),
              message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message
            };
          }
        },
        register: async (s, r = d()) => {
          var u;
          const n = f("register");
          try {
            const { data: t } = await m.post(
              n,
              l(s),
              r.axiosConfig
            ), {
              user: e,
              token: a,
              message: o
            } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
            return c.value = e, g.value = a, h.value = !0, localStorage.setItem(r.storageKey || "auth_token", t.token), { user: e, token: a, message: o };
          } catch (t) {
            const { response: e } = t;
            return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (u = e == null ? void 0 : e.data) == null ? void 0 : u.message };
          }
        },
        loadUserFromStorage: async (s = d(), r) => {
          var t;
          const n = localStorage.getItem(s.storageKey || "auth_token"), u = s.setAuthHeaders ? await s.setAuthHeaders({ user: c.value, token: g.value }) : s.getAuthHeaders ? await s.getAuthHeaders({ user: c.value, token: g.value }) : {};
          if (n && (g.value = n, h.value = !0, s.endpoints.profile)) {
            const e = f("profile");
            try {
              const { data: a } = await m.get(e, {
                headers: { ...u },
                params: { ...l(r) },
                ...s.axiosConfig
              }), { user: o, message: v } = s.transformResponse ? s.transformResponse(a) : { user: a.user, message: a.message };
              return c.value = o, { user: o, message: v };
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
    k
  );
}
const U = w();
export {
  w as createVueAuthStore,
  U as useAuthStore
};
