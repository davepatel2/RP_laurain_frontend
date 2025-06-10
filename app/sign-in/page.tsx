// app/sign-in/page.tsx
'use client';
import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';
import '@/styles/auth.css';    // new

export default function SignInPage() {
  return (
    <div className="auth-page">
      <Image
        src="/assets/logotransparent 1.png"
        alt="R. P. Laurain & Associates Logo"
        width={200}
        height={100}
        className="auth-logo"
      />
      <div className="auth-container">
        <SignIn afterSignInUrl="/account" />
      </div>
    </div>
  );
}
