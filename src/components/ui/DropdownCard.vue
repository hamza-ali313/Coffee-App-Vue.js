<template>
  <div class="dropdown-card" @click="$emit('click')">
    <img :src="item.image" />
    <p>{{ item.title }}</p>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>
