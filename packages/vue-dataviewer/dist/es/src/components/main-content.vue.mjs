import { defineComponent as G, mergeModels as A, useModel as y, ref as F, computed as B, watch as H, openBlock as u, createBlock as U, normalizeClass as $, withCtx as M, renderSlot as i, createElementVNode as n, toDisplayString as k, createElementBlock as v, createCommentVNode as h, unref as m, mergeProps as J, createSlots as K, renderList as P, normalizeProps as Q, guardReactiveProps as W, Fragment as q, createVNode as O } from "vue";
/* empty css                   */
import { titleCase as g, slug as C, formSlotNames as X } from "../utils/providers.mjs";
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
}, fe = ["src", "alt"], Ce = /* @__PURE__ */ G({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ A({
    dialogMode: { type: Boolean },
    listClass: {},
    dialogClass: {},
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
    contentClass: {},
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
  setup(f, { emit: R }) {
    const V = R, s = f, o = y(f, "data"), p = y(f, "form"), d = y(f, "mode"), S = y(f, "loading"), z = y(f, "saving"), j = y(f, "errors"), w = F(), I = F(!1), T = B(() => {
      var t, a, l;
      const e = {
        view: ((t = s.titles) == null ? void 0 : t.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc, close: "" }[d.value || "view"];
    }), E = B(
      () => o.value ? Object.entries(o.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : d.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), Z = B(() => E.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: g(C(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), c = (e, t = "view", a) => {
      if (I.value = t !== "close", a)
        d.value = "doc", w.value = { alt: a, src: o.value[a] };
      else {
        o.value = e, d.value = t;
        const l = Object.fromEntries(
          Object.entries(e).map(([r, b]) => [C(r), D(b)])
        );
        V("updateData", l, t);
      }
    }, L = (e, t) => {
      var a, l, r;
      return (a = s.booleanLabels) != null && a[e] ? t ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (r = s.booleanLabels) == null ? void 0 : r[e][1] : t ? "Active" : "Inactive";
    }, D = (e, t) => {
      var a, l, r;
      return t && ((a = s.valuesMap) != null && a[t]) && (e = (l = s.valuesMap) == null ? void 0 : l[t]), t && ((r = s.dateProps) != null && r.includes(t)) ? ae(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(o.value) : Array.isArray(e) && e.every((b) => typeof b == "string") && d.value === "view" ? g(e.join(", ")) : e;
    };
    return H(d, (e) => {
      e !== "doc" && (w.value = void 0);
    }), (e, t) => (u(), U(_, {
      class: $([
        {
          "t-card-border": e.bordered,
          "t-card-shadow": e.shadow,
          "t-card-rounded": e.rounded
        },
        e.contentClass
      ])
    }, {
      header: M(() => [
        i(e.$slots, "header", {}, () => [
          n("div", te, [
            n("div", oe, k(T.value), 1),
            e.dialogMode ? (u(), v("button", {
              key: 0,
              class: "close-btn",
              onClick: t[0] || (t[0] = (a) => e.$emit("toggleDialog", !1))
            }, " × ")) : h("", !0)
          ])
        ])
      ]),
      default: M(() => [
        n("div", null, [
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
                i(e.$slots, "form-prepend", {
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
                i(e.$slots, "form-append", {
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
                i(e.$slots, a, Q(W(l)))
              ])
            }))
          ]), 1040, ["modelValue", "fields", "loading"])) : (d.value === "view" || !p.value) && o.value ? (u(), v("div", le, [
            n("div", {
              class: $(["t-list", e.listClass]),
              separator: ""
            }, [
              (u(!0), v(q, null, P(e.imageProps, (a) => i(e.$slots, "img-list-item", {
                toggle: () => c(o.value, "doc", a),
                field: a,
                label: m(g)(a),
                value: String(o.value[a]),
                key: a
              }, () => [
                o.value[a] ? (u(), v("div", {
                  key: 0,
                  class: $(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => c(o.value, "doc", a)
                }, [
                  n("div", re, [
                    i(e.$slots, "image", {
                      src: o.value[a]
                    }, () => [
                      n("div", ie, [
                        n("img", {
                          src: o.value[a],
                          alt: m(g)(a)
                        }, null, 8, ne)
                      ])
                    ])
                  ]),
                  t[5] || (t[5] = n("div", { class: "t-item-section" }, [
                    n("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, se)) : h("", !0)
              ])), 128)),
              i(e.$slots, "list-prepend", {
                data: o.value,
                toggle: (a) => c(o.value, a)
              }),
              (u(!0), v(q, null, P(E.value, (a) => {
                var l;
                return i(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? m(g)(a[0]),
                  value: typeof a[1] == "boolean" ? L(m(C)(a[0]), a[1]) : D(a[1], a[0])
                }, () => {
                  var r;
                  return [
                    n("div", {
                      class: $(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      n("div", ue, [
                        n("div", de, k(((r = e.labelsMap) == null ? void 0 : r[a[0]]) ?? m(g)(a[0])), 1),
                        typeof a[1] == "boolean" ? (u(), v("div", ve, [
                          n("div", {
                            class: $(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(L(m(C)(a[0]), a[1])), 3)
                        ])) : (u(), v("div", me, k(D(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              i(e.$slots, "list-append", {
                data: o.value,
                toggle: (a) => c(o.value, a)
              })
            ], 2),
            i(e.$slots, "list-after", {
              data: o.value,
              toggle: (a) => c(o.value, a)
            })
          ])) : o.value ? (u(), v("div", ce, [
            i(e.$slots, "image-viewer", {
              close: () => c(o.value, "view"),
              src: o.value.imageUrl
            }, () => {
              var a, l, r, b, N;
              return [
                O(Y, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: t[4] || (t[4] = (ge) => c(o.value, "view"))
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
        i(e.$slots, "loader", { loading: S.value }, () => [
          O(x, { showing: S.value }, null, 8, ["showing"])
        ]),
        i(e.$slots, "footer", {
          data: o.value,
          mode: d.value,
          toggle: (a) => c(o.value, a)
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Ce as default
};
