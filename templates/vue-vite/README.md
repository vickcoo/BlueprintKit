# {{PROJECT_NAME}}

A modern Vue 3 application built with Vite, TypeScript, Vue Router, and Pinia state management.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vite** - Next-generation frontend build tool for lightning-fast HMR
- **TypeScript** - Typed superset of JavaScript for better developer experience
- **Vue Router** - Official routing library for Vue.js
- **Pinia** - Intuitive, type-safe state management for Vue
- **ESLint** - Code quality and consistency
- **Prettier** - Opinionated code formatter

## Features

- Modern Vue 3 Composition API
- Type-safe development with TypeScript
- Fast development with Vite HMR
- Client-side routing with Vue Router
- State management with Pinia
- Composables for code reusability
- ESLint + Prettier for code quality
- Production-ready build configuration

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── composables/    # Composition API composables
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── views/          # Page components
├── App.vue         # Root component
├── main.ts         # Application entry point
└── style.css       # Global styles
```

## Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

### Linting

Lint and fix files:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE={{PROJECT_NAME}}
VITE_API_URL=http://localhost:3001
```

Access environment variables in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Usage Examples

### Creating a Composable

```typescript
// src/composables/useCounter.ts
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const increment = () => count.value++
  const decrement = () => count.value--
  return { count, increment, decrement }
}
```

### Using Pinia Store

```typescript
// In a component
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment } = store
```

### Adding Routes

```typescript
// src/router/index.ts
{
  path: '/new-page',
  name: 'new-page',
  component: () => import('../views/NewPage.vue')
}
```

## Development Guide

### Adding New Pages

1. Create a new component in `src/views/`
2. Add the route in `src/router/index.ts`
3. Add navigation link in `App.vue` if needed

### State Management

Use Pinia stores for global state. Create stores in `src/stores/`:

```typescript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('myStore', () => {
  const data = ref([])
  function fetchData() {
    // fetch logic
  }
  return { data, fetchData }
})
```

### TypeScript Tips

- Use `<script setup lang="ts">` for type-safe components
- Define props with `defineProps<{ msg: string }>()`
- Use TypeScript interfaces for complex data structures
- Enable strict mode in tsconfig.json

## Deployment

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`

### Vercel

```bash
vercel --prod
```

### Static Hosting

Upload the `dist` folder to any static hosting service after running `npm run build`.

## Best Practices

1. Use Composition API for better code organization
2. Create reusable composables for shared logic
3. Keep components small and focused
4. Use TypeScript for type safety
5. Follow Vue 3 style guide
6. Use Pinia for complex state management
7. Lazy load routes for better performance

## Learn More

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## License

MIT

---

Built with Vue 3 + Vite + TypeScript
