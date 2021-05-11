<template>
  <div class="z-50 fixed top-0 left-0 text-xs">
    <span class="hidden xl:contents">XL </span>
    <span class="hidden lg:contents">LG </span>
    <span class="hidden md:contents">MD </span>
    <span class="hidden sm:contents">SM </span>
    <span>@ {{ innerWidth }} x {{ innerHeight }} </span>
    <span class="hidden portrait:contents">PORTAIT</span>
  </div>
</template>

<script>
// 🔖 <ClientOnly><ScreenDebug/></ClientOnly>
export default {
  computed: {
    innerWidth: function () {
      return window.innerWidth;
    },
    innerHeight: function () {
      return window.innerHeight;
    },
  },
};
</script>

<style>
</style>
