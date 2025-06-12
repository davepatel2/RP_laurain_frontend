'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import '../../styles/services.css';
import { useState } from 'react';

// Define interface for Service data
interface Service {
  id: string;
  title: string;
  content: string;
  imagePath: string;
}

const servicesData: Service[] = [
  {
    id: 'residential',
    title: 'Residential Property',
    content: `Residential properties appraised include single family, condominiums, own-your-own, townhouse, low and medium density multiple family, 100+ unit apartment complexes, custom homes, beachfront homes, bayfront properties, boat docks, mobile home parks, single resident occupancy (SRO) developments, vacant single family lot and acreage parcels, residential subdivisions, multiple family residential land parcels, affordable housing sites, and entitled developments.`,
    imagePath: '/assets/residentialproperties.JPG',
  },
  {
    id: 'commercial-industrial',
    title: 'Commercial and Industrial Property',
    content: `Commercial property appraisal studies have included single and multi-tenant retail, strip centers, shopping centers, low-rise and high-rise office buildings, medical offices, restaurants and fast-food developments, nightclubs, convenience stores, theaters, parking garages, automobile repair and service facilities, service stations, self-storage facilities, truck fueling and washing stations, car wash facilities, automobile sales, mixed-use properties, hotel and motel properties, various marina developments, and vacant land.

Industrial property appraisals have included warehouses, light and heavy manufacturing, business parks, distribution and transit facilities, food processing, cold storage, lumber yards, recycling centers, open storage, port properties, airport properties, vacant land, properties encumbered with oil and water injection wells, sites with soil contamination, and land fill properties.`,
    imagePath: '/assets/industrial.JPG',
  },
  {
    id: 'special-purpose',
    title: 'Special Purpose and Special Use Properties',
    content: `Appraisal services and valuation studies of public, quasi-public, special use, and non-profit facilities include, among others, seaport properties, airports, wetlands, tidelands, conservation land, river rights-of-way, reservoirs, utility and railroad corridors, flood control channels, San Onofre Nuclear facility, city hall buildings and civic center complexes, courthouses, libraries, fire and police stations, post offices, public parking structures, parks, public and private schools, adult learning centers, athletic facilities and gyms, bowling alleys, tennis centers, golf courses, playing fields, recreation sites, campgrounds, youth homes, after school facilities, daycare facilities, homeless shelters, hospitals, skilled nursing facilities, churches, meeting halls and lodges, and veteran facilities.`,
    imagePath: '/assets/specialpurposeprop.JPG',
  },
  {
    id: 'eminent-domain',
    title: 'Eminent Domain Appraisals',
    content: `Eminent domain appraisals require a special understanding of specific valuation methods and applicable State and Federal law as to the appropriate methods to be utilized in the appraisal process. This firm has extensive experience in both full and partial acquisition appraisal studies having worked with numerous public agencies, eminent domain attorneys, acquisition companies, engineering firms, and private property owners. This firm has been involved in eminent domain appraisal studies throughout Southern California for over 50 years, with a deep understanding of the appropriate methodologies to be utilized in a variety of eminent domain appraisal scenarios, and a strong knowledge of State and Federal Eminent Domain Code sections, case law, and applicable judicial precedents.

    Whether small single parcel acquisitions, or large 100+ multi-parcel acquisition projects such as freeway widenings, work on the California High Speed Rail in Central and Southern California, public school sites, utility corridors, mass transit subway projects, park expansion projects, bridge projects, etc., R.P. Laurain & Associates has the resources and experience to assist public agencies throughout the appraisal, review, and acquisition process, inclusive of expert witness testimony.

    Our areas of special expertise include, but are not limited to:

    Full Acquisition Analysis
    Residential, Commercial, Industrial
    Vacant land, Soil Contaminated Sites,
    Special Use, Non-Profit, Governmental,
    Remnant Land, Underlying Fee in Public Streets
    Encumbered Land, Mitigation/Open Space, etc.
    Partial Acquisition Analysis
    Valuation as Part of the Whole
    Valuation After the Taking
    Cost-to-Cure and Mitigation Studies
    Severance Damage Studies
    Compensable vs. Non-Compensable Items
    Benefit studies
    Easement Valuations
    Street, Highway, Freeway
    Access Denial Rights
    Surface rights
    Exclusive and Non-exclusive use
    Subsurface (pipeline, utility, drainage)
    Deep Tunnel Easements and Studies
    Drainage, storm drain, flood control
    Aerial and Avigation
    Temporary and Permanent Tieback
    Battered Piling
    De-watering wells
    Temporary Construction Easements
    Uneconomic Remainder Parcels
    Railroad and Corridor Valuations
    Transverse and Longitudinal Takings
    Nominal Underlying Fee in Public ROW
    Coordination with FF&E and Goodwill Appraisers
    Conservation and Mitigation Land Exchanges
    Inverse Condemnation
    Tenant Leasehold Studies`,
    imagePath: '/assets/emminent.JPG',
  },
  {
    id: 'port-appraisals',
    title: 'Port Appraisals',
    content: `For over 35 years, one of the areas of specialized expertise has included the appraisal of various international seaport and marine related properties, primarily along the West Coast, but involving port surveys across the United States. Appraisal studies of shipping industry terminal uses have included container, automobile, break bulk, dry bulk, general cargo, liquid bulk oil, liquid bulk fertilizer, private marine contractor terminal, and proposed oil terminals. Other port related appraisals have included oil tank farms, a peak electrical generating facility, railroad facilities, general "benchmark" studies, remnant land, flood control, utility, and road rights of way, etc. Port appraisal studied have included both fair market value estimates as well as fair market rent studies. This firm has also prepared numerous partial acquisition appraisal studies, and acted as the principal appraisal firm for the Port of Long Beach for both the Gerald Desmond Bridge Project and the Pier B On-Dock Rail Support Facility. Other major port acquisition projects have included significant assignments on the Alameda Corridor Project, a 20-mile long rail cargo expressway extending from Downtown Los Angeles to the Ports of Los Angeles and Long Beach. The Alameda Corridor project involved over 100 appraisals for the primary rail corridor, Anaheim Bridge, Pacific Coast Highway Grade Separation, Navy Way Grade Separation, and related sub-projects.`,
    imagePath: '/assets/portappraisalspic.JPG',
  },
  {
    id: 'marina-appraisals',
    title: 'Marina Appraisals',
    content: `Various marina related appraisal studies have been conducted, primarily on leased land, for the City of Long Beach, Port of Los Angeles, County of Los Angeles Department of Beaches and Harbor (Marina del Rey), City of Newport Beach, City of Huntington Beach, the City of Oceanside, Port of San Diego, as well as other public agencies and private parties. Marina related studies have included boat slips, a live-aboard rent study, yacht clubs, restaurant and retail uses, low rise and high rise office buildings, medical offices, hotels, open space and park parcels, dryboat storage, boat repair yards, ship chandlery, fuel docks, parking structures, portions of the Aquarium of the Pacific in Long Beach, etc. Appraisal studies have also been conducted regarding the rental value of tidelands property, as well as adjacent upland properties. Further, certain marina related studies have involved complex leased fee and leasehold studies of both land and water areas, inclusive of proposed development and renovation projects, percentage rent, minimum rent, and other ground lease analyses.`,
    imagePath: '/assets/gallerymarina.png',
  },
  {
    id: 'airport-appraisals',
    title: 'Airport Appraisals',
    content: `Airport properties are typically appraised for the purpose of determining the fair market rental value of the underlying land and/or building improvements, as part of airport/tenant lease renewals and negotiations. The primary valuation methodologies utilized in determining the fair ma`,
    imagePath: '/assets/galleryplane.png',
  },
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

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

      <section className="services-details-section">
        <div className="services-details-content">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="service-item-detail"
              style={{ backgroundImage: `url(${service.imagePath})` }}
            >
              <button 
                className="service-title-button" 
                onClick={() => toggleService(service.id)}
              >
                {service.title}
                <span className={`dropdown-icon ${openService === service.id ? 'open' : ''}`}>&#9660;</span>
              </button>
              {openService === service.id && (
                <div className="service-content-dropdown">
                  <p>{service.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
