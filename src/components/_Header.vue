<template>
  <header class="header">
    <HeaderLogo></HeaderLogo>
    <HeaderNav :navPlace="navPlace"></HeaderNav>
  </header>
</template>
<script>
import logo from "./modules/logo.vue";
import nav from "./modules/nav.vue";
export default {
  components: {
    HeaderLogo: logo,
    HeaderNav: nav,
  },
  data() {
    return {
      navPlace: "headerNav",
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
}
</style>
