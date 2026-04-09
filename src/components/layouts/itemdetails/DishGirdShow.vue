<template>
    <div class="dish-showcase position-relative container">
        <!-- Top Image -->
        <div class="top-image">
            <img :src="sliderImages[0]" />
        </div>

        <!-- Bottom Images -->
        <div class="bottom-images row g-2">
            <div class="col-6">
                <img :src="sliderImages[1]" />
            </div>

            <div class="col-6">
                <img :src="sliderImages[2]" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    sliderImages: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.dish-showcase {
    max-width: 500px;
    margin: auto;

    &::before {
        content: "";
        position: absolute;
        top: 66%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        background-image: url(../../../assets/images/dee_Logo.png);
        @include bg_no_repeat_contain_center;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 18px;
    }

    .top-image {
        margin-bottom: 10px;

        img {
            height: 320px;
        }
    }

    .bottom-images {
        img {
            height: 160px;
        }
    }
}
</style>
