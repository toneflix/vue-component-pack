import { defineComponent as Q, mergeModels as L, useModel as w, computed as N, openBlock as o, createElementBlock as a, normalizeClass as f, renderSlot as s, Fragment as g, renderList as m, createBlock as U, createSlots as c, unref as v, withCtx as E, mergeProps as q, createCommentVNode as n, createVNode as z, createElementVNode as D, toDisplayString as G } from "vue";
/* empty css                   */
import P from "./form-group.vue.mjs";
import { slotNames as j, titleCase as R } from "../utils/providers.mjs";
import A from "./form-actions.vue.mjs";
const T = {
  key: 0,
  class: "group-separator"
}, W = {
  key: 1,
  class: "form-groups"
}, X = { class: "group-title" }, Y = {
  key: 0,
  class: "group-subtitle"
}, Z = {
  key: 0,
  class: "group-label"
}, _ = {
  key: 0,
  class: "group-separator"
}, de = /* @__PURE__ */ Q({
  __name: "vue-forms",
  props: /* @__PURE__ */ L({
    loading: { type: Boolean },
    useGrid: { type: Boolean },
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    groupMeta: {},
    hideSubmit: { type: Boolean },
    hideCancel: { type: Boolean },
    cancelLabel: {},
    submitLabel: {},
    showGroupLabels: { type: Boolean }
  }, {
    fields: {
      default: () => []
    },
    fieldsModifiers: {},
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ L(["cancel", "submit"], ["update:fields", "update:modelValue"]),
  setup(S, { emit: H }) {
    const I = H, l = w(S, "fields"), p = w(S, "modelValue"), t = N(() => l.value.some((e) => !!e.group)), J = N(() => K(l.value)), K = (e) => {
      const u = {}, d = [];
      return t.value ? (e.forEach((r) => {
        var i;
        r.group ? (u[r.group] || (u[r.group] = []), (i = u[r.group]) == null || i.push(r)) : d.push(r);
      }), {
        ...u,
        // Spread grouped items by group name
        ungrouped: d
        // Add ungrouped items as a separate group
      }) : { ungrouped: [] };
    }, y = () => {
      I("submit");
    };
    return (e, u) => t.value ? (o(), a("div", W, [
      s(e.$slots, "prepend", {
        props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
      }),
      (o(!0), a(g, null, m(J.value, (d, r) => {
        var i, V, k, M, $, B, C, F;
        return o(), a(g, null, [
          r && e.separator ? (o(), a("hr", {
            class: "group-separator",
            key: r + "separator"
          })) : n("", !0),
          (i = e.groupMeta) != null && i[r] ? (o(), a("div", {
            class: "group-header",
            key: r + "header"
          }, [
            D("h3", X, G(e.groupMeta[r].title), 1),
            e.groupMeta[r].subtitle ? (o(), a("p", Y, G(e.groupMeta[r].subtitle), 1)) : n("", !0)
          ])) : n("", !0),
          r ? (o(), a("div", {
            class: f(["group", {
              bordered: !((V = e.groupMeta) != null && V[r]) && e.bordered || !!((M = (k = e.groupMeta) == null ? void 0 : k[r]) != null && M.bordered),
              rounded: !(($ = e.groupMeta) != null && $[r]) && e.rounded || !!((C = (B = e.groupMeta) == null ? void 0 : B[r]) != null && C.rounded)
            }]),
            key: r + "group"
          }, [
            r !== "ungrouped" && e.showGroupLabels && !((F = e.groupMeta) != null && F[r]) ? (o(), a("label", Z, G(v(R)(String(r))), 1)) : n("", !0),
            D("div", {
              class: f(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid }])
            }, [
              (o(!0), a(g, null, m(d, (b) => (o(), U(P, {
                key: b.name,
                field: b,
                "use-grid": !!e.useGrid,
                modelValue: p.value[b.name],
                "onUpdate:modelValue": (h) => p.value[b.name] = h
              }, c({ _: 2 }, [
                m(v(j), (h) => ({
                  name: h,
                  fn: E((O) => [
                    s(e.$slots, h, q({ ref_for: !0 }, O))
                  ])
                }))
              ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128))
            ], 2)
          ], 2)) : n("", !0)
        ], 64);
      }), 256)),
      s(e.$slots, "default", {
        props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
      }),
      e.separator && (!e.hideSubmit || !e.hideSubmit) ? (o(), a("hr", _)) : n("", !0),
      s(e.$slots, "actions", {}, () => [
        z(A, {
          loading: !!e.loading,
          "hide-submit": e.hideSubmit,
          "hide-cancel": e.hideCancel,
          "submit-label": e.submitLabel,
          "cancel-label": e.cancelLabel,
          onSubmit: y,
          onCancel: u[1] || (u[1] = (d) => e.$emit("cancel"))
        }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
      ])
    ])) : (o(), a("div", {
      key: 0,
      class: f(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid, bordered: e.bordered, rounded: e.rounded }])
    }, [
      s(e.$slots, "prepend", {
        props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
      }),
      (o(!0), a(g, null, m(l.value, (d) => (o(), U(P, {
        key: d.name,
        field: d,
        "use-grid": !!e.useGrid,
        modelValue: p.value[d.name],
        "onUpdate:modelValue": (r) => p.value[d.name] = r
      }, c({ _: 2 }, [
        m(v(j), (r) => ({
          name: r,
          fn: E((i) => [
            s(e.$slots, r, q({ ref_for: !0 }, i))
          ])
        }))
      ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128)),
      s(e.$slots, "default", {
        props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
      }),
      e.separator && (!e.hideSubmit || !e.hideSubmit) ? (o(), a("hr", T)) : n("", !0),
      s(e.$slots, "actions", {}, () => [
        z(A, {
          loading: e.loading,
          "hide-submit": e.hideSubmit,
          "hide-cancel": e.hideCancel,
          "submit-label": e.submitLabel,
          "cancel-label": e.cancelLabel,
          onSubmit: y,
          onCancel: u[0] || (u[0] = (d) => e.$emit("cancel"))
        }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
      ])
    ], 2));
  }
});
export {
  de as default
};
