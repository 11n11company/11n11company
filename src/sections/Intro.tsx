import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Intro: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT AREA: 11:11 & Narrative */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Large 11:11 serif branding */}
              <span className="font-serif-editorial text-5xl sm:text-6xl text-[#0A0A0A] font-normal tracking-tight block mb-4">
                11:11
              </span>

              {/* Sub-label */}
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#777777] block mb-6">
                A MOMENT TO MAKE A WISH.
              </span>

              {/* Narrative description */}
              <p className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed font-normal mb-8 max-w-sm">
                Every idea starts as a wish. We turn that wish into something people can use, experience and remember.
              </p>
            </div>

            {/* Link: Our Story → */}
            <div className="pt-4">
              <a
                href="#philosophy"
                className="group inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-[#0A0A0A] hover:text-neutral-600 transition-colors"
              >
                <span>Our Story</span>
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* CENTER AREA: Large vertical divider & Quote */}
          <div className="lg:col-span-4 flex items-center relative lg:border-l lg:border-neutral-200 lg:pl-12 xl:pl-16">
            <div className="py-4">
              <span className="font-serif text-5xl sm:text-6xl text-neutral-300 block -mb-6 select-none">
                “
              </span>
              <blockquote className="font-serif-editorial text-3xl sm:text-4xl lg:text-[40px] text-[#0A0A0A] font-normal leading-[1.18] tracking-tight">
                Great things
                <br />
                <span className="italic font-light">begin with a simple wish.</span>
              </blockquote>
              <div className="w-10 h-[1px] bg-black mt-8" />
            </div>
          </div>

          {/* RIGHT AREA: Large monochrome rectangular image / editorial card */}
          <div className="lg:col-span-4 flex items-center">
            <div className="w-full aspect-[4/5] bg-neutral-100 border border-[#E5E5E5] relative overflow-hidden group shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="11:11 Architectural Monolith"
                className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Minimalist editorial caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 p-8 flex flex-col justify-end text-white">
                <span className="text-[9px] uppercase tracking-[0.25em] font-sans text-neutral-300">
                  ORIGIN & STRUCTURE
                </span>
                <p className="font-serif-editorial text-xl sm:text-2xl font-light mt-1">
                  Purposeful architecture for high-growth enterprises.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
