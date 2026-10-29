import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yosita Rodwattanakul | Full-Stack Software Developer',
  description:
    'Bangkok-based Computer Engineering student focused on full-stack software development. Explore my experience, projects, and skills across frontend, backend, and databases.',
  openGraph: {
    title: 'Yosita Rodwattanakul | Full-Stack Software Developer',
    description:
      'Yosita Rodwattanakul’s portfolio: full-stack software development, production projects, and experience across frontend, backend, and databases.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
