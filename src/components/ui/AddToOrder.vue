<template>
    <div class="product-header container">
        <div class="row align-items-center">

            <div class="sec_heading col-12 col-lg-6 mb-3 mb-lg-0">
                <h2>Avocado on Sourdough</h2>
            </div>

            <div class="col-12 col-lg-6">
                <div class="controls row align-items-center">

                    <!-- Quantity -->
                    <div class="col-6 col-md-3 mb-2 mb-md-0">
                        <div class="qty-box d-flex align-items-center">
                            <button @click="decrease">-</button>
                            <span>{{ quantity.toString().padStart(2, '0') }}</span>
                            <button @click="increase">+</button>
                        </div>
                    </div>

                    <!-- Price -->
                    <div class="col-6 col-md-4 mb-2 mb-md-0">
                        <div class="price-box">
                            <small>TODAY'S PRICE:</small>
                            <h2>£{{ totalPrice.toFixed(2) }}</h2>
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="col-12 col-md-5">
                        <GButton btntxt="+ add to order" icon="bi bi-cart-check-fill" />
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import GButton from "./GButton.vue"

const props = defineProps({
    basePrice: Number,
    addons: {
        type: Array,
        default: () => []
    }
})

const quantity = ref(1)

const addonsTotal = computed(() =>
    props.addons.reduce((sum, a) => sum + a.price, 0)
)

const totalPrice = computed(() =>
    (props.basePrice + addonsTotal.value) * quantity.value
)

function increase() {
    quantity.value++
}

function decrease() {
    if (quantity.value > 1) quantity.value--
}
</script>

<style lang="scss" scoped>
.sec_heading h2 {
    font-size: 102px;
}

.product-header {
    padding: 20px 10px;
    margin: 50px 0;
    border-top: 1px solid #e5c7a3;
    border-bottom: 1px solid #e5c7a3;

    .title {
        font-size: 42px;
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .controls {
        .qty-box {
            border: 1px solid $theme_o;
            border-radius: 30px;
            padding: 5px 10px;
            gap: 15px;
            justify-content: space-between;
            background-color: #f2dcc6;

            button {
                border: none;
                font-size: 18px;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                color: $theme_o;
                background: #fff;
                transition: 0.2s;

                &:hover {
                    background: $theme_o;
                    color: #fff;
                }
            }

            span {
                font-weight: 600;
                min-width: 24px;
                text-align: center;
                color: $theme_o;
            }
        }

        .price-box {
            text-align: center;

            small {
                display: block;
                font-size: 14px;
                font-family: $titillium-semibold;
                color: #000;
            }

            h2 {
                margin: 0;
                font-size: 38px;
                line-height: 28px;
                color: $green-dark;
                font-family: $titillium-semibold;
                font-weight: 700;
            }
        }

        .add-btn {
            background: $theme_g;
            color: #fff;
            border: none;
            padding: 12px 20px;
            border-radius: 30px;
            font-weight: 600;
            transition: 0.3s;

            &:hover {
                background: $theme_g;
            }
        }
    }
}
</style>