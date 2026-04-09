<template>
  <div class="row">
    <div class="col-md-6 col-lg-6">
      <div class="sec_heading">
        <h2>{{ dish.name }}</h2>
      </div>
      <div
        class="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-center justify-content-md-center align-items-center mb-2"
      >
        <span
          v-for="(b, index) in dish.badges"
          :key="index"
          class="d-flex align-items-center gap-1 border rounded-pill px-2 py-1 small bg-badge"
        >
          <img :src="b.icon" alt="" />
          <p class="m-0">{{ b.label }}</p>
        </span>
      </div>
      <p class="mt-3">{{ dish.description }}</p>

      <h6 class="mt-3">{{ dish.tagline }}</h6>

      <h3>£{{ dish.price }} <sub>Per Serving</sub></h3>

      <Nutrition :items="dish.nutritions" />
      <Allergens :items="dish.allergens" />
      <AboutDish :items="dish.about" />
    </div>
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-md-5 col-lg-5">
      <Ingredients :items="dish.ingredients" />

      <AddOns :items="dish.addOns" @addons-updated="updateAddons" />
    </div>

    <AddToOrder :basePrice="dish.price" :addons="selectedAddons" :dish="dish" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Nutrition from "./Nutrition.vue";
import Allergens from "./Allergens.vue";
import Ingredients from "./Ingredients.vue";
import AddOns from "./AddOns.vue";
import AboutDish from "./AboutDish.vue";
import AddToOrder from "./AddToOrder.vue";

defineProps({ dish: Object });

const selectedAddons = ref([]);

function updateAddons(data) {
  console.log(data.selectedAddons);
  selectedAddons.value = data.selectedAddons;
}
</script>

<style scoped lang="scss">
:deep(.section-title) {
  font-weight: 600;
  margin-bottom: 12px;
  font-family: $titillium-semibold;
  padding: 30px 0 30px 0;
  border-top: 1px dashed $theme_o;
  margin: 30px 0 0 0;
  font-size: 24px;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

h3 {
  margin: 0;
  font-size: 38px;
  line-height: 28px;
  color: #2a4b1f;
  font-family: "TitilliumWeb-SemiBold";
  font-weight: 700;
}

sub {
  font-family: $titillium-bold;
  font-size: 14px;
}

h6 {
  font-family: $titillium-semibold;
  font-size: 15px;
  color: $theme_g;
}
</style>
