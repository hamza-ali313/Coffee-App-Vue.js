<template>
    <div class="location-section container">
        <div class="lefthl sec_heading text-center py-4 px-3">
            <h2 class="position-relative d-inline">LOCATION & OPENING HOURS</h2>
        </div>

        <!-- TABS -->

        <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
            <div v-for="loc in locations" :key="loc.key" class="location-tab"
                :class="{ active: activeLocation === loc.key }" @click="activeLocation = loc.key">
                <i class="bi bi-geo-alt-fill" style="color: #d08a44; padding: 0 2px 0 0"></i>
                <p>{{ loc.name }}</p>
            </div>
        </div>

        <!-- DETAILS -->

        <LocationDetails :data="currentLocation" />

        <!-- AMENITIES -->

        <Amenities :items="currentLocation.amenities" />

        <!-- GETTING HERE -->
    </div>
    <OrdersAhead :items="currentLocation.gettingHere" />
</template>

<script setup>
import { ref, computed } from "vue";

import LocationDetails from "./LocationDetails.vue";
import Amenities from "./Amenities.vue";
import OrdersAhead from "../../layouts/OrdersAhead.vue";

// import { locations } from "@/data/locations"

const activeLocation = ref("barnes");

const currentLocation = computed(() => {
    return locations.find((l) => l.key === activeLocation.value);
});
const locations = [
    {
        key: "barnes",
        name: "Barnes, London, UK",

        cafeTitle: "DEE CAFE BARNES, LONDON",

        address: "221 Barnes High St, London SW13",
        phone: "(215) 765 7899",
        email: "info@deecafe.com",

        mapQuery: "221 Barnes High St London",

        openingHours: [
            { day: "Monday", time: "8am - 4:30pm" },
            { day: "Tuesday", time: "8am - 4:30pm" },
            { day: "Wednesday", time: "8am - 4:30pm" },
            { day: "Thursday", time: "11am - 6:30pm" },
            { day: "Friday", time: "8am - 4:30pm" },
            { day: "Sat - Sun", time: "Closed" },
        ],

        amenities: [
            "Free WiFi",
            "Indoor & outdoor seating",
            "Dog-friendly environment",
            "Accessible entry",
            "Comfortable workspace area",
        ],
    },

    {
        key: "fulham",
        name: "Fulham, London, UK",

        cafeTitle: "DEE CAFE FULHAM, LONDON",

        address: "Fulham Rd, London SW6",
        phone: "(215) 123 4567",
        email: "fulham@deecafe.com",

        mapQuery: "Fulham Rd London",

        openingHours: [
            { day: "Monday", time: "8am - 4pm" },
            { day: "Tuesday", time: "8am - 4pm" },
            { day: "Wednesday", time: "8am - 4pm" },
            { day: "Thursday", time: "8am - 6pm" },
            { day: "Friday", time: "8am - 4pm" },
            { day: "Sat - Sun", time: "Closed" },
        ],

        amenities: ["Free WiFi", "Outdoor seating", "Pet friendly"],
    },

    {
        key: "parsons",
        name: "Parsons, London, UK",
        cafeTitle: "DEE CAFE PARSONS, LONDON",
        address: "Parsons Green, London",
        phone: "(215) 333 2222",
        email: "parsons@deecafe.com",
        mapQuery: "Parsons Green London",
        openingHours: [],
        amenities: ["Free WiFi", "Outdoor seating"],
    },

    {
        key: "victoria",
        name: "Victoria, London, UK",
        cafeTitle: "DEE CAFE VICTORIA, LONDON",
        address: "Victoria Station London",
        phone: "(215) 999 8888",
        email: "victoria@deecafe.com",
        mapQuery: "Victoria Station London",
        openingHours: [],
        amenities: ["Free WiFi", "Dog Friendly"],
    },
];
</script>

<style lang="scss" scoped>
.location-tab {
    background: #fff;
    padding: 6px 12px;
    border-radius: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    border: 1px solid #ccc;

    p {
        margin: 0;
    }

    &.active {
        background: #f6dddd;
        border-color: $theme_o;
    }
}
</style>
