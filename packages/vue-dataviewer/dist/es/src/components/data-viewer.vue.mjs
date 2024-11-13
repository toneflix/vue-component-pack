import { defineComponent as M, mergeModels as v, useModel as d, ref as U, openBlock as w, createElementBlock as b, Fragment as D, renderSlot as $, createVNode as f, mergeProps as k, withCtx as V } from "vue";
import x from "./dialog/TDialog.vue.mjs";
import A from "./main-content.vue.mjs";
const y = /* @__PURE__ */ M({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ v({
    exclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    formExclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    booleanLabels: {}
  }, {
    data: {},
    dataModifiers: {},
    form: {
      default: {}
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
    const t = d(l, "data"), n = d(l, "form"), i = d(l, "mode"), u = d(l, "loading"), s = d(l, "saving"), m = d(l, "errors"), r = U(!1), g = (a, e = "view") => {
      t.value = a, i.value = e, r.value = !0;
    };
    return (a, e) => (w(), b(D, null, [
      $(a.$slots, "default", {
        viewData: t.value,
        viewMode: i.value,
        saving: s.value,
        toggleDialog: g
      }),
      f(x, k({
        modelValue: r.value,
        "onUpdate:modelValue": e[9] || (e[9] = (o) => r.value = o)
      }, a.$attrs), {
        default: V(() => [
          f(A, {
            "dialog-mode": "",
            exclusions: a.exclusions,
            "form-exclusions": a.formExclusions,
            "boolean-labels": a.booleanLabels,
            form: n.value,
            "onUpdate:form": e[0] || (e[0] = (o) => n.value = o),
            data: t.value,
            "onUpdate:data": e[1] || (e[1] = (o) => t.value = o),
            errors: m.value,
            "onUpdate:errors": e[2] || (e[2] = (o) => m.value = o),
            loading: u.value,
            "onUpdate:loading": e[3] || (e[3] = (o) => u.value = o),
            mode: i.value,
            "onUpdate:mode": e[4] || (e[4] = (o) => i.value = o),
            saving: s.value,
            "onUpdate:saving": e[5] || (e[5] = (o) => s.value = o),
            onUpdateData: e[6] || (e[6] = (o, p) => a.$emit("toggleDialog", o, p)),
            "onClick:save": e[7] || (e[7] = (o) => a.$emit("click:save", o)),
            onToggleDialog: e[8] || (e[8] = (o) => r.value = o)
          }, null, 8, ["exclusions", "form-exclusions", "boolean-labels", "form", "data", "errors", "loading", "mode", "saving"])
        ]),
        _: 1
      }, 16, ["modelValue"])
    ], 64));
  }
});
export {
  y as default
};
