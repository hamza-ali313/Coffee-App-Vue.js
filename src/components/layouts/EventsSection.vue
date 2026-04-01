<template>
    <div class="sec_heading text-center py-5">
        <p style="color:#000; width: 50%" class="mb-3">
            We host rotating exhibitions from local artists whose
            work reflects Dee's ethos and 'f ycnjd tike to explore current
            ugxorning exhibitions. or learn more the artists And feature.
            you can find more details
        </p>
        <GButton btntxt="See ALL Events" />
    </div>
    <div class="events-section container py-5">
        <!-- TOP BANNER -->
        <div class="main-card mb-4">
            <img src="../../assets/images/mainevent.png" class="bg-img" />
            <div class="sec_heading text-center py-4 px-3">
                <h2>
                    Events and Gatherings
                </h2>
                <p style="padding:unset" class="text-center">
                    We host rotating exhibitions from local artists whose
                    work reflects Dee's ethos and 'f ycnjd tike to explore current
                    ugxorning exhibitions. or learn more the artists And feature.
                    you can find more details
                </p>
            </div>
        </div>

        <!-- BOTTOM CARDS -->
        <div class="row g-4">
            <div class="col-md-6 col-lg-6 col-sm-12">
                <div class="sub-card">
                    <img src="../../assets/images/event3.png" class="bg-img" />
                    <div class="sec_heading py-4 px-3">
                        <h2>
                            Art and exhibitions
                        </h2>
                        <p>
                            We host rotating exhibitions from local artists whose
                            work reflects Dee's ethos and 'f ycnjd tike to explore current
                            ugxorning exhibitions. or learn more the artists And feature.
                            you can find more details
                        </p>
                        <OButton btntxt="LEARN MORE" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12">
                <div class="sub-card">
                    <img src="../../assets/images/event3.png" class="bg-img" />
                    <div class="sec_heading py-4 px-3">
                        <h2>
                            Get Involved
                        </h2>
                        <p>
                            We're always to ideas from groups toking for a groups to
                            gather, to creatives, organÉers or ryohtxyurs who want to in
                            sorne wayf you're interested in hosting an event. or
                            getting irrotved. we'd love to hear from
                        </p>
                        <OButton btntxt="CONTACT US" />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import OButton from '../ui/OButton.vue';
import GButton from '../ui/GButton.vue';

</script>

<style scoped lang="scss">
.main-card {
    position: relative;
}

.main-card img {
    position: relative;
    height: 570px;
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
}

.main-card .sec_heading p {
    width: 40%;
    margin: 0 auto;
}

.main-card .sec_heading h2 {
    font-size: 130px;
}

.sub-card img {
    position: relative;
    height: 570px;
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
}

.sub-card {
    position: relative;

}

.events-section .sec_heading {
    position: absolute;
    bottom: 40px;
    z-index: 5;
    left: 20px;
}

.events-section {
    margin-bottom: -287px;
    border-top: 1px dashed #000;
}

.main-card .content {
    top: 50%;
    transform: translateY(-50%);
}

.sec_heading h2 {
    color: #fff;
    position: relative;
    display: inline-block;
}

.sec_heading h2::after {
    content: "";
    position: absolute;
    background-image: url(/src/assets/images/rightleaf.png);
    background-repeat: no-repeat;
    top: -27px;
    right: -63px;
    background-size: contain;
    width: 65px;
    height: 70px;
}

.events-section p {
    font-size: 14px;
    text-align: left;
    width: unset;
    padding: 0 150px 0 0;
    margin: 0 0 20px 0;
    color: #fff;
}
</style>