import { defineComponent as m, mergeModels as p, computed as f, useModel as v, openBlock as o, createElementBlock as a, toDisplayString as u, createCommentVNode as y, withDirectives as c, createElementVNode as b, Fragment as g, renderList as B, vModelSelect as V } from "vue";
const M = { class: "input-field" }, S = ["for"], _ = ["id", "name"], h = ["value"], C = /* @__PURE__ */ m({
  name: "InputField",
  __name: "input-select",
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
  emits: ["update:modelValue"],
  setup(n) {
    const s = n, i = f(() => {
      var l;
      return ((l = s.choices) == null ? void 0 : l.map((e) => typeof e == "object" && e !== null && "label" in e && "value" in e ? e : { label: String(e), value: e })) ?? [];
    }), r = v(n, "modelValue");
    return (l, e) => (o(), a("div", M, [
      l.label ? (o(), a("label", {
        key: 0,
        for: "vf-" + l.name
      }, u(l.label), 9, S)) : y("", !0),
      c(b("select", {
        id: "vf-" + l.name,
        name: l.name,
        "onUpdate:modelValue": e[0] || (e[0] = (t) => r.value = t)
      }, [
        (o(!0), a(g, null, B(i.value, (t, d) => (o(), a("option", {
          key: d,
          value: t.value
        }, u(t.label), 9, h))), 128))
      ], 8, _), [
        [V, r.value]
      ])
    ]));
  }
});
export {
  C as default
};
