import { defineComponent as O, mergeModels as C, useModel as f, ref as P, computed as j, watch as R, resolveComponent as I, openBlock as r, createElementBlock as i, Fragment as k, renderSlot as g, createVNode as c, mergeProps as T, withCtx as _, createElementVNode as n, toDisplayString as w, createBlock as x, unref as l, createCommentVNode as V, withModifiers as L, renderList as A, createTextVNode as z } from "vue";
import G from "dayjs";
import { titleCase as D, slug as s } from "../utils/providers.mjs";
import E from "./TBtn.vue.mjs";
import H from "./dialog/TCard.vue.mjs";
import J from "./dialog/TDialog.vue.mjs";
import K from "./TInnerLoading.vue.mjs";
import { VueForms as Q, InputRadio as W, InputField as X } from "@toneflix/vue-forms";
const Z = { class: "card-title" }, ee = { class: "q-pa-md" }, te = { class: "block q-mb-xs" }, ae = {
  key: 0,
  class: "items-center justify-start row q-pr-sm active-grey input-box"
}, oe = {
  key: 2,
  class: "q-pa-sm"
}, le = {
  class: "t-list",
  separator: ""
}, re = { class: "t-item-section avatar" }, se = { class: "t-avatar" }, ie = ["src"], ne = { class: "t-item-section" }, ue = { class: "t-item-label caption" }, de = {
  key: 0,
  class: "t-item-label"
}, me = {
  key: 1,
  class: "t-item-label"
}, ve = {
  key: 3,
  class: "img-preview"
}, ce = ["src"], Ve = /* @__PURE__ */ O({
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
  setup(m, { emit: S }) {
    const b = S, o = f(m, "data"), u = f(m, "form"), M = m, d = f(m, "mode"), B = f(m, "loading"), N = f(m, "saving"), p = f(m, "errors"), $ = P(!1), h = j(
      () => o.value ? Object.entries(o.value).filter((t) => d.value === "edit" ? ![...M.exclusions, ...M.formExclusions].includes(t[0]) : !M.exclusions.includes(t[0])) : []
    ), Y = j(() => h.value.map(([t, a]) => ({
      col: 12,
      name: t,
      type: typeof a == "boolean" ? "radio" : "text",
      label: D(s(t, " ")),
      choices: { Accept: !0, Reject: !1 }
    }))), U = (t, a = "view") => {
      o.value = t, d.value = a, $.value = !0;
      const y = Object.fromEntries(
        Object.entries(t).map(([e, v]) => [s(e), q(v)])
      );
      b("toggleDialog", y, a);
    }, q = (t, a) => a && a.includes("edAt", a.length - 4) ? G(String(t)).format("Do MMM, YYYY h:MM A") : typeof t == "boolean" ? Number(t) : Array.isArray(t) && t.every((y) => typeof y == "string") && d.value === "view" ? D(t.join(", ")) : t;
    return R(
      o,
      (t) => {
        t && b("dataUpdated", t);
      },
      {
        immediate: !0
      }
    ), (t, a) => {
      const y = I("q-chip");
      return r(), i(k, null, [
        g(t.$slots, "default", {
          viewData: o.value,
          viewMode: d.value,
          toggleDialog: U
        }, void 0, !0),
        c(J, T({
          modelValue: $.value,
          "onUpdate:modelValue": a[7] || (a[7] = (e) => $.value = e)
        }, t.$attrs), {
          default: _(() => [
            c(H, null, {
              header: _(() => [
                n("div", Z, w({ view: "View Data", edit: "Edit Data", doc: "View Document" }[d.value || "view"]), 1)
              ]),
              default: _(() => [
                n("div", ee, [
                  d.value === "edit" ? (r(), x(l(Q), {
                    key: 0,
                    rounded: "",
                    loading: "",
                    "show-group-labels": "",
                    class: "p-4 m-4 mx-auto",
                    fields: Y.value,
                    modelValue: u.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (e) => u.value = e),
                    onCancel: a[1] || (a[1] = (e) => d.value = "view"),
                    onSubmit: a[2] || (a[2] = (e) => b("click:save", o.value))
                  }, null, 8, ["fields", "modelValue"])) : V("", !0),
                  d.value === "edit" ? (r(), i("form", {
                    key: 1,
                    class: "q-gutter-md",
                    onSubmit: a[4] || (a[4] = L(() => {
                    }, ["prevent"]))
                  }, [
                    g(t.$slots, "form-prepend", {
                      form: u.value,
                      errors: p.value,
                      viewData: o.value
                    }, void 0, !0),
                    (r(!0), i(k, null, A(h.value, (e) => (r(), i("div", {
                      class: "input_wrap",
                      key: e[0]
                    }, [
                      n("label", te, w(l(D)(l(s)(e[0], " "))), 1),
                      typeof e[1] == "boolean" ? (r(), i("div", ae, [
                        (r(), i(k, null, A([0, 1], (v) => c(l(W), {
                          modelValue: u.value[l(s)(e[0], "_")],
                          "onUpdate:modelValue": (F) => u.value[l(s)(e[0], "_")] = F,
                          type: "radio",
                          key: v,
                          val: v,
                          name: l(s)(e[0], "_"),
                          label: ["Pending", "Approved"][v]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "val", "name", "label"])), 64))
                      ])) : (r(), x(l(X), {
                        key: 1,
                        type: "text",
                        modelValue: u.value[l(s)(e[0], "_")],
                        "onUpdate:modelValue": (v) => u.value[l(s)(e[0], "_")] = v,
                        error: !!p.value[l(s)(e[0], "_")],
                        name: l(s)(e[0], "_"),
                        "error-message": p.value[l(s)(e[0], "_")]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "name", "error-message"])),
                      g(t.$slots, "form-field-append", {
                        form: u.value,
                        value: u.value[l(s)(e[0], "_")],
                        error: !!p.value[l(s)(e[0], "_")],
                        viewData: o.value,
                        errorMessage: p.value[l(s)(e[0], "_")]
                      }, void 0, !0)
                    ]))), 128)),
                    g(t.$slots, "form-append", {
                      form: u.value,
                      errors: p.value,
                      viewData: o.value
                    }, void 0, !0),
                    c(E, {
                      dense: "",
                      color: "primary",
                      label: "Save",
                      "icon-right": "fas fa-check",
                      loading: N.value,
                      onClick: a[3] || (a[3] = (e) => b("click:save", o.value))
                    }, null, 8, ["loading"])
                  ], 32)) : d.value === "view" && o.value ? (r(), i("div", oe, [
                    n("div", le, [
                      o.value.imageUrl ? (r(), i("div", {
                        key: 0,
                        class: "q-my-sm t-item clickable",
                        onClick: a[5] || (a[5] = (e) => U(o.value, "doc"))
                      }, [
                        n("div", re, [
                          n("div", se, [
                            n("img", {
                              src: o.value.imageUrl,
                              alt: "Document"
                            }, null, 8, ie)
                          ])
                        ]),
                        a[8] || (a[8] = n("div", { class: "t-item-section" }, [
                          n("div", { class: "t-item-label" }, "Click to expand")
                        ], -1))
                      ])) : V("", !0),
                      (r(!0), i(k, null, A(h.value, (e) => (r(), i("div", {
                        class: "q-my-sm t-item",
                        key: e[0]
                      }, [
                        n("div", ne, [
                          n("div", ue, w(l(D)(l(s)(e[0]))), 1),
                          typeof e[1] == "boolean" ? (r(), i("div", de, [
                            c(y, {
                              square: "",
                              "text-color": "white",
                              color: e[1] ? "green" : "red "
                            }, {
                              default: _(() => [
                                z(w(e[1] ? "Approved" : "Pending "), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ])) : (r(), i("div", me, w(q(e[1], e[0])), 1))
                        ])
                      ]))), 128)),
                      g(t.$slots, "list-append", { viewData: o.value }, void 0, !0)
                    ]),
                    g(t.$slots, "list-after", { viewData: o.value }, void 0, !0)
                  ])) : o.value ? (r(), i("div", ve, [
                    c(E, {
                      dense: "",
                      color: "primary",
                      label: "Return",
                      icon: "fas fa-arrow-left",
                      onClick: a[6] || (a[6] = (e) => U(o.value, "view"))
                    }),
                    o.value.imageUrl ? (r(), i("img", {
                      key: 0,
                      style: { width: "100%" },
                      src: o.value.imageUrl,
                      alt: "Document"
                    }, null, 8, ce)) : V("", !0)
                  ])) : V("", !0)
                ]),
                c(K, { showing: B.value }, null, 8, ["showing"])
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
  Ve as default
};
