<template>
  <div class="testimonial-wrapper py-5">
    <!-- 🔼 TOP SLIDER (LEFT DIRECTION) -->
    <Swiper
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :speed="5000"
      :allow-touch-move="false"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      }"
      class="mb-4"
    >
      <SwiperSlide v-for="(item, index) in testimonials" :key="'top' + index">
        <SmallTestimonial :data="item" />
      </SwiperSlide>
    </Swiper>

    <!-- 🔽 BOTTOM SLIDER (RIGHT DIRECTION) -->
    <!-- :modules="[Autoplay]" -->

    <Swiper
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :speed="5000"
      :allow-touch-move="false"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }"
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
import SmallTestimonial from "../ui/SmallTestimonial.vue";
import user from "../../assets/images/user.png";
// DATA
const testimonials = [
  {
    name: "Jonathan Doe",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: user,
  },
  {
    name: "Jonathan Doe",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: user,
  },
  {
    name: "Jonathan Doe",
    rating: 4,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: user,
  },
  {
    name: "Jonathan Doe",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: user,
  },
  {
    name: "Jonathan Doe",
    rating: 4.5,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: user,
  },
];
</script>

<style scoped>
/* .testimonial-wrapper {
  overflow: hidden;
} */

/* smooth continuous effect */
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
