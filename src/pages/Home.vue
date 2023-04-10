<template>
  <div>
    <kv></kv>
    <About></About>
    <Gallery></Gallery>
    <Skills></Skills>
  </div>
</template>
<script>
import 'normalize.css';
import Kv from '../components/_Kv.vue';
import Gallery from '../components/_Gallery.vue';
import About from '../components/_About.vue';
import Skills from '../components/_Skills.vue';
export default {
  components: {
    Kv,
    Gallery,
    About,
    Skills,
  },
};
</script>
