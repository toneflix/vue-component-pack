import { slotNames as m } from "../../../../node_modules/.pnpm/@toneflix_vue-forms@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@toneflix/vue-forms/src/utils/providers.mjs";
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
  "loader"
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
