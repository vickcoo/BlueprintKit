'use client';

import { Rocket, Terminal, Wand2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Terminal,
    title: 'Run the CLI',
    description: 'Pick a template in seconds. No accounts, no setup.',
    code: 'npx blueprintkit init',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'Select your stack',
    description: 'Choose Next.js, NestJS, Expo, FastAPI, and more.',
    code: 'nextjs-tailwind',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ship immediately',
    description: 'Everything compiles, lint passes, and tests run.',
    code: 'npm run dev',
  },
];

export default function HowItWorks() {
  return (
    <section id="get-started" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Get started in <span className="gradient-text">three commands</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No magic. Just a clear, repeatable flow that teams can trust.
            </p>
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            quickstart
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-20 hidden h-0.5 w-full bg-gradient-to-r from-primary to-transparent lg:block" />
                )}

                <div className="relative rounded-2xl border border-border bg-card/70 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                  {/* Step number */}
                  <div className="mb-4 text-6xl font-bold text-primary/20">
                    {step.number}
                  </div>

                  <div className="mb-4 inline-flex rounded-lg bg-primary/15 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mb-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Code snippet */}
                  <div className="rounded-lg border border-border bg-background/60 p-4 font-mono text-sm">
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
