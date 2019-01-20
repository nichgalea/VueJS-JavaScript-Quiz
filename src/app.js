import Vue from "vue";
import App from "./App.vue";

import Header from "./components/Header.vue";
import Quiz from "./components/Quiz.vue";
import Question from "./components/Question.vue";
import ParallaxBackground from "./components/ParallaxBackground.vue";
import Results from "./components/Results.vue";

Vue.component("q-header", Header);
Vue.component("question", Question);
Vue.component("quiz", Quiz);
Vue.component("parallax-bg", ParallaxBackground);
Vue.component("results", Results);

export function createApp() {
  const app = new Vue({
    render: h => h(App)
  });

  return { app };
}
