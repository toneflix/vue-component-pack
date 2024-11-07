import { defineComponent as f, mergeModels as p, useModel as V, computed as v, openBlock as a, createElementBlock as y, normalizeClass as $, renderSlot as m, mergeProps as u, createBlock as r, createCommentVNode as t } from "vue";
import k from "./input-checkbox.vue.mjs";
import U from "./input-field.vue.mjs";
import g from "./input-select.vue.mjs";
import w from "./input-radio.vue.mjs";
import B from "./input-switch.vue.mjs";
const E = /* @__PURE__ */ f({
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
  setup(i) {
    const s = i, l = V(i, "modelValue"), n = v(() => [
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
    ].includes(s.field.type));
    return (e, o) => (a(), y("div", {
      class: $(`form-group col-${e.useGrid ? "span-" : ""}${e.field.col}`)
    }, [
      m(e.$slots, "input", u(e.field, { modelValue: l.value }), () => [
        n.value ? (a(), r(U, u({
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])) : t("", !0)
      ], !0),
      m(e.$slots, "select", u(e.field, { modelValue: l.value }), () => [
        e.field.type === "select" ? (a(), r(g, u({
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": o[1] || (o[1] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])) : t("", !0)
      ], !0),
      m(e.$slots, "checkbox", u(e.field, { modelValue: l.value }), () => [
        e.field.type === "checkbox" ? (a(), r(k, u({
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": o[2] || (o[2] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])) : t("", !0)
      ], !0),
      m(e.$slots, "radio", u(e.field, { modelValue: l.value }), () => [
        e.field.type === "radio" ? (a(), r(w, u({
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": o[3] || (o[3] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])) : t("", !0)
      ], !0),
      m(e.$slots, "switch", u(e.field, { modelValue: l.value }), () => [
        e.field.type === "switch" ? (a(), r(B, u({
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": o[4] || (o[4] = (d) => l.value = d)
        }, e.field), null, 16, ["modelValue"])) : t("", !0)
      ], !0)
    ], 2));
  }
});
export {
  E as default
};
