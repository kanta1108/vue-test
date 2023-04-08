<template>
  <div>
    <Layout>
      <Header></Header>
    </Layout>
    <kv></kv>
    <About></About>
    <Gallery></Gallery>
    <Skills></Skills>
    <Footer></Footer>
  </div>
</template>

<script>
import "normalize.css";
import Header from "./components/_Header.vue";
import Kv from "./components/_Kv.vue";
import Layout from "./components/layouts/layout.vue";
import Gallery from "./components/_Gallery.vue";
import About from "./components/_About.vue";
import Skills from "./components/_Skills.vue";
import Footer from "./components/_Footer.vue";
export default {
  components: {
    Layout,
    Header,
    Kv,
    Gallery,
    About,
    Skills,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Babylonica&family=Kameron:wght@400;700&display=swap");
#app {
  font-family: "Babylonica", cursive, sans-serif;
}
</style>
