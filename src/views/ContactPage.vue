<template>
  <div class="bg_pink">
    <MobileHeader iconColor="" />
    <ContactHead />
    <ContactForm />

    <LocationDetails :data="locations[0]" />
    <Footer :hasBg="false" />
  </div>
</template>

<script setup>
import MobileHeader from "../components/layouts/MobileHeader.vue";
import ContactForm from "../components/layouts/contactpage/ContactForm.vue";
import ContactHead from "../components/layouts/contactpage/ContactHead.vue";
import Footer from "../components/layouts/Footer.vue";
import { locations } from "../data/locations.js";
import LocationDetails from "../components/layouts/Locations/LocationDetails.vue";
import ContactLocation from "../components/layouts/contactpage/ContactLocation.vue";
</script>

<style lang="scss" scoped>
.d-bg {
}
</style>
