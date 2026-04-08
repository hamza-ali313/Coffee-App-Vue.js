<template>
    <div class="contact-form-section pb-5">
        <div class="container">
            <div class="form-card bg-white">
                <form @submit.prevent="submitForm">
                    <div class="row g-4">
                        <!-- First Name -->
                        <div class="col-md-6">
                            <FormInput label="First Name" v-model="form.firstName" placeholder="Type Name..."
                                icon="bi-person-fill" required />
                        </div>
                        <!-- Last Name -->
                        <div class="col-md-6">
                            <FormInput label="Last Name" v-model="form.lastName" placeholder="Type Name..."
                                icon="bi-person" required />
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
                            <FormTextarea label="Message" v-model="form.message"
                                placeholder="Write your message here..." />
                        </div>

                        <!-- Submit Button -->
                        <div class="col-12 text-end mt-2">
                            <button class="o_btn menu-btn">
                                <span>SUBMIT NOW</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
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
.contact-form-section {
    background: transparent;
}

.form-card {
    border-radius: 24px;
    padding: 60px;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.04);
    border: 1px solid #f4f1ee;
}

.btn-submit {
    background-color: #8da14e; // Moss green from image
    color: white;
    padding: 16px 45px;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    border: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; // Blob shape
    display: inline-block;
    box-shadow: 0 10px 20px rgba(141, 161, 78, 0.2);

    &:hover {
        background-color: #7b8d44;
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 25px rgba(141, 161, 78, 0.3);
        color: white;
    }

    &:active {
        transform: translateY(-1px) scale(0.98);
    }
}
.o_btn.menu-btn {
  background-image: url("@/assets/images/greenGbtn.png");
  padding: 21px 52px;
}

@media (max-width: 768px) {
    .form-card {
        padding: 30px;
    }
}
</style>