<template>
  <div class="skill">
    <card :cardNumber="cardNumber" class="card"></card>
    <h3 class="skill__title">{{ title }}</h3>
    <p class="skill__descriptions">{{ descriptions }}</p>
  </div>
</template>
<script>
import card from "./card.vue";
export default {
  props: ["cardNumber", "title", "descriptions"],
  components: {
    card,
  },
};
</script>
<style lang="scss" scoped>
.skill {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2vw;

  .card {
    height: 20vw;
    overflow: hidden;
    object-fit: cover;
  }

  &__title {
    font-size: 2em;
    text-align: center;
  }

  &__descriptions {
    text-align: center;
  }
}
</style>
