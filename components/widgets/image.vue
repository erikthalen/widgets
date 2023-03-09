<script setup>
const props = defineProps({
  widget: Object,
})
</script>

<template>
  <div class="widget-image">
    <img :src="widget.image" />
  </div>
</template>

<style>
.widget-image img {
  object-fit: cover;
  width: 100%;
  height: 5em;
  border-radius: 0.5em;
}
</style>
