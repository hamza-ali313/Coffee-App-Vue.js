<template>

    <div class="food-filter">

        <button v-for="cat in categories" :key="cat" :class="{ active: selected === cat }"
            @click="$emit('change', cat)">
            {{ cat }}
        </button>

    </div>

</template>

<script setup>

defineProps({
    selected: String
})

const categories = [
    "All",
    "Vegan",
    "Vegetarian",
    "Gluten-free",
    "Kids"
]

</script>