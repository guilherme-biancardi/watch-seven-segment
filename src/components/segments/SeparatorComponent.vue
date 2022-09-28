<template>
  <ul>
    <li class="circle"></li>
    <li class="circle"></li>
  </ul>
</template>

<script setup></script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.circle{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: var(--selected);
}
</style>
