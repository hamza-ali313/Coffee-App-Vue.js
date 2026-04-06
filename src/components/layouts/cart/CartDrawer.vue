<template>
    <div>
        <!-- Overlay -->
        <div v-if="cart.isCartOpen" class="overlay" @click="cart.toggleCart"></div>

        <!-- Drawer -->
        <div class="cart-drawer" :class="{ open: cart.isCartOpen }">
            <div class="sec_heading d-flex align-items-center justify-content-between">
                <h2>Summary</h2>
                <p style="width:unset; margin: unset;">{{ cart.items.length }} Items in your bag</p>
            </div>
            <CartItem v-for="(item, i) in cart.items" :key="item.key" :item="item" :index="i" />
            <CartSummary :subtotal="cart.subtotal" />

            <!-- // import { useCheckoutStore } from '@/stores/checkoutStore'
// const store = useCheckoutStore()
// <p>
//   {{ store.collection.time }} - {{ store.collection.date }}
// </p> -->
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart"
import { watch } from "vue"
import CartItem from "./CartItem.vue"
import CartSummary from "./CartSummary.vue"

const cart = useCartStore()


watch(() => cart.isCartOpen, (val) => {
    if (val) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = ""
    }
})
</script>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
    overflow-y: hidden;
}

.cart-drawer {
    position: fixed;
    top: 0;
    right: -700px;
    width: 700px;
    padding: 10px 20px;
    height: 100%;
    background: #fff;
    transition: 0.3s;
    z-index: 100;
    overflow: scroll;
    overflow-x: hidden;
}


.cart-drawer.open {
    right: 0;
}

.sec_heading {
    border-bottom: 1px solid #ccc;

    h2 {
        font-size: 90px;
    }

}
</style>
