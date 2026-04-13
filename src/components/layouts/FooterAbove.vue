<template>
  <div>
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
import Footer from "./Footer.vue";
import EventsSection from "./EventsSection.vue";
import bannerImg from "../../assets/images/mainevent.png";
import img1 from "../../assets/images/event3.png";
import img2 from "../../assets/images/event3.png";
</script>

<style lang="scss" scoped></style>
