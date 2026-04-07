<template>
    <div class="testimonial-wrapper py-5">
        <!-- 🔼 TOP SLIDER (LEFT DIRECTION) -->

        <!-- Left Arrow -->
        <div class="nav-btn left" @click="slidePrev"><img :src="prev" /></div>

        <Swiper :slides-per-view="4" :space-between="20" :loop="true" :breakpoints="breakpoints"
            :allow-touch-move="false" class="mb-4">
            <SwiperSlide v-for="(item, index) in testimonials" :key="'top' + index">
                <SmallTestimonial :data="item" />
            </SwiperSlide>
        </Swiper>


        <!-- Right Arrow -->
        <div class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SmallTestimonial from "../layouts/sliderscardsection/SmallTestimonial.vue";
import user from "../../assets/images/user.png";
import nxt from "@/assets/images/nxt.png";
import prev from "@/assets/images/prev.png";


const breakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
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