<template>
  <div class="event-details-card card-box">
    <div class="card-header">
      <h4>EVENT DETAILS</h4>
    </div>
    <div class="card-body">
      <div v-for="item in details" :key="item.label" class="detail-row">
        <div class="icon-box">
          <i :class="item.icon"></i>
        </div>
        <div class="text-box d-flex align-items-center gap-3">
          <span class="label">{{ item.label }}:</span>
          <p class="value">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  details: Array,
});
</script>

<style scoped lang="scss">
.event-details-card {
  background: #fdf5ef;
  border: 1px solid #e5c7a3;
  border-radius: 12px;
  overflow: hidden;

  .card-header {
    background: #f4e7de;
    padding: 15px 20px;
    h4 {
      margin: 0;
      font-size: 16px;
      font-family: $titillium-bold;
      color: #333;
    }
  }

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .detail-row {
    display: flex;
    align-items: start;
    gap: 5px;

    .icon-box {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      font-size: 18px;
      color: #d08a44;
    }

    .text-box {
      .label {
        font-size: 14px;
        font-family: $titillium-semibold;
        width: 69px;
      }
      .value {
        margin: 0;
        font-size: 15px;
        font-family: $titillium-regular;
      }
    }
  }
}
</style>
