<template>
    <div class="allergens mt-4">
        <h5 class="section-title">Allergen Information</h5>

        <div class="tags">
            <span v-for="item in items" :key="item" class="tag">
                {{ item.name }}
            </span>
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
    margin-bottom: 10px;
}

.tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tag {
    padding: 9px 0;
    width: 150px;
    text-align: center;
    border-radius: 30px;
    background: #f2dcc6;
    color: #d08a44;
    font-size: 19px;
    border: 1px solid #d08a44;
    font-family: 'TitilliumWeb-Regular';
}
</style>