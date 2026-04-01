<template>
    <div class="faq-item mb-3">

        <div class="faq-header d-flex justify-content-between align-items-center rounded-pill px-4 py-3" @click="toggle"
            style="cursor:pointer">
            <h2 class="d-flex align-items-center gap-2 ">
                <img src="../../assets/images/accleaf.png" class="leaf" />

                {{ question }}
            </h2>

            <img :src="isOpen ? minusIcon : plusIcon" class="toggle-icon" />

        </div>

        <p v-if="isOpen" class="faq-body rounded-4 mt-2 px-4 py-3">
            {{ answer }}
        </p>

    </div>
</template>

<script setup>
import { ref } from "vue"

import plusIcon from "../../assets/images/plusacc.png"
import minusIcon from "../../assets/images/minusacc.png"
// import inputbg from "../../assets/images/inputbg.png"

const props = defineProps({
    question: String,
    answer: String
})

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.faq-item {
    background-image: url('../../assets/images/inputbg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10px 0px;
    border-radius: 42px;
}

.leaf {
    width: 32px;
}

h2 {
    font-family: $titillium-semibold;
    margin: 0;
    font-size: 20px;
}

.toggle-icon {
    width: 32px;
    height: 32px;
}
</style>