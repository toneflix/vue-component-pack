import { defineComponent as d, mergeModels as r, useModel as m, openBlock as l, createElementBlock as a, toDisplayString as s, createCommentVNode as n, withDirectives as p, createElementVNode as f, vModelText as y } from "vue";
const h = { class: "input-field" }, c = ["for"], B = ["id", "name", "placeholder"], b = {
  key: 1,
  class: "field-anotations"
}, g = {
  key: 0,
  class: "field-hint"
}, V = /* @__PURE__ */ d({
  name: "InputTextarea",
  __name: "input-textarea",
  props: /* @__PURE__ */ r({
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
  emits: /* @__PURE__ */ r(["focus", "blur"], ["update:modelValue"]),
  setup(u) {
    const i = m(u, "modelValue");
    return (e, o) => (l(), a("div", h, [
      e.label ? (l(), a("label", {
        key: 0,
        for: "vf-" + e.name
      }, s(e.label), 9, c)) : n("", !0),
      p(f("textarea", {
        rows: "3",
        id: "vf-" + e.name,
        name: e.name,
        placeholder: String(e.placeholder),
        "onUpdate:modelValue": o[0] || (o[0] = (t) => i.value = t),
        onFocus: o[1] || (o[1] = (t) => e.$emit("focus", t)),
        onBlur: o[2] || (o[2] = (t) => e.$emit("blur", t))
      }, null, 40, B), [
        [y, i.value]
      ]),
      e.label || e.hint ? (l(), a("div", b, [
        e.hint ? (l(), a("p", g, s(e.hint), 1)) : n("", !0)
      ])) : n("", !0)
    ]));
  }
});
export {
  V as default
};
