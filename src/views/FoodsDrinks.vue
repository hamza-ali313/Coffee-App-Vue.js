<template>
    <div class='bg_pink'>
        <InnerBanner title="FOOD & DRINKS AT DEE" subtitle="Food Drinks Thoughtfully Made"
            description="Seasonal food, specialty coffee, and baked treats made with care for slow mornings, relaxed brunches, and easy lunches."
            :bgImage="eventBanner" :primaryBtn="{ text: 'View Details' }" :secondaryBtn="{ text: 'Order Ahead' }"
            @primary-click="exploreEvents" @secondary-click="buyTickets" iconColor="white" />
        <MenuSection />
        <Footer :hasBg="false" />

    </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import MenuSection from "../components/layouts/sliderscardsection/MenuSection.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";

import eventBanner from "@/assets/images/inbanevent.png"

import { useRouter } from "vue-router";
const router = useRouter();

const exploreEvents = () => {
    router.push('/faqs')
    console.log('working')
}

const buyTickets = () => {
    router.push('/locations')
}
</script>
