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
        <div className="hero-section__image">
          <Image
            src="/assets/emminent.JPG"
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

      <section className="contact-section container-xs">
        <div className="contact-container">
          <div className="contact-card">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-details">
              <div className="contact-info">
                <div className="contact-address">
                  <h3>Office Location</h3>
                  <p>3353 LINDEN AVENUE, SUITE 200</p>
                  <p>LONG BEACH, CALIFORNIA 90807</p>
                </div>
                
                <div className="contact-communication">
                  <h3>Get in Touch</h3>
                  <p>TELEPHONE: <a href="tel:+15624260477" className="contact-link">(562) 426-0477</a></p>
                  <p>FACSIMILE: (562) 988-2927</p>
                  <p>
                    EMAIL:&nbsp;
                    <a href="mailto:RPLA@RPLAURAIN.COM" className="contact-link">
                      RPLA@RPLAURAIN.COM
                    </a>
                  </p>
                </div>

                <div className="contact-hours">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday</p>
                  <p>8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
