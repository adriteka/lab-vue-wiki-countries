import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/CountriesList.vue"),
    redirect: { name: "default-country" },
    children: [
      {
        path: "/",
        name: "default-country",
        component: () => import("../components/InfoMessage.vue"),
      },
      {
        path: ":code",
        name: "details",
        component: () => import("../views/CountryDetails.vue"),
      },
    ],
  },
];

// scrollBehavior().scrollIntoView() - parámetro opcional:
// scroll automático hasta #app al cambiar de ruta
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
