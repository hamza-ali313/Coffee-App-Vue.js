<template>
  <div class="bg_pink">
    <HomeBanner />
    <FoodsSlider />
    <div class="d-lg-block d-md-block d-none">
      <div class="container">
        <SecHeading
          main_h="WHAT'S ON"
          sub_h="At Dee"
          description="A space for connection, creativity and conversation. From small community gatherings and workshops to rotating art exhibitions and new dishes, there's always something unfolding. Take a look at what's new or coming up."
          :showLeaf="true"
        />
      </div>
      <WhatsonSlider />
      <div class="text-center my-5">
        <GButton btntxt="explore what's on" />
      </div>
    </div>
    <div class="d-lg-none d-md-none d-block">
      <EventCardsGrid />
    </div>
    <OurStory />
    <OurLocal />
    <div class="d-lg-block d-md-block d-none">
      <Gallery />
    </div>
    <div class="d-lg-none d-md-none d-block">
      <MobileGallery />
    </div>
    <div class="d-lg-block d-md-block d-none">
      <TestimonialSlider />
      <SmallTestimonialSlider />
    </div>
    <div class="d-lg-none d-md-none d-block">
      <MobileSmallTestimonial />
    </div>
    <Visitus />

    <Footer :hasBg="true" />
  </div>
</template>

<script setup>
import HomeBanner from "../components/layouts/HomeBanner.vue";
import FoodsSlider from "../components/layouts/sliderscardsection/FoodsSlider.vue";
import WhatsonSlider from "../components/layouts/sliderscardsection/WhatsonSlider.vue";
import EventCardsGrid from "../components/layouts/sliderscardsection/EventCardsGrid.vue";
import SecHeading from "../components/ui/SecHeading.vue";
import OurStory from "../components/layouts/OurStory.vue";
import OurLocal from "../components/layouts/OurLocal.vue";
import Gallery from "../components/layouts/Gallery.vue";
import MobileGallery from "../components/layouts/MobileGallery.vue";
import TestimonialSlider from "../components/layouts/sliderscardsection/TestimonialSlider.vue";
import SmallTestimonialSlider from "../components//layouts/sliderscardsection/SmallTestimonialSlider.vue";
import Visitus from "../components/layouts/Visitus.vue";
import MobileSmallTestimonial from "../components/layouts/MobileSmallTestimonial.vue";
import Footer from "../components/layouts/Footer.vue";
import CalenderWrapper from "../components/layouts/calender/CalenderWrapper.vue";
import FilteredEventSection from "../components/layouts/FilteredEventSection.vue";
import GButton from "../components/ui/GButton.vue";
</script>
