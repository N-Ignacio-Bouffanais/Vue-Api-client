import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./routes";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.use(pinia).use(router).mount("#app");
