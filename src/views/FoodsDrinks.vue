<template>
    <div class='bg_pink'>
        <InnerBanner />
        <MenuSection />
        <Footer :hasBg="false" />

    </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import MenuSection from "../components/layouts/MenuSection.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";
</script>
