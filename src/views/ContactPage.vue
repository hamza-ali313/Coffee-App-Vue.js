<template>
    <div class="bg_pink">
        <Header iconColor="" />
        <ContactForm />
        <Footer :hasBg="false" />
    </div>

</template>

<script setup>
import Header from "../components/layouts/Header.vue";
import ContactForm from "../components/layouts/contactpage/ContactForm.vue";
import Footer from "../components/layouts/Footer.vue";
</script>

<style lang="scss" scoped>
.d-bg {}
</style>