<template>
  <div class="slider event-slider container position-relative">
    <!-- Left Arrow -->
    <div class="nav-btn left d-md-none d-lg-block" @click="slidePrev">
      <img :src="prev" />
    </div>

    <!-- Swiper -->
    <Swiper
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :breakpoints="breakpoints"
      @swiper="setSwiper"
    >
      <SwiperSlide v-for="item in events" :key="item.title">
        <EventCard
          :title="item.title"
          :desc="item.desc"
          :day="item.day"
          :month="item.month"
          :year="item.year"
          :tag="item.tag"
          :time="item.time"
          :spots="item.spots"
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
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SecHeading from "../../ui/SecHeading.vue";
import GButton from "../../ui/GButton.vue";
import "swiper/css";
import EventCard from "./EventCard.vue";
import img1 from "@/assets/images/eve1.png";
import img2 from "@/assets/images/eve2.png";
import img3 from "@/assets/images/eve3.png";
import img4 from "@/assets/images/eve4.png";
import img5 from "@/assets/images/Gal1.png";
import prev from "@/assets/images/prev.png";
import nxt from "@/assets/images/nxt.png";
import wavy from "@/assets/images/wavy.png";

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

// Event Data
const events = [
  {
    title: "Saturday Brunch Club",
    desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
    day: "24",
    month: "AUG",
    year: "2026",
    tag: "Social Nights",
    time: "10:00 AM – 01:00 PM",
    spots: 4,
    image: img1,
  },
  {
    title: "Coffee Tasting Evening",
    desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
    day: "08",
    month: "APR",
    year: "2026",
    tag: "Coffee Experiences",
    time: "12:00 AM – 02:00 PM",
    spots: 10,
    image: img2,
  },
  {
    title: "Local Art Showcase",
    desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
    day: "15",
    month: "JUL",
    year: "2026",
    tag: "Art",
    time: "02:00 AM – 04:00 PM",
    spots: 6,
    image: img3,
  },
  {
    title: "Morning Coffee & Calm",
    desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
    day: "23",
    month: "MAR",
    year: "2026",
    tag: "Family",
    time: "05:00 AM – 08:00 PM",
    spots: 8,
    image: img4,
  },
  {
    title: "Saturday Brunch Club",
    desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
    day: "24",
    month: "AUG",
    year: "2026",
    tag: "Social Nights",
    time: "10:00 AM – 01:00 PM",
    spots: 4,
    image: img5,
  },
];

const breakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};
</script>
<style scoped lang="scss"></style>
