import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth.state";

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
      path: "/shopping",
      name: "Shopping",
      component: () => import("../views/Shopview.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/newclothe",
      name: "newclothe",
      component: () => import("../views/NewClothe.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/clothe",
      name: "Clothes",
      component: () => import("../views/Clothe.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/clothe/:id",
      name: "clotheDetail",
      component: () => import("../views/DetailClothe.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to,from)=> {
  const main = useAuthStore()
  if (to.meta.requiresAuth && !main.isAllowed) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
})

export default router;
