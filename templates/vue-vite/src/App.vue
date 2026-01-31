<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/counter">Counter</router-link>
    </nav>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// App-level logic can go here
</script>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 2px solid #e0e0e0;
}

.nav a {
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav a:hover {
  background: #e0e0e0;
}

.nav a.router-link-active {
  background: #42b983;
  color: white;
}

.main {
  padding: 2rem;
}
</style>
