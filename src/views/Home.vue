<template>
  <HomeBanner />
  <FoodsSlider />
  <WhatsonSlider />
  <OurStory />
  <OurLocal />
  <Gallery />
  <TestimonialSlider />
  <SmallTestimonialSlider />
  <Visitus />
  <Footer :hasBg="true"/>
</template>

<script setup>
import HomeBanner from "../components/layouts/HomeBanner.vue";
import FoodsSlider from "../components/layouts/FoodsSlider.vue";
import WhatsonSlider from "../components/layouts/WhatsonSlider.vue";
import OurStory from "../components/layouts/OurStory.vue";
import OurLocal from "../components/layouts/OurLocal.vue";
import Gallery from "../components/layouts/Gallery.vue";
import TestimonialSlider from "../components/layouts/TestimonialSlider.vue";
import SmallTestimonialSlider from "../components/layouts/SmallTestimonialSlider.vue";
import Visitus from "../components/layouts/Visitus.vue";
import Footer from "../components/layouts/Footer.vue";
</script>
