import { defineComponent as v, mergeModels as b, computed as c, useModel as V, ref as g, openBlock as u, createElementBlock as d, renderSlot as i, createVNode as m, createCommentVNode as r, createBlock as k, normalizeClass as y, createSlots as C, withCtx as $, mergeProps as B, h as w } from "vue";
import x from "./form-group.vue.mjs";
import M from "./icon-edit.vue.mjs";
const T = { class: "vue-forms-controller inline-form" }, q = /* @__PURE__ */ v({
  name: "InlineForm",
  __name: "inline-form",
  props: /* @__PURE__ */ b({
    name: { default: "" },
    type: { default: "text" },
    expanded: { type: Boolean },
    labelTag: { default: "span" },
    labelClass: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const t = s, p = c(() => ({
      type: t.type,
      name: t.name,
      autofocus: !0
    })), a = V(s, "modelValue"), e = g("label"), f = () => w(t.labelTag, {
      innerText: a.value,
      class: [t.labelClass, "inline-form-label"]
    });
    return (l, o) => (u(), d("div", T, [
      l.expanded || e.value === "label" ? i(l.$slots, "label", {
        key: 0,
        label: a.value,
        value: a.value
      }, () => [
        m(f)
      ]) : r("", !0),
      l.expanded || e.value === "input" ? (u(), k(x, {
        key: 1,
        "inline-mode": "",
        field: p.value,
        class: y(["form-group inline-controller"]),
        modelValue: a.value,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
        onBlur: o[1] || (o[1] = (n) => e.value = "label")
      }, C({ _: 2 }, [
        l.$slots.default ? {
          name: "default",
          fn: $((n) => [
            i(l.$slots, "default", B(n, {
              toggleView: () => e.value = e.value === "input" ? "label" : "input"
            }))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["field", "modelValue"])) : r("", !0),
      !l.expanded && e.value !== "input" ? (u(), d("button", {
        key: 2,
        class: "inline-button",
        onClick: o[2] || (o[2] = (n) => e.value = "input")
      }, [
        m(M)
      ])) : r("", !0)
    ]));
  }
});
export {
  q as default
};
