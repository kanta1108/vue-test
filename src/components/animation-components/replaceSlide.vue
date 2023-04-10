<template>
  <transition name="replaceSlide" mode="out-in">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 1,
    },
    delay: {
      type: Number,
      default: 0,
    },
    fromX: {
      type: String,
      default: '100%',
    },
    toX: {
      type: String,
      default: '-100%',
    },
    easing: {
      type: String,
      default: 'linear',
    },
  },
};
</script>
<style lang="scss" scoped>
.replaceSlide-enter-active,
.replaceSlide-leave-active {
  animation-name: kf-animation-component-replaceSlide-from;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-timing-function: linear;
}
@keyframes kf-animation-component-replaceSlide-from {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
