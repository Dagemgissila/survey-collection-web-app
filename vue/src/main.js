import { createApp } from "vue";
import "./index.css";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(store).use(router).use(Toast).mount("#app");
