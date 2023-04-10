<template>
  <nav :class="navPlace">
    <ul :class="navPlace + '__ul'">
      <transition-group name="slideUp" appear @before-enter="beforeEnter">
        <li
          :class="navPlace + '__ul--li'"
          v-for="(list, index) in lists"
          :key="index">
          <router-link :to="{ name: list }" class="link">{{
            list
          }}</router-link>
        </li>
      </transition-group>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['navPlace'],
  data() {
    return {
      lists: ['home', 'about', 'gallery', 'skills'],
      count: 0,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.animationDelay = `${this.count}s`;
      this.count += 0.1;
    },
  },
};
</script>
<style lang="scss" scoped>
.headerNav {
  &__ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    &--li {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 0.1em;
      cursor: pointer;
      &:hover {
        .link {
          opacity: 1;
        }
      }
      .link {
        opacity: 0.5;
        transition: opacity 0.5s linear;
      }
    }
  }
}
.footerNav {
  &__ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    &--li {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 0.1em;
      color: #fff;
      cursor: pointer;
    }
  }
}

.slideUp-enter-active {
  animation-name: kf-animation-slideUp;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes kf-animation-slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
