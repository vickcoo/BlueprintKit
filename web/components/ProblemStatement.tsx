'use client';

import { Clock, Copy, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Spending hours setting up the same stack',
    description:
      'Every new project starts with 4-8 hours of boilerplate setup: routing, auth, database, styling, tooling...',
  },
  {
    icon: Copy,
    title: 'Copy-pasting config files between projects',
    description:
      'Manually copying ESLint, Prettier, TypeScript configs and hoping you didn\'t miss something important.',
  },
  {
    icon: AlertTriangle,
    title: 'Fighting with package versions',
    description:
      'Dependency hell: packages that don\'t work together, outdated tutorials, breaking changes.',
  },
];

export default function ProblemStatement() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Stop Wasting Time on{' '}
            <span className="gradient-text">Boilerplate</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Developers spend 40% of their time on setup and configuration
            instead of building features.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
