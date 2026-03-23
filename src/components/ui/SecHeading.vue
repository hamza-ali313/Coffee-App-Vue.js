<template>
  <div class="sec_heading text-center py-4 px-3">
    <!-- Leaf + Heading -->
    <span v-if="showLeaf" class="leaf">
      <img :src="leafImg" alt="leaf" />
    </span>
    <h2>{{ main_h }}</h2>
    <h3 v-if="sub_h">{{ sub_h }}</h3>
    <!-- Description -->
    <p v-if="description" class="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import leafImg from "../../assets/images/leaf.png";

defineProps({
  showLeaf: {
    type: Boolean,
    default: false,
  },
  main_h: String,
  sub_h: String,
  description: String,
});
</script>
