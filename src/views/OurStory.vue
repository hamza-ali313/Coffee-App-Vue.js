<template>
  <div class="bg_pink">
    <InnerBanner
      title="A PLACE TO RETURN TO"
      subtitle="Coffee Food and time well Spent"
      description="A calm neighbourhood café for good coffee, thoughtful food, and slow, everyday moments."
      :bgImage="bannerourstory"
      innerbanclass="bannerourstory"
      iconColor="white"
      :primaryBtn="{ text: 'Order Ahead' }"
      :secondaryBtn="{ text: 'View Menu' }"
      icon_g="bi-cart-check-fill"
      icon_o="bi-egg-fried"
      @primary-click="exploreEvents"
      @secondary-click="buyTickets"
    />
    <FoodForEvery />
    <OurStoryPgSec />
    <div class="pb-3">
      <SecHeading
        main_h="Our Values"
        sub_h="At Dee our values shape everything we do"
        :showLeaf="true"
      />
    </div>
    <OrdersAhead
      :steps="steps"
      title="OUR VALUES"
      sub_title="At Dee our values shape everything we do"
    />
    <SecHeading
      main_h="Moments at Dee"
      sub_h="Every detail at Dee is designed to be felt not noticed"
      :showLeaf="true"
    />
    <EventsSection
      bannerTitle="THE SPACE"
      bannerDescription="A calm, open space shaped by natural materials, soft tones, and thoughtful simplicity."
      :bannerImage="bannerImg"
      card1Title="THE FOOD"
      card1ButtonText="LEARN MORE"
      card1Description="Carefully sourced and expertly prepared every cup made with attention and consistency."
      :card1ShowButton="true"
      :card1Image="img1"
      card2Title="THE COFFEE"
      card2ButtonText="LEARN MORE"
      card2Description="Carefully sourced and expertly prepared every cup made with attention and consistency."
      :card2ShowButton="true"
      :card2Image="img2"
    />

    <Footer :negm="true" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("upcoming"); // default tab
import EventsSection from "../components/layouts/EventsSection.vue";
import OrdersAhead from "../components/layouts/OrdersAhead.vue";
import bannerImg from "@/assets/images/event6.png";
import img1 from "@/assets/images/event7.png";
import img2 from "@/assets/images/event8.png";
import { steps } from "../data/gettinghere3.js";
import SecHeading from "../components/ui/SecHeading.vue";
import Footer from "../components/layouts/Footer.vue";
import FoodForEvery from "../components/layouts/FoodForEvery.vue";
import OurStoryPgSec from "../components/layouts/OurStoryPgSec.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";

import bannerourstory from "@/assets/images/bannerourstory.png";

import { useRouter } from "vue-router";
const router = useRouter();

const exploreEvents = () => {
  router.push("/faqs");
  console.log("working");
};

const buyTickets = () => {
  router.push("/locations");
};
</script>

<style lang="scss" scoped></style>
