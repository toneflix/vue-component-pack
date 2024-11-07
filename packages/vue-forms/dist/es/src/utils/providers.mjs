const t = (e) => e.toLowerCase().replace(/_/g, " ").replace(/-/g, " ").replace(/(?:^|\s)\w/g, function(r) {
  return r.toUpperCase();
});
export {
  t as titleCase
};
