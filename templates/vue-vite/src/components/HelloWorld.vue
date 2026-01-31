<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is a reusable component. You can use it anywhere in your app by importing it.
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped>
.hello {
  padding: 1rem;
}

h1 {
  font-weight: 500;
  font-size: 2rem;
  color: #42b983;
}
</style>
