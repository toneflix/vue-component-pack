let t;
const n = (e) => {
  if (!e || !t.endpoints[e])
    throw new Error(`You have not defined a ${e} endpoint.`);
  const r = t.endpoints[e];
  return t && r ? (t.baseUrl + r).replace(/([^:]\/)\/+/g, "$1") : "";
}, u = (e) => {
  t = e;
}, s = () => {
  if (!t)
    throw new Error("Auth plugin not initialized properly.");
  return t;
}, h = async (e, r, a) => e.setAuthHeaders ? await e.setAuthHeaders({ user: r, token: a }) : e.getAuthHeaders ? await e.getAuthHeaders({ user: r, token: a }) : {};
export {
  t as authConfig,
  h as buildHeaders,
  s as getAuthConfig,
  u as setAuthConfig,
  n as url
};
