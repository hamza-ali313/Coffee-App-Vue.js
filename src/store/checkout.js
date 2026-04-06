import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
    state: () => ({
        user: {
            name: '',
            phone: '',
            email: ''
        },

        collection: {
            location: '',
            time: '',
            date: '',
            address: ''
        },

        payment: {
            cardNumber: '',
            expiry: '',
            cvc: ''
        }
    }),

    actions: {
        updateUser(payload) {
            this.user = { ...this.user, ...payload }
        },
        updateCollection(payload) {
            this.collection = { ...this.collection, ...payload }
        },
        updatePayment(payload) {
            this.payment = { ...this.payment, ...payload }
        },
        resetForm() {
            this.$reset()
        }
    }
})