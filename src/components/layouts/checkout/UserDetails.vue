<template>
    <div class="form-section">
        <div class="filtersec sec_heading ">
            <h2 class="position-relative d-inline">Your Details</h2>
        </div>
        <label for="">Your Name</label>
        <div class="input-box">
            <input v-model="user.name" placeholder="Your Name" />
            <i class="bi bi-person-fill"></i>
        </div>

        <label for="">Your Number</label>
        <div class="input-box">
            <input v-model="user.phone" placeholder="Your Number" />
            <i class="bi bi-telephone-fill"></i>
        </div>

        <label for="">Your Email</label>
        <div class="input-box">
            <input v-model="user.email" placeholder="Your Email" />
            <i class="bi bi-envelope-fill"></i>
        </div>
    </div>
</template>


<script setup>
import { storeToRefs } from 'pinia'
import { useCheckoutStore } from '@/store/checkout.js'

const store = useCheckoutStore()
const { user } = storeToRefs(store)
</script>