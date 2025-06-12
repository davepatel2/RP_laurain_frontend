// app/layout.tsx
import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/typography.css'
import '../styles/home.css'
import '../styles/auth.css'      // if you added auth.css
import '../styles/account.css';
import '../styles/contact.css'
import './globals.css'

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R. P. Laurain & Associates",
  description: "Professional real estate appraisal services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

