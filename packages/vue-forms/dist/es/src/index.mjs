import a from "./components/vue-forms.vue.mjs";
const e = (n) => (n.install = (t) => {
  const s = n.name;
  t.component(s, n);
}, n), r = e(a);
export {
  r as VueForms,
  r as default
};
