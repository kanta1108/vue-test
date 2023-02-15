<template>
  <div>
    <Layout>
      <Header></Header>
    </Layout>
    <kv></kv>
  </div>
</template>

<script>
import Header from "./components/_Header.vue";
import Kv from "./components/_Kv.vue";
import Layout from "./components/layouts/layout.vue";
export default {
  components: {
    Layout,
    Header,
    Kv,
  },
};
</script>

<style></style>
