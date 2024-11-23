import m from "./components/form-actions.vue.mjs";
import i from "./components/inline-form.vue.mjs";
import r from "./components/input-checkbox.vue.mjs";
import s from "./components/input-field.vue.mjs";
import c from "./components/input-radio.vue.mjs";
import f from "./components/input-select.vue.mjs";
import a from "./components/input-switch.vue.mjs";
import _ from "./components/input-textarea.vue.mjs";
import e from "./components/vue-forms.vue.mjs";
const p = (t) => (t.install = (n) => {
  const o = t.name;
  n.component(o, t);
}, t), S = p(e), b = s, k = i, A = c, C = f, R = m, T = a, V = r, g = _;
export {
  R as FormActions,
  k as InlineForm,
  V as InputCheckbox,
  b as InputField,
  A as InputRadio,
  C as InputSelect,
  T as InputSwitch,
  g as InputTextarea,
  S as VueForms,
  S as default
};
