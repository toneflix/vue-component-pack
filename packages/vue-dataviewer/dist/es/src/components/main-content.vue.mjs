import { defineComponent as H, mergeModels as A, useModel as b, ref as F, computed as B, watch as J, openBlock as n, createBlock as N, normalizeClass as w, withCtx as $, renderSlot as u, createElementVNode as r, toDisplayString as k, createElementBlock as v, createCommentVNode as h, unref as m, createSlots as K, Fragment as U, renderList as q, createVNode as O } from "vue";
/* empty css                   */
import { titleCase as f, slug as D } from "../utils/providers.mjs";
import Q from "./TBtn.vue.mjs";
import W from "./dialog/TCard.vue.mjs";
import X from "./TInnerLoading.vue.mjs";
import { VueForms as Y } from "@toneflix/vue-forms";
import { formatDate as Z } from "date-fns";
const _ = { class: "flex items-center justify-between" }, x = { class: "card-title" }, ee = { key: 1 }, ae = ["onClick"], te = { class: "t-item-section t-item-section-avatar" }, oe = { class: "t-avatar" }, le = ["src", "alt"], se = { class: "t-item-section" }, ie = { class: "t-item-label caption" }, re = {
  key: 0,
  class: "t-item-label"
}, ne = {
  key: 1,
  class: "t-item-label"
}, ue = {
  key: 2,
  class: "image-viewer"
}, de = ["src", "alt"], Me = /* @__PURE__ */ H({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ A({
    dialogMode: { type: Boolean },
    listClass: {},
    exclusions: { default: () => ["id"] },
    formExclusions: { default: () => ["id", "imageUrl"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean },
    dateProps: {},
    imageProps: { default: () => ["imageUrl"] },
    dateFormat: { default: "do MMM, yyyy h:mm a" },
    labelsMap: {},
    valuesMap: {},
    titles: {},
    data: {},
    form: {},
    mode: {},
    errors: {},
    saving: { type: Boolean },
    loading: { type: Boolean }
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
  emits: /* @__PURE__ */ A(["updateData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(c, { emit: R }) {
    const V = R, s = c, o = b(c, "data"), p = b(c, "form"), d = b(c, "mode"), P = b(c, "loading"), T = b(c, "saving"), j = b(c, "errors"), y = F(), z = F(!1), I = B(() => {
      var t, a, l;
      const e = {
        view: ((t = s.titles) == null ? void 0 : t.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc }[d.value || "view"];
    }), E = B(
      () => o.value ? Object.entries(o.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : d.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), G = B(() => E.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: f(D(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), M = (e, t = "view", a) => {
      if (z.value = !0, a)
        d.value = "doc", y.value = { alt: a, src: o.value[a] };
      else {
        o.value = e, d.value = t;
        const l = Object.fromEntries(
          Object.entries(e).map(([i, g]) => [D(i), C(g)])
        );
        V("updateData", l, t);
      }
    }, L = (e, t) => {
      var a, l, i;
      return (a = s.booleanLabels) != null && a[e] ? t ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (i = s.booleanLabels) == null ? void 0 : i[e][1] : t ? "Active" : "Inactive";
    }, C = (e, t) => {
      var a, l, i;
      return t && ((a = s.valuesMap) != null && a[t]) && (e = (l = s.valuesMap) == null ? void 0 : l[t]), t && ((i = s.dateProps) != null && i.includes(t)) ? Z(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(o.value) : Array.isArray(e) && e.every((g) => typeof g == "string") && d.value === "view" ? f(e.join(", ")) : e;
    };
    return J(d, (e) => {
      e !== "doc" && (y.value = void 0);
    }), (e, t) => (n(), N(W, {
      class: w({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: $(() => [
        u(e.$slots, "header", {}, () => [
          r("div", _, [
            r("div", x, k(I.value), 1),
            e.dialogMode ? (n(), v("button", {
              key: 0,
              class: "close-btn",
              onClick: t[0] || (t[0] = (a) => e.$emit("toggleDialog", !1))
            }, " × ")) : h("", !0)
          ])
        ])
      ]),
      default: $(() => [
        r("div", null, [
          d.value === "edit" && p.value ? (n(), N(m(Y), {
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto",
            fields: G.value,
            loading: T.value,
            modelValue: p.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => p.value = a),
            onCancel: t[2] || (t[2] = (a) => d.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => V("click:save", o.value))
          }, K({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: $(() => [
                u(e.$slots, "form-prepend", {
                  form: p.value,
                  errors: j.value,
                  data: o.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: $(() => [
                u(e.$slots, "form-append", {
                  form: p.value,
                  errors: j.value,
                  data: o.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : (d.value === "view" || !p.value) && o.value ? (n(), v("div", ee, [
            r("div", {
              class: w(["t-list", e.listClass]),
              separator: ""
            }, [
              (n(!0), v(U, null, q(e.imageProps, (a) => u(e.$slots, "img-list-item", {
                toggle: () => M(o.value, "doc", a),
                field: a,
                label: m(f)(a),
                value: String(o.value[a]),
                key: a
              }, () => [
                o.value[a] ? (n(), v("div", {
                  key: 0,
                  class: w(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => M(o.value, "doc", a)
                }, [
                  r("div", te, [
                    u(e.$slots, "image", {
                      src: o.value[a]
                    }, () => [
                      r("div", oe, [
                        r("img", {
                          src: o.value[a],
                          alt: m(f)(a)
                        }, null, 8, le)
                      ])
                    ])
                  ]),
                  t[5] || (t[5] = r("div", { class: "t-item-section" }, [
                    r("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, ae)) : h("", !0)
              ])), 128)),
              u(e.$slots, "list-prepend", { data: o.value }),
              (n(!0), v(U, null, q(E.value, (a) => {
                var l;
                return u(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? m(f)(a[0]),
                  value: typeof a[1] == "boolean" ? L(m(D)(a[0]), a[1]) : C(a[1], a[0])
                }, () => {
                  var i;
                  return [
                    r("div", {
                      class: w(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      r("div", se, [
                        r("div", ie, k(((i = e.labelsMap) == null ? void 0 : i[a[0]]) ?? m(f)(a[0])), 1),
                        typeof a[1] == "boolean" ? (n(), v("div", re, [
                          r("div", {
                            class: w(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(L(m(D)(a[0]), a[1])), 3)
                        ])) : (n(), v("div", ne, k(C(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              u(e.$slots, "list-append", { data: o.value })
            ], 2),
            u(e.$slots, "list-after", { data: o.value })
          ])) : o.value ? (n(), v("div", ue, [
            u(e.$slots, "image-viewer", {
              close: () => M(o.value, "view"),
              src: o.value.imageUrl
            }, () => {
              var a, l, i, g, S;
              return [
                O(Q, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: t[4] || (t[4] = (ve) => M(o.value, "view"))
                }),
                (a = y.value) != null && a.src || o.value[((l = e.imageProps) == null ? void 0 : l[0]) ?? 0] ? (n(), v("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((i = y.value) == null ? void 0 : i.src) || o.value[((g = e.imageProps) == null ? void 0 : g[0]) ?? 0]),
                  alt: m(f)(((S = y.value) == null ? void 0 : S.alt) || "Document")
                }, null, 8, de)) : h("", !0)
              ];
            })
          ])) : h("", !0)
        ]),
        u(e.$slots, "loader", { loading: P.value }, () => [
          O(X, { showing: P.value }, null, 8, ["showing"])
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Me as default
};
