<template>
  <router-link to="/FoodsDrinks">
    <div class="dropdown-card" @click="$emit('click')">
      <img :src="item.image" />
      <p>{{ item.title }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>
