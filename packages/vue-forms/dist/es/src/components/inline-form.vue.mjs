import { defineComponent as C, mergeModels as m, computed as g, useModel as P, ref as $, openBlock as u, createElementBlock as r, renderSlot as p, createVNode as s, createCommentVNode as i, createBlock as B, normalizeClass as w, createSlots as M, withCtx as S, mergeProps as T, normalizeProps as f, guardReactiveProps as v, h as x } from "vue";
import z from "./form-group.vue.mjs";
import F from "./icon-edit.vue.mjs";
import N from "./icon-save.vue.mjs";
const h = { class: "vue-forms-controller inline-form" }, L = /* @__PURE__ */ C({
  name: "InlineForm",
  __name: "inline-form",
  props: /* @__PURE__ */ m({
    name: { default: "" },
    type: { default: "text" },
    expanded: { type: Boolean },
    showSave: { type: Boolean },
    labelTag: { default: "span" },
    labelClass: {},
    iconProps: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ m(["save"], ["update:modelValue"]),
  setup(d, { emit: c }) {
    const b = c, a = d, k = g(() => ({
      type: a.type,
      name: a.name,
      autofocus: !a.expanded
    })), o = P(d, "modelValue"), l = $("label"), y = () => x(a.labelTag, {
      innerText: o.value,
      class: [a.labelClass, "inline-form-label"]
    }), V = () => {
      l.value = "label", b("save", o.value);
    };
    return (e, n) => (u(), r("div", h, [
      e.expanded || l.value === "label" ? p(e.$slots, "label", {
        key: 0,
        label: o.value,
        value: o.value
      }, () => [
        s(y)
      ]) : i("", !0),
      e.expanded || l.value === "input" ? (u(), B(z, {
        key: 1,
        "inline-mode": "",
        field: k.value,
        class: w(["form-group inline-controller"]),
        modelValue: o.value,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => o.value = t)
      }, M({ _: 2 }, [
        e.$slots.default ? {
          name: "default",
          fn: S((t) => [
            p(e.$slots, "default", T(t, {
              edit: () => l.value = "input"
            }))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["field", "modelValue"])) : i("", !0),
      !e.expanded && l.value !== "input" ? (u(), r("button", {
        key: 2,
        class: "inline-button",
        onClick: n[1] || (n[1] = (t) => l.value = "input")
      }, [
        s(F, f(v(e.iconProps)), null, 16)
      ])) : l.value === "input" ? (u(), r("button", {
        key: 3,
        class: "inline-button",
        onClick: V
      }, [
        s(N, f(v(e.iconProps)), null, 16)
      ])) : i("", !0)
    ]));
  }
});
export {
  L as default
};
