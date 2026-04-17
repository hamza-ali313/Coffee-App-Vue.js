<template>
  <div class="form-section">
    <div class="sec_heading">
      <h2>Collection Details</h2>
    </div>
    <p>Your Permanent address details</p>
    <label>Select Dee Location*</label>
    <div class="input-box">
      <select
        class="form-control mb-3"
        v-model="collection.location"
        @change="handleCollectionChange"
      >
        <option value="">Select Location</option>
        <option value="Dee Barnes - 153 Church Road">Dee Barnes - 153 Church Road</option>
      </select>
    </div>

    <label>Your Preferred Time*</label>
    <div class="time-date-field">
      <!-- TIME -->
      <div class="field time" @click="openTime">
        <!-- <i class="bi bi-clock"></i> -->
        <span>{{ formattedTime || "10:15 AM" }}</span>
        <input ref="timeInput" type="text" class="hidden-input" />
      </div>

      <!-- DATE -->
      <div class="field date" @click="openDate">
        <span>{{ formattedDate || "03-April" }}</span>
        <i class="bi bi-calendar3"></i>
        <input
          ref="dateInput"
          type="text"
          class="hidden-input"
          v-model="collection.date"
          @input="handleCollectionChange"
        />
      </div>
    </div>

    <label>Address*</label>
    <div class="input-box">
      <input
        class="form-control"
        placeholder="Address"
        v-model="collection.address"
        @input="handleCollectionChange"
      />
      <i class="bi bi-house-fill"></i>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { onMounted, ref, computed } from "vue";
import { useCheckoutStore } from "@/store/checkout.js";
import { formatTime12h, formatDateReadable } from "../../../utils/formatters.js";
const checkoutStore = useCheckoutStore();
const { collection } = storeToRefs(checkoutStore);

const handleCollectionChange = () => {
  checkoutStore.updateCollection({
    address: collection.value.address,
    time: collection.value.time,
    date: collection.value.date,
    location: collection.value.location,
  });
};

const timeInput = ref(null);
const dateInput = ref(null);

let timePicker;
let datePicker;

// format time
const formattedTime = computed(() => {
  return formatTime12h(collection.value.time);
});

// format date
const formattedDate = computed(() => {
  return formatDateReadable(collection.value.date);
});

onMounted(() => {
  timePicker = flatpickr(timeInput.value, {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    onChange: (_, dateStr) => {
      collection.value.time = dateStr; // "22:15"
      handleCollectionChange();
    },
  });

  datePicker = flatpickr(dateInput.value, {
    dateFormat: "Y-m-d",
    onChange: (_, dateStr) => {
      collection.value.date = dateStr;
    },
  });
});

const openTime = () => timePicker.open();
const openDate = () => datePicker.open();
</script>

<style lang="scss" scoped>
.hidden-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
}

.flatpickr-calendar {
  border-radius: 14px;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: inherit;
}

.flatpickr-day.selected {
  background: #8aa05a;
  border-color: #8aa05a;
}

.flatpickr-time input {
  font-weight: 500;
}

.time-date-field {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 13px;

  .field {
    position: relative;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }

    input {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
    }
  }

  .time {
    border-right: 1px solid #ddd;

    i {
      color: #888;
      font-size: 16px;
    }
  }

  .date {
    justify-content: space-between;
    position: absolute;
    width: 150px;
    top: 2px;
    right: 7px;
    background: #f8f8f8;
    height: 45px;
    align-items: baseline;
    margin: 0;
    border-radius: 6px;

    i {
      color: #888;
      font-size: 16px;
    }
  }
}
</style>
