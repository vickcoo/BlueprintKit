import path from 'path';
import { Template } from '../types';

/**
 * Built-in templates registry
 */
export const BUILT_IN_TEMPLATES: Template[] = [
  // Fullstack
  {
    name: 'nextjs-tailwind',
    description: 'Next.js 15 with App Router, TypeScript, Tailwind CSS, and Shadcn UI',
    localPath: path.join(__dirname, '../../..', 'templates', 'nextjs-tailwind'),
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'ESLint', 'Prettier'],
    category: 'fullstack',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'vue-vite',
    description: 'Vue 3 with Vite, TypeScript, Vue Router, and Pinia',
    localPath: path.join(__dirname, '../../..', 'templates', 'vue-vite'),
    techStack: ['Vue 3', 'Vite', 'TypeScript', 'Vue Router', 'Pinia', 'ESLint'],
    category: 'fullstack',
    author: 'DevKit',
    version: '1.0.0'
  },

  // Backend
  {
    name: 'express-typescript',
    description: 'Express REST API with TypeScript, structured for production',
    localPath: path.join(__dirname, '../../..', 'templates', 'express-typescript'),
    techStack: ['Express', 'TypeScript', 'Jest', 'ESLint', 'Prettier'],
    category: 'backend',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'nestjs-api',
    description: 'NestJS REST API with Prisma, JWT auth, and Swagger docs',
    localPath: path.join(__dirname, '../../..', 'templates', 'nestjs-api'),
    techStack: ['NestJS', 'TypeScript', 'Prisma', 'JWT', 'Swagger', 'Jest'],
    category: 'backend',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'fastapi-python',
    description: 'FastAPI REST API with SQLAlchemy, Pydantic, and auto-generated docs',
    localPath: path.join(__dirname, '../../..', 'templates', 'fastapi-python'),
    techStack: ['FastAPI', 'Python', 'SQLAlchemy', 'Pydantic', 'Alembic', 'Uvicorn'],
    category: 'backend',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'flask-api',
    description: 'Lightweight Python REST API with Flask and CORS',
    localPath: path.join(__dirname, '../../..', 'templates', 'flask-api'),
    techStack: ['Flask', 'Python', 'Flask-CORS', 'Gunicorn'],
    category: 'backend',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'django-rest',
    description: 'Enterprise Python REST API with Django REST Framework',
    localPath: path.join(__dirname, '../../..', 'templates', 'django-rest'),
    techStack: ['Django 5', 'DRF', 'Python', 'ORM', 'Admin Panel'],
    category: 'backend',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'golang-fiber',
    description: 'Blazing fast REST API with Go and Fiber framework',
    localPath: path.join(__dirname, '../../..', 'templates', 'golang-fiber'),
    techStack: ['Go 1.23', 'Fiber', 'CORS', 'JSON'],
    category: 'backend',
    author: 'DevKit',
    version: '1.0.0'
  },

  // Mobile
  {
    name: 'react-native-expo',
    description: 'React Native with Expo, TypeScript, and Navigation',
    localPath: path.join(__dirname, '../../..', 'templates', 'react-native-expo'),
    techStack: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'Theme System'],
    category: 'mobile',
    author: 'DevKit',
    version: '1.0.0'
  },

  // Browser/Automation
  {
    name: 'chrome-extension',
    description: 'Chrome Extension with Manifest V3, TypeScript, and Webpack',
    localPath: path.join(__dirname, '../../..', 'templates', 'chrome-extension'),
    techStack: ['Chrome Extension', 'TypeScript', 'Webpack', 'Manifest V3'],
    category: 'browser',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'discord-bot',
    description: 'Discord bot with Discord.js v14, slash commands, and TypeScript',
    localPath: path.join(__dirname, '../../..', 'templates', 'discord-bot'),
    techStack: ['Discord.js v14', 'TypeScript', 'Slash Commands', 'Node.js'],
    category: 'bot',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'telegram-bot',
    description: 'Telegram bot with node-telegram-bot-api and TypeScript',
    localPath: path.join(__dirname, '../../..', 'templates', 'telegram-bot'),
    techStack: ['node-telegram-bot-api', 'TypeScript', 'Node.js'],
    category: 'bot',
    author: 'DevKit',
    version: '1.0.0'
  },

  // Static Sites / Blogs
  {
    name: 'astro-blog',
    description: 'Lightning-fast blog with Astro, Markdown, and Tailwind CSS',
    localPath: path.join(__dirname, '../../..', 'templates', 'astro-blog'),
    techStack: ['Astro', 'Markdown', 'MDX', 'Tailwind CSS', 'RSS'],
    category: 'frontend',
    author: 'DevKit',
    version: '1.0.0'
  },
  {
    name: 'sveltekit-app',
    description: 'SvelteKit fullstack app with TypeScript and Tailwind CSS',
    localPath: path.join(__dirname, '../../..', 'templates', 'sveltekit-app'),
    techStack: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'fullstack',
    author: 'DevKit',
    version: '1.0.0'
  },

  // Desktop
  {
    name: 'electron-app',
    description: 'Cross-platform desktop app with Electron, React, and TypeScript',
    localPath: path.join(__dirname, '../../..', 'templates', 'electron-app'),
    techStack: ['Electron', 'React', 'TypeScript', 'Electron Builder'],
    category: 'frontend',
    author: 'DevKit',
    version: '1.0.0'
  }
];

/**
 * Get template by name
 */
export function getTemplateByName(name: string): Template | undefined {
  return BUILT_IN_TEMPLATES.find(t => t.name === name);
}

/**
 * Filter templates by category
 */
export function filterTemplatesByCategory(category?: string): Template[] {
  if (!category) return BUILT_IN_TEMPLATES;
  return BUILT_IN_TEMPLATES.filter(t => t.category === category);
}

/**
 * Search templates by keyword
 */
export function searchTemplates(query: string): Template[] {
  const lowerQuery = query.toLowerCase();
  return BUILT_IN_TEMPLATES.filter(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.techStack.some(tech => tech.toLowerCase().includes(lowerQuery))
  );
}
