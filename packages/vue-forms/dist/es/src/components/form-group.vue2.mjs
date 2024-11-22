import { defineComponent as v, mergeModels as y, useSlots as $, computed as r, useModel as k, openBlock as w, createElementBlock as U, normalizeClass as b, renderSlot as t, mergeProps as u, createVNode as d, createCommentVNode as s } from "vue";
import g from "./input-checkbox.vue.mjs";
import B from "./input-field.vue.mjs";
import C from "./input-select.vue.mjs";
import M from "./input-radio.vue.mjs";
import N from "./input-switch.vue.mjs";
import S from "./input-textarea.vue.mjs";
const j = /* @__PURE__ */ v({
  __name: "form-group",
  props: /* @__PURE__ */ y({
    field: {},
    useGrid: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(m) {
    const i = $(), n = ["input", "select", "checkbox", "radio", "switch", "textarea"], p = r(
      () => n.some((e) => {
        const o = i[e];
        return o && o().length > 0;
      })
    ), f = m, l = k(m, "modelValue"), V = r(() => [
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
    ].includes(f.field.type));
    return (e, o) => (w(), U("div", {
      class: b([`form-group col-${e.useGrid ? "span-" : ""}${e.field.col}`, { "has-slot": p.value }])
    }, [
      V.value ? t(e.$slots, "input", u({ key: 0 }, e.field, { modelValue: l.value }), () => [
        d(B, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => l.value = a)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "select" ? t(e.$slots, "select", u({ key: 1 }, e.field, { modelValue: l.value }), () => [
        d(C, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[1] || (o[1] = (a) => l.value = a)
        }, e.field, { type: "select" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "checkbox" ? t(e.$slots, "checkbox", u({ key: 2 }, e.field, { modelValue: l.value }), () => [
        d(g, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[2] || (o[2] = (a) => l.value = a)
        }, e.field, { type: "checkbox" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "radio" ? t(e.$slots, "radio", u({ key: 3 }, e.field, { modelValue: l.value }), () => [
        d(M, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[3] || (o[3] = (a) => l.value = a)
        }, e.field, { type: "radio" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "switch" ? t(e.$slots, "switch", u({ key: 4 }, e.field, { modelValue: l.value }), () => [
        d(N, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[4] || (o[4] = (a) => l.value = a)
        }, e.field, { type: "switch" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "textarea" ? t(e.$slots, "textarea", u({ key: 5 }, e.field, { modelValue: l.value }), () => [
        d(S, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[5] || (o[5] = (a) => l.value = a)
        }, e.field, { type: "textarea" }), null, 16, ["modelValue"])
      ], !0) : s("", !0)
    ], 2));
  }
});
export {
  j as default
};
