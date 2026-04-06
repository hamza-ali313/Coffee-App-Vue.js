<template>
    <label>{{ label }}*</label>
    <div class="input-box">
        <textarea rows="5" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"></textarea>

        <i class="bi bi-pencil-fill"></i>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String,
    placeholder: String
})
</script>

<style scoped lang="scss"></style>