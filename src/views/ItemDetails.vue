<template>
    <div class="bg_pink">
        <Header />
        <DishSection />
        <PairsWithSlider />
        <Footer :hasBg="false" />
    </div>
</template>

<script setup>
import Header from "../components/layouts/Header.vue";
import PairsWithSlider from "../components/layouts/sliderscardsection/PairsWithSlider.vue";
import Footer from "../components/layouts/Footer.vue";
import DishSection from "../components/layouts/itemdetails/DishSection.vue";
</script>