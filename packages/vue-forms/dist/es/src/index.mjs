import m from "./components/form-actions.vue.mjs";
import s from "./components/input-checkbox.vue.mjs";
import i from "./components/input-field.vue.mjs";
import r from "./components/input-radio.vue.mjs";
import c from "./components/input-select.vue.mjs";
import a from "./components/input-switch.vue.mjs";
import f from "./components/input-textarea.vue.mjs";
import _ from "./components/vue-forms.vue.mjs";
const e = (t) => (t.install = (n) => {
  const o = t.name;
  n.component(o, t);
}, t), F = e(_), w = i, S = r, b = c, k = m, A = a, C = s, R = f;
export {
  k as FormActions,
  C as InputCheckbox,
  w as InputField,
  S as InputRadio,
  b as InputSelect,
  A as InputSwitch,
  R as InputTextarea,
  F as VueForms,
  F as default
};
