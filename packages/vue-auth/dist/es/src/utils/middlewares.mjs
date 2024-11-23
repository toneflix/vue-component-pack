const d = (r, s) => JSON.stringify(r) === JSON.stringify(s), f = (r, s, u) => {
  try {
    const e = u ? u.resolve(s) : s;
    return typeof e == "string" ? r.path === e : r.path === e.path && d(r.query, e.query);
  } catch {
    return !1;
  }
}, p = (r) => (s, u, e, t, i) => {
  if (!t.isAuthenticated && !f(s, r, i) && s.meta.requiresAuth)
    return e(r);
  e();
}, q = (r) => (s, u, e, t, i) => {
  if (t.isAuthenticated && !f(s, r, i) && s.meta.requiresGuest)
    return e(r);
  e();
}, y = (r, s, u = "roles", e = "requiresAdmin") => (t, i, a, n, h) => {
  if (!n.user[u])
    return a();
  const c = Array.isArray(n.user[u]) ? n.user[u] : [String(n.user[u])], l = typeof s == "string" ? [s] : s;
  if (!c.some((m) => l.includes(m)) && !f(t, r, h) && t.meta[e])
    return a(r);
  a();
};
export {
  p as authMiddleware,
  q as guestMiddleware,
  y as roleMiddleware
};
