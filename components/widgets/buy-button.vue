<script setup>
const props = defineProps({
  widget: Object,
})

const color = useColor(props.widget.id)
</script>

<template>
  <button :style="{ background: color }" class="buy-button">
    {{ widget.title }}
  </button>
</template>

<style>
.buy-button {
  border: 0;
  height: 3em;
  border-radius: 0.5em;

  cursor: pointer;
}
</style>
