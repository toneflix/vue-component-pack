import { ref as i, toValue as f } from "vue";
const v = (e) => Object.fromEntries(Object.entries(e || {}).map(([r, t]) => [r, t[0]])), m = (e, r) => {
  const t = i(0), a = f(e);
  if (a && a > 0) {
    t.value = a;
    const n = setInterval(() => {
      t.value -= 1e3, r && r(t.value), t.value <= 0 && clearInterval(n);
    }, 1e3);
  }
  return t;
};
function p(e, r, t, a, n, d) {
  const u = (l) => {
    if (!e || l >= e.length) {
      a();
      return;
    }
    const s = e[l];
    let o = !1;
    if (s && s(r, t, (c) => {
      o = !0, c ? a(c) : u(l + 1);
    }, d, n), !o)
      throw new Error(
        `Middleware at index ${l} did not call next(). All middlewares must call next() to proceed.`
      );
  };
  u(0);
}
const H = async (e, r, t) => e.setAuthHeaders ? await e.setAuthHeaders({ user: r, token: t }) : e.getAuthHeaders ? await e.getAuthHeaders({ user: r, token: t }) : {};
export {
  H as buildHeaders,
  m as createCountdown,
  v as reshapeError,
  p as runMiddlewares
};
