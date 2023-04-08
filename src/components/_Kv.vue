<template>
  <Opacity :duration="opacityProps.duration" :delay="opacityProps.delay">
    <div class="kv">
      <Slide
        :duration="slideProps.duration"
        :delay="slideProps.delay"
        :x="slideProps.x">
        <h1 class="h1">Hello World</h1>
      </Slide>
    </div>
  </Opacity>
</template>
<script>
import Opacity from "./animation-components/opacity.vue";
import Slide from "./animation-components/slide.vue";
export default {
  components: {
    Opacity,
    Slide,
  },
  data() {
    return {
      opacityProps: {
        duration: "3s",
        delay: "1s",
      },
      slideProps: {
        duration: "1",
        delay: "2",
        x: 100,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.kv {
  background-image: url("../assets/images/kv.jpeg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 90vh;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    animation-name: kf-keyVisual-transition;
    animation-duration: 8s;
    animation-delay: 3s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .h1 {
    color: #fff;
    position: absolute;
    top: 70%;
    right: 15%;
    font-size: $font-h1;
    letter-spacing: 0.2em;
    z-index: 20;
  }
}
@keyframes kf-keyVisual-transition {
  0% {
    background-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
