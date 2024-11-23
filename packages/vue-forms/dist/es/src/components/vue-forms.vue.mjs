import { defineComponent as Q, mergeModels as L, useModel as w, computed as c, openBlock as o, createElementBlock as a, normalizeClass as g, renderSlot as u, Fragment as f, renderList as p, createBlock as N, createSlots as U, unref as v, withCtx as E, mergeProps as q, createCommentVNode as n, createVNode as z, createElementVNode as D, toDisplayString as G } from "vue";
/* empty css                   */
import P from "./form-group.vue.mjs";
import { slotNames as j, titleCase as R } from "../utils/providers.mjs";
import A from "./form-actions.vue.mjs";
const T = { class: "vue-forms-controller" }, W = {
  key: 0,
  class: "group-separator"
}, X = {
  key: 1,
  class: "form-groups"
}, Y = { class: "group-title" }, Z = {
  key: 0,
  class: "group-subtitle"
}, _ = {
  key: 0,
  class: "group-label"
}, x = {
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
    const I = H, l = w(S, "fields"), b = w(S, "modelValue"), t = c(() => l.value.some((e) => !!e.group)), J = c(() => K(l.value)), K = (e) => {
      const d = {}, s = [];
      return t.value ? (e.forEach((r) => {
        var i;
        r.group ? (d[r.group] || (d[r.group] = []), (i = d[r.group]) == null || i.push(r)) : s.push(r);
      }), {
        ...d,
        // Spread grouped items by group name
        ungrouped: s
        // Add ungrouped items as a separate group
      }) : { ungrouped: [] };
    }, y = () => {
      I("submit");
    };
    return (e, d) => (o(), a("div", T, [
      t.value ? (o(), a("div", X, [
        u(e.$slots, "prepend", {
          props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        (o(!0), a(f, null, p(J.value, (s, r) => {
          var i, V, $, k, M, B, C, F;
          return o(), a(f, null, [
            r && e.separator ? (o(), a("hr", {
              class: "group-separator",
              key: r + "separator"
            })) : n("", !0),
            (i = e.groupMeta) != null && i[r] ? (o(), a("div", {
              class: "group-header",
              key: r + "header"
            }, [
              D("h3", Y, G(e.groupMeta[r].title), 1),
              e.groupMeta[r].subtitle ? (o(), a("p", Z, G(e.groupMeta[r].subtitle), 1)) : n("", !0)
            ])) : n("", !0),
            r ? (o(), a("div", {
              class: g(["group", {
                bordered: !((V = e.groupMeta) != null && V[r]) && e.bordered || !!((k = ($ = e.groupMeta) == null ? void 0 : $[r]) != null && k.bordered),
                rounded: !((M = e.groupMeta) != null && M[r]) && e.rounded || !!((C = (B = e.groupMeta) == null ? void 0 : B[r]) != null && C.rounded)
              }]),
              key: r + "group"
            }, [
              r !== "ungrouped" && e.showGroupLabels && !((F = e.groupMeta) != null && F[r]) ? (o(), a("label", _, G(v(R)(String(r))), 1)) : n("", !0),
              D("div", {
                class: g(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid }])
              }, [
                (o(!0), a(f, null, p(s, (h) => (o(), N(P, {
                  key: h.name,
                  field: h,
                  "use-grid": !!e.useGrid,
                  modelValue: b.value[h.name],
                  "onUpdate:modelValue": (m) => b.value[h.name] = m
                }, U({ _: 2 }, [
                  p(v(j).filter((m) => !!e.$slots[m]), (m) => ({
                    name: m,
                    fn: E((O) => [
                      u(e.$slots, m, q({ ref_for: !0 }, O))
                    ])
                  }))
                ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128))
              ], 2)
            ], 2)) : n("", !0)
          ], 64);
        }), 256)),
        u(e.$slots, "default", {
          props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        e.separator && (!e.hideSubmit || !e.hideSubmit) ? (o(), a("hr", x)) : n("", !0),
        u(e.$slots, "actions", {}, () => [
          z(A, {
            loading: !!e.loading,
            "hide-submit": e.hideSubmit,
            "hide-cancel": e.hideCancel,
            "submit-label": e.submitLabel,
            "cancel-label": e.cancelLabel,
            onSubmit: y,
            onCancel: d[1] || (d[1] = (s) => e.$emit("cancel"))
          }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
        ])
      ])) : (o(), a("div", {
        key: 0,
        class: g(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid, bordered: e.bordered, rounded: e.rounded }])
      }, [
        u(e.$slots, "prepend", {
          props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        (o(!0), a(f, null, p(l.value, (s) => (o(), N(P, {
          key: s.name,
          field: s,
          "use-grid": !!e.useGrid,
          modelValue: b.value[s.name],
          "onUpdate:modelValue": (r) => b.value[s.name] = r
        }, U({ _: 2 }, [
          p(v(j).filter((r) => !!e.$slots[r]), (r) => ({
            name: r,
            fn: E((i) => [
              u(e.$slots, r, q({ ref_for: !0 }, i))
            ])
          }))
        ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128)),
        u(e.$slots, "default", {
          props: { formFields: l.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        e.separator && (!e.hideSubmit || !e.hideSubmit) ? (o(), a("hr", W)) : n("", !0),
        u(e.$slots, "actions", {}, () => [
          z(A, {
            loading: e.loading,
            "hide-submit": e.hideSubmit,
            "hide-cancel": e.hideCancel,
            "submit-label": e.submitLabel,
            "cancel-label": e.cancelLabel,
            onSubmit: y,
            onCancel: d[0] || (d[0] = (s) => e.$emit("cancel"))
          }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
        ])
      ], 2))
    ]));
  }
});
export {
  de as default
};
