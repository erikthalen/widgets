<script setup>
const data = {
  pageModules: [
    {
      component: resolveComponent('hero'),
      data: {
        id: 1,
        title: 'Hello world!',
        image: 'ss.jpg',
        widget: {
          type: 'default',
          id: 1,
          rank: 1,
          title: 'Hello World!',
          body: 'This is the first widget',
        },
      },
    },
    {
      component: resolveComponent('hero'),
      data: {
        id: 2,
        title: 'Hello again later in the page!',
        image: '/phone.png',
        widget: {
          type: 'default',
          id: 2,
          rank: 3,
          title: 'iPhones, wow',
          body: 'They got widgets',
        },
      },
    },
    {
      component: resolveComponent('hero'),
      data: {
        id: 3,
        title: 'Shopping section',
        image: '/stine.jpg',
        widget: {
          type: 'buy-button',
          id: 3,
          rank: 2,
          title: 'Add to cart',
        },
      },
    },
    {
      component: resolveComponent('hero'),
      data: {
        id: 4,
        title: 'A gradient that clears all widgets',
        image: '/grad.webp',
        widget: {
          type: 'image',
          id: 4,
          rank: -1,
          image: '/grad.webp',
        },
      },
    },
    {
      component: resolveComponent('hero'),
      data: {
        id: 5,
        title: 'When theres to many, they get removed',
        image: '/cramped.jpg',
        widget: {
          type: 'default',
          id: 5,
          rank: 10,
          title: 'I am the 5th widget',
          body: 'Maximum is 4',
        },
      },
    },
  ],
}
</script>

<template>
  <div>
    <!-- <div :style="{ position: 'fixed', margin: '1em' }">
      <span v-for="widget in widgets" :key="widget.id"> {{ widget.id }}, </span>
    </div> -->

    <div
      v-for="({ component, data }, idx) in data.pageModules"
      :key="idx"
      :class="'page-module'"
    >
      <component :is="component" v-bind="data" />
    </div>

    <widgets-bar />
  </div>
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  font-size: 1em;
  box-sizing: border-box;
}
</style>
