import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio of Edwin Muhoro',
  description:
    'Edwin Muhoro is a skilled and motivated website developer with over 2 years of experience in designing, developing, and maintaining websites. Proficient in tools like ReactJs, NextJs, Vue and Tailwind css',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Edwin Muhoro' }],
  creator: 'Edwin Muhoro',
  openGraph: {
    title: 'Portfolio of Edwin Muhoro',
    description:
      'Edwin Muhoro is a skilled and motivated website developer with 2 years of experience in designing, developing, and maintaining websites.',
    type: 'website',
    images: ['https://avatars.githubusercontent.com/u/106593301?v=4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio of Edwin Muhoro',
    description:
      'Edwin Muhoro is a skilled and motivated website developer with 2 years of experience in designing, developing, and maintaining websites.',
    images: ['https://avatars.githubusercontent.com/u/106593301?v=4'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
