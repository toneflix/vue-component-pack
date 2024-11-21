import { defineComponent as d, openBlock as o, createElementBlock as t, renderSlot as s, createCommentVNode as r, createElementVNode as a } from "vue";
const n = { class: "t-card" }, c = {
  key: 0,
  class: "t-card-header"
}, l = { class: "t-card-body" }, i = {
  key: 1,
  class: "t-card-footer"
}, h = /* @__PURE__ */ d({
  name: "TCard",
  __name: "TCard",
  setup(_) {
    return (e, m) => (o(), t("div", n, [
      e.$slots.header ? (o(), t("div", c, [
        s(e.$slots, "header")
      ])) : r("", !0),
      a("div", l, [
        s(e.$slots, "default")
      ]),
      e.$slots.footer ? (o(), t("div", i, [
        s(e.$slots, "footer")
      ])) : r("", !0)
    ]));
  }
});
export {
  h as default
};
