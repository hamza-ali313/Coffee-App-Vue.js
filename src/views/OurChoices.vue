<template>
  <div class="bg_pink">
    <InnerBanner
      title="OUR CHOICES SHAPE"
      subtitle="Everything We Serve"
      description="We believe that every choice matters. From the ingredients we source to the way we serve. 
      Our approach is rooted in transparency, responsibility, and long-term thinking."
      :bgImage="choicesban"
      innerbanclass="choicesban"
      iconColor="white"
    />
    <Ingrediantsource />
    <Coffeephilisofy />

    <EventsSection
      bannerTitle="SUSTAINABILITY PRACTICES"
      bannerDescription="Sustainability at Dee is not a statement — it's a continuous practice. We focus on practical, 
      meaningful steps that reduce our impact without overcomplicating 
      the experience for our customers."
      :bannerImage="bannerImg"
      card1Title="SUPPLY CHAIN TRANSPARENCY"
      card1Description="We aim to maintain clear, direct relationships with the people and producers behind our products. 
      This allows us to better understand how ingredients are grown, processed, 
      and delivered. We believe transparency builds trust."
      card1ButtonText="LEARN MORE"
      :card1ShowButton="false"
      :card1Image="img1"
      card2Title="PARTNER HIGHLIGHTS"
      card2Description="Behind every product we serve is a group of people who care about what they do. 
      We collaborate with independent producers, roasters, 
      and suppliers who share our approach to quality."
      card2ButtonText="CONTACT US"
      :card2ShowButton="false"
      :card2Image="img2"
    />

    <Footer :negm="true" :hasBg="true" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("upcoming"); // default tab
import EventsSection from "../components/layouts/EventsSection.vue";
import Ingrediantsource from "../components/layouts/Ingrediantsource.vue";
import Coffeephilisofy from "../components/layouts/Coffeephilisofy.vue";
import bannerImg from "@/assets/images/mainevent2.png";
import img1 from "@/assets/images/event4.png";
import img2 from "@/assets/images/event5.png";
import GButton from "../components/ui/GButton.vue";
import OButton from "../components/ui/OButton.vue";
import Footer from "../components/layouts/Footer.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";

import choicesban from "@/assets/images/ourchoicesban.png";

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
