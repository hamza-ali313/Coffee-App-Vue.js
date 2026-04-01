<template>
    <div class='bg_pink'>
        <InnerBanner />
        <CalenderWrapper />
        <FilteredEventSection />
        <FooterAbove />
    </div>
</template>

<script setup>
import FooterAbove from "../components/layouts/FooterAbove.vue";
import CalenderWrapper from "../components/layouts/CalenderWrapper.vue";
import FilteredEventSection from "../components/layouts/FilteredEventSection.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";
</script>

<style lang="scss" scoped></style>