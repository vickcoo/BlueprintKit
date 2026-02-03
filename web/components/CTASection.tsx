'use client';

import { ArrowUpRight, Github, Terminal } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-card/70 p-10 text-left shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_60%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_55%)]" />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                ready to ship
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Start with a stack that is already production-ready.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                BlueprintKit is open-source, actively maintained, and built for
                teams who want zero surprises in week one.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-primary/30"
                >
                  Run the CLI
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/vickcoo/BlueprintKit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-border p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                install
              </div>
              <div className="mt-4 space-y-3 rounded-2xl border border-border bg-background/70 p-4 font-mono text-sm text-foreground/90">
                <div>
                  <span className="text-accent">$</span> npx blueprintkit init
                </div>
                <div>
                  <span className="text-accent">$</span> cd my-project
                </div>
                <div>
                  <span className="text-accent">$</span> npm run dev
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Works on macOS, Windows, and Linux. Node 16+ required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
