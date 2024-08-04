import { defineComponent as K, ref as g, watch as q, onBeforeUpdate as N, openBlock as c, createElementBlock as f, normalizeClass as b, normalizeStyle as k, renderSlot as j, toDisplayString as B, createCommentVNode as C, createElementVNode as H, Fragment as D, renderList as M } from "vue";
/* empty css                   */
const R = ["autoFocus", "value", "required", "readonly", "disabled", "onInput", "onFocus", "onKeydown"], $ = {
  key: 0,
  class: "text-center error-message"
}, U = /* @__PURE__ */ K({
  name: "otp-input",
  __name: "otp-input",
  props: {
    label: {},
    labelClass: {},
    className: {},
    inputClass: {},
    primaryColor: { default: "#3880ff" },
    secondaryColor: { default: "#3dc2ff" },
    position: { default: "center" },
    fontSize: {},
    borders: { default: "btlr" },
    fontFamily: {},
    gap: {},
    inputsCount: { default: 6 },
    borderSize: {},
    fieldWidth: { default: 56 },
    fieldHeight: { default: 56 },
    disabled: { type: [Boolean, null] },
    required: { type: [Boolean, null] },
    rounded: { type: [Boolean, null] },
    hasError: { type: [Boolean, null] },
    errorMessage: {},
    modelValue: { default: "" }
  },
  emits: ["change", "complete", "update:modelValue"],
  setup(F, { emit: V }) {
    const h = V, n = F, d = {
      backspace: "Backspace",
      delete: "Delete",
      left: "ArrowLeft",
      up: "ArrowUp",
      right: "ArrowRight",
      down: "ArrowDown"
    }, p = g([]), l = g([]), u = g([]), w = g(0), E = () => {
      let e;
      if (l.value && l.value.length) {
        e = [];
        for (let t = 0; t < n.inputsCount; t++)
          e.push(l.value[t] || "");
        w.value = l.value.length >= n.inputsCount ? 0 : l.value.length;
      } else
        e = Array(n.inputsCount).fill("");
      p.value = [];
      for (let t = 0; t < n.inputsCount; t++)
        p.value.push(t + 1);
      l.value = e;
    }, z = (e, t) => {
      const r = u.value[t];
      r && r.value === "" ? r.focus() : e.target.select();
    }, S = (e, t) => {
      if (e.target.value = e.target.value.replace(/[^\d]/gi, ""), e.target.value === "" || !e.target.validity.valid)
        return;
      let r;
      const o = e.target.value;
      if (l.value = Object.assign([], l.value), o.length > 1) {
        let a = o.length + t - 1;
        a >= n.inputsCount && (a = n.inputsCount - 1), r = p.value[a], o.split("").forEach((y, s) => {
          const i = t + s;
          i < n.inputsCount && (l.value[i] = y);
        });
      } else
        r = p.value[t + 1], l.value[t] = o;
      if (r) {
        const a = u.value[r];
        a.focus(), a.select();
      }
      v(l.value);
    }, I = (e, t) => {
      const r = t - 1, o = t + 1, a = p.value[r], m = p.value[o], y = (s) => {
        s.preventDefault();
        const i = [...l.value];
        l.value[t] ? (i[t] = "", l.value = i, v(i)) : m && (i[o] = "", u.value[m].focus(), l.value = i, v(i));
      };
      switch (e.key) {
        case d.backspace: {
          e.preventDefault();
          const s = [...l.value];
          l.value[t] ? (s[t] = "", l.value = s, v(s)) : a && (s[r] = "", u.value[a].focus(), l.value = s, v(s));
          break;
        }
        case d.delete: {
          y(e);
          break;
        }
        case d.left:
          e.preventDefault(), a && u.value[a].focus();
          break;
        case d.right:
          e.preventDefault(), m && u.value[m].focus();
          break;
        case d.up:
        case d.down:
          e.preventDefault();
          break;
      }
    }, v = (e) => {
      var r;
      const t = e.join("");
      h("change", t), h("update:modelValue", t), t.length >= n.inputsCount && (h("complete", t), (r = u.value[t.length]) == null || r.blur());
    }, A = () => {
      const e = {
        b: "border-b",
        t: "border-t",
        l: "border-l",
        r: "border-r"
      };
      return n.borders.split(
        ""
      ).map((o) => e[o]).join(" ");
    };
    return q(
      () => n.modelValue,
      (e) => {
        for (let t = 0; t < n.inputsCount; t++)
          l.value[t] = e[t] || "";
      },
      {
        immediate: !0
      }
    ), E(), N(() => {
      u.value = [];
    }), (e, t) => (c(), f("div", {
      class: b(["code-input-container", [e.className, { disabled: e.disabled }, { "has-error": e.hasError }]]),
      style: k({
        "--ci-gap": e.gap,
        "--ci-font-size": e.fontSize,
        "--ci-font-family": e.fontFamily,
        "--ci-border-width": e.borderSize,
        "--ci-border-radius": e.rounded ? "5px" : void 0,
        "--ci-color-primary": e.primaryColor,
        "--ci-color-secondary": e.secondaryColor
      })
    }, [
      j(e.$slots, "default", {}, () => [
        e.label ? (c(), f("p", {
          key: 0,
          class: b(["label", e.labelClass])
        }, B(e.label), 3)) : C("", !0)
      ]),
      H("div", {
        class: b(["code-input font-alatsi no-border", [A(), "position-" + e.position]])
      }, [
        (c(!0), f(D, null, M(l.value, (r, o) => (c(), f(D, null, [
          o > -1 ? (c(), f("input", {
            class: b(["text-center transition-all border-none rounded-lg outline-none w-14 h-14 focus:outline-none focus:ring-0", e.inputClass]),
            type: "number",
            pattern: "[0-9]",
            maxlength: "1",
            style: k({
              width: `${e.fieldWidth}px`,
              height: `${e.fieldHeight}px`
            }),
            autoFocus: o === w.value && !e.disabled,
            value: r,
            key: o,
            ref_for: !0,
            ref: (a) => {
              a && (u.value[o + 1] = a);
            },
            required: e.required === !0,
            readonly: o > 0 && l.value[o - 1] === "",
            disabled: e.disabled === !0,
            onInput: (a) => S(a, o),
            onFocus: (a) => z(a, o),
            onKeydown: (a) => I(a, o)
          }, null, 46, R)) : C("", !0)
        ], 64))), 256))
      ], 2),
      e.hasError && e.errorMessage ? (c(), f("div", $, B(e.errorMessage), 1)) : C("", !0)
    ], 6));
  }
});
export {
  U as default
};
