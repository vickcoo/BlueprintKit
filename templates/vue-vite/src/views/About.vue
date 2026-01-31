<template>
  <div class="about">
    <h1>About This Template</h1>
    <p>
      This is a production-ready Vue 3 template with TypeScript, Vite, and modern development tools.
    </p>

    <section class="tech-stack">
      <h2>Technology Stack</h2>
      <div class="tech-grid">
        <div class="tech-item">
          <h3>Vue 3</h3>
          <p>Progressive JavaScript framework with Composition API</p>
        </div>
        <div class="tech-item">
          <h3>Vite</h3>
          <p>Next-generation frontend tooling for fast development</p>
        </div>
        <div class="tech-item">
          <h3>TypeScript</h3>
          <p>Typed superset of JavaScript for better DX</p>
        </div>
        <div class="tech-item">
          <h3>Vue Router</h3>
          <p>Official router for Vue.js applications</p>
        </div>
        <div class="tech-item">
          <h3>Pinia</h3>
          <p>Intuitive state management for Vue</p>
        </div>
        <div class="tech-item">
          <h3>ESLint</h3>
          <p>Code quality and consistency tool</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// About page logic
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.tech-stack {
  margin-top: 2rem;
}

.tech-stack h2 {
  color: #42b983;
  margin-bottom: 1.5rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.tech-item {
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.2s;
}

.tech-item:hover {
  transform: translateY(-4px);
}

.tech-item h3 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

.tech-item p {
  color: #666;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .tech-item {
    background: #333;
  }

  .tech-item p {
    color: #ccc;
  }
}
</style>
