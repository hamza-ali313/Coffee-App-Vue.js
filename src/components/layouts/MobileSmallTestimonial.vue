<template>
  <div class="testimonial-wrapper container py-5">
    <div class="container">
      <SecHeading main_h="WHAT they'er saying" sub_h="About Dee" :showLeaf="true" />
    </div>

    <!-- Left Arrow -->
    <div class="nav-btn left d-lg-block d-md-block d-none" @click="slidePrev">
      <img :src="prev" />
    </div>

    <Swiper
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :breakpoints="breakpoints"
      @swiper="setSwiper"
      :allow-touch-move="false"
      class="mb-4"
    >
      <SwiperSlide v-for="(item, index) in testimonials" :key="'top' + index">
        <SmallTestimonial :data="item" />
      </SwiperSlide>
    </Swiper>

    <!-- Right Arrow -->
    <div class="nav-btn right d-lg-block d-md-block d-none" @click="slideNext">
      <img :src="nxt" />
    </div>

    <!-- mobile arrows -->
    <div class="d-lg-none d-md-none d-flex justify-content-center gap-3">
      <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>
      <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import SmallTestimonial from "../layouts/sliderscardsection/SmallTestimonial.vue";
import user from "../../assets/images/user.png";
import nxt from "@/assets/images/nxt.png";
import prev from "@/assets/images/prev.png";
import SecHeading from "../ui/SecHeading.vue";

const breakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};

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

<style scoped lang="scss">
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
