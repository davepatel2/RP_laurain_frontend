'use client';                     //  needed because Swiper touches the DOM

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Put every gallery image you want to show here.
// They live in /public/assets so we can reference them by URL only.
const slides = [
  { src: '/assets/gallerycommercial.png', alt: 'Cold-storage facility' },
  { src: '/assets/gallerymarina.png',      alt: 'Marina' },
  { src: '/assets/galleryplane.jpeg',      alt: 'Private-jet hangar' },
];

export default function GalleryCarousel() {
  return (
    <section className="gallery-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation          // adds ‹   › arrows
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        {slides.map(({ src, alt }) => (
          <SwiperSlide key={src}>
            {/* ⭐ Keeps a 16:9 box that scales. Change padding-top for another ratio. */}
            <div className="slide-wrapper">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
