<template>

    <div class="food-section container">

        <h2>FOODS</h2>

        <FoodFilter :selected="selected" @change="setFilter" />

        <FoodDrinkSlider :foods="filteredFoods" />

    </div>

</template>

<script setup>

import { ref, computed } from "vue"

import FoodDrinkFilters from "../Filters/FoodDrinkFilters.vue"
import FoodDrinkSlider from "../layouts/FoodDrinkSlider.vue"

import img1 from "@/assets/images/Fslid1.png"
import img2 from "@/assets/images/Fslid2.png"
import img3 from "@/assets/images/Fslid3.png"
import img4 from "@/assets/images/Fslid4.png"

const selected = ref("All")

function setFilter(cat) {
    selected.value = cat
}

const foods = [

    {
        title: "Morning Bowls",
        category: "Vegan",
        desc: "Light, nourishing bowls to start the day",
        image: img1,
        items: [
            { name: "Fruit Bowl", detail: "Fresh fruits", price: 12 },
            { name: "Oat Bowl", detail: "Oats and berries", price: 6 }
        ]
    },

    {
        title: "Brunch Plates",
        category: "Vegetarian",
        desc: "Relaxed brunch classics",
        image: img2,
        items: [
            { name: "Avocado Toast", detail: "Sourdough", price: 8 },
            { name: "Mushroom Toast", detail: "Herbs", price: 6 }
        ]
    }

]

const filteredFoods = computed(() => {

    if (selected.value === "All") return foods

    return foods.filter(
        f => f.category === selected.value
    )

})

</script>