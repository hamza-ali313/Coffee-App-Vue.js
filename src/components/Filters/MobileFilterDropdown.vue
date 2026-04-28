<template>
  <div class="filter-wrapper dropdown">
    <button
      class="filter-btn d-flex align-items-center justify-content-between w-100"
      data-bs-toggle="dropdown"
    >
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-funnel-fill" style="color: #919b4c"></i>
        <p>{{ selectedLabel }}</p>
      </div>

      <i class="bi bi-caret-down-fill" style="color: #d08a44"></i>
    </button>

    <ul class="dropdown-menu w-100">
      <li v-for="(option, i) in options" :key="i">
        <button class="dropdown-item" @click="selectOption(option)">
          <p>
            {{ option }}
          </p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selected = ref(props.modelValue || props.options[0]);

const selectedLabel = computed(() => (selected.value ? selected.value : "Select"));

function selectOption(option) {
  selected.value = option;
  emit("update:modelValue", option);
}
</script>

<style lang="scss">
.filter-wrapper {
  width: 250px;
  margin: 0 0 20px 0;

  .filter-btn {
    background-image: url("../../assets/images/filterbgmobile.png");
    @include bg_no_repeat_contain_center;
    border: none;
    border-radius: 40px;
    padding: 12px 18px;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    p {
      margin: unset;
    }
    i {
      font-size: 14px;
    }
  }

  .dropdown-menu {
    border-radius: 12px;
    padding: 8px;

    .dropdown-item {
      border-radius: 8px;
    }
  }
}
</style>
