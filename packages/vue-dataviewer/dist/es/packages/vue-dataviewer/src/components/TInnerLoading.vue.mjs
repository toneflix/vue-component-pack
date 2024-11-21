import { defineComponent as o, useModel as a, toDisplayString as i } from "vue";
const d = /* @__PURE__ */ o({
  name: "TInnerLoading",
  __name: "TInnerLoading",
  props: {
    showing: { type: Boolean, default: !1 },
    showingModifiers: {}
  },
  emits: ["update:showing"],
  setup(n) {
    const e = a(n, "showing");
    return (t, s) => i(e.value ? "Loading..." : null);
  }
});
export {
  d as default
};
