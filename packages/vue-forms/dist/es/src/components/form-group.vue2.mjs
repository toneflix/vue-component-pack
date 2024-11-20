import { defineComponent as n, mergeModels as p, useModel as f, computed as V, openBlock as v, createElementBlock as y, normalizeClass as $, renderSlot as d, mergeProps as u, createVNode as m, createCommentVNode as t } from "vue";
import k from "./input-checkbox.vue.mjs";
import U from "./input-field.vue.mjs";
import w from "./input-select.vue.mjs";
import b from "./input-radio.vue.mjs";
import g from "./input-switch.vue.mjs";
import B from "./input-textarea.vue.mjs";
const I = /* @__PURE__ */ n({
  __name: "form-group",
  props: /* @__PURE__ */ p({
    field: {},
    useGrid: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const i = r, l = f(r, "modelValue"), s = V(() => [
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
      s.value ? d(e.$slots, "input", u({ key: 0 }, e.field, { modelValue: l.value }), () => [
        m(U, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => l.value = a)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : t("", !0),
      e.field.type === "select" ? d(e.$slots, "select", u({ key: 1 }, e.field, { modelValue: l.value }), () => [
        m(w, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[1] || (o[1] = (a) => l.value = a)
        }, e.field, { type: "select" }), null, 16, ["modelValue"])
      ], !0) : t("", !0),
      e.field.type === "checkbox" ? d(e.$slots, "checkbox", u({ key: 2 }, e.field, { modelValue: l.value }), () => [
        m(k, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[2] || (o[2] = (a) => l.value = a)
        }, e.field, { type: "checkbox" }), null, 16, ["modelValue"])
      ], !0) : t("", !0),
      e.field.type === "radio" ? d(e.$slots, "radio", u({ key: 3 }, e.field, { modelValue: l.value }), () => [
        m(b, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[3] || (o[3] = (a) => l.value = a)
        }, e.field, { type: "radio" }), null, 16, ["modelValue"])
      ], !0) : t("", !0),
      e.field.type === "switch" ? d(e.$slots, "switch", u({ key: 4 }, e.field, { modelValue: l.value }), () => [
        m(g, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[4] || (o[4] = (a) => l.value = a)
        }, e.field, { type: "switch" }), null, 16, ["modelValue"])
      ], !0) : t("", !0),
      e.field.type === "textarea" ? d(e.$slots, "textarea", u({ key: 5 }, e.field, { modelValue: l.value }), () => [
        m(B, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[5] || (o[5] = (a) => l.value = a)
        }, e.field, { type: "textarea" }), null, 16, ["modelValue"])
      ], !0) : t("", !0)
    ], 2));
  }
});
export {
  I as default
};
