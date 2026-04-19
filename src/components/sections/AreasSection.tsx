import { getAreas } from '@/lib/data';
import { getAreaImage } from '@/lib/images';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

const areas = getAreas();

export default function AreasSection() {
  return (
    <section className="bg-surface py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-text-secondary" />
            <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary">
              SERVICE AREAS
            </p>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            Serving All of California
          </h2>
        </div>

        {/* Area cards with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => {
            const areaImage = getAreaImage(area.slug);
            return (
              <a
                key={area.slug}
                href={`/areas/${area.slug}/`}
                className="group relative rounded-2xl overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary"
              >
                {/* Area image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {areaImage ? (
                    <Image
                      src={areaImage}
                      alt={area.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Area name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-bold text-lg text-white mb-1 flex items-center gap-1.5">
                      <MapPin size={16} className="text-accent flex-shrink-0" />
                      {area.name}
                    </h3>
                    <span className="font-heading font-medium text-sm text-white/80 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                      View Services
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
