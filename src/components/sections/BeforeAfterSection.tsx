import Image from 'next/image';
import { getBeforeAfterImages } from '@/lib/images';

const images = getBeforeAfterImages('residential-air-duct-cleaning');

export default function BeforeAfterSection() {
  return (
    <section id="beforeafter" className="bg-background py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            SEE THE DIFFERENCE
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            Before &amp; After
          </h2>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            {images?.before ? (
              <Image
                src={images.before}
                alt="Before cleaning"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-text-primary/80 to-text-primary/50 flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-white/60">Before</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="inline-block rounded-full bg-text-primary/80 text-white font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5">
                Before
              </span>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            {images?.after ? (
              <Image
                src={images.after}
                alt="After cleaning"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent/80 to-accent/50 flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-white/60">After</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="inline-block rounded-full bg-accent text-white font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5">
                After
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
