import { defineComponent as v, mergeModels as y, useModel as c, computed as g, openBlock as l, createElementBlock as a, toDisplayString as s, createCommentVNode as r, createElementVNode as n, Fragment as b, renderList as h, unref as B } from "vue";
import { titleCase as _ } from "../utils/providers.mjs";
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
    autofocus: { type: Boolean },
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
      return ((e = d.choices) == null ? void 0 : e.map((t) => typeof t == "object" && t !== null && "label" in t && "value" in t ? t : { label: String(t), value: t })) ?? [];
    }), p = (e) => {
      const t = e.target;
      i.value = t.value;
    };
    return (e, t) => (l(), a("div", V, [
      e.label ? (l(), a("label", k, s(e.label), 1)) : r("", !0),
      n("fieldset", null, [
        e.label ? (l(), a("legend", C, s(e.label), 1)) : r("", !0),
        n("div", M, [
          (l(!0), a(b, null, h(m.value, (o, f) => (l(), a("div", {
            class: "radio-item",
            key: f
          }, [
            n("input", {
              type: "radio",
              id: "vf-" + o.value + e.name,
              name: e.name,
              value: o.value,
              checked: i.value === o.value,
              onChange: p
            }, null, 40, N),
            n("label", {
              for: "vf-" + o.value + e.name
            }, s(B(_)(o.label)), 9, S)
          ]))), 128))
        ])
      ]),
      n("div", L, [
        e.hint ? (l(), a("p", q, s(e.hint), 1)) : r("", !0)
      ])
    ]));
  }
});
export {
  j as default
};
