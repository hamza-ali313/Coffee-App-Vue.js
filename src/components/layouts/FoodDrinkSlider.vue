<template>

    <div class="slider position-relative">

        <div class="nav-btn left" @click="slidePrev">
            <img :src="prev" />
        </div>

        <Swiper :slides-per-view="4" :space-between="20" :loop="true" :breakpoints="breakpoints" @swiper="setSwiper">

            <SwiperSlide v-for="food in foods" :key="food.title">

                <FoodDrinkCard :title="food.title" :desc="food.desc" :image="food.image" :items="food.items" />

            </SwiperSlide>

        </Swiper>

        <div class="nav-btn right" @click="slideNext">
            <img :src="nxt" />
        </div>

    </div>

</template>

<script setup>

import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

import FoodDrinkCard from "../ui/FoodDrinkCard.vue"

import prev from "@/assets/images/prev.png"
import nxt from "@/assets/images/nxt.png"

defineProps({
    foods: Array
})

const swiperInstance = ref(null)

function setSwiper(swiper) {
    swiperInstance.value = swiper
}

function slideNext() {
    swiperInstance.value?.slideNext()
}

function slidePrev() {
    swiperInstance.value?.slidePrev()
}

const breakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
}

</script>