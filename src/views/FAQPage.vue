<template>
    <div class='bg_pink'>
        <Header />
        <FAQsSection />
        <Footer :hasBg="false" />
    </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import Header from "../components/layouts/Header.vue";
import FAQsSection from "../components/layouts/FAQ/FAQsSection.vue";
</script>

<style lang="scss" scoped></style>