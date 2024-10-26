import { ref as i, toValue as a } from "vue";
let e;
const s = (t) => {
  if (!t || !e.endpoints[t])
    throw new Error(`You have not defined a ${t} endpoint.`);
  const n = e.endpoints[t];
  return e && n ? (e.baseUrl + n).replace(/([^:]\/)\/+/g, "$1") : "";
}, f = (t) => {
  e = t;
}, c = () => {
  if (!e)
    throw new Error("Auth plugin not initialized properly.");
  return e;
}, h = (t, n) => {
  const r = i(0), o = a(t);
  if (o && o > 0) {
    r.value = o;
    const u = setInterval(() => {
      r.value -= 1e3, n && n(r.value), r.value <= 0 && clearInterval(u);
    }, 1e3);
  }
  return r;
};
export {
  e as authConfig,
  h as createCountdown,
  c as getAuthConfig,
  f as setAuthConfig,
  s as url
};
