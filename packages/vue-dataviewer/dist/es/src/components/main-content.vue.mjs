import { defineComponent as O, mergeModels as V, useModel as u, ref as F, computed as j, openBlock as l, createBlock as U, normalizeClass as p, withCtx as g, renderSlot as m, createElementVNode as s, toDisplayString as b, createElementBlock as i, createCommentVNode as w, unref as y, createSlots as R, Fragment as z, renderList as I, createVNode as E } from "vue";
import T from "dayjs";
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
}, le = ["src"], ce = /* @__PURE__ */ O({
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
      default: {}
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
    const M = L, o = u(r, "data"), v = u(r, "form"), d = r, n = u(r, "mode"), S = u(r, "loading"), N = u(r, "saving"), h = u(r, "errors"), $ = F(!1), C = j(
      () => o.value ? Object.entries(o.value).filter((e) => n.value === "edit" ? ![...d.exclusions, ...d.formExclusions].includes(e[0]) : !d.exclusions.includes(e[0])) : []
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
        Object.entries(e).map(([c, f]) => [D(c), B(f)])
      );
      M("updateData", a, t);
    }, q = (e, t) => {
      var a, c, f;
      return (a = d.booleanLabels) != null && a[e] ? t ? (c = d.booleanLabels) == null ? void 0 : c[e][0] : (f = d.booleanLabels) == null ? void 0 : f[e][1] : t ? "Active" : "Inactive";
    }, B = (e, t) => t && t.includes("edAt", t.length - 4) ? T(String(e)).format("Do MMM, YYYY h:MM A") : typeof e == "boolean" ? Number(e) : Array.isArray(e) && e.every((a) => typeof a == "string") && n.value === "view" ? k(e.join(", ")) : e;
    return (e, t) => (l(), U(H, {
      class: p({ "t-card-border": e.bordered, "t-card-shadow": e.shadow, "t-card-rounded": e.rounded })
    }, {
      header: g(() => [
        m(e.$slots, "header", {}, () => [
          s("div", P, [
            s("div", Q, b({ view: e.titles.view, edit: e.titles.edit, doc: e.titles.doc }[n.value || "view"]), 1),
            e.dialogMode ? (l(), i("button", {
              key: 0,
              class: "close-btn",
              onClick: t[0] || (t[0] = (a) => e.$emit("toggleDialog", $.value))
            }, " × ")) : w("", !0)
          ])
        ])
      ]),
      default: g(() => [
        s("div", null, [
          n.value === "edit" ? (l(), U(y(K), {
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
          }, R({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: g(() => [
                m(e.$slots, "form-prepend", {
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
                m(e.$slots, "form-append", {
                  form: v.value,
                  errors: h.value,
                  viewData: o.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : n.value === "view" && o.value ? (l(), i("div", W, [
            s("div", X, [
              o.value.imageUrl ? (l(), i("div", {
                key: 0,
                class: p(["q-my-sm t-item clickable", { "t-item-separator": e.separator }]),
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
              (l(!0), i(z, null, I(C.value, (a) => (l(), i("div", {
                class: p(["q-my-sm t-item", { "t-item-separator": e.separator }]),
                key: a[0]
              }, [
                s("div", ee, [
                  s("div", te, b(y(k)(y(D)(a[0]))), 1),
                  typeof a[1] == "boolean" ? (l(), i("div", ae, [
                    s("div", {
                      class: p(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                    }, b(q(y(D)(a[0]), a[1])), 3)
                  ])) : (l(), i("div", oe, b(B(a[1], a[0])), 1))
                ])
              ], 2))), 128)),
              m(e.$slots, "list-append", { viewData: o.value })
            ]),
            m(e.$slots, "list-after", { viewData: o.value })
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
        E(J, { showing: S.value }, null, 8, ["showing"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  ce as default
};
