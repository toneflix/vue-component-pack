import { defineComponent as s, mergeModels as d, useModel as m, openBlock as t, createElementBlock as l, toDisplayString as i, createCommentVNode as p, withDirectives as c, createElementVNode as y, Fragment as f, renderList as g, vModelSelect as B } from "vue";
const V = { class: "input-field" }, h = ["for"], v = ["id", "name"], b = ["value"], M = /* @__PURE__ */ s({
  name: "InputField",
  __name: "input-select",
  props: /* @__PURE__ */ d({
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
  setup(r) {
    const a = m(r, "modelValue");
    return (e, n) => (t(), l("div", V, [
      e.label ? (t(), l("label", {
        key: 0,
        for: e.name
      }, i(e.label), 9, h)) : p("", !0),
      c(y("select", {
        id: e.name,
        name: e.name,
        "onUpdate:modelValue": n[0] || (n[0] = (o) => a.value = o)
      }, [
        (t(!0), l(f, null, g(e.choices, (o, u) => (t(), l("option", {
          key: u,
          value: o
        }, i(o), 9, b))), 128))
      ], 8, v), [
        [B, a.value]
      ])
    ]));
  }
});
export {
  M as default
};
