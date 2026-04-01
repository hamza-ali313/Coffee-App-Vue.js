<template>
    <HomeBanner />
    <DishSection />
    <Footer :hasBg="false" />
</template>

<script setup>
import HomeBanner from "../components/layouts/HomeBanner.vue";
import Footer from "../components/layouts/Footer.vue";
import DishSection from "../components/layouts/DishSection.vue";
</script>