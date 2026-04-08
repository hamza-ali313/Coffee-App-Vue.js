<template>
    <div class="bg_pink">
        <Header iconColor="" />
        <ContactHead />
        <ContactForm />
        <ContactLocation />
        <Footer :hasBg="false" />
    </div>

</template>

<script setup>

import Header from "../components/layouts/Header.vue";
import ContactForm from "../components/layouts/contactpage/ContactForm.vue";
import ContactHead from "../components/layouts/contactpage/ContactHead.vue";
import Footer from "../components/layouts/Footer.vue";
import ContactLocation from "../components/layouts/contactpage/ContactLocation.vue";


</script>

<style lang="scss" scoped>
.d-bg {}
</style>