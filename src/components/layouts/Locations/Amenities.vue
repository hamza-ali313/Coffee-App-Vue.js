<template>
  <div class="container">
    <div class="amenities text-center mb-5">
      <div class="filtersec sec_heading text-center py-4 px-3">
        <h2 class="position-relative d-inline">AMENITIES</h2>
        <h3 style="padding: unset" class="text-center">
          At Dee our values shape everything we do
        </h3>
      </div>
      <div class="card-box amenities-box">
        <h6 class="card-title">amenities</h6>
        <div class="card-body">
          <ul class="d-flex flex-wrap p-0 justify-content-center align-items-center gap-3">
            <li
              v-for="(item, i) in items"
              :key="i"
              class="amenity-pill d-flex justify-content-center gap-3 align-items-center"
            >
              <img :src="item.img" alt="" />
              <p>
                {{ item.text }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>

<style scoped lang="scss">
.amenities-box {
}

.amenity-pill {
  padding: 8px 14px;
  border-radius: 20px;
  border: 1px solid #e6c4a4;
  font-size: 13px;
  color: $theme_o;
}
p {
  margin: 0;
}

li.amenity-pill img {
  width: 25px;
  height: 25px;
  object-fit: contain;
}
</style>
