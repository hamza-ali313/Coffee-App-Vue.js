<template>
  <div class="card testimonial-card h-100 shadow-sm">
    <div class="row g-3 align-items-start text-start p-3">
      <!-- Image -->
      <div class="col-12 col-lg-4 col-md-4">
        <!-- <img :src="data.image" alt="user" class="" /> -->
      </div>

      <!-- Content -->
      <div class="col-12 col-lg-8 col-md-8">
        <!-- Rating -->
        <div class="mb-2">
          <span class="text-warning">
            <div class="rating mb-2 d-flex align-items-center">
              <div class="star-wrapper">
                <!-- Empty Stars -->
                <div class="stars-bg">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>

                <!-- Filled Stars -->
                <div class="stars-fill" :style="{ width: (data.rating / 5) * 100 + '%' }">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>

              <span class="ms-2 text-muted">({{ data.rating }})</span>
            </div>
          </span>
        </div>

        <!-- Text -->
        <p class="mb-2 text-muted txt">
          {{ data.text }}
        </p>

        <!-- Name & Time -->
        <div class="d-flex justify-content-between">
          <div>
            <strong>{{ data.name }}</strong
            ><br />
            <small class="text-muted">{{ data.time }}</small>
          </div>
          <img
            :src="google"
            alt="logo"
            class="img-fluid"
            style="width: 40px; height: 40px; object-fit: contain"
          />
          <!-- <i class="bi bi-google"></i> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import google from "../../assets/images/google.png";
defineProps({
  data: Object,
});
</script>

<style scoped>
@font-face {
  font-family: "DramaturgSC";
  src: url(../fonts/DramaturgSC.otf);
}
.testimonial-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

img {
  width: 340px;
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  object-fit: cover;
}

/* stars css start */
.stars {
  color: #ff9f1c;
  letter-spacing: 2px;
  font-size: 32px;
}

.star-wrapper {
  position: relative;
  display: inline-block;
  line-height: 1;
}

.stars-bg,
.stars-fill {
  display: flex;
  gap: 2px;
}

.stars-bg i {
  color: #ddd; /* gray background stars */
}

.stars-fill {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}

.stars-fill i {
  color: #ffc107; /* Bootstrap yellow */
}

/* star css end */

.text {
  font-size: 14px;
  color: #555;
}

.logo img {
  width: 30px;
}

.txt {
  font-family: "DramaturgSC";
  font-size: 52px;
  line-height: 31px;
}
</style>
