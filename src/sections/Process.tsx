import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description:
        'Deconstruct your ambition, identify market moats, and formalize product architecture.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'High-fidelity editorial layouts, tactile interaction states, and comprehensive design systems.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Bulletproof full-stack engineering with optimized frontend speed and scalable cloud APIs.',
    },
    {
      number: '04',
      title: 'Grow',
      description:
        'Continuous performance iteration, intelligent automations, and compounding feature release cycles.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-20">
          <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777] block mb-3">
            OUR PROCESS
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A0A0A] tracking-tight leading-tight">
            From wish
            <br />
            <span className="italic font-light">to reality.</span>
          </h2>
        </div>

        {/* Horizontal Process Steps + Far-Right Vertical Typography */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          
          {/* Four Process Steps: 10 columns on xl */}
          <div className="xl:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col justify-between pr-4">
                <div>
                  {/* Step Number */}
                  <span className="font-serif-editorial text-4xl sm:text-5xl text-[#0A0A0A] font-light block mb-4">
                    {step.number}
                  </span>

                  {/* Step Heading */}
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Short description */}
                  <p className="font-sans text-xs text-[#666666] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow (for steps 1, 2, 3 on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center absolute -right-4 top-6 text-neutral-300">
                    <ArrowRight size={18} strokeWidth={1} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Far-Right Vertical Typography: 2 columns on xl */}
          <div className="xl:col-span-2 hidden xl:flex flex-col justify-between border-l border-neutral-200 pl-8 h-full min-h-[220px]">
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-neutral-400 font-medium">
              TRAJECTORY
            </span>
            <div className="font-sans text-xs font-medium tracking-[0.25em] text-[#0A0A0A] uppercase space-y-3 leading-relaxed">
              <p>WISH.</p>
              <p>DESIGN.</p>
              <p>BUILD.</p>
              <p className="font-bold">HAPPEN.</p>
            </div>
            <div className="w-6 h-[1px] bg-black" />
          </div>

        </div>

      </div>
    </section>
  );
};
