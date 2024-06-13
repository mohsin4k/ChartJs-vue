import Vue from "vue";
import Router from "vue-router";
import SignupPage from "@/components/SignupPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import ChartPage from "@/components/ChartPage.vue";
import ChartPageBootstrap from "@/components/ChartPageBootstrap.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/signup",
      name: "Signup",
      component: SignupPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/charts",
      name: "Chart",
      component: ChartPage,
    },
    {
      path: "/charts-bootstrap",
      name: "ChartBootstrap",
      component: ChartPageBootstrap,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const token = localStorage.getItem("authToken");

  if (requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
