<template>
    <div class="form-group mb-3">
        <label class="form-label fw-bold small">{{ label }}<span v-if="required" class="text-orange ms-1">*</span></label>
        <div class="input-wrapper">
            <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
                class="form-control custom-select">
                <option value="" disabled>{{ placeholder }}</option>
                <option v-for="opt in options" :key="opt" :value="opt">
                    {{ opt }}
                </option>
            </select>
            <i class="bi bi-chevron-down input-icon"></i>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String,
    options: Array,
    placeholder: {
        type: String,
        default: 'Type Enquiry...'
    },
    required: {
        type: Boolean,
        default: true
    }
})
defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.form-group {
    label {
        font-size: 0.9rem;
        color: #333;
        margin-bottom: 8px;
        display: block;
    }

    .text-orange {
        color: #d17842;
    }

    .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .custom-select {
            width: 100%;
            background-color: #fbfbfb;
            border: 1px solid transparent;
            border-radius: 12px;
            padding: 16px 20px;
            font-size: 0.95rem;
            color: #333;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
            appearance: none;

            &:focus {
                background-color: #fff;
                border-color: #f1ede8;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                outline: none;
            }

            &:invalid,
            &[value=""] {
                color: #c4c4c4;
            }
        }

        .input-icon {
            position: absolute;
            right: 20px;
            color: #d17842;
            font-size: 1.1rem;
            pointer-events: none;
        }
    }
}
</style>