<script setup>
const props = defineProps({
  id: Number,
  image: String,
  title: String,
  widget: Object,
})

const { add } = useWidgets()

const el = ref(null)

useIntersectionObserver(el, ([{ isIntersecting }]) => {
  if (isIntersecting) add(props.widget)
})
</script>

<template>
  <div class="hero" ref="el">
    <div class="inner">
      <img class="image" v-if="image" :src="image" />
      <div class="title">
        <dot :id="id" />
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  padding: 100px;
  height: 100vh;
}

.hero .inner {
  position: relative;
  background: hsla(0 0% 98%);
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
}

.hero .image {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.hero .title {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;

  padding: 1em 25px;
  margin: 25px;
  
  position: relative;
  z-index: 1;
  background: hsl(0 0% 100%);
  border-radius: 1em;
}
</style>
