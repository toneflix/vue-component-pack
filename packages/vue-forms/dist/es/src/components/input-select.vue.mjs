import { defineComponent as s, mergeModels as d, useModel as m, openBlock as t, createElementBlock as l, toDisplayString as i, createCommentVNode as p, withDirectives as c, createElementVNode as f, Fragment as y, renderList as v, vModelSelect as g } from "vue";
const B = { class: "input-field" }, V = ["for"], h = ["id", "name"], b = ["value"], M = /* @__PURE__ */ s({
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
    return (e, n) => (t(), l("div", B, [
      e.label ? (t(), l("label", {
        key: 0,
        for: "vf-" + e.name
      }, i(e.label), 9, V)) : p("", !0),
      c(f("select", {
        id: "vf-" + e.name,
        name: e.name,
        "onUpdate:modelValue": n[0] || (n[0] = (o) => a.value = o)
      }, [
        (t(!0), l(y, null, v(e.choices, (o, u) => (t(), l("option", {
          key: u,
          value: o
        }, i(o), 9, b))), 128))
      ], 8, h), [
        [g, a.value]
      ])
    ]));
  }
});
export {
  M as default
};
