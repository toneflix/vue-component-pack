import { defineComponent as d, mergeModels as n, useModel as s, onMounted as r, watch as u, openBlock as a, createBlock as m, Teleport as i, createElementBlock as c, mergeProps as p, createElementVNode as f, renderSlot as v, createCommentVNode as g } from "vue";
const V = /* @__PURE__ */ d({
  name: "TDialog",
  __name: "TDialog",
  props: /* @__PURE__ */ n({
    zIndex: { default: 5e3 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = s(t, "modelValue");
    return r(() => {
      window.onkeyup = (o) => {
        o.code === "Escape" && e.value && (e.value = !1);
      };
    }), u(e, (o) => {
      document.body.classList[o ? "add" : "remove"]("t-dialog-active");
    }), (o, l) => (a(), m(i, { to: "body" }, [
      e.value ? (a(), c("div", p({
        key: 0,
        class: ["t-dialog", { "t-dialog-fade": !e.value }],
        style: { zIndex: o.zIndex }
      }, o.$attrs), [
        f("div", {
          class: "t-dialog-backdrop",
          onClick: l[0] || (l[0] = (k) => e.value = !e.value)
        }),
        v(o.$slots, "default")
      ], 16)) : g("", !0)
    ]));
  }
});
export {
  V as default
};
