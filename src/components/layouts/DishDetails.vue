<template>
    <div class="row">

        <div class="col-md-6 col-lg-6">
            <div class="sec_heading">
                <h2>{{ dish.name }}</h2>
            </div>

            <span v-for="(b, index) in dish.badges" :key="index" class="badge me-2">
                <img :src="b.icon" alt=""> <span>{{ b.label }}</span>
            </span>

            <p class="mt-3">{{ dish.description }}</p>

            <h6 class="mt-3 ">{{ dish.tagline }}</h6>

            <h3>£{{ dish.price }} <sub>Per Serving</sub></h3>

            <Nutrition :items="dish.nutritions" />
            <Allergens :items="dish.allergens" />
            <AboutDish :items="dish.about" />
        </div>
        <div class="col-md-1 col-lg-1">
        </div>
        <div class="col-md-5 col-lg-5">
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
:deep(.section-title) {
    font-weight: 600;
    margin-bottom: 12px;
    font-family: $titillium-semibold;
    padding: 30px 0 30px 0;
    border-top: 1px dashed $theme_o;
    margin: 30px 0 0 0;
    font-size: 24px;
}

:deep(.card-title) {
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
    color: #5c4a3d;
    padding: 18px;
    text-transform: uppercase;
    background: #f3ebe4;
}

h1 {
    font-size: 32px;
    margin-bottom: 10px;
}

h3 {
    margin: 0;
    font-size: 38px;
    line-height: 28px;
    color: #2a4b1f;
    font-family: "TitilliumWeb-SemiBold";
    font-weight: 700;
}

.badge {
    background: #f3e7dc;
    color: #000;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &:nth-child(odd) {
        background-color: #f3e7dc;
        border: 1px solid #e2b689;
    }

    &:nth-child(even) {
        background-color: #f3f1e6;
        border: 1px solid $theme_g;
    }
}

span.badge img {
    width: 15px;
}

sub {
    font-family: $titillium-bold;
    font-size: 14px;
}

h6 {
    font-family: $titillium-semibold;
    font-size: 15px;
    color: $theme_g;
}
</style>