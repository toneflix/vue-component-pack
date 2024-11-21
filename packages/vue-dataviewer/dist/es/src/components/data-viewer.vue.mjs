import { defineComponent as V, mergeModels as w, useModel as u, ref as P, openBlock as b, createElementBlock as I, Fragment as N, renderSlot as r, createVNode as B, withCtx as f, mergeProps as s, createSlots as z, normalizeProps as d, guardReactiveProps as y, renderList as D, unref as i, createCommentVNode as L } from "vue";
/* empty css                   */
import S from "./dialog/TDialog.vue.mjs";
import q from "./main-content.vue.mjs";
import { slotNames as E, casts as n, formSlotNames as F } from "../utils/providers.mjs";
const G = /* @__PURE__ */ V({
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
  setup(t, { expose: U }) {
    const g = u(t, "data"), $ = u(t, "form"), v = u(t, "mode"), M = u(t, "loading"), p = u(t, "saving"), k = u(t, "errors"), m = P(!1), C = (o, a = "view") => {
      o && (g.value = o), v.value = a, m.value = a !== "close";
    };
    return U({
      dialogToggle: m,
      closeDialog: () => m.value = !1
    }), (o, a) => (b(), I(N, null, [
      r(o.$slots, "default", {
        viewData: g.value,
        viewMode: v.value,
        saving: p.value,
        toggleDialog: C
      }),
      B(S, {
        modelValue: m.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => m.value = e),
        "z-index": o.dialogZIndex,
        "dialog-class": o.dialogClass
      }, {
        default: f(() => [
          B(q, s({
            "dialog-mode": "",
            class: "constrained"
          }, o.$props, {
            form: $.value,
            "onUpdate:form": a[0] || (a[0] = (e) => $.value = e),
            data: g.value,
            "onUpdate:data": a[1] || (a[1] = (e) => g.value = e),
            errors: k.value,
            "onUpdate:errors": a[2] || (a[2] = (e) => k.value = e),
            loading: M.value,
            "onUpdate:loading": a[3] || (a[3] = (e) => M.value = e),
            mode: v.value,
            "onUpdate:mode": a[4] || (a[4] = (e) => v.value = e),
            saving: p.value,
            "onUpdate:saving": a[5] || (a[5] = (e) => p.value = e),
            onUpdateData: a[6] || (a[6] = (e, l) => o.$emit("toggleDialog", e, l)),
            "onClick:save": a[7] || (a[7] = (e) => o.$emit("click:save", e)),
            onToggleDialog: a[8] || (a[8] = (e) => m.value = e)
          }), z({
            "form-prepend": f((e) => [
              r(o.$slots, "form-prepend", d(y(e)))
            ]),
            "form-append": f((e) => [
              r(o.$slots, "form-append", d(y(e)))
            ]),
            _: 2
          }, [
            D(i(E), (e) => ({
              name: e,
              fn: f((l) => [
                e === "form-append" || e === "form-prepend" ? r(o.$slots, e, d(s({ key: 0 }, i(n).form(l)))) : e === "list-prepend" || e === "list-append" || e === "list-after" || e === "footer" ? r(o.$slots, e, d(s({ key: 1 }, i(n).list(l)))) : e === "list-item" ? r(o.$slots, e, d(s({ key: 2 }, i(n).listItem(l)))) : e === "img-list-item" ? r(o.$slots, e, d(s({ key: 3 }, i(n).imgListItem(l)))) : e === "image-viewer" ? r(o.$slots, e, d(s({ key: 4 }, i(n).imageViewer(l)))) : e === "loader" ? r(o.$slots, e, d(s({ key: 5 }, i(n).loader(l)))) : e === "image" ? r(o.$slots, e, d(s({ key: 6 }, i(n).image(l)))) : L("", !0)
              ])
            })),
            D(i(F), (e) => ({
              name: e,
              fn: f((l) => [
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
  G as default
};
