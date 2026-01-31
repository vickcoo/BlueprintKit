# __PROJECT_NAME__ - Astro Blog

Lightning-fast blog with Astro, Markdown, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## ✨ Features

- ✅ Astro 5 (blazing fast)
- ✅ Markdown/MDX support
- ✅ Tailwind CSS + Typography
- ✅ RSS feed
- ✅ Sitemap
- ✅ SEO optimized
- ✅ Dark mode ready

## 📁 Structure

```
src/
├── pages/
│   ├── index.astro          # Homepage
│   ├── blog/
│   │   ├── index.astro      # Blog listing
│   │   └── [...slug].astro  # Blog post
│   └── rss.xml.ts           # RSS feed
├── content/
│   └── blog/                # Markdown posts
├── layouts/
│   └── BlogPost.astro       # Post layout
└── components/
```

## ✍️ Writing Posts

Create `.md` or `.mdx` files in `src/content/blog/`:

```markdown
---
title: 'My First Post'
description: 'This is my first blog post'
pubDate: 'Jan 01 2026'
---

# Hello World

This is my first post!
```

## 🚀 Deploy

- **Vercel**: Connect GitHub → Deploy
- **Netlify**: Drag & drop `dist/` folder
- **Cloudflare Pages**: `npm run build` → deploy `dist/`

Build command: `npm run build`
Output: `dist/`
