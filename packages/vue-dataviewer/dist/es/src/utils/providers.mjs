const c = (r, t = "_") => ((p) => p.replace(/([a-z])([A-Z]+)/g, (s, e, a) => e + " " + a).replace(
  /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
  (s, e, a, o) => e + a.toLowerCase() + o
).replace(
  /([A-Z]+)([A-Z][a-z])/g,
  (s, e, a) => e.toLowerCase() + " " + a
))(r).replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((p) => p.toLowerCase()).join(t), n = (r) => r.toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(t) {
  return t.toUpperCase();
});
export {
  c as slug,
  n as titleCase
};
