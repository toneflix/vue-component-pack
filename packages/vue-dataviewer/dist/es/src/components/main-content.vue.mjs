import { defineComponent as G, mergeModels as S, useModel as b, ref as A, computed as F, watch as H, openBlock as n, createBlock as N, normalizeClass as w, withCtx as $, renderSlot as u, createElementVNode as i, toDisplayString as k, createElementBlock as v, createCommentVNode as h, unref as m, createSlots as J, Fragment as U, renderList as q, createVNode as O } from "vue";
/* empty css                   */
import { titleCase as p, slug as D } from "../utils/providers.mjs";
import K from "./TBtn.vue.mjs";
import Q from "./dialog/TCard.vue.mjs";
import W from "./TInnerLoading.vue.mjs";
import { VueForms as X } from "@toneflix/vue-forms";
import { formatDate as Y } from "date-fns";
const Z = { class: "flex items-center justify-between" }, _ = { class: "card-title" }, x = { key: 1 }, ee = ["onClick"], ae = { class: "t-item-section t-item-section-avatar" }, te = { class: "t-avatar" }, le = ["src", "alt"], oe = { class: "t-item-section" }, se = { class: "t-item-label caption" }, ie = {
  key: 0,
  class: "t-item-label"
}, re = {
  key: 1,
  class: "t-item-label"
}, ne = {
  key: 2,
  class: "image-viewer"
}, ue = ["src", "alt"], we = /* @__PURE__ */ G({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ S({
    titles: { default: () => ({ view: "view Data", edit: "Edit Data", doc: "View Docs" }) },
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
  emits: /* @__PURE__ */ S(["updateData", "click:save", "toggleDialog"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(c, { emit: R }) {
    const B = R, l = b(c, "data"), g = b(c, "form"), r = c, d = b(c, "mode"), V = b(c, "loading"), z = b(c, "saving"), P = b(c, "errors"), y = A(), I = A(!1), j = F(
      () => l.value ? Object.entries(l.value).filter((e) => r.imageProps.includes(e[0]) ? !1 : d.value === "edit" ? ![...r.exclusions, ...r.formExclusions].includes(e[0]) : !r.exclusions.includes(e[0])) : []
    ), T = F(() => j.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: p(D(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), M = (e, t = "view", a) => {
      if (I.value = !0, a)
        d.value = "doc", y.value = { alt: a, src: l.value[a] };
      else {
        l.value = e, d.value = t;
        const o = Object.fromEntries(
          Object.entries(e).map(([s, f]) => [D(s), C(f)])
        );
        B("updateData", o, t);
      }
    }, E = (e, t) => {
      var a, o, s;
      return (a = r.booleanLabels) != null && a[e] ? t ? (o = r.booleanLabels) == null ? void 0 : o[e][0] : (s = r.booleanLabels) == null ? void 0 : s[e][1] : t ? "Active" : "Inactive";
    }, C = (e, t) => {
      var a, o, s;
      return t && ((a = r.valuesMap) != null && a[t]) && (e = (o = r.valuesMap) == null ? void 0 : o[t]), t && ((s = r.dateProps) != null && s.includes(t)) ? Y(e, r.dateFormat) : typeof e == "boolean" ? Number(e) : typeof e == "function" ? e(l.value) : Array.isArray(e) && e.every((f) => typeof f == "string") && d.value === "view" ? p(e.join(", ")) : e;
    };
    return H(d, (e) => {
      e !== "doc" && (y.value = void 0);
    }), (e, t) => (n(), N(Q, {
      class: w({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: $(() => [
        u(e.$slots, "header", {}, () => {
          var a, o, s;
          return [
            i("div", Z, [
              i("div", _, k({ view: (a = e.titles) == null ? void 0 : a.view, edit: (o = e.titles) == null ? void 0 : o.edit, doc: (s = e.titles) == null ? void 0 : s.doc }[d.value || "view"]), 1),
              e.dialogMode ? (n(), v("button", {
                key: 0,
                class: "close-btn",
                onClick: t[0] || (t[0] = (f) => e.$emit("toggleDialog", !1))
              }, " × ")) : h("", !0)
            ])
          ];
        })
      ]),
      default: $(() => [
        i("div", null, [
          d.value === "edit" && g.value ? (n(), N(m(X), {
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto",
            fields: T.value,
            loading: z.value,
            modelValue: g.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => g.value = a),
            onCancel: t[2] || (t[2] = (a) => d.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => B("click:save", l.value))
          }, J({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: $(() => [
                u(e.$slots, "form-prepend", {
                  form: g.value,
                  errors: P.value,
                  data: l.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: $(() => [
                u(e.$slots, "form-append", {
                  form: g.value,
                  errors: P.value,
                  data: l.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : (d.value === "view" || !g.value) && l.value ? (n(), v("div", x, [
            i("div", {
              class: w(["t-list", e.listClass]),
              separator: ""
            }, [
              (n(!0), v(U, null, q(e.imageProps, (a) => u(e.$slots, "img-list-item", {
                toggle: () => M(l.value, "doc", a),
                field: a,
                label: m(p)(a),
                value: String(l.value[a]),
                key: a
              }, () => [
                l.value[a] ? (n(), v("div", {
                  key: 0,
                  class: w(["t-item clickable", { "t-item-separator": e.separator }]),
                  onClick: (o) => M(l.value, "doc", a)
                }, [
                  i("div", ae, [
                    u(e.$slots, "image", {
                      src: l.value[a]
                    }, () => [
                      i("div", te, [
                        i("img", {
                          src: l.value[a],
                          alt: m(p)(a)
                        }, null, 8, le)
                      ])
                    ])
                  ]),
                  t[5] || (t[5] = i("div", { class: "t-item-section" }, [
                    i("div", { class: "t-item-label" }, "Click to expand")
                  ], -1))
                ], 10, ee)) : h("", !0)
              ])), 128)),
              u(e.$slots, "list-prepend", { data: l.value }),
              (n(!0), v(U, null, q(j.value, (a) => {
                var o;
                return u(e.$slots, "list-item", {
                  key: a[0],
                  field: a[0],
                  label: ((o = e.labelsMap) == null ? void 0 : o[a[0]]) ?? m(p)(a[0]),
                  value: typeof a[1] == "boolean" ? E(m(D)(a[0]), a[1]) : C(a[1], a[0])
                }, () => {
                  var s;
                  return [
                    i("div", {
                      class: w(["t-item", { "t-item-separator": e.separator }])
                    }, [
                      i("div", oe, [
                        i("div", se, k(((s = e.labelsMap) == null ? void 0 : s[a[0]]) ?? m(p)(a[0])), 1),
                        typeof a[1] == "boolean" ? (n(), v("div", ie, [
                          i("div", {
                            class: w(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                          }, k(E(m(D)(a[0]), a[1])), 3)
                        ])) : (n(), v("div", re, k(C(a[1], a[0])), 1))
                      ])
                    ], 2)
                  ];
                });
              }), 128)),
              u(e.$slots, "list-append", { data: l.value })
            ], 2),
            u(e.$slots, "list-after", { data: l.value })
          ])) : l.value ? (n(), v("div", ne, [
            u(e.$slots, "image-viewer", {
              close: () => M(l.value, "view"),
              src: l.value.imageUrl
            }, () => {
              var a, o, s, f, L;
              return [
                O(K, {
                  dense: "",
                  color: "primary",
                  label: "Return",
                  icon: "fas fa-arrow-left",
                  onClick: t[4] || (t[4] = (de) => M(l.value, "view"))
                }),
                (a = y.value) != null && a.src || l.value[((o = e.imageProps) == null ? void 0 : o[0]) ?? 0] ? (n(), v("img", {
                  key: 0,
                  style: { width: "100%" },
                  src: String(((s = y.value) == null ? void 0 : s.src) || l.value[((f = e.imageProps) == null ? void 0 : f[0]) ?? 0]),
                  alt: m(p)(((L = y.value) == null ? void 0 : L.alt) || "Document")
                }, null, 8, ue)) : h("", !0)
              ];
            })
          ])) : h("", !0)
        ]),
        u(e.$slots, "loader", { loading: V.value }, () => [
          O(W, { showing: V.value }, null, 8, ["showing"])
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  we as default
};
