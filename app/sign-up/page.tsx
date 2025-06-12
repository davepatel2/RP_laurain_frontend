// app/sign-up/page.tsx
'use client';
import Image from 'next/image';
import { SignUp } from '@clerk/nextjs';
import '@/styles/auth.css';

export default function SignUpPage() {
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
        <SignUp afterSignInUrl="/account" />
      </div>
    </div>
  );
}
