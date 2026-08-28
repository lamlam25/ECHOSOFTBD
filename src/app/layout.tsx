import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ECHOSOFTBD — AI & Software Engineering',
  description:
    'AI-driven software solutions, intelligent systems, and research-focused technology company based in Bangladesh.',
  keywords: [
    'AI',
    'Software Engineering',
    'Machine Learning',
    'Web Development',
    'Bangladesh',
    'ECHOSOFTBD',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
