<script setup>
const props = defineProps({
  id: Number,
})

const color = useColor(props.id)
</script>

<template>
  <div class="dot" :style="{ background: color }"></div>
</template>

<style>
.dot {
  display: inline-block;
  height: 1em;
  width: 1em;
  border-radius: 100px;
}
</style>
