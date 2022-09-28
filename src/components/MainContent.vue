<template>
  <h1>{{ time }}</h1>
  <WatchComponent :time="state.moment"></WatchComponent>
</template>

<script setup>
import { useApp } from "@/js/app";
import { reactive, onBeforeMount, computed } from "vue";
import WatchComponent from "./WatchComponent.vue";

const { moment } = useApp();

const state = reactive({
  moment: {},
});

const setTime = () => (state.moment = moment().locale("pt-br"));

onBeforeMount(setTime);
setInterval(setTime, 1000);

const time = computed(() => {
  const [date, weekday] = [
    state.moment.format("LL"),
    state.moment.format("dddd"),
  ];

  return `${date}, ${weekday}`;
});
</script>

<style scoped>
h1 {
  color: var(--selected);
  font-weight: 500;
  font-size: 1.8em;
}
</style>
