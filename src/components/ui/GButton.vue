<template>
  <button class="g_btn menu-btn" v-bind="$attrs" @click="handleClick">
    <i v-if="icon" :class="`bi ${icon}`"></i>
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
.g_btn.menu-btn {
  background-image: url("@/assets/images/greenGbtn.png");
  padding: 18px 45px;
}
.g_btn.menu-btn:focus {
  outline: none;
  box-shadow: none;
  border: none;
}
</style>
