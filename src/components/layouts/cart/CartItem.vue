<template>
    <div class="cart-item d-flex gap-4 align-items-center p-3 position-relative rounded">
        <!-- IMAGE -->
        <div class="img-box">
            <img :src="item.image" />
        </div>
        <!-- CONTENT -->
        <div class="content">
            <!-- BADGES -->
            <div class="d-flex gap-2 align-items-center mb-2">
                <span v-for="(b, index) in item.badges" :key="index"
                    class="d-flex align-items-center gap-1 border rounded-pill px-2 py-1 small bg-badge">
                    <img :src="b.icon" />
                    <p class="m-0">{{ b.label }}</p>
                </span>
            </div>
            <!-- TITLE -->
            <div class="sec_heading">
                <h2>{{ item.name }}</h2>
            </div>
            <!-- ADDONS -->
            <div class="d-flex flex-wrap gap-1 mb-2">
                <CartAddOn v-for="a in item.addons" :key="a.name" :addon="a" />
            </div>
            <!-- PRICE + QTY -->
            <div class="bottom">
                <div class="price">
                    <p>TODAY'S PRICE:</p>
                    <h4>£{{ item.totalPrice.toFixed(2) }}</h4>
                </div>
                <div class="qty d-flex gap-1 align-items-center p-1 position-relative rounded-5">
                    <button @click="cart.decreaseQty(index)"><img :src="minusacc" /></button>
                    <span>{{ item.quantity }}</span>
                    <button @click="cart.increaseQty(index)"><img :src="plusacc" /></button>
                </div>
            </div>
        </div>
        <!-- CLOSE -->
        <button class="close position-absolute top-0 end-0 border-0 bg-transparent fs-4"
            @click="cart.removeItem(index)">✕</button>
    </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart"
import CartAddOn from "./CartAddOn.vue";
import minusacc from '../../../assets/images/minusacc.png'
import plusacc from '../../../assets/images/plusacc.png'

const props = defineProps({
    item: Object,
    index: Number
})

const cart = useCartStore()
</script>

<style lang="scss">
.cart-item {

    .sec_heading h2 {
        font-size: 72px;
        line-height: 42px;
    }

    /* IMAGE */
    .img-box {
        width: 170px;
        height: 210px;
        border-radius: 5px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}



/* CONTENT */
.content {
    flex: 1;
}

/* TITLE */
h3 {
    font-family: 'cursive';
    letter-spacing: 1px;
    margin: 5px 0 10px;
}


/* BOTTOM */
.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* PRICE */
.price {
    p {
        font-size: 11px;
        margin: 0;
        color: #666;
    }

    h4 {
        color: #244c2c;
        font-weight: 700;
        margin: 0;
    }
}

.cart-item {
    background: #fff5eb;
}

/* QTY CONTROL (IMPORTANT PART 🔥) */
.qty {
    background: #fff;

    span {
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        width: 20px;
    }

    button {
        background: transparent;

        img {
            width: 30px;
        }
    }
}
</style>