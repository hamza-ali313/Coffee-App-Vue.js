<template>
  <div class="food_for_every">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 col-md-6">
          <div class="img_box text-end">
            <img src="../../assets/images/foodforevery.png" />
          </div>
        </div>
        <div class="col-12 col-lg-6 col-md-6">
          <div
            class="txt-sec w-100 w-lg-75 w-md-75 ps-lg-5 ps-md-5 text-center text-lg-start"
          >
            <div class="sec_heading py-4">
              <span class="leaf">
                <img :src="leafImg" alt="leaf" />
              </span>
              <h2>FOOD FOR EVERY</h2>
              <h3>Moment of the day</h3>
            </div>
            <p>
              Our mission at Dee is to create a calm, welcoming neighbourhood café that
              feels like a second home.
            </p>
            <p>
              We exist to offer high-quality coffee and thoughtful food in a space where
              people can slow down, connect, and return to regularly.
            </p>
            <GButton btntxt="get to know us" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import leafImg from "../../assets/images/leaf.png";
import foodforevery from "../../assets/images/foodforevery.png";
import SecHeading from "../ui/SecHeading.vue";
import GButton from "../ui/GButton.vue";
</script>
<style lang=""></style>
