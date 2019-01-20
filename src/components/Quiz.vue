<template>
  <div class="quiz">
    <template v-if="!results">
      <question
        v-for="(q, i) in questions"
        :key="i"
        :data="q"
        :index="i"
        @select="handleSelect(i, $event)"
      />

      <button class="quiz__finish" @click="finish">Finish</button>
    </template>

    <results v-if="results" :data="results"/>
  </div>
</template>

<style lang="less">
.quiz {
  margin-bottom: 24px;

  &__finish {
    border: 0;
    width: 100%;
    padding: 24px;
    background-color: lightgray;
    font-size: 24px;

    &:hover {
      cursor: pointer;
      background: gray;
    }
  }
}
</style>

<script>
import questions from "../../mock-data/questions.json";

export default {
  data() {
    return {
      current: 0,
      questions,
      answers: questions.map(() => false),
      finished: false,
      results: null
    };
  },
  methods: {
    handleSelect(questionIndex, isCorrect) {
      this.answers[questionIndex] = isCorrect;
    },
    finish() {
      const results = this.answers.reduce(
        (acc, curr) => {
          if (curr) {
            acc.correct++;
          } else {
            acc.incorrect++;
          }

          return acc;
        },
        {
          correct: 0,
          incorrect: 0
        }
      );

      this.finished = true;
      this.results = results;
    }
  }
};
</script>
