import { defineComponent as p, mergeModels as d, useModel as f, useId as c, onMounted as y, openBlock as l, createElementBlock as a, toDisplayString as m, createCommentVNode as u, withDirectives as h, createElementVNode as B, vModelText as b } from "vue";
const V = { class: "input-field" }, g = ["name", "placeholder"], v = {
  key: 1,
  class: "field-anotations"
}, M = {
  key: 0,
  class: "field-hint"
}, N = /* @__PURE__ */ p({
  name: "InputTextarea",
  __name: "input-textarea",
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
    autofocus: { type: Boolean },
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
  emits: /* @__PURE__ */ d(["focus", "blur"], ["update:modelValue"]),
  setup(i) {
    const r = i, s = f(i, "modelValue"), n = "vf-" + r.name + c();
    return y(() => {
      var e;
      r.autofocus && ((e = document.querySelector("#" + n)) == null || e.focus());
    }), (e, o) => (l(), a("div", V, [
      e.label ? (l(), a("label", {
        key: 0,
        for: n
      }, m(e.label), 1)) : u("", !0),
      h(B("textarea", {
        rows: "3",
        id: n,
        name: e.name,
        placeholder: e.placeholder ?? "",
        "onUpdate:modelValue": o[0] || (o[0] = (t) => s.value = t),
        onBlur: o[1] || (o[1] = (t) => e.$emit("blur", t)),
        onFocus: o[2] || (o[2] = (t) => e.$emit("focus", t))
      }, null, 40, g), [
        [b, s.value]
      ]),
      e.label || e.hint ? (l(), a("div", v, [
        e.hint ? (l(), a("p", M, m(e.hint), 1)) : u("", !0)
      ])) : u("", !0)
    ]));
  }
});
export {
  N as default
};
