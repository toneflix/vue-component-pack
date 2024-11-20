import { defineComponent as P, mergeModels as E, useModel as f, ref as R, computed as L, openBlock as n, createBlock as q, normalizeClass as b, withCtx as y, renderSlot as u, createElementVNode as r, toDisplayString as w, createElementBlock as d, createCommentVNode as M, unref as c, createSlots as z, Fragment as I, renderList as T, createVNode as A } from "vue";
/* empty css                   */
import { titleCase as $, slug as g } from "../utils/providers.mjs";
import G from "./TBtn.vue.mjs";
import H from "./dialog/TCard.vue.mjs";
import J from "./TInnerLoading.vue.mjs";
import { VueForms as K } from "@toneflix/vue-forms";
import { formatDate as Q } from "date-fns";
const W = { class: "flex items-center justify-between" }, X = { class: "card-title" }, Y = { key: 1 }, Z = {
  class: "t-list",
  separator: ""
}, _ = { class: "t-item-section avatar" }, x = { class: "t-avatar" }, ee = ["src"], ae = { class: "t-item-section" }, te = { class: "t-item-label caption" }, oe = {
  key: 0,
  class: "t-item-label"
}, se = {
  key: 1,
  class: "t-item-label"
}, le = {
  key: 2,
  class: "img-preview"
}, re = ["src"], fe = /* @__PURE__ */ P({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ E({
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
    dateFormat: { default: "do MMM, yyyy h:mm a" },
    labelsMap: {},
    valuesMap: {}
  }, {
    data: {
      required: !0
    },
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
  emits: /* @__PURE__ */ E(["updateData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(m, { emit: F }) {
    const D = F, o = f(m, "data"), p = f(m, "form"), i = m, v = f(m, "mode"), C = f(m, "loading"), N = f(m, "saving"), B = f(m, "errors"), S = R(!1), U = L(
      () => o.value ? Object.entries(o.value).filter((e) => v.value === "edit" ? ![...i.exclusions, ...i.formExclusions].includes(e[0]) : !i.exclusions.includes(e[0])) : []
    ), O = L(() => U.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: $(g(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), k = (e, t = "view") => {
      o.value = e, v.value = t, S.value = !0;
      const a = Object.fromEntries(
        Object.entries(e).map(([s, l]) => [g(s), h(l)])
      );
      D("updateData", a, t);
    }, V = (e, t) => {
      var a, s, l;
      return (a = i.booleanLabels) != null && a[e] ? t ? (s = i.booleanLabels) == null ? void 0 : s[e][0] : (l = i.booleanLabels) == null ? void 0 : l[e][1] : t ? "Active" : "Inactive";
    }, h = (e, t) => {
      var a, s, l;
      return t && ((a = i.valuesMap) != null && a[t]) && (e = (s = i.valuesMap) == null ? void 0 : s[t]), t && ((l = i.dateProps) != null && l.includes(t)) ? Q(e, i.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(o.value) : Array.isArray(e) && e.every((j) => typeof j == "string") && v.value === "view" ? $(e.join(", ")) : e;
    };
    return (e, t) => (n(), q(H, {
      class: b({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: y(() => [
        u(e.$slots, "header", {}, () => {
          var a, s, l;
          return [
            r("div", W, [
              r("div", X, w({ view: (a = e.titles) == null ? void 0 : a.view, edit: (s = e.titles) == null ? void 0 : s.edit, doc: (l = e.titles) == null ? void 0 : l.doc }[v.value || "view"]), 1),
              e.dialogMode ? (n(), d("button", {
                key: 0,
                class: "close-btn",
                onClick: t[0] || (t[0] = (j) => e.$emit("toggleDialog", !1))
              }, " × ")) : M("", !0)
            ])
          ];
        })
      ]),
      default: y(() => [
        r("div", null, [
          v.value === "edit" && p.value ? (n(), q(c(K), {
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto",
            fields: O.value,
            loading: N.value,
            modelValue: p.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => p.value = a),
            onCancel: t[2] || (t[2] = (a) => v.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => D("click:save", o.value))
          }, z({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: y(() => [
                u(e.$slots, "form-prepend", {
                  form: p.value,
                  errors: B.value,
                  data: o.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: y(() => [
                u(e.$slots, "form-append", {
                  form: p.value,
                  errors: B.value,
                  data: o.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : (v.value === "view" || !p.value) && o.value ? (n(), d("div", Y, [
            r("div", Z, [
              o.value.imageUrl ? (n(), d("div", {
                key: 0,
                class: b(["q-my-sm t-item clickable", { "t-item-separator": e.separator }]),
                onClick: t[4] || (t[4] = (a) => k(o.value, "doc"))
              }, [
                r("div", _, [
                  r("div", x, [
                    r("img", {
                      src: o.value.imageUrl,
                      alt: "Document"
                    }, null, 8, ee)
                  ])
                ]),
                t[6] || (t[6] = r("div", { class: "t-item-section" }, [
                  r("div", { class: "t-item-label" }, "Click to expand")
                ], -1))
              ], 2)) : M("", !0),
              u(e.$slots, "list-prepend", { data: o.value }),
              (n(!0), d(I, null, T(U.value, (a) => {
                var s;
                return u(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((s = e.labelsMap) == null ? void 0 : s[a[0]]) ?? c($)(c(g)(a[0])),
                  value: typeof a[1] == "boolean" ? V(c(g)(a[0]), a[1]) : h(a[1], a[0])
                }, () => {
                  var l;
                  return [
                    r("div", {
                      class: b(["q-my-sm t-item", { "t-item-separator": e.separator }])
                    }, [
                      r("div", ae, [
                        r("div", te, w(((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? c($)(c(g)(a[0]))), 1),
                        typeof a[1] == "boolean" ? (n(), d("div", oe, [
                          r("div", {
                            class: b(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, w(V(c(g)(a[0]), a[1])), 3)
                        ])) : (n(), d("div", se, w(h(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              u(e.$slots, "list-append", { data: o.value })
            ]),
            u(e.$slots, "list-after", { data: o.value })
          ])) : o.value ? (n(), d("div", le, [
            u(e.$slots, "image", {
              close: () => k(o.value, "view"),
              src: o.value.imageUrl
            }, () => [
              A(G, {
                dense: "",
                color: "primary",
                label: "Return",
                icon: "fas fa-arrow-left",
                onClick: t[5] || (t[5] = (a) => k(o.value, "view"))
              }),
              o.value.imageUrl ? (n(), d("img", {
                key: 0,
                style: { width: "100%" },
                src: o.value.imageUrl,
                alt: "Document"
              }, null, 8, re)) : M("", !0)
            ])
          ])) : M("", !0)
        ]),
        u(e.$slots, "loader", { loading: C.value }, () => [
          A(J, { showing: C.value }, null, 8, ["showing"])
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  fe as default
};
