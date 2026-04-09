<template>
  <div class="bg_pink">
    <MobileHeader />
    <CheckoutLayout />
    <Footer :hasBg="false" />
  </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import CheckoutLayout from "../components/layouts/checkout/CheckoutLayout.vue";
</script>

<style lang="scss" scoped></style>
