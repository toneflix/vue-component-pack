import { defineComponent as b, mergeModels as m, useModel as h, ref as k, watch as N, onMounted as P, onBeforeUnmount as g, renderSlot as d, withDirectives as w, createElementVNode as C, mergeProps as B, createTextVNode as V, toDisplayString as R, openBlock as z, createElementBlock as M, createCommentVNode as S, vShow as T } from "vue";
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
    reference: {},
    referenceModifiers: {}
  }),
  emits: /* @__PURE__ */ m(["ready", "success", "verified", "canceled", "destroyed", "error", "initialized"], ["update:reference"]),
  setup(n, { expose: f, emit: p }) {
    const o = p, u = h(n, "reference"), a = n, l = _(), y = $(), r = k(!1), c = (e) => {
      r.value = !0;
      try {
        a.verifyCallback(e).then(({ status: t, message: i }) => {
          r.value = !1, o("verified", { status: t, message: i }), u.value = void 0, a.redirectRoute && y.push(a.redirectRoute);
        });
      } catch (t) {
        r.value = !1, o("error", t, e);
      }
    }, s = () => {
      r.value = !0;
      try {
        a.initializeCallback().then(({ reference: e, authorization_url: t, message: i }) => {
          o("initialized", { reference: e, authorization_url: t, message: i }), a.inline || !t ? v(e) : t && setTimeout(() => {
            globalThis.location.href = t;
          }, 3e3);
        });
      } catch (e) {
        r.value = !1, o("error", e);
      }
    }, v = (e = "") => new E().newTransaction({
      key: a.publicKey,
      email: a.customer.email,
      amount: a.amount * 100,
      reference: e,
      firstName: (a.customer.name || a.customer.email).split(" ")[0],
      lastName: (a.customer.name || a.customer.email).split(" ")[1] || "",
      metadata: {
        custom_fields: [
          {
            display_name: "Name",
            variable_name: "Name",
            value: a.customer.name
          },
          {
            display_name: "Phone Number",
            variable_name: "Phone Number",
            value: a.customer.phone
          }
        ]
      },
      onSuccess(t) {
        r.value = !1, o("success", t), a.dontVerify || c(t.reference);
      },
      onCancel() {
        r.value = !1, o("canceled", { reference: e });
      },
      onError: (t) => {
        r.value = !1, o("error", t, e);
      }
    });
    return N(
      [u, () => {
        var e;
        return (e = l == null ? void 0 : l.query) == null ? void 0 : e.reference;
      }],
      ([e, t]) => {
        t || (t = e), t && !a.dontVerify && c(t);
      },
      { immediate: !0 }
    ), P(() => {
      o("ready");
    }), g(() => {
      o("destroyed");
    }), f({
      loading: r,
      initializeNewPayment: s
    }), (e, t) => d(e.$slots, "default", {
      initialize: () => s(),
      loading: r.value
    }, () => [
      w(C("button", B({ class: "pay-button" }, e.$attrs, {
        disabled: r.value,
        onClick: t[0] || (t[0] = (i) => s())
      }), [
        d(e.$slots, "button", { loading: r.value }, () => [
          V(R(r.value ? "" : e.btnLabel) + " ", 1),
          r.value ? (z(), M("div", F)) : S("", !0)
        ])
      ], 16, D), [
        [T, !e.hidden]
      ])
    ]);
  }
});
export {
  U as default
};
