'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import '../../styles/services.css';

export default function ServicesPage() {
  return (
    <div className="home-three">
      <section className="hero-section">
        <div className="hero-section__image">
          <Image
            src="/assets/gallerymarina.png"
            alt="Services Header"
            fill
            style={{ objectFit: 'cover' }}
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

      <section className="about-section container-xs services-layout">
        <div className="services-top-box">
          <h2 className="text-title-lg">Services</h2>
          <p className="text-body">
            R.P. Laurain and Associates has over 50 years of working with numerous public agencies in a wide variety of eminent domain, voluntary acquisition, disposition, rental value, bond financing, and related appraisal studies. Our experience has instilled in us the need for good public relations, diplomacy, and professionalism when interacting with property owners, tenants, attorneys, acquisition agents, and public agencies. The firm has a long and extensive history in working with local, state, and federal public agencies. Refer to the Clients page for a list of public agencies, attorneys, and right of way acquisition companies for whom appraisal services have been provided.
          </p>
        </div>

        <div className="services-bottom-row">
            <div className="services-box">
                <h3 className="text-subtitle">Property Types We Appraise</h3>
                <p className="text-body">
                We have experience in appraising virtually all types of properties including:
                </p>
                <ul className="services-list">
                <li>Single Family Residential</li>
                <li>Multiple Family Residential</li>
                <li>Single and Large Multi-Tenant Commercial</li>
                <li>Single and Large Multi-Tenant Industrial</li>
                <li>Mixed Use</li>
                <li>Vacant Land</li>
                <li>Special Purpose Private</li>
                <li>Special Purpose Governmental</li>
                <li>Corridors (Railroad, Flood Control, Utilities, etc.)</li>
                <li>Open Space</li>
                <li>Conservation and Mitigation Land</li>
                </ul>
            </div>

            <div className="services-box">
                <h3 className="text-subtitle">Specialized Appraisal Services</h3>
                <p className="text-body">
                We also have specialized experience in unique property valuations including:
                </p>
                <ul className="services-list">
                <li>Eminent Domain/Condemnation</li>
                <li>Expert Witness/Litigation Support</li>
                <li>Public Acquisitions and Dispositions</li>
                <li>Partial Acquisitions (State and Federal)</li>
                <li>Easement Valuations</li>
                <li>Severance Damage and Benefit Studies</li>
                <li>Public Bond Financing</li>
                <li>Quimby Park Studies</li>
                <li>Fair Political Practice Analyses</li>
                <li>Fractional Interest Studies</li>
                <li>Airport Appraisals</li>
                <li>Port Appraisals</li>
                <li>Marina Appraisals</li>
                <li>Economic Feasibility Studies</li>
                </ul>
            </div>
            </div>

      </section>
    </div>
  );
}
