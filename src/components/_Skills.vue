<template>
  <Layout>
    <section class="section skills" id="skills">
      <sectionTitle :sectionTitle="title"></sectionTitle>
      <div class="skills__inner">
        <skill
          :cardNumber="card1.number"
          :title="card1.title"
          :descriptions="card1.descriptions"></skill>
        <skill
          :cardNumber="card2.number"
          :title="card2.title"
          :descriptions="card2.descriptions"></skill>
        <skill
          :cardNumber="card3.number"
          :title="card3.title"
          :descriptions="card3.descriptions"></skill>
      </div>
      <!-- /.skills__inner -->
    </section>
  </Layout>
</template>
<script>
import Layout from "./layouts/layout.vue";
import skill from "./modules/skill";
import sectionTitle from "./modules/sectionTitle.vue";
export default {
  components: {
    skill,
    Layout,
    sectionTitle,
  },
  data() {
    return {
      title: "Skills",
      card1: {
        title: "camera",
        descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        number: 8,
      },
      card2: {
        title: "painting",
        descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        number: 9,
      },
      card3: {
        title: "programing",
        descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        number: 10,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 5vw;
  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5vw;
  }
}
</style>
