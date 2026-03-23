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
.testimonial-card {
  background: #ffffff99;
  border-radius: 7px;
  border: 1px solid #00000014;
  min-height: 220px;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

/* USER IMAGE */
.user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

/* TEXT */
.testimonial-text {
  font-size: 34px;
  color: #555;
  line-height: 21px;
  text-align: left;
  font-family: "DramaturgSC";
}

/* ⭐ RATING (same as yours) */
.star-wrapper {
  position: relative;
  display: inline-block;
  line-height: 1;
}

.stars-bg,
.stars-fill {
  display: flex;
  gap: 2px;
}

.stars-bg i {
  color: #ddd;
}

.stars-fill {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}

.stars-fill i {
  color: #ffc107;
}
</style>
