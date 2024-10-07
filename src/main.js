import { createApp } from "vue";
import { createPinia } from "pinia";
import persistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "./assets/main.css";

const pinia = createPinia();
pinia.use(persistedState);

const app = createApp(App);
app.use(pinia);
app.mount("#app");
