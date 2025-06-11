// app/contact/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import '@/styles/contact.css';   // make sure this is in your global imports

export default function ContactPage() {
  return (
    <div className="home-three">

      {/* ——— Hero section (unchanged) ——— */}
      <section className="hero-section">
        <div className="hero-section__video">
          <Image
            src="/assets/gallerymarina.png"
            alt="Contact Header"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="hero-section__overlay">
          <Image
            src="/assets/logotransparent 1.png"
            alt="Company Logo"
            className="hero-section__logo"
            width={200}
            height={100}
            priority
          />

          <div className="hero-section__top-bar">
            <div className="hero-section__main-text">
              <h1 className="hero-section__company-name">
                R. P. LAURAIN <br /> & ASSOCIATES
              </h1>
              <p className="hero-section__incorporated">INCORPORATED</p>
              <p className="hero-section__tagline">
                APPRAISERS - ANALYSTS - CONSULTANTS
              </p>
            </div>
          </div>

          <Navbar />
        </div>
      </section>

      {/* ——— Contact details below hero ——— */}
      <section className="contact-section">
        <div className="contact-details">
          <p>3353 LINDEN AVENUE, SUITE 200</p>
          <p>LONG BEACH, CALIFORNIA 90807</p>
          <p>TELEPHONE: (562) 426-0477</p>
          <p>FACSIMILE: (562) 988-2927</p>
          <p>
            EMAIL:&nbsp;
            <a href="mailto:RPLA@RPLAURAIN.COM" className="contact-link">
              RPLA@RPLAURAIN.COM
            </a>
          </p>
          <p>HOURS: M-F 8 AM – 5 PM</p>
        </div>
      </section>
    </div>
  );
}
