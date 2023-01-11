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
      path: "/newclothe",
      name: "newclothe",
      component: () => import("../views/NewClothe.vue")
    },
    {
      path: "/clothes",
      name: "Clothes",
      component: () => import("../views/Clothe.vue")
    }
  ],
});

export default router;
