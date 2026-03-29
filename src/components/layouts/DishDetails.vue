<template>
    <div class="row">

        <div class="col-md-7">
            <div class="sec_heading">
                <h2>{{ dish.name }}</h2>
            </div>

            <span v-for="(b, index) in dish.badges" :key="index" class="badge me-2">
                {{ b.label }}
            </span>

            <p>{{ dish.description }}</p>

            <h2>£{{ dish.price }}</h2>

            <Nutrition :items="dish.nutritions" />
            <Allergens :items="dish.allergens" />
            <AboutDish :items="dish.about" />
        </div>

        <div class="col-md-5">
            <Ingredients :items="dish.ingredients" />

            <AddOns :items="dish.addOns" @addons-updated="updateAddons" />
        </div>

        <AddToOrder :basePrice="dish.price" :addons="selectedAddons" />

    </div>
</template>

<script setup>
import { ref } from "vue"

import Nutrition from "../ui/Nutrition.vue"
import Allergens from "../ui/Allergens.vue"
import Ingredients from "../ui/Ingredients.vue"
import AddOns from "../ui/AddOns.vue"
import AboutDish from "../ui/AboutDish.vue"
import AddToOrder from "../ui/AddToOrder.vue"

defineProps({ dish: Object })

const selectedAddons = ref([])

function updateAddons(data) {
    selectedAddons.value = data.selectedAddons
}
</script>

<style scoped lang="scss">
h1 {
    font-size: 32px;
    margin-bottom: 10px;
}


.badge {
    background: #f3e7dc;
    color: #a67c52;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
}
</style>