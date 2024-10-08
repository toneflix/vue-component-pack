import { defineComponent as b, mergeModels as m, useModel as h, ref as k, watch as N, onMounted as P, onBeforeUnmount as g, renderSlot as c, withDirectives as w, createElementVNode as V, mergeProps as C, createTextVNode as B, toDisplayString as R, openBlock as z, createElementBlock as M, createCommentVNode as S, vShow as T } from "vue";
import { useRoute as _, useRouter as $ } from "vue-router";
import E from "@paystack/inline-js";
/* empty css                   */
const D = ["disabled"], F = {
  key: 0,
  class: "spinner"
}, U = /* @__PURE__ */ b({
  __name: "paystack-inline",
  props: /* @__PURE__ */ m({
    amount: {},
    inline: { type: Boolean },
    hidden: { type: Boolean },
    tooltip: {},
    customer: {},
    btnLabel: { default: "Pay Now" },
    publicKey: {},
    dontVerify: { type: Boolean },
    tooltipIcon: {},
    redirectRoute: {},
    verifyCallback: { type: Function, default() {
      return new Promise(
        (n) => n({
          status: !0,
          message: ""
        })
      );
    } },
    initializeCallback: { type: Function, default() {
      return new Promise(
        (n) => n({
          message: "",
          reference: "",
          authorization_url: ""
        })
      );
    } }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ m(["ready", "success", "verified", "canceled", "destroyed", "error", "initialized"], ["update:modelValue"]),
  setup(n, { expose: d, emit: f }) {
    const r = f, l = h(n, "modelValue"), o = n, p = _(), y = $(), a = k(!1), s = (t) => {
      a.value = !0;
      try {
        o.verifyCallback(t).then(({ status: e, message: i }) => {
          a.value = !1, r("verified", { status: e, message: i }), l.value = void 0, o.redirectRoute && y.push(o.redirectRoute);
        });
      } catch (e) {
        r("error", e, t);
      }
    }, u = () => {
      a.value = !0;
      try {
        o.initializeCallback().then(({ reference: t, authorization_url: e, message: i }) => {
          r("initialized", { reference: t, authorization_url: e, message: i }), o.inline || !e ? v(t) : e && setTimeout(() => {
            globalThis.location.href = e;
          }, 3e3);
        });
      } catch (t) {
        r("error", t);
      }
    }, v = (t = "") => new E().newTransaction({
      key: o.publicKey,
      email: o.customer.email,
      amount: o.amount * 100,
      reference: t,
      firstName: (o.customer.name || o.customer.email).split(" ")[0],
      lastName: (o.customer.name || o.customer.email).split(" ")[1] || "",
      metadata: {
        custom_fields: [
          {
            display_name: "Name",
            variable_name: "Name",
            value: o.customer.name
          },
          {
            display_name: "Phone Number",
            variable_name: "Phone Number",
            value: o.customer.phone
          }
        ]
      },
      onSuccess(e) {
        a.value = !1, r("success", e), o.dontVerify || s(e.reference);
      },
      onCancel() {
        a.value = !1, r("canceled", { reference: t });
      },
      onError: (e) => {
        a.value = !1, r("error", e, t);
      }
    });
    return N(
      [l, () => p.query.reference],
      ([t, e]) => {
        e || (e = t), e && !o.dontVerify && s(e);
      },
      { immediate: !0 }
    ), P(() => {
      r("ready");
    }), g(() => {
      r("destroyed");
    }), d({
      loading: a
    }), (t, e) => c(t.$slots, "default", {
      initialize: () => u(),
      loading: a.value
    }, () => [
      w(V("button", C({ class: "pay-button" }, t.$attrs, {
        disabled: a.value,
        onClick: e[0] || (e[0] = (i) => u())
      }), [
        c(t.$slots, "button", { loading: a.value }, () => [
          B(R(a.value ? "" : t.btnLabel) + " ", 1),
          a.value ? (z(), M("div", F)) : S("", !0)
        ])
      ], 16, D), [
        [T, !t.hidden]
      ])
    ]);
  }
});
export {
  U as default
};
