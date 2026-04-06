<template>
    <div class="amenities text-center mb-5">
        <div class="filtersec sec_heading text-center py-4 px-3">
            <h2 class="position-relative d-inline">
                AMENITIES
            </h2>
            <h3 style="padding:unset" class="text-center">
                At Dee our values shape everything we do
            </h3>
        </div>
        <div class="card-box amenities-box">
            <h6 class="card-title"></h6>
            <div class="card-body d-flex justify-content-center flex-wrap gap-3">
                <p v-for="(item, i) in items" :key="i" class="amenity-pill">
                    {{ item }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    items: Array
})

</script>

<style scoped lang="scss">
.amenities-box {
    background: white;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #eee;
}

.amenity-pill {
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid #e6c4a4;
    font-size: 13px;
}
</style>