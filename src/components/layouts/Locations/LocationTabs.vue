<template>

    <div class="location-tabs d-flex justify-content-center flex-wrap gap-2 mb-5">

        <div v-for="loc in locations" :key="loc.key" class="location-tab" :class="{ active: active === loc.key }"
            @click="$emit('change', loc.key)">

            📍 {{ loc.name }}

        </div>

    </div>

</template>

<script setup>

defineProps({
    locations: Array,
    active: String
})

defineEmits(["change"])

</script>

<style scoped lang="scss">
.location-tab {
    padding: 8px 18px;
    border: 1px solid #e6c4a4;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    background: white;
}

.location-tab.active {
    background: #e6c4a4;
    color: white;
}
</style>