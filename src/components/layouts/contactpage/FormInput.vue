<template>
    <label>{{ label }}<span v-if="required">*</span></label>
    <div class="input-box">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder" />
        <i :class="['bi', icon]"></i>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String,
    placeholder: String,
    icon: String,
    required: Boolean
})
</script>

<style scoped lang="scss">
/* FOCUS STYLE */
input:focus {
    border-color: #a7b46c;
    background: #fff;
}
</style>