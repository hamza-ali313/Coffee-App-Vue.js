<template>
  <div class="container ht">
    <div class="d-flex justify-content-end align-items-center gap-3 h-icons pe-3 mt-2">
      <i class="bi bi-search fs-5"></i>
      <i class="bi bi-cart-fill fs-5"></i>
      <i class="bi bi-person-fill fs-5"></i>
      <i class="bi bi-globe fs-5"></i>
    </div>
    <nav class="navbar navbar-expand-lg py-2 rounded-5 px-3 d-bg">
      <!-- TOGGLE BUTTON for mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- NAV LINKS -->
      <div class="collapse navbar-collapse d-flex align-items-center justify-content-between" id="navbarContent">
        <ul class="navbar-nav nav-left d-flex align-items-center gap-1">
          <!-- SIMPLE LINK -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <!-- DROPDOWN -->
          <li class="nav-item dropdown" @click="toggleMenu('food')">
            <router-link to="/FoodsDrinks" class="nav-link">Food & Drinks</router-link>

            <div v-if="activeMenu === 'food'">
              <MegaDropdown :items="foodItems" @navigate="go" />
            </div>
          </li>

          <li class="nav-item">
            <router-link to="/whatsonevent" class="nav-link">What’s On</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/item-details" class="nav-link">Community</router-link>
          </li>
        </ul>

        <!-- RIGHT SIDE -->
        <ul class="navbar-nav nav-right d-flex align-items-center justify-content-between gap-5">
          <ul class="d-flex align-items-center gap-1">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/visit" class="nav-link">Visit Dee</router-link>
            </li>
          </ul>
          <ul class="position-relative nav_order">
            <li class="nav-item">
              <router-link to="/orderahead">
                <button class="btn order-btn">ORDER AHEAD</button>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import OButton from "../ui/OButton.vue";
import MegaDropdown from "@/components/ui/MegaDropdown.vue";
import dd1 from "../../assets/images/dd1.png";
import dd2 from "../../assets/images/dd2.png";
import dd3 from "../../assets/images/dd3.png";
import dd4 from "../../assets/images/dd4.png";
import dd5 from "../../assets/images/dd5.png";

const router = useRouter();

const activeMenu = ref(null);

function toggleMenu(menu) {
  activeMenu.value = activeMenu.value === menu ? null : menu;
}

function go(path) {
  router.push(path);
}

const foodItems = [
  {
    title: "Menu",
    image: dd1,
    link: "/menu",
  },
  {
    title: "What's Coming",
    image: dd2,
    link: "/coming",
  },
  {
    title: "Food Philosophy",
    image: dd3,
    link: "/philosophy",
  },
  {
    title: "Dietary Inclusivity",
    image: dd4,
    link: "/diet",
  },
  {
    title: "Order Ahead",
    image: dd5,
    link: "/order",
  },
];
</script>

<style scoped lang="scss">
.nav_order::before {
  content: "";
  position: absolute;
  top: 27%;
  left: 0px;
  width: 2px;
  height: 30px;
  background: #ccc;
}

.router-link-active {
  background-image: url('@/assets/images/gnav.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #fff;
}
</style>