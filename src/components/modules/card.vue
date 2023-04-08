<template>
  <div class="card">
    <img :src="require(`@/assets/images/card${cardNumber}.jpeg`)" alt="" />
  </div>
</template>
<script>
export default {
  props: ["cardNumber"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  box-shadow: 10px 10px 30px #000;
  overflow: hidden;
  object-fit: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.3);
    z-index: 1;
    transition: all 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }

    &::before {
      background-color: rgba($color: #000000, $alpha: 0);
    }
  }

  img {
    transition: transform 0.5s linear;
  }
}
</style>
