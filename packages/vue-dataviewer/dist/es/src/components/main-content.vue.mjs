import { defineComponent as J, mergeModels as U, useModel as b, ref as q, computed as V, watch as Q, openBlock as d, createBlock as z, normalizeClass as M, withCtx as w, renderSlot as i, createElementVNode as n, toDisplayString as k, createElementBlock as c, createCommentVNode as C, unref as f, mergeProps as W, createSlots as X, renderList as j, normalizeProps as Y, guardReactiveProps as _, Fragment as K, createVNode as R, toValue as x } from "vue";
/* empty css                   */
import { titleCase as p, slug as h, formSlotNames as ee } from "../utils/providers.mjs";
import ae from "./TBtn.vue.mjs";
import oe from "./dialog/TCard.vue.mjs";
import te from "./TInnerLoading.vue.mjs";
import { VueForms as le } from "@toneflix/vue-forms";
import { formatDate as se } from "date-fns";
const ie = { class: "flex items-center justify-between no-wrap" }, re = { class: "card-title" }, ne = { key: 1 }, ue = ["onClick"], de = { class: "t-item-section t-item-section-avatar" }, ve = { class: "t-avatar" }, me = ["src", "alt"], ce = { class: "t-item-section" }, fe = { class: "t-item-label caption" }, ge = {
  key: 0,
  class: "t-item-label"
}, pe = {
  key: 1,
  class: "t-item-label"
}, ye = {
  key: 2,
  class: "image-viewer"
}, be = ["src", "alt"], Ve = /* @__PURE__ */ J({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ U({
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
  emits: /* @__PURE__ */ U(["setData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(g, { expose: I, emit: T }) {
    const D = T, s = g, t = b(g, "data"), v = b(g, "form"), u = b(g, "mode"), E = b(g, "loading"), F = b(g, "saving"), S = b(g, "errors"), $ = q(), Z = q(!1), G = V(() => {
      var o, a, l;
      const e = {
        view: ((o = s.titles) == null ? void 0 : o.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc, close: "" }[u.value || "view"];
    }), L = V(
      () => t.value ? Object.entries(t.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : u.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), H = V(() => L.value.map(([e, o]) => ({
      col: 12,
      name: e,
      type: typeof o == "boolean" ? "radio" : "text",
      label: p(h(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), m = (e, o = "view", a) => {
      if (Z.value = o !== "close", o === "close")
        return D("toggleDialog", !1);
      if (a)
        u.value = "doc", $.value = { alt: a, src: t.value[a] };
      else {
        t.value = e, u.value = o;
        const l = Object.fromEntries(
          Object.entries(e).map(([r, y]) => [h(r), B(y)])
        );
        D("setData", l, o);
      }
      P();
    }, N = (e, o) => {
      var a, l, r;
      return (a = s.booleanLabels) != null && a[e] ? o ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (r = s.booleanLabels) == null ? void 0 : r[e][1] : o ? "Active" : "Inactive";
    }, B = (e, o) => {
      var a, l, r;
      return o && ((a = s.valuesMap) != null && a[o]) && (e = (l = s.valuesMap) == null ? void 0 : l[o]), o && ((r = s.dateProps) != null && r.includes(o)) ? se(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(t.value) : Array.isArray(e) && e.every((y) => typeof y == "string") && u.value === "view" ? p(e.join(", ")) : e;
    };
    Q(u, (e) => {
      e !== "doc" && ($.value = void 0);
    });
    const A = () => {
      P(), D("click:save", v.value, t.value);
    }, P = () => {
      if (v.value) {
        const e = (o) => s.slugifyFormKeys ? h(o, "_") : o;
        v.value = Object.entries(v.value).filter(([o]) => !s.formExclusions.includes(e(o))).reduce((o, [a, l]) => (o[e(a)] = x(l), o), {});
      }
    };
    return I({
      sanitizeForm: P
    }), (e, o) => (d(), z(oe, {
      class: M([
        {
          "t-card-border": e.bordered,
          "t-card-shadow": e.shadow,
          "t-card-rounded": e.rounded
        },
        e.contentClass
      ])
    }, {
      header: w(() => [
        i(e.$slots, "header", {}, () => [
          n("div", ie, [
            n("div", re, k(G.value), 1),
            e.dialogMode ? (d(), c("button", {
              key: 0,
              class: "close-btn",
              onClick: o[0] || (o[0] = (a) => e.$emit("toggleDialog", !1))
            }, " × ")) : C("", !0)
          ])
        ])
      ]),
      default: w(() => [
        n("div", null, [
          u.value === "edit" && v.value ? (d(), z(f(le), W({
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto"
          }, e.formProps, {
            modelValue: v.value,
            "onUpdate:modelValue": o[1] || (o[1] = (a) => v.value = a),
            fields: H.value,
            loading: F.value,
            onCancel: o[2] || (o[2] = (a) => u.value = "view"),
            onSubmit: A
          }), X({ _: 2 }, [
            e.$slots["form-actions"] ? {
              name: "actions",
              fn: w(() => [
                i(e.$slots, "form-actions", {
                  loading: F.value,
                  submit: A,
                  cancel: () => u.value = "view"
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: w(() => [
                i(e.$slots, "form-prepend", {
                  form: v.value,
                  errors: S.value,
                  data: t.value,
                  toggle: (a) => m(t.value, a)
                })
              ]),
              key: "1"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: w(() => [
                i(e.$slots, "form-append", {
                  form: v.value,
                  errors: S.value,
                  data: t.value,
                  toggle: (a) => m(t.value, a)
                })
              ]),
              key: "2"
            } : void 0,
            j(f(ee), (a) => ({
              name: a,
              fn: w((l) => [
                i(e.$slots, a, Y(_(l)))
              ])
            }))
          ]), 1040, ["modelValue", "fields", "loading"])) : (u.value === "view" || !v.value) && t.value ? (d(), c("div", ne, [
            n("div", {
              class: M(["t-list", e.listClass]),
              separator: ""
            }, [
              (d(!0), c(K, null, j(e.imageProps, (a) => i(e.$slots, "img-list-item", {
                toggle: () => m(t.value, "doc", a),
                field: a,
                label: f(p)(a),
                value: String(t.value[a]),
                key: a
              }, () => [
                t.value[a] ? (d(), c("div", {
                  key: 0,
                  class: M(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => m(t.value, "doc", a)
                }, [
                  n("div", de, [
                    i(e.$slots, "image", {
                      src: t.value[a]
                    }, () => [
                      n("div", ve, [
                        n("img", {
                          src: t.value[a],
                          alt: f(p)(a)
                        }, null, 8, me)
                      ])
                    ])
                  ]),
                  o[4] || (o[4] = n("div", { class: "t-item-section" }, [
                    n("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, ue)) : C("", !0)
              ])), 128)),
              i(e.$slots, "list-prepend", {
                data: t.value,
                toggle: (a) => m(t.value, a)
              }),
              (d(!0), c(K, null, j(L.value, (a) => {
                var l;
                return i(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? f(p)(a[0]),
                  value: typeof a[1] == "boolean" ? N(f(h)(a[0]), a[1]) : B(a[1], a[0])
                }, () => {
                  var r;
                  return [
                    n("div", {
                      class: M(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      n("div", ce, [
                        n("div", fe, k(((r = e.labelsMap) == null ? void 0 : r[a[0]]) ?? f(p)(a[0])), 1),
                        typeof a[1] == "boolean" ? (d(), c("div", ge, [
                          n("div", {
                            class: M(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(N(f(h)(a[0]), a[1])), 3)
                        ])) : (d(), c("div", pe, k(B(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              i(e.$slots, "list-append", {
                data: t.value,
                toggle: (a) => m(t.value, a)
              })
            ], 2),
            i(e.$slots, "list-after", {
              data: t.value,
              toggle: (a) => m(t.value, a)
            })
          ])) : t.value ? (d(), c("div", ye, [
            i(e.$slots, "image-viewer", {
              close: () => m(t.value, "view"),
              src: t.value.imageUrl
            }, () => {
              var a, l, r, y, O;
              return [
                R(ae, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: o[3] || (o[3] = (we) => m(t.value, "view"))
                }),
                (a = $.value) != null && a.src || t.value[((l = e.imageProps) == null ? void 0 : l[0]) ?? 0] ? (d(), c("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((r = $.value) == null ? void 0 : r.src) || t.value[((y = e.imageProps) == null ? void 0 : y[0]) ?? 0]),
                  alt: f(p)(((O = $.value) == null ? void 0 : O.alt) || "Document")
                }, null, 8, be)) : C("", !0)
              ];
            })
          ])) : C("", !0)
        ]),
        i(e.$slots, "loader", { loading: E.value }, () => [
          R(te, { showing: E.value }, null, 8, ["showing"])
        ]),
        i(e.$slots, "footer", {
          data: t.value,
          mode: u.value,
          toggle: (a) => m(t.value, a)
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Ve as default
};
