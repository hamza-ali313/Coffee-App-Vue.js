<template>
    <div class='bg_pink'>
        <InnerBanner title="What's on at dee cafe!" subtitle="thoughtfully happening at dee"
            description="A place for connection, creativity and community" :bgImage="eventBanner"
            :primaryBtn="{ text: 'Explore What’s On' }" :secondaryBtn="{ text: 'Get Tickets' }"
            @primary-click="exploreEvents" @secondary-click="buyTickets" iconColor="white" />
        <CalenderWrapper />
        <FilteredEventSection />
        <FooterAbove />
    </div>
</template>


<script setup>
import FooterAbove from "../components/layouts/FooterAbove.vue";
import CalenderWrapper from "../components/layouts/calender/CalenderWrapper.vue";
import FilteredEventSection from "../components/layouts/FilteredEventSection.vue";
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

<style lang="scss" scoped></style>