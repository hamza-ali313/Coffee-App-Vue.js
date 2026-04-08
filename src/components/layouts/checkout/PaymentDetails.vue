<template>
    <div class="form-section">
        <div class="sec_heading">
            <h2>Payment Details</h2>
        </div>
        <!-- <label>Card Number*</label> -->
        <div class="input-box mt-3">
            <input v-model="payment.cardNumber" placeholder="Card Number" />
            <i class="bi bi-credit-card"></i>
        </div>

        <!-- <label class="mt-3">Expiry Date*</label> -->
        <div class="input-box mt-3 ">
            <input v-model="payment.expiry" placeholder="Expiry Date" />
            <i class="bi bi-calendar"></i>
        </div>

        <!-- <label class="mt-3">CVC*</label> -->
        <div class="input-box mt-3 ">
            <input v-model="payment.cvc" placeholder="CVC" />
            <i class="bi bi-lock"></i>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCheckoutStore } from '@/store/checkout.js'

const store = useCheckoutStore()
const { payment } = storeToRefs(store)

</script>