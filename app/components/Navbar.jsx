'use client';

import Link from 'next/link';
import { useUser, UserButton, SignOutButton } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="hero-section__services-form">
      <div className="services-row">
        <Link href="/"       className="service-item">Home</Link>
        <Link href="/about"  className="service-item">About Us</Link>
        <Link href="/services" className="service-item">Services</Link>
        <Link href="/contact"  className="service-item">Contact</Link>
        <Link href="/clients" className='service-item'>Clients</Link>

        {isSignedIn ? (
          <>
            <Link href="/account" className="service-item">
              My Account
            </Link>
            {/* Clerk’s own user‐menu + sign‐out built in */}
            <UserButton />
          </>
        ) : (
          <Link href="/sign-in" className="service-item">
            My Account
          </Link>
        )}
      </div>
    </nav>
  );
}

