import { defineComponent as $, mergeModels as c, useModel as w, computed as f, useSlots as C, openBlock as U, createElementBlock as b, normalizeClass as g, renderSlot as a, mergeProps as u, createVNode as d, createCommentVNode as s } from "vue";
import h from "./input-checkbox.vue.mjs";
import S from "./input-field.vue.mjs";
import B from "./input-select.vue.mjs";
import M from "./input-radio.vue.mjs";
import G from "./input-switch.vue.mjs";
import P from "./input-textarea.vue.mjs";
const F = /* @__PURE__ */ $({
  __name: "form-group",
  props: /* @__PURE__ */ c({
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
    const r = m, l = w(m, "modelValue"), i = f(() => [
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
    ].includes(r.field.type)), V = C(), v = ["input", "select", "checkbox", "radio", "switch", "textarea"];
    function y(e) {
      const o = V[e];
      return o ? o().some((n) => {
        var p;
        return n.type !== Comment && ((p = n.children) == null ? void 0 : p.length);
      }) && (r.field.type === e || e === "input" && i.value) : !1;
    }
    const k = f(() => v.some(y));
    return (e, o) => (U(), b("div", {
      class: g([`form-group col-${e.useGrid ? "span-" : ""}${e.field.col}`, { unsloted: !k.value }])
    }, [
      i.value ? a(e.$slots, "input", u({ key: 0 }, e.field, { modelValue: l.value }), () => [
        d(S, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (t) => l.value = t)
        }, e.field), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "select" ? a(e.$slots, "select", u({ key: 1 }, e.field, { modelValue: l.value }), () => [
        d(B, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[1] || (o[1] = (t) => l.value = t)
        }, e.field, { type: "select" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "checkbox" ? a(e.$slots, "checkbox", u({ key: 2 }, e.field, { modelValue: l.value }), () => [
        d(h, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[2] || (o[2] = (t) => l.value = t)
        }, e.field, { type: "checkbox" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "radio" ? a(e.$slots, "radio", u({ key: 3 }, e.field, { modelValue: l.value }), () => [
        d(M, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[3] || (o[3] = (t) => l.value = t)
        }, e.field, { type: "radio" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "switch" ? a(e.$slots, "switch", u({ key: 4 }, e.field, { modelValue: l.value }), () => [
        d(G, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[4] || (o[4] = (t) => l.value = t)
        }, e.field, { type: "switch" }), null, 16, ["modelValue"])
      ], !0) : s("", !0),
      e.field.type === "textarea" ? a(e.$slots, "textarea", u({ key: 5 }, e.field, { modelValue: l.value }), () => [
        d(P, u({
          modelValue: l.value,
          "onUpdate:modelValue": o[5] || (o[5] = (t) => l.value = t)
        }, e.field, { type: "textarea" }), null, 16, ["modelValue"])
      ], !0) : s("", !0)
    ], 2));
  }
});
export {
  F as default
};
