<template>
  <div class="container">
    <SecHeading main_h="what they're saying" sub_h="about dee" :showLeaf="true" />
    <div class="testi_slider position-relative">
      <!-- Left Arrow -->
      <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>

      <!-- Swiper -->
      <Swiper :slides-per-view="1" :space-between="20" :loop="true" :breakpoints="breakpoints" @swiper="setSwiper">
        <SwiperSlide v-for="(item, index) in slides" :key="index">
          <!-- Render Testimonial Card here -->
          <TestimonialCard :data="item" />
        </SwiperSlide>
      </Swiper>

      <!-- Right Arrow -->
      <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// Components
import SecHeading from "../../ui/SecHeading.vue";
import TestimonialCard from "./TestimonialCard.vue";
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
    text: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION... ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE.",
    name: "B. Blankenship",
    time: "8 days ago",
  },
  {
    image: TestiImg,
    rating: "2.5",
    text: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION... ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE.",
    name: "A. Johnson",
    time: "5 days ago",
  },
  // Add more slides if needed
];
</script>

<style scoped lang="scss">
.container {
  max-width: 1260px;
}
</style>
