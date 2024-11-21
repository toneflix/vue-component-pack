const l = (e, s = "_") => ((o) => o.replace(/([a-z])([A-Z]+)/g, (a, r, t) => r + " " + t).replace(
  /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
  (a, r, t, i) => r + t.toLowerCase() + i
).replace(
  /([A-Z]+)([A-Z][a-z])/g,
  (a, r, t) => r.toLowerCase() + " " + t
))(e).replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((o) => o.toLowerCase()).join(s), m = (e) => l(e).toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(s) {
  return s.toUpperCase();
}), p = (
  //xFormSlotNames
  [
    "form-input",
    "form-select",
    "form-checkbox",
    "form-radio",
    "form-switch",
    "form-textarea"
  ]
), c = [
  "list-item",
  "list-prepend",
  "list-append",
  "list-after",
  "image-viewer",
  "loader"
], u = {
  image: (e) => e,
  loader: (e) => e,
  listItem: (e) => e,
  imgListItem: (e) => e,
  imageViewer: (e) => e,
  castFormPos: (e) => e,
  list: (e) => e,
  form: (e) => e
};
export {
  u as casts,
  p as formSlotNames,
  c as slotNames,
  l as slug,
  m as titleCase
};
