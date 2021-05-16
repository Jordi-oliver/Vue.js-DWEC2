import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import LlistaAplicacions from "@/components/LlistaAplicacions";
import LlistaPuntuacions from "@/components/LlistaPuntuacions";
import FormApp from "@/components/FormApp";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/llista", component: LlistaAplicacions },
  { path: "/alta", component: FormApp },
  { path: "/modificar", component: FormApp, props: true },
  { path: "/llistap", component: LlistaPuntuacions }
];
const router = new VueRouter({
  base: "/",
  mode: "history",
  routes // short for `routes: routes`
});
export default router;
