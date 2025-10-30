<template>
  <div id="app">
    <Queue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Queue from './views/Queue.vue'

export default defineComponent({
  components: { Queue }
})
</script>