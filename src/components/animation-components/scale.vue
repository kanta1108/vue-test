<template>
  <transition name="scale" appear @before-enter="beforeEnter">
    <slot></slot>
  </transition>
</template>
<script>
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(scrollTrigger);
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
    scaleFrom: {
      type: Number,
      default: 0,
    },
    scaleTo: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    beforeEnter(el) {
      gsap.fromTo(
        el,
        {
          scale: this.scaleFrom,
          opacity: 0,
        },
        {
          duration: this.duration,
          delay: this.delay,
          scale: this.scaleTo,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped></style>
