import { defineComponent as m, openBlock as i, createElementBlock as o, normalizeClass as a, withModifiers as l, toDisplayString as s, createCommentVNode as t } from "vue";
const r = {
  key: 0,
  class: "form-actions"
}, b = ["disabled"], u = ["disabled"], y = /* @__PURE__ */ m({
  name: "FormActions",
  __name: "form-actions",
  props: {
    loading: { type: Boolean },
    hideSubmit: { type: Boolean },
    hideCancel: { type: Boolean },
    cancelLabel: {},
    submitLabel: {}
  },
  emits: ["cancel", "submit"],
  setup(c) {
    return (e, n) => !e.hideSubmit || !e.hideCancel ? (i(), o("div", r, [
      e.hideCancel ? t("", !0) : (i(), o("button", {
        key: 0,
        type: "button",
        class: a(["action-cancel", { loading: e.loading }]),
        disabled: !!e.loading,
        onClick: n[0] || (n[0] = l((d) => e.$emit("cancel"), ["prevent"]))
      }, s(e.cancelLabel ?? "Cancel"), 11, b)),
      e.hideSubmit ? t("", !0) : (i(), o("button", {
        key: 1,
        type: "submit",
        class: a(["action-confirm", { loading: e.loading }]),
        disabled: !!e.loading,
        onClick: n[1] || (n[1] = l((d) => e.$emit("submit"), ["prevent"]))
      }, s(e.submitLabel ?? "Submit"), 11, u))
    ])) : t("", !0);
  }
});
export {
  y as default
};
