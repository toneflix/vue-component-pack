import { defineComponent as d, mergeModels as n, useModel as s, onMounted as r, watch as u, openBlock as a, createBlock as i, Teleport as m, createElementBlock as c, normalizeClass as p, normalizeStyle as f, createElementVNode as v, renderSlot as g, createCommentVNode as k } from "vue";
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
    }), (o, l) => (a(), i(m, { to: "body" }, [
      e.value ? (a(), c("div", {
        key: 0,
        class: p(["t-dialog", { "t-dialog-fade": !e.value }]),
        style: f({ zIndex: o.zIndex })
      }, [
        v("div", {
          class: "t-dialog-backdrop",
          onClick: l[0] || (l[0] = (y) => e.value = !e.value)
        }),
        g(o.$slots, "default")
      ], 6)) : k("", !0)
    ]));
  }
});
export {
  V as default
};
