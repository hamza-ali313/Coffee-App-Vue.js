<template>
  <SecHeading main_h="Food And Drink"
    description="Our menu is thoughtfully made, seasonal and always evolving. We care for quality ingredients, local sourcing, and delight in flavour."
    :showLeaf="false" />
  <div class="slider container position-relative">
    <!-- Left Arrow -->
    <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>

    <!-- Swiper -->
    <Swiper :slides-per-view="4" :space-between="20" :loop="true" :breakpoints="breakpoints" @swiper="setSwiper">
      <SwiperSlide v-for="item in items" :key="item.title">
        <FoodCard :title="item.title" :desc="item.desc" :cta="item.cta" :image="item.image" />
      </SwiperSlide>
    </Swiper>

    <!-- Right Arrow -->
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
import SecHeading from "../ui/SecHeading.vue";
import Fslid1 from "@/assets/images/Fslid1.png";
import Fslid2 from "@/assets/images/Fslid2.png";
import Fslid3 from "@/assets/images/Fslid3.png";
import Fslid4 from "@/assets/images/Fslid4.png";
import nxt from "@/assets/images/nxt.png";
import prev from "@/assets/images/prev.png";
import GButton from "../ui/GButton.vue";
import FoodCard from "../ui/FoodCard.vue";

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
const items = [
  {
    title: "Coffee & Breakfast",
    desc: "Specialty coffee brewed fresh.",
    cta: "VIEW COFFEE",
    image: Fslid1,
  },
  {
    title: "Lunch & Brunch",
    desc: "Fresh seasonal meals.",
    cta: "VIEW BRUNCH",
    image: Fslid2,
  },
  {
    title: "Bakery & Sweets",
    desc: "Delicious baked items.",
    cta: "VIEW LUNCH",
    image: Fslid3,
  },
  {
    title: "Seasonal Specials",
    desc: "Fresh pastries & treats.",
    cta: "VIEW BAKERY",
    image: Fslid4,
  },
  {
    title: "Drinks",
    desc: "Refreshing beverages.",
    cta: "VIEW DRINKS",
    image: Fslid3,
  },
];

// Responsive
const breakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};
</script>

<style scoped lang="scss">

</style>
