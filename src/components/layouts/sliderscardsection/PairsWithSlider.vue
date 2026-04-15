<template>
  <div class="pairs_with_sec">
    <div class="sec_heading text-center py-4">
      <h2>Pairs well with ...</h2>
      <p>Thoughtful matches to complete your moment at Dee.</p>
    </div>
    <div class="container slider position-relative">
      <!-- Left Arrow -->
      <div v-if="showNavigation" class="nav-btn left" @click="slidePrev">
        <img :src="prev" />
      </div>
      <!-- Swiper -->
      <swiper
        :slides-per-view="4"
        :space-between="10"
        :breakpoints="breakpoints"
        :observer="true"
        :modules="modules"
        :observe-parents="true"
        :watch-slides-progress="false"
        :update-on-window-resize="false"
        @swiper="setSwiper"
      >
        <swiper-slide v-for="(cat, i) in menuCategories" :key="i">
          <PairsWithCard :data="cat" />
        </swiper-slide>
      </swiper>

      <!-- Right Arrow -->
      <!-- {{ showNavigation }} -->
      <div v-if="showNavigation" class="nav-btn right" @click="slideNext">
        <img :src="nxt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import prev from "@/assets/images/prev.png";
import nxt from "@/assets/images/nxt.png";
import pair1 from "@/assets/images/pair1.png";
import pair2 from "@/assets/images/pair2.png";
import pair3 from "@/assets/images/pair3.png";
import pair4 from "@/assets/images/pair4.png";

import { Navigation, Pagination } from "swiper/modules";
const modules = [Navigation, Pagination];
import PairsWithCard from "./PairsWithCard.vue";

const visibleSlides = ref(null);
const swiperInstance = ref(null);
function setSwiper(swiper) {
  swiperInstance.value = swiper;
  visibleSlides.value = swiper.params.slidesPerView;
}

const showNavigation = computed(() => {
  return visibleSlides.value < menuCategories.length;
});

function onBreakpoint(swiper) {
  visibleSlides.value = swiper.params.slidesPerView;
}
function slideNext() {
  swiperInstance.value?.slideNext();
}

function slidePrev() {
  swiperInstance.value?.slidePrev();
}

const breakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};

const menuCategories = [
  {
    title: "Flat White",
    description: "Velvety espresso with softly steamed milk",
    price: "£8.90",
    image: pair1,
    tags: ["Vegetarian"],
  },
  {
    title: "Fresh Orange Juice",
    description: "Cold-pressed, naturally bright and refreshing",
    price: "£8.90",
    image: pair2,
    tags: ["Vegetarian", "Vegan"],
  },
  {
    title: "Chicken Alfredo Linguine",
    description: "Cold-pressed, naturally bright and refreshing",
    price: "£8.90",
    image: pair3,
    tags: [],
  },
  {
    title: "Cake Slices",
    description: "Cold-pressed, naturally bright and refreshing",
    price: "£8.90",
    image: pair4,
    tags: [],
  },
  {
    title: "Flat White",
    description: "Velvety espresso with softly steamed milk",
    price: "£8.90",
    image: pair1,
    tags: ["Vegetarian"],
  },
];
</script>

<style scoped lang="scss">
.sec_heading h2 {
  position: relative;
  display: inline-block;
}

.sec_heading h2::after {
  content: "";
  position: absolute;
  background-image: url(/src/assets/images/leaf.png);
  background-repeat: no-repeat;
  top: -34px;
  right: 129px;
  background-size: contain;
  width: 65px;
  height: 70px;
}
</style>
