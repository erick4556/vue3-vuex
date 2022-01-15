import { createApp } from "vue";
import App from "../src/components/App.vue";
import router from "./router";
import store from "./store";

import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
