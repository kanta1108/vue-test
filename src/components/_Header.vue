<template>
  <header class="header">
    <HeaderLogo></HeaderLogo>
    <HeaderNav></HeaderNav>
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
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
