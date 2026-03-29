<template>
  <div class="gallery-item" :class="variant">
    <img :src="img" alt="gallery" />
  </div>
</template>

<script setup>
defineProps({
  img: String,
  variant: String,
});
</script>

<style scoped lang="scss">
// GalleryItem specific styles - main styles in global SCSS
// Only component-specific overrides here

.gallery-item {
  border-radius: 16px;
  overflow: hidden;

  &.short {
    height: 280px;
  }

  &.tall {
    height: 460px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.move-up {
  margin: -180px 0 0 0;
}
</style>
