import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/compras",
      name: "Compras",
      component: () => import("../views/Comprasview.vue"),
    },
    {
      path: "/api/clothe",
      name: "clothe",
      component: () => import("../views/NewClothe.vue")
    }
  ],
});

export default router;
