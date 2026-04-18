<template>
  <div class="faq-section position-relative">
    <div class="container">
      <img :src="rightleaf" class="abs_leaf leaf-1" />
      <img :src="leftleaf" class="abs_leaf leaf-2" />
      <img :src="rightleaf" class="abs_leaf leaf-3" />
      <img :src="pairaft" class="abs_leaf leaf-4" />

      <div class="filtersec sec_heading text-center py-4 px-3">
        <h2 class="position-relative d-inline">FREQUENTLY ASKED QUESTIONS</h2>
        <p style="padding: unset" class="text-center">
          Helpful answers to common questions about Dee, our menu, and your visit.
        </p>
      </div>

      <div class="faq-search mx-auto mb-5">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search Here..."
          class="search-input"
        />

        <button class="search-btn">
          <i class="bi bi-search"></i>
        </button>
      </div>
      <!-- Tabs -->
      <div class="faq-tabs d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <div
          v-for="tab in faqTabs"
          :key="tab.key"
          class="faq-tab text-center"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <div class="title">{{ tab.name }}</div>
          <div class="count">{{ tab.count }} questions</div>
        </div>
      </div>

      <!-- Accordion -->
      <div class="faq-list">
        <AccordianItem
          v-for="(faq, i) in currentFaqs"
          :key="i"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AccordianItem from "./AccordianItem.vue";
import rightleaf from "../../../assets/images/pairbef.png";
import pairaft from "../../../assets/images/pairafter.png";
import leftleaf from "../../../assets/images/dishslideaft.png";
import { faqTabs } from "../../../data/faqtabs";

const activeTab = ref("events");

const currentFaqs = computed(() => {
  return faqTabs.find((t) => t.key === activeTab.value)?.faqs || [];
});
</script>

<style lang="scss" scoped>
.abs_leaf {
  position: absolute;
  width: 180px;

  &.leaf-1 {
    left: 0;
    top: 60px;
  }

  &.leaf-2 {
    right: 0;
    top: -60px;
  }

  &.leaf-3 {
    left: 0;
    bottom: -70px;
  }

  &.leaf-4 {
    right: 0;
    top: 70%;
    z-index: 1;
  }
}

.faq-tab {
  border: 1px solid #d7a979;
  border-radius: 10px;
  padding: 18px 28px;
  cursor: pointer;
  background: #fff;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 170px;
  height: 130px;
}

.title {
  font-weight: 600;
  font-size: 14px;
}

.count {
  font-size: 12px;
  color: #666;
}

.faq-tab.active {
  background: #c88947;
  color: white;
}
.faq-tab.active .count {
  color: white;
}
.faq-search {
  position: relative;
  max-width: 900px;
}

.search-input {
  width: 100%;
  border-radius: 40px;
  border: none;
  padding: 16px 70px 16px 25px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  outline: none;
  font-size: 18px;
  font-family: $titillium-regular;
  &::placeholder {
    font-family: $titillium-regular;
  }
}

.search-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: #7a8c3b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-list {
  position: relative;
  z-index: 2;
}
</style>
