<template>
    <div class="cart-summary p-3">
        <!-- Discount / Gift Code -->
        <div class="mb-3">
            <label class="form-label fw-semibold">
                <h6>Discount Code or Gift Card</h6>
            </label>
            <div class="d-flex">
                <input type="text" class="form-control me-2" placeholder="ENTER CODE" v-model="discountCode" />
                <button class="btn btn-warning text-white">Apply</button>
            </div>
        </div>

        <!-- Items Subtotal -->
        <div class="d-flex justify-content-between mb-2">
            <h6>Subtotal {{ cart.items.length }} items</h6>
            <h6>£{{ (subtotal || 0).toFixed(2) }}</h6>
        </div>

        <!-- Delivery Options -->
        <div v-for="option in deliveryOptions" :key="option.name"
            class="d-flex justify-content-between p-2 my-4 rounded"
            :class="option.highlight ? 'bg-orange-light' : 'bg-orange-lighter'">
            <h6>{{ option.name }}</h6>
            <h6>£{{ (option.price || 0).toFixed(2) }}</h6>
        </div>

        <!-- Total & Saved -->
        <div class="d-flex justify-content-between mt-3 fw-bold">
            <h5>Total</h5>
            <h5>£{{ (total || 0).toFixed(2) }}</h5>
        </div>
        <div class="d-flex justify-content-between text-theme-orange">
            <h5>You Saved</h5>
            <h5>£ 0.50</h5>
        </div>

        <!-- Served Warm -->
        <div class="mt-3 d-flex align-items-center">
            <i class="bi bi-thermometer-half me-2"></i>
            <h6>SERVED WARM</h6>
        </div>

        <!-- Checkout Button (Only in Drawer) -->
        <div v-if="isCartDrawer" class="mt-4">
            <button class="o_btn menu-btn w-100" @click="proceedToCheckout">
                <span style="font-size:2.5rem;">CHECKOUT</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from "@/store/cart"
import { useRouter } from 'vue-router';

const cart = useCartStore()
const router = useRouter()

const props = defineProps({
    subtotal: { type: Number, default: 0 },
    isCartDrawer: { type: Boolean, default: false },
    deliveryOptions: {
        type: Array, default: () => [
            { name: 'Fast Delivery', price: 1.0, highlight: true },
            { name: 'Standard Delivery', price: 0.5, highlight: false }
        ]
    }
})

const discountCode = ref('')

const total = computed(() => {
    const sub = Number(props.subtotal) || 0;
    const delivery = props.deliveryOptions.reduce((acc, opt) => acc + (Number(opt.price) || 0), 0);
    return sub + delivery;
})

const proceedToCheckout = () => {
    cart.isCartOpen = false
    router.push('/checkout')
}
</script>

<style lang="scss" scoped>
.cart-summary {
    .text-theme-orange {
        color: #d17842;
    }

    .bg-orange-light {
        border: 1px solid #d08a44;
    }

    .bg-orange-lighter {
        background-color: #f5a6231a;
    }

    input.form-control {
        border-radius: 50px;
        padding: 12px 20px;
    }

    button.btn-warning {
        border-radius: 50px;
        padding: 12px 25px;
    }

    h6 {
        font-family: $titillium-semibold;
        margin: 5px 0;
    }

    h5 {
        font-family: $titillium-semibold;
        margin: 5px 0;
    }

    .o_btn.menu-btn {
        background-image: url("@/assets/images/greenGbtn.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 21px 52px;
        border: none;
        background-color: transparent;
        color: white;
        font-weight: bold;
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.02);
        }

        span {
            font-size: 1.2rem;
            letter-spacing: 1px;
        }
    }
}
</style>