<template>
  <div class="bg_pink">
    <InnerBanner
      title="What's on at dee cafe!"
      subtitle="thoughtfully happening at dee"
      description="A place for connection, creativity and community"
      :bgImage="eventBanner"
      innerbanclass="eventBanner"
      :primaryBtn="{ text: 'Explore What’s On' }"
      :secondaryBtn="{ text: 'Get Tickets' }"
      @primary-click="exploreEvents"
      @secondary-click="buyTickets"
      iconColor="white"
    />
    <div class="d-flex gap-1 py-5 justify-content-center">
      <GButton
        btntxt="upcoming events"
        icon="bi bi-calendar-event"
        @click="activeTab = 'upcoming'"
      />
      <OButton btntxt="calender view" @click="activeTab = 'calendar'" />
    </div>
    <!-- Calendar -->
    <CalenderWrapper v-if="activeTab === 'calendar'" />

    <!-- Upcoming Events -->
    <FilteredEventSection v-if="activeTab === 'upcoming'" />
    <EventsSection
      bannerTitle="Events and Gatherings"
      bannerDescription="We host rotating exhibitions from local artists whose work reflects Dee's ethos
          and 'f ycnjd tike to explore current ugxorning exhibitions. or learn more the
          artists And feature. you can find more details"
      :bannerImage="bannerImg"
      card1Title="Art and Exhibitions"
      card1Description="We host rotating exhibitions from local artists whose work reflects Dee's ethos
          and 'f ycnjd tike to explore current ugxorning exhibitions. or learn more the
          artists And feature. you can find more details"
      card1ButtonText="LEARN MORE"
      :card1ShowButton="true"
      :card1Image="img1"
      card2Title="Get Involved"
      card2Description="We're always to ideas from groups toking for a groups to gather, to
              creatives, organÉers or ryohtxyurs who want to in sorne wayf you're
              interested in hosting an event. or getting irrotved. we'd love to hear from"
      card2ButtonText="CONTACT US"
      :card2ShowButton="true"
      :card2Image="img2"
    />
    <Footer :hasBg="false" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("upcoming"); // default tab
import EventsSection from "../components/layouts/EventsSection.vue";
import bannerImg from "@/assets/images/mainevent.png";
import img1 from "@/assets/images/event3.png";
import img2 from "@/assets/images/event3.png";
import GButton from "../components/ui/GButton.vue";
import OButton from "../components/ui/OButton.vue";
import Footer from "../components/layouts/Footer.vue";
import CalenderWrapper from "../components/layouts/calender/CalenderWrapper.vue";
import FilteredEventSection from "../components/layouts/FilteredEventSection.vue";
import InnerBanner from "../components/layouts/InnerBanner.vue";

import eventBanner from "@/assets/images/inbanevent.png";

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
