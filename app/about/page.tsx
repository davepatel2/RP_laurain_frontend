'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import '../../styles/about.css';

export default function AboutPage() {
  return (
    <div className="home-three">
      <section className="hero-section">
        <div className="hero-section__image">
          <Image
            src="/assets/galleryplane.JPEG"
            alt="Services Header"
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
              <h1 className="hero-section__company-name">R. P. LAURAIN <br /> & ASSOCIATES</h1>
              <p className="hero-section__incorporated">INCORPORATED</p>
              <p className="hero-section__tagline">APPRAISERS - ANALYSTS - CONSULTANTS</p>
            </div>
          </div>

          <Navbar />
        </div>
      </section>

      <section className="about-section container-xs">
        <div className="about-grid">
          <div className="about-card company-overview">
            <h2 className="text-title-lg">Company Overview</h2>
            <p>
              R. P. Laurain & Associates, Inc. was established in January 1969 for 
              the purpose of providing professional real estate appraisal services. 
              The company was incorporated in 1979. We are a full-service appraisal 
              firm with experience appraising single and multi-family residential, 
              commercial, industrial, vacant land, eminent domain appraisals, open 
              space/conservation, marinas, ports, airports, and special purpose properties.
            </p>
          </div>

          <div className="about-card our-expertise">
            <h2 className="text-title-lg">Our Expertise</h2>
            <p>
              The Principal and Senior Appraisers of the firm are Certified General 
              Appraisers in the State of California, also holding the MAI Designation 
              from the Appraisal Institute. The Principal and Senior Appraisers are 
              supported by associate appraiser, market research, and office staff.
            </p>
          </div>

          <div className="about-card our-clients">
            <h2 className="text-title-lg">Our Clients</h2>
            <p>
              Our primary client base consists of local, state and federal governmental 
              agencies, as well as law firms specializing in eminent domain matters. 
              Other clients include utility companies, right of way acquisition companies, 
              estate attorneys, accountants, developers, lending institutions, and individuals.
            </p>
          </div>

          <div className="about-card public-services">
            <h2 className="text-title-lg">Public Services</h2>
            <ul>
              <li>Eminent domain studies</li>
              <li>Street and freeway widening</li>
              <li>Bridge, grade separation, tunnel projects</li>
              <li>Railroad and utility corridor studies</li>
              <li>Flood control projects</li>
              <li>Public school and university expansion</li>
              <li>Housing and public loan programs</li>
              <li>Special purpose properties</li>
            </ul>
          </div>

          <div className="about-card private-services">
            <h2 className="text-title-lg">Private Services</h2>
            <ul>
              <li>Lending institution appraisals</li>
              <li>Insurance company valuations</li>
              <li>Estate tax and donation purposes</li>
              <li>Developer consultations</li>
              <li>Private subdivision studies</li>
              <li>Fractional interest studies</li>
              <li>Oil royalty valuations</li>
              <li>Conservation and mitigation studies</li>
            </ul>
          </div>

          <div className="about-card our-standards">
            <h2 className="text-title-lg">Our Standards</h2>
            <p>
              We prepare reports in accordance with:
            </p>
            <ul>
              <li>Uniform Standards of Professional Appraisal Practice (USPAP)</li>
              <li>Caltrans Manual</li>
              <li>State of California Land and Water Conservation Fund Manual</li>
              <li>Uniform Appraisal Standards for Federal Land Acquisitions</li>
              <li>FAA requirements</li>
              <li>State and Federal Uniform Relocation Assistance Acts</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}