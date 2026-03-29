<template>
  <div class="testimonial-card p-4 h-100">
    <!-- Top (Image + Name + Rating) -->
    <div class="d-flex align-items-center mb-3">
      <img :src="data.image" class="user-img me-3" />

      <div>
        <h6 class="mb-1 fw-bold">{{ data.name }}</h6>
        <!-- ⭐ YOUR SAME RATING CODE -->
        <div class="rating d-flex align-items-center">
          <div class="star-wrapper">
            <div class="stars-bg">
              <i class="bi bi-star-fill" v-for="i in 5" :key="'bg' + i"></i>
            </div>

            <div class="stars-fill" :style="{ width: (data.rating / 5) * 100 + '%' }">
              <i class="bi bi-star-fill" v-for="i in 5" :key="'fill' + i"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Text -->
    <p class="testimonial-text">
      {{ data.text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style scoped>
/* // Small testimonial specific styles - main styles in global SCSS */
/* // Only component-specific overrides here */
</style>
