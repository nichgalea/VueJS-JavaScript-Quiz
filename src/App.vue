<template>
  <div id="app">
    <ul>
      <li v-for="(q, index) in questions" :key="index">{{q.question}}</li>
    </ul>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

@media only screen and (max-width: 768px) {
  #app {
    background: red;
  }
}

@media only screen and (min-width: 768px) {
  #app {
    background: blue;
  }
}
</style>

<script>
import questions from "../mock-data/questions.json";

export default {
  data() {
    return {
      questions
    };
  }
};
</script>
