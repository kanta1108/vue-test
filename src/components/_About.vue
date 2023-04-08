<template>
  <layout>
    <section class="section about" id="about">
      <sectionTitle :sectionTitle="title"></sectionTitle>
      <div class="about__inner">
        <paragraph
          :paragraph="paragraph1.text"
          :isReverse="paragraph1.isReverse"
          :cardNumber="paragraph1.num"
          :direction="paragraph1.direction">
        </paragraph>
        <paragraph
          :paragraph="paragraph2.text"
          :isReverse="paragraph2.isReverse"
          :cardNumber="paragraph2.num"
          :direction="paragraph2.direction">
        </paragraph>
        <paragraph
          :paragraph="paragraph3.text"
          :isReverse="paragraph3.isReverse"
          :cardNumber="paragraph3.num"
          :direction="paragraph3.direction">
        </paragraph>
      </div>
    </section>
  </layout>
</template>
<script>
import layout from "./layouts/layout.vue";
import paragraph from "./modules/paragraph.vue";
import sectionTitle from "./modules/sectionTitle.vue";
export default {
  components: {
    layout,
    paragraph,
    sectionTitle,
  },
  data() {
    return {
      title: "About",
      paragraph1: {
        num: 5,
        direction: 300,
        isReverse: false,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. `,
      },

      paragraph2: {
        num: 6,
        direction: -300,
        isReverse: true,
        text: `Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      paragraph3: {
        num: 7,
        direction: 300,
        isReverse: false,
        text: `At vero eos et accusamus et iusto odio dignissimos ducimus, 
      qui blanditiis praesentium voluptatum deleniti atque corrupti, 
      quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, 
      `,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.about {
  &__inner {
    margin-block-start: 5vw;
    display: flex;
    flex-direction: column;
    gap: 5vw;
  }
}
</style>
