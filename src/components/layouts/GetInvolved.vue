<template lang="">
    <div class='get_involved_bg sec_heading text-center'>
       <div class='container position-relative z-2'>
                    <!-- Leaf + Heading -->
            <!-- <span class="leaf">
            <img :src="leafImg" alt="leaf" />
            </span> -->
            <h2 style='color:#fff'>get involved</h2>
            <!-- Description -->
            <p class="description" style='color:#fff'>
                We are shaped by the community we serve. We’re always open to ideas, from local groups looking for a place to gather, to creatives, organisers or neighbours who want to contribute in some way.
        <!-- If you’re interested in hosting an event, collaborating, or getting involved, we’d love to hear from you. -->
            </p>
            <OButton btntxt="Contact Us" class='btn'/>
       </div>
    </div>
</template>
<script setup>
import leafImg from "../../assets/images/leaf.png";
import OButton from "../ui/OButton.vue";

</script>
<style lang="scss" scoped>
.get_involved_bg {
    position: relative;
    height: 570px;
    z-index: 1;
}

.get_involved_bg .container {
    padding: 140px 0;
}

.get_involved_bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(../../assets/images/getinvolvedbg.png);
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 570px;
    z-index: 1;
}

/* green block */
.get_involved_bg::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: #2a4b1f;
    z-index: -1;
}

/* green block */
.sec_heading h2::before {
    content: "";
    position: absolute;
    background-image: url(../../assets/images/leaf.png);
    background-repeat: no-repeat;
    top: -46px;
    left: -47px;
    background-size: contain;
    width: 60px;
    height: 60px;
}

.sec_heading h2 {
    font-size: 120px;
    position: relative;
    line-height: 50px;
    display: inline-block;
}

.sec_heading p {
    width: 50%;
}

.btn {
    margin: 20px 0 0 0;
    color: #fff;
}
</style>