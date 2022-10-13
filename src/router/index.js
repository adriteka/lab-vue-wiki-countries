import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "countries",
    component: () => import("../views/CountriesList.vue"),
    children: [
      {
        path: ":code",
        name: "details",
        component: () => import("../views/CountryDetails.vue"),
      },
    ],
  }
];

// scrollBehavior() - parámetro opcional ¿?
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
