<template>
    <div class="bg_pink">
        <Header iconColor="" />
        <OrdersAhead />
        <BrowseMenu />
        <FAQSection />
        <GetInvolved />
        <Footer :hasBg="true" />
    </div>

</template>

<script setup>
import Header from "../components/layouts/Header.vue";
import FAQSection from "../components/layouts/FAQ/FAQSection.vue";
import OrdersAhead from "../components/layouts/OrdersAhead.vue";
import GetInvolved from "../components/layouts/GetInvolved.vue";
import BrowseMenu from "../components/layouts/BrowseMenu.vue";
import Footer from "../components/layouts/Footer.vue";
</script>

<style lang="scss" scoped>
.d-bg {}
</style>