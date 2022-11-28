import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Router from "./router";

import "./assets/main.css";

createApp(App).use(Router).mount("#app");
