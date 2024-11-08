import { defineComponent as n, mergeModels as f, useModel as p, computed as V, openBlock as v, createElementBlock as y, normalizeClass as $, renderSlot as a, mergeProps as u, createVNode as m, createCommentVNode as r } from "vue";
import k from "./input-checkbox.vue.mjs";
import U from "./input-field.vue.mjs";
import g from "./input-select.vue.mjs";
import w from "./input-radio.vue.mjs";
import b from "./input-switch.vue.mjs";
import B from "./input-textarea.vue.mjs";
const I = /* @__PURE__ */ n({
  __name: "form-group",
  props: /* @__PURE__ */ f({
    field: {},
    useGrid: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const i = t, l = p(t, "modelValue"), s = V(() => [
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
    ].includes(i.field.type));
    return (e, o) => (v(), y("div", {
      class: $(`form-group col-${e.useGrid ? "span-" : ""}${e.field.col}`)
    }, [
      s.value ? a(e.$slots, "input", u({ key: 0 }, e.field, { modelValue: l.value }), () => [
        m(U, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : r("", !0),
      e.field.type === "select" ? a(e.$slots, "select", u({ key: 1 }, e.field, { modelValue: l.value }), () => [
        m(g, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[1] || (o[1] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : r("", !0),
      e.field.type === "checkbox" ? a(e.$slots, "checkbox", u({ key: 2 }, e.field, { modelValue: l.value }), () => [
        m(k, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[2] || (o[2] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : r("", !0),
      e.field.type === "radio" ? a(e.$slots, "radio", u({ key: 3 }, e.field, { modelValue: l.value }), () => [
        m(w, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[3] || (o[3] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : r("", !0),
      e.field.type === "switch" ? a(e.$slots, "switch", u({ key: 4 }, e.field, { modelValue: l.value }), () => [
        m(b, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[4] || (o[4] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : r("", !0),
      e.field.type === "textarea" ? a(e.$slots, "textarea", u({ key: 5 }, e.field, { modelValue: l.value }), () => [
        m(B, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[5] || (o[5] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : r("", !0)
    ], 2));
  }
});
export {
  I as default
};
