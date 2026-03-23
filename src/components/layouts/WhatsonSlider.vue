<template>
  <div class="container">
    <SecHeading
      main_h="WHAT'S ON"
      sub_h="At Dee"
      description="A space for connection, creativity and conversation. From small community gatherings and workshops to rotating art exhibitions and new dishes, there's always something unfolding. Take a look at what's new or coming up."
      :showLeaf="true"
    />
  </div>
  <div class="event-slider container position-relative">
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
      <SwiperSlide v-for="item in events" :key="item.title">
        <EventCard
          :title="item.title"
          :desc="item.desc"
          :day="item.day"
          :month="item.month"
          :tag="item.tag"
          :time="item.time"
          :spots="item.spots"
          :image="item.image"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Right Arrow -->
    <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SecHeading from "../ui/SecHeading.vue";
import "swiper/css";
import EventCard from "../ui/EventCard.vue";
import img1 from "@/assets/images/Fslid1.png";
import img2 from "@/assets/images/Fslid2.png";
import img3 from "@/assets/images/Fslid3.png";
import img4 from "@/assets/images/Fslid4.png";
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
    desc: "Lorem ipsum dolor sit amet.",
    day: "24",
    month: "AUG",
    tag: "Social Nights",
    time: "10:00 AM – 01:00 PM",
    spots: 4,
    image: img1,
  },
  {
    title: "Coffee Tasting Evening",
    desc: "Lorem ipsum dolor sit amet.",
    day: "08",
    month: "APR",
    tag: "Coffee Experiences",
    time: "12:00 AM – 02:00 PM",
    spots: 10,
    image: img2,
  },
  {
    title: "Local Art Showcase",
    desc: "Lorem ipsum dolor sit amet.",
    day: "15",
    month: "JUL",
    tag: "Art",
    time: "02:00 AM – 04:00 PM",
    spots: 6,
    image: img3,
  },
  {
    title: "Morning Coffee & Calm",
    desc: "Lorem ipsum dolor sit amet.",
    day: "23",
    month: "MAR",
    tag: "Family",
    time: "05:00 AM – 08:00 PM",
    spots: 8,
    image: img4,
  },
];

const breakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};
</script>
<style scoped>
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
