<template>
  <div class="bg_pink">
    <InnerBanner
      title="FOOD & DRINKS AT DEE"
      subtitle="Food Drinks Thoughtfully Made"
      description="Seasonal food, specialty coffee, and baked treats made with care for slow
    mornings, relaxed brunches, and easy lunches."
      :bgImage="fooddrinksbanner"
      :primaryBtn="{ text: 'View Menu' }"
      :secondaryBtn="{ text: 'Order Ahead' }"
      @primary-click="seemenu"
      @secondary-click="orderahead"
      iconColor="white"
      innerbanclass="FooddrinkMobilebanner"
    />
    <MenuSection />
    <Footer :hasBg="true" />
  </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import MenuSection from "../components/layouts/sliderscardsection/MenuSection.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";

import fooddrinksbanner from "@/assets/images/fooddrinksbanner.png";

import { useRouter } from "vue-router";
const router = useRouter();

const seemenu = () => {
  router.push("/item-details");
};

const orderahead = () => {
  router.push("/orderahead");
};
</script>
