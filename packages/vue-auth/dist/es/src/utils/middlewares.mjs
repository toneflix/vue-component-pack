const l = (r, s) => JSON.stringify(r) === JSON.stringify(s), f = (r, s, u) => {
  const e = u ? u.resolve(s) : s;
  return typeof e == "string" ? r.path === e : r.path === e.path && l(r.query, e.query);
}, p = (r) => (s, u, e, i, n) => {
  if (!i.isAuthenticated && !f(s, r, n) && s.meta.requiresAuth)
    return e(r);
  e();
}, q = (r) => (s, u, e, i, n) => {
  if (i.isAuthenticated && !f(s, r, n) && s.meta.requiresGuest)
    return e(r);
  e();
}, A = (r, s, u = "roles", e = "requiresAdmin") => (i, n, a, t, h) => {
  if (!t.user[u])
    return a();
  const m = Array.isArray(t.user[u]) ? t.user[u] : [String(t.user[u])], d = typeof s == "string" ? [s] : s;
  if (!m.some((g) => d.includes(g)) && !f(i, r, h) && i.meta[e])
    return a(r);
  a();
};
export {
  p as authMiddleware,
  q as guestMiddleware,
  A as roleMiddleware
};
