'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from './components/Navbar';
import GalleryCarousel from './components/GalleryCarousel'; // adjust path if needed


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>R. P. Laurain & Associates</title>
        <meta
          name="description"
          content="Professional real estate appraisal services by R. P. Laurain & Associates Inc."
        />
      </Head>

      <div className="home-three">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div suppressHydrationWarning>
            {mounted && (
              <video
                className="hero-section__video"
                muted
                autoPlay
                loop
                playsInline
              >
                <source src="/assets/backgroundvideo.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
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

            {/* ✅ Replaced nav links with component */}
            <Navbar />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section container-xs">
          <div className="main__midsection__row_three">
            <div className="about-section__info">
              <div className="about-section__text">
                <p>
                  R. P. Laurain & Associates, Inc. was established in January
                  1969 for the purpose of providing professional real estate
                  appraisal services. The company was incorporated in 1979. R.
                  P. Laurain & Associates is a full-service appraisal firm with
                  experience appraising single and multi-family residential,
                  commercial, industrial, vacant land, eminent domain
                  appraisals, open space/conservation, marinas, ports, airports,
                  and special purpose properties.
                  <br />
                  <br />
                  The Principal and Senior Appraisers of the firm are Certified
                  General Appraisers in the State of California, also holding
                  the MAI Designation from the Appraisal Institute. The
                  Principal and Senior Appraisers are supported by associate
                  appraiser, market research, and office staff.
                </p>
              </div>
              <div className="about-section__address-box">
                <div className="address-content">
                  <p className="about-section__address">
                    <span className="address-line">
                      3353 LINDEN AVENUE, SUITE 200
                    </span>
                    <br />
                    <span className="address-line">LONG BEACH, CA 90807</span>
                    <br />
                    <span className="address-line">
                      TELEPHONE: (562) 426-0477
                    </span>
                    <br />
                    <span className="address-line">
                      FACSIMILE: (562) 988-2927
                    </span>
                    <br />
                    <span className="address-line">
                      EMAIL: RPLA@RPLAURAIN.COM
                    </span>
                    <br />
                    <span className="address-line">
                      HOURS: M-F 8 AM - 5 PM (PST)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <GalleryCarousel />
        

        {/* CLIENT OVERVIEW */}
        <section className="client-overview container-xs">
          <div className="main__midsection__row_three">
            <h2 className="client-overview__title">Client Overview</h2>
            <p className="client-overview__description">
              Our primary client base consists of city, county, state and
              federal governmental agencies, inclusive of transit authorities,
              port authorities, airports, quasi-public utility companies,
              conservation agencies. Other clients include right-of-way
              acquisition companies, law firms specializing in eminent domain
              matters, estate attorneys, private developers, accountants,
              lending institutions, and individuals.
              <br />
              <br />
              Real estate appraisal and valuation consultation services
              conducted for public purposes include eminent domain studies,
              street and freeway widening, bridge, grade separation, tunnel,
              subway, railroad, utility corridor, flood control and related
              projects; partial acquisition and easement valuations; complex
              severance damage and benefits studies; leasing/rental of
              publicly-owned properties; public school, college, and university
              expansion projects; relocation studies; housing and public loan
              programs; Navy housing; senior housing public bond measures;
              special purpose properties; Quimby Act park fee studies; Fair
              Political Practices Commission analyses; budgetary studies; and
              transfers (exchanges) of properties between public agencies.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
