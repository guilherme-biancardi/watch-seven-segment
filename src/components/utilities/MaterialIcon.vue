<template>
  <i class="mdi" :class="icon" :style="`--size: ${size}px`"></i>
</template>

<script setup>
defineProps({
  icon: String,
  size: Number,
});
</script>

<style scoped>
@import url("@mdi/font/css/materialdesignicons.min.css");

i {
  --size: 16px;
}

i {
  font-size: var(--size);
}
</style>
