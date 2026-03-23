<template>
  <SecHeading
    main_h="Food And Drink"
    description="Our menu is thoughtfully made, seasonal and always evolving. We care for quality ingredients, local sourcing, and delight in flavour."
    :leafImage="false"
  />
  <div class="testi_slider container position-relative">
    <!-- Left Arrow -->
    <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>

    <!-- Swiper -->
    <Swiper
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :breakpoints="breakpoints"
      @swiper="setSwiper"
    >
      <SwiperSlide v-for="(item, index) in slides" :key="index">
        <!-- Render Testimonial Card here -->
        <TestimonialCard :data="item" />
      </SwiperSlide>
    </Swiper>

    <!-- Right Arrow -->
    <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// Components
import SecHeading from "../ui/SecHeading.vue";
import TestimonialCard from "../ui/TestimonialCard.vue";
// Images
import TestiImg from "@/assets/images/TestiImg.png";
import nxt from "@/assets/images/nxt.png";
import prev from "@/assets/images/prev.png";

// Swiper instance
const swiperInstance = ref(null);
function setSwiper(swiper) {
  swiperInstance.value = swiper;
}
function slideNext() {
  swiperInstance.value?.slideNext();
}
function slidePrev() {
  swiperInstance.value?.slidePrev();
}

// Slides Data
const slides = [
  {
    image: TestiImg,
    rating: "4.8",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "B. Blankenship",
    time: "8 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    image: TestiImg,
    rating: "2.5",
    text:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "A. Johnson",
    time: "5 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  // Add more slides if needed
];
</script>

<style scoped>
.testi_slider {
  margin-top: 50px;
  position: relative;
}

/* NAV BUTTONS */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}
.nav-btn img {
  width: 60px;
}
.nav-btn.left {
  left: -80px;
}
.nav-btn.right {
  right: -80px;
}
</style>
