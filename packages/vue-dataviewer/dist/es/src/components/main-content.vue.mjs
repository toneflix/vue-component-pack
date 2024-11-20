import { defineComponent as F, mergeModels as V, useModel as c, ref as R, computed as j, openBlock as l, createBlock as U, normalizeClass as f, withCtx as g, renderSlot as p, createElementVNode as s, toDisplayString as b, createElementBlock as i, createCommentVNode as w, unref as y, createSlots as z, Fragment as I, renderList as T, createVNode as E } from "vue";
/* empty css                   */
import { titleCase as k, slug as D } from "../utils/providers.mjs";
import G from "./TBtn.vue.mjs";
import H from "./dialog/TCard.vue.mjs";
import J from "./TInnerLoading.vue.mjs";
import { VueForms as K } from "@toneflix/vue-forms";
const P = { class: "flex items-center justify-between" }, Q = { class: "card-title" }, W = { key: 1 }, X = {
  class: "t-list",
  separator: ""
}, Z = { class: "t-item-section avatar" }, _ = { class: "t-avatar" }, x = ["src"], ee = { class: "t-item-section" }, te = { class: "t-item-label caption" }, ae = {
  key: 0,
  class: "t-item-label"
}, oe = {
  key: 1,
  class: "t-item-label"
}, se = {
  key: 2,
  class: "img-preview"
}, le = ["src"], pe = /* @__PURE__ */ F({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ V({
    titles: { default: () => ({ view: "view Data", edit: "Edit Data", doc: "View Docs" }) },
    dialogMode: { type: Boolean },
    exclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    formExclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    booleanLabels: {},
    rounded: { type: Boolean },
    bordered: { type: Boolean },
    separator: { type: Boolean },
    shadow: { type: Boolean }
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
  setup(r, { emit: L }) {
    const S = import("dayjs"), M = L, o = c(r, "data"), v = c(r, "form"), m = r, n = c(r, "mode"), q = c(r, "loading"), N = c(r, "saving"), h = c(r, "errors"), $ = R(!1), C = j(
      () => o.value ? Object.entries(o.value).filter((e) => n.value === "edit" ? ![...m.exclusions, ...m.formExclusions].includes(e[0]) : !m.exclusions.includes(e[0])) : []
    ), Y = j(() => C.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: k(D(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), A = (e, t = "view") => {
      o.value = e, n.value = t, $.value = !0;
      const a = Object.fromEntries(
        Object.entries(e).map(([d, u]) => [D(d), B(u)])
      );
      M("updateData", a, t);
    }, O = (e, t) => {
      var a, d, u;
      return (a = m.booleanLabels) != null && a[e] ? t ? (d = m.booleanLabels) == null ? void 0 : d[e][0] : (u = m.booleanLabels) == null ? void 0 : u[e][1] : t ? "Active" : "Inactive";
    }, B = async (e, t) => t && t.includes("edAt", t.length - 4) ? (await S)(String(e)).format("Do MMM, YYYY h:MM A") : typeof e == "boolean" ? Number(e) : Array.isArray(e) && e.every((a) => typeof a == "string") && n.value === "view" ? k(e.join(", ")) : e;
    return (e, t) => (l(), U(H, {
      class: f({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: g(() => [
        p(e.$slots, "header", {}, () => {
          var a, d, u;
          return [
            s("div", P, [
              s("div", Q, b({ view: (a = e.titles) == null ? void 0 : a.view, edit: (d = e.titles) == null ? void 0 : d.edit, doc: (u = e.titles) == null ? void 0 : u.doc }[n.value || "view"]), 1),
              e.dialogMode ? (l(), i("button", {
                key: 0,
                class: "close-btn",
                onClick: t[0] || (t[0] = (ie) => e.$emit("toggleDialog", $.value))
              }, " × ")) : w("", !0)
            ])
          ];
        })
      ]),
      default: g(() => [
        s("div", null, [
          n.value === "edit" && v.value ? (l(), U(y(K), {
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto",
            fields: Y.value,
            loading: N.value,
            modelValue: v.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => v.value = a),
            onCancel: t[2] || (t[2] = (a) => n.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => M("click:save", o.value))
          }, z({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: g(() => [
                p(e.$slots, "form-prepend", {
                  form: v.value,
                  errors: h.value,
                  viewData: o.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: g(() => [
                p(e.$slots, "form-append", {
                  form: v.value,
                  errors: h.value,
                  viewData: o.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : (n.value === "view" || !v.value) && o.value ? (l(), i("div", W, [
            s("div", X, [
              o.value.imageUrl ? (l(), i("div", {
                key: 0,
                class: f(["q-my-sm t-item clickable", { "t-item-separator": e.separator }]),
                onClick: t[4] || (t[4] = (a) => A(o.value, "doc"))
              }, [
                s("div", Z, [
                  s("div", _, [
                    s("img", {
                      src: o.value.imageUrl,
                      alt: "Document"
                    }, null, 8, x)
                  ])
                ]),
                t[6] || (t[6] = s("div", { class: "t-item-section" }, [
                  s("div", { class: "t-item-label" }, "Click to expand")
                ], -1))
              ], 2)) : w("", !0),
              (l(!0), i(I, null, T(C.value, (a) => (l(), i("div", {
                class: f(["q-my-sm t-item", { "t-item-separator": e.separator }]),
                key: a[0]
              }, [
                s("div", ee, [
                  s("div", te, b(y(k)(y(D)(a[0]))), 1),
                  typeof a[1] == "boolean" ? (l(), i("div", ae, [
                    s("div", {
                      class: f(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                    }, b(O(y(D)(a[0]), a[1])), 3)
                  ])) : (l(), i("div", oe, b(B(a[1], a[0])), 1))
                ])
              ], 2))), 128)),
              p(e.$slots, "list-append", { viewData: o.value })
            ]),
            p(e.$slots, "list-after", { viewData: o.value })
          ])) : o.value ? (l(), i("div", se, [
            E(G, {
              dense: "",
              color: "primary",
              label: "Return",
              icon: "fas fa-arrow-left",
              onClick: t[5] || (t[5] = (a) => A(o.value, "view"))
            }),
            o.value.imageUrl ? (l(), i("img", {
              key: 0,
              style: { width: "100%" },
              src: o.value.imageUrl,
              alt: "Document"
            }, null, 8, le)) : w("", !0)
          ])) : w("", !0)
        ]),
        E(J, { showing: q.value }, null, 8, ["showing"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  pe as default
};
