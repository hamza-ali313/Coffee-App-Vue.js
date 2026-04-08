<template>
    <div class="container checkout py-5">
        <div class="row g-5">
            <!-- Left Info Panel -->
            <div class="col-lg-7">
                <div class="info-section">
                    <UserDetails class="mb-4" />
                    <CollectionDetails class="mb-4" />
                    <PaymentDetails />
                </div>
            </div>

            <!-- Right Summary Panel (Cart Summary) -->
            <div class="col-lg-5">
                <div class="summary-section shadow-sm bg-white p-4 rounded-4">
                    <div class="sec_heading mb-4 border-bottom pb-2">
                        <h2 class="fs-1">Order Summary</h2>
                        <p class="small text-muted">{{ cart.items.length }} items in your bag</p>
                    </div>
                    
                    <div class="items-list mb-4 overflow-auto" style="max-height: 400px; overflow-x: hidden;">
                        <CartItem v-for="(item, i) in cart.items" :key="item.key" :item="item" :index="i" />
                    </div>

                    <!-- CartSummary without checkout button (isCartDrawer is false by default) -->
                    <CartSummary :subtotal="cart.subtotal" />
                    
                    <div class="mt-4">
                      <button class="o_btn menu-btn w-100" @click="placeOrder">
                        <span style="font-size:2.5rem;">PLACE ORDER</span>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PaymentDetails from './PaymentDetails.vue'
import CollectionDetails from './CollectionDetails.vue'
import UserDetails from './UserDetails.vue'
import CartSummary from '../cart/CartSummary.vue'
import CartItem from '../cart/CartItem.vue'
import { useCartStore } from "@/store/cart"

const cart = useCartStore()

const placeOrder = () => {
    alert("Order placed successfully! Thank you for your purchase.")
    // You can add more complex logic here (API calls, etc.)
}
</script>

<style lang="scss" scoped>
.checkout {
    min-height: 100vh;

    .info-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .summary-section {
        position: sticky;
        top: 100px;
        background: #fff8f1;
        border: 1px solid #f2e9e1;
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);

        .sec_heading {
            h2 {
                font-family: inherit;
                font-size: 2.5rem;
                color: #333;
            }
        }
    }

    .items-list {
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb {
            background: #cd894a;
            border-radius: 10px;
        }
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

@media (max-width: 991px) {
    .summary-section {
        position: static;
        margin-top: 2rem;
    }
}
</style>