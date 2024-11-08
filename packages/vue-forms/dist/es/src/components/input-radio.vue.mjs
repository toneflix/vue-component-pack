import { defineComponent as p, mergeModels as c, useModel as f, openBlock as t, createElementBlock as o, toDisplayString as n, createCommentVNode as s, createElementVNode as a, Fragment as y, renderList as h, unref as g } from "vue";
import { titleCase as v } from "../utils/providers.mjs";
const _ = { class: "input-radio" }, b = { key: 0 }, B = {
  key: 0,
  class: "sr-only"
}, V = { class: "radio-container" }, k = ["id", "name", "value", "checked"], C = ["for"], M = { class: "field-anotations" }, N = {
  key: 0,
  class: "field-hint"
}, S = /* @__PURE__ */ p({
  name: "InputField",
  __name: "input-radio",
  props: /* @__PURE__ */ c({
    type: {},
    name: {},
    label: {},
    value: {},
    placeholder: {},
    count: {},
    max: {},
    min: {},
    col: {},
    autogrow: { type: Boolean },
    hint: {},
    secret: { type: Boolean },
    group: {},
    choices: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    pattern: {},
    multiple: { type: Boolean },
    step: {},
    maxLength: {},
    minLength: {},
    customValidation: { type: Function },
    validationMessage: {},
    icon: {},
    tooltip: {},
    format: {},
    styleClass: {},
    prefix: {},
    suffix: {},
    default: {},
    trueValue: { type: [Boolean, Number, String] },
    falseValue: { type: [Boolean, Number, String] }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const i = f(d, "modelValue"), u = (e) => {
      const r = e.target;
      i.value = r.value;
    };
    return (e, r) => (t(), o("div", _, [
      e.label ? (t(), o("label", b, n(e.label), 1)) : s("", !0),
      a("fieldset", null, [
        e.label ? (t(), o("legend", B, n(e.label), 1)) : s("", !0),
        a("div", V, [
          (t(!0), o(y, null, h(e.choices, (l, m) => (t(), o("div", {
            class: "radio-item",
            key: m
          }, [
            a("input", {
              type: "radio",
              id: "vf-" + l + e.name,
              name: e.name,
              value: l,
              checked: i.value === l,
              onChange: u
            }, null, 40, k),
            a("label", {
              for: "vf-" + l + e.name
            }, n(g(v)(l)), 9, C)
          ]))), 128))
        ])
      ]),
      a("div", M, [
        e.hint ? (t(), o("p", N, n(e.hint), 1)) : s("", !0)
      ])
    ]));
  }
});
export {
  S as default
};
