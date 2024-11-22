import { defineComponent as V, mergeModels as v, useSlots as y, computed as i, useModel as $, openBlock as k, createElementBlock as U, normalizeClass as b, renderSlot as d, mergeProps as u, createVNode as t, createCommentVNode as m } from "vue";
import w from "./input-checkbox.vue.mjs";
import g from "./input-field.vue.mjs";
import B from "./input-select.vue.mjs";
import C from "./input-radio.vue.mjs";
import M from "./input-switch.vue.mjs";
import S from "./input-textarea.vue.mjs";
const O = /* @__PURE__ */ V({
  __name: "form-group",
  props: /* @__PURE__ */ v({
    field: {},
    useGrid: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const r = y(), n = i(() => Object.keys(r).some((e) => e !== "default" && r[e])), p = s, l = $(s, "modelValue"), f = i(() => [
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
    ].includes(p.field.type));
    return (e, o) => (k(), U("div", {
      class: b([`form-group col-${e.useGrid ? "span-" : ""}${e.field.col}`, { "has-slot": n.value }])
    }, [
      f.value ? d(e.$slots, "input", u({ key: 0 }, e.field, { modelValue: l.value }), () => [
        t(g, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => l.value = a)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : m("", !0),
      e.field.type === "select" ? d(e.$slots, "select", u({ key: 1 }, e.field, { modelValue: l.value }), () => [
        t(B, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[1] || (o[1] = (a) => l.value = a)
        }, e.field, { type: "select" }), null, 16, ["modelValue"])
      ], !0) : m("", !0),
      e.field.type === "checkbox" ? d(e.$slots, "checkbox", u({ key: 2 }, e.field, { modelValue: l.value }), () => [
        t(w, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[2] || (o[2] = (a) => l.value = a)
        }, e.field, { type: "checkbox" }), null, 16, ["modelValue"])
      ], !0) : m("", !0),
      e.field.type === "radio" ? d(e.$slots, "radio", u({ key: 3 }, e.field, { modelValue: l.value }), () => [
        t(C, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[3] || (o[3] = (a) => l.value = a)
        }, e.field, { type: "radio" }), null, 16, ["modelValue"])
      ], !0) : m("", !0),
      e.field.type === "switch" ? d(e.$slots, "switch", u({ key: 4 }, e.field, { modelValue: l.value }), () => [
        t(M, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[4] || (o[4] = (a) => l.value = a)
        }, e.field, { type: "switch" }), null, 16, ["modelValue"])
      ], !0) : m("", !0),
      e.field.type === "textarea" ? d(e.$slots, "textarea", u({ key: 5 }, e.field, { modelValue: l.value }), () => [
        t(S, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[5] || (o[5] = (a) => l.value = a)
        }, e.field, { type: "textarea" }), null, 16, ["modelValue"])
      ], !0) : m("", !0)
    ], 2));
  }
});
export {
  O as default
};
