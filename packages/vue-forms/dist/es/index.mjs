import { VueForms as t } from "./src/index.mjs";
import m from "./src/components/form-actions.vue.mjs";
import n from "./src/components/input-checkbox.vue.mjs";
import i from "./src/components/input-field.vue.mjs";
import r from "./src/components/input-radio.vue.mjs";
import s from "./src/components/input-select.vue.mjs";
import c from "./src/components/input-switch.vue.mjs";
import f from "./src/components/input-textarea.vue.mjs";
const d = i, x = r, F = s, h = m, S = c, b = n, k = f, w = {
  install: (o) => {
    o.use(t);
  }
};
export {
  h as FormActions,
  b as InputCheckbox,
  d as InputField,
  x as InputRadio,
  F as InputSelect,
  S as InputSwitch,
  k as InputTextarea,
  t as VueForms,
  w as default
};
