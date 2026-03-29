<template>
    <div class="calendar-cell" :class="{
        empty: !day,
        active: isHighlighted
    }">
        <div v-if="day">
            <span>{{ day }}</span>
            <div class="event" v-if="event">{{ event }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    day: Number,
    isHighlighted: Boolean,
    event: String,
});
</script>