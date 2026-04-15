<template>
  <section class="hero-section">
    <MobileHeader iconColor="white" />
    <div class="container">
      <div class="row">
        <!-- LEFT CONTENT -->
        <div class="col-lg-6 text-white hero-content">
          <h1 class="hero-title">
            A neighbourhood café,<br />
            shaped by nature and care.
          </h1>

          <p class="hero-subtitle">Made for everyday moments</p>

          <p class="hero-text">
            Dee is a café shaped by its neighbourhood — serving good coffee and fresh food
            in a space that feels familiar, welcoming and easy to return to.
          </p>

          <!-- BUTTONS -->
          <div
            class="d-flex justify-content-lg-start justify-content-md-start justify-content-center gap-3 mt-4"
          >
            <GButton btntxt="See Our Menu" icon="bi bi-list-task" @click="Seemenu" />
            <OButton btntxt="Visit Us" icon="bi bi-geo-alt-fill" @click="visitus" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MobileHeader from "./MobileHeader.vue";
import GButton from "../ui/GButton.vue";
import OButton from "../ui/OButton.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const Seemenu = () => {
  router.push("/FoodsDrinks");
};

const visitus = () => {
  router.push("/locations");
};
</script>

<style scoped lang="scss">
// HomeBanner specific styles - main styles in global SCSS
.hero-section {
  background-image: url("@/assets/images/banner.png");

  height: 1020px;
}

.hero-title,
.hero-subtitle,
.hero-text {
  text-align: start;
}
</style>
