<template>
  <div class="food-card">
    <!-- Image -->
    <div class="food-image">
      <img :src="data.image" :alt="data.title" />

      <!-- Tags -->
      <div class="tags">
        <span v-for="(tag, i) in data.tags" :key="i" :class="['tag', tag.toLowerCase()]">
          <i class="bi bi-check-lg"></i> {{ tag }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="food-content">
      <h5 class="title">{{ data.title }}</h5>
      <p class="desc">{{ data.description }}</p>

      <div class="price">
        {{ data.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.food-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.food-image {
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}

.tags {
  position: absolute;
  top: 14px;
  left: 11px;
  display: flex;
  gap: 8px;
}

.tag {
  font-size: 12px;
  font-family: $titillium-regular;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
  color: white;
}

.tag.vegetarian {
  background: $theme_g;
}

.tag.vegan {
  background: $theme_o;
}

.food-content {
  padding: 16px;
}

.title {
  font-size: 18px;
  font-family: $titillium-semibold;
  margin-bottom: 6px;
}

.desc {
  font-size: 14px;
  font-family: $titillium-light;
  margin-bottom: 10px;
}

.price {
  font-size: 20px;
  font-weight: 700;
  font-family: $titillium-semibold;
  color: $green-dark;
}
</style>
