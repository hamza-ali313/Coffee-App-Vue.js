<template>
    <div class="form-group">
        <label>{{ label }}*</label>

        <div class="input-box">
            <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
                <option value="">Type Enquiry...</option>
                <option v-for="opt in options" :key="opt">
                    {{ opt }}
                </option>
            </select>

            <i class="bi bi-chevron-down"></i>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String,
    options: Array
})
</script>

<style scoped lang="scss">
.input-box {
    position: relative;

    select {
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #ddd;
        background: #f8f8f8;
        appearance: none;
    }

    i {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>