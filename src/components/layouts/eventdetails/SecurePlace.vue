<template>
  <div class="secure-place-section my-5 py-5 event-about">
    <div class="row align-items-center">
      <div class="col-md-4 sec_heading">
        <h2 class="mb-0">SECURE YOUR PLACE</h2>
      </div>
      <div class="col-md-8">
        <div class="d-flex align-items-center justify-content-end gap-5">
          <div class="quantity-selector d-flex align-items-center gap-3">
            <button @click="qty > 1 && qty--" class="qty-btn">-</button>
            <span class="qty-value">{{ qty.toString().padStart(2, '0') }}</span>
            <button @click="qty++" class="qty-btn">+</button>
          </div>
          <div class="price-display">
            <h2 class="price">£{{ (price * qty).toFixed(2) }}</h2>
          </div>
          <GButton btntxt="BOOK NOW" icon="bi bi-cart-plus" @click="bookNow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GButton from '../../ui/GButton.vue'

const props = defineProps({
  price: Number
})

const qty = ref(1)

const bookNow = () => {
  console.log('Booking for quantity:', qty.value)
  // Integration with cart could happen here
}
</script>

<style scoped lang="scss">
.section-title {
  font-family: inherit;
  font-size: 60px;
  line-height: normal;
  text-transform: uppercase;
}

.quantity-selector {
  background: #fdf5ef;
  border: 1px solid #e5c7a3;
  padding: 8px 15px;
  border-radius: 30px;
  .qty-btn {
    border: none;
    background: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #e5c7a3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: 0.2s;
    &:hover {
      background: #e5c7a3;
      color: #fff;
    }
  }
  .qty-value {
    color: #d08a44;
    font-family: $titillium-bold;
    font-size: 18px;
    min-width: 25px;
    text-align: center;
  }
}

.price-display {
  .price {
    font-size: 48px;
    font-family: $titillium-bold;
    color: #333;
    margin: 0;
  }
}
</style>
