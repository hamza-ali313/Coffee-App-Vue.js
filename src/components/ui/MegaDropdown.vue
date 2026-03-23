<template>
  <div class="mega-dropdown container">
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
      <div class="col" v-for="item in items" :key="item.title">
        <DropdownCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DropdownCard from "./DropdownCard.vue";

defineProps({
  items: Array,
});
</script>
