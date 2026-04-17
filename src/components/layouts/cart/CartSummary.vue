<template>
  <div class="cart-summary p-3">
    <!-- Discount / Gift Code -->
    <div class="mb-3" v-if="isCartDrawer">
      <label class="form-label fw-semibold">
        <h6>Discount Code or Gift Card</h6>
      </label>
      <div class="input-box input_bg">
        <input
          type="text"
          class="form-control me-2"
          placeholder="ENTER CODE"
          v-model="discountCode"
        />
        <OButton btntxt="Apply" />
      </div>
    </div>

    <!-- Items Subtotal -->
    <div class="d-flex justify-content-between mb-2">
      <h6>Subtotal {{ cart.items.length }} items</h6>
      <h6>£{{ (subtotal || 0).toFixed(2) }}</h6>
    </div>

    <!-- Delivery Options -->
    <div
      v-if="isCartDrawer"
      v-for="option in deliveryOptions"
      :key="option.name"
      class="d-flex justify-content-between p-2 my-4"
      :class="option.highlight ? 'bg-orange-light' : 'bg-orange-lighter'"
    >
      <h6>{{ option.name }}</h6>
      <h6>£{{ (option.price || 0).toFixed(2) }}</h6>
    </div>

    <div
      v-if="
        !isCartDrawer && checkoutStore.collection.time && checkoutStore.collection.date
      "
      class="p-2 my-4 bg-orange-light d-flex justify-content-between p-2"
    >
      <h6>{{ formattedTime }}</h6>
      <h6>{{ formattedDate }}</h6>
    </div>
    <div
      v-if="!isCartDrawer && checkoutStore.collection.location"
      class="p-2 my-4 bg-orange-lighter"
    >
      <h6>{{ checkoutStore.collection.location }}</h6>
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
      <img class="served" src="../../../assets/images/servedwarm.png" alt="" />
      <h6>SERVED WARM</h6>
    </div>

    <!-- Checkout Button (Only in Drawer) -->
    <div v-if="isCartDrawer" class="mt-4">
      <button class="o_btn menu-btn w-100" @click="proceedToCheckout">
        <span style="font-size: 46px">Proceed to Checkout</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart";
import { useCheckoutStore } from "@/store/checkout";
import { useRouter } from "vue-router";
import OButton from "../../ui/OButton.vue";
import { formatTime12h, formatDateReadable } from "../../../utils/formatters.js";

const cart = useCartStore();
const checkoutStore = useCheckoutStore();

// format time
const formattedTime = computed(() => {
  return formatTime12h(checkoutStore.collection.time);
});

// format date
const formattedDate = computed(() => {
  return formatDateReadable(checkoutStore.collection.date);
});
const router = useRouter();

const props = defineProps({
  subtotal: { type: Number, default: 0 },
  isCartDrawer: { type: Boolean, default: false },
  deliveryOptions: {
    type: Array,
    default: () => [
      { name: "Fast Delivery", price: 1.0, highlight: true },
      { name: "Standard Delivery", price: 0.5, highlight: false },
    ],
  },
});

const discountCode = ref("");

const total = computed(() => {
  const sub = Number(props.subtotal) || 0;
  const delivery = props.deliveryOptions.reduce(
    (acc, opt) => acc + (Number(opt.price) || 0),
    0
  );
  return sub + delivery;
});

const proceedToCheckout = () => {
  cart.isCartOpen = false;
  router.push("/checkout");
};
</script>

<style lang="scss" scoped>
.cart-summary {
  img.served {
    width: 39px;
    object-fit: contain;
    margin: 0 10px 0 0px;
  }
  .text-theme-orange {
    color: $theme_o;
  }
  .input_bg {
    background-image: url("../../../assets//images/cartinputbg.png");
    @include bg_no_repeat_contain_center;
    height: 65px;
    width: 100%;

    .o_btn.menu-btn {
      padding: 17px 63px;
    }
    input.form-control {
      height: 33px;
      border: none;
      width: 80%;
      position: absolute;
      top: 16px;
      left: 14px;

      &::placeholder {
        @include font-titillium-regular;
      }
    }
    input:focus {
      box-shadow: none;
    }
    button {
      position: absolute;
      top: 8%;
      right: -30px;
    }
  }
  .bg-orange-light {
    border: 1px solid $theme_o;
  }

  .bg-orange-lighter {
    background-color: #f5a6231a;
  }

  h6 {
    font-family: $titillium-semibold;
    margin: 5px 0;
  }

  h5 {
    font-family: $titillium-semibold;
    margin: 10px 0;
    color: #000;
  }

  .menu-btn {
    background-image: url("@/assets/images/greenGbtn.png");
    background-repeat: no-repeat;
    background-size: 70% 90%;
    padding: 21px 52px;
    border: none;
    background-color: transparent;
    color: white;
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
