import Image from 'next/image';
import { getBeforeAfterImages } from '@/lib/images';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';

const images = getBeforeAfterImages('residential-air-duct-cleaning');

export default function BeforeAfterSection() {
  return (
    <section id="beforeafter" className="bg-background py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Camera size={16} className="text-text-secondary" />
            <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary">
              SEE THE DIFFERENCE
            </p>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            Before &amp; After
          </h2>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            {images?.before ? (
              <Image
                src={images.before}
                alt="Before cleaning"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-text-primary/80 to-text-primary/50 flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-white/60">Before</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-text-primary/80 text-white font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                Before
              </span>
            </div>
          </div>

          {/* Arrow between images */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent text-white items-center justify-center shadow-lg">
            <ArrowRight size={20} />
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            {images?.after ? (
              <Image
                src={images.after}
                alt="After cleaning"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent/80 to-accent/50 flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-white/60">After</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-white font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5">
                <Sparkles size={12} />
                After
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
