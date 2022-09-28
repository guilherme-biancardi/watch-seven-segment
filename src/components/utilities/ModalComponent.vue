<template>
    <div class="modal-backdrop">
      <div class="modal" :style="`--width: ${width}px;`">
        <ButtonComponent
          :icon="{ icon: 'mdi-close', size: 26 }"
          @click="emit('close')"
          class="btn-close"
        ></ButtonComponent>
        <div class="content-modal">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script setup>
import ButtonComponent from "../ButtonComponent.vue";

const emit = defineEmits(["close"]);

defineProps({
  width: Number,
});
</script>

<style scoped>
.modal-backdrop {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.327);
}

.modal {
  position: relative;
  width: var(--width);
  height: max-content;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.153);
  padding: 20px;
  border-radius: 12px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}

.content-modal{
  height: calc(100% - 32px);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
</style>
