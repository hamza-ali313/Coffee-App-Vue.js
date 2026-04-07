<template>
    <div class="foodcard-box">
        <img :src="image" />

        <div class="overlay">
            <h5>{{ title }}</h5>
            <p>{{ desc }}</p>
            <router-link to="/orderahead">
                {{ cta }}
            </router-link>
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