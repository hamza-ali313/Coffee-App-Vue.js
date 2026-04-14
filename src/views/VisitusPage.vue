<template>
  <div class="bg_pink">
    <InnerBanner
      title="FIND YOUR WAY TO DEE!"
      subtitle="Your neighbourhood cafe awaits"
      description="A calm neighbourhood café, open daily for coffee, food, and time well spent."
      :bgImage="locationban"
      innerbanclass="locationban"
      :secondaryBtn="{ text: 'Visit us' }"
      @secondary-click="visit"
      iconColor="white"
    />
    <LocationSection />
    <Footer :hasBg="false" />
  </div>
</template>

<script setup>
import Footer from "../components/layouts/Footer.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";
import LocationSection from "../components/layouts/Locations/LocationSection.vue";
import locationban from "@/assets/images/locationban.png";

const visit = () => {
  router.push("/locations");
};
</script>

<style lang="scss" scoped></style>
