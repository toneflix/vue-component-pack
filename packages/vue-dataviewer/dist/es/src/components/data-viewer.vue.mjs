import { defineComponent as D, mergeModels as w, useModel as m, ref as V, openBlock as P, createElementBlock as b, Fragment as I, renderSlot as r, createVNode as B, withCtx as u, mergeProps as t, createSlots as N, normalizeProps as d, guardReactiveProps as y, renderList as U, unref as i, createCommentVNode as z } from "vue";
/* empty css                   */
import L from "./dialog/TDialog.vue.mjs";
import S from "./main-content.vue.mjs";
import { slotNames as q, casts as n, formSlotNames as E } from "../utils/providers.mjs";
const A = /* @__PURE__ */ D({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ w({
    listClass: {},
    dialogClass: {},
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
    contentClass: {},
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
    const f = m(s, "data"), $ = m(s, "form"), g = m(s, "mode"), M = m(s, "loading"), p = m(s, "saving"), k = m(s, "errors"), v = V(!1), C = (o, a = "view") => {
      o && (f.value = o), g.value = a, v.value = !0;
    };
    return (o, a) => (P(), b(I, null, [
      r(o.$slots, "default", {
        viewData: f.value,
        viewMode: g.value,
        saving: p.value,
        toggleDialog: C
      }),
      B(L, {
        modelValue: v.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => v.value = e),
        "z-index": o.dialogZIndex,
        "dialog-class": o.dialogClass
      }, {
        default: u(() => [
          B(S, t({
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
            onUpdateData: a[6] || (a[6] = (e, l) => o.$emit("toggleDialog", e, l)),
            "onClick:save": a[7] || (a[7] = (e) => o.$emit("click:save", e)),
            onToggleDialog: a[8] || (a[8] = (e) => v.value = e)
          }), N({
            "form-prepend": u((e) => [
              r(o.$slots, "form-prepend", d(y(e)))
            ]),
            "form-append": u((e) => [
              r(o.$slots, "form-append", d(y(e)))
            ]),
            _: 2
          }, [
            U(i(q), (e) => ({
              name: e,
              fn: u((l) => [
                e === "form-append" || e === "form-prepend" ? r(o.$slots, e, d(t({ key: 0 }, i(n).form(l)))) : e === "list-prepend" || e === "list-append" || e === "list-after" || e === "footer" ? r(o.$slots, e, d(t({ key: 1 }, i(n).list(l)))) : e === "list-item" ? r(o.$slots, e, d(t({ key: 2 }, i(n).listItem(l)))) : e === "img-list-item" ? r(o.$slots, e, d(t({ key: 3 }, i(n).imgListItem(l)))) : e === "image-viewer" ? r(o.$slots, e, d(t({ key: 4 }, i(n).imageViewer(l)))) : e === "loader" ? r(o.$slots, e, d(t({ key: 5 }, i(n).loader(l)))) : e === "image" ? r(o.$slots, e, d(t({ key: 6 }, i(n).image(l)))) : z("", !0)
              ])
            })),
            U(i(E), (e) => ({
              name: e,
              fn: u((l) => [
                r(o.$slots, e, d(y(l)))
              ])
            }))
          ]), 1040, ["form", "data", "errors", "loading", "mode", "saving"])
        ]),
        _: 3
      }, 8, ["modelValue", "z-index", "dialog-class"])
    ], 64));
  }
});
export {
  A as default
};
