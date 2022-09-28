<template>
  <button @click="emit('click')" :type="type || 'button'">
    <MaterialIcon :icon="icon?.icon" :size="icon?.size"></MaterialIcon>
  </button>
</template>

<script setup>
import MaterialIcon from "./utilities/MaterialIcon.vue";

const emit = defineEmits(["click"]);

defineProps({
  icon: Object,
  type: String,
});
</script>

<style scoped>
button {
  outline: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: var(--secondary);
  color: var(--selected);
  padding: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

button:hover {
  background-color: var(--selected);
  color: var(--primary);
}
</style>
