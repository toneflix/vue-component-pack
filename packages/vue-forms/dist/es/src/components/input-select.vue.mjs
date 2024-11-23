import { defineComponent as f, mergeModels as i, computed as y, useModel as v, useId as b, onMounted as c, openBlock as o, createElementBlock as n, toDisplayString as d, createCommentVNode as B, withDirectives as g, createElementVNode as V, Fragment as M, renderList as S, vModelSelect as k } from "vue";
const C = { class: "input-field" }, N = ["name"], q = ["value"], L = /* @__PURE__ */ f({
  name: "InputField",
  __name: "input-select",
  props: /* @__PURE__ */ i({
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
  emits: /* @__PURE__ */ i(["focus", "blur"], ["update:modelValue"]),
  setup(r) {
    const a = r, m = y(() => {
      var t;
      return ((t = a.choices) == null ? void 0 : t.map((e) => typeof e == "object" && e !== null && "label" in e && "value" in e ? e : { label: String(e), value: e })) ?? [];
    }), s = v(r, "modelValue"), u = "vf-" + a.name + b();
    return c(() => {
      var t;
      a.autofocus && ((t = document.querySelector("#" + u)) == null || t.focus());
    }), (t, e) => (o(), n("div", C, [
      t.label ? (o(), n("label", {
        key: 0,
        for: u
      }, d(t.label), 1)) : B("", !0),
      g(V("select", {
        id: u,
        name: t.name,
        "onUpdate:modelValue": e[0] || (e[0] = (l) => s.value = l),
        onBlur: e[1] || (e[1] = (l) => t.$emit("blur", l)),
        onFocus: e[2] || (e[2] = (l) => t.$emit("focus", l))
      }, [
        (o(!0), n(M, null, S(m.value, (l, p) => (o(), n("option", {
          key: p,
          value: l.value
        }, d(l.label), 9, q))), 128))
      ], 40, N), [
        [k, s.value]
      ])
    ]));
  }
});
export {
  L as default
};
