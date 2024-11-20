import { defineComponent as w, mergeModels as v, useModel as t, ref as y, openBlock as U, createElementBlock as B, Fragment as D, renderSlot as $, createVNode as g, mergeProps as f, withCtx as k } from "vue";
/* empty css                   */
import V from "./dialog/TDialog.vue.mjs";
import b from "./main-content.vue.mjs";
const P = /* @__PURE__ */ w({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ v({
    exclusions: { default: () => ["imageUrl"] },
    formExclusions: { default: () => ["imageUrl"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean },
    dateProps: {},
    dateFormat: { default: "do MMM, yyyy h:mm a" }
  }, {
    data: {
      required: !0
    },
    dataModifiers: {},
    form: {
      required: !1
    },
    formModifiers: {},
    mode: {
      default: "view"
    },
    modeModifiers: {},
    loading: { type: Boolean, default: !1 },
    loadingModifiers: {},
    saving: { type: Boolean, default: !1 },
    savingModifiers: {},
    errors: {
      default: {}
    },
    errorsModifiers: {}
  }),
  emits: /* @__PURE__ */ v(["toggleDialog", "click:save"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(l) {
    const d = t(l, "data"), s = t(l, "form"), r = t(l, "mode"), u = t(l, "loading"), n = t(l, "saving"), m = t(l, "errors"), i = y(!1), p = (a, e = "view") => {
      d.value = a, r.value = e, i.value = !0;
    };
    return (a, e) => (U(), B(D, null, [
      $(a.$slots, "default", {
        viewData: d.value,
        viewMode: r.value,
        saving: n.value,
        toggleDialog: p
      }),
      g(V, f({
        modelValue: i.value,
        "onUpdate:modelValue": e[9] || (e[9] = (o) => i.value = o)
      }, a.$attrs), {
        default: k(() => [
          g(b, f({
            "dialog-mode": "",
            class: "constrained"
          }, a.$props, {
            form: s.value,
            "onUpdate:form": e[0] || (e[0] = (o) => s.value = o),
            data: d.value,
            "onUpdate:data": e[1] || (e[1] = (o) => d.value = o),
            errors: m.value,
            "onUpdate:errors": e[2] || (e[2] = (o) => m.value = o),
            loading: u.value,
            "onUpdate:loading": e[3] || (e[3] = (o) => u.value = o),
            mode: r.value,
            "onUpdate:mode": e[4] || (e[4] = (o) => r.value = o),
            saving: n.value,
            "onUpdate:saving": e[5] || (e[5] = (o) => n.value = o),
            onUpdateData: e[6] || (e[6] = (o, M) => a.$emit("toggleDialog", o, M)),
            "onClick:save": e[7] || (e[7] = (o) => a.$emit("click:save", o)),
            onToggleDialog: e[8] || (e[8] = (o) => i.value = o)
          }), null, 16, ["form", "data", "errors", "loading", "mode", "saving"])
        ]),
        _: 1
      }, 16, ["modelValue"])
    ], 64));
  }
});
export {
  P as default
};
