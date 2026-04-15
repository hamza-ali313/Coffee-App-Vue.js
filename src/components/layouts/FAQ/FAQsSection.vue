<template>
    <div class="faq-section position-relative">
        <div class="container ">
            <img :src="rightleaf" class=" abs_leaf leaf-1" />
            <img :src="leftleaf" class=" abs_leaf leaf-2" />
            <img :src="rightleaf" class=" abs_leaf leaf-3" />
            <img :src="pairaft" class=" abs_leaf leaf-4" />

            <div class="filtersec sec_heading text-center py-4 px-3">
                <h2 class="position-relative d-inline">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p style="padding:unset" class="text-center">
                    Helpful answers to common questions about Dee, our menu, and your visit.
                </p>
            </div>

            <div class="faq-search mx-auto mb-5">

                <input v-model="searchQuery" type="text" placeholder="Search Here..." class="search-input" />

                <button class="search-btn">
                    <i class="bi bi-search"></i>
                </button>

            </div>
            <!-- Tabs -->
            <div class="faq-tabs d-flex justify-content-center gap-3 mb-5 flex-wrap">

                <div v-for="tab in faqTabs" :key="tab.key" class="faq-tab text-center"
                    :class="{ active: activeTab === tab.key }" @click="activeTab = tab.key">
                    <div class="title">{{ tab.name }}</div>
                    <div class="count">{{ tab.count }} questions</div>
                </div>

            </div>

            <!-- Accordion -->
            <div class="faq-list">

                <AccordianItem v-for="(faq, i) in currentFaqs" :key="i" :question="faq.question" :answer="faq.answer" />

            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed } from "vue"
import AccordianItem from "./AccordianItem.vue"
import rightleaf from "../../../assets/images/pairbef.png"
import pairaft from "../../../assets/images/pairafter.png"
import leftleaf from "../../../assets/images/dishslideaft.png"

const activeTab = ref("events")

const currentFaqs = computed(() => {
    return faqTabs.find(t => t.key === activeTab.value)?.faqs || []
})

const faqTabs = [
    {
        name: "ORDER AHEAD",
        count: 5,
        key: "order",
        faqs: [
            {
                question: "What happens if I arrive late?",
                answer: "Orders can usually be placed on the same day..."
            },
            {
                question: "How far in advance can I place an order?",
                answer: "Yes, you can place an order in advance through our Order Ahead feature."
            },
            {
                question: "How early can I arrive?",
                answer: "You can arrive 10 minutes before your pickup time."
            }
        ]
    },

    {
        name: "MENU & DIETARY",
        count: 5,
        key: "menu",
        faqs: [
            {
                question: "Do you offer vegan or vegetarian options?",
                answer: "Yes, we have a wide variety of vegan and vegetarian options."
            },
            {
                question: "Can I customise my order?",
                answer: "Yes, customization is available on selected menu items."
            }
        ]
    },

    {
        name: "EVENTS",
        count: 5,
        key: "events",
        faqs: [
            {
                question: "Can I cancel my event booking?",
                answer: "Yes, cancellations are allowed up to 24 hours before."
            },
            {
                question: "What kind of events do you host?",
                answer: "We host private dinners, birthdays and corporate events."
            }
        ]
    },

    {
        name: "VISIT",
        count: 5,
        key: "visit",
        faqs: [
            {
                question: "Where do I collect my order?",
                answer: "Orders can be collected at the pickup counter."
            }
        ]
    },

    {
        name: "MORE FILTERS",
        count: 5,
        key: "filters",
        faqs: [
            {
                question: "Other questions?",
                answer: "Please contact our support team."
            }
        ]
    }
]
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

    }
}

.faq-tab {
    border: 1px solid #d7a979;
    border-radius: 10px;
    padding: 18px 28px;
    cursor: pointer;
    min-width: 170px;
    transition: all .3s;

    .title {
        font-weight: 600;
        font-size: 14px;
    }

    .count {
        font-size: 12px;
        color: #666;
    }
}

.faq-tab.active {
    background: #c88947;
    color: white;
}
.faq-tab.active .count{
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
    background: #e6e6e6;
    outline: none;
    font-size: 14px;
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
</style>