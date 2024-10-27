import { ref as h, toValue as d } from "vue";
import { url as l, getAuthConfig as f } from "../utils/config.mjs";
import c from "axios";
import { defineStore as v } from "pinia";
import { createCountdown as y } from "../utils/plugins.mjs";
c.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
c.defaults.headers.common.Accept = "application/json";
c.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function w() {
  return v("vue-auth", () => {
    const g = h({}), m = h(), i = h(!1);
    return {
      user: g,
      token: m,
      isAuthenticated: i,
      login: async (s, r = f()) => {
        var n;
        const u = l("login");
        try {
          const { data: t } = await c.post(
            u,
            d(s),
            r.axiosConfig
          ), {
            user: e,
            token: a,
            message: o
          } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
          return g.value = e, m.value = a, i.value = !0, localStorage.setItem(r.storageKey || "auth_token", t.token), { user: e, token: a, message: o };
        } catch (t) {
          const { response: e } = t;
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (n = e == null ? void 0 : e.data) == null ? void 0 : n.message };
        }
      },
      reset: async (s, r = f()) => {
        var n;
        const u = l("reset");
        try {
          const { data: t } = await c.post(
            u,
            d(s),
            r.axiosConfig
          ), { user: e, message: a } = r.transformResponse ? r.transformResponse(t) : { user: t.user, message: t.message };
          return { user: e, message: a };
        } catch (t) {
          const { response: e } = t;
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (n = e == null ? void 0 : e.data) == null ? void 0 : n.message };
        }
      },
      logout: async (s = f(), r) => {
        var t;
        const u = s.getAuthHeaders ? await s.getAuthHeaders({ user: g.value, token: m.value }) : {}, n = l("logout");
        try {
          await c.post(n, d(r), {
            headers: { ...u },
            ...s.axiosConfig
          }), g.value = {}, m.value = void 0, i.value = !1, localStorage.removeItem(s.storageKey || "auth_token");
        } catch (e) {
          const { response: a } = e;
          return { error: (a == null ? void 0 : a.data) || {}, message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
        }
      },
      forgot: async (s, r = f()) => {
        var t;
        const u = r.getAuthHeaders ? await r.getAuthHeaders({ user: g.value, token: m.value }) : {}, n = l("forgot");
        try {
          const { data: e } = await c.post(n, d(s), {
            headers: { ...u },
            ...r.axiosConfig
          }), { timeout: a, message: o } = r.transformResponse ? r.transformResponse(e) : { timeout: e.timeout, message: e.message }, k = y(a);
          return { timeout: a, countdown: k, message: o };
        } catch (e) {
          const { response: a } = e;
          return { error: (a == null ? void 0 : a.data) || {}, countdown: h(0), message: (t = a == null ? void 0 : a.data) == null ? void 0 : t.message };
        }
      },
      register: async (s, r = f()) => {
        var n;
        const u = l("register");
        try {
          const { data: t } = await c.post(
            u,
            d(s),
            r.axiosConfig
          ), {
            user: e,
            token: a,
            message: o
          } = r.transformResponse ? r.transformResponse(t) : { user: t.user, token: t.token, message: t.message };
          return g.value = e, m.value = a, i.value = !0, localStorage.setItem(r.storageKey || "auth_token", t.token), { user: e, token: a, message: o };
        } catch (t) {
          const { response: e } = t;
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (n = e == null ? void 0 : e.data) == null ? void 0 : n.message };
        }
      },
      loadUserFromStorage: async (s = f(), r) => {
        var t;
        const u = localStorage.getItem(s.storageKey || "auth_token"), n = s.getAuthHeaders ? await s.getAuthHeaders({ user: g.value, token: m.value }) : {};
        if (u && (m.value = u, i.value = !0, s.endpoints.profile)) {
          const e = l("profile");
          try {
            const { data: a } = await c.get(e, {
              headers: { ...n },
              params: { ...d(r) },
              ...s.axiosConfig
            }), { user: o, message: k } = s.transformResponse ? s.transformResponse(a) : { user: a.user, message: a.message };
            return g.value = o, { user: o, message: k };
          } catch (a) {
            const { response: o } = a;
            return { user: {}, error: (o == null ? void 0 : o.data) || {}, message: (t = o == null ? void 0 : o.data) == null ? void 0 : t.message };
          }
        }
        return { user: {} };
      }
    };
  }, { persist: !0 });
}
const F = w();
export {
  w as createAuthStore,
  F as useAuthStore
};
