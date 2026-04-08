<template>
  <div>
    <DishSlider :sliderImages="eventData.sliderImages" />

    <div class="container mt-5">
      <div class="row">
        <!-- Left Column -->
        <div class="col-lg-12">
          <div class="d-flex gap-2 mb-3">
            <span v-for="tag in eventData.tags" :key="tag.label" class="event-tag">
              <i v-if="tag.icon" :class="tag.icon" style="color: #d08a44;"></i> {{ tag.label }}
            </span>
          </div>

          <div class="sec_heading">
            <h2 class="">{{ eventData.title }}</h2>
          </div>

          <div class="event-meta d-flex gap-4 my-4">
            <span><i class="bi bi-calendar3"></i> {{ eventData.dateRange }}</span>
            <span><i class="bi bi-clock"></i> {{ eventData.timeRange }}</span>
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
import { ref } from 'vue'
import DishSlider from '../itemdetails/DishSlider.vue'
import EventSidebar from './EventSidebar.vue'
import EventPractical from './EventPractical.vue'
import SecurePlace from './SecurePlace.vue'
import GButton from '../../ui/GButton.vue'

import eventImg from '@/assets/images/dishslide1.png' // Reusing image for now

const eventData = ref({
  title: 'SLOW MORNING COFFEE WORKSHOP',
  tags: [
    { label: 'Workshop', icon: 'bi bi-people' },
    { label: 'Beginner Friendly', icon: 'bi bi-cup-hot' }
  ],
  dateRange: 'Sat 18 Apr',
  timeRange: '10:00 - 12:00',
  spotsLeft: 8,
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  experiences: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  ],
  practical: [
    { label: 'Duration', value: '1 Hour 30 mins', icon: 'bi bi-hourglass-split' },
    { label: 'Format', value: 'Workshop', icon: 'bi bi-people' },
    { label: 'Includes', value: 'Motivational Speech, High Tea, Meet and greet', icon: 'bi bi-gift' },
    { label: 'Level', value: 'Beginner', icon: 'bi bi-bar-chart' }
  ],
  sidebarDetails: [
    { label: 'Locations', value: 'Some where in some city ABC 123', icon: 'bi bi-geo-alt' },
    { label: 'Date', value: '05 April 2026', icon: 'bi bi-calendar3' },
    { label: 'Time', value: '08:00 AM to 12:00 PM', icon: 'bi bi-clock' },
    { label: 'Price', value: '$ 123.00', icon: 'bi bi-currency-pound' },
    { label: 'Availability', value: '8 Spots left', icon: 'bi bi-person-check' }
  ],
  price: 25,
  sliderImages: [eventImg, eventImg, eventImg]
})
</script>

<style scoped lang="scss">
.event-tag {
  background: #fdf5ef;
  border: 1px solid #e5c7a3;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.event-title {
  font-size: 64px;
  line-height: 1.1;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.event-meta {
  font-family: $titillium-semibold;
  color: #555;
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
      color: #8da14e;
      font-size: 20px;
    }
  }
}
</style>
