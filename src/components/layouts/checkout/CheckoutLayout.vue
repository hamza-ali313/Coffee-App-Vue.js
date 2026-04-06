<template>
    <div class="container checkout">
        <div class="row">
            <div class="col-lg-5 left-panel">
                <UserDetails />
                <CollectionDetails />
                <PaymentDetails />
            </div>
            <div class="col-lg-7 right-panel">
            </div>

        </div>
    </div>
</template>

<script setup>
import PaymentDetails from './PaymentDetails.vue'
import CollectionDetails from './CollectionDetails.vue'
import UserDetails from './UserDetails.vue'

</script>
<style lang="scss" scoped>
.checkout {}
</style>