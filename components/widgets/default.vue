<script setup>
const props = defineProps({
  widget: Object,
})
</script>

<template>
  <div class="widget-default">
    <div class="title">
      <dot :id="widget.id" />
      <h2>{{ widget.title }}</h2>
    </div>
    <p>{{ widget.body }}</p>
  </div>
</template>

<style>
.widget-default .title {
  display: flex;
  gap: 0.5em;
}
</style>