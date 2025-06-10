import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/home.css';


import type { ReactNode } from 'react';

export const metadata = {
  title: 'R. P. Laurain & Associates',
  description: 'Professional real estate appraisal services',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
