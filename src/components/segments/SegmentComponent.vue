<template>
  <div :class="align" class="segment"></div>
</template>

<script setup>
defineProps({
  align: String,
});
</script>

<style scoped>
.segment {
  --segment: var(--secondary);
  --width: 0;
  --height: 0;
  --hexagon-width: calc(var(--height) / 2);
  --teste: var(--secondary);
}

.horizontal {
  --width: 42px;
  --height: 15px;
  --hexagon-width: calc(var(--height) / 2);
}

.vertical {
  --width: 15px;
  --height: 45px;
  --hexagon-width: calc(var(--width) / 2);
}

.segment {
  width: var(--width);
  height: var(--height);
  background: var(--segment);
  position: relative;
  transition: all .1s ease;
}

.selected{
  background-color: var(--selected);
  --teste: var(--selected);
}

.segment::before,
.segment::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  transition: all .1s ease;
}

.horizontal::after,
.horizontal::before {
  border-top: var(--hexagon-width) solid transparent;
  border-bottom: var(--hexagon-width) solid transparent;
}

.horizontal::before {
  right: calc(var(--hexagon-width) * -1);
  border-left: var(--hexagon-width) solid var(--teste);
}

.horizontal::after {
  left: calc(var(--hexagon-width) * -1);
  border-right: var(--hexagon-width) solid var(--teste);
}

.vertical::after,
.vertical::before {
  border-left: var(--hexagon-width) solid transparent;
  border-right: var(--hexagon-width) solid transparent;
}

.vertical::after {
  top: calc(var(--hexagon-width) * -1);
  border-bottom: var(--hexagon-width) solid var(--teste);
}

.vertical::before {
  bottom: calc(var(--hexagon-width) * -1);
  border-top: var(--hexagon-width) solid var(--teste);
}
</style>
