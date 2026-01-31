'use client';

import { Layers, Sparkles, Store } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Curated Templates',
    description:
      'Production-ready templates for Next.js, Express, React Native, and more. Battle-tested configurations that just work.',
    available: true,
  },
  {
    icon: Sparkles,
    title: 'AI Customization',
    description:
      'Describe what you need in plain English and let AI customize your template. No more manual config editing.',
    available: false,
    badge: 'Coming Soon',
  },
  {
    icon: Store,
    title: 'Community Marketplace',
    description:
      'Share your templates and earn money. Browse thousands of specialized templates created by the community.',
    available: false,
    badge: 'Phase 2',
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Production-Ready Templates in{' '}
            <span className="gradient-text">One Command</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Everything you need to start building immediately, with best
            practices baked in.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                {!feature.available && (
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {feature.badge}
                    </span>
                  </div>
                )}

                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
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
