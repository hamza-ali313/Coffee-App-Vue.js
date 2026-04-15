<template>
  <div>
    <div class="d-lg-block d-md-block d-none">
      <DishSlider :sliderImages="eventData.sliderImages" />
    </div>
    <div class="d-lg-none d-md-none d-block">
      <DishGirdShow :sliderImages="eventData.sliderImages" />
    </div>
    <div class="container mt-5">
      <div class="row">
        <!-- Left Column -->
        <div class="col-lg-12">
          <div
            class="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start justify-content-md-start align-items-center mb-2"
          >
            <span
              v-for="(b, index) in eventData.tags"
              :key="index"
              class="d-flex align-items-center gap-2 border rounded-pill px-2 py-1 small bg-badge"
            >
              <img :src="b.img" alt="" />
              <p class="m-0">{{ b.label }}</p>
            </span>
          </div>
          <div class="sec_heading">
            <h2 class="">{{ eventData.title }}</h2>
          </div>

          <div class="event-meta d-flex gap-4 my-4">
            <span
              ><i class="bi bi-calendar3"></i> {{ eventData.dateRange }} -
              {{ eventData.timeRange }}</span
            >
            <span><i class="bi bi-person"></i> {{ eventData.spotsLeft }} spots left</span>
          </div>

          <div class="mb-5">
            <GButton btntxt="BOOK NOW" icon="bi bi-cart-plus" />
          </div>
          <div class="event-content">
            <div class="event-about">
              <div class="row align-items-center">
                <div class="about-text col-lg-6">
                  <h3 class="section-title">About This Event</h3>
                  <p>{{ eventData.about }}</p>
                </div>
                <div class="col-lg-6">
                  <EventSidebar :details="eventData.sidebarDetails" />
                </div>
              </div>
            </div>
            <h3 class="section-title mt-5">What You Will Experience</h3>
            <ul class="experience-list">
              <li v-for="exp in eventData.experiences" :key="exp">
                <i class="bi bi-check2"></i> {{ exp }}
              </li>
            </ul>
            <EventPractical :practical="eventData.practical" />
          </div>
        </div>
      </div>

      <SecurePlace :price="eventData.price" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DishSlider from "../itemdetails/DishSlider.vue";
import DishGirdShow from "../itemdetails/DishGirdShow.vue";
import EventSidebar from "./EventSidebar.vue";
import EventPractical from "./EventPractical.vue";
import SecurePlace from "./SecurePlace.vue";
import GButton from "../../ui/GButton.vue";
import eventImage from "@/assets/images/eventImage.png";
import coffee from "@/assets/images/coffee.png";
import workshop from "@/assets/images/workshop.png";

const eventData = ref({
  title: "SLOW MORNING COFFEE WORKSHOP",
  tags: [
    { label: "Workshop", img: workshop },
    { label: "Beginner Friendly", img: coffee },
  ],
  dateRange: "Sat 18 Apr",
  timeRange: "10:00 - 12:00",
  spotsLeft: 8,
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  experiences: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ],
  practical: [
    { label: "Duration", value: "1 Hour 30 mins", icon: "bi bi-hourglass-split" },
    { label: "Format", value: "Workshop", icon: "bi bi-people" },
    {
      label: "Includes",
      value: "Motivational Speech, High Tea, Meet and greet",
      icon: "bi bi-gift",
    },
    { label: "Level", value: "Beginner", icon: "bi bi-bar-chart" },
  ],
  sidebarDetails: [
    {
      label: "Locations",
      value: "Some where in some city ABC 123",
      icon: "bi bi-geo-alt-fill",
    },
    { label: "Date", value: "05 April 2026", icon: "bi bi-calendar3-fill" },
    { label: "Time", value: "08:00 AM to 12:00 PM", icon: "bi bi-clock-fill" },
    { label: "Price", value: "$ 123.00", icon: "bi bi-currency-pound" },
    { label: "Availability", value: "8 Spots left", icon: "bi bi-person-check-fill" },
  ],
  price: 25,
  sliderImages: [eventImage, eventImage, eventImage, eventImage, eventImage],
});
</script>

<style scoped lang="scss">
.event-meta {
  font-family: $titillium-semibold;
  color: #000;
  i {
    color: #d08a44;
    margin-right: 5px;
  }
}

.section-title {
  font-family: $titillium-bold;
  font-size: 24px;
}

.experience-list {
  list-style: none;
  padding: 0;
  li {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    i {
      color: $theme_o;
      font-size: 20px;
    }
  }
}
</style>
