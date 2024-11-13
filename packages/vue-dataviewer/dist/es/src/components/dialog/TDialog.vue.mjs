import { defineComponent as d, useModel as n, openBlock as l, createBlock as r, Teleport as s, createElementBlock as m, normalizeClass as u, createElementVNode as i, renderSlot as c, createCommentVNode as p } from "vue";
const k = /* @__PURE__ */ d({
  name: "TDialog",
  __name: "TDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(a) {
    const e = n(a, "modelValue");
    return (t, o) => (l(), r(s, { to: "body" }, [
      e.value ? (l(), m("div", {
        key: 0,
        class: u(["t-dialog", { "t-dialog-fade": !e.value }])
      }, [
        i("div", {
          class: "t-dialog-backdrop",
          onClick: o[0] || (o[0] = (f) => e.value = !e.value)
        }),
        c(t.$slots, "default")
      ], 2)) : p("", !0)
    ]));
  }
});
export {
  k as default
};
