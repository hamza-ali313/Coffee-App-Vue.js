<template>
    <div class='bg_pink'>
        <Header />
        <CheckoutLayout />
        <Footer :hasBg="false" />
    </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import Header from "../components/layouts/Header.vue";
import CheckoutLayout from "../components/layouts/checkout/CheckoutLayout.vue";
</script>

<style lang="scss" scoped></style>