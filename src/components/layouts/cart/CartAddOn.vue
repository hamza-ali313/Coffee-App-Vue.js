<template>
    <div class="cart_addon">
        <img :src="addon.image" alt="" />

        <div class="info">
            <h5>{{ addon.name }}</h5>
            <h6>£{{ addon.price }}</h6>
        </div>
    </div>
</template>

<script setup>
defineProps({
    addon: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">
.cart_addon {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px;
    border-radius: 5px;
    font-family: 'TitilliumWeb-Regular';
    border: 1px solid $theme_o;
    background: #fff;
    transition: all 0.2s ease;

    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 5px;
    }

    .info {
        h5 {
            font-size: 13px;
            font-family: 'TitilliumWeb-SemiBold';
            margin: 0;
        }

        h6 {
            font-size: 13px;
            margin: 0;
            color: #a67c52;
        }
    }
}
</style>