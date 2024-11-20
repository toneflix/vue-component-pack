import { defineComponent as d, mergeModels as u, useModel as p, openBlock as o, createElementBlock as t, toDisplayString as i, createCommentVNode as l, withDirectives as m, createElementVNode as c, vModelText as f } from "vue";
const h = { class: "input-field" }, y = ["for"], g = ["id", "name", "placeholder"], v = {
  key: 1,
  class: "field-anotations"
}, B = {
  key: 0,
  class: "field-hint"
}, b = /* @__PURE__ */ d({
  name: "InputTextarea",
  __name: "input-textarea",
  props: /* @__PURE__ */ u({
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
    const a = p(r, "modelValue");
    return (e, n) => (o(), t("div", h, [
      e.label ? (o(), t("label", {
        key: 0,
        for: "vf-" + e.name
      }, i(e.label), 9, y)) : l("", !0),
      m(c("textarea", {
        rows: "3",
        id: "vf-" + e.name,
        name: e.name,
        placeholder: String(e.placeholder),
        "onUpdate:modelValue": n[0] || (n[0] = (s) => a.value = s)
      }, null, 8, g), [
        [f, a.value]
      ]),
      e.label || e.hint ? (o(), t("div", v, [
        e.hint ? (o(), t("p", B, i(e.hint), 1)) : l("", !0)
      ])) : l("", !0)
    ]));
  }
});
export {
  b as default
};
