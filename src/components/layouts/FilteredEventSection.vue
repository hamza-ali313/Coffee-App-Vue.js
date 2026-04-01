<template>
    <div class="filtersec sec_heading text-center py-4 px-3">
        <h2 class="position-relative d-inline">
            Upcoming Events
        </h2>
        <p style="padding:unset" class="text-center">
            Alongside good food and coffee, we host a rotating programme of community events in Barnes,
            gatherings and exhibitions that reflect the people and ideas around us.
        </p>
    </div>
    <div :class="['events-wrapper', { 'with-bg': selectedCategory === 'All Events' }]">
        <div class="container py-4">
            <!-- FILTER TABS -->
            <div class="filter-bar">
                <p v-for="(cat, index) in categories" :key="cat" class="filter-item"
                    :class="{ active: selectedCategory === cat }" @click="selectedCategory = cat">
                    {{ cat }}

                    <!-- separator -->
                    <!-- <span v-if="index !== categories.length - 1" class="divider">|</span> -->
                </p>
            </div>

            <!-- EVENT GRID -->
            <div class="row g-4">
                <div v-for="event in filteredEvents" :key="event.id" class="col-md-4 col-lg-3">
                    <EventCard v-bind="event" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import EventCard from "../ui/EventCard.vue";
import img1 from "@/assets/images/Fslid1.png";
import img2 from "@/assets/images/Fslid2.png";
import img3 from "@/assets/images/Fslid3.png";
import img4 from "@/assets/images/Fslid4.png";

const selectedCategory = ref("All Events");

const categories = [
    "All Events",
    "Laneway",
    "Art",
    "Talks & Workshops",
    "Coffee Experiences",
    "Social Nights",
    "Live Sport",
    "Food & Culture",
    "Family",
];

// SAMPLE DATA (replace with API later)
const events = ref([
    {
        id: 1,
        title: "Saturday Brunch Club",
        desc: "Enjoy brunch with friends.",
        day: "24",
        month: "AUG",
        tag: "Social Nights",
        category: "Social Nights",
        time: "Sat · 10:00 AM – 1:00 PM",
        spots: 4,
        image: img1,
    },
    {
        id: 2,
        title: "Coffee Tasting Evening",
        desc: "Taste premium coffee blends.",
        day: "08",
        month: "APR",
        tag: "Coffee Experiences",
        category: "Coffee Experiences",
        time: "Mon · 12:00 AM – 02:00 PM",
        spots: 10,
        image: img2,
    },
    {
        id: 3,
        title: "Local Art Showcase",
        desc: "Discover local artists.",
        day: "15",
        month: "APR",
        tag: "Art",
        category: "Art",
        time: "Sun · 02:00 AM – 04:00 PM",
        spots: 5,
        image: img3,
    },
    {
        id: 4,
        title: "Morning Coffee & Calm",
        desc: "Start your day peacefully.",
        day: "23",
        month: "MAR",
        tag: "Family",
        category: "Family",
        time: "Wed · 05:00 AM – 08:00 PM",
        spots: 8,
        image: img4,
    },
]);

// FILTER LOGIC
const filteredEvents = computed(() => {
    if (selectedCategory.value === "All Events") {
        return events.value;
    }
    return events.value.filter(
        (e) => e.category === selectedCategory.value
    );
});
</script>

<style>
.events-wrapper {
    padding: 30px;
    border-radius: 20px;
    transition: all 0.3s ease;

    &.with-bg {
        background: url('@/assets/images/your-bg.png') no-repeat center/cover;
    }
}

.filtersec.sec_heading p {
    width: 45%;
}

.filtersec.sec_heading h2::after {
    content: "";
    position: absolute;
    background-image: url(/src/assets/images/rightleaf.png);
    background-repeat: no-repeat;
    top: -27px;
    right: -63px;
    background-size: contain;
    width: 65px;
    height: 70px;
}

.filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* gap: 10px; */
    margin-bottom: 25px;
}

.filter-item {
    position: relative;
    font-size: 14px;
    color: #444;
    cursor: pointer;
    padding: 6px 14px;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 143px;
    height: 42px;

    .divider {
        margin-left: 12px;
        color: #999;
    }

    &:hover {
        color: #000;
    }

    &.active {
        background-image: url('@/assets/images/onav.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #fff;
        font-weight: 500;
    }
}
</style>