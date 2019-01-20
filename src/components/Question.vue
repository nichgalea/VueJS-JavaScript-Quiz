<template>
  <div class="question">
    <p class="question__description">{{data.question}}</p>

    <div
      :class="`question__option${i === pickedAnswer ? ' question__option--selected' : ''}`"
      v-for="(c, i) in data.choices"
      :key="i"
    >
      <input
        type="radio"
        :name="`group${index}`"
        :id="`group${index}-value${i}`"
        :value="i"
        v-model="pickedAnswer"
        class="question__radio"
        @change="$emit('select', i === data.answer)"
      >
      <label class="question__label" :for="`group${index}-value${i}`">{{c}}</label>
    </div>
  </div>
</template>

<style lang="less">
.question {
  display: block;
  border: 1px solid lightgray;
  margin-bottom: 16px;

  &:not(:first-of-type) {
    margin-top: 16px;
  }

  &__description {
    font-size: 24px;
    font-weight: 600;
    padding: 24px 16px;
    margin: 0;
  }

  &__option {
    padding: 0 24px;
    display: flex;
    align-items: center;

    &:hover {
      background: lightgray;

      .question__label {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  &__label {
    flex: 0 0 100%;
    height: 56px;
    padding-left: 16px;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  props: ["data", "index"],
  data() {
    return {
      pickedAnswer: ""
    };
  }
};
</script>

