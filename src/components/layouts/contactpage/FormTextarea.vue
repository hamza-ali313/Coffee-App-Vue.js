<template>
    <div class="form-group mb-3">
        <label class="form-label fw-bold small">{{ label }}<span v-if="required" class="text-orange ms-1">*</span></label>
        <div class="input-wrapper">
            <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder"
                class="form-control custom-textarea" rows="5"></textarea>
            <i class="bi bi-pencil input-icon"></i>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String,
    placeholder: String,
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
        align-items: flex-start;

        .custom-textarea {
            width: 100%;
            background-color: #fbfbfb;
            border: 1px solid transparent;
            border-radius: 12px;
            padding: 16px 20px;
            padding-right: 50px;
            font-size: 0.95rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
            resize: none;

            &::placeholder {
                color: #b2b2b2;
                font-weight: 500;
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
            top: 20px;
            color: #d17842;
            font-size: 1.1rem;
            pointer-events: none;
            opacity: 0.5;
        }
    }
}
</style>