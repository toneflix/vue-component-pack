const g = (r, s) => JSON.stringify(r) === JSON.stringify(s), f = (r, s, i) => {
  const e = i ? i.resolve(s) : s;
  return typeof e == "string" ? r.path === e : r.path === e.path && g(r.query, e.query);
}, q = (r) => (s, i, e, n, t) => {
  if (!n.isAuthenticated && !f(s, r, t) && s.meta.requiresAuth)
    return e(r);
  e();
}, y = (r, s, i = "roles", e = "requiresAdmin") => (n, t, a, u, h) => {
  if (!u.user[i])
    return a();
  const m = Array.isArray(u.user[i]) ? u.user[i] : [String(u.user[i])], o = typeof s == "string" ? [s] : s;
  if (!m.some((p) => o.includes(p)) && !f(n, r, h) && n.meta[e])
    return a(r);
  a();
};
export {
  q as authMiddleware,
  y as roleMiddleware
};
