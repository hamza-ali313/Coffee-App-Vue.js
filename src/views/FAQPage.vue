<template>
  <div class="bg_pink">
    <MobileHeader />
    <FAQsSection />
    <Footer :hasBg="false" />
  </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import FAQsSection from "../components/layouts/FAQ/FAQsSection.vue";
</script>

<style lang="scss" scoped></style>
