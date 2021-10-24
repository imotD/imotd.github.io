import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import Skeleton from "vue-loading-skeleton";
import "./assets/css/tailwind.css";
import "./assets/css/style.css";

Vue.prototype.$http = axios;
Vue.use(Skeleton);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
