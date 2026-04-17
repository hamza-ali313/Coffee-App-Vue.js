<template>
  <div class="events-section">
    <div class="container pt-3 pb-5">
      <div class="main-card mb-4">
        <img :src="bannerImage" class="bg-img" />

        <div class="sec_heading text-center py-4 px-3">
          <h2>{{ bannerTitle }}</h2>
          <p style="padding: unset" class="text-center">{{ bannerDescription }}</p>
        </div>
      </div>
      <div class="row g-4">
        <!-- Card 1 -->
        <div class="col-md-6 col-lg-6 col-sm-12">
          <div class="sub-card">
            <img :src="card1Image" class="bg-img" />

            <div class="sec_heading py-4 px-3">
              <h2>{{ card1Title }}</h2>
              <p>{{ card1Description }}</p>

              <OButton v-if="card1ShowButton" :btntxt="card1ButtonText" />
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-md-6 col-lg-6 col-sm-12">
          <div class="sub-card">
            <img :src="card2Image" class="bg-img" />

            <div class="sec_heading py-4 px-3">
              <h2>{{ card2Title }}</h2>
              <p>{{ card2Description }}</p>

              <OButton v-if="card2ShowButton" :btntxt="card2ButtonText" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OButton from "../ui/OButton.vue";
const props = defineProps({
  // Banner (Top Full Width)
  bannerTitle: String,
  bannerDescription: String,
  bannerImage: String,

  // Card 1
  card1Title: String,
  card1Description: String,
  card1ButtonText: String,
  card1ShowButton: Boolean,
  card1Image: String,

  // Card 2
  card2Title: String,
  card2Description: String,
  card2ButtonText: String,
  card2ShowButton: Boolean,
  card2Image: String,
});
</script>

<style scoped lang="scss">
.main-card {
  position: relative;
}

.main-card img {
  position: relative;
  height: 570px;
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
}

.main-card .sec_heading p {
  width: 40%;
  margin: 0 auto;
}

.main-card .sec_heading h2 {
  font-size: 130px;
}

.sub-card img {
  position: relative;
  height: 570px;
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
}

.sub-card {
  position: relative;
}

.events-section .sec_heading {
  position: absolute;
  bottom: 40px;
  z-index: 5;
  left: 0px;
  width: 100%;
}

.events-section {
  margin-bottom: -287px;
  position: relative;
  z-index: 6;
}

.main-card .content {
  top: 50%;
  transform: translateY(-50%);
}

.sec_heading h2 {
  color: #fff;
  position: relative;
  display: inline-block;
}

.sec_heading h2::after {
  content: "";
  position: absolute;
  background-image: url(/src/assets/images/rightleaf.png);
  background-repeat: no-repeat;
  background-size: contain;
  top: -27px;
  right: -63px;
  width: 65px;
  height: 70px;
}

.events-section p {
  font-size: 14px;
  text-align: left;
  width: unset;
  padding: 0 150px 0 0;
  margin: 0 0 20px 0;
  color: #fff;
}
</style>
