<template>
  <div id="results">
    <p>
      <b>Correct:</b>
      {{data.correct}}
    </p>

    <p>
      <b>Incorrect:</b>
      {{data.incorrect}}
    </p>

    <p>
      You scored higher than
      <b>{{percentile}}%</b> of people that have taken this test.
    </p>

    <button class="results__restart" @click="restart">Click here to start again</button>
  </div>
</template>

<style lang="less">
.results {
  &__restart {
    border: 0;
    width: 100%;
    padding: 24px;
    background-color: lightgray;
    font-size: 24px;
    margin-top: 48px;

    &:hover {
      cursor: pointer;
      background: gray;
    }
  }
}
</style>

<script>
import results from "../../mock-data/results.json";

export default {
  props: ["data"],
  data() {
    return {
      results
    };
  },
  computed: {
    percentile() {
      return Math.round(
        (this.results.filter(r => r.correct < this.data.correct).length /
          (this.results.length + 1)) *
          100
      );
    }
  },
  methods: {
    restart() {
      location.reload();
    }
  }
};
</script>