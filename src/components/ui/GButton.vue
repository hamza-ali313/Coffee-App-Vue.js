<template>
  <button class="menu-btn" v-bind="$attrs" @click="handleClick">
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

const emit = defineEmits(["click"]);

function handleClick(e) {
  emit("click", e);
}
</script>

<style scoped>
.menu-btn {
  background-image: url("@/assets/images/greenGbtn.png");
  padding: 18px 30px;
}
</style>
