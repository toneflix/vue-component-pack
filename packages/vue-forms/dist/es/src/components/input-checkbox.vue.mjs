import { defineComponent as c, mergeModels as m, useModel as p, openBlock as t, createElementBlock as o, createElementVNode as u, toDisplayString as d, createCommentVNode as a } from "vue";
const h = { class: "input-checkbox" }, f = { class: "field-check" }, y = ["id", "name", "checked"], V = {
  key: 0,
  class: "field-anotations"
}, g = ["for"], k = {
  key: 1,
  class: "field-hint"
}, B = /* @__PURE__ */ c({
  name: "InputField",
  __name: "input-checkbox",
  props: /* @__PURE__ */ m({
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
    customValidation: {},
    validationMessage: {},
    icon: {},
    tooltip: {},
    format: {},
    styleClass: {},
    prefix: {},
    suffix: {},
    default: {},
    trueValue: { type: [Boolean, Number, String], default: !0 },
    falseValue: { type: [Boolean, Number, String], default: !1 }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const n = l, s = p(l, "modelValue"), r = (e) => {
      const i = e.target;
      s.value = i.checked ? n.trueValue : n.falseValue;
    };
    return (e, i) => (t(), o("div", h, [
      u("div", f, [
        u("input", {
          id: e.name,
          name: e.name,
          checked: s.value === e.trueValue,
          type: "checkbox",
          onChange: r
        }, null, 40, y)
      ]),
      e.label || e.hint ? (t(), o("div", V, [
        e.label ? (t(), o("label", {
          key: 0,
          for: e.name
        }, d(e.label), 9, g)) : a("", !0),
        e.hint ? (t(), o("p", k, d(e.hint), 1)) : a("", !0)
      ])) : a("", !0)
    ]));
  }
});
export {
  B as default
};
