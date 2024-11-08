import { defineComponent as O, mergeModels as $, useModel as w, computed as F, openBlock as r, createElementBlock as a, normalizeClass as g, Fragment as p, renderList as n, createBlock as N, createSlots as U, withCtx as E, renderSlot as b, mergeProps as q, createCommentVNode as u, createVNode as z, createElementVNode as D, toDisplayString as c, unref as Q } from "vue";
import P from "./form-group.vue.mjs";
/* empty css                   */
import { titleCase as R } from "../utils/providers.mjs";
import j from "./form-actions.vue.mjs";
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
}, le = /* @__PURE__ */ O({
  __name: "vue-forms",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["cancel", "submit"], ["update:fields", "update:modelValue"]),
  setup(f, { emit: A }) {
    const H = A, h = w(f, "fields"), t = w(f, "modelValue"), v = ["input", "select", "checkbox", "radio", "switch"], y = F(() => h.value.some((e) => !!e.group)), I = F(() => J(h.value)), J = (e) => {
      const s = {}, l = [];
      return y.value ? (e.forEach((o) => {
        o.group ? (s[o.group] || (s[o.group] = []), s[o.group].push(o)) : l.push(o);
      }), {
        ...s,
        // Spread grouped items by group name
        ungrouped: l
        // Add ungrouped items as a separate group
      }) : { ungrouped: [] };
    }, k = () => {
      H("submit");
    };
    return (e, s) => y.value ? (r(), a("div", W, [
      (r(!0), a(p, null, n(I.value, (l, o) => {
        var d, V, M, S, B, C, G, L;
        return r(), a(p, null, [
          o && e.separator ? (r(), a("hr", {
            class: "group-separator",
            key: o + "separator"
          })) : u("", !0),
          (d = e.groupMeta) != null && d[o] ? (r(), a("div", {
            class: "group-header",
            key: o + "header"
          }, [
            D("h3", X, c(e.groupMeta[o].title), 1),
            e.groupMeta[o].subtitle ? (r(), a("p", Y, c(e.groupMeta[o].subtitle), 1)) : u("", !0)
          ])) : u("", !0),
          o ? (r(), a("div", {
            class: g(["group", {
              bordered: !((V = e.groupMeta) != null && V[o]) && e.bordered || !!((S = (M = e.groupMeta) == null ? void 0 : M[o]) != null && S.bordered),
              rounded: !((B = e.groupMeta) != null && B[o]) && e.rounded || !!((G = (C = e.groupMeta) == null ? void 0 : C[o]) != null && G.rounded)
            }]),
            key: o + "group"
          }, [
            o !== "ungrouped" && e.showGroupLabels && !((L = e.groupMeta) != null && L[o]) ? (r(), a("label", Z, c(Q(R)(String(o))), 1)) : u("", !0),
            D("div", {
              class: g(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid }])
            }, [
              (r(!0), a(p, null, n(l, (i) => (r(), N(P, {
                key: i.name,
                field: i,
                "use-grid": e.useGrid,
                modelValue: t.value[i.name],
                "onUpdate:modelValue": (m) => t.value[i.name] = m
              }, U({ _: 2 }, [
                n(v, (m) => ({
                  name: m,
                  fn: E((K) => [
                    b(e.$slots, m, q({ ref_for: !0 }, K))
                  ])
                }))
              ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128))
            ], 2)
          ], 2)) : u("", !0)
        ], 64);
      }), 256)),
      e.separator && (!e.hideSubmit || !e.hideSubmit) ? (r(), a("hr", _)) : u("", !0),
      b(e.$slots, "actions", {}, () => [
        z(j, {
          loading: e.loading,
          "hide-submit": e.hideSubmit,
          "hide-cancel": e.hideCancel,
          "submit-label": e.submitLabel,
          "cancel-label": e.cancelLabel,
          onSubmit: k,
          onCancel: s[1] || (s[1] = (l) => e.$emit("cancel"))
        }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
      ])
    ])) : (r(), a("div", {
      key: 0,
      class: g(["vue-forms", { "form-row": !e.useGrid, "form-grid": e.useGrid, bordered: e.bordered, rounded: e.rounded }])
    }, [
      (r(!0), a(p, null, n(h.value, (l) => (r(), N(P, {
        key: l.name,
        field: l,
        "use-grid": e.useGrid,
        modelValue: t.value[l.name],
        "onUpdate:modelValue": (o) => t.value[l.name] = o
      }, U({ _: 2 }, [
        n(v, (o) => ({
          name: o,
          fn: E((d) => [
            b(e.$slots, o, q({ ref_for: !0 }, d))
          ])
        }))
      ]), 1032, ["field", "use-grid", "modelValue", "onUpdate:modelValue"]))), 128)),
      e.separator && (!e.hideSubmit || !e.hideSubmit) ? (r(), a("hr", T)) : u("", !0),
      b(e.$slots, "actions", {}, () => [
        z(j, {
          loading: e.loading,
          "hide-submit": e.hideSubmit,
          "hide-cancel": e.hideCancel,
          "submit-label": e.submitLabel,
          "cancel-label": e.cancelLabel,
          onSubmit: k,
          onCancel: s[0] || (s[0] = (l) => e.$emit("cancel"))
        }, null, 8, ["loading", "hide-submit", "hide-cancel", "submit-label", "cancel-label"])
      ])
    ], 2));
  }
});
export {
  le as default
};