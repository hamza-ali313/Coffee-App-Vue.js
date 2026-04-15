<template>
  <div class="product-header container">
    <div class="row align-items-center">
      <div class="sec_heading col-12 col-lg-6 mb-3 mb-lg-0">
        <h2>SECURE YOUR PLACE</h2>
      </div>

      <div class="col-12 col-lg-6">
        <div class="controls row align-items-center">
          <!-- Quantity -->
          <div class="col-6 col-md-3 mb-2 mb-md-0">
            <div class="qty-box d-flex align-items-center">
              <button @click="qty > 1 && qty--">-</button>
              <span>{{ qty.toString().padStart(2, "0") }}</span>
              <button @click="qty++">+</button>
            </div>
          </div>

          <!-- Price -->
          <div class="col-6 col-md-4 mb-2 mb-md-0">
            <div class="price-box">
              <h2>£{{ (price * qty).toFixed(2) }}</h2>
            </div>
          </div>

          <!-- Button -->
          <div class="col-12 text-center col-md-5 col-lg-5">
            <GButton btntxt="+ Book Now" icon="bi bi-cart-check-fill" @click="bookNow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GButton from "../../ui/GButton.vue";

const props = defineProps({
  price: Number,
});

const qty = ref(1);

const bookNow = () => {
  console.log("Booking for quantity:", qty.value);
};
</script>

<style scoped lang="scss"></style>
