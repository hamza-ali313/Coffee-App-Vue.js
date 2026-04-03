<template>
    <div class="dishslidesec">
        <Swiper class="dish-slider" :slides-per-view="1.5" :space-between="8" :centeredSlides="true" :loop="true">
            <SwiperSlide v-for="(img, index) in sliderImages" :key="index" class="slide">
                <img :src="img" />
            </SwiperSlide>
        </Swiper>
    </div>
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
    overflow: hidden;
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

.dishslidesec {
    position: relative;

    &::after {
        content: "";
        position: absolute;
        background-image: url("@/assets/images/dishslideaft.png");
        background-repeat: no-repeat;
        background-size: contain;
        top: -80px;
        right: 0;
        width: 210px;
        height: 150px;
    }
}
</style>