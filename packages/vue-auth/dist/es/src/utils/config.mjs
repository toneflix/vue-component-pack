let t;
const n = (r) => {
  if (!r || !t.endpoints[r])
    throw new Error(`You have not defined a ${r} endpoint.`);
  const e = t.endpoints[r];
  return t && e ? (t.baseUrl + e).replace(/([^:]\/)\/+/g, "$1") : "";
}, o = (r) => {
  t = r;
}, i = () => {
  if (!t)
    throw new Error("Auth plugin not initialized properly.");
  return t;
};
export {
  t as authConfig,
  i as getAuthConfig,
  o as setAuthConfig,
  n as url
};
