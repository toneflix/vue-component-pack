import { ref as s, toValue as f } from "vue";
const v = (l, r) => {
  const e = s(0), t = f(l);
  if (t && t > 0) {
    e.value = t;
    const n = setInterval(() => {
      e.value -= 1e3, r && r(e.value), e.value <= 0 && clearInterval(n);
    }, 1e3);
  }
  return e;
};
function m(l, r, e, t, n, d) {
  const a = (o) => {
    if (!l || o >= l.length) {
      t();
      return;
    }
    const i = l[o];
    let u = !1;
    if (i(r, e, (c) => {
      u = !0, c ? t(c) : a(o + 1);
    }, d, n), !u)
      throw new Error(
        `Middleware at index ${o} did not call next(). All middlewares must call next() to proceed.`
      );
  };
  a(0);
}
export {
  v as createCountdown,
  m as runMiddlewares
};
