import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevKit - Scaffold Production-Ready Code in Seconds',
  description:
    'AI-powered templates that save developers 4-8 hours per project. Get production-ready Next.js, Express, and React Native starters instantly.',
  keywords: [
    'devkit',
    'code templates',
    'nextjs template',
    'express template',
    'react native template',
    'developer tools',
    'boilerplate',
    'scaffold',
  ],
  authors: [{ name: 'DevKit' }],
  openGraph: {
    title: 'DevKit - Scaffold Production-Ready Code in Seconds',
    description:
      'AI-powered templates that save developers 4-8 hours per project',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevKit - Scaffold Production-Ready Code in Seconds',
    description:
      'AI-powered templates that save developers 4-8 hours per project',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
