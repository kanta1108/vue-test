<template>
  <layout>
    <section class="section gallery" id="gallery">
      <sectionTitle :sectionTitle="title"></sectionTitle>
      <div class="gallery__grid">
        <scale
          v-for="index in items"
          :key="index"
          :duration="scaleProps.duration"
          :delay="index * scaleProps.delayInterval"
          :scaleFrom="scaleProps.scaleFrom">
          <card :cardNumber="index + 1"></card>
        </scale>
      </div>
    </section>
  </layout>
</template>
<script>
import layout from "./layouts/layout.vue";
import card from "./modules/card.vue";
import sectionTitle from "./modules/sectionTitle.vue";
import scale from "./animation-components/scale.vue";
export default {
  components: {
    layout,
    card,
    sectionTitle,
    scale,
  },
  data() {
    return {
      title: "Gallery",
      scaleProps: {
        duration: 1,
        scaleFrom: 0.5,
        delayInterval: 0.3,
      },
      items: [1, 2, 3, 4],
    };
  },
};
</script>
<style lang="scss" scoped>
.gallery {
  &__grid {
    padding-block: 5vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 5vw;
  }
}
</style>
