<template>
  <SecHeading
    main_h="Food And Drink"
    description="Our menu is thoughtfully made, seasonal and always evolving. We care for quality ingredients, local sourcing, and delight in flavour."
    :leafImage="False"
  />
  <div class="food-slider container position-relative">
    <!-- Left Arrow -->
    <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>

    <!-- Swiper -->
    <Swiper
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :breakpoints="breakpoints"
      @swiper="setSwiper"
    >
      <SwiperSlide v-for="item in items" :key="item.title">
        <div class="card-box">
          <img :src="item.image" />

          <div class="overlay">
            <h5>{{ item.title }}</h5>
            <p>{{ item.desc }}</p>
            <span>{{ item.cta }}</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Right Arrow -->
    <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
  </div>
  <p class="text-center pt-4">
    Whether you’re stopping in for a quick coffee or settling in for a longer meal,
    there’s something here to come back to.
  </p>
  <GButton btntxt="explore the menu" icon="bi bi-list-task" />
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

<style scoped>
.food-slider {
  margin-top: 50px;
}

/* CARD */
.card-box {
  position: relative;
  border-radius: 9px;
  overflow: hidden;
}

.card-box img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* OVERLAY */
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
  text-align: start;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

.overlay h5 {
  font-weight: bold;
  text-transform: uppercase;
}

.overlay span {
  font-size: 12px;
  display: block;
  margin-top: 10px;
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
