<template>
    <h5 class="section-title">Nutrition Facts</h5>

    <div class="d-flex mt-3  text-center nutri-f">
        <div v-for="n in items" :key="n.label" class="nutri">
            <strong>{{ n.value }}</strong>
            <p>{{ n.label }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({ items: Array })
</script>

<style>
.section-title {
    font-weight: 600;
    margin-bottom: 10px;
}

.nutri strong {
    font-weight: bolder;
    color: #d08a44;
    font-size: 19px;
    font-family: 'TitilliumWeb-Regular';
}

.nutri-f {
    gap: 92px;
}

.nutri {
    position: relative;
}

.nutri:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 40px;
    background: #ccc;
    right: -50px;
    position: absolute;
    top: 0;
}
</style>