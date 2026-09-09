import React from 'react';
import { Globe, Smartphone, Layers, Cpu, ArrowRight } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesData = [
    {
      icon: <Globe size={26} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'Web Experiences',
      description:
        'Bespoke digital flagships, brand platforms, and high-performance interactive websites engineered to leave lasting impressions.',
    },
    {
      icon: <Smartphone size={26} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'Mobile Applications',
      description:
        'Intuitive iOS and Android applications created with meticulous gesture design, fluid transitions, and rock-solid native architectures.',
    },
    {
      icon: <Layers size={26} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'SaaS Products',
      description:
        'Complex web platforms, dashboards, and scalable multi-tenant software systems designed for optimal user retention and velocity.',
    },
    {
      icon: <Cpu size={26} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'AI & Automation',
      description:
        'Intelligent agent workflows, custom LLM interfaces, and autonomous business processes that scale operational output effortlessly.',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAFA] border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777] block mb-3">
              SERVICES
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A0A0A] tracking-tight">
              What We Build
            </h2>
          </div>

          <div>
            <a
              href="#contact"
              className="group inline-flex items-center text-xs font-medium uppercase tracking-[0.16em] text-[#0A0A0A] hover:text-neutral-600 transition-colors pb-1 border-b border-black"
            >
              <span>Explore All Services</span>
              <ArrowRight
                size={14}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Exactly 4 Horizontally Arranged Cards on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onSelect={() => onSelectService?.(service.title)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
