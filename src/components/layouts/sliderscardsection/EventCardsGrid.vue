<template>
  <div class="event_grid">
    <div class="container">
      <SecHeading
        main_h="WHAT'S ON"
        sub_h="At Dee"
        description="A space for connection, creativity and conversation. From small community gatherings and workshops to rotating art exhibitions and new dishes, there's always something unfolding. Take a look at what's new or coming up."
        :showLeaf="true"
      />
    </div>
    <div class="container">
      <div class="row g-4">
        <div v-for="(item, i) in events" :key="i" class="col-md-4 col-lg-3">
          <EventCard
            :title="item.title"
            :desc="item.desc"
            :day="item.day"
            :month="item.month"
            :year="item.year"
            :tag="item.tag"
            :time="item.time"
            :spots="item.spots"
            :image="item.image"
          />
        </div>
      </div>
    </div>
    <div class="text-center mt-3">
      <GButton btntxt="explore the menu" icon="bi bi-list-task" />
    </div>
  </div>
</template>
<script setup>
import EventCard from "./EventCard.vue";
import SecHeading from "../../ui/SecHeading.vue";
import GButton from "../../ui/GButton.vue";
import { events } from "../../../data/eventsdata.js";
</script>
<style lang="scss"></style>
