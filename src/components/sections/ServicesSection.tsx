'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getServices } from '@/lib/data';
import { getServiceImage } from '@/lib/images';
import Image from 'next/image';

const services = getServices();

export default function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(0);

  const total = services.length;
  const counterActive = String(active + 1).padStart(2, '0');
  const counterTotal = String(total).padStart(2, '0');

  return (
    <section className="relative bg-surface py-10 md:py-14 overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1A2538 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading + desktop controls row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-2">
              OUR SERVICES
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
              Breathe Easier Today
            </h2>
          </div>

          {/* Counter + arrows (desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-baseline gap-2 font-heading tabular-nums select-none">
              <span className="text-2xl font-extrabold text-primary">{counterActive}</span>
              <span className="text-xs text-text-secondary tracking-[0.2em] uppercase">of</span>
              <span className="text-base text-text-secondary">{counterTotal}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous service"
                className="services-prev w-12 h-12 rounded-full border-2 border-primary text-primary bg-white flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                ref={nextRef}
                type="button"
                aria-label="Next service"
                className="services-next w-12 h-12 rounded-full border-2 border-primary text-primary bg-white flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[FreeMode, Pagination, Navigation]}
          freeMode
          pagination={{ clickable: true, el: '.services-pagination' }}
          onInit={(swiper: SwiperType) => {
            // @ts-expect-error navigation types
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error navigation types
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={(s) => setActive(s.realIndex)}
          onProgress={(s) => setActive(s.activeIndex)}
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 16 },
            1024: { slidesPerView: 2.3, spaceBetween: 20 },
            1280: { slidesPerView: 2.8, spaceBetween: 20 },
          }}
          className="services-swiper !pb-2"
        >
          {services.map((service) => {
            const image = getServiceImage(service.slug);

            return (
              <SwiperSlide key={service.slug}>
                <a
                  href={`/services/${service.slug}`}
                  className="group block w-full rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  {/* Image area */}
                  <div className="relative aspect-[340/220] overflow-hidden">
                    {image ? (
                      <Image
                        src={image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
                    )}
                    {/* Gradient reveal on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Text area */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-1.5">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm text-text-secondary line-clamp-2 mb-3">
                      {service.short_description}
                    </p>
                    <span className="relative inline-block font-heading font-semibold text-sm text-primary">
                      Learn More
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Mobile controls: counter + arrows + dot pagination */}
        <div className="mt-6 flex flex-col items-center gap-4 md:hidden">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => prevRef.current?.click()}
              className="services-prev-mobile w-11 h-11 rounded-full border-2 border-primary text-primary bg-white flex items-center justify-center active:scale-95 transition-transform"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="flex items-baseline gap-2 font-heading tabular-nums select-none">
              <span className="text-xl font-extrabold text-primary">{counterActive}</span>
              <span className="text-[11px] text-text-secondary tracking-[0.2em] uppercase">of</span>
              <span className="text-sm text-text-secondary">{counterTotal}</span>
            </div>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => nextRef.current?.click()}
              className="services-next-mobile w-11 h-11 rounded-full border-2 border-primary text-primary bg-white flex items-center justify-center active:scale-95 transition-transform"
            >
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="services-pagination !static flex justify-center" />
        </div>

        {/* Desktop pagination dots */}
        <div className="services-pagination hidden md:flex !static justify-center mt-6" />
      </div>
    </section>
  );
}
