<template>
  <slide
    :duration="slideProps.duration"
    :delay="slideProps.delay"
    :x="direction">
    <div class="paragraph" :class="{ reverse: isReverse }">
      <card :cardNumber="cardNumber" class="card"> </card>
      <p class="paragraph__p">{{ paragraph }}</p>
    </div>
  </slide>
</template>
<script>
import card from "./card.vue";
import slide from "../animation-components/slide.vue";
export default {
  components: {
    card,
    slide,
  },
  props: ["paragraph", "isReverse", "cardNumber", "direction"],
  data() {
    return {
      slideProps: {
        duration: 1,
        delay: 0,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.paragraph {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 5vw;

  &__p {
    align-self: center;
    justify-self: center;
    font-size: 1.5em;
  }
  &.reverse {
    .card {
      grid-column: 2;
      grid-row: 1;
    }
    .paragraph_p {
      grid-column: 1;
      grid-row: 1;
    }
  }
}
</style>
