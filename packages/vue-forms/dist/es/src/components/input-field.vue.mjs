import { defineComponent as d, mergeModels as r, useModel as p, openBlock as t, createElementBlock as n, toDisplayString as s, createCommentVNode as a, withDirectives as m, createElementVNode as f, vModelDynamic as y } from "vue";
const h = { class: "input-field" }, c = ["for"], B = ["type", "id", "name", "placeholder"], b = {
  key: 1,
  class: "field-anotations"
}, g = {
  key: 0,
  class: "field-hint"
}, V = /* @__PURE__ */ d({
  name: "InputField",
  __name: "input-field",
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
    const i = p(u, "modelValue");
    return (e, o) => (t(), n("div", h, [
      e.label ? (t(), n("label", {
        key: 0,
        for: "vf-" + e.name
      }, s(e.label), 9, c)) : a("", !0),
      m(f("input", {
        type: e.type,
        id: "vf-" + e.name,
        name: e.name,
        placeholder: String(e.placeholder),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
        onFocus: o[1] || (o[1] = (l) => e.$emit("focus", l)),
        onBlur: o[2] || (o[2] = (l) => e.$emit("blur", l))
      }, null, 40, B), [
        [y, i.value]
      ]),
      e.label || e.hint ? (t(), n("div", b, [
        e.hint ? (t(), n("p", g, s(e.hint), 1)) : a("", !0)
      ])) : a("", !0)
    ]));
  }
});
export {
  V as default
};
