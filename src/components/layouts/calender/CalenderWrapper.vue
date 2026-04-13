<template>
  <div class="calen-wrap-sec">
    <div class="container">
      <!-- BUTTONS -->
      <!--<div class="d-flex gap-1 py-5 justify-content-center">
                <GButton btntxt="upcoming events" icon="bi bi-calendar-event" />
                <OButton btntxt="calender view" />
            </div> -->
      <div class="calendar-wrapper p-4">
        <div class="row gy-5">
          <div class="col-md-5">
            <CalendarMonth :month="1" :year="2026" />
          </div>
          <div class="col-md-2 divider-line">
            <img :src="calenbet" class="d-none d-lg-block d-md-block d-xl-block" />
            <img :src="calenbetween" class="d-block d-lg-none d-md-none d-xl-none" />
          </div>

          <div class="col-md-5">
            <CalendarMonth :month="2" :year="2026" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CalendarMonth from "./CalendarMonth.vue";
import calenbet from "../../../assets/images/calenbet.png";
import calenbetween from "../../../assets/images/calenbetween.png";
import calenleaf from "../../../assets/images/calenleaf.png";
</script>

<style lang="scss" scoped>
.calen-wrap-sec {
  position: relative;
}

.calen-wrap-sec::before {
  content: "";
  position: absolute;
  background-image: url(/src/assets/images/calenleaf.png);
  background-repeat: no-repeat;
  top: -90px;
  left: 0;
  background-size: contain;
  width: 235px;
  height: 470px;
}
</style>
