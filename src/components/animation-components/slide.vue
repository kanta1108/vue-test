<template>
  <transition name="slide" appear @before-enter="beforeEnter">
    <slot> </slot>
  </transition>
</template>
<script>
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
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
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    beforeEnter(el) {
      gsap.fromTo(
        el,
        {
          x: this.x,
          y: this.y,
          opacity: 0,
        },
        {
          duration: this.duration,
          delay: this.delay,
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    },
  },
};
</script>
