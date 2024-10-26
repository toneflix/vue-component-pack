import { ref as h, toValue as g } from "vue";
import { url as m, getAuthConfig as d, createCountdown as y } from "../config.mjs";
import u from "axios";
import { defineStore as v } from "pinia";
u.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
u.defaults.headers.common.Accept = "application/json";
u.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function w() {
  return v("vue-auth", () => {
    const l = h({}), f = h(), i = h(!1);
    return {
      user: l,
      token: f,
      isAuthenticated: i,
      login: async (s, a = d()) => {
        var o;
        const n = m("login");
        try {
          const { data: e } = await u.post(
            n,
            g(s),
            a.axiosConfig
          ), {
            user: t,
            token: r,
            message: c
          } = a.transformResponse ? a.transformResponse(e) : { user: e.user, token: e.token, message: e.message };
          return l.value = t, f.value = r, i.value = !0, localStorage.setItem(a.storageKey || "auth_token", e.token), { user: t, token: r, message: c };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
        }
      },
      reset: async (s, a = d()) => {
        var o;
        const n = m("reset");
        try {
          const { data: e } = await u.post(
            n,
            g(s),
            a.axiosConfig
          ), { user: t, message: r } = a.transformResponse ? a.transformResponse(e) : { user: e.user, message: e.message };
          return { user: t, message: r };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
        }
      },
      logout: async (s = d(), a) => {
        var e;
        const n = s.getAuthHeaders ? await s.getAuthHeaders() : {}, o = m("logout");
        try {
          await u.post(o, g(a), {
            headers: { ...n },
            ...s.axiosConfig
          }), l.value = {}, f.value = void 0, i.value = !1, localStorage.removeItem(s.storageKey || "auth_token");
        } catch ({ response: t }) {
          return { error: (t == null ? void 0 : t.data) || {}, message: (e = t == null ? void 0 : t.data) == null ? void 0 : e.message };
        }
      },
      forgot: async (s, a = d()) => {
        var e;
        const n = a.getAuthHeaders ? await a.getAuthHeaders() : {}, o = m("forgot");
        try {
          const { data: t } = await u.post(o, g(s), {
            headers: { ...n },
            ...a.axiosConfig
          }), { timeout: r, message: c } = a.transformResponse ? a.transformResponse(t) : { timeout: t.timeout, message: t.message }, k = y(r);
          return { timeout: r, countdown: k, message: c };
        } catch ({ response: t }) {
          return { error: (t == null ? void 0 : t.data) || {}, countdown: h(0), message: (e = t == null ? void 0 : t.data) == null ? void 0 : e.message };
        }
      },
      register: async (s, a = d()) => {
        var o;
        const n = m("register");
        try {
          const { data: e } = await u.post(
            n,
            g(s),
            a.axiosConfig
          ), {
            user: t,
            token: r,
            message: c
          } = a.transformResponse ? a.transformResponse(e) : { user: e.user, token: e.token, message: e.message };
          return l.value = t, f.value = r, i.value = !0, localStorage.setItem(a.storageKey || "auth_token", e.token), { user: t, token: r, message: c };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
        }
      },
      loadUserFromStorage: async (s = d(), a) => {
        var e;
        const n = localStorage.getItem(s.storageKey || "auth_token"), o = s.getAuthHeaders ? await s.getAuthHeaders() : {};
        if (n && (f.value = n, i.value = !0, s.endpoints.profile)) {
          const t = m("profile");
          try {
            const { data: r } = await u.get(t, {
              headers: { ...o },
              params: { ...g(a) },
              ...s.axiosConfig
            }), { user: c, message: k } = s.transformResponse ? s.transformResponse(r) : { user: r.user, message: r.message };
            return l.value = c, { user: c, message: k };
          } catch ({ response: r }) {
            return { user: {}, error: (r == null ? void 0 : r.data) || {}, message: (e = r == null ? void 0 : r.data) == null ? void 0 : e.message };
          }
        }
        return { user: {} };
      }
    };
  });
}
const q = w();
export {
  w as createAuthStore,
  q as useAuthStore
};
