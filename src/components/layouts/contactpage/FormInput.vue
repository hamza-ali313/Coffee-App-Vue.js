<template>
    <div class="form-group mb-3">
        <label class="form-label fw-bold small">{{ label }}<span v-if="required" class="text-orange ms-1">*</span></label>
        <div class="input-wrapper">
            <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder"
                class="form-control custom-input" />
            <i :class="['bi', icon, 'input-icon']"></i>
        </div>
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

        .custom-input {
            width: 100%;
            background-color: #fbfbfb;
            border: 1px solid transparent;
            border-radius: 12px;
            padding: 16px 20px;
            padding-right: 50px;
            font-size: 0.95rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;

            &::placeholder {
                color: #c4c4c4;
            }

            &:focus {
                background-color: #fff;
                border-color: #f1ede8;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                outline: none;
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