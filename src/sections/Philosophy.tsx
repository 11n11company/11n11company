import React from 'react';
import { Compass, Code2, TrendingUp, Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      icon: <Compass size={24} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'Thoughtful Design',
      description:
        'Every pixel and layout choice stems from clarity, functional empathy, and timeless editorial restraint.',
    },
    {
      icon: <Code2 size={24} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'Strong Engineering',
      description:
        'Clean, maintainable, high-performance codebases built to endure heavy workloads and technical evolution.',
    },
    {
      icon: <TrendingUp size={24} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'Scalable Products',
      description:
        'Architectures engineered from day one to scale user volume, transactional load, and organizational complexity.',
    },
    {
      icon: <Sparkles size={24} strokeWidth={1.25} className="text-[#0A0A0A]" />,
      title: 'Intelligent Automation',
      description:
        'Leveraging modern AI systems and workflows to eradicate operational bottlenecks and compound business value.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#FAFAFA] border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* TOP SPLIT: Heading vs Paragraph with vertical divider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-20 border-b border-[#E5E5E5]">
          
          {/* Left Column: Small label & Large Heading */}
          <div className="lg:col-span-6">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777] block mb-4">
              MORE THAN DEVELOPMENT
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#0A0A0A] tracking-tight leading-[1.08]">
              We turn ideas into
              <br />
              <span className="italic font-light">digital businesses.</span>
            </h2>
          </div>

          {/* Center Vertical Divider (Desktop) */}
          <div className="hidden lg:block lg:col-span-1 h-32 w-[1px] bg-neutral-200 mx-auto" />

          {/* Right Column: Narrative paragraph */}
          <div className="lg:col-span-5">
            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              At 11:11 Company, we believe modern software should feel as bespoke as architectural design. We seamlessly unify aesthetic rigor, rigorous systems engineering, and scalable digital solutions to transform visionary concepts into durable, market-defining companies.
            </p>
          </div>

        </div>

        {/* BELOW: Four Evenly Spaced Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-20">
          {principles.map((item, idx) => (
            <div key={item.title} className="flex flex-col">
              {/* Line icon with subtle container */}
              <div className="w-12 h-12 mb-6 flex items-center justify-start text-[#0A0A0A]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif-editorial text-2xl text-[#0A0A0A] font-normal tracking-tight mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs text-[#666666] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
