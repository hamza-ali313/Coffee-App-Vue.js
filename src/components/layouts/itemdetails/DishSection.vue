<template>
  <div>
    <div class="d-lg-block d-md-block d-none">
      <DishSlider :sliderImages="dishes[0].sliderImages" />
    </div>

    <div class="d-lg-none d-md-none d-block">
      <DishGirdShow :sliderImages="dishes[0].sliderImages" />
    </div>
    <div class="container mt-4">
      <DishDetails :dish="activeDish" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import DishSlider from "./DishSlider.vue";
import DishGirdShow from "./DishGirdShow.vue";
import DishDetails from "./DishDetails.vue";
import serving from "../../../assets/images/serving.png";
import dish_user from "../../../assets/images/dish-user.png";
import kids from "../../../assets/images/kids.png";
import savacado from "../../../assets/images/savacado.png";
import sourdough from "../../../assets/images/sourdough.png";
import lemon from "../../../assets/images/lemon.png";
import herbs from "../../../assets/images/herbs.png";
import salt from "../../../assets/images/salt.png";
import olive from "../../../assets/images/olive.png";
import chilli from "../../../assets/images/chilli.png";
import dishslide from "../../../assets/images/dishslide1.png";
import dishslide2 from "../../../assets/images/dishslide2.png";
import dishslide3 from "../../../assets/images/dishslide3.png";
import clock from "../../../assets/images/clock.png";
import check from "../../../assets/images/Check.png";
import Seasonal from "../../../assets/images/seasonal.png";
import avacado from "../../../assets/images/avacado.png";
import friedfish from "../../../assets/images/friedfish.png";
import poachedegg from "../../../assets/images/poachedegg.png";

const dishes = [
  {
    id: 1,
    name: "Avocado on Sourdough",
    price: 8.9,
    description:
      "Creamy smashed avocado with fresh lemon, herbs, and olive oil, served on toasted artisan sourdough. Finished with sea salt and a touch of chilli for gentle warmth and balance.",
    tagline: "Simple, nourishing, and made fresh to order.",
    badges: [
      { label: "Available until 3pm", icon: clock },
      { label: "Seasonal", icon: Seasonal },
      { label: "Available for Order Ahead", icon: check },
    ],
    sliderImages: [dishslide, dishslide2, dishslide3, dishslide, dishslide],
    nutritions: [
      { label: "Calories", value: "320kcal" },
      { label: "Proteins", value: "30g" },
      { label: "Carbs", value: "18g" },
      { label: "Fiber", value: "10g" },
      { label: "Fat", value: "24g" },
    ],
    allergens: [{ name: "Gluten" }, { name: "Eggs" }, { name: "Sesame" }],
    ingredients: [
      { name: "Smashed avocado", icon: "🥑", image: savacado },
      { name: "Artisan sourdough", icon: "🍞", image: sourdough },
      { name: "Lemon juice", icon: "🍋", image: lemon },
      { name: "Fresh herbs", icon: "🌿", image: herbs },
      { name: "Sea salt", icon: "🧂", image: salt },
      { name: "Chilli flakes", icon: "🌶️", image: olive },
      { name: "Extra virgin olive oil", icon: "🫒", image: chilli },
    ],
    about: [
      { icon: serving, label: "Serving", value: "Served Warm" },
      { icon: dish_user, label: "Portion", value: "Single Plate" },
      { icon: kids, label: "Kids", value: "Favourite" },
    ],
    addOns: [
      {
        name: "Poached Egg",
        price: 0.5,
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71",
        selected: false,
      },
      {
        name: "Fried Eggs",
        price: 1.0,
        image: friedfish,
        selected: false,
      },
      {
        name: "Crispy Bacon",
        price: 1.0,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        selected: false,
      },
      {
        name: "Avocado",
        price: 0.5,
        image: avacado,
        selected: true,
      },
      {
        name: "Hot Honey",
        price: 1.0,
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
        selected: false,
      },
      {
        name: "Feta cheese crumbles",
        price: 0.5,
        image: poachedegg,
        selected: false,
      },
    ],
  },
];

const activeDish = ref(dishes[0]);

const handleSlideChange = () => {
  // Handle slide change if needed
};
</script>

<style scoped lang="scss"></style>
