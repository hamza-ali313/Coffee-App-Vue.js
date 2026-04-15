<template>
  <div class="location-section container">
    <div class="lefthl sec_heading text-center py-4 px-3">
      <h2 class="position-relative d-inline">LOCATION & OPENING HOURS</h2>
    </div>

    <!-- TABS -->

    <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
      <div
        v-for="loc in locations"
        :key="loc.key"
        class="location-tab"
        :class="{ active: activeLocation === loc.key }"
        @click="activeLocation = loc.key"
      >
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
  <OrdersAhead :steps="steps" title="Getting here" sub_title="here is how it works" />
</template>

<script setup>
import { ref, computed } from "vue";

import LocationDetails from "./LocationDetails.vue";
import Amenities from "./Amenities.vue";
import OrdersAhead from "../../layouts/OrdersAhead.vue";
import { locations } from "../../../data/locations.js";
import { steps } from "../../../data/gettinghere2.js";

const activeLocation = ref("barnes");

const currentLocation = computed(() => {
  return locations.find((l) => l.key === activeLocation.value);
});
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
