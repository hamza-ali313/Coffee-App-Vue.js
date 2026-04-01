<template>
    <div class="sec_heading text-center py-4 px-3">
        <h2>Order Ahead a pick at dee</h2>
        <h3>here is how it works </h3>
        <p class="description">
            Alongside good food and coffee, we host a rotating programme of community events in Barnes,
            gatherings and exhibitions that reflect the people and ideas around us.
        </p>
    </div>
    <div class="steps-process container py-5">
        <div class="row justify-content-center">
            <div v-for="(step, index) in steps" :key="index" class="col-12 col-md-6 col-lg-3 step-item">
                <div class="icon-wrapper">
                    <img :src="step.icon" alt="" class="step-icon" />
                </div>
                <h5 class="step-title mt-3">{{ step.title }}</h5>
                <p>{{ step.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import ord1 from '../../assets/images/ord1.png'
import ord2 from '../../assets/images/ord2.png'
import ord3 from '../../assets/images/ord3.png'
import ord4 from '../../assets/images/ord4.png'

const steps = [
    {
        icon: ord1,
        title: "Browse and choose",
        desc: "Explore the menu, select your items, and customise if you wish."
    },
    {
        icon: ord2,
        title: "Pick a pickup time",
        desc: "Choose a 10-minute pickup window at checkout."
    },
    {
        icon: ord3,
        title: "We prepare it fresh",
        desc: "Our baristas and chefs start preparing your order so it is ready at the start of your chosen window."
    },
    {
        icon: ord4,
        title: "Skip the line and collect",
        desc: "Walk in, head to the pickup counter, show your order confirmation, and take your order."
    }
]
</script>

<style lang="scss" scoped>
.sec_heading h2 {
    font-size: 120px;
    position: relative;
    line-height: 50px;
    display: inline-block;
}

.sec_heading h2::after {
    content: "";
    position: absolute;
    background-image: url(../../assets/images/rightleaf.png);
    background-repeat: no-repeat;
    top: -46px;
    right: -47px;
    background-size: contain;
    width: 60px;
    height: 60px;
}

.sec_heading {
    position: relative;
    padding: 130px 0 60px 0 !important;
}

.sec_heading::before {
    content: "";
    position: absolute;
    background-image: url(../../assets/images/leftleaflet.png);
    background-repeat: no-repeat;
    top: 60px;
    left: 0;
    background-size: contain;
    width: 320px;
    height: 180px;

}

.sec_heading p {
    width: 40%;
}

.steps-process {
    .step-item {
        position: relative;
        text-align: center;
        margin-bottom: 40px;

        .icon-wrapper {
            position: relative;

            .step-icon {
                height: 220px;
                object-fit: contain;
            }

            // Leaf connector
            &::after {
                content: "";
                position: absolute;
                right: -60px;
                top: 50%;
                width: 117px;
                height: 55px;
                background: url('../../assets/images/leaflet.png') no-repeat center/contain;
                transform: translateY(-50%);
            }
        }

        .step-title {
            font-weight: 600;
            font-family: $titillium-semibold;
        }

        p {
            font-family: $titillium-light;
        }
    }

    // Remove leaf connector for the last step
    .step-item:last-child .icon-wrapper::after {
        display: none;
    }
}

// /* Responsive spacing */
// @media (max-width: 767px) {
//     .steps-process .step-item .icon-wrapper::after {
//         width: 25px;
//         height: 12px;
//         right: -30%;
//     }
// }</style>