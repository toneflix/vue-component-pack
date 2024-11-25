import { defineComponent as J, mergeModels as A, useModel as y, ref as O, computed as V, watch as Q, openBlock as u, createBlock as U, normalizeClass as $, withCtx as M, renderSlot as i, createElementVNode as n, toDisplayString as k, createElementBlock as c, createCommentVNode as C, unref as f, mergeProps as W, createSlots as X, renderList as j, normalizeProps as Y, guardReactiveProps as _, Fragment as q, createVNode as z, toValue as x } from "vue";
/* empty css                   */
import { titleCase as p, slug as h, formSlotNames as ee } from "../utils/providers.mjs";
import ae from "./TBtn.vue.mjs";
import te from "./dialog/TCard.vue.mjs";
import oe from "./TInnerLoading.vue.mjs";
import { VueForms as le } from "@toneflix/vue-forms";
import { formatDate as se } from "date-fns";
const re = { class: "flex items-center justify-between no-wrap" }, ie = { class: "card-title" }, ne = { key: 1 }, ue = ["onClick"], de = { class: "t-item-section t-item-section-avatar" }, ve = { class: "t-avatar" }, me = ["src", "alt"], ce = { class: "t-item-section" }, fe = { class: "t-item-label caption" }, ge = {
  key: 0,
  class: "t-item-label"
}, pe = {
  key: 1,
  class: "t-item-label"
}, be = {
  key: 2,
  class: "image-viewer"
}, ye = ["src", "alt"], Ve = /* @__PURE__ */ J({
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
    slugifyFormKeys: { type: Boolean },
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
  emits: /* @__PURE__ */ A(["setData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(g, { expose: K, emit: R }) {
    const D = R, s = g, o = y(g, "data"), d = y(g, "form"), v = y(g, "mode"), E = y(g, "loading"), I = y(g, "saving"), F = y(g, "errors"), w = O(), T = O(!1), Z = V(() => {
      var t, a, l;
      const e = {
        view: ((t = s.titles) == null ? void 0 : t.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc, close: "" }[v.value || "view"];
    }), S = V(
      () => o.value ? Object.entries(o.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : v.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), G = V(() => S.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: p(h(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), m = (e, t = "view", a) => {
      if (T.value = t !== "close", t === "close")
        return D("toggleDialog", !1);
      if (a)
        v.value = "doc", w.value = { alt: a, src: o.value[a] };
      else {
        o.value = e, v.value = t;
        const l = Object.fromEntries(
          Object.entries(e).map(([r, b]) => [h(r), B(b)])
        );
        D("setData", l, t);
      }
      P();
    }, L = (e, t) => {
      var a, l, r;
      return (a = s.booleanLabels) != null && a[e] ? t ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (r = s.booleanLabels) == null ? void 0 : r[e][1] : t ? "Active" : "Inactive";
    }, B = (e, t) => {
      var a, l, r;
      return t && ((a = s.valuesMap) != null && a[t]) && (e = (l = s.valuesMap) == null ? void 0 : l[t]), t && ((r = s.dateProps) != null && r.includes(t)) ? se(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(o.value) : Array.isArray(e) && e.every((b) => typeof b == "string") && v.value === "view" ? p(e.join(", ")) : e;
    };
    Q(v, (e) => {
      e !== "doc" && (w.value = void 0);
    });
    const H = () => {
      P(), D("click:save", d.value, o.value);
    }, P = () => {
      if (d.value) {
        const e = (t) => s.slugifyFormKeys ? h(t, "_") : t;
        d.value = Object.entries(d.value).filter(([t]) => !s.formExclusions.includes(e(t))).reduce((t, [a, l]) => (t[e(a)] = x(l), t), {});
      }
    };
    return K({
      sanitizeForm: P
    }), (e, t) => (u(), U(te, {
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
          n("div", re, [
            n("div", ie, k(Z.value), 1),
            e.dialogMode ? (u(), c("button", {
              key: 0,
              class: "close-btn",
              onClick: t[0] || (t[0] = (a) => e.$emit("toggleDialog", !1))
            }, " × ")) : C("", !0)
          ])
        ])
      ]),
      default: M(() => [
        n("div", null, [
          v.value === "edit" && d.value ? (u(), U(f(le), W({
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto"
          }, e.formProps, {
            modelValue: d.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => d.value = a),
            fields: G.value,
            loading: I.value,
            onCancel: t[2] || (t[2] = (a) => v.value = "view"),
            onSubmit: H
          }), X({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: M(() => [
                i(e.$slots, "form-prepend", {
                  form: d.value,
                  errors: F.value,
                  data: o.value,
                  toggle: (a) => m(o.value, a)
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: M(() => [
                i(e.$slots, "form-append", {
                  form: d.value,
                  errors: F.value,
                  data: o.value,
                  toggle: (a) => m(o.value, a)
                })
              ]),
              key: "1"
            } : void 0,
            j(f(ee), (a) => ({
              name: a,
              fn: M((l) => [
                i(e.$slots, a, Y(_(l)))
              ])
            }))
          ]), 1040, ["modelValue", "fields", "loading"])) : (v.value === "view" || !d.value) && o.value ? (u(), c("div", ne, [
            n("div", {
              class: $(["t-list", e.listClass]),
              separator: ""
            }, [
              (u(!0), c(q, null, j(e.imageProps, (a) => i(e.$slots, "img-list-item", {
                toggle: () => m(o.value, "doc", a),
                field: a,
                label: f(p)(a),
                value: String(o.value[a]),
                key: a
              }, () => [
                o.value[a] ? (u(), c("div", {
                  key: 0,
                  class: $(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => m(o.value, "doc", a)
                }, [
                  n("div", de, [
                    i(e.$slots, "image", {
                      src: o.value[a]
                    }, () => [
                      n("div", ve, [
                        n("img", {
                          src: o.value[a],
                          alt: f(p)(a)
                        }, null, 8, me)
                      ])
                    ])
                  ]),
                  t[4] || (t[4] = n("div", { class: "t-item-section" }, [
                    n("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, ue)) : C("", !0)
              ])), 128)),
              i(e.$slots, "list-prepend", {
                data: o.value,
                toggle: (a) => m(o.value, a)
              }),
              (u(!0), c(q, null, j(S.value, (a) => {
                var l;
                return i(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? f(p)(a[0]),
                  value: typeof a[1] == "boolean" ? L(f(h)(a[0]), a[1]) : B(a[1], a[0])
                }, () => {
                  var r;
                  return [
                    n("div", {
                      class: $(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      n("div", ce, [
                        n("div", fe, k(((r = e.labelsMap) == null ? void 0 : r[a[0]]) ?? f(p)(a[0])), 1),
                        typeof a[1] == "boolean" ? (u(), c("div", ge, [
                          n("div", {
                            class: $(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(L(f(h)(a[0]), a[1])), 3)
                        ])) : (u(), c("div", pe, k(B(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              i(e.$slots, "list-append", {
                data: o.value,
                toggle: (a) => m(o.value, a)
              })
            ], 2),
            i(e.$slots, "list-after", {
              data: o.value,
              toggle: (a) => m(o.value, a)
            })
          ])) : o.value ? (u(), c("div", be, [
            i(e.$slots, "image-viewer", {
              close: () => m(o.value, "view"),
              src: o.value.imageUrl
            }, () => {
              var a, l, r, b, N;
              return [
                z(ae, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: t[3] || (t[3] = (we) => m(o.value, "view"))
                }),
                (a = w.value) != null && a.src || o.value[((l = e.imageProps) == null ? void 0 : l[0]) ?? 0] ? (u(), c("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((r = w.value) == null ? void 0 : r.src) || o.value[((b = e.imageProps) == null ? void 0 : b[0]) ?? 0]),
                  alt: f(p)(((N = w.value) == null ? void 0 : N.alt) || "Document")
                }, null, 8, ye)) : C("", !0)
              ];
            })
          ])) : C("", !0)
        ]),
        i(e.$slots, "loader", { loading: E.value }, () => [
          z(oe, { showing: E.value }, null, 8, ["showing"])
        ]),
        i(e.$slots, "footer", {
          data: o.value,
          mode: v.value,
          toggle: (a) => m(o.value, a)
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Ve as default
};
