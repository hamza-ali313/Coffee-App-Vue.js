import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        isCartOpen: false,
    }),

    getters: {
        totalItems: (state) =>
            state.items.reduce((acc, item) => acc + item.quantity, 0),

        subtotal: (state) =>
            state.items.reduce((acc, item) => acc + item.totalPrice, 0),
    },

    actions: {
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
        },

        addToCart(product) {
            const key = product.id;
            const existing = this.items.find(i => i.key === key);

            if (existing) {
                // Use the quantity from component
                existing.quantity += product.quantity;
                existing.totalPrice = (existing.basePrice + (existing.addons?.reduce((sum, a) => sum + a.price, 0) || 0)) * existing.quantity;
            } else {
                this.items.push({
                    ...product,
                    key,
                    quantity: product.quantity, // <-- use the component's quantity
                    totalPrice: product.totalPrice // <-- also set total price
                });
            }
        },


        removeItem(index) {
            this.items.splice(index, 1);
        },

        increaseQty(index) {
            const item = this.items[index];
            item.quantity++;
            const addonPrice = item.addons?.reduce((sum, a) => sum + (a.price || 0), 0) || 0;
            item.totalPrice = item.quantity * (item.basePrice + addonPrice);
        },
        decreaseQty(index) {
            const item = this.items[index];
            if (item.quantity > 1) {
                item.quantity--;
                const addonPrice = item.addons?.reduce((sum, a) => sum + (a.price || 0), 0) || 0;
                item.totalPrice = item.quantity * (item.basePrice + addonPrice);
            }
        }
    }
});                         