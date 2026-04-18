<template>
  <div class="faq-section">
    <div class="sec_heading text-center py-4 px-3">
      <span class="leaf">
        <img :src="leafImg" alt="leaf" />
      </span>
      <h2>Frequently asked Question</h2>
      <h3>common Questions</h3>
    </div>
    <div class="container">
      <AccordianItem
        v-for="(item, index) in faqs"
        :key="index"
        :question="item.question"
        :answer="item.answer"
      />
    </div>
  </div>
</template>

<script setup>
import AccordianItem from "./AccordianItem.vue";
import leafImg from "../../../assets/images/leaf.png";
import { faqs } from "../../../data/faqs";
</script>

<style lang="scss" scoped>
.faq-section .sec_heading h2 {
  font-size: 152px;
  line-height: 70px;
}
</style>
