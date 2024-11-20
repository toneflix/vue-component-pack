import { defineComponent as w, mergeModels as v, useModel as d, ref as b, openBlock as M, createElementBlock as U, Fragment as B, renderSlot as D, createVNode as f, mergeProps as y, withCtx as $ } from "vue";
/* empty css                   */
import k from "./dialog/TDialog.vue.mjs";
import V from "./main-content.vue.mjs";
const L = /* @__PURE__ */ w({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ v({
    exclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    formExclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean }
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
    const r = d(l, "data"), i = d(l, "form"), s = d(l, "mode"), u = d(l, "loading"), n = d(l, "saving"), m = d(l, "errors"), t = b(!1), g = (a, e = "view") => {
      r.value = a, s.value = e, t.value = !0;
    };
    return (a, e) => (M(), U(B, null, [
      D(a.$slots, "default", {
        viewData: r.value,
        viewMode: s.value,
        saving: n.value,
        toggleDialog: g
      }),
      f(k, y({
        modelValue: t.value,
        "onUpdate:modelValue": e[9] || (e[9] = (o) => t.value = o)
      }, a.$attrs), {
        default: $(() => [
          f(V, {
            "dialog-mode": "",
            class: "constrained",
            shadow: a.shadow,
            rounded: a.rounded,
            bordered: a.bordered,
            separator: a.separator,
            exclusions: a.exclusions,
            "form-exclusions": a.formExclusions,
            "boolean-labels": a.booleanLabels,
            form: i.value,
            "onUpdate:form": e[0] || (e[0] = (o) => i.value = o),
            data: r.value,
            "onUpdate:data": e[1] || (e[1] = (o) => r.value = o),
            errors: m.value,
            "onUpdate:errors": e[2] || (e[2] = (o) => m.value = o),
            loading: u.value,
            "onUpdate:loading": e[3] || (e[3] = (o) => u.value = o),
            mode: s.value,
            "onUpdate:mode": e[4] || (e[4] = (o) => s.value = o),
            saving: n.value,
            "onUpdate:saving": e[5] || (e[5] = (o) => n.value = o),
            onUpdateData: e[6] || (e[6] = (o, p) => a.$emit("toggleDialog", o, p)),
            "onClick:save": e[7] || (e[7] = (o) => a.$emit("click:save", o)),
            onToggleDialog: e[8] || (e[8] = (o) => t.value = o)
          }, null, 8, ["shadow", "rounded", "bordered", "separator", "exclusions", "form-exclusions", "boolean-labels", "form", "data", "errors", "loading", "mode", "saving"])
        ]),
        _: 1
      }, 16, ["modelValue"])
    ], 64));
  }
});
export {
  L as default
};
