import { defineComponent as s, mergeModels as p, useModel as u, openBlock as o, createElementBlock as l, toDisplayString as i, createCommentVNode as t, withDirectives as m, createElementVNode as y, vModelDynamic as f } from "vue";
const c = { class: "input-field" }, h = ["for"], v = ["type", "id", "name", "placeholder"], B = {
  key: 1,
  class: "field-anotations"
}, V = {
  key: 0,
  class: "field-hint"
}, b = /* @__PURE__ */ s({
  name: "InputField",
  __name: "input-field",
  props: /* @__PURE__ */ p({
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
    const a = u(d, "modelValue");
    return (e, n) => (o(), l("div", c, [
      e.label ? (o(), l("label", {
        key: 0,
        for: "vf-" + e.name
      }, i(e.label), 9, h)) : t("", !0),
      m(y("input", {
        type: e.type,
        id: "vf-" + e.name,
        name: e.name,
        placeholder: e.placeholder,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => a.value = r)
      }, null, 8, v), [
        [f, a.value]
      ]),
      e.label || e.hint ? (o(), l("div", B, [
        e.hint ? (o(), l("p", V, i(e.hint), 1)) : t("", !0)
      ])) : t("", !0)
    ]));
  }
});
export {
  b as default
};
