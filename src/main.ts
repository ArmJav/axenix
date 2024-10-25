import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';
import "./style.css";
import { createPinia } from "pinia";
import { router } from "./router";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(Antd)
  .use(router)
  .mount("#app");
