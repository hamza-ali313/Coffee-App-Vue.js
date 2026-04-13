<template>
  <div class="row align-items-start mb-5">
    <div class="col-lg-6">
      <div class="sec_heading">
        <h2 class="mb-3">
          {{ data.cafeTitle }}
        </h2>
      </div>
      <ul class="mb-3 add-cont p-0">
        <li class="d-flex gap-3">
          <i class="bi bi-geo-alt-fill"></i>
          <div>
            <p>ADDRESS:</p>
            <h5>{{ data.address }}</h5>
          </div>
        </li>
        <li class="d-flex gap-3">
          <i class="bi bi-telephone-fill"></i>
          <div>
            <p>CAll US NOW:</p>
            <h5>{{ data.phone }}</h5>
          </div>
        </li>
        <li class="d-flex gap-3">
          <i class="bi bi-envelope-fill"></i>
          <div>
            <p>EMAIL US NOW:</p>
            <h5>{{ data.email }}</h5>
          </div>
        </li>
      </ul>

      <div class="card-box hours-card">
        <h6 class="card-title">OPENING HOURS</h6>
        <div class="card-body">
          <div class="row">
            <div
              v-for="(item, i) in data.openingHours"
              :key="i"
              class="col-md-6 col-lg-6 mb-2"
            >
              <div class="d-flex gap-1">
                <p>
                  <i
                    class="bi bi-clock-fill"
                    style="color: #919b4c; padding: 0 2px 0 0"
                  ></i>
                  {{ item.day }} :
                </p>
                <p>{{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OButton btntxt="Get Directions" icon="bi bi-geo-alt-fill" class="mt-3" />
    </div>
    <div class="col-lg-6">
      <div class="map-card">
        <iframe
          :src="`https://www.google.com/maps?q=${data.mapQuery}&output=embed`"
          width="100%"
          height="350"
          style="border: 0"
          loading="lazy"
        >
        </iframe>

        <div class="map-caption">
          <h6>FIND US EASILY USING GOOGLE MAPS!</h6>
          <p>
            We’re located in the heart of the neighbourhood within walking distance of
            local homes, shops, and public transport.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OButton from "../../ui/OButton.vue";

defineProps({
  data: Object,
});
</script>

<style scoped lang="scss">
.hours-card {
  width: 90%;

  p {
    margin: 2px;
  }
}

.map-card {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ddd;
}

.map-caption {
  background: #fff;
  padding: 15px;
  font-size: 13px;
}

ul.add-cont p {
  margin: 0;
  color: #6f6f6f;
}

ul.add-cont li {
  margin: 0 0 20px 0;
}

ul.add-cont h5 {
  font-size: 43px;
  font-family: "DramaturgSC";
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 1px;
}

ul.add-cont i {
  font-size: 21px;
  color: #d08a44;
}
</style>
