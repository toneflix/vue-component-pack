const l = (e, a = "_") => ((s) => s.replace(/([a-z])([A-Z]+)/g, (o, r, t) => r + " " + t).replace(
  /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
  (o, r, t, p) => r + t.toLowerCase() + p
).replace(
  /([A-Z]+)([A-Z][a-z])/g,
  (o, r, t) => r.toLowerCase() + " " + t
))(e).replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((s) => s.toLowerCase()).join(a), i = (e) => e.toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(a) {
  return a.toUpperCase();
}), c = [
  "form-prepend",
  "form-append",
  "list-item",
  "list-prepend",
  "list-append",
  "list-after",
  "image-viewer",
  "loader"
], m = {
  image: (e) => e,
  loader: (e) => e,
  listItem: (e) => e,
  imageViewer: (e) => e,
  castFormPos: (e) => e,
  list: (e) => e,
  form: (e) => e
};
export {
  m as casts,
  c as slotNames,
  l as slug,
  i as titleCase
};
