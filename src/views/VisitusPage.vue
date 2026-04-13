<template>
  <div class="bg_pink">
    <InnerBanner
      title="OUR CHOICES SHAPE"
      subtitle="Everything We Serve"
      description="We believe that every choice matters. From the ingredients we source to the way we serve. 
      Our approach is rooted in transparency, responsibility, and long-term thinking."
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
