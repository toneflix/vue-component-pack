import { slotNames as m } from "@toneflix/vue-forms/src/utils/providers";
const n = (e, s = "_") => ((a) => a.replace(/([a-z])([A-Z]+)/g, (o, r, t) => r + " " + t).replace(
  /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
  (o, r, t, l) => r + t.toLowerCase() + l
).replace(
  /([A-Z]+)([A-Z][a-z])/g,
  (o, r, t) => r.toLowerCase() + " " + t
))(e).replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((a) => a.toLowerCase()).join(s), c = (e) => n(e).toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(s) {
  return s.toUpperCase();
}), u = m.map((e) => "form-" + e), g = [
  "list-item",
  "list-prepend",
  "list-append",
  "list-after",
  "image-viewer",
  "loader",
  "footer"
], C = {
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
  C as casts,
  u as formSlotNames,
  g as slotNames,
  n as slug,
  c as titleCase
};
