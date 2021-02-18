<template>
  <section>
    <div class="z-50 nav-container flex items-center justify-end">
      <transition name="slide-fade">
        <div v-if="show_nav" class="w-full flex justify-end mr-4">
          <h4 @click="scrollTo('hero')">About</h4>
          <h4 @click="scrollTo('projects')">Projects</h4>
          <h4 @click="scrollTo('footer')">Links</h4>
        </div>
      </transition>
      <div
        class="burger-container flex flex-col justify-center items-end"
        @click="show_nav = !show_nav"
      >
        <span class="w-5" :class="[show_nav ? 'mb-0' : 'mb-1.5']"></span>
        <span
          class="w-3 parent-hover:w-5"
          :class="{ 'opacity-0': show_nav }"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    show_nav: false,
  }),
  methods: {
    scrollTo(section_name) {
      var el = this.$parent.$parent.$el.getElementsByClassName(section_name)[0];
      el.scrollIntoView({behavior: "smooth"});
    }
  }
};
</script>

<style lang="postcss" scoped>
.nav-container {
  @apply h-32;
}
.nav-container h4 {
  @apply mx-4;
  @apply cursor-pointer;
}

.burger-container {
  @apply h-full;
  @apply cursor-pointer;
}
.burger-container span {
  height: 2px;
  @apply bg-steel-800;
  transition: all 0.4s;
  transition-property: margin, width, opacity;
}
.burger-container:hover .parent-hover\:w-5 {
  @apply w-5;
}
</style>