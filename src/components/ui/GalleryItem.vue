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

<style scoped>
.gallery-item {
  border-radius: 16px;
  overflow: hidden;
}

.gallery-item.short {
  height: 280px;
}

.gallery-item.tall {
  height: 460px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.move-up {
  margin: -180px 0 0 0;
}
</style>
