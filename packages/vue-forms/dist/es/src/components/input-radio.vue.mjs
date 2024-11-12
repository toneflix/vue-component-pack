import { defineComponent as v, mergeModels as y, useModel as c, computed as g, openBlock as t, createElementBlock as a, toDisplayString as s, createCommentVNode as r, createElementVNode as o, Fragment as b, renderList as h, unref as _ } from "vue";
import { titleCase as B } from "../utils/providers.mjs";
const V = { class: "input-radio" }, k = { key: 0 }, C = {
  key: 0,
  class: "sr-only"
}, M = { class: "radio-container" }, N = ["id", "name", "value", "checked"], S = ["for"], L = { class: "field-anotations" }, q = {
  key: 0,
  class: "field-hint"
}, j = /* @__PURE__ */ v({
  name: "InputField",
  __name: "input-radio",
  props: /* @__PURE__ */ y({
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
  setup(u) {
    const d = u, i = c(u, "modelValue"), m = g(() => {
      var e;
      return ((e = d.choices) == null ? void 0 : e.map((l) => typeof l == "object" && l !== null && "label" in l && "value" in l ? l : { label: String(l), value: l })) ?? [];
    }), p = (e) => {
      const l = e.target;
      i.value = l.value;
    };
    return (e, l) => (t(), a("div", V, [
      e.label ? (t(), a("label", k, s(e.label), 1)) : r("", !0),
      o("fieldset", null, [
        e.label ? (t(), a("legend", C, s(e.label), 1)) : r("", !0),
        o("div", M, [
          (t(!0), a(b, null, h(m.value, (n, f) => (t(), a("div", {
            class: "radio-item",
            key: f
          }, [
            o("input", {
              type: "radio",
              id: "vf-" + n.value + e.name,
              name: e.name,
              value: n.value,
              checked: i.value === n.value,
              onChange: p
            }, null, 40, N),
            o("label", {
              for: "vf-" + n.value + e.name
            }, s(_(B)(n.label)), 9, S)
          ]))), 128))
        ])
      ]),
      o("div", L, [
        e.hint ? (t(), a("p", q, s(e.hint), 1)) : r("", !0)
      ])
    ]));
  }
});
export {
  j as default
};
