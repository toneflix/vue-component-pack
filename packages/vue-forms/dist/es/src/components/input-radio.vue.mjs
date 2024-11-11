import { defineComponent as y, mergeModels as h, useModel as f, computed as g, openBlock as o, createElementBlock as a, toDisplayString as s, createCommentVNode as i, createElementVNode as l, Fragment as v, renderList as b } from "vue";
const _ = { class: "input-radio" }, B = { key: 0 }, V = {
  key: 0,
  class: "sr-only"
}, k = { class: "radio-container" }, C = ["id", "name", "value", "checked"], A = ["for"], M = { class: "field-anotations" }, N = {
  key: 0,
  class: "field-hint"
}, L = /* @__PURE__ */ y({
  name: "InputField",
  __name: "input-radio",
  props: /* @__PURE__ */ h({
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
    const t = r, d = f(r, "modelValue"), c = g(() => Array.isArray(t.choices) && typeof t.choices[0] == "string" ? t.choices : Array.isArray(t.choices) && typeof t.choices[0] == "object" ? t.choices.map(
      (e) => Object.keys(e)[0]
      // Extract the key as the choice
    ) : []), p = (e) => {
      const u = e.target;
      d.value = u.value;
    };
    return (e, u) => (o(), a("div", _, [
      e.label ? (o(), a("label", B, s(e.label), 1)) : i("", !0),
      l("fieldset", null, [
        e.label ? (o(), a("legend", V, s(e.label), 1)) : i("", !0),
        l("div", k, [
          (o(!0), a(v, null, b(c.value, (n, m) => (o(), a("div", {
            class: "radio-item",
            key: m
          }, [
            l("input", {
              type: "radio",
              id: "vf-" + n + e.name,
              name: e.name,
              value: n,
              checked: d.value === n,
              onChange: p
            }, null, 40, C),
            l("label", {
              for: "vf-" + n + e.name
            }, null, 8, A)
          ]))), 128))
        ])
      ]),
      l("div", M, [
        e.hint ? (o(), a("p", N, s(e.hint), 1)) : i("", !0)
      ])
    ]));
  }
});
export {
  L as default
};
