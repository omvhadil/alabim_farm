import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/TambahHewan",
    name: "Tambah Hewan",
    component: () => import("../views/TembahHewan.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
