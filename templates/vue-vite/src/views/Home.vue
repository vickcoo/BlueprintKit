<template>
  <div class="home">
    <h1>Welcome to {{PROJECT_NAME}}</h1>
    <p class="description">
      This is a Vue 3 + Vite + TypeScript starter template with Vue Router and Pinia.
    </p>

    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Vue 3 Composition API</li>
        <li>TypeScript Support</li>
        <li>Vite for Fast Development</li>
        <li>Vue Router for Navigation</li>
        <li>Pinia for State Management</li>
        <li>ESLint + Prettier</li>
        <li>Hot Module Replacement</li>
      </ul>
    </div>

    <div class="cta">
      <router-link to="/counter">
        <button>Try Counter Demo</button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home page logic
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.features {
  margin: 2rem 0;
}

.features h2 {
  color: #42b983;
  margin-bottom: 1rem;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #42b983;
  font-weight: bold;
}

.cta {
  margin-top: 2rem;
}

.cta a {
  text-decoration: none;
}
</style>
