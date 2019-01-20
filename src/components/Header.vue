<template>
  <header class="header">
    <h1>Front-End Quiz</h1>
  </header>
</template>

<style lang="less">
@import "../utils";

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: white;

  .desktop({margin: 0 16px;});
  .mobile({justify-content: center;});
}
</style>
