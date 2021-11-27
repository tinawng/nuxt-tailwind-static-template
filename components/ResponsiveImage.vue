<template>
  <img ref="responsive-image" :src="images[0].path" :alt="alt" />
</template>

<script>
export default {
  props: { image: Array, alt: String },
  mounted() {
    var el = this.$refs["responsive-image"];
    this.images.forEach((image) => {
      if (window.matchMedia("(min-width: " + image.width + "px)").matches)
        el.src = image.path;
    });
  },
};
</script>