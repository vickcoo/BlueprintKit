# __PROJECT_NAME__ - SvelteKit App

Modern fullstack app with SvelteKit and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## ✨ Features

- ✅ SvelteKit 2 (fullstack framework)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ File-based routing
- ✅ API routes
- ✅ SSR/SSG support

## 📁 Structure

```
src/
├── routes/
│   ├── +page.svelte         # Homepage
│   ├── +layout.svelte       # Root layout
│   └── api/
│       └── +server.ts       # API endpoint
├── lib/
│   └── components/          # Reusable components
└── app.html                 # HTML template
```

## 🚀 Deploy

**Vercel**: `npm run build` → auto-deploy
**Netlify**: Connect repo → deploy
**Adapter**: Change in `svelte.config.js`
