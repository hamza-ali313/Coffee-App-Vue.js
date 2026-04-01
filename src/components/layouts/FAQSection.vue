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
            <AccordianItem v-for="(item, index) in faqs" :key="index" :question="item.question" :answer="item.answer" />
        </div>
    </div>
</template>

<script setup>
import AccordianItem from '../ui/AccordianItem.vue'
import leafImg from '../../assets/images/leaf.png'
const faqs = [
    {
        question: "What happens if I arrive late?",
        answer: "Please contact support if you're late."
    },
    {
        question: "Can someone else collect my order?",
        answer: "Yes. Just ask them to show your order confirmation at the pickup counter."
    },
    {
        question: "How early can I arrive?",
        answer: "You can arrive 10 minutes before your slot."
    },
    {
        question: "Can I change or cancel my order?",
        answer: "Yes, before preparation starts."
    },
    {
        question: "What items can be ordered ahead?",
        answer: "Most menu items are available."
    },
    {
        question: "Where do I collect my order?",
        answer: "Pickup counter at the store."
    }
]
</script>

<style lang="scss" scoped>
.faq-section {}

.faq-section .sec_heading h2 {
    font-size: 152px !important;
    line-height: 70px !important;
}
</style>