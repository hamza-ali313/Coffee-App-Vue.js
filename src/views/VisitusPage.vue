<template>
    <div class='bg_pink'>
        <Header />
        <LocationSection />
        <Footer :hasBg="false" />
    </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import Header from "../components/layouts/Header.vue";
import LocationSection from "../components/layouts/Locations/LocationSection.vue";
</script>

<style lang="scss" scoped></style>