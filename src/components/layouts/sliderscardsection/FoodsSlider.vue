<template>
  <SecHeading
    main_h="Food And Drink"
    description="Our menu is thoughtfully made, seasonal and always evolving. We care for quality ingredients, local sourcing, and delight in flavour."
    :showLeaf="false"
  />
  <div class="slider foodcard-slider container position-relative">
    <!-- Left Arrow -->
    <div class="nav-btn left d-md-none d-lg-block" @click="slidePrev">
      <img :src="prev" />
    </div>

    <!-- Swiper -->
    <Swiper
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :loopedSlides="items.length"
      :breakpoints="breakpoints"
      @swiper="setSwiper"
    >
      <SwiperSlide v-for="item in items" :key="item.title">
        <FoodCard
          :title="item.title"
          :desc="item.desc"
          :cta="item.cta"
          :image="item.image"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Right Arrow -->
    <div class="nav-btn right d-md-none d-lg-block" @click="slideNext">
      <img :src="nxt" />
    </div>
  </div>
  <!-- Tabs arrows -->
  <div class="d-none d-lg-none d-md-flex mt-3 justify-content-center gap-3">
    <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>
    <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
  </div>
  <p class="text-center pt-4">
    Whether you’re stopping in for a quick coffee or settling in for a longer meal,
    there’s something here to come back to.
  </p>
  <div class="text-center">
    <GButton btntxt="explore the menu" icon="bi bi-list-task" />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import SecHeading from "../../ui/SecHeading.vue";
import { items } from "../../../data/foodsSlider.js";
import nxt from "@/assets/images/nxt.png";
import prev from "@/assets/images/prev.png";
import GButton from "../../ui/GButton.vue";
import FoodCard from "./FoodCard.vue";

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
// Slider Data

// Responsive
const breakpoints = {
  320: { slidesPerView: 1, loop: true },
  768: { slidesPerView: 2, loop: true },
  1024: { slidesPerView: 4, loop: true },
};
</script>

<style scoped lang="scss"></style>
