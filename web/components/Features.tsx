'use client';

import { Boxes, CheckCircle2, Gauge, Layers } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Curated stacks, ready now',
    description:
      '15+ templates maintained for production with strict TypeScript, linting, and best practices.',
  },
  {
    icon: CheckCircle2,
    title: 'No broken defaults',
    description:
      'Every template ships with working scripts, sensible configs, and predictable structure.',
  },
  {
    icon: Gauge,
    title: 'Faster onboarding',
    description:
      'Consistent project layouts mean teams can move between stacks without relearning.',
  },
  {
    icon: Boxes,
    title: 'Modern by default',
    description:
      'Next.js, NestJS, Expo, FastAPI, Electron, and more—all aligned with current best practices.',
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Built for teams who <span className="gradient-text">ship fast</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              BlueprintKit keeps the tooling consistent so every project starts
              clean, modern, and ready to scale.
            </p>
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            what you get today
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/15 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
