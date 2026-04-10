<template>
  <div class="container-fluid px-0">
    <!-- Added black background wrapper -->
    <div class="container ht">
      <!-- 1. DESKTOP ONLY TOP ICONS (Hidden on mobile) -->
      <div
        :class="[
          'd-none d-lg-flex justify-content-end align-items-center gap-3 h-icons pe-3 pt-2',
          props.iconColor === 'white' ? 'text-white' : 'text-dark',
        ]"
      >
        <i class="bi bi-search fs-5" style="cursor: pointer"></i>
        <i
          class="bi bi-cart-fill fs-5"
          style="cursor: pointer"
          @click="cart.toggleCart"
        ></i>
        <i class="bi bi-person-fill fs-5" style="cursor: pointer"></i>
        <i class="bi bi-globe fs-5" style="cursor: pointer"></i>
      </div>

      <!-- 2. MOBILE HEADER (Shown only on mobile/tablet) -->
      <div
        class="mobile-header d-flex d-lg-none justify-content-between align-items-center py-3 px-3"
      >
        <!-- Custom Toggle Button -->
        <button
          class="mobile-toggle-btn bg-transparent"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
        >
          <img src="../../assets/images/navtoggle.png" />
        </button>

        <div
          class="offcanvas offcanvas-start mobile-drawer"
          tabindex="-1"
          id="mobileMenu"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Menu</h5>
            <button type="button" class="btn-close fs-4 d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas">
              <img src="../../assets/images/navtoggle.png" />
            </button>
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav">
              <li class="nav-item text-nowrap w-100 text-center">
                <router-link class="nav-link mx-auto" to="/">Home</router-link>
              </li>
              <li class="nav-item text-nowrap w-100 text-center">
                <router-link class="nav-link mx-auto" to="/FoodsDrinks">
                  Food & Drinks
                </router-link>
              </li>
              <li class="nav-item text-nowrap w-100 text-center">
                <router-link class="nav-link mx-auto" to="/whatsonevent"> What's On </router-link>
              </li>

              <li class="nav-item text-nowrap w-100 text-center">
                <router-link class="nav-link mx-auto" to="/item-details"> Community </router-link>
              </li>

              <li class="nav-item text-nowrap w-100 text-center">
                <router-link class="nav-link mx-auto" to="/faqs"> About Us </router-link>
              </li>

              <li class="nav-item text-nowrap w-100 text-center">
                <router-link class="nav-link mx-auto" to="/locations"> Visit Dee </router-link>
              </li>

              <li class="nav-item text-nowrap w-100 text-center mt-3 text-center">
                <router-link to="/orderahead">
                  <button class="btn order-btn">ORDER AHEAD</button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- Center Logo -->
        <div class="mobile-logo">
          <router-link to="/">
            <img
              :src="props.iconColor === 'white' ? lighticon : darkicon"
              alt="Dee Logo"
            />
          </router-link>
        </div>

        <!-- Basket Icon -->
        <div class="mobile-basket" style="cursor: pointer" @click="cart.toggleCart">
          <img
            :src="props.iconColor === 'white' ? basketWhite : basketgreen"
            alt="Basket"
          />
        </div>
      </div>

      <!-- 3. MAIN NAVBAR -->
      <nav
        class="navbar navbar-expand-lg py-2 d-none d-lg-block rounded-5 px-3 d-bg"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <!-- NAV LINKS COLLAPSE (Works for both) -->
        <div
          class="collapse navbar-collapse d-lg-flex align-items-center justify-content-between"
          id="navbarContent"
        >
          <ul class="navbar-nav nav-left d-flex align-items-center gap-1">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li
              class="nav-item dropdown position-relative"
              @mouseenter="openMenu('food')"
            >
              <router-link to="/FoodsDrinks" class="nav-link">
                Food & Drinks
              </router-link>

              <div v-if="activeMenu === 'food'" class="mega-wrapper">
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

          <!-- RIGHT SIDE (Hidden or simplified on mobile inside collapse) -->
          <ul
            class="navbar-nav nav-right d-flex align-items-center justify-content-between gap-5"
          >
            <ul class="d-flex align-items-center gap-1">
              <li class="nav-item">
                <router-link to="/faqs" class="nav-link">About Us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/locations" class="nav-link">Visit Dee</router-link>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/store/cart";
import OButton from "../ui/OButton.vue";
import MegaDropdown from "@/components/ui/MegaDropdown.vue";
import dd1 from "../../assets/images/dd1.png";
import dd2 from "../../assets/images/dd2.png";
import dd3 from "../../assets/images/dd3.png";
import dd4 from "../../assets/images/dd4.png";
import dd5 from "../../assets/images/dd5.png";

import darkBg from "../../assets/images/nav_bg.png";
import lightBg from "../../assets/images/nav-white.png";
import lighticon from "../../assets/images/footlogo.png";
import darkicon from "../../assets/images/deedarklogo.png";
import basketWhite from "../../assets/images/basketWhite.png";
import basketgreen from "../../assets/images/basketgreen.png";

const props = defineProps({
  iconColor: {
    type: String,
    default: "black", // or 'white'
  },
  bgImage: String,
});

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const bgImage = computed(() => {
  return props.iconColor === "white" ? darkBg : lightBg;
});
const cart = useCartStore();
const router = useRouter();
const activeMenu = ref(null);

function openMenu(menu) {
  activeMenu.value = menu;
}

function handleClickOutside(e) {
  const menu = document.querySelector(".dropdown");

  if (menu && !menu.contains(e.target)) {
    activeMenu.value = null;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

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

<style lang="scss">
/* Mobile Specific Styles */
ul {
  margin-top: revert;
}

.mobile-nav {
  .orange-blob {
    i {
      color: #000;
      font-size: 1.8rem;
    }
  }
}

.mobile-drawer {
  background: #000;
  color: white;
  width: 280px;

  .nav-link {
    color: white;
    font-size: 18px;
    padding: 12px 0;
  }
}

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
  background-image: url("@/assets/images/gnav.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #fff;
  padding: 10px 0;
}
.mobile-logo .router-link-active {
    background-image: unset;
}
</style>
