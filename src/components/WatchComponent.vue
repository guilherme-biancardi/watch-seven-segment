<template>
  <section class="content">
    <div v-for="(time, index) in timeSplit" :key="index">
      <TimeNumbers :numbers="time"></TimeNumbers>
      <SeparatorComponent
        v-if="index !== timeSplit.length - 1"
      ></SeparatorComponent>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import TimeNumbers from "./segments/TimeNumbers.vue";
import SeparatorComponent from "./segments/SeparatorComponent.vue";

const props = defineProps({
  time: Object,
});

const timeSplit = computed(() => props.time.format("HH:mm:ss").split(":"));
</script>

<style scoped>
.content {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px 32px;
  border-radius: 20px;
  box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.1);
}

.content > div,
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
}
</style>
