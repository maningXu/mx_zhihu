import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Zhihu from "../views/zhihu.vue";
import Vip from "../views/vip.vue";
import Explore from "../views/explore.vue";
import Question from "../views/question.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/zhihu",
    name: "Zhihu",
    component: Zhihu,
  },
  {
    path: "/vip-web",
    name: "Vip",
    component: Vip,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/question/waiting",
    name: "Question",
    component: Question,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
