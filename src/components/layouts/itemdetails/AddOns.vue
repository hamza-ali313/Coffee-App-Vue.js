<template>
    <div class="card-box mt-3 addons-card">
        <h6 class="card-title">Optional Add-ons</h6>

        <div class="card-body">
            <div v-for="(item, i) in items" :key="i" class="addon-item" :class="{ active: item.selected }"
                @click="toggleAddon(item)">
                <div class="left">
                    <img v-if="item.image" :src="item.image" class="addon-img" />
                    <span class="name">{{ item.name }}</span>
                </div>

                <div class="right">
                    <span class="price">£{{ item.price }}</span>
                    <div class="check"><i v-if="item.selected" class="bi bi-check-lg"></i></div>
                </div>
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

<style lang="scss">
.addons-card {
    border-radius: 12px;

    .addon-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 9px 14px;
        margin: 0 25px 10px 25px;
        border-radius: 30px;
        border: 2px solid #eee;
        background: #fff;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
            border-color: $theme_o;
        }

        &.active {
            border-color: $theme_o;
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

            span {
                font-weight: 500;
                color: #333;
                font-family: 'TitilliumWeb-SemiBold';
                font-size: 15px;
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;

            .check {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                border: 1px solid $theme_o;
                background: transparent;
                font-size: 14px;
                font-weight: bold;
            }

            i {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: $theme_o;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
            }
        }
    }
}
</style>