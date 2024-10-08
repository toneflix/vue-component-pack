import { defineComponent as y, ref as v, watch as b, onMounted as h, onBeforeUnmount as N, renderSlot as u, withDirectives as P, createElementVNode as k, mergeProps as w, createTextVNode as g, toDisplayString as C, vShow as R } from "vue";
import { useRoute as V, useRouter as z } from "vue-router";
import B from "@paystack/inline-js";
/* empty css                   */
const S = ["disabled"], E = /* @__PURE__ */ y({
  __name: "paystack-inline",
  props: {
    amount: {},
    inline: { type: Boolean },
    hidden: { type: Boolean },
    tooltip: {},
    customer: {},
    btnLabel: { default: "Pay Now" },
    publicKey: {},
    dontVerify: { type: Boolean },
    tooltipIcon: {},
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
    } },
    redirectRoute: {}
  },
  emits: ["ready", "success", "verified", "canceled", "destroyed", "error", "initialized"],
  setup(n, { expose: m, emit: c }) {
    const i = c, t = n, d = V(), p = z(), o = v(!1), l = (e) => {
      o.value = !0;
      try {
        t.verifyCallback(e).then(({ status: a, message: r }) => {
          o.value = !1, i("verified", { status: a, message: r }), t.redirectRoute && p.push(t.redirectRoute);
        });
      } catch (a) {
        i("error", a, e);
      }
    }, s = () => {
      o.value = !0;
      try {
        t.initializeCallback().then(({ reference: e, authorization_url: a, message: r }) => {
          i("initialized", { reference: e, authorization_url: a, message: r }), t.inline || !a ? f(e) : a && setTimeout(() => {
            globalThis.location.href = a;
          }, 3e3);
        });
      } catch (e) {
        i("error", e);
      }
    }, f = (e = "") => new B().newTransaction({
      key: t.publicKey,
      email: t.customer.email,
      amount: t.amount * 100,
      reference: e,
      firstName: (t.customer.name || t.customer.email).split(" ")[0],
      lastName: (t.customer.name || t.customer.email).split(" ")[1] || "",
      metadata: {
        custom_fields: [
          {
            display_name: "Name",
            variable_name: "Name",
            value: t.customer.name
          },
          {
            display_name: "Phone Number",
            variable_name: "Phone Number",
            value: t.customer.phone
          }
        ]
      },
      onSuccess(a) {
        o.value = !1, i("success", a), t.dontVerify || l(a.reference);
      },
      onCancel() {
        o.value = !1, i("canceled", { reference: e });
      },
      onError: (a) => {
        o.value = !1, i("error", a, e);
      }
    });
    return b(
      () => d.query.reference,
      (e) => {
        e && !t.dontVerify && l(e);
      },
      { immediate: !0 }
    ), h(() => {
      i("ready");
    }), N(() => {
      i("destroyed");
    }), m({
      loading: o
    }), (e, a) => u(e.$slots, "default", {
      initialize: () => s(),
      loading: o.value
    }, () => [
      P(k("button", w({ class: "pay-button" }, e.$attrs, {
        disabled: o.value,
        onClick: a[0] || (a[0] = (r) => s())
      }), [
        u(e.$slots, "button", { loading: o.value }, () => [
          g(C(e.btnLabel), 1)
        ])
      ], 16, S), [
        [R, !e.hidden]
      ])
    ]);
  }
});
export {
  E as default
};
