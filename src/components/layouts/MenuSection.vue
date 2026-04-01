<template>
    <div class="menu-page container py-5">

        <!-- FILTERS -->
        <div class="filters d-flex justify-content-center gap-3 mb-4">
            <p v-for="f in filters" :key="f" class="filter-item" :class="{ active: activeFilter === f }"
                @click="activeFilter = f">
                {{ f }}
            </p>

            <!-- toggle -->
            <p class="form-check form-switch ms-3">
                <input class="form-check-input" type="checkbox" v-model="orderAhead">
                <label class="form-check-label">Order Ahead</label>
            </p>
        </div>

        <!-- MENU SECTIONS -->
        <div v-for="section in filteredSections" :key="section.title" class="mb-5">
            <div v-if="section.filteredCategories.length" class=" sec_heading mb-3 py-4 px-3">
                <h2 class="position-relative d-inline">
                    {{ section.title }}
                </h2>
                <p style="padding:unset">
                    {{ section.titledesc }}
                </p>
            </div>
            <MenuSlider :menuCategories="section.filteredCategories" />

        </div>

    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import MenuSlider from "../layouts/MenuSlider.vue"

const filters = ["All", "Vegan", "Vegetarian", "Gluten Free", "Kids"]

const activeFilter = ref("All")
const orderAhead = ref(false)



const sections = ref([
    {
        title: "Foods",
        titledesc: "Dee’s Foods are crafted with quality ingredients and calm attention to detail.",
        categories: [
            {
                title: "Morning Bowls",
                subtitle: "Light, nourishing bowls to start the day gently.",
                tags: ["Vegetarian"],
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
                items: [
                    {
                        name: "Seasonal Fruit & Yoghurt Bowl",
                        desc: "Greek yoghurt, honey, seeds, fresh fruit",
                        price: 12.50,
                        tags: ["Vegetarian"]
                    },
                    {
                        name: "Oat & Berry Porridge",
                        desc: "Slow-cooked oats, berries, maple",
                        price: 6.70,
                        tags: ["Vegan"]
                    },
                    {
                        name: "Oat & Berry Porridge",
                        desc: "Slow-cooked oats, berries, maple",
                        price: 8.90,
                        tags: ["Vegan"]
                    }
                ]
            },

            {
                title: "Brunch Plates",
                subtitle: "Relaxed plates and open sandwiches for long brunches",
                tags: ["Vegetarian"],
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
                items: [
                    {
                        name: "Avocado on Sourdough",
                        desc: "Lemon, herbs, toasted sourdough",
                        price: 8.90,
                        tags: ["Vegetarian"]
                    },
                    {
                        name: "Smoked Salmon Open Toast",
                        desc: "Soft eggs, crème fraîche, rye",
                        price: 12.50,
                        tags: ["Gluten Free"]
                    },
                    {
                        name: "Mushroom & Ricotta Toast",
                        desc: "Roasted mushrooms, herbs",
                        price: 6.70,
                        tags: ["Vegetarian"]
                    }
                ]
            },

            {
                title: "Toasties",
                subtitle: "Golden, comforting toasties simple and satisfying.",
                tags: ["Kids"],
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
                items: [
                    {
                        name: "Cheese & Tomato Toastie",
                        desc: "Mature cheddar, roasted tomato",
                        price: 5.90,
                        tags: ["Vegetarian"]
                    },
                    {
                        name: "Chicken & Pesto Toastie",
                        desc: "Grilled chicken, basil pesto",
                        price: 11.80,
                        tags: []
                    },
                    {
                        name: "Mushroom Melt Toastie",
                        desc: "Mushrooms, mozzarella, herbs",
                        price: 8.70,
                        tags: ["Vegetarian"]
                    }
                ]
            },

            {
                title: "Seasonal Bowls & Plates",
                subtitle: "Fresh plates shaped by the market and the mood of the kitchen.",
                tags: ["Gluten Free"],
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                items: [
                    {
                        name: "Lemon Herb Chicken Bowl",
                        desc: "Warm grains, greens, citrus dressing",
                        price: 12.50,
                        tags: []
                    },
                    {
                        name: "Roasted Courgette",
                        desc: "Free-range egg, garlic spinach",
                        price: 6.70,
                        tags: ["Vegetarian"]
                    },
                    {
                        name: "Chicken & Herb Galette",
                        desc: "Grilled chicken, soft herbs",
                        price: 8.90,
                        tags: []
                    }
                ]
            }
        ]
    },

    {
        title: "Drinks",
        titledesc: 'Dee’s drinks are crafted with quality ingredients and calm attention to detail.',
        categories: [
            {
                title: "Hot Coffee",
                subtitle: "Speciality beans brewed carefully for balance and comfort.",
                tags: ["Gluten Free"],
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
                items: [
                    { name: "Espresso", desc: "Single or double shot", price: 5.90, tags: [] },
                    { name: "Americano", desc: "Espresso with hot water", price: 11.80, tags: [] },
                    { name: "Flat White", desc: "Velvety micro-foam", price: 8.70, tags: [] },
                    { name: "Latte", desc: "Smooth and milky", price: 12.50, tags: [] },
                    { name: "Cappuccino", desc: "Foamy and rich", price: 6.70, tags: [] },
                    { name: "Mocha", desc: "Coffee with chocolate", price: 8.90, tags: [] }
                ]
            },

            {
                title: "Teas & Matcha",
                subtitle: "Calming teas and ceremonial-grade matcha.",
                tags: ["Vegan"],
                image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
                items: [
                    { name: "Brunch Tea (Black)", desc: "Assam + Darjeeling blend", price: 12.50, tags: [] },
                    { name: "Earl Grey Goût Russe (Black)", desc: "Citrus bergamot tea", price: 6.70, tags: [] },
                    { name: "Coquelicot Gourmand (Black)", desc: "Gourmet black tea with fruity notes", price: 8.90, tags: [] },
                    { name: "Miss Dammann (Green)", desc: "Green tea with ginger, passion fruit and lime", price: 5.90, tags: [] },
                    { name: "Bali (Green)", desc: "Green tea with lychee, grapefruit, peach", price: 11.80, tags: [] },
                    { name: "Jasmin Chung Hao (Green)", desc: "Jasmine green tea", price: 8.70, tags: [] },
                    { name: "Bella Blanca (White)", desc: "White tea with mango, bergamot and almond", price: 12.50, tags: [] },
                    { name: "Passion de Fleurs (White)", desc: "White tea with rose, apricot and passion fruit", price: 6.70, tags: [] }
                ]
            },

            {
                title: "Infusions",
                subtitle: "Freshly pressed, naturally energising.",
                tags: ["Vegan"],
                image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
                items: [
                    { name: "Rooibos Jardin Bleu", desc: "Rooibos with rhubarb & strawberry", price: 11.80, tags: [] },
                    { name: "Rooibos Citrus", desc: "Rooibos with lemon, clementine and orange", price: 8.70, tags: [] },
                    { name: "Rooibos Vanille", desc: "Rooibos with vanilla notes", price: 12.50, tags: [] },
                    { name: "Rooibos Earl Grey", desc: "Rooibos with bergamot notes", price: 6.70, tags: [] },
                    { name: "Carcadet Provence", desc: "Hibiscus infusion with apricot & peach", price: 12.50, tags: [] },
                    { name: "Carcadet Nuit d'été", desc: "Hibiscus with raspberry, cream & strawberry", price: 6.70, tags: [] },
                    { name: "Passion Framboise", desc: "Hibiscus with raspberry & passion fruit", price: 8.90, tags: [] },
                    { name: "Cacao Orange", desc: "Cocoa nibs with orange zest", price: 5.90, tags: [] }
                ]
            },

            {
                title: "Hot Chocolate",
                subtitle: "Pure chocolate.",
                tags: ["Kids"],
                image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
                items: [
                    { name: "Classic Hot Chocolate", desc: "Rich chocolate drink", price: 8.70, tags: ["Kids"] },
                    { name: "Dark Hot Chocolate", desc: "More intense cocoa profile", price: 12.50, tags: [] },
                    { name: "Mocha Hot Chocolate", desc: "Hot chocolate with espresso shot", price: 6.70, tags: [] },
                    { name: "Kids Hot Chocolate", desc: "Light and creamy", price: 8.90, tags: ["Kids"] }
                ]
            }
        ]
    },
    {
        title: "Bakery & Sweets",
        titledesc: 'Dee’s drinks are crafted with quality ingredients and calm attention to detail.',
        categories: [
            {
                title: "Pastries",
                subtitle: "Flaky, golden layers",
                tags: ["Kids", "Gluten Free", 'Vegetarian'],
                image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
                items: [
                    {
                        name: "Butter Croissant",
                        desc: "Flaky, golden layers",
                        price: 12.50,
                        tags: []
                    },
                    {
                        name: "Pain au Chocolat",
                        desc: "Dark chocolate centre",
                        price: 6.70,
                        tags: []
                    },
                    {
                        name: "Almond Croissant",
                        desc: "Filled with almond cream",
                        price: 8.90,
                        tags: []
                    }
                ]
            },

            {
                title: "Cakes & Slices",
                subtitle: "Comforting slices for slow afternoons.",
                tags: ["Kids", "Gluten Free", 'Vegetarian'],
                image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
                items: [
                    {
                        name: "Lemon Drizzle Cake",
                        desc: "Citrus glaze, soft sponge",
                        price: 8.90,
                        tags: []
                    },
                    {
                        name: "Chocolate Fudge Cake",
                        desc: "Rich cocoa layers",
                        price: 12.50,
                        tags: []
                    },
                    {
                        name: "Carrot & Walnut Cake",
                        desc: "Spiced sponge, cream cheese",
                        price: 6.70,
                        tags: []
                    }
                ]
            },

            {
                title: "Crêpes",
                subtitle: "Thin, soft crêpes made to order.",
                tags: ["Kids", 'Vegetarian'],
                image: "https://images.unsplash.com/photo-1587735347570-7aa2b57e7c1a",
                items: [
                    {
                        name: "Classic Sugar & Lemon Crêpe",
                        desc: "Simple and fresh",
                        price: 5.90,
                        tags: []
                    },
                    {
                        name: "Nutella Crêpe",
                        desc: "Chocolate hazelnut spread",
                        price: 11.80,
                        tags: []
                    },
                    {
                        name: "Banana & Honey Crêpe",
                        desc: "Warm fruit, drizzle honey",
                        price: 8.70,
                        tags: []
                    }
                ]
            },

            {
                title: "Cookies & Small Treats",
                subtitle: "Little bites to go with your coffee.",
                tags: ["Vegan", "Kids"],
                image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
                items: [
                    {
                        name: "Chocolate Chip Cookie",
                        desc: "Mixed berries, banana",
                        price: 12.50,
                        tags: []
                    },
                    {
                        name: "Oat & Raisin Cookie",
                        desc: "Lightly spiced",
                        price: 6.70,
                        tags: []
                    },
                    {
                        name: "Double Chocolate Cookie",
                        desc: "Rich cocoa flavour",
                        price: 8.90,
                        tags: []
                    }
                ]
            }
        ]
    },
    {
        title: "Seasonal Specials",
        titledesc: 'Dee’s drinks are crafted with quality ingredients and calm attention to detail.',
        categories: [
            {
                title: "Seasonal Food",
                subtitle: "Comforting plates shaped by what’s in season.",
                tags: ["Kids", "Vegetarian", 'Gluten Free'],
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                items: [
                    {
                        name: "Spring Greens Risotto",
                        desc: "Peas, asparagus, lemon, parmesan",
                        price: 12.50,
                        tags: []
                    },
                    {
                        name: "Roasted Pumpkin & Feta Bowl",
                        desc: "Seeds, herbs, citrus dressing",
                        price: 6.70,
                        tags: []
                    },
                    {
                        name: "Market Veg Flatbread",
                        desc: "Roasted seasonal vegetables",
                        price: 8.90,
                        tags: []
                    }
                ]
            },

            {
                title: "Seasonal Drinks",
                subtitle: "Limited-time blends to match the mood of the season.",
                tags: ['Gluten Free', 'Kids'],
                image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
                items: [
                    {
                        name: "Iced Orange Americano",
                        desc: "Espresso with fresh citrus",
                        price: 8.90,
                        tags: []
                    },
                    {
                        name: "Honey Lavender Latte",
                        desc: "Soft floral notes",
                        price: 12.50,
                        tags: []
                    },
                    {
                        name: "Spiced Apple Chai",
                        desc: "Warming winter blend",
                        price: 6.70,
                        tags: []
                    }
                ]
            },

            {
                title: "Seasonal Bakery",
                subtitle: "Fresh bakes inspired by the time of year.",
                tags: ['Kids', 'Gluten Free'],
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
                items: [
                    {
                        name: "Rhubarb & Custard Danish",
                        desc: "Sweet-tart filling",
                        price: 5.90,
                        tags: []
                    },
                    {
                        name: "Pumpkin Spice Loaf",
                        desc: "Soft spiced sponge",
                        price: 11.80,
                        tags: []
                    },
                    {
                        name: "Berry Crumble Slice",
                        desc: "Seasonal berries, oat topping",
                        price: 8.70,
                        tags: []
                    }
                ]
            },

            {
                title: "Cookies & Small Treats",
                subtitle: "Little bites to go with your coffee.",
                tags: ['Kids', 'Gluten Free'],
                image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
                items: [
                    {
                        name: "Chocolate Chip Cookie",
                        desc: "Mixed berries, banana",
                        price: 12.50,
                        tags: ["spicy", "hot", "seasonal"]
                    },
                    {
                        name: "Oat & Raisin Cookie",
                        desc: "Lightly spiced",
                        price: 6.70,
                        tags: ["spicy", "hot", "seasonal"]
                    },
                    {
                        name: "Double Chocolate Cookie",
                        desc: "Rich cocoa flavour",
                        price: 8.90,
                        tags: ["spicy", "hot", "seasonal"]
                    }
                ]
            }
        ]
    }
])


const filteredSections = computed(() => {
    return sections.value
        .map(section => {
            const cats = section.categories.filter(cat => {
                if (activeFilter.value === "All") return true
                return cat.tags?.includes(activeFilter.value)
            })

            return {
                ...section,
                filteredCategories: cats
            }
        })
        .filter(section => section.filteredCategories.length)
})
</script>

<style scoped>
.sec_heading p {
    width: 45%;
    margin: unset;
}

.sec_heading h2::before {
    content: "";
    position: absolute;
    background-image: url(/src/assets/images/leaf.png);
    background-repeat: no-repeat;
    top: -30px;
    left: -69px;
    background-size: contain;
    width: 65px;
    height: 70px;
}
</style>