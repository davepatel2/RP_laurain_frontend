'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import '../../styles/clients.css';
import { useState, useRef } from 'react';

interface City {
  name: string;
  county: string;
}

interface GroupedCities {
  [key: string]: City[];
}

// Define the city data structure with county information
const cityData: City[] = [
  { name: 'Alhambra', county: 'Los Angeles' },
  { name: 'Anaheim', county: 'Orange' },
  { name: 'Arcadia', county: 'Los Angeles' },
  { name: 'Artesia', county: 'Los Angeles' },
  { name: 'Arvin', county: 'Kern' },
  { name: 'Azusa', county: 'Los Angeles' },
  { name: 'Baldwin Park', county: 'Los Angeles' },
  { name: 'Beaumont', county: 'Riverside' },
  { name: 'Bell', county: 'Los Angeles' },
  { name: 'Bellflower', county: 'Los Angeles' },
  { name: 'Beverly Hills', county: 'Los Angeles' },
  { name: 'Bradbury', county: 'Los Angeles' },
  { name: 'Buena Park', county: 'Orange' },
  { name: 'Burbank', county: 'Los Angeles' },
  { name: 'Carlsbad', county: 'San Diego' },
  { name: 'Carson', county: 'Los Angeles' },
  { name: 'Cathedral City', county: 'Riverside' },
  { name: 'Cerritos', county: 'Los Angeles' },
  { name: 'Chino', county: 'San Bernardino' },
  { name: 'Chino Hills', county: 'San Bernardino' },
  { name: 'Claremont', county: 'Los Angeles' },
  { name: 'Colton', county: 'San Bernardino' },
  { name: 'Commerce', county: 'Los Angeles' },
  { name: 'Compton', county: 'Los Angeles' },
  { name: 'Corona', county: 'Riverside' },
  { name: 'Costa Mesa', county: 'Orange' },
  { name: 'Covina', county: 'Los Angeles' },
  { name: 'Cudahy', county: 'Los Angeles' },
  { name: 'Cypress', county: 'Orange' },
  { name: 'Diamond Bar', county: 'Los Angeles' },
  { name: 'Downey', county: 'Los Angeles' },
  { name: 'El Cajon', county: 'San Diego' },
  { name: 'El Monte', county: 'Los Angeles' },
  { name: 'El Segundo', county: 'Los Angeles' },
  { name: 'Gardena', county: 'Los Angeles' },
  { name: 'Garden Grove', county: 'Orange' },
  { name: 'Glendale', county: 'Los Angeles' },
  { name: 'Hawaiian Gardens', county: 'Los Angeles' },
  { name: 'Hawthorne', county: 'Los Angeles' },
  { name: 'Huntington Beach', county: 'Orange' },
  { name: 'Huntington Park', county: 'Los Angeles' },
  { name: 'Industry', county: 'Los Angeles' },
  { name: 'Inglewood', county: 'Los Angeles' },
  { name: 'Irwindale', county: 'Los Angeles' },
  { name: 'Lake Forest', county: 'Orange' },
  { name: 'Lakewood', county: 'Los Angeles' },
  { name: 'La Mirada', county: 'Los Angeles' },
  { name: 'La Palma', county: 'Orange' },
  { name: 'La Puente', county: 'Los Angeles' },
  { name: 'Lawndale', county: 'Los Angeles' },
  { name: 'Lomita', county: 'Los Angeles' },
  { name: 'Long Beach', county: 'Los Angeles' },
  { name: 'Los Alamitos', county: 'Orange' },
  { name: 'Los Angeles', county: 'Los Angeles' },
  { name: 'Lynwood', county: 'Los Angeles' },
  { name: 'Monrovia', county: 'Los Angeles' },
  { name: 'Monterey Park', county: 'Los Angeles' },
  { name: 'Murrieta', county: 'Riverside' },
  { name: 'Newport Beach', county: 'Orange' },
  { name: 'Norwalk', county: 'Los Angeles' },
  { name: 'Oceanside', county: 'San Diego' },
  { name: 'Ontario', county: 'San Bernardino' },
  { name: 'Orange', county: 'Orange' },
  { name: 'Palmdale', county: 'Los Angeles' },
  { name: 'Palm Desert', county: 'Riverside' },
  { name: 'Palm Springs', county: 'Riverside' },
  { name: 'Paramount', county: 'Los Angeles' },
  { name: 'Pasadena', county: 'Los Angeles' },
  { name: 'Pico Rivera', county: 'Los Angeles' },
  { name: 'Placentia', county: 'Orange' },
  { name: 'Pomona', county: 'Los Angeles' },
  { name: 'Rancho Palos Verdes', county: 'Los Angeles' },
  { name: 'Redondo Beach', county: 'Los Angeles' },
  { name: 'Riverside', county: 'Riverside' },
  { name: 'Rolling Hills', county: 'Los Angeles' },
  { name: 'Rolling Hills Estates', county: 'Los Angeles' },
  { name: 'Rosemead', county: 'Los Angeles' },
  { name: 'San Fernando', county: 'Los Angeles' },
  { name: 'San Jacinto', county: 'Riverside' },
  { name: 'San Juan Capistrano', county: 'Orange' },
  { name: 'Santa Ana', county: 'Orange' },
  { name: 'Santa Clarita', county: 'Los Angeles' },
  { name: 'Santa Fe Springs', county: 'Los Angeles' },
  { name: 'Santa Monica', county: 'Los Angeles' },
  { name: 'Seal Beach', county: 'Orange' },
  { name: 'Signal Hill', county: 'Los Angeles' },
  { name: 'South El Monte', county: 'Los Angeles' },
  { name: 'South Gate', county: 'Los Angeles' },
  { name: 'South Pasadena', county: 'Los Angeles' },
  { name: 'Temple City', county: 'Los Angeles' },
  { name: 'Tustin', county: 'Orange' },
  { name: 'Upland', county: 'San Bernardino' },
  { name: 'West Hollywood', county: 'Los Angeles' },
  { name: 'Westlake Village', county: 'Los Angeles' },
  { name: 'Whittier', county: 'Los Angeles' },
  { name: 'Wildomar', county: 'Riverside' },
];

export default function ClientsPage() {
  const [sortBy, setSortBy] = useState('alphabetical');
  const [selectedCounty, setSelectedCounty] = useState('');
  const countyRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to sort cities based on selected option
  const getSortedCities = () => {
    if (sortBy === 'alphabetical') {
      return [...cityData].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'county') {
      return [...cityData].sort((a, b) => {
        if (a.county === b.county) {
          return a.name.localeCompare(b.name);
        }
        return a.county.localeCompare(b.county);
      });
    }
    return cityData;
  };

  // Function to group cities by county and sort counties by number of cities
  const getCitiesByCounty = (): GroupedCities => {
    const sortedCities = getSortedCities();
    const groupedCities = sortedCities.reduce((acc: GroupedCities, city) => {
      if (!acc[city.county]) {
        acc[city.county] = [];
      }
      acc[city.county].push(city);
      return acc;
    }, {});

    // Sort counties by number of cities (descending)
    const sortedCounties = Object.entries(groupedCities).sort((a, b) => b[1].length - a[1].length);
    return Object.fromEntries(sortedCounties);
  };

  // Function to split cities into columns for alphabetical view
  const getAlphabeticalColumns = () => {
    const sortedCities = getSortedCities();
    const columnSize = Math.ceil(sortedCities.length / 3);
    return [
      sortedCities.slice(0, columnSize),
      sortedCities.slice(columnSize, columnSize * 2),
      sortedCities.slice(columnSize * 2)
    ];
  };

  // Function to handle jump to county
  const handleJumpToCounty = (county: string) => {
    setSelectedCounty(county);
    const element = countyRefs.current[county];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get unique counties for the jump-to dropdown
  const counties = Array.from(new Set(cityData.map(city => city.county))).sort();

  return (
    <div className="home-three">
      <section className="hero-section">
        <div className="hero-section__image">
          <Image
            src="/assets/backgroundbridge.png"
            alt="Clients Header"
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

      <section className="clients-section container-xs">
        <div className="clients-content">
          <h2 className="text-title-lg">Our Clients</h2>
          <p className="clients-intro">
            We are proud to serve numerous cities and municipalities throughout California. 
            Our extensive experience in public sector appraisals has made us a trusted partner 
            for many local governments.
          </p>

          <div className="sort-controls">
            <div className="sort-group">
              <label htmlFor="sort-select">Sort by:</label>
              <select 
                id="sort-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="alphabetical">Alphabetical</option>
                <option value="county">By County</option>
              </select>
            </div>

            {sortBy === 'county' && (
              <div className="sort-group">
                <label htmlFor="jump-to">Jump to County:</label>
                <select
                  id="jump-to"
                  value={selectedCounty}
                  onChange={(e) => handleJumpToCounty(e.target.value)}
                  className="sort-select"
                >
                  <option value="">Select a county</option>
                  {counties.map((county) => (
                    <option key={county} value={county}>
                      {county} County
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          {sortBy === 'alphabetical' ? (
            <div className="cities-grid">
              {getAlphabeticalColumns().map((column, index) => (
                <div key={index} className="city-column">
                  <h3 className="column-title">
                    {index === 0 ? 'Cities A - H' : index === 1 ? 'Cities I - P' : 'Cities R - W'}
                  </h3>
                  <ul className="city-list">
                    {column.map((city) => (
                      <li key={city.name}>City of {city.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="counties-grid">
              {Object.entries(getCitiesByCounty()).map(([county, cities]) => (
                <div 
                  key={county} 
                  className="county-section"
                  ref={(el) => { countyRefs.current[county] = el; }}
                >
                  <h3 className="county-title">
                    {county} County
                    <span className="city-count">({cities.length} cities)</span>
                  </h3>
                  <ul className="city-list">
                    {cities.map((city) => (
                      <li key={city.name}>City of {city.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 