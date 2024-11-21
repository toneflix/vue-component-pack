const r = (e) => e.toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(t) {
  return t.toUpperCase();
}), a = ["input", "select", "checkbox", "radio", "switch", "textarea"];
export {
  a as slotNames,
  r as titleCase
};
