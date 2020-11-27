<template>
  <h1>Vue 3 with TypeScript Test</h1>
  <div>
    <button @click="onClick">Add</button>
    <p>Current Value: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  props: {
    originalCount: {
      type: Number,
      required: true,
    },
  },
  emits: ['clicked'],
  setup(props, context) {
    const count = ref(props.originalCount)

    function onClick() {
      count.value += 1
      context.emit('clicked', count.value)
    }

    return {
      count,
      onClick,
    }
  },
})
</script>
