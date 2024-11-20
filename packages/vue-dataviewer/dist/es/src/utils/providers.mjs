const n = (e, s = "_") => ((a) => a.replace(/([a-z])([A-Z]+)/g, (o, r, t) => r + " " + t).replace(
  /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
  (o, r, t, p) => r + t.toLowerCase() + p
).replace(
  /([A-Z]+)([A-Z][a-z])/g,
  (o, r, t) => r.toLowerCase() + " " + t
))(e).replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((a) => a.toLowerCase()).join(s), c = (e) => e.toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(s) {
  return s.toUpperCase();
}), i = [
  "form-prepend",
  "form-append",
  "list-item",
  "list-prepend",
  "list-append",
  "list-after",
  "image",
  "loader"
], m = {
  listItem: (e) => e,
  castFormPos: (e) => e,
  list: (e) => e,
  image: (e) => e,
  loader: (e) => e,
  form: (e) => e
};
export {
  m as casts,
  i as slotNames,
  n as slug,
  c as titleCase
};
