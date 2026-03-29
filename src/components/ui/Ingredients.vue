<template>
    <div class="ingredients card-box">
        <h6 class="card-title">INCLUDED INGREDIENTS</h6>

        <div class="ingredient-list">
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
.card-box {
    background: #f3ebe4; // light beige
    border-radius: 18px;
    border: 1px solid #f3ebe4;
}

.card-title {
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
    color: #5c4a3d;
    padding: 18px;
}

.ingredient-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 14px;
    background-color: #fff;
    padding: 18px;

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
}

/* TEXT */
.text {
    white-space: nowrap;
}

/* HOVER EFFECT (subtle like UI) */
.ingredient:hover {
    background: #fff;
    border-color: #c9a27e;
}
</style>