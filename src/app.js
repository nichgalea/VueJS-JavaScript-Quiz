import Vue from "vue";
import App from "./App.vue";

import Header from "./components/Header.vue";
import Question from "./components/Question.vue";

Vue.component("q-header", Header);
Vue.component("question", Question);

export function createApp() {
  const app = new Vue({
    render: h => h(App)
  });

  return { app };
}
