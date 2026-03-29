<template>
    <div class="card-box">
        <img :src="image" />

        <div class="overlay">
            <h5>{{ title }}</h5>
            <p>{{ desc }}</p>
            <span>{{ cta }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    desc: String,
    cta: String,
    image: String,
});
</script>