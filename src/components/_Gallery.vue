<template>
  <layout>
    <section class="section gallery" id="gallery">
      <sectionTitle :sectionTitle="title"></sectionTitle>
      <div class="gallery__grid">
        <card cardNumber="1"></card>
        <card cardNumber="2"></card>
        <card cardNumber="3"></card>
        <card cardNumber="4"></card>
      </div>
    </section>
  </layout>
</template>
<script>
import layout from "./layouts/layout.vue";
import card from "./modules/card.vue";
import sectionTitle from "./modules/sectionTitle.vue";
export default {
  components: {
    layout,
    card,
    sectionTitle,
  },
  data() {
    return {
      title: "Gallery",
    };
  },
};
</script>
<style lang="scss" scoped>
.gallery {
  &__grid {
    margin-block-start: 5vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 5vw;
  }
}
</style>
