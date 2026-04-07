<template>
    <div class="menu-card">

        <!-- IMAGE -->
        <div class="img-box">
            <img :src="data.image + '?w=400&auto=format&fit=crop'" loading="lazy" />
        </div>

        <!-- CONTENT -->
        <div class="content">
            <h5>{{ data.title }}</h5>
            <p class="sub_title">{{ data.subtitle }}</p>
            <div class="divider">
                <span>OPTIONS</span>
            </div>

            <!-- ITEMS -->
            <div v-for="(item, i) in data.items" :key="item.name" class="menu-item">
                <div>
                    <strong>{{ item.name }}</strong>
                    <p>{{ item.desc }}</p>
                </div>

                <div class="text-center">
                    <div>
                        <span class="price">£{{ item.price }}</span>
                    </div>
                    <img :src="spice" alt="">
                    <img :src="seasonal" alt="">
                    <img :src="vege" alt="">
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import seasonal from '../../../assets/images/seasonal.png'
import spice from '../../../assets/images/spice.png'
import vege from '../../../assets/images/vege.png'

defineProps({
    data: Object
})
</script>

<style scoped lang="scss">
.menu-card {
    border-radius: 20px;
}

/* IMAGE */
.img-box {
    height: 270px;
    // overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

/* CONTENT */
.content {
    padding: 45px 10px;
    background-image: $bg-wavy;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: -20px 0 0 0;
    position: relative;
}

p.sub_title {
    font-size: 14px;
    font-family: 'TitilliumWeb-Light';
    min-height: 33px;
}

h5 {
    font-weight: 600;
    margin-bottom: 10px;
    font-family: 'TitilliumWeb-SemiBold';

}

/* OPTIONS LINE */
.divider {
    display: flex;
    align-items: center;
    font-size: 11px;
    font-family: 'TitilliumWeb-SemiBold';
    margin-bottom: 10px;
    position: relative;

    span {
        background: #dee2e669;
        width: 120px;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: 12px;
        padding: 4px 0 4px 9px;
        position: relative;
    }

    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: $theme_o;
    }

    &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 106px;
        width: 7px;
        height: 7px;
        border: 1px solid #d08a44;
        border-radius: 50%;
    }


}

/* ITEM */
.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 8px 0;
    border-bottom: 1px dashed $theme_g;

    strong {
        font-weight: bolder;
        font-family: 'TitilliumWeb-Regular';
        font-size: 14px;
    }

    p {
        font-size: 12px;
        margin: 0;
        color: #000;
        font-family: 'TitilliumWeb-Light';
    }
}

.menu-item img {
    width: 16px;
    margin: 0 0 0 2px;
}


.price {
    color: $green-dark;
    font-weight: 700;
    font-family: $titillium-regular;
    font-size: 18px;
}
</style>