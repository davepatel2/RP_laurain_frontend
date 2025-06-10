// app/layout.tsx
import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/typography.css'
import '../styles/home.css'
import '../styles/auth.css'      // if you added auth.css

import { ClerkProvider } from '@clerk/nextjs'
import type { ReactNode } from 'react'

export const metadata = {
  title: "RP Laurain Next",
  description: "Your site with Clerk authentication",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
