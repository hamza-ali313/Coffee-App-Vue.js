<template>
    <div class="card p-3 mt-3 addons-card">
        <h6 class="mb-3 card-title">Optional Add-ons</h6>

        <div v-for="(item, i) in items" :key="i" class="addon-item" :class="{ active: item.selected }"
            @click="toggleAddon(item)">
            <div class="left">
                <img v-if="item.image" :src="item.image" class="addon-img" />
                <span class="name">{{ item.name }}</span>
            </div>

            <div class="right">
                <span class="price">£{{ item.price }}</span>
                <div class="check" v-if="item.selected">✓</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
    items: Array
})

const emit = defineEmits(["addons-updated"])

const addonsTotal = computed(() => {
    if (!props.items) return 0
    return props.items
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.price, 0)
})

function toggleAddon(item) {
    item.selected = !item.selected

    emit("addons-updated", {
        selectedAddons: props.items.filter(i => i.selected),
        total: addonsTotal.value
    })
}
</script>

<style>
.addons-card {
    border-radius: 12px;

    .card-title {
        font-weight: 600;
        font-size: 17px;
        letter-spacing: 1px;
        color: #5c4a3d;
        padding: 18px;
        text-transform: uppercase;
    }

    .addon-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px;
        margin-bottom: 10px;
        border-radius: 30px;
        border: 2px solid #eee;
        background: #fff;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
            border-color: #f4a261;
        }

        &.active {
            border-color: #f4a261;
            background: #fff7f0;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 10px;

            .addon-img {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                object-fit: cover;
            }

            .name {
                font-weight: 500;
                color: #333;
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;

            .price {
                color: #666;
                font-weight: 500;
            }

            .check {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                background: #f4a261;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
}
</style>