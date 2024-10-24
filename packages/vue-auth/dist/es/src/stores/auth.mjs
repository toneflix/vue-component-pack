import { url as l, getAuthConfig as g } from "../config.mjs";
import s from "axios";
import { defineStore as m } from "pinia";
import { ref as d } from "vue";
s.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
s.defaults.headers.common.Accept = "application/json";
s.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function h() {
  return m("vue-auth", () => {
    const u = d({}), n = d(), c = d(!1);
    return {
      user: u,
      token: n,
      isAuthenticated: c,
      login: async (t, r = g()) => {
        try {
          const { data: e } = await s.post(l("login"), t, r.axiosConfig), { user: o, token: a } = r.transformResponse ? r.transformResponse(e) : { user: e.user, token: e.token };
          return u.value = o, n.value = a, c.value = !0, localStorage.setItem(r.storageKey || "auth_token", e.token), { user: o, token: a };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {} };
        }
      },
      logout: async (t = g(), r) => {
        const e = t.getAuthHeaders ? await t.getAuthHeaders() : {};
        try {
          await s.post(
            l("logout"),
            r,
            {
              headers: {
                ...e
              },
              ...t.axiosConfig
            }
          ), u.value = {}, n.value = void 0, c.value = !1, localStorage.removeItem(t.storageKey || "auth_token");
        } catch ({ response: o }) {
          return { error: (o == null ? void 0 : o.data) || {} };
        }
      },
      register: async (t, r = g()) => {
        try {
          const { data: e } = await s.post(
            l("register"),
            t,
            r.axiosConfig
          ), { user: o, token: a } = r.transformResponse ? r.transformResponse(e) : { user: e.user, token: e.token };
          return u.value = o, n.value = a, c.value = !0, localStorage.setItem(r.storageKey || "auth_token", e.token), { user: o, token: a };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {} };
        }
      },
      loadUserFromStorage: async (t = g(), r) => {
        const e = localStorage.getItem(t.storageKey || "auth_token"), o = t.getAuthHeaders ? await t.getAuthHeaders() : {};
        if (e && (n.value = e, c.value = !0, t.endpoints.profile))
          try {
            const { data: a } = await s.get(
              l("profile"),
              {
                headers: {
                  ...o
                },
                params: {
                  ...r
                },
                ...t.axiosConfig
              }
            ), { user: f } = t.transformResponse ? t.transformResponse(a) : { user: a.user };
            return u.value = f, { user: f };
          } catch ({ response: a }) {
            return { user: {}, error: (a == null ? void 0 : a.data) || {} };
          }
        return { user: {} };
      }
    };
  });
}
const w = h();
export {
  h as createAuthStore,
  w as useAuthStore
};
