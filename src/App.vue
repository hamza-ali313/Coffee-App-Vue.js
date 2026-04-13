<template>
  <!-- Loader -->
  <div v-if="isLoading" class="loader-wrapper">
    <div class="loader"></div>
  </div>
  <div v-else>
    <router-view />
    <CartDrawer />
  </div>
</template>

<script setup>
import CartDrawer from "./components/layouts/cart/CartDrawer.vue";

import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  if (document.readyState === "complete") {
    isLoading.value = false;
  } else {
    window.addEventListener("load", () => {
      isLoading.value = false;
    });
  }
});
</script>

<style lang="scss" scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #ddd;
  border-top: 4px solid #c48a3a;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
