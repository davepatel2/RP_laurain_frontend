// components/ServicesCarousel.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Carousel.module.css';


const slides = [
  {
    src: '/assets/gallerycommercial.png',
    alt: 'Commercial',
    link: '/services',
  },
  {
    src: '/assets/gallerymarina.png',
    alt: 'Marina',
    link: '/services',
  },
  {
    src: '/assets/portappraisalspic.JPG',
    alt: 'Port Appraisals',
    link: '/services',
  },
  {
    src: '/assets/residentialproperties.JPG',
    alt: 'Residential Properties',
    link: '/services',
  },
  {
    src: '/assets/specialpurposeprop.JPG',
    alt: 'Special Purpose Properties',
    link: '/services',
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.leftControl} onClick={prevSlide}>
        ‹
      </button>

      <div className={styles.slideWrapper}>
        {slides.map((slide, i) => (
          <div key={i} className={`${styles.slideContainer} ${i === index ? styles.active : ''}`}>
            <img
              src={slide.src}
              alt={slide.alt}
              className={styles.slide}
              onClick={() => handleClick(slide.link)}
            />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>{slide.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.rightControl} onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}
