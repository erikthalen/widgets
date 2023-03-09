<script setup>
const { widgets, remove } = useWidgets()

const components = {
  default: resolveComponent('widgets-default'),
  'buy-button': resolveComponent('widgets-buy-button'),
  image: resolveComponent('widgets-image'),
}
</script>

<template>
  <div class="widgets">
    <transition-group class="container" name="fade" tag="ul">
      <li class="widget" v-for="widget in widgets" :key="widget.id">
        <button class="remove" @click="remove(widget)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <g>
              <g>
                <line
                  x1="9.12"
                  y1="4.88"
                  x2="4.88"
                  y2="9.12"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="4.88"
                  y1="4.88"
                  x2="9.12"
                  y2="9.12"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
              </g>
              <circle
                cx="7"
                cy="7"
                r="6.5"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </g>
          </svg>
        </button>

        <component :is="components[widget.type]" :widget="widget" />
        <span class="rank">I got rank: {{ widget.rank }}</span>
      </li>
    </transition-group>
  </div>
</template>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.fade-leave-active {
  position: absolute !important;
}

.widgets {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;

  width: 350px;
}

.container {
  position: relative;
  margin: 20px;
}

.widget {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  gap: 10px;
  border-radius: 10px;
  background: hsla(0 0% 95%);
}

.widget + .widget {
  margin-top: 20px;
}

.widget .remove {
  background: none;
  border: none;

  position: absolute;
  width: 1em;
  height: 1em;

  top: 0.5em;
  right: 0.5em;

  opacity: 0.3;
  cursor: pointer;
}

svg {
  height: 100%;
  width: 100%;
}

.rank {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.66em;
}
</style>
