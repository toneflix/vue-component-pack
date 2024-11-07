import s from "./components/vue-forms.vue.mjs";
const o = (t) => (t.install = (n) => {
  const e = t.name;
  n.component(e, t);
}, t), a = o(s);
export {
  a as VueForms,
  a as default
};
