import { defineComponent as p, mergeModels as r, computed as f, useModel as v, openBlock as o, createElementBlock as n, toDisplayString as s, createCommentVNode as y, withDirectives as b, createElementVNode as g, Fragment as B, renderList as V, vModelSelect as c } from "vue";
const M = { class: "input-field" }, S = ["for"], k = ["id", "name"], C = ["value"], F = /* @__PURE__ */ p({
  name: "InputField",
  __name: "input-select",
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
    choices: { default: () => [] },
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
    trueValue: { type: [Boolean, Number, String] },
    falseValue: { type: [Boolean, Number, String] }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ r(["focus", "blur"], ["update:modelValue"]),
  setup(a) {
    const i = a, d = f(() => {
      var l;
      return ((l = i.choices) == null ? void 0 : l.map((e) => typeof e == "object" && e !== null && "label" in e && "value" in e ? e : { label: String(e), value: e })) ?? [];
    }), u = v(a, "modelValue");
    return (l, e) => (o(), n("div", M, [
      l.label ? (o(), n("label", {
        key: 0,
        for: "vf-" + l.name
      }, s(l.label), 9, S)) : y("", !0),
      b(g("select", {
        id: "vf-" + l.name,
        name: l.name,
        "onUpdate:modelValue": e[0] || (e[0] = (t) => u.value = t),
        onFocus: e[1] || (e[1] = (t) => l.$emit("focus", t)),
        onBlur: e[2] || (e[2] = (t) => l.$emit("blur", t))
      }, [
        (o(!0), n(B, null, V(d.value, (t, m) => (o(), n("option", {
          key: m,
          value: t.value
        }, s(t.label), 9, C))), 128))
      ], 40, k), [
        [c, u.value]
      ])
    ]));
  }
});
export {
  F as default
};
