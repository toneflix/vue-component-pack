import { defineComponent as q, mergeModels as V, useModel as u, ref as O, computed as j, openBlock as s, createBlock as U, withCtx as p, renderSlot as v, createElementVNode as l, toDisplayString as g, createElementBlock as i, createCommentVNode as b, unref as w, createSlots as F, Fragment as R, renderList as _, normalizeClass as z, createVNode as B } from "vue";
import I from "dayjs";
import { titleCase as D, slug as y } from "../utils/providers.mjs";
import T from "./TBtn.vue.mjs";
import x from "./dialog/TCard.vue.mjs";
import G from "./TInnerLoading.vue.mjs";
import { VueForms as H } from "@toneflix/vue-forms";
const J = { class: "flex items-center justify-between" }, K = { class: "card-title" }, P = { key: 1 }, Q = {
  class: "t-list",
  separator: ""
}, W = { class: "t-item-section avatar" }, X = { class: "t-avatar" }, Z = ["src"], ee = { class: "t-item-section" }, te = { class: "t-item-label caption" }, ae = {
  key: 0,
  class: "t-item-label"
}, oe = {
  key: 1,
  class: "t-item-label"
}, le = {
  key: 2,
  class: "img-preview"
}, se = ["src"], ce = /* @__PURE__ */ q({
  name: "MainContent",
  __name: "main-content",
  props: /* @__PURE__ */ V({
    titles: { default: () => ({ view: "view Data", edit: "Edit Data", doc: "View Docs" }) },
    dialogMode: { type: Boolean },
    exclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    formExclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    booleanLabels: {}
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
  setup(r, { emit: E }) {
    const k = E, o = u(r, "data"), m = u(r, "form"), d = r, n = u(r, "mode"), L = u(r, "loading"), S = u(r, "saving"), M = u(r, "errors"), $ = O(!1), h = j(
      () => o.value ? Object.entries(o.value).filter((e) => n.value === "edit" ? ![...d.exclusions, ...d.formExclusions].includes(e[0]) : !d.exclusions.includes(e[0])) : []
    ), N = j(() => h.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: D(y(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), C = (e, t = "view") => {
      o.value = e, n.value = t, $.value = !0;
      const a = Object.fromEntries(
        Object.entries(e).map(([c, f]) => [y(c), A(f)])
      );
      k("updateData", a, t);
    }, Y = (e, t) => {
      var a, c, f;
      return (a = d.booleanLabels) != null && a[e] ? t ? (c = d.booleanLabels) == null ? void 0 : c[e][0] : (f = d.booleanLabels) == null ? void 0 : f[e][1] : t ? "Active" : "Inactive";
    }, A = (e, t) => t && t.includes("edAt", t.length - 4) ? I(String(e)).format("Do MMM, YYYY h:MM A") : typeof e == "boolean" ? Number(e) : Array.isArray(e) && e.every((a) => typeof a == "string") && n.value === "view" ? D(e.join(", ")) : e;
    return (e, t) => (s(), U(x, null, {
      header: p(() => [
        v(e.$slots, "header", {}, () => [
          l("div", J, [
            l("div", K, g({ view: e.titles.view, edit: e.titles.edit, doc: e.titles.doc }[n.value || "view"]), 1),
            e.dialogMode ? (s(), i("button", {
              key: 0,
              class: "close-btn",
              onClick: t[0] || (t[0] = (a) => e.$emit("toggleDialog", $.value))
            }, " × ")) : b("", !0)
          ])
        ])
      ]),
      default: p(() => [
        l("div", null, [
          n.value === "edit" ? (s(), U(w(H), {
            key: 0,
            rounded: "",
            "show-group-labels": "",
            class: "p-4 m-4 mx-auto",
            fields: N.value,
            loading: S.value,
            modelValue: m.value,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => m.value = a),
            onCancel: t[2] || (t[2] = (a) => n.value = "view"),
            onSubmit: t[3] || (t[3] = (a) => k("click:save", o.value))
          }, F({ _: 2 }, [
            e.$slots["form-prepend"] ? {
              name: "prepend",
              fn: p(() => [
                v(e.$slots, "form-prepend", {
                  form: m.value,
                  errors: M.value,
                  viewData: o.value
                })
              ]),
              key: "0"
            } : void 0,
            e.$slots["form-append"] ? {
              name: "default",
              fn: p(() => [
                v(e.$slots, "form-append", {
                  form: m.value,
                  errors: M.value,
                  viewData: o.value
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["fields", "loading", "modelValue"])) : n.value === "view" && o.value ? (s(), i("div", P, [
            l("div", Q, [
              o.value.imageUrl ? (s(), i("div", {
                key: 0,
                class: "q-my-sm t-item clickable",
                onClick: t[4] || (t[4] = (a) => C(o.value, "doc"))
              }, [
                l("div", W, [
                  l("div", X, [
                    l("img", {
                      src: o.value.imageUrl,
                      alt: "Document"
                    }, null, 8, Z)
                  ])
                ]),
                t[6] || (t[6] = l("div", { class: "t-item-section" }, [
                  l("div", { class: "t-item-label" }, "Click to expand")
                ], -1))
              ])) : b("", !0),
              (s(!0), i(R, null, _(h.value, (a) => (s(), i("div", {
                class: "q-my-sm t-item",
                key: a[0]
              }, [
                l("div", ee, [
                  l("div", te, g(w(D)(w(y)(a[0]))), 1),
                  typeof a[1] == "boolean" ? (s(), i("div", ae, [
                    l("div", {
                      class: z(["t-chip t-chip-square", a[1] ? "t-chip-green" : "t-chip-red"])
                    }, g(Y(w(y)(a[0]), a[1])), 3)
                  ])) : (s(), i("div", oe, g(A(a[1], a[0])), 1))
                ])
              ]))), 128)),
              v(e.$slots, "list-append", { viewData: o.value })
            ]),
            v(e.$slots, "list-after", { viewData: o.value })
          ])) : o.value ? (s(), i("div", le, [
            B(T, {
              dense: "",
              color: "primary",
              label: "Return",
              icon: "fas fa-arrow-left",
              onClick: t[5] || (t[5] = (a) => C(o.value, "view"))
            }),
            o.value.imageUrl ? (s(), i("img", {
              key: 0,
              style: { width: "100%" },
              src: o.value.imageUrl,
              alt: "Document"
            }, null, 8, se)) : b("", !0)
          ])) : b("", !0)
        ]),
        B(G, { showing: L.value }, null, 8, ["showing"])
      ]),
      _: 3
    }));
  }
});
export {
  ce as default
};
