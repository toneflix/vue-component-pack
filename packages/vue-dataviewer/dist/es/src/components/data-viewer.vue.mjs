import { defineComponent as B, mergeModels as M, useModel as m, ref as U, openBlock as V, createElementBlock as C, Fragment as b, renderSlot as r, createVNode as $, mergeProps as l, withCtx as k, createSlots as P, renderList as E, unref as t, normalizeProps as d, createCommentVNode as L } from "vue";
/* empty css                   */
import N from "./dialog/TDialog.vue.mjs";
import q from "./main-content.vue.mjs";
import { slotNames as F, casts as n } from "../utils/providers.mjs";
const A = /* @__PURE__ */ B({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ M({
    listClass: {},
    titles: { default: () => ({ view: "view Data", edit: "Edit Data", doc: "View Docs" }) },
    exclusions: { default: () => ["id"] },
    formExclusions: { default: () => ["id", "imageUrl"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean },
    dateProps: {},
    imageProps: { default: () => ["imageUrl"] },
    dateFormat: { default: "do MMM, yyyy h:mm a" },
    labelsMap: {},
    valuesMap: {},
    data: {},
    form: {},
    mode: {},
    errors: {},
    saving: { type: Boolean },
    loading: { type: Boolean }
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
  emits: /* @__PURE__ */ M(["toggleDialog", "click:save"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(s) {
    const u = m(s, "data"), p = m(s, "form"), f = m(s, "mode"), y = m(s, "loading"), v = m(s, "saving"), w = m(s, "errors"), g = U(!1), D = (o, a = "view") => {
      o && (u.value = o), f.value = a, g.value = !0;
    };
    return (o, a) => (V(), C(b, null, [
      r(o.$slots, "default", {
        viewData: u.value,
        viewMode: f.value,
        saving: v.value,
        toggleDialog: D
      }),
      $(N, l({
        modelValue: g.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => g.value = e)
      }, o.$attrs), {
        default: k(() => [
          $(q, l({
            "dialog-mode": "",
            class: "constrained"
          }, o.$props, {
            form: p.value,
            "onUpdate:form": a[0] || (a[0] = (e) => p.value = e),
            data: u.value,
            "onUpdate:data": a[1] || (a[1] = (e) => u.value = e),
            errors: w.value,
            "onUpdate:errors": a[2] || (a[2] = (e) => w.value = e),
            loading: y.value,
            "onUpdate:loading": a[3] || (a[3] = (e) => y.value = e),
            mode: f.value,
            "onUpdate:mode": a[4] || (a[4] = (e) => f.value = e),
            saving: v.value,
            "onUpdate:saving": a[5] || (a[5] = (e) => v.value = e),
            onUpdateData: a[6] || (a[6] = (e, i) => o.$emit("toggleDialog", e, i)),
            "onClick:save": a[7] || (a[7] = (e) => o.$emit("click:save", e)),
            onToggleDialog: a[8] || (a[8] = (e) => g.value = e)
          }), P({ _: 2 }, [
            E(t(F), (e) => ({
              name: e,
              fn: k((i) => [
                e === "form-append" || e === "form-prepend" ? r(o.$slots, e, d(l({ key: 0 }, t(n).form(i)))) : e === "list-prepend" || e === "list-append" || e === "list-after" ? r(o.$slots, e, d(l({ key: 1 }, t(n).list(i)))) : e === "list-item" ? r(o.$slots, e, d(l({ key: 2 }, t(n).listItem(i)))) : e === "img-list-item" ? r(o.$slots, e, d(l({ key: 3 }, t(n).imgListItem(i)))) : e === "image-viewer" ? r(o.$slots, e, d(l({ key: 4 }, t(n).imageViewer(i)))) : e === "loader" ? r(o.$slots, e, d(l({ key: 5 }, t(n).loader(i)))) : e === "image" ? r(o.$slots, e, d(l({ key: 6 }, t(n).image(i)))) : L("", !0)
              ])
            }))
          ]), 1040, ["form", "data", "errors", "loading", "mode", "saving"])
        ]),
        _: 3
      }, 16, ["modelValue"])
    ], 64));
  }
});
export {
  A as default
};
