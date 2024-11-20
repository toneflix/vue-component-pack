import { defineComponent as B, mergeModels as $, useModel as n, ref as D, openBlock as V, createElementBlock as b, Fragment as C, renderSlot as i, createVNode as w, mergeProps as l, withCtx as k, createSlots as P, renderList as N, unref as d, normalizeProps as s, createCommentVNode as q } from "vue";
/* empty css                   */
import E from "./dialog/TDialog.vue.mjs";
import F from "./main-content.vue.mjs";
import { slotNames as L, casts as m } from "../utils/providers.mjs";
const A = /* @__PURE__ */ B({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ $({
    exclusions: { default: () => ["imageUrl"] },
    formExclusions: { default: () => ["imageUrl"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean },
    dateProps: {},
    imageProps: {},
    dateFormat: { default: "do MMM, yyyy h:mm a" },
    labelsMap: {},
    valuesMap: {}
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
  emits: /* @__PURE__ */ $(["toggleDialog", "click:save"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(t) {
    const u = n(t, "data"), p = n(t, "form"), f = n(t, "mode"), y = n(t, "loading"), v = n(t, "saving"), M = n(t, "errors"), g = D(!1), U = (o, a = "view") => {
      o && (u.value = o), f.value = a, g.value = !0;
    };
    return (o, a) => (V(), b(C, null, [
      i(o.$slots, "default", {
        viewData: u.value,
        viewMode: f.value,
        saving: v.value,
        toggleDialog: U
      }),
      w(E, l({
        modelValue: g.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => g.value = e)
      }, o.$attrs), {
        default: k(() => [
          w(F, l({
            "dialog-mode": "",
            class: "constrained"
          }, o.$props, {
            form: p.value,
            "onUpdate:form": a[0] || (a[0] = (e) => p.value = e),
            data: u.value,
            "onUpdate:data": a[1] || (a[1] = (e) => u.value = e),
            errors: M.value,
            "onUpdate:errors": a[2] || (a[2] = (e) => M.value = e),
            loading: y.value,
            "onUpdate:loading": a[3] || (a[3] = (e) => y.value = e),
            mode: f.value,
            "onUpdate:mode": a[4] || (a[4] = (e) => f.value = e),
            saving: v.value,
            "onUpdate:saving": a[5] || (a[5] = (e) => v.value = e),
            onUpdateData: a[6] || (a[6] = (e, r) => o.$emit("toggleDialog", e, r)),
            "onClick:save": a[7] || (a[7] = (e) => o.$emit("click:save", e)),
            onToggleDialog: a[8] || (a[8] = (e) => g.value = e)
          }), P({ _: 2 }, [
            N(d(L), (e) => ({
              name: e,
              fn: k((r) => [
                e === "form-append" || e === "form-prepend" ? i(o.$slots, e, s(l({ key: 0 }, d(m).form(r)))) : e === "list-prepend" || e === "list-append" || e === "list-after" ? i(o.$slots, e, s(l({ key: 1 }, d(m).list(r)))) : e === "list-item" || e === "img-list-item" ? i(o.$slots, e, s(l({ key: 2 }, d(m).listItem(r)))) : e === "image-viewer" ? i(o.$slots, e, s(l({ key: 3 }, d(m).imageViewer(r)))) : e === "loader" ? i(o.$slots, e, s(l({ key: 4 }, d(m).loader(r)))) : e === "image" ? i(o.$slots, e, s(l({ key: 5 }, d(m).image(r)))) : q("", !0)
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
