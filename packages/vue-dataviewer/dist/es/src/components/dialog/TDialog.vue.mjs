import { defineComponent as d, useModel as n, onMounted as s, watch as u, openBlock as a, createBlock as i, Teleport as r, createElementBlock as m, normalizeClass as c, createElementVNode as p, renderSlot as f, createCommentVNode as v } from "vue";
const y = /* @__PURE__ */ d({
  name: "TDialog",
  __name: "TDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = n(t, "modelValue");
    return s(() => {
      window.onkeyup = (o) => {
        o.code === "Escape" && e.value && (e.value = !1);
      };
    }), u(e, (o) => {
      document.body.classList[o ? "add" : "remove"]("t-dialog-active");
    }), (o, l) => (a(), i(r, { to: "body" }, [
      e.value ? (a(), m("div", {
        key: 0,
        class: c(["t-dialog", { "t-dialog-fade": !e.value }])
      }, [
        p("div", {
          class: "t-dialog-backdrop",
          onClick: l[0] || (l[0] = (k) => e.value = !e.value)
        }),
        f(o.$slots, "default")
      ], 2)) : v("", !0)
    ]));
  }
});
export {
  y as default
};
