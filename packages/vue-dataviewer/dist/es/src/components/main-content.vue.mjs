import { defineComponent as O, mergeModels as V, useModel as c, ref as P, computed as U, openBlock as s, createBlock as j, normalizeClass as p, withCtx as g, renderSlot as f, createElementVNode as l, toDisplayString as y, createElementBlock as r, createCommentVNode as b, unref as w, createSlots as R, Fragment as z, renderList as I, createVNode as E } from "vue";
/* empty css                   */
import { titleCase as k, slug as D } from "../utils/providers.mjs";
import T from "./TBtn.vue.mjs";
import G from "./dialog/TCard.vue.mjs";
import H from "./TInnerLoading.vue.mjs";
import { VueForms as J } from "@toneflix/vue-forms";
import { formatDate as K } from "date-fns";
const Q = { class: "flex items-center justify-between" }, W = { class: "card-title" }, X = { key: 1 }, Y = {
  class: "t-list",
  separator: ""
}, Z = { class: "t-item-section avatar" }, _ = { class: "t-avatar" }, x = ["src"], ee = { class: "t-item-section" }, te = { class: "t-item-label caption" }, oe = {
  key: 0,
  class: "t-item-label"
}, ae = {
  key: 1,
  class: "t-item-label"
}, le = {
  key: 2,
  class: "img-preview"
}, se = ["src"], pe = /* @__PURE__ */ O({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ V({
    titles: { default: () => ({ view: "view Data", edit: "Edit Data", doc: "View Docs" }) },
    dialogMode: { type: Boolean },
    exclusions: { default: () => ["imageUrl"] },
    formExclusions: { default: () => ["imageUrl"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean },
    dateProps: {},
    dateFormat: { default: "do MMM, yyyy h:mm a" }
  }, {
    data: {},
    dataModifiers: {},
    form: {
      required: !1
    },
    formModifiers: {},
    mode: {
      default: "view"
    },
    modeModifiers: {},
    loading: { type: Boolean, default: !1 },
    loadingModifiers: {},
    saving: { type: Boolean, default: !1 },
    savingModifiers: {},
    errors: {
      default: {}
    },
    errorsModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["updateData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(d, { emit: L }) {
    const h = L, a = c(d, "data"), v = c(d, "form"), n = d, u = c(d, "mode"), q = c(d, "loading"), A = c(d, "saving"), M = c(d, "errors"), F = P(!1), $ = U(
      () => a.value ? Object.entries(a.value).filter((e) => u.value === "edit" ? ![...n.exclusions, ...n.formExclusions].includes(e[0]) : !n.exclusions.includes(e[0])) : []
    ), N = U(() => $.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: k(D(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), C = (e, t = "view") => {
      a.value = e, u.value = t, F.value = !0;
      const o = Object.fromEntries(
        Object.entries(e).map(([i, m]) => [D(i), B(m)])
      );
      h("updateData", o, t);
    }, S = (e, t) => {
      var o, i, m;
      return (o = n.booleanLabels) != null && o[e] ? t ? (i = n.booleanLabels) == null ? void 0 : i[e][0] : (m = n.booleanLabels) == null ? void 0 : m[e][1] : t ? "Active" : "Inactive";
    }, B = (e, t) => {
      var o;
      return t && ((o = n.dateProps) != null && o.includes(t)) ? K(e, n.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(a.value) : Array.isArray(e) && e.every((i) => typeof i == "string") && u.value === "view" ? k(e.join(", ")) : e;
    };
    return (e, t) => (s(), j(G, {
      class: p({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: g(() => [
        f(e.$slots, "header", {}, () => {
          var o, i, m;
          return [
            l("div", Q, [
              l("div", W, y({ view: (o = e.titles) == null ? void 0 : o.view, edit: (i = e.titles) == null ? void 0 : i.edit, doc: (m = e.titles) == null ? void 0 : m.doc }[u.value || "view"]), 1),
              e.dialogMode ? (s(), r("button", {
                key: 0,
                class: "close-btn",
                onClick: t[0] || (t[0] = (ie) => e.$emit("toggleDialog", !1))
              }, " × ")) : b("", !0)
            ])
          ];
        })
      ]),
      default: g(() => [
        l("div", null, [
          u.value === "edit" && v.value ? (s(), j(w(J), {
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto",
            fields: N.value,
            loading: A.value,
            modelValue: v.value,
            "onUpdate:modelValue": t[1] || (t[1] = (o) => v.value = o),
            onCancel: t[2] || (t[2] = (o) => u.value = "view"),
            onSubmit: t[3] || (t[3] = (o) => h("click:save", a.value))
          }, R({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: g(() => [
                f(e.$slots, "form-prepend", {
                  form: v.value,
                  errors: M.value,
                  viewData: a.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: g(() => [
                f(e.$slots, "form-append", {
                  form: v.value,
                  errors: M.value,
                  viewData: a.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : (u.value === "view" || !v.value) && a.value ? (s(), r("div", X, [
            l("div", Y, [
              a.value.imageUrl ? (s(), r("div", {
                key: 0,
                class: p(["q-my-sm t-item clickable", { "t-item-separator": e.separator }]),
                onClick: t[4] || (t[4] = (o) => C(a.value, "doc"))
              }, [
                l("div", Z, [
                  l("div", _, [
                    l("img", {
                      src: a.value.imageUrl,
                      alt: "Document"
                    }, null, 8, x)
                  ])
                ]),
                t[6] || (t[6] = l("div", { class: "t-item-section" }, [
                  l("div", { class: "t-item-label" }, "Click to expand")
                ], -1))
              ], 2)) : b("", !0),
              (s(!0), r(z, null, I($.value, (o) => (s(), r("div", {
                class: p(["q-my-sm t-item", { "t-item-separator": e.separator }]),
                key: o[0]
              }, [
                l("div", ee, [
                  l("div", te, y(w(k)(w(D)(o[0]))), 1),
                  typeof o[1] == "boolean" ? (s(), r("div", oe, [
                    l("div", {
                      class: p(["t-chip t-chip-square", o[1] ? "t-chip-green" : "t-chip-red"])
                    }, y(S(w(D)(o[0]), o[1])), 3)
                  ])) : (s(), r("div", ae, y(B(o[1], o[0])), 1))
                ])
              ], 2))), 128)),
              f(e.$slots, "list-append", { viewData: a.value })
            ]),
            f(e.$slots, "list-after", { viewData: a.value })
          ])) : a.value ? (s(), r("div", le, [
            E(T, {
              dense: "",
              color: "primary",
              label: "Return",
              icon: "fas fa-arrow-left",
              onClick: t[5] || (t[5] = (o) => C(a.value, "view"))
            }),
            a.value.imageUrl ? (s(), r("img", {
              key: 0,
              style: { width: "100%" },
              src: a.value.imageUrl,
              alt: "Document"
            }, null, 8, se)) : b("", !0)
          ])) : b("", !0)
        ]),
        E(H, { showing: q.value }, null, 8, ["showing"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  pe as default
};
