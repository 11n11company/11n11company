import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onOpenContactModal?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContactModal }) => {
  return (
    <section id="start-project" className="py-28 sm:py-36 bg-[#FAFAFA] border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Three-column horizontal composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Small label & Large Heading */}
          <div className="lg:col-span-5">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777] block mb-4">
              LET'S MAKE IT HAPPEN
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A0A0A] tracking-tight leading-[1.08]">
              Have an idea?
              <br />
              <span className="italic font-light">Let's build it.</span>
            </h2>
          </div>

          {/* MIDDLE COLUMN: Narrative & Button */}
          <div className="lg:col-span-4 flex flex-col items-start lg:px-4">
            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed font-normal mb-8 max-w-md">
              Whether it's a website, application, SaaS product or digital solution, we'd love to hear what you're imagining.
            </p>
            <button
              onClick={onOpenContactModal}
              className="group inline-flex items-center justify-center bg-[#0A0A0A] text-white px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.14em] hover:bg-neutral-800 transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* RIGHT COLUMN: Ideas. Built. Further. */}
          <div className="lg:col-span-3 flex lg:justify-end border-t lg:border-t-0 lg:border-l border-neutral-200 pt-8 lg:pt-0 lg:pl-10">
            <div className="font-serif-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-light leading-tight tracking-tight space-y-1">
              <p>Ideas.</p>
              <p className="italic">Built.</p>
              <p className="font-normal">Further.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
