import { ref as d, toValue as f } from "vue";
const v = (t) => Object.fromEntries(Object.entries(t || {}).map(([r, e]) => [r, e[0]])), m = (t, r) => {
  const e = d(0), n = f(t);
  if (n && n > 0) {
    e.value = n;
    const l = setInterval(() => {
      e.value -= 1e3, r && r(e.value), e.value <= 0 && clearInterval(l);
    }, 1e3);
  }
  return e;
};
function h(t, r, e, n, l, s) {
  const a = (o) => {
    if (!t || o >= t.length) {
      n();
      return;
    }
    const i = t[o];
    let u = !1;
    if (i(r, e, (c) => {
      u = !0, c ? n(c) : a(o + 1);
    }, s, l), !u)
      throw new Error(
        `Middleware at index ${o} did not call next(). All middlewares must call next() to proceed.`
      );
  };
  a(0);
}
export {
  m as createCountdown,
  v as reshapeError,
  h as runMiddlewares
};
