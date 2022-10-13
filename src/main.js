import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// import { getCountries } from "./helpers";
// const countries = getCountries();
// console.log("G E T - C O U N T R I E S \n", countries);
