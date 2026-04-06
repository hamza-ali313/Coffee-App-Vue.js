<template>
    <div class="card-box">
        <h6 class="card-title">INCLUDED INGREDIENTS</h6>

        <div class="ingredient-list card-body">
            <div v-for="item in items" :key="item.name" class="ingredient">
                <img class="icon" :src="item.image">
                <span class="text">{{ item.name }}</span>
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


.ingredient-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 14px;

}

.ingredient {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 30px;
    border: 1px solid #d08a44;
    font-size: 15px;
    font-family: $titillium-regular;
    color: #d08a44;
    transition: all 0.2s ease;
}

/* ICON STYLE */
.icon {
    width: 26px;
    object-fit: scale-down;
}

/* TEXT */
.text {
    white-space: nowrap;
}
</style>