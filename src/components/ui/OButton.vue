<template>
  <button class="menu-btn" @click="$emit('click', $event)">
    <i v-if="icon" :class="icon"></i>
    <span>{{ btntxt }}</span>
  </button>
</template>

<script setup>
defineProps({
  btntxt: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
});

defineEmits(["click"]);
</script>

<style scoped>
.menu-btn {
  background-image: url("@/assets/images/Obtnbg.png");
  padding: 21px 52px;
}
</style>
