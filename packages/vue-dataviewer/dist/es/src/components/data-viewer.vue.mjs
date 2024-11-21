import { defineComponent as V, mergeModels as w, useModel as u, ref as P, openBlock as b, createElementBlock as I, Fragment as N, renderSlot as r, createVNode as B, withCtx as g, mergeProps as t, createSlots as z, normalizeProps as d, guardReactiveProps as y, renderList as D, unref as i, createCommentVNode as L } from "vue";
/* empty css                   */
import S from "./dialog/TDialog.vue.mjs";
import q from "./main-content.vue.mjs";
import { slotNames as E, casts as s, formSlotNames as F } from "../utils/providers.mjs";
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
  setup(m, { expose: U }) {
    const f = u(m, "data"), $ = u(m, "form"), v = u(m, "mode"), M = u(m, "loading"), p = u(m, "saving"), k = u(m, "errors"), n = P(!1), C = (o, a = "view") => {
      o && (f.value = o), v.value = a, n.value = !0;
    };
    return U({
      dialogToggle: n,
      toggleDialog: () => n.value = !n.value
    }), (o, a) => (b(), I(N, null, [
      r(o.$slots, "default", {
        viewData: f.value,
        viewMode: v.value,
        saving: p.value,
        toggleDialog: C
      }),
      B(S, {
        modelValue: n.value,
        "onUpdate:modelValue": a[9] || (a[9] = (e) => n.value = e),
        "z-index": o.dialogZIndex,
        "dialog-class": o.dialogClass
      }, {
        default: g(() => [
          B(q, t({
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
            mode: v.value,
            "onUpdate:mode": a[4] || (a[4] = (e) => v.value = e),
            saving: p.value,
            "onUpdate:saving": a[5] || (a[5] = (e) => p.value = e),
            onUpdateData: a[6] || (a[6] = (e, l) => o.$emit("toggleDialog", e, l)),
            "onClick:save": a[7] || (a[7] = (e) => o.$emit("click:save", e)),
            onToggleDialog: a[8] || (a[8] = (e) => n.value = e)
          }), z({
            "form-prepend": g((e) => [
              r(o.$slots, "form-prepend", d(y(e)))
            ]),
            "form-append": g((e) => [
              r(o.$slots, "form-append", d(y(e)))
            ]),
            _: 2
          }, [
            D(i(E), (e) => ({
              name: e,
              fn: g((l) => [
                e === "form-append" || e === "form-prepend" ? r(o.$slots, e, d(t({ key: 0 }, i(s).form(l)))) : e === "list-prepend" || e === "list-append" || e === "list-after" || e === "footer" ? r(o.$slots, e, d(t({ key: 1 }, i(s).list(l)))) : e === "list-item" ? r(o.$slots, e, d(t({ key: 2 }, i(s).listItem(l)))) : e === "img-list-item" ? r(o.$slots, e, d(t({ key: 3 }, i(s).imgListItem(l)))) : e === "image-viewer" ? r(o.$slots, e, d(t({ key: 4 }, i(s).imageViewer(l)))) : e === "loader" ? r(o.$slots, e, d(t({ key: 5 }, i(s).loader(l)))) : e === "image" ? r(o.$slots, e, d(t({ key: 6 }, i(s).image(l)))) : L("", !0)
              ])
            })),
            D(i(F), (e) => ({
              name: e,
              fn: g((l) => [
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
