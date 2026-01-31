<template>
  <div class="counter">
    <h1>Counter Demo</h1>
    <p>This demonstrates Pinia state management with the Composition API.</p>

    <div class="counter-display">
      <div class="count">{{ count }}</div>
      <div class="info">
        <span :class="{ even: isEven, odd: !isEven }">
          {{ isEven ? 'Even' : 'Odd' }}
        </span>
        <span>Double: {{ doubleCount }}</span>
      </div>
    </div>

    <div class="controls">
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
const { count, doubleCount, isEven } = storeToRefs(counterStore)
const { increment, decrement, reset } = counterStore
</script>

<style scoped>
.counter {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.counter-display {
  margin: 3rem 0;
}

.count {
  font-size: 6rem;
  font-weight: bold;
  color: #42b983;
  margin-bottom: 1rem;
}

.info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.even {
  color: #42b983;
  font-weight: bold;
}

.odd {
  color: #ff6b6b;
  font-weight: bold;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.controls button {
  min-width: 80px;
  font-size: 1.2rem;
}
</style>
