import { defineComponent as z, mergeModels as B, useModel as m, ref as C, openBlock as F, createElementBlock as b, Fragment as I, renderSlot as r, createVNode as D, withCtx as u, mergeProps as n, createSlots as N, normalizeProps as i, guardReactiveProps as y, renderList as U, unref as d, createCommentVNode as S } from "vue";
/* empty css                   */
import L from "./dialog/TDialog.vue.mjs";
import q from "./main-content.vue.mjs";
import { slotNames as E, casts as t, formSlotNames as T } from "../utils/providers.mjs";
const G = /* @__PURE__ */ z({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ B({
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
  emits: /* @__PURE__ */ B(["toggleDialog", "click:save"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(s, { expose: V }) {
    const f = m(s, "data"), $ = m(s, "form"), g = m(s, "mode"), M = m(s, "loading"), p = m(s, "saving"), k = m(s, "errors"), v = C(!1), w = C(), P = (o, a = "view") => {
      o && (f.value = o), g.value = a, v.value = a !== "close";
    };
    return V({
      sanitizeForm: () => {
        var o;
        return (o = w.value) == null ? void 0 : o.sanitizeForm();
      }
    }), (o, a) => (F(), b(I, null, [
      r(o.$slots, "default", {
        viewData: f.value,
        viewMode: g.value,
        saving: p.value,
        toggleDialog: P
      }),
      D(L, {
        modelValue: v.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => v.value = e),
        "z-index": o.dialogZIndex,
        "dialog-class": o.dialogClass
      }, {
        default: u(() => [
          D(q, n({
            "dialog-mode": "",
            ref_key: "mainContent",
            ref: w,
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
            onSetData: a[6] || (a[6] = (e, l) => o.$emit("toggleDialog", e, l)),
            "onClick:save": a[7] || (a[7] = (e, l) => o.$emit("click:save", e, l)),
            onToggleDialog: a[8] || (a[8] = (e) => v.value = e)
          }), N({
            "form-prepend": u((e) => [
              r(o.$slots, "form-prepend", i(y(e)))
            ]),
            "form-append": u((e) => [
              r(o.$slots, "form-append", i(y(e)))
            ]),
            _: 2
          }, [
            U(d(E), (e) => ({
              name: e,
              fn: u((l) => [
                e === "form-append" || e === "form-prepend" ? r(o.$slots, e, i(n({ key: 0 }, d(t).form(l)))) : e === "list-prepend" || e === "list-append" || e === "list-after" || e === "footer" ? r(o.$slots, e, i(n({ key: 1 }, d(t).list(l)))) : e === "list-item" ? r(o.$slots, e, i(n({ key: 2 }, d(t).listItem(l)))) : e === "img-list-item" ? r(o.$slots, e, i(n({ key: 3 }, d(t).imgListItem(l)))) : e === "image-viewer" ? r(o.$slots, e, i(n({ key: 4 }, d(t).imageViewer(l)))) : e === "loader" ? r(o.$slots, e, i(n({ key: 5 }, d(t).loader(l)))) : e === "image" ? r(o.$slots, e, i(n({ key: 6 }, d(t).image(l)))) : S("", !0)
              ])
            })),
            U(d(T), (e) => ({
              name: e,
              fn: u((l) => [
                r(o.$slots, e, i(y(l)))
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
