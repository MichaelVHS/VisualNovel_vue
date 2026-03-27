<template>
  <button class="btn" :class="`btn--${props.variant}`">
    <slot>←</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: 'back' | 'choice'
}>()
</script>

<style scoped>
.btn {
  border-radius: 6px;
  cursor: pointer;
  background: var(--bg-color);
  border: 2px solid var(--button-border);
}

.btn:hover{
  border: 2px solid var(--button-border-hover);
}

.btn--back {
  position: absolute;
  inset: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn--choice {
  width: 100%;
  padding: 12px 16px;
  font-size: 36px;
  text-align: left;
}
</style>