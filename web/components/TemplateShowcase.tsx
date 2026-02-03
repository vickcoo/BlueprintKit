'use client';

import { ExternalLink } from 'lucide-react';

const templates = [
  {
    name: 'Next.js + Tailwind',
    description: 'App Router, strict TypeScript, and Tailwind defaults.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'ESLint'],
    link: 'https://github.com/vickcoo/BlueprintKit/tree/main/templates/nextjs-tailwind',
    codePreview: `app/
├── layout.tsx
├── page.tsx
└── globals.css
components/
└── ...
lib/`,
  },
  {
    name: 'NestJS API',
    description: 'Opinionated backend with modules, pipes, and guards.',
    stack: ['NestJS', 'TypeScript', 'Prisma', 'Jest'],
    link: 'https://github.com/vickcoo/BlueprintKit/tree/main/templates/nestjs-api',
    codePreview: `src/
├── modules/
├── common/
└── main.ts
prisma/
└── schema.prisma`,
  },
  {
    name: 'Expo React Native',
    description: 'Cross-platform mobile app with Expo Router.',
    stack: ['Expo', 'React Native', 'TypeScript', 'NativeWind'],
    link: 'https://github.com/vickcoo/BlueprintKit/tree/main/templates/react-native-expo',
    codePreview: `app/
├── (tabs)/
├── _layout.tsx
└── index.tsx
components/`,
  },
  {
    name: 'FastAPI',
    description: 'Fast Python API with modern tooling and structure.',
    stack: ['FastAPI', 'Python', 'Pydantic', 'Uvicorn'],
    link: 'https://github.com/vickcoo/BlueprintKit/tree/main/templates/fastapi-python',
    codePreview: `app/
├── api/
├── core/
└── main.py
tests/`,
  },
  {
    name: 'Vue + Vite',
    description: 'Lightweight Vue 3 starter with Vite.',
    stack: ['Vue 3', 'Vite', 'TypeScript', 'Pinia'],
    link: 'https://github.com/vickcoo/BlueprintKit/tree/main/templates/vue-vite',
    codePreview: `src/
├── components/
├── views/
└── main.ts`,
  },
  {
    name: 'SvelteKit',
    description: 'Fast SvelteKit starter for full-stack apps.',
    stack: ['SvelteKit', 'TypeScript', 'Vite'],
    link: 'https://github.com/vickcoo/BlueprintKit/tree/main/templates/sveltekit-app',
    codePreview: `src/
├── routes/
├── lib/
└── app.html`,
  },
];

export default function TemplateShowcase() {
  return (
    <section id="templates" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Templates that feel <span className="gradient-text">production-ready</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Curated for speed and consistency across the stacks teams use most.
            </p>
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            curated library
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {templates.map((template, index) => (
            <a
              key={index}
              href={template.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              {/* Header */}
              <div className="border-b border-border bg-muted/50 p-6">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="border-b border-border p-6">
                <div className="flex flex-wrap gap-2">
                  {template.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code preview */}
              <div className="p-6">
                <div className="rounded-lg border border-border bg-background/60 p-4 font-mono text-xs">
                  <pre className="text-muted-foreground">
                    {template.codePreview}
                  </pre>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/vickcoo/BlueprintKit/tree/main/templates"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            View all templates on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
