<template>
  <div id="app">
    <parallax-bg/>
    <q-header/>

    <main class="main-content">
      <quiz/>
    </main>
  </div>
</template>

<style lang="less">
@import "utils";

* {
  appearance: none;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  position: relative;
  .desktop({max-width: 1140px; margin: 0 auto;});
  .mobile({width: 100%;});
}

.main-content {
  margin: 80px 16px 0;
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
