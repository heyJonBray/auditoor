import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // without a title, warpcast won't validate your frame
  title: 'The Growth Cult - Anti Rug System',
  description: 'in-frame token contract audits',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
