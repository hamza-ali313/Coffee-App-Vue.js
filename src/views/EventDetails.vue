<template>
  <div class="bg_pink">
    <MobileHeader />
    <EventSection />

    <!-- More Special Events Section -->
    <div class="pb-5">
      <div class="container">
        <SecHeading
          main_h="MORE SPECIAL EVENTS."
          description="Thoughtful matches to complete your moment at Dee."
          :showLeaf="true"
        />
      </div>
    </div>
    <div class="row g-4 pairs_with_sec">
      <div class="container">
        <WhatsonSlider />
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
import WhatsonSlider from "../components/layouts/sliderscardsection/WhatsonSlider.vue";
import SecHeading from "../components/ui/SecHeading.vue";

const selectedCategory = ref("All Events");

const filteredEvents = computed(() => {
  if (selectedCategory.value === "All Events") {
    return events.value;
  }
  return events.value.filter((e) => e.category === selectedCategory.value);
});
</script>
<style scoped>
.pairs_with_sec::before {
  top: -150px;
}
</style>
