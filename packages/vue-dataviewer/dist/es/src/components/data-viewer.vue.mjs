import { defineComponent as V, mergeModels as w, useModel as m, ref as P, openBlock as C, createElementBlock as b, Fragment as I, renderSlot as l, createVNode as B, mergeProps as i, withCtx as u, createSlots as N, normalizeProps as d, guardReactiveProps as y, renderList as U, unref as t, createCommentVNode as z } from "vue";
/* empty css                   */
import L from "./dialog/TDialog.vue.mjs";
import S from "./main-content.vue.mjs";
import { slotNames as q, casts as n, formSlotNames as E } from "../utils/providers.mjs";
const A = /* @__PURE__ */ V({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ w({
    listClass: {},
    dialogZIndex: {},
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
    titles: {},
    data: {},
    form: {},
    formProps: {},
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
  emits: /* @__PURE__ */ w(["toggleDialog", "click:save"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(s) {
    const f = m(s, "data"), $ = m(s, "form"), g = m(s, "mode"), M = m(s, "loading"), p = m(s, "saving"), k = m(s, "errors"), v = P(!1), D = (o, a = "view") => {
      o && (f.value = o), g.value = a, v.value = !0;
    };
    return (o, a) => (C(), b(I, null, [
      l(o.$slots, "default", {
        viewData: f.value,
        viewMode: g.value,
        saving: p.value,
        toggleDialog: D
      }),
      B(L, i({
        modelValue: v.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => v.value = e)
      }, o.$attrs, { "z-index": o.dialogZIndex }), {
        default: u(() => [
          B(S, i({
            "dialog-mode": "",
            class: "constrained"
          }, o.$props, {
            form: $.value,
            "onUpdate:form": a[0] || (a[0] = (e) => $.value = e),
            data: f.value,
            "onUpdate:data": a[1] || (a[1] = (e) => f.value = e),
            errors: k.value,
            "onUpdate:errors": a[2] || (a[2] = (e) => k.value = e),
            loading: M.value,
            "onUpdate:loading": a[3] || (a[3] = (e) => M.value = e),
            mode: g.value,
            "onUpdate:mode": a[4] || (a[4] = (e) => g.value = e),
            saving: p.value,
            "onUpdate:saving": a[5] || (a[5] = (e) => p.value = e),
            onUpdateData: a[6] || (a[6] = (e, r) => o.$emit("toggleDialog", e, r)),
            "onClick:save": a[7] || (a[7] = (e) => o.$emit("click:save", e)),
            onToggleDialog: a[8] || (a[8] = (e) => v.value = e)
          }), N({
            "form-prepend": u((e) => [
              l(o.$slots, "form-prepend", d(y(e)))
            ]),
            "form-append": u((e) => [
              l(o.$slots, "form-append", d(y(e)))
            ]),
            _: 2
          }, [
            U(t(q), (e) => ({
              name: e,
              fn: u((r) => [
                e === "form-append" || e === "form-prepend" ? l(o.$slots, e, d(i({ key: 0 }, t(n).form(r)))) : e === "list-prepend" || e === "list-append" || e === "list-after" ? l(o.$slots, e, d(i({ key: 1 }, t(n).list(r)))) : e === "list-item" ? l(o.$slots, e, d(i({ key: 2 }, t(n).listItem(r)))) : e === "img-list-item" ? l(o.$slots, e, d(i({ key: 3 }, t(n).imgListItem(r)))) : e === "image-viewer" ? l(o.$slots, e, d(i({ key: 4 }, t(n).imageViewer(r)))) : e === "loader" ? l(o.$slots, e, d(i({ key: 5 }, t(n).loader(r)))) : e === "image" ? l(o.$slots, e, d(i({ key: 6 }, t(n).image(r)))) : z("", !0)
              ])
            })),
            U(t(E), (e) => ({
              name: e,
              fn: u((r) => [
                l(o.$slots, e, d(y(r)))
              ])
            }))
          ]), 1040, ["form", "data", "errors", "loading", "mode", "saving"])
        ]),
        _: 3
      }, 16, ["modelValue", "z-index"])
    ], 64));
  }
});
export {
  A as default
};
