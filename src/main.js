import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import "./style.css";
import trim from "./trim";

const app = createApp(App);
trim(app);
app.use(ArcoVue);
app.mount("#app");
