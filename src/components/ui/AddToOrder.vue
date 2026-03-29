<template>
    <div class="product-header container">
        <div class="row align-items-center">

            <div class="sec_heading col-12 col-lg-5 mb-3 mb-lg-0">
                <h2>Avocado on Sourdough</h2>
            </div>

            <div class="col-12 col-lg-7">
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

<style>
.sec_heading h2 {
    font-size: 102px;
}

.product-header {
    padding: 20px 10px;
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
            border: 2px solid #f4a261;
            border-radius: 30px;
            padding: 5px 10px;
            gap: 15px;

            button {
                background: transparent;
                border: none;
                font-size: 18px;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                color: #f4a261;
                transition: 0.2s;

                &:hover {
                    background: #f4a261;
                    color: #fff;
                }
            }

            span {
                font-weight: 600;
                min-width: 24px;
                text-align: center;
            }
        }

        .price-box {
            small {
                display: block;
                font-size: 12px;
                color: #666;
            }

            h2 {
                margin: 0;
                font-size: 28px;
                color: #1b4332;
                font-weight: 700;
            }
        }

        .add-btn {
            background: #6b8e23;
            color: #fff;
            border: none;
            padding: 12px 20px;
            border-radius: 30px;
            font-weight: 600;
            transition: 0.3s;

            &:hover {
                background: #5a7a1d;
            }
        }
    }
}
</style>