<template>
  <transition name="scale" appear @before-enter="beforeEnter">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  methods: {
    beforeEnter(el) {},
  },
};
</script>
<style lang="scss" scoped></style>
