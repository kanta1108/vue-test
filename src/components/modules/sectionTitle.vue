<template>
  <slide :duration="1" :delay="0" :y="100">
    <h2 class="sectionTitle">{{ sectionTitle }}</h2>
  </slide>
</template>
<script>
import slide from "../animation-components/slide.vue";
export default {
  props: ["sectionTitle"],
  components: { slide },
};
</script>
<style lang="scss" scoped>
.sectionTitle {
  font-size: $font-h2;
  text-align: center;
}
</style>
