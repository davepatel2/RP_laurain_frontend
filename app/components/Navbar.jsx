'use client';

import Link from 'next/link';


export default function Navbar() {
  

  return (
    <nav className="hero-section__services-form">
      <div className="services-row">
        <Link href="/"       className="service-item">Home</Link>
        <Link href="/services" className="service-item">Services</Link>
        <Link href="/clients" className='service-item'>Clients</Link>
        <Link href="/contact"  className="service-item">Contact</Link>
        <Link href="/about"  className="service-item">About Us</Link>
        
      </div>
    </nav>
  );
}