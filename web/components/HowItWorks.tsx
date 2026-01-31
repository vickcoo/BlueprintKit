'use client';

import { Terminal, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Terminal,
    title: 'Choose Your Template',
    description: 'Run npx @devkit/cli init and select from curated templates',
    code: 'npx @devkit/cli init',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Customize (Optional)',
    description:
      'Let AI customize your template with natural language or use as-is',
    code: '# Coming in Phase 2',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Coding',
    description: 'Everything is set up and ready. Focus on building features.',
    code: 'npm run dev',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            From zero to production-ready in 3 simple steps
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-20 hidden h-0.5 w-full bg-gradient-to-r from-primary to-transparent lg:block" />
                )}

                <div className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                  {/* Step number */}
                  <div className="mb-4 text-6xl font-bold text-primary/20">
                    {step.number}
                  </div>

                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mb-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Code snippet */}
                  <div className="rounded-lg bg-background/50 p-4 font-mono text-sm">
                    <code className="text-primary">{step.code}</code>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
