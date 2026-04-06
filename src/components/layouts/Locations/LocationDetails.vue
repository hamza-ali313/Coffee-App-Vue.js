<template>

    <div class="row align-items-start mb-5">

        <div class="col-lg-6">

            <h3 class="mb-3">
                {{ data.cafeTitle }}
            </h3>

            <div class="mb-3">
                <p>📍 {{ data.address }}</p>
                <p>📞 {{ data.phone }}</p>
                <p>✉ {{ data.email }}</p>
            </div>

            <div class="card-box hours-card">
                <h6 class="card-title">OPENING HOURS</h6>
                <div class="card-body">
                    <div class="row">
                        <div v-for="(item, i) in data.openingHours" :key="i" class="col-md-6 col-lg-6 mb-2">
                            <div class="d-flex gap-3">
                                <p>
                                    <i class="bi bi-clock-fill" style="color: #919b4c; padding: 0 2px 0 0"></i>
                                    {{ item.day }}
                                </p>
                                <p>{{ item.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OButton btntxt="Get Directions" icon="bi bi-geo-alt-fill" class="mt-3" />
        </div>
        <div class="col-lg-6">

            <div class="map-card">

                <iframe :src="`https://www.google.com/maps?q=${data.mapQuery}&output=embed`" width="100%" height="350"
                    style="border:0" loading="lazy">
                </iframe>

                <div class="map-caption">

                    <h6>FIND US EASILY USING GOOGLE MAPS!</h6>
                    <p>
                        We’re located in the heart of the neighbourhood within walking distance of
                        local homes, shops, and public transport.
                    </p>

                </div>

            </div>

        </div>

    </div>

</template>

<script setup>
import OButton from "../../ui/OButton.vue";

defineProps({
    data: Object
})


</script>

<style scoped lang="scss">
.hours-card {
    width: 90%;

    p {
        margin: 2px;
    }
}

.map-card {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
}

.map-caption {
    background: #f3f3f3;
    padding: 15px;
    font-size: 13px;
}
</style>