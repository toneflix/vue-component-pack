import { defineComponent as G, mergeModels as A, useModel as y, ref as F, computed as B, watch as H, openBlock as u, createBlock as U, normalizeClass as $, withCtx as M, renderSlot as n, createElementVNode as i, toDisplayString as k, createElementBlock as v, createCommentVNode as h, unref as m, mergeProps as J, createSlots as K, renderList as P, normalizeProps as Q, guardReactiveProps as W, Fragment as q, createVNode as O } from "vue";
/* empty css                   */
import { titleCase as g, slug as D, formSlotNames as X } from "../utils/providers.mjs";
import Y from "./TBtn.vue.mjs";
import _ from "./dialog/TCard.vue.mjs";
import x from "./TInnerLoading.vue.mjs";
import { VueForms as ee } from "@toneflix/vue-forms";
import { formatDate as ae } from "date-fns";
const te = { class: "flex items-center justify-between no-wrap" }, oe = { class: "card-title" }, le = { key: 1 }, se = ["onClick"], re = { class: "t-item-section t-item-section-avatar" }, ie = { class: "t-avatar" }, ne = ["src", "alt"], ue = { class: "t-item-section" }, de = { class: "t-item-label caption" }, ve = {
  key: 0,
  class: "t-item-label"
}, me = {
  key: 1,
  class: "t-item-label"
}, ce = {
  key: 2,
  class: "image-viewer"
}, fe = ["src", "alt"], De = /* @__PURE__ */ G({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ A({
    dialogMode: { type: Boolean },
    listClass: {},
    dialogZIndex: {},
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
    formProps: {},
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
    const V = R, s = c, o = y(c, "data"), p = y(c, "form"), d = y(c, "mode"), S = y(c, "loading"), z = y(c, "saving"), j = y(c, "errors"), w = F(), I = F(!1), T = B(() => {
      var t, a, l;
      const e = {
        view: ((t = s.titles) == null ? void 0 : t.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc }[d.value || "view"];
    }), E = B(
      () => o.value ? Object.entries(o.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : d.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), Z = B(() => E.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: g(D(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), f = (e, t = "view", a) => {
      if (I.value = !0, a)
        d.value = "doc", w.value = { alt: a, src: o.value[a] };
      else {
        o.value = e, d.value = t;
        const l = Object.fromEntries(
          Object.entries(e).map(([r, b]) => [D(r), C(b)])
        );
        V("updateData", l, t);
      }
    }, L = (e, t) => {
      var a, l, r;
      return (a = s.booleanLabels) != null && a[e] ? t ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (r = s.booleanLabels) == null ? void 0 : r[e][1] : t ? "Active" : "Inactive";
    }, C = (e, t) => {
      var a, l, r;
      return t && ((a = s.valuesMap) != null && a[t]) && (e = (l = s.valuesMap) == null ? void 0 : l[t]), t && ((r = s.dateProps) != null && r.includes(t)) ? ae(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(o.value) : Array.isArray(e) && e.every((b) => typeof b == "string") && d.value === "view" ? g(e.join(", ")) : e;
    };
    return H(d, (e) => {
      e !== "doc" && (w.value = void 0);
    }), (e, t) => (u(), U(_, {
      class: $({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: M(() => [
        n(e.$slots, "header", {}, () => [
          i("div", te, [
            i("div", oe, k(T.value), 1),
            e.dialogMode ? (u(), v("button", {
              key: 0,
              class: "close-btn",
              onClick: t[0] || (t[0] = (a) => e.$emit("toggleDialog", !1))
            }, " × ")) : h("", !0)
          ])
        ])
      ]),
      default: M(() => [
        i("div", null, [
          d.value === "edit" && p.value ? (u(), U(m(ee), J({
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto"
          }, e.formProps, {
            modelValue: p.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => p.value = a),
            fields: Z.value,
            loading: z.value,
            onCancel: t[2] || (t[2] = (a) => d.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => V("click:save", o.value))
          }), K({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: M(() => [
                n(e.$slots, "form-prepend", {
                  form: p.value,
                  errors: j.value,
                  data: o.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: M(() => [
                n(e.$slots, "form-append", {
                  form: p.value,
                  errors: j.value,
                  data: o.value
                })
              ]),
              key: "1"
            } : void 0,
            P(m(X), (a) => ({
              name: a,
              fn: M((l) => [
                n(e.$slots, a, Q(W(l)))
              ])
            }))
          ]), 1040, ["modelValue", "fields", "loading"])) : (d.value === "view" || !p.value) && o.value ? (u(), v("div", le, [
            i("div", {
              class: $(["t-list", e.listClass]),
              separator: ""
            }, [
              (u(!0), v(q, null, P(e.imageProps, (a) => n(e.$slots, "img-list-item", {
                toggle: () => f(o.value, "doc", a),
                field: a,
                label: m(g)(a),
                value: String(o.value[a]),
                key: a
              }, () => [
                o.value[a] ? (u(), v("div", {
                  key: 0,
                  class: $(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => f(o.value, "doc", a)
                }, [
                  i("div", re, [
                    n(e.$slots, "image", {
                      src: o.value[a]
                    }, () => [
                      i("div", ie, [
                        i("img", {
                          src: o.value[a],
                          alt: m(g)(a)
                        }, null, 8, ne)
                      ])
                    ])
                  ]),
                  t[5] || (t[5] = i("div", { class: "t-item-section" }, [
                    i("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, se)) : h("", !0)
              ])), 128)),
              n(e.$slots, "list-prepend", {
                data: o.value,
                toggle: (a) => f(o.value, a)
              }),
              (u(!0), v(q, null, P(E.value, (a) => {
                var l;
                return n(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? m(g)(a[0]),
                  value: typeof a[1] == "boolean" ? L(m(D)(a[0]), a[1]) : C(a[1], a[0])
                }, () => {
                  var r;
                  return [
                    i("div", {
                      class: $(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      i("div", ue, [
                        i("div", de, k(((r = e.labelsMap) == null ? void 0 : r[a[0]]) ?? m(g)(a[0])), 1),
                        typeof a[1] == "boolean" ? (u(), v("div", ve, [
                          i("div", {
                            class: $(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(L(m(D)(a[0]), a[1])), 3)
                        ])) : (u(), v("div", me, k(C(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              n(e.$slots, "list-append", {
                data: o.value,
                toggle: (a) => f(o.value, a)
              })
            ], 2),
            n(e.$slots, "list-after", {
              data: o.value,
              toggle: (a) => f(o.value, a)
            })
          ])) : o.value ? (u(), v("div", ce, [
            n(e.$slots, "image-viewer", {
              close: () => f(o.value, "view"),
              src: o.value.imageUrl
            }, () => {
              var a, l, r, b, N;
              return [
                O(Y, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: t[4] || (t[4] = (ge) => f(o.value, "view"))
                }),
                (a = w.value) != null && a.src || o.value[((l = e.imageProps) == null ? void 0 : l[0]) ?? 0] ? (u(), v("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((r = w.value) == null ? void 0 : r.src) || o.value[((b = e.imageProps) == null ? void 0 : b[0]) ?? 0]),
                  alt: m(g)(((N = w.value) == null ? void 0 : N.alt) || "Document")
                }, null, 8, fe)) : h("", !0)
              ];
            })
          ])) : h("", !0)
        ]),
        n(e.$slots, "loader", { loading: S.value }, () => [
          O(x, { showing: S.value }, null, 8, ["showing"])
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  De as default
};
