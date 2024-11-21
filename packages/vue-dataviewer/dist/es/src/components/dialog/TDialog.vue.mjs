import { defineComponent as t, mergeModels as s, useModel as n, onMounted as i, watch as r, openBlock as a, createBlock as u, Teleport as m, createElementBlock as c, normalizeClass as p, normalizeStyle as f, createElementVNode as v, renderSlot as g, createCommentVNode as k } from "vue";
const z = /* @__PURE__ */ t({
  name: "TDialog",
  __name: "TDialog",
  props: /* @__PURE__ */ s({
    zIndex: { default: 5e3 },
    dialogClass: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    const e = n(d, "modelValue");
    return i(() => {
      window.onkeyup = (l) => {
        l.code === "Escape" && e.value && (e.value = !1);
      };
    }), r(e, (l) => {
      document.body.classList[l ? "add" : "remove"]("t-dialog-active");
    }), (l, o) => (a(), u(m, { to: "body" }, [
      e.value ? (a(), c("div", {
        key: 0,
        class: p(["t-dialog", [{ "t-dialog-fade": !e.value }, l.dialogClass]]),
        style: f({ zIndex: l.zIndex })
      }, [
        v("div", {
          class: "t-dialog-backdrop",
          onClick: o[0] || (o[0] = (y) => e.value = !e.value)
        }),
        g(l.$slots, "default")
      ], 6)) : k("", !0)
    ]));
  }
});
export {
  z as default
};
