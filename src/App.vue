<template>
  <main
    :style="`--primary: ${colors.primary}; 
    --secondary: ${colors.secondary}; 
    --selected: ${colors.selected};`"
  >
    <MainContent></MainContent>
    <ButtonComponent
      :icon="{ icon: 'mdi-cog', size: 27 }"
      @click="state.configurationVisibility = true"
    ></ButtonComponent>

    <transition name="fade">
      <ConfigurationModal
        v-if="state.configurationVisibility"
        @closeModal="state.configurationVisibility = false"
      ></ConfigurationModal>
    </transition>
  </main>
</template>

<script setup>
import { computed, reactive } from "vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import ConfigurationModal from "./components/modals/ConfigurationModal.vue";
import { useColorState } from "./store/color.js";
import MainContent from "./components/MainContent.vue";

const colorState = useColorState();

const state = reactive({
  configurationVisibility: false,
  colors: {},
});

const colors = computed(() => colorState.getColors);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --primary: "";
  --secondary: "";
  --selected: "";
}

main {
  width: 100%;
  height: 100vh;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 24px;
}

input {
  outline: none;
  border: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
