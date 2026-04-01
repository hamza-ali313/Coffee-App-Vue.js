<template>
    <div class="slider container position-relative">
        <!-- Left Arrow -->
        <div v-if="showNavigation" class=" nav-btn left" @click="slidePrev"><img :src="prev" /></div>
        <!-- Swiper -->
        <swiper :slides-per-view="3" :space-between="10" :breakpoints="breakpoints" :observer="true" :modules="modules"
            :pagination="{ clickable: true }" :observe-parents="true" :watch-slides-progress="false"
            :update-on-window-resize="false" @swiper="setSwiper">
            <swiper-slide v-for="(cat, i) in props.menuCategories" :key="cat.title + cat.image">
                <MenuCard :data="cat" />
            </swiper-slide>
        </swiper>

        <!-- Right Arrow -->
        <!-- {{ showNavigation }} -->
        <div v-if="showNavigation" class="nav-btn right" @click="slideNext"><img :src="nxt" /></div>
    </div>
</template>

<script setup>
// To this:
const props = defineProps({
    menuCategories: {
        type: Array,
        default: () => []
    }
})
import { ref, computed } from "vue"

import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"



import prev from "@/assets/images/prev.png"
import nxt from "@/assets/images/nxt.png"

import { Navigation, Pagination } from "swiper/modules"
const modules = [Navigation, Pagination]
import MenuCard from "../ui/MenuCard.vue"

const visibleSlides = ref(null)
const swiperInstance = ref(null)
function setSwiper(swiper) {
    swiperInstance.value = swiper
    visibleSlides.value = swiper.params.slidesPerView

}

const showNavigation = computed(() => {
    return visibleSlides.value < props.menuCategories.length
})

function onBreakpoint(swiper) {
    visibleSlides.value = swiper.params.slidesPerView
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
    1024: { slidesPerView: 3 }
}
</script>

<style scoped lang="scss">
.slider {
    /* Remove fixed padding-bottom if you want it to be dynamic */
    padding-bottom: 20px;
}

/* 1. Make the swiper a flex container so pagination sits below the slides */
:deep(.swiper) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* Important: ensures dots aren't clipped */
}

/* 2. Reset the absolute positioning to relative/static */
:deep(.swiper-pagination) {
    position: static !important;
    /* This is the "magic" line */
    margin-top: 20px;
    /* This creates a consistent gap */
    width: 100% !important;
}

/* 3. Your existing dot styles */
:deep(.swiper-pagination-bullet) {
    background: #333 !important;
    opacity: 0.5;
    margin: 0 5px !important;
    /* Space between dots */
}

:deep(.swiper-pagination-bullet-active) {
    background: #000 !important;
    opacity: 1;
}

/* 1. Base style for all dots */
:deep(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background: #ebbd8c !important;
    /* The lighter orange/tan color */
    opacity: 1 !important;
    margin: 0 12px !important;
    /* Extra horizontal space for the ring */
    position: relative;
    transition: all 0.3s ease;
}

/* 2. Style for the Active Dot */
:deep(.swiper-pagination-bullet-active) {
    background: $theme_o !important;
    /* The darker orange color */
}

/* 3. The Dashed Ring (Pseudo-element) */
:deep(.swiper-pagination-bullet-active::after) {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Ring Size: Must be larger than the dot (12px + 8px padding) */
    width: 20px;
    height: 20px;

    /* Dashed Border */
    border: 2px dashed $theme_o;
    border-radius: 50%;

    display: block;
}
</style>
