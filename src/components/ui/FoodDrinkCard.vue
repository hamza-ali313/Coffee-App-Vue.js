<template>
    <div class="food-card">

        <!-- Image -->
        <div class="img-box">
            <img :src="image" />
        </div>

        <!-- Content -->
        <div class="content">

            <h5>{{ title }}</h5>
            <p class="desc">{{ desc }}</p>

            <div class="options">OPTIONS</div>

            <div class="menu-list">
                <div class="menu-item" v-for="(item, index) in items" :key="index">
                    <div class="left">
                        <p class="name">{{ item.name }}</p>
                        <span class="detail">{{ item.detail }}</span>
                    </div>

                    <div class="price">
                        £{{ item.price }}
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
defineProps({
    title: String,
    desc: String,
    image: String,
    items: Array
})
</script>