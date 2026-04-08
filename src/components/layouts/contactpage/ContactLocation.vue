<template>
   <div class="faq-section position-relative pt-4">
        <div class="container">
            <ContactLocationDetails :data="currentLocation" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { locations } from "../../../data/locations.js";
import ContactLocationDetails from "./ContactLocationDetails.vue";

const activeLocation = ref("barnes");

const currentLocation = computed(() => {
    return locations.find((l) => l.key === activeLocation.value);
});
</script>