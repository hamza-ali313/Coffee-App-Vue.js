<template>
  <div class="practical-section mt-5">
    <h3 class="section-title">Practical</h3>
    <div class="practical-grid mt-4">
      <div v-for="item in practical" :key="item.label" class="practical-item">
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
  practical: Array,
});
</script>

<style scoped lang="scss">
.section-title {
  font-family: $titillium-bold;
  font-size: 24px;
}
.practical-item {
  display: flex;
  align-items: center;
  gap: 15px;

  .icon-box {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #d08a44;
  }

  .text-box {
    .label {
      font-size: 14px;
      font-family: $titillium-semibold;
    }
    .value {
      margin: 0;
      font-size: 16px;
      font-family: $titillium-regular;
    }
  }
}
</style>
