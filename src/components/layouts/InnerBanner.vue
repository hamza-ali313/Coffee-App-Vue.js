<template>
    <section class="hero-section">
        <Header />
        <div class="container">
            <div class="row">
                <!-- LEFT CONTENT -->
                <div class="col-lg-6 text-white hero-content">
                    <h1 class="hero-title">
                        What's on at dee cafe!
                    </h1>

                    <p class="hero-subtitle">thoughtfully happening at dee</p>

                    <p class="hero-text">
                        A place for connection,creativity and community
                    </p>

                    <!-- BUTTONS -->
                    <div class="d-flex gap-3 mt-4">
                        <GButton btntxt="Explore What's On" />
                        <OButton btntxt="Get Tickets" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Header from "./Header.vue";
import GButton from "../ui/GButton.vue";
import OButton from "../ui/OButton.vue";
</script>

<style scoped lang="scss">
// HomeBanner specific styles - main styles in global SCSS
.hero-section {
    background-image: url(../../assets//images/inbanevent.png);
    height: 720px;
}

.hero-content {
    display: unset;
    padding: 90px 0 0px 50px;

}

.hero-title,
.hero-subtitle,
.hero-text {
    text-align: start;
    margin: unset;
}

.hero-title,
.hero-subtitle {
    line-height: 60px;
}
</style>