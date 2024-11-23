import { defineComponent as g, mergeModels as V, useModel as w, computed as v, useSlots as C, openBlock as y, createElementBlock as $, normalizeClass as U, renderSlot as d, mergeProps as t, Fragment as M, createVNode as s, createCommentVNode as a } from "vue";
import F from "./input-checkbox.vue.mjs";
import S from "./input-field.vue.mjs";
import G from "./input-select.vue.mjs";
import P from "./input-radio.vue.mjs";
import q from "./input-switch.vue.mjs";
import z from "./input-textarea.vue.mjs";
const K = /* @__PURE__ */ g({
  __name: "form-group",
  props: /* @__PURE__ */ V({
    field: {},
    useGrid: { type: Boolean },
    inlineMode: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["focus", "blur"], ["update:modelValue"]),
  setup(r) {
    const m = r, u = w(r, "modelValue"), i = v(() => [
      "text",
      "email",
      "url",
      "password",
      "number",
      "date",
      "datetime-local",
      "month",
      "search",
      "tel",
      "time",
      "week",
      "file"
    ].includes(m.field.type)), k = C(), b = ["input", "select", "checkbox", "radio", "switch", "textarea"];
    function B(e) {
      const l = k[e];
      return l ? l().some((f) => {
        var p;
        return f.type !== Comment && ((p = f.children) == null ? void 0 : p.length);
      }) && (m.field.type === e || e === "input" && i.value) : !1;
    }
    const n = v(() => b.some(B));
    return (e, l) => (y(), $("div", {
      class: U(
        e.inlineMode ? [{ unsloted: !n.value && !e.$slots.default }] : [`form-group col-${e.useGrid ? "span-" : ""}${e.field.col}`, { unsloted: !n.value }]
      )
    }, [
      e.$slots.default ? d(e.$slots, "default", t({ key: 0 }, e.field, { modelValue: u.value }), void 0, !0) : (y(), $(M, { key: 1 }, [
        i.value ? d(e.$slots, "input", t({ key: 0 }, e.field, { modelValue: u.value }), () => [
          s(S, t({
            modelValue: u.value,
            "onUpdate:modelValue": l[0] || (l[0] = (o) => u.value = o)
          }, e.field, {
            onBlur: l[1] || (l[1] = (o) => e.$emit("blur", o)),
            onFocus: l[2] || (l[2] = (o) => e.$emit("focus", o))
          }), null, 16, ["modelValue"])
        ], !0) : a("", !0),
        e.field.type === "select" ? d(e.$slots, "select", t({ key: 1 }, e.field, { modelValue: u.value }), () => [
          s(G, t({
            modelValue: u.value,
            "onUpdate:modelValue": l[3] || (l[3] = (o) => u.value = o)
          }, e.field, {
            type: "select",
            onBlur: l[4] || (l[4] = (o) => e.$emit("blur", o)),
            onFocus: l[5] || (l[5] = (o) => e.$emit("focus", o))
          }), null, 16, ["modelValue"])
        ], !0) : a("", !0),
        e.field.type === "checkbox" ? d(e.$slots, "checkbox", t({ key: 2 }, e.field, { modelValue: u.value }), () => [
          s(F, t({
            modelValue: u.value,
            "onUpdate:modelValue": l[6] || (l[6] = (o) => u.value = o)
          }, e.field, { type: "checkbox" }), null, 16, ["modelValue"])
        ], !0) : a("", !0),
        e.field.type === "radio" ? d(e.$slots, "radio", t({ key: 3 }, e.field, { modelValue: u.value }), () => [
          s(P, t({
            modelValue: u.value,
            "onUpdate:modelValue": l[7] || (l[7] = (o) => u.value = o)
          }, e.field, { type: "radio" }), null, 16, ["modelValue"])
        ], !0) : a("", !0),
        e.field.type === "switch" ? d(e.$slots, "switch", t({ key: 4 }, e.field, { modelValue: u.value }), () => [
          s(q, t({
            modelValue: u.value,
            "onUpdate:modelValue": l[8] || (l[8] = (o) => u.value = o)
          }, e.field, { type: "switch" }), null, 16, ["modelValue"])
        ], !0) : a("", !0),
        e.field.type === "textarea" ? d(e.$slots, "textarea", t({ key: 5 }, e.field, { modelValue: u.value }), () => [
          s(z, t({
            modelValue: u.value,
            "onUpdate:modelValue": l[9] || (l[9] = (o) => u.value = o)
          }, e.field, {
            type: "textarea",
            onBlur: l[10] || (l[10] = (o) => e.$emit("blur", o)),
            onFocus: l[11] || (l[11] = (o) => e.$emit("focus", o))
          }), null, 16, ["modelValue"])
        ], !0) : a("", !0)
      ], 64))
    ], 2));
  }
});
export {
  K as default
};
