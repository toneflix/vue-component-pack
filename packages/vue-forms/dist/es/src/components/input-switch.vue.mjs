import { defineComponent as d, mergeModels as c, useModel as p, getCurrentInstance as m, openBlock as f, createElementBlock as h, createElementVNode as l, normalizeClass as b, unref as u, toDisplayString as y } from "vue";
const V = { class: "input-switch" }, g = ["aria-labelledby"], B = ["id"], v = /* @__PURE__ */ d({
  name: "InputField",
  __name: "input-switch",
  props: /* @__PURE__ */ c({
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
    customValidation: {},
    validationMessage: {},
    icon: {},
    tooltip: {},
    format: {},
    styleClass: {},
    prefix: {},
    suffix: {},
    default: {},
    trueValue: { type: [Boolean, Number, String], default: !0 },
    falseValue: { type: [Boolean, Number, String], default: !1 }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(a) {
    var n;
    const e = a, t = p(a, "modelValue"), o = (n = m()) == null ? void 0 : n.uid, r = () => {
      t.value = t.value === e.falseValue ? e.trueValue : e.falseValue;
    };
    return (s, i) => (f(), h("div", V, [
      l("button", {
        type: "button",
        role: "switch",
        "aria-checked": "false",
        class: b(["switch-button", { toggled: t.value === s.trueValue }]),
        "aria-labelledby": `switch-label-${u(o)}`,
        onClick: r
      }, i[0] || (i[0] = [
        l("span", {
          "aria-hidden": "true",
          class: "switch-indicator"
        }, null, -1)
      ]), 10, g),
      l("span", {
        class: "switch-label",
        id: `switch-label-${u(o)}`
      }, y(s.label), 9, B)
    ]));
  }
});
export {
  v as default
};
