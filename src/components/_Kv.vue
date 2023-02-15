<template>
  <div class="kv">
    <h1>Hello World</h1>
  </div>
</template>
<style lang="scss" scoped>
.kv {
  background-image: url("../assets/images/kv.jpeg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50vw;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
}
</style>
