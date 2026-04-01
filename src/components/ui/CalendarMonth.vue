<template>
    <div class="calendar-month">
        <h5 class="text-center mb-3">{{ monthName }} {{ year }}</h5>

        <!-- Week Days -->
        <div class="week-days">
            <div v-for="d in daysOfWeek" :key="d">
                {{ d }}
            </div>
        </div>

        <!-- ✅ CORRECT GRID -->
        <div class="calendar-grid">
            <div v-for="(day, index) in calendarDays" :key="index" class="calendar-cell" :class="{
                empty: !day,
                active: highlighted.includes(day),
            }">
                <span v-if="day">{{ day }}</span>

                <span v-if="events[day]" class="event-icon">
                    <img :src="events[day]" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import CalendarCell from "./CalendarCell.vue";
import pngwing from "../../assets/images/pngwing.png";

const props = defineProps({
    month: Number,
    year: Number,
});

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDay(year, month) {
    return new Date(year, month, 1).getDay();
}

const calendarDays = computed(() => {
    const days = [];
    const total = getDaysInMonth(props.year, props.month);
    const first = getFirstDay(props.year, props.month);

    for (let i = 0; i < first; i++) days.push(null);
    for (let i = 1; i <= total; i++) days.push(i);

    return days;
});

const monthName = new Date(props.year, props.month).toLocaleString("default", {
    month: "long",
});

// 🎯 Example Data
const highlighted = [10, 27];
const events = {
    27: pngwing,
    18: pngwing,
};
</script>
