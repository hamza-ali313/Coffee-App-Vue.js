<template>
    <div class="bg_pink">
        <MobileHeader />
        <LocationSection />
        <Footer :hasBg="false" />
    </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import LocationSection from "../components/layouts/Locations/LocationSection.vue";
</script>

<style lang="scss" scoped></style>
