import React from "react";
import { useId } from "react";

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="py-20 lg:py-40 bg-black">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl shadow-lg overflow-hidden border border-neutral-800"
          >
            <Grid size={20} />
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-neutral-400 mt-2 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  { title: "Food and Beverage Catering", description: "Providing high-quality catering services for all events." },
  { title: "Protocol", description: "Ensuring smooth event protocols and guest management." },
  { title: "Food and Beverage Serving", description: "Offering professional serving staff for your events." },
  { title: "Entertainment", description: "Bringing top-tier entertainment to make your event unforgettable." },
  { title: "Venues", description: "Helping you find and book the perfect venue for any occasion." },
  { title: "Decor and Setup", description: "Transforming spaces with stunning decor and event setups." },
  { title: "Transport", description: "Providing reliable transportation solutions for your guests and crew." },
  { title: "Photography and Videography", description: "Capturing memories with professional photography and videography." },
];

export const Grid = ({ size = 20 }: { size?: number }) => {
  return (
    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-full w-full">
      <div className="absolute inset-0 bg-gradient-to-r opacity-10 dark:opacity-5 from-zinc-100/30 to-zinc-300/30 dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern width={size} height={size} />
      </div>
    </div>
  );
};

export const GridPattern = React.memo(({ width, height }: { width: number; height: number }) => {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse">
          <path d={`M0 ${height}V0H${width}`} fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
});
