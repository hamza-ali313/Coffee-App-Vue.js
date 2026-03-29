<template>
  <div class="event-card">
    <!-- Image -->
    <div class="img-box">
      <img :src="image" />

      <!-- Date Badge -->
      <div class="date-badge">
        <span>{{ day }}</span> <br />
        {{ month }}
      </div>

      <!-- Tag -->
      <p class="tag">{{ tag }}</p>

      <!-- Title -->
      <div class="title-overlay">
        <h5>{{ title }}</h5>
      </div>
    </div>

    <!-- Content -->
    <div class="content">
      <p>{{ desc }}</p>

      <div class="info">
        <p>
          <i class="bi bi-clock-fill" style="color: #d08a44; padding: 0 10px 0 0"></i>
          <strong>{{ time }}</strong>
        </p>
        <p>
          <i
            class="bi bi-person-fill fs-5"
            style="color: #919b4c; padding: 0 10px 0 0"
          ></i>
          <strong>{{ spots }}</strong> Spot Left
        </p>
      </div>

      <div class="d-flex gap-3 mt-4">
        <GButton btntxt="Add to Calender" />
        <OButton btntxt="RSVP" />
      </div>
    </div>
  </div>
</template>

<script setup>
import OButton from "../ui/OButton.vue";
import GButton from "../ui/GButton.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  spots: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
// Event card specific styles - main styles in global SCSS
// Only component-specific overrides here

.menu-btn {
  padding: 11px 39px;
  font-size: 38px;
}
</style>
