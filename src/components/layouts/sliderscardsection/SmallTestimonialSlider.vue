<template>
  <div class="testimonial-wrapper py-5">
    <!-- 🔼 TOP SLIDER (LEFT DIRECTION) -->
    <!-- :autoplay="{ delay: 0, disableOnInteraction: false, reverseDirection: false, }" -->
    <Swiper
      :slides-per-view="4"
      :modules="[Autoplay]"
      :space-between="20"
      :loop="true"
      :speed="5000"
      :breakpoints="breakpoints"
      :allow-touch-move="true"
      class="mb-4"
    >
      <SwiperSlide v-for="(item, index) in testimonials" :key="'top' + index">
        <SmallTestimonial :data="item" />
      </SwiperSlide>
    </Swiper>

    <!-- 🔽 BOTTOM SLIDER (RIGHT DIRECTION) -->

    <Swiper
      :slides-per-view="4"
      :modules="[Autoplay]"
      :space-between="20"
      :loop="true"
      :speed="5000"
      :breakpoints="breakpoints"
      :allow-touch-move="true"
    >
      <SwiperSlide v-for="(item, index) in testimonials" :key="'bottom' + index">
        <SmallTestimonial :data="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SmallTestimonial from "./SmallTestimonial.vue";
import { testimonials } from "../../../data/testimonials.js";
const breakpoints = {
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
};
</script>

<style scoped lang="scss">
// SmallTestimonialSlider specific styles - main styles in global SCSS
// Only component-specific overrides here

.swiper-wrapper {
  transition-timing-function: linear !important;
  cursor: grab;
  cursor: -webkit-grab; /* for Safari */
}
</style>
