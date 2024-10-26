import { ref as f, toValue as d } from "vue";
let n;
const h = (e) => {
  if (!e || !n.endpoints[e])
    throw new Error(`You have not defined a ${e} endpoint.`);
  const t = n.endpoints[e];
  return n && t ? (n.baseUrl + t).replace(/([^:]\/)\/+/g, "$1") : "";
}, v = (e) => {
  n = e;
}, g = () => {
  if (!n)
    throw new Error("Auth plugin not initialized properly.");
  return n;
}, C = (e, t) => {
  const r = f(0), o = d(e);
  if (o && o > 0) {
    r.value = o;
    const a = setInterval(() => {
      r.value -= 1e3, t && t(r.value), r.value <= 0 && clearInterval(a);
    }, 1e3);
  }
  return r;
};
function m(e, t, r, o, a) {
  const u = (l) => {
    if (!e || l >= e.length) {
      o();
      return;
    }
    const c = e[l];
    let i = !1;
    if (c(t, r, (s) => {
      i = !0, s ? o(s) : u(l + 1);
    }, a), !i)
      throw new Error(
        `Middleware at index ${l} did not call next(). All middlewares must call next() to proceed.`
      );
  };
  u(0);
}
export {
  n as authConfig,
  C as createCountdown,
  g as getAuthConfig,
  m as runMiddlewares,
  v as setAuthConfig,
  h as url
};
