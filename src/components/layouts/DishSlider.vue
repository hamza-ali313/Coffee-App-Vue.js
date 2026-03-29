<template>
    <Swiper class="dish-slider" :slides-per-view="'auto'" :space-between="8" :centeredSlides="true" :loop="true">
        <SwiperSlide v-for="(img, index) in sliderImages" :key="index" class="slide">
            <img :src="img" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

defineProps({
    sliderImages: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="scss">
.swiper {
    overflow: unset;
}

.dish-slider {
    padding: 40px 0;
}

.slide {
    width: 60%;
    transition: all 0.4s ease;
}

/* Center slide wider */
.swiper-slide-active {
    width: 85%;
    opacity: 1;

}

.slide img {
    width: 100%;
    border-radius: 10px;
    height: 400px;
    object-fit: cover;
}
</style>