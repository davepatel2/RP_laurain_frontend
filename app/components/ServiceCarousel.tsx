'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/ServiceCarousel.module.css';

interface ServiceCarouselProps {
  images: string[];
}

export default function ServiceCarousel({ images }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.carouselContainer}>
      <button 
        className={`${styles.carouselButton} ${styles.prevButton}`} 
        onClick={prevSlide}
        aria-label="Previous image"
      >
        ‹
      </button>

      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex]}
          alt={`Service image ${currentIndex + 1}`}
          width={400}
          height={300}
          className={styles.carouselImage}
        />
      </div>

      <button 
        className={`${styles.carouselButton} ${styles.nextButton}`} 
        onClick={nextSlide}
        aria-label="Next image"
      >
        ›
      </button>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 