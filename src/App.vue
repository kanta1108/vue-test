<template>
  <div class="contents">
    <Layout>
      <Header></Header>
    </Layout>
    <ReplaceSlide duration="10">
      <router-view></router-view>
    </ReplaceSlide>
    <Footer></Footer>
  </div>
</template>

<script>
import 'normalize.css';
import Header from './components/_Header.vue';
import Layout from './components/layouts/layout.vue';
import Footer from './components/_Footer.vue';
import ReplaceSlide from './components/animation-components/replaceSlide.vue';
export default {
  components: {
    Layout,
    Header,
    Footer,
    ReplaceSlide,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Babylonica&family=Kameron:wght@400;700&display=swap');
#app {
  font-family: 'Babylonica', cursive, sans-serif;
}
.contents {
  overflow: hidden;
}
</style>
