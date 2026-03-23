<template>
  <SecHeading main_h="our gallery" :showLeaf="true" />
  <div class="container-fluid pb-5">
    <div class="row g-3">
      <div v-for="(item, index) in images" :key="index" class="col-12 col-md-3 col-lg-3">
        <GalleryItem :img="item" :variant="getVariant(index)" :class="getOffset(index)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GalleryItem from "../ui/GalleryItem.vue";
import Gal1 from "../../assets/images/Gal1.png";
import Gal2 from "../../assets/images/Gal2.png";
import Gal3 from "../../assets/images/Gal3.png";
import Gal4 from "../../assets/images/Gal4.png";
import Gal5 from "../../assets/images/Gal5.png";
import Gal6 from "../../assets/images/Gal6.png";
import Gal7 from "../../assets/images/Gal7.png";
import Gal8 from "../../assets/images/Gal8.png";
import SecHeading from "../ui/SecHeading.vue";

const images = [Gal1, Gal2, Gal3, Gal4, Gal5, Gal6, Gal7, Gal8];

// ✅ Height pattern (row-based)
const getVariant = (index) => {
  const row = Math.floor(index / 4);
  const col = index % 4;

  // Row 1
  if (row === 0) {
    return col % 2 === 0 ? "short" : "tall";
  }

  // Row 2 (reverse)
  if (row === 1) {
    return col % 2 === 0 ? "tall" : "short";
  }
};

// ✅ Offset ONLY for 2nd row tall items
const getOffset = (index) => {
  const row = Math.floor(index / 4);
  const col = index % 4;

  if (row === 1 && col % 2 === 0) {
    return "move-up";
  }

  return "";
};
</script>
