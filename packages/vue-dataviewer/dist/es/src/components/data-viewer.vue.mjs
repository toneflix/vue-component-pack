import { defineComponent as P, mergeModels as w, useModel as m, ref as B, openBlock as z, createElementBlock as F, Fragment as b, renderSlot as l, createVNode as C, withCtx as p, mergeProps as d, createSlots as I, renderList as D, unref as r, normalizeProps as n, createCommentVNode as N, guardReactiveProps as S } from "vue";
/* empty css                   */
import L from "./dialog/TDialog.vue.mjs";
import q from "./main-content.vue.mjs";
import { slotNames as E, casts as t, formSlotNames as T } from "../utils/providers.mjs";
const G = /* @__PURE__ */ P({
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
    slugifyFormKeys: { type: Boolean },
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
  setup(s, { expose: U }) {
    const u = m(s, "data"), y = m(s, "form"), f = m(s, "mode"), M = m(s, "loading"), v = m(s, "saving"), $ = m(s, "errors"), g = B(!1), k = B(), V = (o, a = "view") => {
      o && (u.value = o), f.value = a, g.value = a !== "close";
    };
    return U({
      sanitizeForm: () => {
        var o;
        return (o = k.value) == null ? void 0 : o.sanitizeForm();
      }
    }), (o, a) => (z(), F(b, null, [
      l(o.$slots, "default", {
        viewData: u.value,
        viewMode: f.value,
        saving: v.value,
        toggleDialog: V
      }),
      C(L, {
        modelValue: g.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => g.value = e),
        "z-index": o.dialogZIndex,
        "dialog-class": o.dialogClass
      }, {
        default: p(() => [
          C(q, d({
            "dialog-mode": "",
            ref_key: "mainContent",
            ref: k,
            class: "constrained"
          }, o.$props, {
            form: y.value,
            "onUpdate:form": a[0] || (a[0] = (e) => y.value = e),
            data: u.value,
            "onUpdate:data": a[1] || (a[1] = (e) => u.value = e),
            errors: $.value,
            "onUpdate:errors": a[2] || (a[2] = (e) => $.value = e),
            loading: M.value,
            "onUpdate:loading": a[3] || (a[3] = (e) => M.value = e),
            mode: f.value,
            "onUpdate:mode": a[4] || (a[4] = (e) => f.value = e),
            saving: v.value,
            "onUpdate:saving": a[5] || (a[5] = (e) => v.value = e),
            onSetData: a[6] || (a[6] = (e, i) => o.$emit("toggleDialog", e, i)),
            "onClick:save": a[7] || (a[7] = (e, i) => o.$emit("click:save", e, i)),
            onToggleDialog: a[8] || (a[8] = (e) => g.value = e)
          }), I({ _: 2 }, [
            D(r(E), (e) => ({
              name: e,
              fn: p((i) => [
                e === "form-append" || e === "form-prepend" ? l(o.$slots, e, n(d({ key: 0 }, r(t).form(i)))) : e === "list-prepend" || e === "list-append" || e === "list-after" || e === "footer" ? l(o.$slots, e, n(d({ key: 1 }, r(t).list(i)))) : e === "list-item" ? l(o.$slots, e, n(d({ key: 2 }, r(t).listItem(i)))) : e === "img-list-item" ? l(o.$slots, e, n(d({ key: 3 }, r(t).imgListItem(i)))) : e === "image-viewer" ? l(o.$slots, e, n(d({ key: 4 }, r(t).imageViewer(i)))) : e === "loader" ? l(o.$slots, e, n(d({ key: 5 }, r(t).loader(i)))) : e === "form-actions" ? l(o.$slots, e, n(d({ key: 6 }, r(t).formActions(i)))) : e === "image" ? l(o.$slots, e, n(d({ key: 7 }, r(t).image(i)))) : N("", !0)
              ])
            })),
            D(r(T), (e) => ({
              name: e,
              fn: p((i) => [
                l(o.$slots, e, n(S(i)))
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
  G as default
};
