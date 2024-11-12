import { defineComponent as Y, mergeModels as C, useModel as m, ref as O, computed as U, watch as F, resolveComponent as P, openBlock as l, createElementBlock as s, Fragment as h, renderSlot as c, createVNode as f, mergeProps as R, withCtx as b, createElementVNode as i, toDisplayString as g, createBlock as T, unref as n, createCommentVNode as k, withModifiers as L, renderList as q, createTextVNode as z } from "vue";
import G from "dayjs";
import { titleCase as D, slug as d } from "../utils/providers.mjs";
import x from "./TBtn.vue.mjs";
import H from "./dialog/TCard.vue.mjs";
import I from "./dialog/TDialog.vue.mjs";
import J from "./TInnerLoading.vue.mjs";
import { VueForms as K } from "@toneflix/vue-forms";
const Q = { class: "card-title" }, W = { class: "q-pa-md" }, X = { class: "block q-mb-xs" }, Z = {
  key: 2,
  class: "q-pa-sm"
}, ee = {
  class: "t-list",
  separator: ""
}, te = { class: "t-item-section avatar" }, ae = { class: "t-avatar" }, oe = ["src"], le = { class: "t-item-section" }, se = { class: "t-item-label caption" }, ie = {
  key: 0,
  class: "t-item-label"
}, re = {
  key: 1,
  class: "t-item-label"
}, ne = {
  key: 3,
  class: "img-preview"
}, ue = ["src"], ye = /* @__PURE__ */ Y({
  name: "DataViewer",
  __name: "data-viewer",
  props: /* @__PURE__ */ C({
    exclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] },
    formExclusions: { default: () => ["id", "user", "imageUrl", "createdAt", "updatedAt"] }
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
  emits: /* @__PURE__ */ C(["toggleDialog", "dataUpdated", "click:save"], ["update:data", "update:form", "update:mode", "update:loading", "update:saving", "update:errors"]),
  setup(u, { emit: j }) {
    const w = j, o = m(u, "data"), v = m(u, "form"), M = u, r = m(u, "mode"), E = m(u, "loading"), S = m(u, "saving"), y = m(u, "errors"), $ = O(!1), _ = U(
      () => o.value ? Object.entries(o.value).filter((e) => r.value === "edit" ? ![...M.exclusions, ...M.formExclusions].includes(e[0]) : !M.exclusions.includes(e[0])) : []
    ), B = U(() => _.value.map(([e, t]) => ({
      col: 12,
      name: e,
      type: typeof t == "boolean" ? "radio" : "text",
      label: D(d(e, " ")),
      choices: [
        { label: "Accept", value: !0 },
        { label: "Reject", value: !0 }
      ]
    }))), V = (e, t = "view") => {
      o.value = e, r.value = t, $.value = !0;
      const p = Object.fromEntries(
        Object.entries(e).map(([a, N]) => [d(a), A(N)])
      );
      w("toggleDialog", p, t);
    }, A = (e, t) => t && t.includes("edAt", t.length - 4) ? G(String(e)).format("Do MMM, YYYY h:MM A") : typeof e == "boolean" ? Number(e) : Array.isArray(e) && e.every((p) => typeof p == "string") && r.value === "view" ? D(e.join(", ")) : e;
    return F(
      o,
      (e) => {
        e && w("dataUpdated", e);
      },
      {
        immediate: !0
      }
    ), (e, t) => {
      const p = P("q-chip");
      return l(), s(h, null, [
        c(e.$slots, "default", {
          viewData: o.value,
          viewMode: r.value,
          toggleDialog: V
        }, void 0, !0),
        f(I, R({
          modelValue: $.value,
          "onUpdate:modelValue": t[7] || (t[7] = (a) => $.value = a)
        }, e.$attrs), {
          default: b(() => [
            f(H, null, {
              header: b(() => [
                i("div", Q, g({ view: "View Data", edit: "Edit Data", doc: "View Document" }[r.value || "view"]), 1)
              ]),
              default: b(() => [
                i("div", W, [
                  r.value === "edit" ? (l(), T(n(K), {
                    key: 0,
                    rounded: "",
                    loading: "",
                    "show-group-labels": "",
                    class: "p-4 m-4 mx-auto",
                    fields: B.value,
                    modelValue: v.value,
                    "onUpdate:modelValue": t[0] || (t[0] = (a) => v.value = a),
                    onCancel: t[1] || (t[1] = (a) => r.value = "view"),
                    onSubmit: t[2] || (t[2] = (a) => w("click:save", o.value))
                  }, null, 8, ["fields", "modelValue"])) : k("", !0),
                  r.value === "edit" ? (l(), s("form", {
                    key: 1,
                    class: "q-gutter-md",
                    onSubmit: t[4] || (t[4] = L(() => {
                    }, ["prevent"]))
                  }, [
                    c(e.$slots, "form-prepend", {
                      form: v.value,
                      errors: y.value,
                      viewData: o.value
                    }, void 0, !0),
                    (l(!0), s(h, null, q(_.value, (a) => (l(), s("div", {
                      class: "input_wrap",
                      key: a[0]
                    }, [
                      i("label", X, g(n(D)(n(d)(a[0], " "))), 1),
                      c(e.$slots, "form-field-append", {
                        form: v.value,
                        value: v.value[n(d)(a[0], "_")],
                        error: !!y.value[n(d)(a[0], "_")],
                        viewData: o.value,
                        errorMessage: y.value[n(d)(a[0], "_")]
                      }, void 0, !0)
                    ]))), 128)),
                    c(e.$slots, "form-append", {
                      form: v.value,
                      errors: y.value,
                      viewData: o.value
                    }, void 0, !0),
                    f(x, {
                      dense: "",
                      color: "primary",
                      label: "Save",
                      "icon-right": "fas fa-check",
                      loading: S.value,
                      onClick: t[3] || (t[3] = (a) => w("click:save", o.value))
                    }, null, 8, ["loading"])
                  ], 32)) : r.value === "view" && o.value ? (l(), s("div", Z, [
                    i("div", ee, [
                      o.value.imageUrl ? (l(), s("div", {
                        key: 0,
                        class: "q-my-sm t-item clickable",
                        onClick: t[5] || (t[5] = (a) => V(o.value, "doc"))
                      }, [
                        i("div", te, [
                          i("div", ae, [
                            i("img", {
                              src: o.value.imageUrl,
                              alt: "Document"
                            }, null, 8, oe)
                          ])
                        ]),
                        t[8] || (t[8] = i("div", { class: "t-item-section" }, [
                          i("div", { class: "t-item-label" }, "Click to expand")
                        ], -1))
                      ])) : k("", !0),
                      (l(!0), s(h, null, q(_.value, (a) => (l(), s("div", {
                        class: "q-my-sm t-item",
                        key: a[0]
                      }, [
                        i("div", le, [
                          i("div", se, g(n(D)(n(d)(a[0]))), 1),
                          typeof a[1] == "boolean" ? (l(), s("div", ie, [
                            f(p, {
                              square: "",
                              "text-color": "white",
                              color: a[1] ? "green" : "red "
                            }, {
                              default: b(() => [
                                z(g(a[1] ? "Approved" : "Pending "), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ])) : (l(), s("div", re, g(A(a[1], a[0])), 1))
                        ])
                      ]))), 128)),
                      c(e.$slots, "list-append", { viewData: o.value }, void 0, !0)
                    ]),
                    c(e.$slots, "list-after", { viewData: o.value }, void 0, !0)
                  ])) : o.value ? (l(), s("div", ne, [
                    f(x, {
                      dense: "",
                      color: "primary",
                      label: "Return",
                      icon: "fas fa-arrow-left",
                      onClick: t[6] || (t[6] = (a) => V(o.value, "view"))
                    }),
                    o.value.imageUrl ? (l(), s("img", {
                      key: 0,
                      style: { width: "100%" },
                      src: o.value.imageUrl,
                      alt: "Document"
                    }, null, 8, ue)) : k("", !0)
                  ])) : k("", !0)
                ]),
                f(J, { showing: E.value }, null, 8, ["showing"])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 64);
    };
  }
});
export {
  ye as default
};
