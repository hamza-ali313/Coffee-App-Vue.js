<template>
    <div class="contact-form container py-4">
        <div class="form-card">

            <form @submit.prevent="submitForm">
                <div class="row g-3">
                    <!-- First Name -->
                    <div class="col-md-6">
                        <FormInput label="First Name" v-model="form.firstName" placeholder="Type Name..."
                            icon="bi-person-fill" required />
                    </div>
                    <!-- Last Name -->
                    <div class="col-md-6">
                        <FormInput label="Last Name" v-model="form.lastName" placeholder="Type Name..." icon="bi-person"
                            required />
                    </div>
                    <!-- Email -->
                    <div class="col-md-6">
                        <FormInput label="Email Address" v-model="form.email" placeholder="Type Email..."
                            icon="bi-envelope-fill" required />
                    </div>
                    <!-- Phone -->
                    <div class="col-md-6">
                        <FormInput label="Phone Number" v-model="form.phone" placeholder="Type Number..."
                            icon="bi-telephone-fill" required />
                    </div>
                    <!-- Select -->
                    <div class="col-12">
                        <FormSelect label="Enquiry Type" v-model="form.enquiry" :options="enquiryOptions" />
                    </div>

                    <!-- Message -->
                    <div class="col-12">
                        <FormTextarea label="Message" v-model="form.message" placeholder="Write your message here..." />
                    </div>

                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

import FormInput from './FormInput.vue'
import FormTextarea from './FormTextarea.vue'
import FormSelect from './FormSelect.vue'

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiry: '',
    message: ''
})

const enquiryOptions = [
    'General Enquiry',
    'Booking',
    'Feedback'
]

const submitForm = () => {
    console.log(form)
}
</script>

<style scoped lang="scss">
.contact-form {
    background: #f6f1eb;
}

/* CARD */
.form-card {
    background: #f3f1ef;
    border-radius: 16px;
    padding: 25px;
    border: 1px solid #e2d7cd;
}
</style>