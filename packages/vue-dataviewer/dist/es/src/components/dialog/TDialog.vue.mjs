import { defineComponent as t, openBlock as l, createElementBlock as n, createElementVNode as a, renderSlot as r } from "vue";
const s = { class: "t-dialog" }, c = /* @__PURE__ */ t({
  name: "TDialog",
  __name: "TDialog",
  setup(d) {
    return (o, e) => (l(), n("div", s, [
      e[0] || (e[0] = a("div", { class: "t-dialog-backdrop" }, null, -1)),
      r(o.$slots, "default")
    ]));
  }
});
export {
  c as default
};
