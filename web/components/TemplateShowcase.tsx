'use client';

import { ExternalLink } from 'lucide-react';

const templates = [
  {
    name: 'Next.js + Tailwind',
    description: 'Full-stack React framework with App Router and Tailwind CSS',
    stack: [
      'Next.js 15',
      'React 19',
      'Tailwind CSS',
      'TypeScript',
      'ESLint',
    ],
    codePreview: `app/
├── layout.tsx
├── page.tsx
└── globals.css
components/
├── ui/
└── ...
lib/
├── utils.ts
└── ...`,
  },
  {
    name: 'Express + TypeScript',
    description: 'Production-ready Node.js REST API with TypeScript',
    stack: ['Express', 'TypeScript', 'Prisma', 'Jest', 'Docker'],
    codePreview: `src/
├── routes/
├── controllers/
├── middleware/
├── models/
└── server.ts
prisma/
└── schema.prisma`,
  },
  {
    name: 'React Native + Expo',
    description: 'Cross-platform mobile app with Expo Router',
    stack: ['Expo', 'React Native', 'TypeScript', 'Expo Router', 'NativeWind'],
    codePreview: `app/
├── (tabs)/
├── _layout.tsx
└── index.tsx
components/
├── ui/
└── ...
constants/`,
  },
];

export default function TemplateShowcase() {
  return (
    <section id="templates" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Template <span className="gradient-text">Showcase</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Battle-tested templates with modern tech stacks and best practices
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
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
                <div className="rounded-lg bg-background/50 p-4 font-mono text-xs">
                  <pre className="text-muted-foreground">
                    {template.codePreview}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/devkit-templates"
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
