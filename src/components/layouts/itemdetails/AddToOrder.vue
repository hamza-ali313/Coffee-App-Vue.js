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
              <span>{{ quantity.toString().padStart(2, "0") }}</span>
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
          <div class="col-12 text-center col-md-5 col-lg-5">
            <GButton
              btntxt="+ add to order"
              icon="bi bi-cart-check-fill"
              @click="addItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import GButton from "../../ui/GButton.vue";
import { useCartStore } from "@/store/cart";

const props = defineProps({
  basePrice: Number,
  addons: {
    type: Array,
    default: () => [],
  },
  dish: Object,
});
const quantity = ref(1);

const addonsTotal = computed(() => props.addons.reduce((sum, a) => sum + a.price, 0));

const totalPrice = computed(() => (props.basePrice + addonsTotal.value) * quantity.value);

function increase() {
  quantity.value++;
  console.log(quantity.value);
}

function decrease() {
  if (quantity.value > 1) quantity.value--;
}

const cart = useCartStore();

function addItem() {
  cart.addToCart({
    id: props.dish.id,
    name: props.dish.name,
    image: props.dish.sliderImages[0],
    badges: props.dish.badges.slice(0, 2),
    basePrice: props.basePrice,
    addons: props.addons,
    totalPrice: totalPrice.value,
    quantity: quantity.value,
  });
  console.log(cart.items);
  cart.isCartOpen = true; // open cart
}
</script>

<style lang="scss" scoped>
.sec_heading h2 {
  font-size: 102px;
}
.g_btn.menu-btn {
  padding: 18px 35px;
}
</style>
