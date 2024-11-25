import { defineComponent as Z, mergeModels as N, useModel as b, ref as A, computed as P, watch as G, onBeforeMount as H, toValue as J, openBlock as u, createBlock as O, normalizeClass as $, withCtx as M, renderSlot as i, createElementVNode as n, toDisplayString as k, createElementBlock as c, createCommentVNode as C, unref as f, mergeProps as Q, createSlots as W, renderList as V, normalizeProps as X, guardReactiveProps as Y, Fragment as U, createVNode as q } from "vue";
/* empty css                   */
import { titleCase as p, slug as h, formSlotNames as _ } from "../utils/providers.mjs";
import x from "./TBtn.vue.mjs";
import ee from "./dialog/TCard.vue.mjs";
import ae from "./TInnerLoading.vue.mjs";
import { VueForms as te } from "@toneflix/vue-forms";
import { formatDate as oe } from "date-fns";
const le = { class: "flex items-center justify-between no-wrap" }, se = { class: "card-title" }, re = { key: 1 }, ie = ["onClick"], ne = { class: "t-item-section t-item-section-avatar" }, ue = { class: "t-avatar" }, de = ["src", "alt"], ve = { class: "t-item-section" }, me = { class: "t-item-label caption" }, ce = {
  key: 0,
  class: "t-item-label"
}, fe = {
  key: 1,
  class: "t-item-label"
}, ge = {
  key: 2,
  class: "image-viewer"
}, pe = ["src", "alt"], Be = /* @__PURE__ */ Z({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ N({
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
  emits: /* @__PURE__ */ N(["updateData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(g, { emit: K }) {
    const D = K, s = g, o = b(g, "data"), m = b(g, "form"), d = b(g, "mode"), j = b(g, "loading"), R = b(g, "saving"), E = b(g, "errors"), w = A(), z = A(!1), I = P(() => {
      var t, a, l;
      const e = {
        view: ((t = s.titles) == null ? void 0 : t.view) || "view Data",
        edit: ((a = s.titles) == null ? void 0 : a.edit) || "Edit Data",
        doc: ((l = s.titles) == null ? void 0 : l.doc) || "View Docs"
      };
      return { view: e == null ? void 0 : e.view, edit: e == null ? void 0 : e.edit, doc: e == null ? void 0 : e.doc, close: "" }[d.value || "view"];
    }), S = P(
      () => o.value ? Object.entries(o.value).filter((e) => s.imageProps.includes(e[0]) ? !1 : d.value === "edit" ? ![...s.exclusions, ...s.formExclusions].includes(e[0]) : !s.exclusions.includes(e[0])) : []
    ), T = P(() => S.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: p(h(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), v = (e, t = "view", a) => {
      if (z.value = t !== "close", t === "close")
        return D("toggleDialog", !1);
      if (a)
        d.value = "doc", w.value = { alt: a, src: o.value[a] };
      else {
        o.value = e, d.value = t;
        const l = Object.fromEntries(
          Object.entries(e).map(([r, y]) => [h(r), B(y)])
        );
        D("updateData", l, t);
      }
    }, F = (e, t) => {
      var a, l, r;
      return (a = s.booleanLabels) != null && a[e] ? t ? (l = s.booleanLabels) == null ? void 0 : l[e][0] : (r = s.booleanLabels) == null ? void 0 : r[e][1] : t ? "Active" : "Inactive";
    }, B = (e, t) => {
      var a, l, r;
      return t && ((a = s.valuesMap) != null && a[t]) && (e = (l = s.valuesMap) == null ? void 0 : l[t]), t && ((r = s.dateProps) != null && r.includes(t)) ? oe(e, s.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(o.value) : Array.isArray(e) && e.every((y) => typeof y == "string") && d.value === "view" ? p(e.join(", ")) : e;
    };
    return G(d, (e) => {
      e !== "doc" && (w.value = void 0);
    }), H(() => {
      if (m.value) {
        const e = (t) => s.slugifyFormKeys ? h(t, "_") : t;
        m.value = Object.entries(m.value).filter(([t]) => !s.formExclusions.includes(e(t))).reduce((t, [a, l]) => (t[e(a)] = J(l), t), {});
      }
    }), (e, t) => (u(), O(ee, {
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
          n("div", le, [
            n("div", se, k(I.value), 1),
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
          d.value === "edit" && m.value ? (u(), O(f(te), Q({
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto"
          }, e.formProps, {
            modelValue: m.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => m.value = a),
            fields: T.value,
            loading: R.value,
            onCancel: t[2] || (t[2] = (a) => d.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => D("click:save", o.value))
          }), W({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: M(() => [
                i(e.$slots, "form-prepend", {
                  form: m.value,
                  errors: E.value,
                  data: o.value,
                  toggle: (a) => v(o.value, a)
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: M(() => [
                i(e.$slots, "form-append", {
                  form: m.value,
                  errors: E.value,
                  data: o.value,
                  toggle: (a) => v(o.value, a)
                })
              ]),
              key: "1"
            } : void 0,
            V(f(_), (a) => ({
              name: a,
              fn: M((l) => [
                i(e.$slots, a, X(Y(l)))
              ])
            }))
          ]), 1040, ["modelValue", "fields", "loading"])) : (d.value === "view" || !m.value) && o.value ? (u(), c("div", re, [
            n("div", {
              class: $(["t-list", e.listClass]),
              separator: ""
            }, [
              (u(!0), c(U, null, V(e.imageProps, (a) => i(e.$slots, "img-list-item", {
                toggle: () => v(o.value, "doc", a),
                field: a,
                label: f(p)(a),
                value: String(o.value[a]),
                key: a
              }, () => [
                o.value[a] ? (u(), c("div", {
                  key: 0,
                  class: $(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (l) => v(o.value, "doc", a)
                }, [
                  n("div", ne, [
                    i(e.$slots, "image", {
                      src: o.value[a]
                    }, () => [
                      n("div", ue, [
                        n("img", {
                          src: o.value[a],
                          alt: f(p)(a)
                        }, null, 8, de)
                      ])
                    ])
                  ]),
                  t[5] || (t[5] = n("div", { class: "t-item-section" }, [
                    n("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, ie)) : C("", !0)
              ])), 128)),
              i(e.$slots, "list-prepend", {
                data: o.value,
                toggle: (a) => v(o.value, a)
              }),
              (u(!0), c(U, null, V(S.value, (a) => {
                var l;
                return i(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((l = e.labelsMap) == null ? void 0 : l[a[0]]) ?? f(p)(a[0]),
                  value: typeof a[1] == "boolean" ? F(f(h)(a[0]), a[1]) : B(a[1], a[0])
                }, () => {
                  var r;
                  return [
                    n("div", {
                      class: $(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      n("div", ve, [
                        n("div", me, k(((r = e.labelsMap) == null ? void 0 : r[a[0]]) ?? f(p)(a[0])), 1),
                        typeof a[1] == "boolean" ? (u(), c("div", ce, [
                          n("div", {
                            class: $(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(F(f(h)(a[0]), a[1])), 3)
                        ])) : (u(), c("div", fe, k(B(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              i(e.$slots, "list-append", {
                data: o.value,
                toggle: (a) => v(o.value, a)
              })
            ], 2),
            i(e.$slots, "list-after", {
              data: o.value,
              toggle: (a) => v(o.value, a)
            })
          ])) : o.value ? (u(), c("div", ge, [
            i(e.$slots, "image-viewer", {
              close: () => v(o.value, "view"),
              src: o.value.imageUrl
            }, () => {
              var a, l, r, y, L;
              return [
                q(x, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: t[4] || (t[4] = (ye) => v(o.value, "view"))
                }),
                (a = w.value) != null && a.src || o.value[((l = e.imageProps) == null ? void 0 : l[0]) ?? 0] ? (u(), c("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((r = w.value) == null ? void 0 : r.src) || o.value[((y = e.imageProps) == null ? void 0 : y[0]) ?? 0]),
                  alt: f(p)(((L = w.value) == null ? void 0 : L.alt) || "Document")
                }, null, 8, pe)) : C("", !0)
              ];
            })
          ])) : C("", !0)
        ]),
        i(e.$slots, "loader", { loading: j.value }, () => [
          q(ae, { showing: j.value }, null, 8, ["showing"])
        ]),
        i(e.$slots, "footer", {
          data: o.value,
          mode: d.value,
          toggle: (a) => v(o.value, a)
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Be as default
};
