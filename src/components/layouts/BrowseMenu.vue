<template>
    <div class="sec_heading text-center py-4 px-3">
        <span class="leaf">
            <img :src="leafImg" alt="leaf" />
        </span>
        <h2>Browse the full Menu and filter</h2>
        <h3>By Order Ahead</h3>
    </div>
    <div class="mt-2 mb-5 text-center">
        <GButton btntxt="Browse the Menu" icon="bi bi-list-task" />
    </div>
</template>

<script setup>
import leafImg from '../../assets/images/leaf.png'
import GButton from "../ui/GButton.vue";

</script>

<style lang="scss" scoped>
.sec_heading h2 {
    font-size: 152px !important;
    line-height: 70px !important;
}
</style>