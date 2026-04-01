<template>
  <div class="visitus-sec">
    <div class="container position-relative z-2">
      <div class="sec_heading py-4">
        <!-- Leaf + Heading -->
        <span class="leaf">
          <img :src="leafImg" alt="leaf" />
        </span>
        <h2>Visit Us</h2>
        <h3>step inside<span>,</span> grab a coffee<span>,</span> take a breath</h3>
        <!-- Description -->
        <p class="description">
          You’ll find us on 153 Church Road in Barnes, close to local green spaces and riverside walks. We’re
          easy to reach on foot or by bike, and well placed for a relaxed stop before or after exploring the
          area.
        </p>
      </div>
      <div class="text-start">
        <h6>Address</h6>
        <p>
          <i class="bi bi-geo-alt-fill" style="color: #919b4c; padding: 0 10px 0 0"></i>
          153 Church Road, Barnes, London SW13 9HR
        </p>
        <h6>Opening hours</h6>
        <p>
          <i class="bi bi-clock-fill" style="color: #919b4c; padding: 0 10px 0 0"></i>
          Open every day from 7am to 5pm (Kitchen closes at 4pm)
        </p>
      </div>
      <!-- BUTTONS -->
      <div class="d-flex gap-3 mt-4">
        <GButton btntxt="See Our Menu" />
        <OButton btntxt="Vist Us" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GButton from "../ui/GButton.vue";
import OButton from "../ui/OButton.vue";
import leafImg from "../../assets/images/leaf.png";

</script>

<style scoped lang="scss">
// Visitus specific styles - main styles in global SCSS
// Only component-specific overrides here

.visitus-sec {
  position: relative;
  padding: 169px 20px 230px 100px;
  z-index: 1;
}

/* background image layer */
.visitus-sec::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("@/assets/images/visitus.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

/* green block */
.visitus-sec::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: #2a4b1f;
  z-index: -1;
}

.sec_heading .description {
  width: 40%;
  margin: unset !important;
}

.sec_heading h3 {
  width: 45% !important;
  line-height: 40px !important;
}

.sec_heading {
  text-align: left !important;
}
</style>