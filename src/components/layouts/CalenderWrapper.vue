<template>
    <div class="container">
        <div class="calendar-wrapper p-4">
            <div class="row">
                <div class="col-md-5">
                    <CalendarMonth :month="1" :year="2026" />
                </div>
                <div class="col-md-2 divider-line"></div>

                <div class="col-md-5">
                    <CalendarMonth :month="2" :year="2026" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import CalendarMonth from "../ui/CalendarMonth.vue";
</script>