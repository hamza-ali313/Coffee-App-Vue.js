<template>
    <div class="container">
        <!-- BUTTONS -->
        <div class="d-flex gap-1 py-5 justify-content-center">
            <GButton btntxt="upcoming events" icon="bi bi-calendar-event" />
            <OButton btntxt="calender view" />
        </div>
        <div class="calendar-wrapper p-4">
            <div class="row">
                <div class="col-md-5">
                    <CalendarMonth :month="1" :year="2026" />
                </div>
                <div class="col-md-2 divider-line">
                    <img :src="calenbet" />
                </div>

                <div class="col-md-5">
                    <CalendarMonth :month="2" :year="2026" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import GButton from "../ui/GButton.vue";
import OButton from "../ui/OButton.vue";
import CalendarMonth from "../ui/CalendarMonth.vue";
import calenbet from "../../assets/images/calenbet.png";
import calenleaf from "../../assets/images/calenleaf.png";
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}

.container::before {
    content: "";
    position: absolute;
    background-image: url(/src/assets/images/calenleaf.png);
    background-repeat: no-repeat;
    top: 0;
    left: -101px;
    background-size: contain;
    width: 665px;
    height: 470px;
}
</style>