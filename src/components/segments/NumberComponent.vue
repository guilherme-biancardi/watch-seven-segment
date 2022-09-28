<template>
  <article class="content-number">
    <SegmentComponent
      :align="'horizontal'"
      :class="{ selected: state.segments[0] }"
    ></SegmentComponent>
    <div class="number-flex">
      <SegmentComponent
        :align="'vertical'"
        :class="{ selected: state.segments[1] }"
      ></SegmentComponent>
      <SegmentComponent
        :align="'vertical'"
        :class="{ selected: state.segments[2] }"
      ></SegmentComponent>
    </div>
    <SegmentComponent
      :align="'horizontal'"
      :class="{ selected: state.segments[3] }"
    ></SegmentComponent>
    <div class="number-flex">
      <SegmentComponent
        :align="'vertical'"
        :class="{ selected: state.segments[4] }"
      ></SegmentComponent>
      <SegmentComponent
        :align="'vertical'"
        :class="{ selected: state.segments[5] }"
      ></SegmentComponent>
    </div>
    <SegmentComponent
      :align="'horizontal'"
      :class="{ selected: state.segments[6] }"
    ></SegmentComponent>
  </article>
</template>

<script setup>
import { useApp } from "@/js/app";
import { computed, reactive, watch } from "vue";
import SegmentComponent from "./SegmentComponent.vue";

const { numberCodes } = useApp();

const state = reactive({
  segments: [false, false, false, false, false, false, false],
});

const props = defineProps({
  number: String,
});

const setSegment = (number) => {
  for (let index = 0; index < 7; index++) {
    state.segments[index] = false;
  }
  numberCodes[number].forEach((code) => (state.segments[code] = true));
};

setSegment(props.number);

watch(
  computed(() => props.number),
  (number) => setSegment(number)
);
</script>

<style scoped>
.content-number {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 76px;
  gap: 2px;
}

.number-flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
