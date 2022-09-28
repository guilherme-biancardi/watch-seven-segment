<template>
  <ModalComponent
    :width="400"
    :visibility="visibility"
    @close="emit('closeModal')"
  >
    <div class="content-form">
      <div class="title-form">
        <h2>Cores do Site</h2>
        <hr />
      </div>
      <form @submit.prevent="saveColors">
        <div v-for="(input, index) in state.inputs" :key="index">
          <label :for="input.name">{{ input.label }}</label>
          <input
            type="color"
            class="change-color"
            @change="state.buttonsVisibility = true"
            v-model="input.value"
            :name="input.name"
          />
        </div>
        <hr />
        <div>
          <label>Resetar cores do site?</label>
          <ButtonComponent
            :icon="{ icon: 'mdi-restore', size: 20 }"
            @click="reset"
          ></ButtonComponent>
        </div>
        <div class="buttons" v-if="state.buttonsVisibility">
          <ButtonComponent
            v-for="(button, index) in state.buttons"
            :key="index"
            @click="button.click"
            :icon="button.icon"
            :type="button.type"
          ></ButtonComponent>
        </div>
      </form>
    </div>
  </ModalComponent>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import ModalComponent from "../utilities/ModalComponent.vue";
import ButtonComponent from "../ButtonComponent.vue";
import { useColorState } from "@/store/color";

const colorState = useColorState();
const emit = defineEmits(["closeModal"]);

defineProps({
  visibility: Boolean,
});

const initColors = () =>
  Object.values(colorState.getColors).forEach(
    (color, index) => (state.inputs[index].value = color)
  );

const saveColors = () => {
  const [primary, secondary, selected] = state.inputs;

  colorState.setColors(primary.value, secondary.value, selected.value);
  emit("closeModal");
};

const reset = () => {
  colorState.resetColors();
  initColors();
};

const state = reactive({
  inputs: [
    {
      label: "Escolher cor principal:",
      name: "primary-color",
      value: "",
    },
    {
      label: "Escolher cor secundária:",
      name: "secondary-color",
      value: "",
    },
    {
      label: "Escolher cor das fontes:",
      name: "text-color",
      value: "",
    },
  ],
  buttons: [
    {
      click: initColors,
      icon: { icon: "mdi-delete", size: 24 },
    },
    {
      type: "submit",
      icon: { icon: "mdi-content-save", size: 24 },
    },
  ],
  buttonsVisibility: false,
});

onMounted(initColors);
</script>

<style scoped>
.content-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}

.title-form h2 {
  font-size: 1.5em;
  color: var(--primary);
  font-weight: 400;
}

hr {
  height: 3px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 12px;
}

form,
.title-form,
form > div:not(.buttons) {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

form{
  row-gap: 16px;
}

form > label {
  color: #555;
  font-size: 1em;
}

.change-color {
  all: unset;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
}

.change-color::-webkit-color-swatch {
  height: 40px;
  border: 2px solid var(--primary);
  border-radius: 12px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
}
</style>
