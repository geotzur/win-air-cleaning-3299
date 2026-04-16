'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getServices } from '@/lib/data';
import { getServiceImage, getServiceIcon } from '@/lib/images';
import Image from 'next/image';

const services = getServices();

export default function ServicesSection() {
  return (
    <section className="relative bg-surface py-12 md:py-20 overflow-hidden">
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
        {/* Section heading */}
        <div className="mb-12">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            OUR SERVICES
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            Breathe Easier Today
          </h2>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[FreeMode, Pagination]}
          freeMode
          pagination={{ clickable: true }}
          slidesPerView={1.1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.3 },
          }}
          className="services-swiper !pb-12"
        >
          {services.map((service) => {
            const image = getServiceImage(service.slug);
            const icon = getServiceIcon(service.slug);

            return (
              <SwiperSlide key={service.slug}>
                <a
                  href={`/services/${service.slug}`}
                  className="group block w-[340px] max-w-full rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:border-2 hover:shadow-lg"
                >
                  {/* Image area - top 60% */}
                  <div className="relative aspect-[340/240] overflow-hidden">
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

                    {/* Icon badge */}
                    {icon && (
                      <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md z-10">
                        <img
                          src={icon}
                          alt=""
                          width={22}
                          height={22}
                          className="w-[22px] h-[22px]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text area - bottom 40% */}
                  <div className="p-6 pt-8">
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm text-text-secondary line-clamp-2 mb-4">
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
      </div>
    </section>
  );
}
