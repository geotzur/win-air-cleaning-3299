import { getAreas } from '@/lib/data';

const areas = getAreas();

export default function AreasSection() {
  return (
    <section className="bg-surface py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            SERVICE AREAS
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            Serving All of California
          </h2>
        </div>

        {/* Area list - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {areas.map((area) => (
            <a
              key={area.slug}
              href={`/areas/${area.slug}/`}
              className="group flex items-center justify-between py-4 border-b border-border transition-all duration-300 hover:border-l-[3px] hover:border-l-secondary hover:pl-2"
            >
              <span className="font-heading font-semibold text-base text-text-primary transition-transform duration-300 group-hover:translate-x-2">
                {area.name}
              </span>
              <span className="font-heading font-medium text-sm text-primary flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                View Services
                <span className="inline-block">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
