<template>
  <div
    class="parallax-background"
    :style="{ backgroundPosition: `calc(50vw - 160px) ${position.j}vh, 50vw calc(${position.s}vh - 278px)` }"
  />
</template>
<style lang="less">
.parallax-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/js-logo-j.png"),
    url("../assets/js-logo-s.png");
  background-repeat: no-repeat;
  background-size: 160px, 120px;
  z-index: -1;
  opacity: 0.3;
}
</style>
<script>
export default {
  data() {
    return {
      position: {
        j: 0,
        s: 100
      }
    };
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.scrollingElement;

      const sp = (scrollTop / (scrollHeight - clientHeight)) * 50;

      this.position = { j: sp, s: 100 - sp };
    }
  }
};
</script>