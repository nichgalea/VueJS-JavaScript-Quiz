<template>
  <ul>
    <li v-for="(q, index) in questions" :key="index">{q.question}</li>
  </ul>
</template>

<style>
</style>

<script>
import questions from "../../mock-data/questions.json";

export default {
  data() {
    return { questions };
  }
};
</script>
