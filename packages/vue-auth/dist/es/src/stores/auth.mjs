import { ref as v, toValue as m } from "vue";
import { url as d, getAuthConfig as l } from "../config.mjs";
import u from "axios";
import { defineStore as y } from "pinia";
u.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
u.defaults.headers.common.Accept = "application/json";
u.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function R() {
  return y("vue-auth", () => {
    const f = v({}), i = v(), h = v(!1);
    return {
      user: f,
      token: i,
      isAuthenticated: h,
      login: async (s, a = l()) => {
        var o;
        const n = d("login");
        try {
          const { data: e } = await u.post(
            n,
            m(s),
            a.axiosConfig
          ), { user: t, token: r, message: c } = a.transformResponse ? a.transformResponse(e) : { user: e.user, token: e.token, message: e.message };
          return f.value = t, i.value = r, h.value = !0, localStorage.setItem(a.storageKey || "auth_token", e.token), { user: t, token: r, message: c };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
        }
      },
      reset: async (s, a = l()) => {
        var o;
        const n = d("reset");
        try {
          const { data: e } = await u.post(
            n,
            m(s),
            a.axiosConfig
          ), { user: t, message: r } = a.transformResponse ? a.transformResponse(e) : { user: e.user, message: e.message };
          return { user: t, message: r };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
        }
      },
      logout: async (s = l(), a) => {
        var e;
        const n = s.getAuthHeaders ? await s.getAuthHeaders() : {}, o = d("logout");
        try {
          await u.post(
            o,
            m(a),
            { headers: { ...n }, ...s.axiosConfig }
          ), f.value = {}, i.value = void 0, h.value = !1, localStorage.removeItem(s.storageKey || "auth_token");
        } catch ({ response: t }) {
          return { error: (t == null ? void 0 : t.data) || {}, message: (e = t == null ? void 0 : t.data) == null ? void 0 : e.message };
        }
      },
      forgot: async (s, a = l()) => {
        var e;
        const n = a.getAuthHeaders ? await a.getAuthHeaders() : {}, o = d("forgot");
        try {
          const { data: t } = await u.post(
            o,
            m(s),
            { headers: { ...n }, ...a.axiosConfig }
          ), { timeout: r, message: c } = a.transformResponse ? a.transformResponse(t) : { timeout: t.timeout, message: t.message }, g = v(0);
          if (r && r > 0) {
            g.value = r;
            const k = setInterval(() => {
              g.value -= 1e3, g.value <= 0 && clearInterval(k);
            }, 1e3);
          }
          return { timeout: r, countdown: g, message: c };
        } catch ({ response: t }) {
          return { error: (t == null ? void 0 : t.data) || {}, countdown: v(0), message: (e = t == null ? void 0 : t.data) == null ? void 0 : e.message };
        }
      },
      register: async (s, a = l()) => {
        var o;
        const n = d("register");
        try {
          const { data: e } = await u.post(
            n,
            m(s),
            a.axiosConfig
          ), { user: t, token: r, message: c } = a.transformResponse ? a.transformResponse(e) : { user: e.user, token: e.token, message: e.message };
          return f.value = t, i.value = r, h.value = !0, localStorage.setItem(a.storageKey || "auth_token", e.token), { user: t, token: r, message: c };
        } catch ({ response: e }) {
          return { user: {}, error: (e == null ? void 0 : e.data) || {}, message: (o = e == null ? void 0 : e.data) == null ? void 0 : o.message };
        }
      },
      loadUserFromStorage: async (s = l(), a) => {
        var e;
        const n = localStorage.getItem(s.storageKey || "auth_token"), o = s.getAuthHeaders ? await s.getAuthHeaders() : {};
        if (n && (i.value = n, h.value = !0, s.endpoints.profile)) {
          const t = d("profile");
          try {
            const { data: r } = await u.get(
              t,
              { headers: { ...o }, params: { ...m(a) }, ...s.axiosConfig }
            ), { user: c, message: g } = s.transformResponse ? s.transformResponse(r) : { user: r.user, message: r.message };
            return f.value = c, { user: c, message: g };
          } catch ({ response: r }) {
            return { user: {}, error: (r == null ? void 0 : r.data) || {}, message: (e = r == null ? void 0 : r.data) == null ? void 0 : e.message };
          }
        }
        return { user: {} };
      }
    };
  });
}
const q = R();
export {
  R as createAuthStore,
  q as useAuthStore
};
