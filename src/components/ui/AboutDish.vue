<template>
    <div class="about mt-4">
        <h5 class="section-title">About The Dish</h5>

        <div class="about-grid">
            <div v-for="item in items" :key="item.label" class="about-item">
                <img :src="item.icon" />

                <div>
                    <strong>
                        <p class="label">{{ item.label }}</p>
                        <small class="value">{{ item.value }}</small>
                    </strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    items: Array
})
</script>

<style scoped lang="scss">
.section-title {
    font-weight: 600;
    margin-bottom: 12px;
}

.about-grid {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.about-item {
    display: flex;
    align-items: start;
    gap: 10px;
}

.icon {
    font-size: 20px;
    color: #c9a27e;
}

.about-item img {
    width: 23px;
}

.label {
    // font-family: $titillium-regular;
    margin: 0;
    font-size: 16px;
    color: #000;
}

.value {
    color: #d48c44;
    font-family: $titillium-regular;
    font-size: 16px;
}
</style>