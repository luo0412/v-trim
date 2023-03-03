
<template>
  <a-space direction="vertical" size="large">
    <a-input :style="{ width: '320px' }" v-trim v-model="val" allow-clear />
    <a-input
      :modelValue="val"
      @input="(value) => (val = value)"
      @blur="val = ($event.target.value || '').trim()"
    />

    <input :style="{ width: '320px' }" v-model.trim="val" allow-clear />
  </a-space>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const val = ref("");

    return {
      val,
    };
  },
};
</script>
