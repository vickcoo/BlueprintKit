'use client';

import { ArrowUpRight, Bot, Globe, Layers } from 'lucide-react';

const roadmapItems = [
  {
    title: 'Template coverage expansion',
    description:
      'Add more official templates and keep existing ones aligned with framework updates.',
    status: 'Planned',
  },
  {
    title: 'Community contributions',
    description:
      'Simplify contribution workflows so the community can ship more templates.',
    status: 'Planned',
  },
  {
    title: 'Docs and onboarding',
    description:
      'Improve docs, examples, and migration guides for faster team adoption.',
    status: 'Planned',
  },
];

const focus = [
  {
    icon: Bot,
    label: 'Coverage',
    detail: 'More stacks, more scenarios, always free.',
  },
  {
    icon: Globe,
    label: 'Community',
    detail: 'More contributors, better defaults, shared ownership.',
  },
  {
    icon: Layers,
    label: 'Quality',
    detail: 'Strict templates with reliable tooling and docs.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Roadmap built for <span className="gradient-text">real teams</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What is coming next is designed to expand, not replace, the core
              scaffolding flow that already works today.
            </p>
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            planned
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {roadmapItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/70 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-background/60 p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              focus areas
            </div>
            <div className="mt-6 space-y-4">
              {focus.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-4"
                  >
                    <div className="rounded-xl bg-primary/15 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://github.com/vickcoo/BlueprintKit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Follow progress on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
