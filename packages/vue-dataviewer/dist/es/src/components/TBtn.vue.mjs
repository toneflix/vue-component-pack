import { defineComponent as a, openBlock as o, createElementBlock as n, normalizeClass as t, createCommentVNode as l, renderSlot as i, createTextVNode as r, toDisplayString as s } from "vue";
const c = {
  type: "button",
  class: "t-btn"
}, d = /* @__PURE__ */ a({
  name: "TBtn",
  __name: "TBtn",
  props: {
    label: {},
    color: {},
    loading: { type: Boolean },
    icon: {},
    iconRight: {}
  },
  setup(p) {
    return (e, u) => (o(), n("button", c, [
      e.icon ? (o(), n("i", {
        key: 0,
        class: t(e.icon)
      }, null, 2)) : l("", !0),
      i(e.$slots, "default", {}, () => [
        r(s(e.label), 1)
      ]),
      e.iconRight ? (o(), n("i", {
        key: 1,
        class: t(e.iconRight)
      }, null, 2)) : l("", !0)
    ]));
  }
});
export {
  d as default
};
