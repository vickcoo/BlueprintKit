'use client';

import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,hsl(239_84%_67%/0.2),transparent)]" />

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm">
          <Terminal className="h-4 w-4" />
          <span>Production-ready templates for modern developers</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Scaffold Production-Ready Code in{' '}
          <span className="gradient-text">Seconds, Not Hours</span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
          AI-powered templates that save developers{' '}
          <span className="font-semibold text-accent">4-8 hours</span> per
          project
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-lg font-semibold transition-all hover:bg-card/80"
          >
            View Templates
          </a>
        </div>

        {/* Terminal Demo */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                terminal
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-2">
                <span className="text-accent">$</span>{' '}
                <span className="text-primary">npx @devkit/cli init</span>
              </div>
              <div className="mb-4 text-muted-foreground">
                <div>✓ Select template: Next.js + Tailwind CSS</div>
                <div>✓ Installing dependencies...</div>
                <div>✓ Setting up project structure...</div>
                <div className="mt-2 text-accent">
                  Done! Your project is ready in 32 seconds.
                </div>
              </div>
              <div className="mb-2">
                <span className="text-accent">$</span>{' '}
                <span className="text-foreground">cd my-project</span>
              </div>
              <div>
                <span className="text-accent">$</span>{' '}
                <span className="text-foreground">npm run dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
