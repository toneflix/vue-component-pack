const m = (r, s) => JSON.stringify(r) === JSON.stringify(s), f = (r, s, i) => {
  try {
    const e = i ? i.resolve(s) : s;
    return e ? typeof e == "string" ? r.path === e : r.path === e.path && m(r.query, e.query) : !1;
  } catch {
    return !1;
  }
}, p = (r) => (s, i, e, t, u) => {
  if (!t.isAuthenticated && !f(s, r, u) && s.meta.requiresAuth)
    return e(r);
  e();
}, q = (r) => (s, i, e, t, u) => {
  if (t.isAuthenticated && !f(s, r, u) && s.meta.requiresGuest)
    return e(r);
  e();
}, y = (r, s, i = "roles", e = "requiresAdmin") => (t, u, a, n, h) => {
  if (!n.user[i])
    return a();
  const l = Array.isArray(n.user[i]) ? n.user[i] : [String(n.user[i])], c = typeof s == "string" ? [s] : s;
  if (!l.some((d) => c.includes(d)) && !f(t, r, h) && t.meta[e])
    return a(r);
  a();
};
export {
  p as authMiddleware,
  q as guestMiddleware,
  f as isCurrent,
  y as roleMiddleware
};
