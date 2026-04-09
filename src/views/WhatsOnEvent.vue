<template>
    <div class='bg_pink'>
        <InnerBanner title="What's on at dee cafe!" subtitle="thoughtfully happening at dee"
            description="A place for connection, creativity and community" :bgImage="eventBanner"
            :primaryBtn="{ text: 'Explore What’s On' }" :secondaryBtn="{ text: 'Get Tickets' }"
            @primary-click="exploreEvents" @secondary-click="buyTickets" iconColor="white" />
          <div class="d-flex gap-1 py-5 justify-content-center">
            <GButton 
        btntxt="upcoming events" 
        icon="bi bi-calendar-event" 
        @click="activeTab = 'upcoming'" 
    />
    <OButton 
        btntxt="calender view" 
        @click="activeTab = 'calendar'" 
    />
        </div>    
        <!-- Calendar -->
        <CalenderWrapper v-if="activeTab === 'calendar'" />

        <!-- Upcoming Events -->
        <FilteredEventSection v-if="activeTab === 'upcoming'" />
        <FooterAbove />
    </div>
</template>


<script setup>
import { ref } from "vue";

const activeTab = ref("upcoming"); // default tab
import GButton from "../components/ui/GButton.vue";
import OButton from "../components/ui/OButton.vue";
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