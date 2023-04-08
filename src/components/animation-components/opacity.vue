<template>
  <transition name="opacity" appear>
    <slot></slot>
  </transition>
</template>
<script>
export default {
  props: ["duration", "delay"],
};
</script>
<style lang="scss" scoped>
.opacity-enter-active,
.opacity-leave-active {
  animation-name: kf-animation-component-opacity;
  animation-duration: v-bind(duration);
  animation-delay: v-bind(delay);
  animation-fill-mode: both;
}
@keyframes kf-animation-component-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
