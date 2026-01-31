'use client';

import { useState } from 'react';
import { Mail, Github, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call - replace with actual waitlist API
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section id="waitlist" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-transparent p-12 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(239_84%_67%/0.2),transparent)]" />

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Start Building <span className="gradient-text">Faster Today</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join 1,000+ developers who are shipping faster with DevKit. Get
            early access and exclusive updates.
          </p>

          {/* Waitlist form */}
          <form onSubmit={handleSubmit} className="mx-auto mb-8 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-12 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl disabled:opacity-50"
              >
                {status === 'loading'
                  ? 'Joining...'
                  : status === 'success'
                    ? 'Joined!'
                    : 'Join Waitlist'}
                {status === 'idle' && (
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </div>
          </form>

          {/* Secondary CTA */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <span className="text-sm text-muted-foreground">or</span>
            <a
              href="https://github.com/yourusername/devkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Github className="h-5 w-5" />
              Star us on GitHub
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-background bg-primary/20" />
                <div className="h-8 w-8 rounded-full border-2 border-background bg-secondary/20" />
                <div className="h-8 w-8 rounded-full border-2 border-background bg-accent/20" />
              </div>
              <span>1,000+ developers</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="hidden sm:block">
              <span>4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
