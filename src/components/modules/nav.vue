<template>
  <nav class="nav">
    <ul class="nav__ul">
      <li class="nav__ul--li" v-for="list in lists" :key="list.title">
        <router-link :to="list.title">{{ list.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { title: "home" },
        { title: "about" },
        { title: "news" },
        { title: "contact" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.nav {
  &__ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    &--li {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
