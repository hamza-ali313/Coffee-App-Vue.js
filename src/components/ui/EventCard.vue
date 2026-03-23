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
@font-face {
  font-family: "DramaturgSC";
  src: url(../fonts/DramaturgSC.otf);
}
.event-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

/* IMAGE */
.img-box {
  position: relative;
}

.img-box img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

/* DATE BADGE */
.date-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}

.date-badge {
  font-family: "DramaturgSC";
  color: #d08a44;
  font-size: 39px;
  line-height: 19px;
}
.date-badge span {
  color: #919b4c;
  font-size: 49px;
}

/* TAG */
.tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
}

/* TITLE OVERLAY */
.title-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

/* CONTENT */
.content {
  padding: 45px 10px;
  background-image: url(/src/assets/images/wavy.png);
  margin: -20px 0 0 0;
  position: relative;
}

.info {
  margin: 10px 0;
  text-align: justify;
}
.info p {
  margin: 0;
  line-height: 17px;
}
.menu-btn {
  padding: 11px 39px;
  font-size: 38px;
}
</style>
