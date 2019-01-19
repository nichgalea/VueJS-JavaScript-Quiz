import Vue from "vue";
import App from "./App.vue";

import Question from "./client/Question.vue";

Vue.component("question", Question);

export function createApp() {
  const app = new Vue({
    render: h => h(App)
  });

  return { app };
}
