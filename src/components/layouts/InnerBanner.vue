<template>
  <section
    :class="['hero-section', 'inner_banner', innerbanclass]"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <MobileHeader :iconColor="iconColor" />

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-7 text-white hero-content">
          <h1 class="hero-title">{{ title }}</h1>

          <p class="hero-subtitle">{{ subtitle }}</p>

          <p class="hero-text">{{ description }}</p>

          <div
            class="d-block d-lg-flex d-md-flex justify-content-lg-start justify-content-md-start justify-content-center gap-3 mt-4"
          >
            <GButton
              v-if="primaryBtn"
              :btntxt="primaryBtn.text"
              :icon="icon_g"
              @click="$emit('primary-click')"
              class=""
            />

            <OButton
              v-if="secondaryBtn"
              :btntxt="secondaryBtn.text"
              :icon="icon_o"
              @click="$emit('secondary-click')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MobileHeader from "./MobileHeader.vue";
import GButton from "../ui/GButton.vue";
import OButton from "../ui/OButton.vue";

defineProps({
  title: String,
  subtitle: String,
  description: String,
  bgImage: String,
  iconColor: String,
  primaryBtn: Object,
  secondaryBtn: Object,
  innerbanclass: String,
  icon_g: String,
  icon_o: String,
});

defineEmits(["primary-click", "secondary-click"]);
</script>

<style scoped lang="scss">
// HomeBanner specific styles - main styles in global SCSS

.hero-content {
  display: unset;
  padding: 90px 0 0px 50px;
}

.hero-title,
.hero-subtitle,
.hero-text {
  text-align: start;
  margin: unset;
}

.hero-title,
.hero-subtitle {
  line-height: 60px;
}
</style>
