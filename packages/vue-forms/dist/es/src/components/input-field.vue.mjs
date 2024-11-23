import { defineComponent as m, mergeModels as d, useModel as f, useId as y, onMounted as c, openBlock as l, createElementBlock as n, toDisplayString as p, createCommentVNode as i, withDirectives as h, createElementVNode as B, vModelDynamic as b } from "vue";
const g = { class: "input-field" }, V = ["type", "name", "placeholder"], v = {
  key: 1,
  class: "field-anotations"
}, M = {
  key: 0,
  class: "field-hint"
}, S = /* @__PURE__ */ m({
  name: "InputField",
  __name: "input-field",
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
  setup(u) {
    const s = u, r = f(u, "modelValue"), a = "vf-" + s.name + y();
    return c(() => {
      var e;
      s.autofocus && ((e = document.querySelector("#" + a)) == null || e.focus());
    }), (e, o) => (l(), n("div", g, [
      e.label ? (l(), n("label", {
        key: 0,
        for: a
      }, p(e.label), 1)) : i("", !0),
      h(B("input", {
        type: e.type,
        id: a,
        name: e.name,
        placeholder: String(e.placeholder),
        "onUpdate:modelValue": o[0] || (o[0] = (t) => r.value = t),
        onBlur: o[1] || (o[1] = (t) => e.$emit("blur", t)),
        onFocus: o[2] || (o[2] = (t) => e.$emit("focus", t))
      }, null, 40, V), [
        [b, r.value]
      ]),
      e.label || e.hint ? (l(), n("div", v, [
        e.hint ? (l(), n("p", M, p(e.hint), 1)) : i("", !0)
      ])) : i("", !0)
    ]));
  }
});
export {
  S as default
};
