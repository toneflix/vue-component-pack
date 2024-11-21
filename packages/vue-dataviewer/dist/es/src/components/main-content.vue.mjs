import { defineComponent as G, mergeModels as A, useModel as y, ref as F, computed as P, watch as H, openBlock as u, createBlock as U, normalizeClass as $, withCtx as M, renderSlot as i, createElementVNode as n, toDisplayString as k, createElementBlock as m, createCommentVNode as h, unref as c, mergeProps as J, createSlots as K, renderList as V, normalizeProps as Q, guardReactiveProps as W, Fragment as q, createVNode as O } from "vue";
/* empty css                   */
import { titleCase as f, slug as C, formSlotNames as X } from "../utils/providers.mjs";
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
}, ge = ["src", "alt"], Ce = /* @__PURE__ */ G({
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
  setup(g, { emit: R }) {
    const D = R, s = g, t = y(g, "data"), p = y(g, "form"), d = y(g, "mode"), S = y(g, "loading"), z = y(g, "saving"), j = y(g, "errors"), w = F(), I = F(!1), T = P(() => {
      var o, a, l;
      const e = {
        view: ((o = s.titles) == null ? void 0 : o.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc, close: "" }[d.value || "view"];
    }), E = P(
      () => t.value ? Object.entries(t.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : d.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), Z = P(() => E.value.map(([e, o]) => ({
      col: 12,
      name: e,
      type: typeof o == "boolean" ? "radio" : "text",
      label: f(C(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), v = (e, o = "view", a) => {
      if (I.value = o !== "close", o === "close")
        return D("toggleDialog", !1);
      if (a)
        d.value = "doc", w.value = { alt: a, src: t.value[a] };
      else {
        t.value = e, d.value = o;
        const l = Object.fromEntries(
          Object.entries(e).map(([r, b]) => [C(r), B(b)])
        );
        D("updateData", l, o);
      }
    }, L = (e, o) => {
      var a, l, r;
      return (a = s.booleanLabels) != null && a[e] ? o ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (r = s.booleanLabels) == null ? void 0 : r[e][1] : o ? "Active" : "Inactive";
    }, B = (e, o) => {
      var a, l, r;
      return o && ((a = s.valuesMap) != null && a[o]) && (e = (l = s.valuesMap) == null ? void 0 : l[o]), o && ((r = s.dateProps) != null && r.includes(o)) ? ae(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(t.value) : Array.isArray(e) && e.every((b) => typeof b == "string") && d.value === "view" ? f(e.join(", ")) : e;
    };
    return H(d, (e) => {
      e !== "doc" && (w.value = void 0);
    }), (e, o) => (u(), U(_, {
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
            e.dialogMode ? (u(), m("button", {
              key: 0,
              class: "close-btn",
              onClick: o[0] || (o[0] = (a) => e.$emit("toggleDialog", !1))
            }, " × ")) : h("", !0)
          ])
        ])
      ]),
      default: M(() => [
        n("div", null, [
          d.value === "edit" && p.value ? (u(), U(c(ee), J({
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto"
          }, e.formProps, {
            modelValue: p.value,
            "onUpdate:modelValue": o[1] || (o[1] = (a) => p.value = a),
            fields: Z.value,
            loading: z.value,
            onCancel: o[2] || (o[2] = (a) => d.value = "view"),
            onSubmit: o[3] || (o[3] = (a) => D("click:save", t.value))
          }), K({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: M(() => [
                i(e.$slots, "form-prepend", {
                  form: p.value,
                  errors: j.value,
                  data: t.value,
                  toggle: (a) => v(t.value, a)
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
                  data: t.value,
                  toggle: (a) => v(t.value, a)
                })
              ]),
              key: "1"
            } : void 0,
            V(c(X), (a) => ({
              name: a,
              fn: M((l) => [
                i(e.$slots, a, Q(W(l)))
              ])
            }))
          ]), 1040, ["modelValue", "fields", "loading"])) : (d.value === "view" || !p.value) && t.value ? (u(), m("div", le, [
            n("div", {
              class: $(["t-list", e.listClass]),
              separator: ""
            }, [
              (u(!0), m(q, null, V(e.imageProps, (a) => i(e.$slots, "img-list-item", {
                toggle: () => v(t.value, "doc", a),
                field: a,
                label: c(f)(a),
                value: String(t.value[a]),
                key: a
              }, () => [
                t.value[a] ? (u(), m("div", {
                  key: 0,
                  class: $(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => v(t.value, "doc", a)
                }, [
                  n("div", re, [
                    i(e.$slots, "image", {
                      src: t.value[a]
                    }, () => [
                      n("div", ie, [
                        n("img", {
                          src: t.value[a],
                          alt: c(f)(a)
                        }, null, 8, ne)
                      ])
                    ])
                  ]),
                  o[5] || (o[5] = n("div", { class: "t-item-section" }, [
                    n("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, se)) : h("", !0)
              ])), 128)),
              i(e.$slots, "list-prepend", {
                data: t.value,
                toggle: (a) => v(t.value, a)
              }),
              (u(!0), m(q, null, V(E.value, (a) => {
                var l;
                return i(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? c(f)(a[0]),
                  value: typeof a[1] == "boolean" ? L(c(C)(a[0]), a[1]) : B(a[1], a[0])
                }, () => {
                  var r;
                  return [
                    n("div", {
                      class: $(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      n("div", ue, [
                        n("div", de, k(((r = e.labelsMap) == null ? void 0 : r[a[0]]) ?? c(f)(a[0])), 1),
                        typeof a[1] == "boolean" ? (u(), m("div", ve, [
                          n("div", {
                            class: $(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(L(c(C)(a[0]), a[1])), 3)
                        ])) : (u(), m("div", me, k(B(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              i(e.$slots, "list-append", {
                data: t.value,
                toggle: (a) => v(t.value, a)
              })
            ], 2),
            i(e.$slots, "list-after", {
              data: t.value,
              toggle: (a) => v(t.value, a)
            })
          ])) : t.value ? (u(), m("div", ce, [
            i(e.$slots, "image-viewer", {
              close: () => v(t.value, "view"),
              src: t.value.imageUrl
            }, () => {
              var a, l, r, b, N;
              return [
                O(Y, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: o[4] || (o[4] = (fe) => v(t.value, "view"))
                }),
                (a = w.value) != null && a.src || t.value[((l = e.imageProps) == null ? void 0 : l[0]) ?? 0] ? (u(), m("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((r = w.value) == null ? void 0 : r.src) || t.value[((b = e.imageProps) == null ? void 0 : b[0]) ?? 0]),
                  alt: c(f)(((N = w.value) == null ? void 0 : N.alt) || "Document")
                }, null, 8, ge)) : h("", !0)
              ];
            })
          ])) : h("", !0)
        ]),
        i(e.$slots, "loader", { loading: S.value }, () => [
          O(x, { showing: S.value }, null, 8, ["showing"])
        ]),
        i(e.$slots, "footer", {
          data: t.value,
          mode: d.value,
          toggle: (a) => v(t.value, a)
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Ce as default
};
