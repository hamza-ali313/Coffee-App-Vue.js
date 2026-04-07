<template>
    <div class="event_grid">
        <div class="container">
            <SecHeading main_h="WHAT'S ON" sub_h="At Dee"
                description="A space for connection, creativity and conversation. From small community gatherings and workshops to rotating art exhibitions and new dishes, there's always something unfolding. Take a look at what's new or coming up."
                :showLeaf="true" />
        </div>
        <div class='container'>
            <div class="row g-4">
                <div v-for="(item, i) in events" :key="i" class="col-md-4 col-lg-3">
                    <EventCard :title="item.title" :desc="item.desc" :day="item.day" :month="item.month" :tag="item.tag"
                        :time="item.time" :spots="item.spots" :image="item.image" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import EventCard from './EventCard.vue';
import SecHeading from '../../ui/SecHeading.vue';
import img1 from "@/assets/images/eve1.png";
import img2 from "@/assets/images/eve2.png";
import img3 from "@/assets/images/eve3.png";
import img4 from "@/assets/images/eve4.png";
//  Event Data
const events = [
    {
        title: "Saturday Brunch Club",
        desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
        day: "24",
        month: "AUG",
        tag: "Social Nights",
        time: "10:00 AM – 01:00 PM",
        spots: 4,
        image: img1,
    },
    {
        title: "Coffee Tasting Evening",
        desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
        day: "08",
        month: "APR",
        tag: "Coffee Experiences",
        time: "12:00 AM – 02:00 PM",
        spots: 10,
        image: img2,
    },
    {
        title: "Local Art Showcase",
        desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
        day: "15",
        month: "JUL",
        tag: "Art",
        time: "02:00 AM – 04:00 PM",
        spots: 6,
        image: img3,
    },
    {
        title: "Morning Coffee & Calm",
        desc: "Lorem ipsum dolor sit amet, consectetur adip-isicing elit, sed do eiusmod.",
        day: "23",
        month: "MAR",
        tag: "Family",
        time: "05:00 AM – 08:00 PM",
        spots: 8,
        image: img4,
    },
];
</script>
<style lang="scss"></style>