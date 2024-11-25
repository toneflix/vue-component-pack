import { defineComponent as Q, mergeModels as L, useModel as c, computed as w, openBlock as o, createElementBlock as a, normalizeClass as v, renderSlot as s, Fragment as f, renderList as p, createBlock as N, createSlots as U, unref as G, withCtx as E, mergeProps as q, createCommentVNode as n, createVNode as z, createElementVNode as D, toDisplayString as S } from "vue";
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
}, le = /* @__PURE__ */ Q({
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
  setup(y, { emit: H }) {
    const I = H, u = c(y, "fields"), b = c(y, "modelValue"), t = w(() => u.value.some((e) => !!e.group)), J = w(() => K(u.value)), K = (e) => {
      const l = {}, d = [];
      return t.value ? (e.forEach((r) => {
        var i;
        r.group ? (l[r.group] || (l[r.group] = []), (i = l[r.group]) == null || i.push(r)) : d.push(r);
      }), {
        ...l,
        // Spread grouped items by group name
        ungrouped: d
        // Add ungrouped items as a separate group
      }) : { ungrouped: [] };
    }, h = () => {
      I("submit");
    };
    return (e, l) => (o(), a("div", T, [
      t.value ? (o(), a("div", X, [
        s(e.$slots, "prepend", {
          props: { formFields: u.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        (o(!0), a(f, null, p(J.value, (d, r) => {
          var i, $, V, k, M, B, C, F;
          return o(), a(f, null, [
            r && e.separator ? (o(), a("hr", {
              class: "group-separator",
              key: r + "separator"
            })) : n("", !0),
            (i = e.groupMeta) != null && i[r] ? (o(), a("div", {
              class: "group-header",
              key: r + "header"
            }, [
              D("h3", Y, S(e.groupMeta[r].title), 1),
              e.groupMeta[r].subtitle ? (o(), a("p", Z, S(e.groupMeta[r].subtitle), 1)) : n("", !0)
            ])) : n("", !0),
            r ? (o(), a("div", {
              class: v(["group", {
                bordered: !(($ = e.groupMeta) != null && $[r]) && e.bordered || !!((k = (V = e.groupMeta) == null ? void 0 : V[r]) != null && k.bordered),
                rounded: !((M = e.groupMeta) != null && M[r]) && e.rounded || !!((C = (B = e.groupMeta) == null ? void 0 : B[r]) != null && C.rounded)
              }]),
              key: r + "group"
            }, [
              r !== "ungrouped" && e.showGroupLabels && !((F = e.groupMeta) != null && F[r]) ? (o(), a("label", _, S(G(R)(String(r))), 1)) : n("", !0),
              D("div", {
                class: v(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid }])
              }, [
                (o(!0), a(f, null, p(d, (g) => (o(), N(P, {
                  key: g.name,
                  field: g,
                  "use-grid": !!e.useGrid,
                  modelValue: b.value[g.name],
                  "onUpdate:modelValue": (m) => b.value[g.name] = m
                }, U({ _: 2 }, [
                  p(G(j).filter((m) => !!e.$slots[m]), (m) => ({
                    name: m,
                    fn: E((O) => [
                      s(e.$slots, m, q({ ref_for: !0 }, O))
                    ])
                  }))
                ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128))
              ], 2)
            ], 2)) : n("", !0)
          ], 64);
        }), 256)),
        s(e.$slots, "default", {
          props: { formFields: u.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        e.separator && (!e.hideSubmit || !e.hideSubmit) ? (o(), a("hr", x)) : n("", !0),
        s(e.$slots, "actions", {
          loading: !!e.loading,
          submit: h,
          cancel: () => e.$emit("cancel")
        }, () => [
          z(A, {
            loading: !!e.loading,
            "hide-submit": e.hideSubmit,
            "hide-cancel": e.hideCancel,
            "submit-label": e.submitLabel,
            "cancel-label": e.cancelLabel,
            onSubmit: h,
            onCancel: l[1] || (l[1] = (d) => e.$emit("cancel"))
          }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
        ])
      ])) : (o(), a("div", {
        key: 0,
        class: v(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid, bordered: e.bordered, rounded: e.rounded }])
      }, [
        s(e.$slots, "prepend", {
          props: { formFields: u.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        (o(!0), a(f, null, p(u.value, (d) => (o(), N(P, {
          key: d.name,
          field: d,
          "use-grid": !!e.useGrid,
          modelValue: b.value[d.name],
          "onUpdate:modelValue": (r) => b.value[d.name] = r
        }, U({ _: 2 }, [
          p(G(j).filter((r) => !!e.$slots[r]), (r) => ({
            name: r,
            fn: E((i) => [
              s(e.$slots, r, q({ ref_for: !0 }, i))
            ])
          }))
        ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128)),
        s(e.$slots, "default", {
          props: { formFields: u.value, isGrouped: t.value, useGrid: e.useGrid, bordered: e.bordered, rounded: e.rounded, hideSubmit: e.hideSubmit, separator: e.separator }
        }),
        e.separator && (!e.hideSubmit || !e.hideSubmit) ? (o(), a("hr", W)) : n("", !0),
        s(e.$slots, "actions", {
          loading: !!e.loading,
          submit: h,
          cancel: () => e.$emit("cancel")
        }, () => [
          z(A, {
            loading: e.loading,
            "hide-submit": e.hideSubmit,
            "hide-cancel": e.hideCancel,
            "submit-label": e.submitLabel,
            "cancel-label": e.cancelLabel,
            onSubmit: h,
            onCancel: l[0] || (l[0] = (d) => e.$emit("cancel"))
          }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
        ])
      ], 2))
    ]));
  }
});
export {
  le as default
};
