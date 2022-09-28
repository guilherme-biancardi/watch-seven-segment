<template>
  <section>
    <NumberComponent
      v-for="(number, index) in numbersComputed"
      :key="index"
      :number="number"
    ></NumberComponent>
  </section>
</template>

<script setup>
import { computed } from "vue";
import NumberComponent from "./NumberComponent.vue";

const props = defineProps({
  numbers: String,
});

const numbersComputed = computed(() => props.numbers?.split(''))

</script>

<style scoped>
section {
  display: flex;
  column-gap: 14px;
}
</style>
