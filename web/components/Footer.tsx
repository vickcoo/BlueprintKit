'use client';

import { Github, Twitter, Terminal } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Templates', href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Roadmap', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'GitHub', href: 'https://github.com/yourusername/devkit' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername/devkit',
      icon: Github,
    },
    { name: 'Twitter', href: 'https://twitter.com/devkit', icon: Twitter },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DevKit</span>
            </div>
            <p className="mb-4 max-w-xs text-sm text-muted-foreground">
              Production-ready templates that save developers 4-8 hours per
              project.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevKit. All rights reserved.
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
