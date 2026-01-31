'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out DevKit',
    features: [
      '10 generations per month',
      'Access to all templates',
      'Community support',
      'Basic customization',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19.99',
    period: '/month',
    description: 'For professional developers',
    features: [
      'Unlimited generations',
      'Priority support',
      'Advanced AI customization',
      'Private templates',
      'Early access to new features',
    ],
    cta: 'Join Waitlist',
    highlighted: true,
    badge: 'Coming Soon',
  },
];

export default function Pricing() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? 'border-primary bg-card shadow-xl shadow-primary/20'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-2 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all ${
                  plan.highlighted
                    ? 'gradient-bg text-white shadow-lg hover:shadow-xl'
                    : 'border border-border bg-background hover:bg-background/80'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All plans include access to community templates and regular updates
        </p>
      </div>
    </section>
  );
}
