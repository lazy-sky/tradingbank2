import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import '@/styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tradingbank2',
  description: 'This is tradingbank2 for vip users',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
