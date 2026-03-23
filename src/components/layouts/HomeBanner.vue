<template>
  <section class="hero-section">
    <Header />
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
          <div class="d-flex gap-3 mt-4">
            <GButton btntxt="See Our Menu" icon="bi bi-list-task" />
            <OButton btntxt="Vist Us" icon="bi bi-geo-alt-fill"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "./Header.vue";
import GButton from "../ui/GButton.vue";
import OButton from "../ui/OButton.vue";
</script>

<style>
.hero-section {
  background-image: url("@/assets/images/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1020px;
}
.hero-title,
.hero-subtitle,
.hero-text {
  text-align: start;
}
</style>
