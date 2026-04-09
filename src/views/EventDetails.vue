<template>
  <div class="bg_pink">
    <MobileHeader />
    <EventSection />

    <!-- More Special Events Section -->
    <div class="container pb-5">
      <div class="sec_heading text-center pt-5 mb-5 mt-5">
        <h2 class="position-relative d-inline">MORE SPECIAL EVENTS.</h2>
        <p class="mt-3">Thoughtful matches to complete your moment at Dee.</p>
      </div>
      <div class="row g-4">
        <div v-for="event in filteredEvents" :key="event.id" class="col-md-4 col-lg-3">
          <EventCard v-bind="event" />
        </div>
      </div>
    </div>

    <Footer :hasBg="false" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import MobileHeader from "../components/layouts/MobileHeader.vue";
import Footer from "../components/layouts/Footer.vue";
import EventSection from "../components/layouts/eventdetails/EventSection.vue";
import EventCard from "../components/layouts/sliderscardsection/EventCard.vue";

// Image imports for the sample data
import img1 from "@/assets/images/Fslid1.png";
import img2 from "@/assets/images/Fslid2.png";
import img3 from "@/assets/images/Fslid3.png";
import img4 from "@/assets/images/Fslid4.png";

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

const selectedCategory = ref("All Events");

const filteredEvents = computed(() => {
  if (selectedCategory.value === "All Events") {
    return events.value;
  }
  return events.value.filter((e) => e.category === selectedCategory.value);
});
</script>
