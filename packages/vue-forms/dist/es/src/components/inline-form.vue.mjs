import { defineComponent as v, mergeModels as b, computed as c, useModel as V, ref as y, openBlock as i, createElementBlock as s, renderSlot as d, createVNode as r, createCommentVNode as m, withDirectives as C, normalizeClass as g, createSlots as k, withCtx as $, normalizeProps as w, guardReactiveProps as B, vShow as x, h as M } from "vue";
import S from "./form-group.vue.mjs";
import T from "./icon-edit.vue.mjs";
const z = { class: "vue-forms-controller inline-form" }, q = /* @__PURE__ */ v({
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
  setup(u) {
    const t = u, p = c(() => ({
      type: t.type,
      name: t.name
    })), o = V(u, "modelValue"), a = y("label"), f = () => M(t.labelTag, {
      innerText: o.value,
      class: [t.labelClass, "inline-form-label"]
    });
    return (e, l) => (i(), s("div", z, [
      e.expanded || a.value === "label" ? d(e.$slots, "label", {
        key: 0,
        label: o.value,
        value: o.value
      }, () => [
        r(f)
      ]) : m("", !0),
      C(r(S, {
        "inline-mode": "",
        field: p.value,
        class: g(["form-group inline-controller"]),
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (n) => o.value = n),
        onBlur: l[1] || (l[1] = (n) => a.value = "label")
      }, k({ _: 2 }, [
        e.$slots.default ? {
          name: "default",
          fn: $((n) => [
            d(e.$slots, "default", w(B(n)))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["field", "modelValue"]), [
        [x, e.expanded || a.value === "input"]
      ]),
      !e.expanded && a.value !== "input" ? (i(), s("button", {
        key: 1,
        class: "inline-button",
        onClick: l[2] || (l[2] = (n) => a.value = "input")
      }, [
        r(T)
      ])) : m("", !0)
    ]));
  }
});
export {
  q as default
};
