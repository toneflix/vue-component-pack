import { ref as s, toValue as h } from "vue";
let o;
const w = (e) => {
  if (!e || !o.endpoints[e])
    throw new Error(`You have not defined a ${e} endpoint.`);
  const t = o.endpoints[e];
  return o && t ? (o.baseUrl + t).replace(/([^:]\/)\/+/g, "$1") : "";
}, d = (e) => {
  o = e;
}, g = () => {
  if (!o)
    throw new Error("Auth plugin not initialized properly.");
  return o;
}, p = (e, t) => {
  const n = s(0), r = h(e);
  if (r && r > 0) {
    n.value = r;
    const u = setInterval(() => {
      n.value -= 1e3, t && t(n.value), n.value <= 0 && clearInterval(u);
    }, 1e3);
  }
  return n;
};
function C(e, t, n, r, u) {
  const a = s(!1), i = (l) => {
    if (e) {
      if (l < e.length) {
        const c = (f) => {
          if (a.value = l + 1 === e.length, f)
            return r(f);
          i(l + 1);
        };
        e[l](t, n, c, u);
      } else
        r();
      if (!a.value)
        throw new Error("next() was not called on some middleware. You must call next() on every middleware you define.");
    }
  };
  i(0);
}
export {
  o as authConfig,
  p as createCountdown,
  g as getAuthConfig,
  C as runMiddlewares,
  d as setAuthConfig,
  w as url
};
