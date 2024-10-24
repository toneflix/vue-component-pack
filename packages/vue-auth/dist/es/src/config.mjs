let t;
const e = (r) => {
  if (!r || !t.endpoints[r])
    throw new Error(`You have not defined a ${r} endpoint.`);
  const n = t.endpoints[r];
  return t && n ? (t.baseUrl + n).replace(/([^:]\/)\/+/g, "$1") : "";
};
function o(r) {
  t = r;
}
function i() {
  if (!t)
    throw new Error("Auth plugin not initialized properly.");
  return t;
}
export {
  t as authConfig,
  i as getAuthConfig,
  o as setAuthConfig,
  e as url
};
