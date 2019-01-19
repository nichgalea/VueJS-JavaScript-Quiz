<template>
  <div id="app">
    <q-header/>

    <main class="main-content">
      <!-- <quiz/> -->
    </main>
  </div>
</template>

<style lang="less">
@import "utils";

* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  .desktop({max-width: 1140px; margin: 0 auto;});
  .mobile({width: 100%;});
}

.main-content {
  margin-top: 80px;
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
