<template>
  <footer class="footer">
    <Layout>
      <div class="footer__inner">
        <FooterNav :nav-place="navPlace"></FooterNav>
        <Map class="map"></Map>
      </div>
    </Layout>
  </footer>
</template>
<script>
import Layout from './layouts/layout.vue';
import nav from './modules/nav.vue';
import Map from './modules/map.vue';
export default {
  components: { Layout, FooterNav: nav, Map },
  data() {
    return {
      navPlace: 'footerNav',
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  margin-block-start: 5vw;
  background-color: #000;
  color: #fff;
  padding-block: 5vw;

  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .map {
      width: 50%;
      display: none;
    }
  }
}
</style>
