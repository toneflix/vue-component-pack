import o from "./components/data-viewer.vue.mjs";
import s from "./components/main-content.vue.mjs";
import i from "./components/TBtn.vue.mjs";
const r = (n) => (n.install = (t) => {
  const a = n.name;
  t.component(a, n);
}, n), c = i, _ = r(o), l = s;
export {
  _ as DataViewer,
  l as MainContent,
  c as TBtn,
  _ as default
};
