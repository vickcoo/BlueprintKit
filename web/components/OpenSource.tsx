'use client';

import { GitBranch, ShieldCheck, Zap } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Open-source by default',
    description:
      'MIT licensed with transparent templates and scripts you can trust.',
  },
  {
    icon: Zap,
    title: 'Production checks baked in',
    description:
      'Linting, formatting, and build scripts are ready on day one.',
  },
  {
    icon: GitBranch,
    title: 'Opinionated, but flexible',
    description:
      'Start from a strong baseline, then adjust for your team standards.',
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-border bg-card/70 p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                open source
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                BlueprintKit keeps your stack transparent and adaptable.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every template is readable, documented, and ready to evolve with
                your product. No vendor lock-in—just clean foundations.
              </p>
            </div>
            <div className="space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-background/70 p-5"
                  >
                    <div className="rounded-xl bg-primary/15 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-base font-semibold">{item.title}</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
