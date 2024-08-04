import { createRouter, createWebHistory } from "vue-router";
import AuthLogin from "@/components/auth/AuthLogin.vue";
import MainDashboard from "@/components/dashboard/MainDashboard.vue";

const routes = [
  { path: "/", component: AuthLogin },
  { path: "/dashboard", component: MainDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
